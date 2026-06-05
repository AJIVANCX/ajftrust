export default function TeamPage() {
  const team = [
    {
      name: "Mrs. Pooja Kumari",
      role: "Project Director",
      image: "/team/pooja.jpg",
      color: "from-purple-600 to-pink-500",
    },
    {
      name: "Mr. Guddu Kumar",
      role: "Managing Trustee",
      image: "/team/guddu.jpg",
      color: "from-blue-700 to-cyan-500",
    },
    {
      name: "Ms. Ankita Kumari",
      role: "Secretary",
      image: "/team/ankita.jpg",
      color: "from-emerald-600 to-green-500",
    },
  ];

  return (
    <main className="bg-slate-50 overflow-hidden">

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-32 overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full">
            Leadership Team
          </span>

          <h1 className="text-6xl md:text-7xl font-black mt-8">
            Our Team
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-xl text-slate-200 leading-9">
            Dedicated leaders working together to create
            positive and sustainable impact in society.
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
              fill="#f8fafc"
            />
          </svg>
        </div>

      </section>

      {/* Team Cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <span className="text-yellow-600 font-semibold uppercase tracking-widest">
            Leadership
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Meet Our Team
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {team.map((member, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-[35px]
              overflow-hidden
              shadow-xl
              hover:-translate-y-4
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div
                className={`h-3 bg-gradient-to-r ${member.color}`}
              ></div>

              <div className="p-10 text-center">

                <div
                  className="
                  w-32
                  h-32
                  mx-auto
                  rounded-full
                  overflow-hidden
                  border-4
                  border-yellow-400
                  shadow-lg
                  "
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mt-8">
                  {member.name}
                </h3>

                <p className="mt-3 text-lg font-semibold text-blue-700">
                  {member.role}
                </p>

                <p className="mt-5 text-gray-600 leading-7">
                  Committed to advancing the mission and vision
                  of Anand Jivan Foundation Trust through
                  leadership, transparency and service.
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Message Section */}
      <section className="py-24 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <div className="text-8xl text-yellow-400">
            ❝
          </div>

          <h2 className="text-4xl font-bold mt-4">
            Together We Serve Humanity
          </h2>

          <p className="mt-8 text-xl leading-10 text-slate-300">
            Our leadership team is committed to creating
            sustainable impact through education, healthcare,
            drinking water, women empowerment, environmental
            sustainability and community development.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold text-slate-900">
            Join Our Mission
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            Together we can transform lives and build
            stronger communities.
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
            Support Our Work
          </a>

        </div>

      </section>

    </main>
  );
}