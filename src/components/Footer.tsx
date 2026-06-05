import Image from "next/image";
import Link from "next/link";
import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaYoutube,
FaPhoneAlt,
FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
return ( <footer className="relative bg-slate-950 text-white mt-20">

  {/* Wave Top */}
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-20"
    >
      <path
        d="M321.39,56.44C175.28,108.72,0,0,0,0V120H1200V0C1078.33,98.67,940.84,111.84,821.39,89.08C676.74,61.34,571.94,-9.52,321.39,56.44Z"
        fill="#020617"
      />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

      {/* Trust Info */}
      <div>

        <div className="flex items-center gap-3 mb-5">

          <Image
            src="/logo/logo.png"
            alt="AJF Logo"
            width={70}
            height={70}
          />

          <div>
            <h3 className="text-lg font-bold text-yellow-400">
              ANAND JIVAN FOUNDATION TRUST
            </h3>

            <p className="text-xs text-green-400">
              Registered Public Charitable Trust
            </p>
          </div>

        </div>

        <p className="text-gray-300 leading-7 text-sm">
          Working towards Education,
          Healthcare, Drinking Water,
          Women Empowerment, Environment,
          Livelihood Development and
          Social Welfare Programs.
        </p>

        <div className="mt-5 bg-slate-900 border border-yellow-500 rounded-xl p-4">

          <h4 className="text-yellow-400 font-semibold mb-2">
            Registered Office
          </h4>

          <p className="text-sm text-gray-300 leading-6">
            MABBI BELAUNA,
            POST - LALSHAHPUR,
            PANCHAYAT - SHAHBAJPUR,
            DARBHANGA, BIHAR - 846005,
            INDIA
          </p>

        </div>

      </div>

      {/* Quick Links */}
      <div>

        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-300">

          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/donate">Donate</Link></li>

        </ul>

      </div>

      {/* Areas */}
      <div>

        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Areas Of Work
        </h3>

        <ul className="space-y-3 text-gray-300">

          <li>📚 Education</li>
          <li>🏥 Healthcare</li>
          <li>💧 Drinking Water</li>
          <li>👩 Women Empowerment</li>
          <li>🌳 Environment</li>
          <li>🧥 Winter Relief</li>

        </ul>

        <div className="mt-6 bg-slate-900 border border-yellow-500 rounded-xl p-4">

          <h4 className="text-yellow-400 font-semibold mb-2">
            Registration Details
          </h4>

          <p className="text-sm text-gray-300">
            DARPAN ID: BR/2023/0343963
          </p>

          <p className="text-sm text-gray-300">
            PAN: AAJTA9323K
          </p>

          <p className="text-sm text-gray-300">
            12A Registration Available
          </p>

          <p className="text-sm text-gray-300">
            80G Registration Available
          </p>

        </div>

      </div>

      {/* Contact */}
      <div>

        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Contact Information
        </h3>

        <div className="space-y-4 text-gray-300">

          <div className="flex gap-3">
            <FaPhoneAlt className="mt-1 text-green-400" />
            <span>+91 9155751363</span>
          </div>

          <div className="flex gap-3">
            <MdEmail className="mt-1 text-green-400" />
            <span>info@ajftrust.org</span>
          </div>

          <div className="flex gap-3">
            <FaMapMarkerAlt className="mt-1 text-green-400" />
            <span>
              Darbhanga, Bihar - 846005
            </span>
          </div>

        </div>

        <div className="flex gap-4 mt-6 text-xl">

          <a href="#" className="hover:text-yellow-400">
            <FaFacebookF />
          </a>

          <a href="#" className="hover:text-yellow-400">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-yellow-400">
            <FaLinkedinIn />
          </a>

          <a href="#" className="hover:text-yellow-400">
            <FaYoutube />
          </a>

        </div>

      </div>

    </div>

  </div>

  {/* Policy Links */}
  <div className="border-t border-slate-800">

    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6 text-sm text-gray-400">

      <Link href="/privacy-policy">
        Privacy Policy
      </Link>

      <Link href="/refund-policy">
        Refund Policy
      </Link>

      <Link href="/terms-and-conditions">
        Terms & Conditions
      </Link>

      <Link href="/disclaimer">
        Disclaimer
      </Link>

    </div>

  </div>

  {/* Security Bar */}
  <div className="text-center py-4 border-t border-slate-800">

    <p className="text-green-400 text-sm">
      🔒 Secure Donations Powered by Razorpay
    </p>

  </div>

  {/* Bottom Footer */}
  <div className="border-t border-slate-800">

    <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

      <p className="text-gray-400 text-sm text-center">
        © 2026 ANAND JIVAN FOUNDATION TRUST.
        All Rights Reserved.
      </p>

      <p className="text-gray-400 text-sm">
        Developed by Arika Soft Technologies
      </p>

    </div>

  </div>

</footer>

);
}
