import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Higher Level Accounting | Schedule Consultation",
  },
  description:
    "Schedule a consultation with Higher Level Accounting. Get controller-level accounting services and financial clarity for your growing business",
  keywords:
    "contact higher level accounting, accounting consultation, financial services contact, Sydney accounting firm, controller services inquiry, SaaS accounting contact",
  openGraph: {
    title: "Contact Higher Level Accounting | Schedule Consultation",
    description:
      "Schedule a consultation with Higher Level Accounting. Get controller-level accounting services and financial clarity for your growing business",
    url: "https://higherlevelaccounting.co/contact",
    siteName: "Higher Level Accounting",
    type: "website",
    images: [
      {
        url: "/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Contact Higher Level Accounting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Higher Level Accounting | Schedule Consultation",
    description:
      "Schedule a consultation with Higher Level Accounting. Get controller-level accounting services and financial clarity for your growing business",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelaccounting.co/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
