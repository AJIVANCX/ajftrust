export default function TermsAndConditionsPage() {
return ( <main className="min-h-screen bg-slate-50">
  {/* Hero Section */}
  <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-28">

    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="relative max-w-7xl mx-auto px-4 text-center">

      <div className="text-6xl mb-5 animate-bounce">
        📜
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold">
        Terms & Conditions
      </h1>

      <p className="mt-5 text-lg text-slate-200 max-w-3xl mx-auto">
        Please read these Terms and Conditions carefully before using
        the Anand Jivan Foundation Trust website.
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
          Terms & Conditions
        </h2>

        <p className="text-sm mt-2">
          Last Updated: 03-04-2026
        </p>
      </div>

      <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-8">

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Introduction
          </h3>

          <p>
            Welcome to Anand Jivan Foundation Trust (AJF Trust).
            By accessing or using this website, you agree to be bound
            by these Terms and Conditions.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            1. Definitions
          </h3>

          <ul className="list-disc ml-6">
            <li>
              <strong>"We", "Us", "Our"</strong> refers to Anand Jivan Foundation Trust.
            </li>

            <li>
              <strong>"You", "User"</strong> refers to any visitor,
              donor, volunteer, supporter or website user.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            2. Use of Website
          </h3>

          <ul className="list-disc ml-6">
            <li>
              This website is intended for informational and charitable purposes.
            </li>

            <li>
              You may not use the website for unlawful activities.
            </li>

            <li>
              Commercial use of website content without written permission
              is strictly prohibited.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            3. Intellectual Property Rights
          </h3>

          <p>
            All content including logos, text, graphics, photographs,
            designs, documents and other materials available on this
            website are the property of Anand Jivan Foundation Trust
            unless otherwise stated.
          </p>

          <p className="mt-3">
            Unauthorized reproduction, modification, distribution,
            publication or commercial use is prohibited.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            4. Disclaimer
          </h3>

          <p>
            The website and its content are provided on an "as is"
            and "as available" basis without warranties of any kind.
          </p>

          <p className="mt-3">
            Anand Jivan Foundation Trust shall not be liable for any
            direct, indirect, incidental or consequential damages
            arising from the use of this website.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            5. Governing Law
          </h3>

          <p>
            These Terms and Conditions shall be governed by and
            interpreted in accordance with the laws of India.
          </p>

          <p className="mt-3">
            Any disputes arising out of website use shall be resolved
            through arbitration and appropriate legal proceedings under
            applicable Indian laws.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            6. Changes to Terms
          </h3>

          <p>
            Anand Jivan Foundation Trust reserves the right to update,
            modify or replace these Terms and Conditions at any time.
          </p>

          <p className="mt-3">
            Changes become effective immediately upon publication on
            this website.
          </p>
        </div>

      </div>

    </div>

    {/* Contact Card */}
    <div className="mt-10 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl">

      <h3 className="text-2xl font-bold mb-4">
        Contact Us
      </h3>

      <p>
        If you have any questions regarding these Terms & Conditions,
        please contact us:
      </p>

      <div className="mt-5 space-y-2">

        <p>
          ✉ Email: ajftrusts@gmail.com
        </p>

        <p>
          📞 Phone: +91 9155751363
        </p>

      </div>

    </div>

  </section>

</main>

);
}
