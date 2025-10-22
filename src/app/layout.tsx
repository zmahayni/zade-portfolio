import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zade Mahayni — Portfolio",
  description:
    "CS + Cybersecurity student at University of Tulsa (’26). Interests: RL, ML, System Design. Projects, experience, and contact.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Zade Mahayni — Portfolio",
    description:
      "CS + Cybersecurity at University of Tulsa (’26). RL, ML, System Design. Projects, experience, and contact.",
    url: "/",
    siteName: "Zade Mahayni",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Zade Mahayni — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zade Mahayni — Portfolio",
    description:
      "CS + Cybersecurity at University of Tulsa (’26). RL, ML, System Design.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
