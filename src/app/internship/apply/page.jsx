"use client";

import { useState } from "react";

export default function InternshipApply() {
const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
e.preventDefault()
setLoading(true);

setTimeout(() => {
  alert("Application Submitted Successfully");
  setLoading(false);
}, 1500);


};

return ( <main className="min-h-screen bg-slate-100">

  {/* HEADER */}

  <section className="bg-gradient-to-r from-[#071C4D] via-blue-900 to-[#071C4D] text-white py-16">

    <div className="max-w-6xl mx-auto px-6 text-center">

      <h1 className="text-5xl font-black">
        Internship Application
      </h1>

      <p className="mt-4 text-lg text-blue-100">
        Anand Jivan Foundation Trust
      </p>

      <p className="mt-2 text-sm text-blue-200">
        Government Registered Public Charitable Trust
      </p>

    </div>

  </section>

  <div className="max-w-6xl mx-auto px-4 py-10">

    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden"
    >

      <div className="bg-[#071C4D] text-white p-6">
        <h2 className="text-2xl font-bold">
          Internship Registration Form
        </h2>
      </div>

      <div className="p-8 grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Full Name"
          required
          className="border p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="Father Name"
          required
          className="border p-4 rounded-xl"
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          className="border p-4 rounded-xl"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
          className="border p-4 rounded-xl"
        />

        <input
          type="date"
          required
          className="border p-4 rounded-xl"
        />

        <select
          required
          className="border p-4 rounded-xl"
        >
          <option value="">
            Select Gender
          </option>

          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          type="text"
          placeholder="College / University"
          required
          className="border p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="Course / Degree"
          required
          className="border p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="Current Semester"
          className="border p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="City"
          className="border p-4 rounded-xl"
        />

        <select
          required
          className="border p-4 rounded-xl"
        >
          <option>
            Select Internship Domain
          </option>

          <option>Education</option>
          <option>Healthcare</option>
          <option>Social Work</option>
          <option>Digital Marketing</option>
          <option>Psychology</option>
          <option>NGO Management</option>
          <option>Fundraising</option>
          <option>Web Development</option>
        </select>

        <input
          type="number"
          placeholder="Internship Duration (Months)"
          className="border p-4 rounded-xl"
        />

        <div className="md:col-span-2">

          <textarea
            rows="5"
            placeholder="Why do you want to join this internship?"
            className="w-full border p-4 rounded-xl"
          />

        </div>

        <div className="md:col-span-2">

          <label className="font-semibold block mb-2">
            Upload Resume
          </label>

          <input
            type="file"
            className="w-full border p-4 rounded-xl"
          />

        </div>

        <div className="md:col-span-2">

          <label className="flex items-start gap-3">

            <input
              type="checkbox"
              required
              className="mt-1"
            />

            <span>
              I hereby declare that all
              information provided by me
              is true and correct.
            </span>

          </label>

        </div>

      </div>

      <div className="p-8 bg-slate-50">

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-4 rounded-xl font-bold text-lg"
        >
          {loading
            ? "Submitting..."
            : "Submit Internship Application"}
        </button>

      </div>

    </form>

  </div>

</main>

);
}
