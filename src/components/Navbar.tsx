"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (<nav
    className="
  sticky
  top-0
  z-[9999]
  w-full
  bg-gradient-to-r
  from-slate-900
  via-blue-950
  to-slate-900
  text-white
  border-b
  border-yellow-500
  shadow-lg
  "
  > <div className="max-w-7xl mx-auto px-4">
      {/* Desktop + Mobile Header */}
      <div className="flex items-center justify-between h-16">

        {/* Mobile Hamburger */}
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

          <li>
            <Link href="/about" className="hover:text-yellow-400">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/our-work" className="hover:text-yellow-400">
              Our Work
            </Link>
          </li>

          <li>
            <Link href="/projects" className="hover:text-yellow-400">
              Projects
            </Link>
          </li>

          <li>
            <Link href="/gallery" className="hover:text-yellow-400">
              Gallery
            </Link>
          </li>

          <li>
            <Link href="/events" className="hover:text-yellow-400">
              Events
            </Link>
          </li>

          <li>
            <Link href="/volunteer" className="hover:text-yellow-400">
              Volunteer
            </Link>
          </li>

          <li>
            <Link href="/internship" className="hover:text-yellow-400">
              Internship
            </Link>
          </li>

          <li>
            <Link href="/blog" className="hover:text-yellow-400">
              Blog
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>

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
        shadow-md
        hover:scale-105
        transition
        "
        >
          Donate Now
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden py-4 border-t border-slate-700">

          <div className="flex flex-col gap-4 text-sm">

            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/our-work">Our Work</Link>
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
