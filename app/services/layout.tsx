import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Services | Higher Level Accounting - Controller-Level Financial Services",
  description:
    "Comprehensive accounting services including accrual-based bookkeeping, controller-level oversight, compliance management, strategic planning, and specialized services for SaaS companies, agencies, and regulated retailers.",
  keywords:
    "accrual accounting services, controller services, bookkeeping services, compliance management, tax preparation, financial audit, strategic financial planning, SaaS accounting, agency accounting, cannabis accounting",
  openGraph: {
    title: "Accounting Services | Higher Level Accounting",
    description:
      "Accrual-based bookkeeping, controller-level services, compliance & risk management, and strategic financial planning for growth-minded businesses.",
    url: "https://higherlevelacct.com/services",
    siteName: "Higher Level Accounting",
    type: "website",
    images: [
      {
        url: "/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Higher Level Accounting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting Services | Higher Level Accounting",
    description:
      "Comprehensive controller-level accounting services for SaaS, agencies, and regulated industries.",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelacct.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
