import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Higher Level Accounting - Strategic Financial Excellence",
  description:
    "Learn about Higher Level Accounting's mission to provide controller-level accounting services for SaaS companies, marketing agencies, and regulated retailers. We deliver financial clarity, compliance, and strategic insights.",
  keywords:
    "about higher level accounting, controller accounting firm, SaaS accounting specialists, agency accounting services, cannabis retail accounting, financial compliance experts",
  openGraph: {
    title: "About Higher Level Accounting - Strategic Financial Excellence",
    description:
      "Controller-level accounting services for growth-minded businesses. We serve SaaS companies, marketing agencies, and regulated retailers with accurate financials and strategic insights.",
    url: "https://higherlevelacct.com/about",
    siteName: "Higher Level Accounting",
    type: "website",
    images: [
      {
        url: "/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Higher Level Accounting Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Higher Level Accounting - Strategic Financial Excellence",
    description:
      "Controller-level accounting services for growth-minded businesses in SaaS, agencies, and regulated industries.",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelacct.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
