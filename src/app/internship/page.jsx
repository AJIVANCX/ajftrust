export default function InternshipPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-slate-950 via-rose-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block px-6 py-2 rounded-full bg-amber-500 text-black font-bold">
            AJF Trust Internship Program
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-8">
            Internship Opportunities
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-200">
            Gain practical experience, develop professional skills and
            contribute to meaningful social impact projects.
          </p>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center text-slate-900 mb-16">
            Why Join Our Internship?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Practical Experience
              </h3>

              <p className="text-gray-600">
                Work on real NGO projects and community initiatives.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Certificate
              </h3>

              <p className="text-gray-600">
                Receive an internship completion certificate.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Skill Development
              </h3>

              <p className="text-gray-600">
                Improve leadership, communication and management skills.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Domains */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-16">
            Internship Domains
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow">
              Education
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              Healthcare
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              Social Work
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              Digital Marketing
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              HR Management
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              Fundraising
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              Psychology
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              Community Development
            </div>

          </div>

        </div>
      </section>

      {/* Apply Now */}
      <section className="py-24 text-center">

        <h2 className="text-5xl font-black text-slate-900">
          Apply Now
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Start your journey with AJF Trust today.
        </p>

        <a
          href="/internship/apply"
          className="
          inline-block
          mt-10
          px-10
          py-5
          rounded-full
          bg-gradient-to-r
          from-amber-400
          to-yellow-600
          text-black
          font-bold
          shadow-2xl
          hover:scale-105
          transition
          "
        >
          Apply For Internship
        </a>

      </section>

    </main>
  );
}