import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/site/footer";

export const metadata: Metadata = {
  title: "HLA Design System",
  description: "Tailwind v4 theme and components showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-bg text-text antialiased min-h-screen">
        <div className="relative z-2">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
