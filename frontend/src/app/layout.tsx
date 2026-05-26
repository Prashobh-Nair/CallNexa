import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CallNexa | AI Caller Intelligence & Spam Detection",
  description: "AI-powered caller intelligence platform helping users detect spam, identify suspicious callers, and stay protected from scams without exposing private identity.",
  keywords: ["spam detection", "scam alert", "caller reputation", "fraud analysis", "community safety", "caller intelligence"],
  authors: [{ name: "CallNexa Security" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

