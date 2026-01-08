import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About Higher Level Accounting | Controller-Level Expertise",
  },
  description:
    "Learn about Higher Level Accounting's team and approach. We provide controller-level accounting services for SaaS, agencies, and regulated industries.",
  keywords:
    "about higher level accounting, controller accounting firm, SaaS accounting specialists, agency accounting services, cannabis retail accounting, financial compliance experts",
  openGraph: {
    title: "About Higher Level Accounting | Controller-Level Expertise",
    description:
      "Learn about Higher Level Accounting's team and approach. We provide controller-level accounting services for SaaS, agencies, and regulated industries.",
    url: "https://higherlevelaccounting.co/about",
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
    title: "About Higher Level Accounting | Controller-Level Expertise",
    description:
      "Learn about Higher Level Accounting's team and approach. We provide controller-level accounting services for SaaS, agencies, and regulated industries.",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelaccounting.co/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
