import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Financial Insights & Resources | Higher Level Accounting",
  },
  description:
    "Financial insights, compliance tips, and accounting best practices for SaaS companies, agencies, and growth-focused businesses from Higher Level Accounting.",
  keywords:
    "accounting blog, financial insights, SaaS accounting tips, agency financial management, cannabis accounting compliance, controller insights, financial best practices, business accounting resources",
  openGraph: {
    title: "Financial Insights & Resources | Higher Level Accounting",
    description:
      "Financial insights, compliance tips, and accounting best practices for SaaS companies, agencies, and growth-focused businesses from Higher Level Accounting.",
    url: "https://higherlevelaccounting.co/insights",
    siteName: "Higher Level Accounting",
    type: "website",
    images: [
      {
        url: "/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Higher Level Accounting Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Insights & Resources | Higher Level Accounting",
    description:
      "Financial insights, compliance tips, and accounting best practices for SaaS companies, agencies, and growth-focused businesses from Higher Level Accounting.",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelaccounting.co/insights",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
