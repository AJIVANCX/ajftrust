"use client";

import Link from "next/link";

export default function Navbar() {
  return (<nav
    className="
   w-full
   bg-gradient-to-r
   from-slate-900
   via-blue-950
   to-slate-900
   text-white
   border-b-2
   border-yellow-500
   shadow-lg
   "
  > <div className="max-w-7xl mx-auto px-6">
      <ul
        className="
      flex
      flex-wrap
      justify-center
      items-center
      gap-6
      lg:gap-10
      py-5
      text-sm
      lg:text-base
      font-medium
      "
      >
        <li>
          <Link
            href="/"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
        </li>

        {/* About */}
        <li className="group relative py-3">

          <span className="cursor-pointer hover:text-yellow-400 transition duration-300">
            About Us ▾
          </span>

          <div
            className="
    absolute
    left-0
    top-full
    min-w-[260px]
    opacity-0
    invisible
    translate-y-2
    group-hover:opacity-100
    group-hover:visible
    group-hover:translate-y-0
    transition-all
    duration-300
    bg-white
    text-gray-800
    rounded-xl
    shadow-2xl
    z-50
    overflow-hidden
    border
    border-gray-100
    "
          >
            <Link href="/about" className="block px-5 py-3 hover:bg-slate-100">
              About AJF
            </Link>

            <Link href="/about/mission" className="block px-5 py-3 hover:bg-slate-100">
              Mission
            </Link>

            <Link href="/about/vision" className="block px-5 py-3 hover:bg-slate-100">
              Vision
            </Link>

            <Link href="/about/team" className="block px-5 py-3 hover:bg-slate-100">
              Leadership Team
            </Link>
          </div>

        </li>

        {/* Our Work */}
        <li className="group relative py-3">

          <span className="cursor-pointer hover:text-yellow-400 transition duration-300">
            Our Work ▾
          </span>

          <div
            className="
    absolute
    left-0
    top-full
    min-w-[290px]
    opacity-0
    invisible
    translate-y-2
    group-hover:opacity-100
    group-hover:visible
    group-hover:translate-y-0
    transition-all
    duration-300
    bg-white
    text-gray-800
    rounded-xl
    shadow-2xl
    z-50
    overflow-hidden
    border
    border-gray-100
    "
          >
            <Link href="/areas/education" className="block px-5 py-3 hover:bg-slate-100">
              📚 Education
            </Link>

            <Link href="/areas/healthcare" className="block px-5 py-3 hover:bg-slate-100">
              🏥 Healthcare
            </Link>

            <Link href="/areas/drinking-water" className="block px-5 py-3 hover:bg-slate-100">
              💧 Drinking Water
            </Link>

            <Link href="/areas/women-empowerment" className="block px-5 py-3 hover:bg-slate-100">
              👩 Women Empowerment
            </Link>

            <Link href="/areas/environment" className="block px-5 py-3 hover:bg-slate-100">
              🌳 Environment
            </Link>

            <Link href="/areas/winter-relief" className="block px-5 py-3 hover:bg-slate-100">
              🧥 Winter Relief
            </Link>
          </div>

        </li>
        <li>
          <Link href="/projects" className="hover:text-yellow-400 transition">
            Projects
          </Link>
        </li>

        <li>
          <Link href="/gallery" className="hover:text-yellow-400 transition">
            Gallery
          </Link>
        </li>

        <li>
          <Link href="/events" className="hover:text-yellow-400 transition">
            Events
          </Link>
        </li>

        <li>
          <Link href="/volunteer" className="hover:text-yellow-400 transition">
            Volunteer
          </Link>
        </li>

        <li>
          <Link href="/internship" className="hover:text-yellow-400 transition">
            Internship
          </Link>
        </li>

        <li>
          <Link href="/blog" className="hover:text-yellow-400 transition">
            Blog
          </Link>
        </li>

        <li>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </li>

        <li>
          <Link
            href="/donate"
            className="
          bg-gradient-to-r
          from-yellow-400
          to-yellow-600
          text-black
          px-6
          py-3
          rounded-full
          font-bold
          shadow-lg
          hover:scale-105
          transition-all
          "
          >
            Donate Now
          </Link>
        </li>
      </ul>

    </div>
  </nav>

  );
}
