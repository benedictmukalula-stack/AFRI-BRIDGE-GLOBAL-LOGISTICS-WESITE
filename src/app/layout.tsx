import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afri-Bridge Global Logistics — Trade Infrastructure for Africa",
  description:
    "Enterprise-grade freight forwarding, customs clearing, and cross-border logistics solutions connecting businesses across the African continent.",
  keywords: [
    "Afri-Bridge",
    "clearing and logistics",
    "freight forwarding",
    "customs clearing",
    "cross-border logistics",
    "Africa trade",
    "air freight",
    "ocean freight",
    "road transport",
    "warehousing",
  ],
  authors: [{ name: "Afri-Bridge Global Logistics" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "Afri-Bridge Global Logistics — Trade Infrastructure for Africa",
    description:
      "Enterprise-grade freight forwarding, customs clearing, and cross-border logistics solutions connecting businesses across the African continent.",
    type: "website",
  },
  other: {
    "theme-color": "#0B1F3A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
