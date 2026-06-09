import "./globals.css";

import TopBar from "../components/TopBar";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
metadataBase: new URL("https://ajftrust.org"),

title: {
default: "Anand Jivan Foundation Trust",
template: "%s | Anand Jivan Foundation Trust",
},

description:
"Anand Jivan Foundation Trust is a registered charitable NGO working in Education, Healthcare, Drinking Water, Women Empowerment, Environment Protection and Social Welfare.",

keywords: [
"Anand Jivan Foundation Trust",
"AJF Trust",
"NGO Bihar",
"NGO India",
"Education NGO",
"Healthcare NGO",
"Drinking Water Project",
"Women Empowerment",
"Environment Protection",
"Social Welfare",
],

openGraph: {
title: "Anand Jivan Foundation Trust",
description: "Together We Can Build A Better Future",
url: "https://ajftrust.org",
siteName: "Anand Jivan Foundation Trust",
locale: "en_IN",
type: "website",
},

robots: {
index: true,
follow: true,
},

alternates: {
canonical: "https://ajftrust.org",
},
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en"> <body className="bg-white text-gray-900 overflow-x-hidden">

    <Script
      src="https://checkout.razorpay.com/v1/checkout.js"
      strategy="afterInteractive"
    />

    <TopBar />
    <MainHeader />

    <div className="sticky top-0 z-[9999]">
      <Navbar />
    </div>

    <main className="min-h-screen pb-20 md:pb-0">
      {children}
    </main>

    <Footer />

  </body>
</html>

);
}
