"use client";

import { useState } from "react";
import Link from "next/link";
import {
FaBars,
FaTimes,
FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);
const [aboutOpen, setAboutOpen] = useState(false);
const [workOpen, setWorkOpen] = useState(false);

return ( <nav
   className="
   fixed
   top-[104px]
   left-0
   right-0
   z-[9999]
   w-full
   bg-gradient-to-r
   from-slate-900
   via-blue-950
   to-slate-900
   text-white
   border-b-2
   border-yellow-500
   shadow-xl
   "
 > <div className="max-w-7xl mx-auto px-4">

    <div className="flex items-center justify-between h-16">

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-2xl"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-8 font-medium">

        <li>
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
        </li>

        {/* About Dropdown */}
        <li className="relative group">
          <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">
            About Us
            <FaChevronDown size={12} />
          </div>

          <div className="absolute top-full left-0 hidden group-hover:block bg-white text-gray-800 min-w-[240px] rounded-xl shadow-2xl overflow-hidden">
            <Link href="/about" className="block px-5 py-3 hover:bg-gray-100">
              About AJF
            </Link>
            <Link href="/about/mission" className="block px-5 py-3 hover:bg-gray-100">
              Mission
            </Link>
            <Link href="/about/vision" className="block px-5 py-3 hover:bg-gray-100">
              Vision
            </Link>
            <Link href="/about/team" className="block px-5 py-3 hover:bg-gray-100">
              Leadership Team
            </Link>
            <Link href="/about/legal" className="block px-5 py-3 hover:bg-gray-100">
              Legal Documents
            </Link>
          </div>
        </li>

        {/* Our Work Dropdown */}
        <li className="relative group">
          <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">
            Our Work
            <FaChevronDown size={12} />
          </div>

          <div className="absolute top-full left-0 hidden group-hover:block bg-white text-gray-800 min-w-[260px] rounded-xl shadow-2xl overflow-hidden">
            <Link href="/areas/education" className="block px-5 py-3 hover:bg-gray-100">📚 Education</Link>
            <Link href="/areas/healthcare" className="block px-5 py-3 hover:bg-gray-100">🏥 Healthcare</Link>
            <Link href="/areas/drinking-water" className="block px-5 py-3 hover:bg-gray-100">💧 Drinking Water</Link>
            <Link href="/areas/women-empowerment" className="block px-5 py-3 hover:bg-gray-100">👩 Women Empowerment</Link>
            <Link href="/areas/environment" className="block px-5 py-3 hover:bg-gray-100">🌳 Environment</Link>
            <Link href="/areas/emergency-relief" className="block px-5 py-3 hover:bg-gray-100">🚑 Emergency Relief</Link>
          </div>
        </li>

        <li><Link href="/projects" className="hover:text-yellow-400">Projects</Link></li>
        <li><Link href="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
        <li><Link href="/events" className="hover:text-yellow-400">Events</Link></li>
        <li><Link href="/volunteer" className="hover:text-yellow-400">Volunteer</Link></li>
        <li><Link href="/internship" className="hover:text-yellow-400">Internship</Link></li>
        <li><Link href="/blog" className="hover:text-yellow-400">Blog</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>

      </ul>

      {/* Donate Button */}
      <Link
        href="/donate"
        className="
        bg-gradient-to-r
        from-yellow-400
        to-yellow-600
        text-black
        px-5
        py-2
        rounded-full
        font-bold
        shadow-lg
        hover:scale-105
        transition-all
        "
      >
        Donate Now
      </Link>
    </div>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="lg:hidden py-4 border-t border-slate-700 bg-slate-950">

        <div className="flex flex-col gap-4 text-sm">

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="text-left"
          >
            About Us ▾
          </button>

          {aboutOpen && (
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/about">About AJF</Link>
              <Link href="/about/mission">Mission</Link>
              <Link href="/about/vision">Vision</Link>
              <Link href="/about/team">Leadership Team</Link>
            </div>
          )}

          <button
            onClick={() => setWorkOpen(!workOpen)}
            className="text-left"
          >
            Our Work ▾
          </button>

          {workOpen && (
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/areas/education">Education</Link>
              <Link href="/areas/healthcare">Healthcare</Link>
              <Link href="/areas/drinking-water">Drinking Water</Link>
              <Link href="/areas/women-empowerment">Women Empowerment</Link>
              <Link href="/areas/environment">Environment</Link>
            </div>
          )}

          <Link href="/projects">Projects</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/events">Events</Link>
          <Link href="/volunteer">Volunteer</Link>
          <Link href="/internship">Internship</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

        </div>
      </div>
    )}
  </div>
</nav>

);
}
