import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Accounting Services | Accrual Bookkeeping & Controller | HLA",
  },
  description:
    "Higher Level Accounting offers accrual-based bookkeeping, controller insights, and compliance services. Get financial clarity that drives smart growth.",
  keywords:
    "accrual accounting services, controller services, bookkeeping services, compliance management, tax preparation, financial audit, strategic financial planning, SaaS accounting, agency accounting, cannabis accounting",
  openGraph: {
    title: "Accounting Services | Accrual Bookkeeping & Controller | HLA",
    description:
      "Higher Level Accounting offers accrual-based bookkeeping, controller insights, and compliance services. Get financial clarity that drives smart growth.",
    url: "https://higherlevelaccounting.co/services",
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
    title: "Accounting Services | Accrual Bookkeeping & Controller | HLA",
    description:
      "Higher Level Accounting offers accrual-based bookkeeping, controller insights, and compliance services. Get financial clarity that drives smart growth.",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelaccounting.co/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
