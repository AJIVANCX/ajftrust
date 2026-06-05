import {
FaGraduationCap,
FaHeartbeat,
FaTint,
FaFemale,
FaLeaf,
FaHandsHelping,
} from "react-icons/fa";

export default function AreasOfWorkSection() {

const works = [
{
title: "Education",
icon: <FaGraduationCap size={42} />,
desc: "Providing educational support, scholarships and learning opportunities for underprivileged children.",
color: "from-blue-500 to-blue-700",
},
{
title: "Healthcare",
icon: <FaHeartbeat size={42} />,
desc: "Health awareness campaigns, medical camps and healthcare assistance programs.",
color: "from-red-500 to-pink-600",
},
{
title: "Drinking Water",
icon: <FaTint size={42} />,
desc: "Safe drinking water projects, handpump installation and sanitation initiatives.",
color: "from-cyan-500 to-blue-600",
},
{
title: "Women Empowerment",
icon: <FaFemale size={42} />,
desc: "Skill development, livelihood support and empowerment programs for women.",
color: "from-purple-500 to-pink-600",
},
{
title: "Go Green",
icon: <FaLeaf size={42} />,
desc: "Tree plantation drives and environmental sustainability campaigns.",
color: "from-green-500 to-emerald-600",
},
{
title: "Winter Relief",
icon: <FaHandsHelping size={42} />,
desc: "Distribution of blankets, sweaters and essential winter support.",
color: "from-orange-500 to-yellow-500",
},
];

return ( <section className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100">


  {/* Background Blur */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>

  {/* Wave Top */}
  <div className="absolute top-0 left-0 w-full">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-20 rotate-180"
    >
      <path
        d="M321.39,56.44C175.28,108.72,0,0,0,0V120H1200V0C1078.33,98.67,940.84,111.84,821.39,89.08C676.74,61.34,571.94,-9.52,321.39,56.44Z"
        fill="#f8fafc"
      />
    </svg>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">

      <span
        className="
        inline-block
        px-5
        py-2
        rounded-full
        bg-yellow-100
        text-yellow-700
        font-semibold
        "
      >
        WHAT WE DO
      </span>

      <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-6">
        Our Areas of Work
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-lg">
        Creating sustainable impact through education,
        healthcare, drinking water, women empowerment,
        environmental sustainability and humanitarian relief.
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {works.map((item, index) => (
        <div
          key={index}
          className="
          group
          bg-white
          rounded-3xl
          shadow-xl
          p-8
          hover:-translate-y-4
          hover:shadow-2xl
          transition-all
          duration-500
          overflow-hidden
          relative
          "
        >

          {/* Gradient Top */}
          <div
            className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color}`}
          ></div>

          {/* Icon */}
          <div
            className={`
            w-20
            h-20
            rounded-full
            flex
            items-center
            justify-center
            text-white
            bg-gradient-to-r
            ${item.color}
            shadow-lg
            group-hover:scale-110
            transition
            `}
          >
            {item.icon}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-6">
            {item.title}
          </h3>

          <p className="text-gray-600 mt-4 leading-8">
            {item.desc}
          </p>

          <button
            className="
            mt-6
            text-blue-700
            font-semibold
            hover:translate-x-2
            transition
            "
          >
            Learn More →
          </button>

        </div>
      ))}

    </div>

    {/* Impact Banner */}
    <div
      className="
      mt-20
      rounded-[40px]
      bg-gradient-to-r
      from-slate-900
      via-blue-950
      to-slate-900
      text-white
      p-10
      shadow-2xl
      "
    >

      <div className="grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">
            5000+
          </h3>
          <p>Beneficiaries</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">
            50+
          </h3>
          <p>Projects</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">
            100+
          </h3>
          <p>Volunteers</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-yellow-400">
            10+
          </h3>
          <p>Years Impact</p>
        </div>

      </div>

    </div>

  </div>

  {/* Wave Bottom */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-20"
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
