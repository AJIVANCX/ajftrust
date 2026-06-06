"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects");
      const data = await res.json();

      if (Array.isArray(data)) {
        setProjects(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProjects = projects.filter((project: any) =>
    (
      project.title +
      project.category +
      project.location +
      project.project_id
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalGoal = filteredProjects.reduce(
    (sum: number, p: any) =>
      sum + Number(p.goal_amount || 0),
    0
  );

  const totalRaised = filteredProjects.reduce(
    (sum: number, p: any) =>
      sum + Number(p.raised_amount || 0),
    0
  );

  const totalBeneficiaries =
    filteredProjects.reduce(
      (sum: number, p: any) =>
        sum + Number(p.beneficiaries || 0),
      0
    );

  return (
    <main className="min-h-screen bg-slate-100">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#071C4D] via-blue-900 to-[#071C4D] text-white p-6 shadow-xl">
        <h1 className="text-4xl font-black">
          Project Management
        </h1>

        <p className="text-blue-100 mt-2">
          Anand Jivan Foundation Trust
        </p>
      </div>

      <div className="p-6">

        {/* STATS */}

        <div className="grid md:grid-cols-4 gap-5 mb-6">

          <div className="bg-white rounded-2xl shadow p-5">
            <h4 className="text-gray-500">
              Total Projects
            </h4>

            <div className="text-4xl font-black text-blue-900">
              {filteredProjects.length}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h4 className="text-gray-500">
              Goal Amount
            </h4>

            <div className="text-3xl font-black text-green-700">
              ₹
              {totalGoal.toLocaleString(
                "en-IN"
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h4 className="text-gray-500">
              Raised Amount
            </h4>

            <div className="text-3xl font-black text-orange-600">
              ₹
              {totalRaised.toLocaleString(
                "en-IN"
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h4 className="text-gray-500">
              Beneficiaries
            </h4>

            <div className="text-4xl font-black text-purple-700">
              {totalBeneficiaries}
            </div>
          </div>

        </div>

        {/* ACTIONS */}

        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <input
            type="text"
            placeholder="Search Project..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 border rounded-xl p-4"
          />

          <a
            href="/admin/projects/create"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-center"
          >
            + Add Project
          </a>

        </div>

        {/* TABLE */}

        <div className="bg-white rounded-2xl shadow overflow-auto">

          <table className="w-full">

            <thead className="bg-[#071C4D] text-white">

              <tr>

                <th className="p-4">
                  Project ID
                </th>

                <th className="p-4">
                  Project
                </th>

                <th className="p-4">
                  Category
                </th>

                <th className="p-4">
                  Location
                </th>

                <th className="p-4">
                  Goal
                </th>

                <th className="p-4">
                  Raised
                </th>

                <th className="p-4">
                  Status
                </th>

                <th className="p-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredProjects.map(
                (project: any) => (
                  <tr
                    key={project.id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="p-4">
                      {project.project_id}
                    </td>

                    <td className="p-4 font-semibold">
                      {project.title}
                    </td>

                    <td className="p-4">
                      {project.category}
                    </td>

                    <td className="p-4">
                      {project.location}
                    </td>

                    <td className="p-4 font-bold text-blue-700">
                      ₹
                      {Number(
                        project.goal_amount
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </td>

                    <td className="p-4 font-bold text-green-700">
                      ₹
                      {Number(
                        project.raised_amount
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          project.status ===
                          "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {project.status}
                      </span>

                    </td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <a
                          href={`/admin/projects/edit/${project.id}`}
                          className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm"
                        >
                          Edit
                        </a>

                        <a
                          href={`/projects/${project.project_id}`}
                          target="_blank"
                          className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm"
                        >
                          View
                        </a>

                      </div>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}