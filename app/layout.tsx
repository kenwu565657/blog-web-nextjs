import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import React from "react";
import ToTopButton from "@/component/common/ToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ContentFarm",
  description: "Farm The Best Content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"scroll-smooth"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header></Header>
      <ToTopButton></ToTopButton>
      <div className="relative">
          {children}
      </div>
      </body>
    </html>
  );
}
