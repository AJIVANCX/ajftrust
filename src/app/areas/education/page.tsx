export default function EducationPage() {
return ( <main className="min-h-screen bg-slate-100">

  {/* HERO */}

  <section className="bg-gradient-to-r from-[#071C4D] via-blue-900 to-[#071C4D] text-white py-20">

    <div className="max-w-7xl mx-auto px-6 text-center">

      <h1 className="text-5xl font-black">
        Education Development Program
      </h1>

      <p className="mt-6 text-xl text-blue-100">
        Empowering Children Through Education
      </p>

    </div>

  </section>

  {/* ABOUT */}

  <section className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-2 gap-10 items-center">

      <div>
        <img
          src="/education.jpg"
          alt="Education"
          className="rounded-3xl shadow-xl"
        />
      </div>

      <div>

        <h2 className="text-4xl font-bold text-[#071C4D]">
          Quality Education For Every Child
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          Anand Jivan Foundation Trust works
          towards providing quality education
          to underprivileged children through
          scholarships, school support,
          digital learning programs, and
          educational awareness campaigns.
        </p>

      </div>

    </div>

  </section>

  {/* OBJECTIVES */}

  <section className="bg-white py-16">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Program Objectives
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-50 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl">
            Scholarships
          </h3>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl">
            School Supplies
          </h3>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl">
            Digital Learning
          </h3>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl shadow">
          <h3 className="font-bold text-xl">
            Career Guidance
          </h3>
        </div>

      </div>

    </div>

  </section>

  {/* IMPACT */}

  <section className="py-16">

    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Impact Created
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-8 rounded-3xl shadow text-center">
          <div className="text-5xl font-black text-blue-700">
            500+
          </div>
          <p>Students Supported</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow text-center">
          <div className="text-5xl font-black text-green-700">
            50+
          </div>
          <p>Schools Reached</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow text-center">
          <div className="text-5xl font-black text-purple-700">
            100+
          </div>
          <p>Scholarships Awarded</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow text-center">
          <div className="text-5xl font-black text-orange-700">
            20+
          </div>
          <p>Digital Camps</p>
        </div>

      </div>

    </div>

  </section>

</main>

);
}
