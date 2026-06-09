import "./globals.css";

import TopBar from "../components/TopBar";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
title: {
default: "Anand Jivan Foundation Trust",
template: "%s | Anand Jivan Foundation Trust",
},
description:
"Education, Healthcare, Drinking Water, Women Empowerment and Community Development",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
  <html lang="en">
    <body className="bg-white text-gray-900 overflow-x-hidden"> <Script
       src="https://checkout.razorpay.com/v1/checkout.js"
       strategy="afterInteractive"
     />

    {/* Header */}
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-md">
      <TopBar />
      <MainHeader />
      <Navbar />
    </div>

    {/* Main Content */}
    <main className="pt-[180px] md:pt-[220px] min-h-screen pb-20 md:pb-0">
      {children}
    </main>

    {/* Footer */}
    <Footer />

    {/* Desktop Donate Button */}
    <a
      href="/donate"
      className="hidden md:flex fixed bottom-5 right-5 z-[9999] bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-3 rounded-full shadow-2xl animate-bounce font-bold hover:scale-105 transition-all duration-300"
    >
      ❤️ Donate Now
    </a>

    {/* Mobile Bottom Navigation */}
    <div className="fixed bottom-0 left-0 right-0 z-[9998] md:hidden bg-white border-t shadow-lg">
      <div className="grid grid-cols-5 h-16">
        <a href="/" className="flex flex-col items-center justify-center text-xs">
          🏠
          <span>Home</span>
        </a>

        <a href="/#about" className="flex flex-col items-center justify-center text-xs">
          ℹ️
          <span>About</span>
        </a>

        <a href="/donate" className="flex flex-col items-center justify-center text-xs font-bold text-red-600">
          ❤️
          <span>Donate</span>
        </a>

        <a href="/#projects" className="flex flex-col items-center justify-center text-xs">
          📋
          <span>Projects</span>
        </a>

        <a href="/contact" className="flex flex-col items-center justify-center text-xs">
          📞
          <span>Contact</span>
        </a>
      </div>
    </div>
  </body>
</html>

);
}
