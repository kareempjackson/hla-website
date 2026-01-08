import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/site/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://higherlevelaccounting.co"),
  title: {
    default: "Higher Level Accounting | Controller-Level Accounting Services",
    template: "%s | Higher Level Accounting",
  },
  description:
    "Strategic, controller-level accounting services for growth-minded businesses. We serve SaaS companies, marketing agencies, and regulated retailers with accurate financials, actionable insights, and rock-solid compliance.",
  keywords: [
    "controller accounting services",
    "accrual accounting",
    "SaaS accounting",
    "agency accounting",
    "cannabis retail accounting",
    "financial compliance",
    "strategic accounting",
    "investor-ready financials",
    "bookkeeping services",
    "financial reporting",
    "tax preparation",
    "audit support",
  ],
  authors: [{ name: "Higher Level Accounting" }],
  creator: "Higher Level Accounting",
  publisher: "Higher Level Accounting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://higherlevelaccounting.co",
    siteName: "Higher Level Accounting",
    title: "Higher Level Accounting | Controller-Level Accounting Services",
    description:
      "Strategic accounting services for growth-minded businesses. Accurate financials, actionable insights, and rock-solid compliance.",
    images: [
      {
        url: "/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "Higher Level Accounting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Higher Level Accounting | Controller-Level Accounting Services",
    description:
      "Strategic accounting services for growth-minded businesses. Accurate financials, actionable insights, and rock-solid compliance.",
    images: ["/images/logo/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icon/icon.png",
    apple: "/images/icon/icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://higherlevelaccounting.co",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization structured data for global SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Higher Level Accounting",
    description:
      "Strategic, controller-level accounting services for growth-minded businesses",
    url: "https://higherlevelaccounting.co",
    logo: "https://higherlevelaccounting.co/images/logo/logo.svg",
    image: "https://higherlevelaccounting.co/images/logo/logo.svg",
    telephone: "61 2 6724 3203",
    email: "info@higherlevelacct.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7th floor, Wentworth Chambers, 180 Phillip Street",
      addressLocality: "Sydney",
      addressCountry: "AU",
    },
    sameAs: [
      // Add your social media profiles here
      // "https://www.facebook.com/higherlevelaccounting",
      // "https://www.linkedin.com/company/higherlevelaccounting",
      // "https://twitter.com/higherlevelacct",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Accrual-Based Bookkeeping",
      "Controller-Level Services",
      "Compliance & Risk Management",
      "Strategic Financial Planning",
      "Financial Reporting",
      "Tax Preparation",
      "Audit Support",
    ],
    knowsAbout: [
      "SaaS Accounting",
      "Agency Accounting",
      "Cannabis Retail Accounting",
      "Financial Compliance",
      "Strategic Planning",
      "Controller Services",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans bg-bg text-text antialiased min-h-screen">
        <div className="relative z-2">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
