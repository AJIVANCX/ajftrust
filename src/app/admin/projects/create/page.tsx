"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProjectPage() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      title: "",
      category: "",
      location: "",
      goalAmount: "",
      beneficiaries: "",
      status: "Active",
      description: "",
      image: "",
    });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        "/api/project/create",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result =
        await res.json();

      if (result.success) {
        alert(
          `Project Created Successfully\n\nProject ID: ${result.projectId}`
        );

        router.push(
          "/admin/projects"
        );
      } else {
        alert(
          result.message
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Failed to create project"
      );
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-100">

      {/* HEADER */}

      <div className="bg-gradient-to-r from-[#071C4D] via-blue-900 to-[#071C4D] text-white p-6 shadow-xl">

        <h1 className="text-4xl font-black">
          Create Project
        </h1>

        <p className="text-blue-100 mt-2">
          Anand Jivan Foundation Trust
        </p>

      </div>

      <div className="max-w-5xl mx-auto p-6">

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >

          <div className="bg-[#071C4D] text-white p-5">

            <h2 className="text-xl font-bold">
              New Project Details
            </h2>

          </div>

          <div className="p-6">

            <div className="grid md:grid-cols-2 gap-5">

              {/* TITLE */}

              <div>
                <label className="block mb-2 font-semibold">
                  Project Title
                </label>

                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title:
                        e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3"
                  placeholder="Education Support Program"
                />
              </div>

              {/* CATEGORY */}

              <div>
                <label className="block mb-2 font-semibold">
                  Category
                </label>

                <select
                  required
                  value={
                    form.category
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category:
                        e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3"
                >
                  <option value="">
                    Select Category
                  </option>

                  <option>
                    Education
                  </option>

                  <option>
                    Healthcare
                  </option>

                  <option>
                    Women Empowerment
                  </option>

                  <option>
                    Drinking Water
                  </option>

                  <option>
                    Environment
                  </option>

                  <option>
                    Child Welfare
                  </option>

                  <option>
                    Skill Development
                  </option>

                  <option>
                    Emergency Relief
                  </option>

                </select>
              </div>

              {/* LOCATION */}

              <div>
                <label className="block mb-2 font-semibold">
                  Location
                </label>

                <input
                  type="text"
                  required
                  value={
                    form.location
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      location:
                        e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3"
                  placeholder="Darbhanga, Bihar"
                />
              </div>

              {/* GOAL */}

              <div>
                <label className="block mb-2 font-semibold">
                  Goal Amount (₹)
                </label>

                <input
                  type="number"
                  required
                  value={
                    form.goalAmount
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      goalAmount:
                        e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3"
                />
              </div>

              {/* BENEFICIARIES */}

              <div>
                <label className="block mb-2 font-semibold">
                  Beneficiaries
                </label>

                <input
                  type="number"
                  value={
                    form.beneficiaries
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      beneficiaries:
                        e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3"
                  placeholder="100"
                />
              </div>

              {/* STATUS */}

              <div>
                <label className="block mb-2 font-semibold">
                  Status
                </label>

                <select
                  value={
                    form.status
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status:
                        e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3"
                >
                  <option>
                    Active
                  </option>

                  <option>
                    Completed
                  </option>

                  <option>
                    Upcoming
                  </option>
                </select>
              </div>

              {/* IMAGE */}

              <div className="md:col-span-2">

                <label className="block mb-2 font-semibold">
                  Project Image URL
                </label>

                <input
                  type="text"
                  value={form.image}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      image:
                        e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3"
                  placeholder="https://..."
                />

              </div>

              {/* DESCRIPTION */}

              <div className="md:col-span-2">

                <label className="block mb-2 font-semibold">
                  Project Description
                </label>

                <textarea
                  rows={6}
                  required
                  value={
                    form.description
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description:
                        e.target.value,
                    })
                  }
                  className="w-full border rounded-xl p-3"
                  placeholder="Write project details..."
                />

              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold text-lg"
            >
              {loading
                ? "Creating Project..."
                : "Create Project"}
            </button>

          </div>

        </form>

      </div>

    </main>
  );
}