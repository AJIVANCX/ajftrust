export default function VisionPage() {
return ( <main className="bg-slate-50 overflow-hidden">

  {/* Hero Section */}
  <section className="relative bg-gradient-to-r from-indigo-950 via-purple-900 to-slate-900 text-white py-32 overflow-hidden">

    <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

      <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full">
        Future We Envision
      </span>

      <h1 className="text-6xl md:text-7xl font-black mt-8">
        Our Vision
      </h1>

      <p className="max-w-4xl mx-auto mt-8 text-xl leading-9 text-slate-200">
        Building a society where every individual has
        access to opportunities, dignity, equality and
        essential resources needed to lead a meaningful life.
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

  {/* Vision Statement */}
  <section className="max-w-7xl mx-auto px-6 py-24">

    <div className="text-center mb-16">

      <span className="text-purple-600 font-semibold uppercase tracking-widest">
        Our Dream
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-4">
        A Better Future For Everyone
      </h2>

    </div>

    <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-16">

      <p className="text-xl text-gray-700 leading-10 text-center">
        We envision a world where every child receives quality education,
        every family has access to healthcare and safe drinking water,
        every woman enjoys equal opportunities, and communities thrive
        in a sustainable and inclusive environment.
      </p>

    </div>

  </section>

  {/* Vision Goals */}
  <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-center text-5xl font-bold mb-16">
        Vision Goals
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-blue-500 hover:-translate-y-3 transition">
          🎓
          <h3 className="text-2xl font-bold mt-4">
            Education For All
          </h3>
          <p className="mt-4 text-gray-600">
            Equal learning opportunities for every child.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-red-500 hover:-translate-y-3 transition">
          ❤️
          <h3 className="text-2xl font-bold mt-4">
            Healthy Communities
          </h3>
          <p className="mt-4 text-gray-600">
            Accessible healthcare and wellness support.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-cyan-500 hover:-translate-y-3 transition">
          💧
          <h3 className="text-2xl font-bold mt-4">
            Clean Water Access
          </h3>
          <p className="mt-4 text-gray-600">
            Safe and sustainable water resources.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-pink-500 hover:-translate-y-3 transition">
          👩
          <h3 className="text-2xl font-bold mt-4">
            Women Empowerment
          </h3>
          <p className="mt-4 text-gray-600">
            Equal opportunities and economic independence.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-green-500 hover:-translate-y-3 transition">
          🌳
          <h3 className="text-2xl font-bold mt-4">
            Sustainable Environment
          </h3>
          <p className="mt-4 text-gray-600">
            Protecting nature for future generations.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-yellow-500 hover:-translate-y-3 transition">
          🤝
          <h3 className="text-2xl font-bold mt-4">
            Inclusive Society
          </h3>
          <p className="mt-4 text-gray-600">
            Dignity, equality and opportunity for all.
          </p>
        </div>

      </div>

    </div>

  </section>

  {/* Inspirational Quote */}
  <section className="py-24 bg-gradient-to-r from-indigo-950 via-purple-900 to-slate-900 text-white">

    <div className="max-w-5xl mx-auto text-center px-6">

      <div className="text-8xl text-yellow-400">
        ❝
      </div>

      <p className="text-3xl leading-relaxed font-light">
        Our vision is not only to help communities survive,
        but to empower them to thrive with dignity,
        opportunity and hope.
      </p>

    </div>

  </section>

  {/* CTA */}
  <section className="py-24 bg-white">

    <div className="max-w-5xl mx-auto text-center px-6">

      <h2 className="text-5xl font-bold text-slate-900">
        Help Us Build This Vision
      </h2>

      <p className="mt-6 text-xl text-gray-600">
        Together we can create a brighter and more inclusive future.
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
        Support Our Vision
      </a>

    </div>

  </section>

</main>

);
}
