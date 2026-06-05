import "./globals.css";

import TopBar from "../components/TopBar";
import MainHeader from "../components/MainHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Script from "next/script";

export const metadata = {
  title: "Anand Jivan Foundation Trust",
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
      <body className="bg-white text-gray-900 overflow-x-hidden">

        {/* Razorpay */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

        {/* Fixed Header Section */}
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-white shadow-md">
          <TopBar />
          <MainHeader />
          <Navbar />
        </div>

        {/* Page Content */}
        <main className="pt-[180px] md:pt-[220px] min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Donate Button */}
        <a
          href="/donate"
          className="
          fixed
          bottom-5
          right-5
          z-[9999]
          bg-gradient-to-r
          from-orange-500
          to-red-600
          text-white
          px-5
          py-3
          rounded-full
          shadow-2xl
          animate-bounce
          font-bold
          hover:scale-105
          transition-all
          duration-300
          "
        >
          ❤️ Donate Now
        </a>

      </body>
    </html>
  );
}