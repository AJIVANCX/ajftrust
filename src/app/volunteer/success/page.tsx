"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();

  const volunteerId =
    searchParams.get("id") || "";

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-xl w-full">

        <h1 className="text-4xl font-bold text-green-600">
          Registration Successful
        </h1>

        <p className="mt-6 text-gray-600">
          Volunteer ID
        </p>

        <h2 className="text-2xl font-bold mt-2 break-all">
          {volunteerId}
        </h2>

        <a
          href={`/api/volunteer-card?id=${volunteerId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold"
        >
          Download Volunteer Card
        </a>

      </div>

    </div>
  );
}

export default function VolunteerSuccess() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}