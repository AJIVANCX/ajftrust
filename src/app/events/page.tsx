"use client";

import Link from "next/link";

interface EventType {
title: string;
date: string;
location: string;
image: string;
}

export default function EventsPage() {
const events: EventType[] = [
{
title: "Education Support Camp",
date: "15 July 2026",
location: "Darbhanga, Bihar",
image: "/images/events/education.jpg",
},
{
title: "Healthcare Awareness Program",
date: "28 July 2026",
location: "Madhubani, Bihar",
image: "/images/events/healthcare.jpg",
},
{
title: "Tree Plantation Drive",
date: "10 August 2026",
location: "Samastipur, Bihar",
image: "/images/events/environment.jpg",
},
];

return ( <main className="bg-slate-50 min-h-screen">

  {/* HERO SECTION */}
  <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 text-white">

    <div className="absolute inset-0 bg-black/20"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">

      <span className="inline-block px-5 py-2 rounded-full bg-yellow-500 text-black font-bold">
        Anand Jivan Foundation Trust
      </span>

      <h1 className="mt-8 text-5xl md:text-7xl font-black">
        Events & Activities
      </h1>

      <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-green-100">
        Join our events, awareness campaigns, community programs,
        healthcare drives and educational initiatives.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">

        <Link
          href="/volunteer"
          className="px-8 py-4 rounded-full bg-yellow-500 text-black font-bold shadow-xl hover:scale-105 transition"
        >
          Become Volunteer
        </Link>

        <Link
          href="/donate"
          className="px-8 py-4 rounded-full bg-white text-green-900 font-bold shadow-xl hover:scale-105 transition"
        >
          Donate Now
        </Link>

      </div>

    </div>

    {/* WAVE */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg
        className="relative block w-full h-24"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44C197.8,94.36,91.82,111,0,120V0H1200V27.35C1132.19,48.92,1057.85,41.31,985.66,22.83C906.67,2,823.78,31,743.84,14.19C661.58-3.15,575.78-2.14,493.39,14.58C435.55,26.31,379.39,45.65,321.39,56.44Z"
          fill="#f8fafc"
        />
      </svg>
    </div>

  </section>

  {/* STATS */}
  <section className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
        <h3 className="text-4xl font-black text-green-700">150+</h3>
        <p className="mt-2 text-gray-600">Events Organized</p>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
        <h3 className="text-4xl font-black text-blue-700">10K+</h3>
        <p className="mt-2 text-gray-600">Beneficiaries</p>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
        <h3 className="text-4xl font-black text-orange-700">500+</h3>
        <p className="mt-2 text-gray-600">Volunteers</p>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
        <h3 className="text-4xl font-black text-purple-700">50+</h3>
        <p className="mt-2 text-gray-600">Communities Served</p>
      </div>

    </div>

  </section>

  {/* UPCOMING EVENTS */}
  <section className="max-w-7xl mx-auto px-6 py-16">

    <div className="text-center mb-14">

      <h2 className="text-4xl md:text-5xl font-black text-green-900">
        Upcoming Events
      </h2>

      <p className="text-gray-600 mt-4">
        Participate and make a difference in society.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
        >

          <img
            src={event.image}
            alt={event.title}
            className="w-full h-56 object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-green-900">
              {event.title}
            </h3>

            <p className="mt-3 text-gray-600">
              📅 {event.date}
            </p>

            <p className="text-gray-600">
              📍 {event.location}
            </p>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-full font-bold hover:bg-green-800 transition"
            >
              Register Now
            </Link>

          </div>

        </div>
      ))}

    </div>

  </section>

  {/* GALLERY */}
  <section className="bg-white py-20">

    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-black text-green-900">
          Past Event Highlights
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <img
          src="/images/gallery/gallery1.jpg"
          alt=""
          className="rounded-3xl h-72 w-full object-cover shadow-xl"
        />

        <img
          src="/images/gallery/gallery2.jpg"
          alt=""
          className="rounded-3xl h-72 w-full object-cover shadow-xl"
        />

        <img
          src="/images/gallery/gallery3.jpg"
          alt=""
          className="rounded-3xl h-72 w-full object-cover shadow-xl"
        />

      </div>

    </div>

  </section>

  {/* CTA */}
  <section className="bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 text-white py-20">

    <div className="max-w-5xl mx-auto text-center px-6">

      <h2 className="text-4xl md:text-5xl font-black">
        Together We Can Change Lives
      </h2>

      <p className="mt-6 text-lg text-green-100">
        Join our mission and become part of positive change.
      </p>

      <Link
        href="/volunteer"
        className="inline-block mt-8 px-8 py-4 bg-yellow-500 text-black rounded-full font-bold shadow-xl hover:scale-105 transition"
      >
        Join Our Mission
      </Link>

    </div>

  </section>

</main>


);
}
