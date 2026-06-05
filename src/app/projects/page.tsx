import Link from "next/link";

const projects = [
{
slug: "drinking-water-project",
title: "Drinking Water Project",
image: "/images/project1.jpg",
},
{
slug: "go-green-campaign",
title: "Go Green Campaign",
image: "/images/project2.jpg",
},
{
slug: "winter-relief-program",
title: "Winter Relief Program",
image: "/images/project3.jpg",
},
{
slug: "widow-saree-distribution",
title: "Widow Saree Distribution",
image: "/images/project4.jpg",
},
{
slug: "school-kit-distribution",
title: "School Kit Distribution",
image: "/images/project5.jpg",
},
{
slug: "healthcare-camp",
title: "Healthcare Camp",
image: "/images/project6.jpg",
},
];

export default function ProjectsPage() {
return ( <main>

  <section className="bg-gradient-to-r from-blue-900 to-green-700 py-24 text-white text-center">
    <h1 className="text-6xl font-bold">
      Our Projects
    </h1>
  </section>

  <section className="max-w-7xl mx-auto px-6 py-24">

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">

            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900">
                {project.title}
              </h3>
            </div>

          </div>
        </Link>
      ))}

    </div>

  </section>

</main>

);
}
