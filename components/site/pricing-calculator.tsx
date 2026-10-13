"use client";

import { useState } from "react";
import { CALENDLY_URL } from "@/lib/calendly";

// Ported from the client's hla_pricing_calculator_public.html.
// Prices, multipliers, and rounding must stay in sync with that file.
// The page hero carries the "Build Your Estimate" title and intro copy.

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  once?: boolean;
}

interface ServiceGroup {
  title: string;
  subtitle: string;
  services: Service[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Bookkeeping & Reporting",
    subtitle: "Recurring monthly · the foundation everything else builds on",
    services: [
      { id: "hybrid", name: "Hybrid bookkeeping", description: "Cash basis with AP/AR on accrual", price: 720 },
      { id: "accrual", name: "Full accrual bookkeeping", description: "Complete accrual-basis books", price: 1120 },
      { id: "mrep", name: "Monthly reporting", description: "P&L, Balance Sheet, Cash Flow", price: 400 },
      { id: "qrep", name: "Quarterly reporting & analysis", description: "Deeper quarterly review + insights", price: 500 },
      { id: "ap", name: "Accounts Payable management", description: "Bill processing & vendor payments", price: 560 },
      { id: "ar", name: "Accounts Receivable management", description: "Invoicing & collections", price: 560 },
    ],
  },
  {
    title: "Controller Services",
    subtitle: "Recurring · oversight, systems, and financial control",
    services: [
      { id: "close", name: "Monthly controller & close", description: "Month-end close and oversight", price: 960 },
      { id: "ic", name: "Internal controls", description: "Design & maintain controls", price: 640 },
      { id: "cost", name: "Cost accounting", description: "Job/product costing, COGS", price: 720 },
      { id: "kpi", name: "KPI benchmarking", description: "Metrics tracking & benchmarks", price: 500 },
      { id: "wcheck", name: "Weekly controller check-in", description: "30-min weekly review call", price: 480 },
    ],
  },
  {
    title: "CFO Advisory",
    subtitle: "Recurring · strategy, forecasting, and capital",
    services: [
      { id: "fcast", name: "Cash forecasting", description: "Rolling cash flow projections", price: 720 },
      { id: "budget", name: "Budgeting & forecasting", description: "Annual budget + variance", price: 800 },
      { id: "cap", name: "Capital raising support", description: "Fundraising & debt prep", price: 1200 },
      { id: "model", name: "Financial modeling", description: "Custom models & scenarios", price: 960 },
      { id: "adv", name: "General advisory", description: "Ongoing strategic support", price: 640 },
    ],
  },
  {
    title: "Compliance",
    subtitle: "Recurring · sales tax and specialized reporting",
    services: [
      { id: "salestax", name: "Sales tax management", description: "Multi-state sales/use tax", price: 480 },
      { id: "nonprofit", name: "Nonprofit / fund accounting", description: "GAAP fund accounting", price: 720 },
    ],
  },
  {
    title: "One-Time Projects",
    subtitle: "Setup, cleanup, and project work billed once",
    services: [
      { id: "cleanup", name: "Cleanup", description: "Bring neglected books current", price: 1760, once: true },
      { id: "setup", name: "Software setup (QBO/Xero)", description: "COA, classes, locations", price: 720, once: true },
      { id: "training", name: "Software training", description: "Team training session", price: 500, once: true },
      { id: "onboard", name: "Controller onboarding", description: "Systems foundation setup", price: 1600, once: true },
      { id: "c2a", name: "Cash-to-accrual conversion", description: "Convert basis of accounting", price: 1440, once: true },
      { id: "auditready", name: "Audit-ready package", description: "Prep books to survive an audit", price: 1600, once: true },
      { id: "dd", name: "Due diligence support", description: "M&A / investment review", price: 4800, once: true },
      { id: "refi", name: "Debt refinancing & restructuring", description: "Secure lower rates / better repayment terms", price: 3500, once: true },
    ],
  },
];

const ALL_SERVICES = SERVICE_GROUPS.flatMap((group) => group.services);

