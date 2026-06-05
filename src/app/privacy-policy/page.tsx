export default function PrivacyPolicyPage() {
return ( <main className="min-h-screen bg-gradient-to-b from-slate-50 to-green-50">
  {/* Hero Section */}
  <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-800 to-green-700 text-white py-28">

    {/* Animated Background */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="relative max-w-7xl mx-auto px-4 text-center">

      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-md mb-6 animate-bounce">
        <span className="text-5xl">🔒</span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold">
        Privacy Policy
      </h1>

      <p className="mt-6 text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
        Your privacy matters to us. Anand Jivan Foundation Trust is committed
        to protecting and safeguarding your personal information.
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

      {/* Header Strip */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-5">
        <h2 className="text-3xl font-bold">
          Anand Jivan Foundation Trust Privacy Policy
        </h2>
        <p className="text-sm mt-1">
          Effective Date: 01 January 2026
        </p>
      </div>

      <div className="p-8 md:p-12 space-y-8 text-gray-700 leading-8">

        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            1. Information We Collect
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>Name, Email Address and Mobile Number</li>
            <li>Postal Address and Donation Details</li>
            <li>Payment Transaction Information</li>
            <li>Browser, Device and IP Information</li>
            <li>Pages Visited and Website Analytics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            2. How We Use Your Information
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>Processing Donations and Issuing Receipts</li>
            <li>Providing Support and Communication</li>
            <li>Improving Website Experience</li>
            <li>Sharing Updates, Events and Activities</li>
            <li>Legal and Regulatory Compliance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            3. Sharing of Information
          </h3>

          <p>
            Anand Jivan Foundation Trust never sells donor or visitor
            information. Information may only be shared with payment
            processors, authorized service providers, or government
            authorities where legally required.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            4. Cookies and Analytics
          </h3>

          <p>
            Cookies are used to improve website functionality, user
            experience, performance monitoring, and analytics.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            5. Data Security
          </h3>

          <p>
            We implement reasonable administrative, technical and physical
            safeguards to protect your information. However, no internet
            transmission method can guarantee complete security.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            6. Your Rights
          </h3>

          <ul className="list-disc ml-6 space-y-2">
            <li>Access Your Personal Data</li>
            <li>Request Corrections</li>
            <li>Withdraw Consent</li>
            <li>Request Data Deletion Where Applicable</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-900 mb-3">
            7. Policy Updates
          </h3>

          <p>
            This Privacy Policy may be updated periodically. Any revised
            version will be published on this page.
          </p>
        </div>

      </div>

    </div>

    {/* Contact Card */}
    <div className="mt-10 bg-gradient-to-r from-green-900 to-emerald-800 text-white rounded-3xl shadow-xl p-8">

      <h3 className="text-2xl font-bold mb-4">
        Contact Information
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
