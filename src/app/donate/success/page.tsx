"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function DonationSuccessContent() {
  const searchParams = useSearchParams();

  const receipt =
    searchParams.get("receipt") || "AJF-PENDING";

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Donation Successful
          </h2>

          <p className="text-gray-600 mt-3">
            Thank you for supporting
            Anand Jivan Foundation Trust
          </p>

          <div className="mt-8 border-2 border-yellow-500 rounded-2xl p-6 bg-gradient-to-r from-green-50 to-yellow-50">
            <h3 className="text-xl font-bold text-green-900 mb-4">
              Official Donation Receipt
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-gray-500">Receipt Number</p>
                <p className="font-bold text-red-600">
                  {receipt}
                </p>
              </div>

              <div>
                <p className="text-gray-500">Status</p>
                <p className="font-bold text-green-600">
                  Successful
                </p>
              </div>

              <div>
                <p className="text-gray-500">Trust</p>
                <p className="font-semibold">
                  Anand Jivan Foundation Trust
                </p>
              </div>

              <div>
                <p className="text-gray-500">Payment Mode</p>
                <p className="font-semibold">
                  Razorpay
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <a
              href={`/api/download-receipt?receipt=${receipt}`}
              target="_blank"
              className="bg-gradient-to-r from-green-700 to-emerald-900 text-white py-4 rounded-xl font-semibold text-center"
            >
              📄 Download Receipt
            </a>

            <Link
              href="/verify"
              className="bg-orange-500 text-white py-4 rounded-xl font-semibold text-center"
            >
              🔍 Verify Donation
            </Link>

            <Link
              href="/"
              className="bg-blue-900 text-white py-4 rounded-xl font-semibold text-center"
            >
              🏠 Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function DonationSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DonationSuccessContent />
    </Suspense>
  );
}