const REVENUE_OPTIONS = [
  { value: 1000000, label: "$500K – $1.5M" },
  { value: 3000000, label: "$1.5M – $5M" },
  { value: 7500000, label: "$5M – $10M" },
];

const EMPLOYEE_OPTIONS = [
  { value: 3, label: "1 – 5" },
  { value: 10, label: "6 – 15" },
  { value: 22, label: "16 – 30" },
  { value: 40, label: "31 +" },
];

const MAX_ENTITIES = 8;
const MAX_VERTICALS = 6;

function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function Stepper({
  label,
  value,
  max,
  onChange,
}: {
  label: string;
  value: number;
  max: number;
  onChange: (value: number) => void;
}) {
  const buttonClass =
    "w-9 h-9 flex items-center justify-center text-lg text-black hover:bg-black/5 transition-colors disabled:text-black/25 disabled:hover:bg-transparent";
  return (
    <div className="flex items-center border border-black/15 rounded-md overflow-hidden shrink-0">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        disabled={value <= 1}
        className={buttonClass}
        aria-label={`Decrease ${label}`}
      >
        −
      </button>
      <span
        className="w-10 h-9 flex items-center justify-center text-sm font-normal text-black border-x border-black/15"
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className={buttonClass}
        aria-label={`Increase ${label}`}
      >
        +
      </button>
    </div>
  );
}

function Switch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full shrink-0 transition-colors ${
        checked ? "bg-bg" : "bg-black/15"
      }`}
    >
      <span
        className={`absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}

const selectClass =
  "appearance-none bg-white border border-black/15 rounded-md pl-3 pr-9 py-2 text-sm font-light text-black min-w-[140px] shrink-0 cursor-pointer bg-no-repeat bg-[right_12px_center] bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath fill='%23000000' d='M5 6L0 0h10z'/%3E%3C/svg%3E\")]";

