"use client";

import { useEffect, useState } from "react";

export default function VolunteersAdminPage() {
  const [volunteers, setVolunteers] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadVolunteers();
  }, []);

  const loadVolunteers = async () => {
    const res = await fetch(
      "/api/admin/volunteers"
    );

    const data =
      await res.json();

    setVolunteers(data);
  };

  const filtered =
    volunteers.filter((v: any) =>
      (
        v.full_name +
        v.mobile +
        v.volunteer_id
      )
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="bg-[#071C4D] text-white p-6">

        <h1 className="text-3xl font-black">
          Volunteer Management
        </h1>

      </div>

      <div className="p-6">

        <div className="grid md:grid-cols-4 gap-5 mb-6">

          <div className="bg-white rounded-2xl p-5 shadow">

            <h3>Total Volunteers</h3>

            <div className="text-4xl font-black text-blue-900">
              {volunteers.length}
            </div>

          </div>

        </div>

        <input
          type="text"
          placeholder="Search Volunteer..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl border mb-5"
        />

        <div className="bg-white rounded-2xl shadow overflow-auto">

          <table className="w-full">

            <thead className="bg-[#071C4D] text-white">

              <tr>
                <th className="p-3">
                  Volunteer ID
                </th>

                <th className="p-3">
                  Name
                </th>

                <th className="p-3">
                  Mobile
                </th>

                <th className="p-3">
                  District
                </th>

                <th className="p-3">
                  Action
                </th>
              </tr>

            </thead>

            <tbody>

              {filtered.map(
                (v: any) => (
                  <tr
                    key={v.id}
                    className="border-b"
                  >
                    <td className="p-3">
                      {
                        v.volunteer_id
                      }
                    </td>

                    <td className="p-3">
                      {
                        v.full_name
                      }
                    </td>

                    <td className="p-3">
                      {v.mobile}
                    </td>

                    <td className="p-3">
                      {
                        v.district
                      }
                    </td>

                    <td className="p-3">

                      <a
                        href={`/api/volunteer-card?id=${v.volunteer_id}`}
                        target="_blank"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg"
                      >
                        ID Card
                      </a>

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