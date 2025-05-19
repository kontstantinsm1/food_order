import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Assistant - Intelligent Voice Technology for Food Ordering",
  description:
    "Order food with your voice using our AI assistant. No apps to navigate, no forms to fill out - just talk and enjoy.",
  openGraph: {
    title: "AI Assistant - Intelligent Voice Technology for Food Ordering",
    description:
      "Our AI assistant makes ordering pizza and sushi as simple as having a conversation.",
    url: "https://demo.smartwaylabs.com/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
