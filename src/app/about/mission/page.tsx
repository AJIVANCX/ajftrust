export default function MissionPage() {
return ( <main className="bg-slate-50 overflow-hidden">

  {/* Hero Section */}
  <section className="relative bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-32 overflow-hidden">

    <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

      <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full">
        Our Purpose
      </span>

      <h1 className="text-6xl md:text-7xl font-black mt-8">
        Our Mission
      </h1>

      <p className="max-w-4xl mx-auto mt-8 text-xl leading-9 text-slate-200">
        Empowering communities through sustainable development,
        education, healthcare, drinking water, environmental
        protection and social welfare initiatives.
      </p>

    </div>

    {/* Wave */}
    <div className="absolute bottom-0 left-0 w-full">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[120px]"
      >
        <path
          d="M321.39,56.44C175.28,108.72,0,0,0,0V120H1200V0C1078.33,98.67,940.84,111.84,821.39,89.08C676.74,61.34,571.94,-9.52,321.39,56.44Z"
          fill="#f8fafc"
        />
      </svg>
    </div>

  </section>

  {/* Mission Content */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <div className="text-center mb-16">

      <span className="text-yellow-600 font-semibold uppercase tracking-wider">
        What Drives Us
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-4">
        Creating Sustainable Change
      </h2>

    </div>

    <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-16">

      <p className="text-xl text-gray-700 leading-10 text-center">
        Our mission is to improve the quality of life of
        underprivileged communities by providing access to
        education, healthcare, safe drinking water,
        environmental sustainability, women empowerment
        and social welfare programs.
      </p>

    </div>

  </section>

  {/* Mission Pillars */}
  <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-center text-5xl font-bold mb-16">
        Mission Pillars
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-yellow-500 hover:-translate-y-3 transition">
          📚
          <h3 className="text-2xl font-bold mt-4">
            Education
          </h3>
          <p className="mt-4 text-gray-600">
            Supporting learning opportunities and educational access.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-blue-600 hover:-translate-y-3 transition">
          🏥
          <h3 className="text-2xl font-bold mt-4">
            Healthcare
          </h3>
          <p className="mt-4 text-gray-600">
            Promoting health awareness and medical support.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-cyan-500 hover:-translate-y-3 transition">
          💧
          <h3 className="text-2xl font-bold mt-4">
            Drinking Water
          </h3>
          <p className="mt-4 text-gray-600">
            Ensuring access to safe and clean drinking water.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-pink-500 hover:-translate-y-3 transition">
          👩
          <h3 className="text-2xl font-bold mt-4">
            Women Empowerment
          </h3>
          <p className="mt-4 text-gray-600">
            Creating opportunities and strengthening livelihoods.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-green-500 hover:-translate-y-3 transition">
          🌳
          <h3 className="text-2xl font-bold mt-4">
            Environment
          </h3>
          <p className="mt-4 text-gray-600">
            Tree plantation and environmental sustainability.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-orange-500 hover:-translate-y-3 transition">
          🤝
          <h3 className="text-2xl font-bold mt-4">
            Social Welfare
          </h3>
          <p className="mt-4 text-gray-600">
            Supporting vulnerable communities with dignity.
          </p>
        </div>

      </div>

    </div>

  </section>

  {/* Impact Section */}
  <section className="py-24 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="text-5xl font-bold text-yellow-400">
            5000+
          </h3>
          <p>Lives Impacted</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-yellow-400">
            50+
          </h3>
          <p>Projects</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-yellow-400">
            100+
          </h3>
          <p>Volunteers</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold text-yellow-400">
            10+
          </h3>
          <p>Years Service</p>
        </div>

      </div>

    </div>

  </section>

  {/* CTA */}
  <section className="py-24 bg-white">

    <div className="max-w-5xl mx-auto text-center px-6">

      <h2 className="text-5xl font-bold text-slate-900">
        Join Our Mission
      </h2>

      <p className="mt-6 text-xl text-gray-600">
        Together we can create meaningful change and
        build stronger communities.
      </p>

      <a
        href="/donate"
        className="
        inline-block
        mt-10
        px-10
        py-4
        rounded-full
        bg-gradient-to-r
        from-yellow-500
        to-orange-500
        text-black
        font-bold
        shadow-2xl
        hover:scale-105
        transition-all
        "
      >
        Donate Now
      </a>

    </div>

  </section>

</main>

);
}
