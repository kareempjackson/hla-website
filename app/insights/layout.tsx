import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Insights & Resources | Higher Level Accounting Blog",
  description:
    "Expert insights on accounting, financial compliance, strategic financial management, and industry best practices for SaaS companies, marketing agencies, and regulated retailers.",
  keywords:
    "accounting blog, financial insights, SaaS accounting tips, agency financial management, cannabis accounting compliance, controller insights, financial best practices, business accounting resources",
  openGraph: {
    title: "Financial Insights & Resources | Higher Level Accounting",
    description:
      "Expert insights on accounting, compliance, and strategic financial management to help your business grow with confidence.",
    url: "https://higherlevelacct.com/insights",
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
      "Expert insights on accounting, compliance, and strategic financial management.",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelacct.com/insights",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
