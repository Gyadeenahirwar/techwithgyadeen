import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechWithGyadeen — Learn. Build. Grow. | Salesforce, AI & Cloud Engineering",
    template: "%s | TechWithGyadeen",
  },
  description:
    "Production-grade technology education platform by Gyadeen. Master Salesforce Development, Apex, LWC, Agentforce Autonomous AI, Google Cloud, and enterprise integrations.",
  keywords: [
    "Salesforce Developer",
    "Agentforce",
    "Apex",
    "LWC",
    "Salesforce AI",
    "Data Cloud",
    "Google Cloud",
    "TechWithGyadeen",
    "Gyadeen",
    "Interview Preparation",
  ],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techwithgyadeen.com",
    siteName: "TechWithGyadeen",
    title: "TechWithGyadeen — Learn. Build. Grow.",
    description:
      "Practical technology learning for developers, Salesforce professionals, and AI builders. Taught with deep engineering rigor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechWithGyadeen — Learn. Build. Grow.",
    description: "Practical technology learning for developers, Salesforce professionals, and AI builders.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-200">
        <ThemeProvider>
          <Suspense fallback={<div className="h-16 sm:h-20" />}>
            <Navbar />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
