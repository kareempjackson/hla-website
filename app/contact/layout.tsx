import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us | Higher Level Accounting - Get Strategic Financial Guidance",
  description:
    "Contact Higher Level Accounting for controller-level accounting services. Located in Sydney, we serve SaaS companies, marketing agencies, and regulated retailers across the United States. Schedule your consultation today.",
  keywords:
    "contact higher level accounting, accounting consultation, financial services contact, Sydney accounting firm, controller services inquiry, SaaS accounting contact",
  openGraph: {
    title: "Contact Higher Level Accounting",
    description:
      "Get in touch for strategic, controller-level accounting services. Schedule your consultation today.",
    url: "https://higherlevelacct.com/contact",
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
    title: "Contact Higher Level Accounting",
    description:
      "Get in touch for strategic, controller-level accounting services.",
    images: ["/images/logo/logo.svg"],
  },
  alternates: {
    canonical: "https://higherlevelacct.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
