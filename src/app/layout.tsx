import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Northside Resources (Pvt) Ltd - Land Development, Property, Mining & Commodity Trading",
  description: "Northside Resources (Pvt) Ltd is a diversified Zimbabwean company focused on land development, property, mining and commodity trading — creating sustainable opportunities and long-term value.",
  keywords: ["Northside Resources Zimbabwe", "Land Development Zimbabwe", "Property Development Harare", "Glen Lorne Property Development", "Follyjorne Estates", "Property Investment Zimbabwe", "Property Developers Harare"],
  openGraph: {
    title: "Northside Resources (Pvt) Ltd - Building Value. Developing Futures.",
    description: "A diversified Zimbabwean company focused on land development, property, mining and commodity trading.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
