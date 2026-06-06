"use client";

import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HEADER */}
      <div className="bg-[#071C4D] text-white p-6 shadow-lg">
        <h1 className="text-4xl font-black">
          AJF NGO MIS Dashboard
        </h1>

        <p className="text-blue-100 mt-2">
          Anand Jivan Foundation Trust
        </p>
      </div>

      <div className="p-6">

        {/* STATS */}

        <div className="grid md:grid-cols-5 gap-5">

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4>Total Donations</h4>
            <div className="text-3xl font-black text-green-700">
              ₹0
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4>Total Donors</h4>
            <div className="text-3xl font-black text-blue-700">
              0
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4>Total Volunteers</h4>
            <div className="text-3xl font-black text-orange-700">
              0
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4>Total Projects</h4>
            <div className="text-3xl font-black text-purple-700">
              0
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4>Total Events</h4>
            <div className="text-3xl font-black text-red-700">
              0
            </div>
          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="grid md:grid-cols-4 gap-5 mt-8">

          <Link
            href="/admin/donations"
            className="bg-green-600 text-white rounded-2xl p-6 text-center font-bold"
          >
            Donation Management
          </Link>

          <Link
            href="/admin/volunteers"
            className="bg-blue-700 text-white rounded-2xl p-6 text-center font-bold"
          >
            Volunteer Management
          </Link>

          <Link
            href="/admin/projects"
            className="bg-purple-700 text-white rounded-2xl p-6 text-center font-bold"
          >
            Project Management
          </Link>

          <Link
            href="/admin/events"
            className="bg-orange-600 text-white rounded-2xl p-6 text-center font-bold"
          >
            Event Management
          </Link>

        </div>

      </div>

    </main>
  );
}