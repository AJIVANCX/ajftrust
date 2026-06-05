export default function DonateCTASection() {
return ( <section className="relative overflow-hidden">

  {/* Background */}
  <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 py-28">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="text-white">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            Support Our Mission
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6">
            Every Donation Creates Hope
          </h2>

          <p className="text-xl mt-6 leading-8 text-white/90">
            Your contribution helps us provide education,
            drinking water, healthcare, environmental
            protection and social welfare support to
            underprivileged communities.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition">
              Donate Now
            </button>

            <button className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition">
              Become Volunteer
            </button>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="bg-white p-8 rounded-3xl shadow-2xl">

            <img
              src="/images/donate-qr.png"
              alt="Donate QR"
              className="w-72 h-72 object-contain"
            />

            <h3 className="text-center mt-6 text-2xl font-bold text-blue-900">
              Scan & Donate
            </h3>

            <p className="text-center text-gray-600 mt-2">
              Support Anand Jivan Foundation Trust
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

  {/* Wave Bottom */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-full h-[120px]"
    >
      <path
        d="M321.39,56.44C175.28,108.72,0,0,0,0V120H1200V0C1078.33,98.67,940.84,111.84,821.39,89.08C676.74,61.34,571.94,-9.52,321.39,56.44Z"
        className="fill-white"
      />
    </svg>
  </div>

</section>
);
}
