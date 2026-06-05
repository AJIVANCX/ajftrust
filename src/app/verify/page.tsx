"use client";

import { useState } from "react";

export default function VerifyPage() {
const [certificateId, setCertificateId] = useState("");

const handleVerify = () => {
if (!certificateId) return;

window.location.href = `/certificate/${certificateId}`;


};

return ( <main className="min-h-screen bg-gray-50 flex items-center justify-center">

  <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-xl">

    <h1 className="text-4xl font-bold text-center text-blue-900">
      Certificate Verification
    </h1>

    <p className="text-center text-gray-600 mt-4">
      Enter your certificate number
    </p>

    <input
      type="text"
      placeholder="AJFT-2026-0001"
      value={certificateId}
      onChange={(e) => setCertificateId(e.target.value)}
      className="w-full mt-8 border p-4 rounded-xl"
    />

    <button
      onClick={handleVerify}
      className="w-full mt-6 bg-blue-900 text-white py-4 rounded-xl"
    >
      Verify Certificate
    </button>

  </div>

</main>
);
}


