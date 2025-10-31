import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Zade Mahayni | Software Engineer",
  description: "Zade Mahayni is a software engineer specializing in building products that blend AI, data, and the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="noise-bg" aria-hidden="true"></div>
        <Sidebar />
        <TopNav />
        <main className="lg:pl-64">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
