"use client";

import Image from "next/image";
import Link from "next/link";
import {
FaUserLock,
FaCheckCircle,
} from "react-icons/fa";

export default function MainHeader() {
return ( <header className="bg-white border-b border-yellow-500 shadow-sm"> <div className="max-w-7xl mx-auto px-4">

    <div className="flex items-center justify-between py-2 md:py-3">

      {/* Logo + Name */}
      <Link
        href="/"
        className="flex items-center gap-3"
      >
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-white shadow">
          <Image
            src="/logo/logo.png"
            alt="Anand Jivan Foundation Trust"
            width={80}
            height={80}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <h1 className="text-lg md:text-3xl font-extrabold text-slate-800 leading-tight">
            Anand Jivan Foundation Trust
          </h1>

          <p className="text-yellow-600 font-semibold text-xs md:text-sm">
            Let's Make Better Life
          </p>
        </div>
      </Link>

      {/* Right Buttons */}
      <div className="flex items-center gap-2">

        <Link
          href="/verify"
          className="flex items-center gap-2 px-3 md:px-5 py-2 rounded-full bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition"
        >
          <FaCheckCircle />
          <span className="hidden md:inline">
            Verify
          </span>
        </Link>

        <Link
          href="/login"
          className="flex items-center gap-2 px-3 md:px-5 py-2 rounded-full bg-slate-800 text-white text-sm font-semibold hover:bg-slate-900 transition"
        >
          <FaUserLock />
          <span className="hidden md:inline">
            Login
          </span>
        </Link>

      </div>

    </div>

  </div>
</header>

);
}
