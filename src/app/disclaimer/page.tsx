export default function DisclaimerPage() {
return ( <main className="min-h-screen bg-slate-50">
  {/* Hero Section */}
  <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-28">

    {/* Animated Background */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="relative max-w-7xl mx-auto px-4 text-center">

      <div className="text-6xl mb-5 animate-bounce">
        ⚠️
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold">
        Disclaimer
      </h1>

      <p className="mt-5 text-lg text-slate-200 max-w-3xl mx-auto">
        Please read this disclaimer carefully before using the
        Anand Jivan Foundation Trust website.
      </p>

    </div>

    {/* Wave Bottom */}
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

  {/* Content Section */}
  <section className="max-w-6xl mx-auto px-4 py-16">

    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

      {/* Title Bar */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-5">

        <h2 className="text-3xl font-bold">
          Website Disclaimer
        </h2>

        <p className="text-sm mt-2">
          Last Updated: 03-04-2026
        </p>

      </div>

      {/* Disclaimer Content */}
      <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-8">

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            1. General Information
          </h3>

          <p>
            The information provided on this website is for general
            informational and charitable purposes only. While Anand
            Jivan Foundation Trust strives to keep information accurate
            and up to date, we make no guarantees regarding completeness,
            reliability, suitability, or accuracy.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            2. No Professional Advice
          </h3>

          <p>
            Content available on this website should not be considered
            legal, financial, tax, medical, or professional advice.
            Users should consult qualified professionals before making
            decisions based on website information.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            3. External Links
          </h3>

          <p>
            Our website may contain links to third-party websites for
            convenience and reference purposes. We do not control or
            endorse external websites and are not responsible for their
            content, privacy practices, or policies.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            4. Limitation of Liability
          </h3>

          <p>
            Anand Jivan Foundation Trust shall not be liable for any
            direct, indirect, incidental, consequential, or special
            damages arising from the use of this website or reliance
            on its content.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            5. Donations
          </h3>

          <p>
            Donations made through this website are voluntary
            contributions intended to support charitable programs.
            Donors are encouraged to review our Refund Policy before
            making donations.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            6. Changes to Disclaimer
          </h3>

          <p>
            Anand Jivan Foundation Trust reserves the right to modify,
            update, or replace this Disclaimer at any time without prior
            notice. Updated versions will be published on this page.
          </p>
        </div>

      </div>

    </div>

    {/* Contact Card */}
    <div className="mt-10 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl">

      <h3 className="text-2xl font-bold mb-4">
        Contact Information
      </h3>

      <p>
        ANAND JIVAN FOUNDATION TRUST
      </p>

      <p>
        MABBI BELAUNA,
        POST-LALSHAHPUR,
        PANCHAYAT-SHAHBAJPUR,
        DARBHANGA, BIHAR - 846005
      </p>

      <div className="mt-5 space-y-2">

        <p>
          📞 +91 9155751363
        </p>

        <p>
          ✉ info@ajftrust.org
        </p>

        <p>
          🌐 www.ajftrust.org
        </p>

      </div>

    </div>

  </section>

</main>

);
}
