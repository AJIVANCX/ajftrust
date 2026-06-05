"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
return ( <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
  {/* Background Effects */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-40"></div>

  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100 rounded-full blur-3xl opacity-40"></div>

  {/* Wave */}
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

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Image */}
      <div className="relative">

        <div className="overflow-hidden rounded-[40px] shadow-2xl">
          <Image
            src="/images/about.jpg"
            alt="AJF Trust"
            width={800}
            height={700}
            className="
            w-full
            h-full
            object-cover
            hover:scale-110
            transition-all
            duration-700
            "
          />
        </div>

        {/* Experience */}
        <div
          className="
          absolute
          -bottom-8
          -right-8
          bg-gradient-to-r
          from-purple-700
          to-rose-600
          text-white
          px-8
          py-6
          rounded-3xl
          shadow-2xl
          "
        >
          <h3 className="text-4xl font-bold">
            12+
          </h3>

          <p className="text-sm uppercase tracking-wider">
            Years of Impact
          </p>
        </div>

        {/* Floating Stats */}
        <div
          className="
          absolute
          top-8
          -left-8
          bg-white
          p-5
          rounded-2xl
          shadow-xl
          "
        >
          <h4 className="font-bold text-purple-700 text-2xl">
            7500+
          </h4>

          <p className="text-sm text-gray-600">
            Lives Impacted
          </p>
        </div>

      </div>

      {/* Right Content */}
      <div>

        <span
          className="
          inline-block
          px-5
          py-2
          rounded-full
          bg-purple-100
          text-purple-700
          font-semibold
          tracking-widest
          "
        >
          ABOUT AJF TRUST
        </span>

        <h2
          className="
          text-5xl
          md:text-6xl
          font-black
          text-slate-900
          mt-6
          leading-tight
          "
        >
          Empowering Minds,
          <br />
          Transforming Communities
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-8">
          Anand Jivan Foundation Trust is committed to creating
          sustainable social impact through education, psychology,
          healthcare, women empowerment, skill development,
          environmental sustainability and community welfare programs.
        </p>

        <p className="mt-5 text-lg text-gray-700 leading-8">
          We work to ensure equal opportunities, dignity and access
          to essential resources for children, youth, women and
          underserved communities across India.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-5 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
            🎓 Higher Education Support
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
            🧠 Psychology & Mental Wellness
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
            💼 Skill Development Programs
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
            🏥 Healthcare Initiatives
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
            💧 Drinking Water Projects
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 hover:-translate-y-2 transition">
            👩 Women Empowerment
          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-4 gap-4 mt-10">

          <div className="text-center bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-3xl font-bold text-purple-700">
              7500+
            </h3>
            <p className="text-sm text-gray-600">
              Beneficiaries
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-3xl font-bold text-purple-700">
              75+
            </h3>
            <p className="text-sm text-gray-600">
              Projects
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-3xl font-bold text-purple-700">
              15+
            </h3>
            <p className="text-sm text-gray-600">
              Districts
            </p>
          </div>

          <div className="text-center bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-3xl font-bold text-purple-700">
              12+
            </h3>
            <p className="text-sm text-gray-600">
              Years
            </p>
          </div>

        </div>

        <Link
          href="/about"
          className="
          inline-flex
          items-center
          mt-10
          px-10
          py-4
          rounded-full
          bg-gradient-to-r
          from-purple-800
          via-fuchsia-700
          to-rose-600
          text-white
          font-bold
          shadow-2xl
          hover:scale-105
          transition-all
          "
        >
          Discover Our Mission →
        </Link>

      </div>

    </div>

  </div>
</section>

);
}
