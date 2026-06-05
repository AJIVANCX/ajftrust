export default function TestimonialsSection() {

  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "Volunteer",
      message:
        "Working with Anand Jivan Foundation Trust has been a life-changing experience. Their dedication to social welfare is inspiring.",
    },
    {
      name: "Sunita Devi",
      role: "Beneficiary",
      message:
        "The drinking water project helped our village immensely. We are grateful for the support and care.",
    },
    {
      name: "Amit Sharma",
      role: "Donor",
      message:
        "AJF Trust is transparent and impactful. I am proud to contribute to their mission.",
    },
    {
      name: "Pooja Kumari",
      role: "Community Member",
      message:
        "The education support program has transformed the future of many children in our community.",
    },
    {
      name: "Rahul Singh",
      role: "Volunteer",
      message:
        "The trust works with honesty and dedication. Every contribution creates visible impact.",
    },
    {
      name: "Anita Devi",
      role: "Beneficiary",
      message:
        "Healthcare camps organized by AJF Trust brought much-needed medical support to our village.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 rotate-180"
        >
          <path
            d="M321.39,56.44C175.28,108.72,0,0,0,0V120H1200V0C1078.33,98.67,940.84,111.84,821.39,89.08C676.74,61.34,571.94,-9.52,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <span
            className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-yellow-500/20
            text-yellow-300
            font-semibold
            tracking-widest
            "
          >
            TESTIMONIALS
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-6">
            What People Say About Us
          </h2>

          <p className="mt-6 text-slate-300 text-lg max-w-3xl mx-auto">
            Real stories from volunteers, beneficiaries,
            donors and supporters who have experienced
            the impact of Anand Jivan Foundation Trust.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-[35px]
              p-8
              hover:-translate-y-4
              hover:bg-white/15
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div className="text-6xl text-yellow-400 mb-4">
                ❝
              </div>

              <p className="text-slate-200 leading-8 min-h-[170px]">
                {item.message}
              </p>

              <div className="flex items-center gap-4 mt-8">

                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-gradient-to-r
                  from-yellow-500
                  to-orange-500
                  flex
                  items-center
                  justify-center
                  text-black
                  text-xl
                  font-bold
                  "
                >
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-yellow-300">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Bottom Wave */}
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
  );
}