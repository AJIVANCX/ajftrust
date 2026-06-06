export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        AJF Trust Blog
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Latest updates, activities, projects and social impact stories.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-5 shadow">
          <h2 className="text-xl font-semibold mb-2">
            Education Initiative
          </h2>
          <p>
            Supporting underprivileged students through scholarships and learning resources.
          </p>
        </div>

        <div className="border rounded-xl p-5 shadow">
          <h2 className="text-xl font-semibold mb-2">
            Water Project
          </h2>
          <p>
            Clean drinking water facilities installed in rural communities.
          </p>
        </div>

        <div className="border rounded-xl p-5 shadow">
          <h2 className="text-xl font-semibold mb-2">
            Health Camp
          </h2>
          <p>
            Free medical camps organized for needy families.
          </p>
        </div>
      </div>
    </div>
  );
}