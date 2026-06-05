"use client";

export default function ContactPage() {
return ( <main className="bg-slate-50 overflow-hidden">

  {/* Hero Section */}
  <section className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-cyan-600 text-white py-36 overflow-hidden">

    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

      <span className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full">
        Anand Jivan Foundation Trust
      </span>

      <h1 className="text-6xl md:text-7xl font-bold mt-8 animate-pulse">
        Contact Us
      </h1>

      <p className="max-w-3xl mx-auto mt-8 text-xl">
        Together we can build a better future.
        Reach out for donations, volunteering,
        partnerships and social initiatives.
      </p>

    </div>

    {/* Wave */}
    <div className="absolute bottom-0 left-0 w-full">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[120px]"
      >
        <path
          d="M321.39,56.44C175.28,108.72,0,0,0,0V120H1200V0C1078.33,98.67,940.84,111.84,821.39,89.08C676.74,61.34,571.94,-9.52,321.39,56.44Z"
          fill="#f8fafc"
        />
      </svg>
    </div>

  </section>

  {/* Contact Cards */}
  <section className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
        <h3 className="text-2xl font-bold text-indigo-700">
          Call Us
        </h3>
        <p className="mt-4 text-lg">
          +91 9155751363
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
        <h3 className="text-2xl font-bold text-green-600">
          Email
        </h3>
        <p className="mt-4 text-lg">
          info@ajftrust.org
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
        <h3 className="text-2xl font-bold text-orange-500">
          Office
        </h3>
        <p className="mt-4 text-lg">
          Darbhanga, Bihar, India
        </p>
      </div>

    </div>

  </section>

  {/* Contact Form + Trust Info */}
  <section className="max-w-7xl mx-auto px-6 pb-20">

    <div className="grid lg:grid-cols-2 gap-10">

      <div className="bg-white p-10 rounded-3xl shadow-2xl">

        <h2 className="text-4xl font-bold text-slate-900 mb-8">
          Send Message
        </h2>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border p-4 rounded-xl"
          />

          <button
            className="
            w-full
            bg-gradient-to-r
            from-orange-500
            to-red-600
            text-white
            py-4
            rounded-xl
            font-bold
            "
          >
            Send Message
          </button>

        </form>

      </div>

      <div className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white p-10 rounded-3xl shadow-2xl">

        <h2 className="text-4xl font-bold">
          Anand Jivan Foundation Trust
        </h2>

        <p className="mt-8 text-lg leading-8">
          Working towards education, healthcare,
          drinking water, women empowerment,
          environmental sustainability and
          community development.
        </p>

        <div className="mt-10 space-y-4">

          <p>📞 +91 9155751363</p>
          <p>✉ info@ajftrust.org</p>
          <p>🌐 www.ajftrust.org</p>
          <p>📍 Darbhanga, Bihar, India</p>

        </div>

        <a
          href="https://wa.me/919155751363"
          target="_blank"
          className="
          inline-block
          mt-8
          bg-green-600
          px-8
          py-4
          rounded-xl
          font-bold
          "
        >
          WhatsApp Us
        </a>

      </div>

    </div>

  </section>

  {/* Impact Stats */}
  <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h2 className="text-5xl font-bold">5000+</h2>
          <p>Lives Impacted</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">150+</h2>
          <p>Projects Completed</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">100+</h2>
          <p>Volunteers</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">20+</h2>
          <p>Districts Reached</p>
        </div>

      </div>

    </div>

  </section>

  {/* Office Hours */}
  <section className="py-20 bg-white">

    <div className="max-w-4xl mx-auto px-6">

      <div className="bg-slate-50 rounded-3xl p-10 shadow-xl">

        <h2 className="text-4xl font-bold text-center text-slate-900">
          Office Hours
        </h2>

        <div className="mt-8 space-y-3 text-center text-lg">

          <p>Monday - Friday : 9:00 AM - 6:00 PM</p>
          <p>Saturday : 10:00 AM - 4:00 PM</p>
          <p>Sunday : Closed</p>

        </div>

      </div>

    </div>

  </section>

  {/* Google Map */}
  <section className="pb-24">

    <div className="max-w-7xl mx-auto px-6">

      <div className="overflow-hidden rounded-3xl shadow-2xl">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3718347681865!2d85.8626808748701!3d26.184579891003246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb7b2c90ad847%3A0xf5405206232f67ea!2sANAND%20JIVAN%20FOUNDATION%20TRUST!5e0!3m2!1sen!2sin!4v1780237465054!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />

      </div>

    </div>

  </section>

  {/* WhatsApp CTA */}
  <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">

    <div className="max-w-5xl mx-auto text-center px-6">

      <h2 className="text-5xl font-bold">
        Need Immediate Assistance?
      </h2>

      <p className="mt-6 text-xl">
        Connect with our team directly on WhatsApp.
      </p>

      <a
        href="https://wa.me/919155751363"
        target="_blank"
        className="
        inline-block
        mt-8
        bg-white
        text-green-700
        px-10
        py-4
        rounded-full
        font-bold
        "
      >
        Chat on WhatsApp
      </a>

    </div>

  </section>

</main>
);
}
