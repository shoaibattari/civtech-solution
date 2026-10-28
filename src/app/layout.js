import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/ui/Navbar";
import Footer from "./component/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Civtech Solution | Civil Engineering & Construction Company",
    template: "Civtech Solution",
  },
  description:
    "Civtech Solution is a leading civil engineering and construction company in Pakistan specializing in residential, commercial, industrial projects, EV charging infrastructure, fuel stations, and project management.",
  keywords: [
    "civil engineering Pakistan",
    "construction company Karachi",
    "EV charging infrastructure Pakistan",
    "project management company",
    "fuel station construction",
    "industrial construction Pakistan",
  ],
  authors: [{ name: "Civtech Solution" }],
  // metadataBase: new URL("https://civtechsolution.com"),
  openGraph: {
    title: "Civtech Solution",
    description:
      "Expertly Crafted, Smartly Managed Civil Engineering & Construction Services",
    // url: "https://civtechsolution.com",
    siteName: "Civtech Solution",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
