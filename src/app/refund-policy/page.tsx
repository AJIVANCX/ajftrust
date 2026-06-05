export default function RefundPolicyPage() {
return ( <main className="min-h-screen bg-slate-50">

  {/* Hero Section */}
  <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-28">

    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="relative max-w-7xl mx-auto px-4 text-center">

      <div className="text-6xl mb-5 animate-bounce">
        💳
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold">
        Refund Policy
      </h1>

      <p className="mt-5 text-lg text-slate-200 max-w-3xl mx-auto">
        Transparency and accountability are important to
        Anand Jivan Foundation Trust.
      </p>

    </div>

    {/* Wave */}
    <div className="absolute bottom-0 left-0 w-full">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-24"
      >
        <path
          d="M321.39,56.44C175.28,108.72,0,0,0,0V120H1200V0C1078.33,98.67,940.84,111.84,821.39,89.08C676.74,61.34,571.94,-9.52,321.39,56.44Z"
          fill="#ffffff"
        />
      </svg>
    </div>

  </section>

  {/* Content */}
  <section className="max-w-6xl mx-auto px-4 py-16">

    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-5">
        <h2 className="text-3xl font-bold">
          Donation Refund Policy
        </h2>
      </div>

      <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-8">

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            1. General Policy
          </h3>

          <p>
            Donations made to Anand Jivan Foundation Trust are
            voluntary contributions intended to support charitable
            activities and social welfare programs.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            2. Refund Eligibility
          </h3>

          <p>
            Refund requests may be considered only in cases of:
          </p>

          <ul className="list-disc ml-6 mt-3">
            <li>Duplicate transactions</li>
            <li>Incorrect donation amount due to technical error</li>
            <li>Unauthorized payment verified by the donor</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            3. Refund Request Timeline
          </h3>

          <p>
            Refund requests must be submitted within
            7 days from the date of donation.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            4. Verification Process
          </h3>

          <p>
            The Trust reserves the right to verify donation details,
            payment records and supporting information before
            approving any refund request.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            5. Refund Method
          </h3>

          <p>
            Approved refunds will be credited to the original payment
            source within 7–15 business days, subject to banking
            procedures.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            6. Non-Refundable Donations
          </h3>

          <p>
            Donations used for charitable programs, emergency relief,
            project implementation or completed transactions may not
            be eligible for refund.
          </p>
        </div>

      </div>

    </div>

    {/* Contact Card */}
    <div className="mt-10 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl">

      <h3 className="text-2xl font-bold mb-4">
        Refund Assistance
      </h3>

      <p>
        ANAND JIVAN FOUNDATION TRUST
      </p>

      <p>
        MABBI BELAUNA, POST-LALSHAHPUR,
        PANCHAYAT-SHAHBAJPUR,
        DARBHANGA, BIHAR - 846005
      </p>

      <p className="mt-3">
        📞 +91 9155751363
      </p>

      <p>
        ✉ info@ajftrust.org
      </p>

    </div>

  </section>

</main>

);
}
