"use client";

import Image from "next/image";

export default function LoginPage() {
return ( <main className="min-h-screen bg-slate-50">

  {/* Hero Section */}
  <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-24">

    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

    <div className="relative max-w-6xl mx-auto px-4 text-center">

      <div className="text-6xl mb-5 animate-bounce">
        🔐
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold">
        Admin Login
      </h1>

      <p className="mt-5 text-lg text-slate-200">
        Anand Jivan Foundation Trust Management Portal
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

  {/* Login Card */}
  <section className="max-w-md mx-auto px-4 -mt-12 pb-20 relative z-10">

    <div className="bg-white rounded-3xl shadow-2xl p-8">

      <div className="text-center">

        <Image
          src="/logo/logo.png"
          alt="AJF Logo"
          width={90}
          height={90}
          className="mx-auto"
        />

        <h2 className="mt-4 text-2xl font-bold text-slate-900">
          Welcome Back
        </h2>

        <p className="text-gray-500 mt-2">
          Login to your AJF Admin Account
        </p>

      </div>

      <form className="mt-8 space-y-5">

        <div>

          <label className="block mb-2 font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="admin@ajftrust.org"
            className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-yellow-500
            "
          />

        </div>

        <div>

          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            className="
            w-full
            border
            rounded-xl
            px-4
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-yellow-500
            "
          />

        </div>

        <div className="flex justify-between items-center text-sm">

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>

          <a
            href="#"
            className="text-blue-700"
          >
            Forgot Password?
          </a>

        </div>

        <button
          type="submit"
          className="
          w-full
          py-3
          rounded-xl
          font-bold
          bg-gradient-to-r
          from-yellow-500
          to-yellow-400
          text-black
          shadow-lg
          hover:scale-105
          transition
          "
        >
          Login
        </button>

      </form>

    </div>

  </section>

</main>

);
}
