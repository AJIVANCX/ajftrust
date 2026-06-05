export default function AboutPage() {
return ( <main className="bg-white overflow-hidden">
  {/* Hero Section */}
  <section className="relative bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 text-white py-36 overflow-hidden">

    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

      <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full">
        Registered Non-Profit Organization
      </span>

      <h1 className="text-6xl md:text-7xl font-bold mt-8 animate-pulse">
        About Anand Jivan Foundation Trust
      </h1>

      <p className="max-w-4xl mx-auto mt-8 text-xl leading-9">
        Building a better society through education,
        healthcare, drinking water, environmental protection,
        women empowerment and community development.
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
          fill="#ffffff"
        />
      </svg>
    </div>

  </section>

  {/* About Trust */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <img
          src="/images/about.jpg"
          alt="About AJF"
          className="rounded-3xl shadow-2xl"
        />
      </div>

      <div>

        <span className="text-orange-500 font-semibold uppercase">
          Who We Are
        </span>

        <h2 className="text-5xl font-bold text-slate-900 mt-4">
          Anand Jivan Foundation Trust
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-8">
          Anand Jivan Foundation Trust is a registered charitable
          organization dedicated to improving the quality of life
          of underprivileged communities across India.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-8">
          Our programs focus on education support, healthcare,
          drinking water facilities, women empowerment,
          environmental sustainability, winter relief,
          widow welfare and social development initiatives.
        </p>

      </div>

    </div>

  </section>

  {/* Mission & Vision */}
  <section className="py-24 bg-slate-50">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-4xl font-bold text-emerald-700">
            Our Mission
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            To empower communities through sustainable
            development, education, healthcare and social welfare.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-4xl font-bold text-cyan-700">
            Our Vision
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            A society where every individual has equal access
            to opportunities, dignity and essential resources.
          </p>
        </div>

      </div>

    </div>

  </section>

  {/* Focus Areas */}
  <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-center text-5xl font-bold text-slate-900 mb-16">
        Our Focus Areas
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-green-50 p-8 rounded-3xl shadow">
          <h3 className="text-2xl font-bold">Education</h3>
        </div>

        <div className="bg-blue-50 p-8 rounded-3xl shadow">
          <h3 className="text-2xl font-bold">Healthcare</h3>
        </div>

        <div className="bg-orange-50 p-8 rounded-3xl shadow">
          <h3 className="text-2xl font-bold">Drinking Water</h3>
        </div>

        <div className="bg-purple-50 p-8 rounded-3xl shadow">
          <h3 className="text-2xl font-bold">Women Empowerment</h3>
        </div>

        <div className="bg-teal-50 p-8 rounded-3xl shadow">
          <h3 className="text-2xl font-bold">Environment</h3>
        </div>

        <div className="bg-red-50 p-8 rounded-3xl shadow">
          <h3 className="text-2xl font-bold">Winter Relief</h3>
        </div>

      </div>

    </div>

  </section>

  {/* Chairman Message */}
  <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-700 text-white">

    <div className="max-w-5xl mx-auto px-6 text-center">

      <h2 className="text-5xl font-bold">
        Message From Management
      </h2>

      <p className="mt-10 text-xl leading-10">
        We believe that meaningful change begins with compassion,
        commitment and collective action. Together we can build
        stronger communities and create sustainable opportunities
        for future generations.
      </p>

      <h3 className="mt-10 text-3xl font-bold">
        Guddu Kumar
      </h3>

      <p className="text-orange-300">
        Managing Trustee
      </p>

    </div>

  </section>

</main>
);
}
