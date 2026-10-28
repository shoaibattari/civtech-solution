import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, company } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} | Civil Engineering & Construction in Karachi`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "civil engineering Pakistan",
    "construction company Karachi",
    "EV charging infrastructure Pakistan",
    "project management company",
    "fuel station construction",
    "industrial construction Pakistan",
    "PEC C4 contractor",
  ],
  authors: [{ name: company.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: company.name,
    description: `${company.tagline} — civil engineering & construction services.`,
    url: "/",
    siteName: company.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#0b1430",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
