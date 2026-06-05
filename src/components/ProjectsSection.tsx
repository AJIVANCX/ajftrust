"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Drinking Water Project",
      slug: "drinking-water-project",
      image: "/images/project1.jpg",
      desc: "Providing safe drinking water through handpump installation and water support initiatives.",
    },
    {
      title: "Go Green Campaign",
      slug: "go-green-campaign",
      image: "/images/project2.jpg",
      desc: "Tree plantation drives and environmental sustainability awareness programs.",
    },
    {
      title: "Winter Relief Program",
      slug: "winter-relief-program",
      image: "/images/project3.jpg",
      desc: "Distribution of blankets, sweaters and jackets to needy families.",
    },
    {
      title: "Widow Saree Distribution",
      slug: "widow-saree-distribution",
      image: "/images/project4.jpg",
      desc: "Supporting widows through saree distribution and social welfare programs.",
    },
    {
      title: "School Kit Distribution",
      slug: "school-kit-distribution",
      image: "/images/project5.jpg",
      desc: "Educational support through notebooks, bags and school materials.",
    },
    {
      title: "Healthcare Camp",
      slug: "healthcare-camp",
      image: "/images/project6.jpg",
      desc: "Health awareness and free medical checkup camps for communities.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold uppercase tracking-wider">
            Our Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-6">
            Featured Community Projects
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-gray-600 text-lg">
            Transforming lives through education, healthcare, drinking water,
            environmental sustainability and social welfare initiatives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                border
                border-gray-100
              "
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {project.desc}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    font-semibold
                    text-green-700
                    hover:text-green-900
                    transition
                  "
                >
                  Read More
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* View All Projects */}
        <div className="text-center mt-14">
          <Link
            href="/projects"
            className="
              inline-block
              bg-gradient-to-r
              from-green-700
              to-green-900
              text-white
              px-8
              py-4
              rounded-full
              font-bold
              shadow-lg
              hover:scale-105
              transition-all
            "
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}