export default function PricingCalculator() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [entities, setEntities] = useState(1);
  const [verticals, setVerticals] = useState(1);
  // Collected for the discovery call; does not change the estimate (matches source calculator)
  const [revenue, setRevenue] = useState(REVENUE_OPTIONS[0].value);
  const [employees, setEmployees] = useState(EMPLOYEE_OPTIONS[0].value);
  const [consolidations, setConsolidations] = useState(false);
  const [internalStaff, setInternalStaff] = useState(false);

  let multiplier = 1;
  multiplier += (entities - 1) * 0.35;
  multiplier += (verticals - 1) * 0.15;
  if (consolidations) multiplier += 0.25;
  if (employees >= 16) multiplier += 0.15;
  if (internalStaff) multiplier -= 0.1;
  multiplier = Math.max(0.85, multiplier);

  let monthly = 0;
  let oneTime = 0;
  for (const service of ALL_SERVICES) {
    if (!selected[service.id]) continue;
    if (service.once) oneTime += service.price;
    else monthly += service.price * multiplier;
  }

  const monthlyLow = Math.round(monthly / 50) * 50;
  const monthlyHigh = Math.round((monthly * 1.25) / 50) * 50;

  const toggle = (id: string) =>
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

  const factorRow = "flex items-center justify-between gap-4 py-3 border-b border-black/10 last:border-b-0";
  const factorLabel = "text-sm font-normal text-black";
  const factorSub = "text-xs font-light text-black/50 mt-0.5";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 lg:gap-16">
      {/* Selections */}
      <div className="space-y-9">
        {SERVICE_GROUPS.map((group) => (
          <div key={group.title}>
            <h2 className="text-lg font-normal text-black">{group.title}</h2>
            <p className="text-xs font-light text-black/50 mt-0.5 mb-4">
              {group.subtitle}
            </p>
            <div className="space-y-2">
              {group.services.map((service) => {
                const on = !!selected[service.id];
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggle(service.id)}
                    aria-pressed={on}
                    className={`w-full flex items-start gap-3 text-left rounded-md border px-4 py-3 transition-colors ${
                      on
                        ? "border-bg bg-[#F2F6F5]"
                        : "border-black/10 bg-white hover:border-bg/50"
                    }`}
                  >
                    <span
                      className={`mt-0.5 w-[18px] h-[18px] rounded-[5px] border flex items-center justify-center shrink-0 transition-colors ${
                        on ? "bg-bg border-bg" : "border-black/20"
                      }`}
                    >
                      {on && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-normal text-black leading-snug">
                        {service.name}
                      </span>
                      <span className="hidden sm:block text-xs font-light text-black/55 mt-0.5 leading-relaxed">
                        {service.description}
                      </span>
                    </span>
                    <span className="text-sm font-normal text-bg whitespace-nowrap ml-2 mt-px">
                      {service.once
                        ? money(service.price)
                        : `${money(service.price)}/mo`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Complexity Factors */}
        <div>
          <h2 className="text-lg font-normal text-black">
            Business Complexity
          </h2>
          <p className="text-xs font-light text-black/50 mt-0.5 mb-2">
            These adjust the estimate across all selected services
          </p>

          <div className={factorRow}>
            <div>
              <div className={factorLabel}>Legal entities</div>
              <div className={factorSub}>Companies needing books maintained</div>
            </div>
            <Stepper label="legal entities" value={entities} max={MAX_ENTITIES} onChange={setEntities} />
          </div>

          <div className={factorRow}>
            <label htmlFor="calc-revenue" className={factorLabel}>
              Annual revenue
            </label>
            <select
              id="calc-revenue"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className={selectClass}
            >
              {REVENUE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={factorRow}>
            <label htmlFor="calc-employees" className={factorLabel}>
              Employees
            </label>
            <select
              id="calc-employees"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className={selectClass}
            >
              {EMPLOYEE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={factorRow}>
            <div>
              <div className={factorLabel}>Consolidations</div>
              <div className={factorSub}>Multiple entities that roll up together</div>
            </div>
            <Switch label="Consolidations" checked={consolidations} onChange={setConsolidations} />
          </div>

          <div className={factorRow}>
            <div className={factorLabel}>Business divisions / verticals</div>
            <Stepper label="business divisions" value={verticals} max={MAX_VERTICALS} onChange={setVerticals} />
          </div>

          <div className={factorRow}>
            <div>
              <div className={factorLabel}>Internal accounting staff</div>
              <div className={factorSub}>Someone in-house assists with records</div>
            </div>
            <Switch label="Internal accounting staff" checked={internalStaff} onChange={setInternalStaff} />
          </div>
        </div>
      </div>

      {/* Result - sticks beside the selections on desktop */}
      <div className="lg:sticky lg:top-28 self-start">
        <div className="rounded-lg bg-bg text-white p-6 md:p-7" aria-live="polite">
          <p className="text-xs font-light uppercase tracking-wider text-white/50 mb-3">
            Estimated Monthly
          </p>
          <p className="text-3xl md:text-4xl font-extralight tracking-tight text-cream leading-none mb-2">
            {monthly > 0 ? `${money(monthlyLow)} – ${money(monthlyHigh)}` : "$0"}
          </p>
          <p className="text-xs font-light text-white/50 mb-5">
            per month, recurring
          </p>
          {oneTime > 0 && (
            <p className="text-sm font-light text-white/75 pt-4 mb-5 border-t border-white/10">
              Plus one-time:{" "}
              <strong className="font-normal text-white">
                {money(oneTime)} – {money(oneTime * 1.2)}
              </strong>
            </p>
          )}
          <div className="border-t border-white/10 pt-4 mb-6">
            <p className="text-xs font-light text-white/55 leading-relaxed">
              This is a directional estimate based on your selections. Final
              pricing is confirmed on a discovery call. Income tax and audit
              work are referred to trusted partners, not billed here.
            </p>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-accent text-black rounded-pill py-3 text-sm font-normal hover:brightness-95 transition-all inline-flex items-center justify-center"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </div>
  );
}
