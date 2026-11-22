import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "MAGTAN INTERNATIONAL HOLDINGS INC | One Vision. A Global Future.",
    template: "%s | MAGTAN INTERNATIONAL HOLDINGS INC",
  },
  description:
    "MAGTAN INTERNATIONAL HOLDINGS INC is a Delaware-registered U.S. corporation focused on international business development, IT consulting, software development and digital solutions.",
  keywords: [
    "MAGTAN INTERNATIONAL HOLDINGS INC",
    "IT Consulting",
    "Software Development",
    "Digital Solutions",
    "International Business Development",
    "Project Management",
    "Technology Services",
  ],
  openGraph: {
    title: "MAGTAN INTERNATIONAL HOLDINGS INC",
    description:
      "Delaware-registered U.S. corporation focused on international business development and technology services.",
    url: "https://www.magtanholdings.com",
    siteName: "MAGTAN INTERNATIONAL HOLDINGS INC",
    type: "website",
  },
  icons: {
    icon: "/magtan-logo.png",
    apple: "/magtan-logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
