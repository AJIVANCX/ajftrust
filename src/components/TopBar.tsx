"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      className="
      bg-gradient-to-r
      from-slate-900
      via-green-900
      to-slate-900
      text-white
      border-b
      border-yellow-500/30
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        py-2
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-2
        "
      >
        {/* Contact Info */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          gap-3
          text-xs
          md:text-sm
          font-medium
          "
        >
          <a
            href="tel:+919155751363"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <FaPhoneAlt className="text-yellow-400" />
            +91 9155751363
          </a>

          <span className="hidden md:block text-gray-400">|</span>

          <a
            href="mailto:info@ajftrust.org"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <FaEnvelope className="text-yellow-400" />
            info@ajftrust.org
          </a>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-3">
          <Link
            href="https://www.facebook.com/ajftrust"
            className="
            w-8 h-8
            rounded-full
            bg-white/10
            flex items-center justify-center
            hover:bg-blue-600
            transition-all duration-300
            "
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://www.instagram.com/ajftrusts"
            className="
            w-8 h-8
            rounded-full
            bg-white/10
            flex items-center justify-center
            hover:bg-pink-600
            transition-all duration-300
            "
          >
            <FaInstagram />
          </Link>

          <Link
            href="#"
            className="
            w-8 h-8
            rounded-full
            bg-white/10
            flex items-center justify-center
            hover:bg-blue-700
            transition-all duration-300
            "
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href="#"
            className="
            w-8 h-8
            rounded-full
            bg-white/10
            flex items-center justify-center
            hover:bg-red-600
            transition-all duration-300
            "
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}