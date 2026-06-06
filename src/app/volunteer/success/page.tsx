"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function VolunteerSuccessPage() {
  const searchParams = useSearchParams();

  const volunteerId =
    searchParams.get("id");

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-5xl">
          ✅
        </div>

        <h1 className="text-4xl font-black text-green-700 mt-5">
          Registration Successful
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for joining
          Anand Jivan Foundation Trust
          Volunteer Program.
        </p>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">

          <h3 className="font-bold text-lg text-[#071C4D]">
            Volunteer ID
          </h3>

          <div className="text-2xl font-black text-blue-900 mt-2">
            {volunteerId}
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <Link
            href={`/api/volunteer-card?id=${volunteerId}`}
            className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold"
          >
            Download ID Card
          </Link>

          <Link
            href="/"
            className="bg-[#071C4D] hover:bg-blue-900 text-white py-4 rounded-xl font-bold"
          >
            Back To Home
          </Link>

        </div>

      </div>

    </main>
  );
}