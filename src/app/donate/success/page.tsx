"use client";

import { useSearchParams } from "next/navigation";

export default function DonationSuccess() {
  const params = useSearchParams();

  const receipt =
    params.get("receipt");

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <h1 className="text-4xl font-bold text-green-600">
          Donation Successful
        </h1>

        <p className="mt-4">
          Receipt Number
        </p>

        <h2 className="text-2xl font-bold">
          {receipt}
        </h2>

        <a
          href={`/api/download-receipt?receipt=${receipt}`}
          target="_blank"
          className="..."
        >
          Download Receipt PDF
        </a>

      </div>

    </div>
  );
}