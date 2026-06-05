"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaUserLock,
  FaCheckCircle,
} from "react-icons/fa";

export default function MainHeader() {
  return (
    <header
      className="
      bg-white
      border-b-2
      border-yellow-500
      shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between py-4">

          {/* Left Side */}
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            {/* Logo */}
            <div
              className="
              w-16
              h-16
              md:w-20
              md:h-20
              rounded-full
              overflow-hidden
              shadow-lg
              bg-white
              "
            >
              <Image
                src="/logo/logo.png"
                alt="Anand Jivan Foundation Trust"
                width={70}
                height={70}
                priority
                className="
                w-full
                h-full
                object-cover
                hover:scale-105
                transition-all
                duration-500
                "
              />
            </div>

            {/* Trust Name */}
            <div>
              <h1
                className="
                text-2xl
                md:text-4xl
                font-extrabold
                text-slate-800
                leading-tight
                "
              >
                Anand Jivan Foundation Trust
              </h1>

              <p
                className="
                text-yellow-600
                font-semibold
                text-sm
                md:text-base
                "
              >
                Let's Make Better Life
              </p>
            </div>
          </Link>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">

            <Link
              href="/verify"
              className="
              hidden
              md:flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-blue-700
              text-white
              font-semibold
              shadow-md
              hover:bg-blue-800
              transition
              "
            >
              <FaCheckCircle />
              Verify
            </Link>

            <Link
              href="/login"
              className="
              hidden
              md:flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-slate-800
              text-white
              font-semibold
              shadow-md
              hover:bg-slate-900
              transition
              "
            >
              <FaUserLock />
              Login
            </Link>

          </div>

        </div>

      </div>
    </header>
  );
}