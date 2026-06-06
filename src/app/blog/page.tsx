export default function BlogPage() {
  const blogs = [
    {
      title: "Education Support Program 2026",
      category: "Education",
      date: "June 2026",
      image: "/images/project1.jpg",
      description:
        "AJF Trust provided educational support, books, and scholarships to underprivileged students across rural communities.",
    },
    {
      title: "Clean Drinking Water Initiative",
      category: "Water",
      date: "May 2026",
      image: "/images/project2.jpg",
      description:
        "Installation of safe drinking water facilities to improve public health and community well-being.",
    },
    {
      title: "Free Health Awareness Camp",
      category: "Healthcare",
      date: "April 2026",
      image: "/images/project3.jpg",
      description:
        "Medical check-ups, health consultations, and awareness programs conducted for local families.",
    },
    {
      title: "Women Empowerment Workshop",
      category: "Women Empowerment",
      date: "March 2026",
      image: "/images/project4.jpg",
      description:
        "Skill development and entrepreneurship training programs for women and young girls.",
    },
    {
      title: "Tree Plantation Drive",
      category: "Environment",
      date: "February 2026",
      image: "/images/project5.jpg",
      description:
        "Community-driven plantation campaign promoting environmental sustainability.",
    },
    {
      title: "Community Development Project",
      category: "Social Welfare",
      date: "January 2026",
      image: "/images/project6.jpg",
      description:
        "Integrated social welfare activities focused on improving rural livelihoods.",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-blue-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            AJF Trust Blog & Updates
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our latest activities, impact stories, community projects,
            educational initiatives, healthcare programs, and social welfare efforts.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {blog.category}
                </span>

                <h2 className="text-2xl font-bold mb-3">
                  {blog.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {blog.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {blog.date}
                  </span>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

