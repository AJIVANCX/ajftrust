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
return ( <div className="bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 text-white border-b border-yellow-500"> <div className="max-w-7xl mx-auto px-3">

    <div className="h-10 flex items-center justify-between">

      {/* Contact */}
      <div className="flex items-center gap-3 text-xs font-medium">

        <a
          href="tel:+919155751363"
          className="flex items-center gap-2 hover:text-yellow-400 transition"
        >
          <FaPhoneAlt className="text-yellow-400 text-[10px]" />
          <span>+91 9155751363</span>
        </a>

        <a
          href="mailto:info@ajftrust.org"
          className="hidden md:flex items-center gap-2 hover:text-yellow-400 transition"
        >
          <FaEnvelope className="text-yellow-400 text-[10px]" />
          <span>info@ajftrust.org</span>
        </a>

      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-2">

        <Link
          href="https://www.facebook.com/ajftrust"
          target="_blank"
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
        >
          <FaFacebookF size={10} />
        </Link>

        <Link
          href="https://www.instagram.com/ajftrusts"
          target="_blank"
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition"
        >
          <FaInstagram size={10} />
        </Link>

        <Link
          href="#"
          className="hidden md:flex w-6 h-6 rounded-full bg-white/10 items-center justify-center hover:bg-blue-700 transition"
        >
          <FaLinkedinIn size={10} />
        </Link>

        <Link
          href="#"
          className="hidden md:flex w-6 h-6 rounded-full bg-white/10 items-center justify-center hover:bg-red-600 transition"
        >
          <FaYoutube size={10} />
        </Link>

      </div>
    </div>

  </div>
</div>

);
}
