"use client";

import { useEffect, useState } from "react";

export default function DonationsPage() {
  const [donors, setDonors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDonors();
  }, []);

  const loadDonors = async () => {
    const res = await fetch("/api/admin/donations");
    const data = await res.json();
    setDonors(data);
  };

  const filtered = donors.filter((d: any) =>
    (
      d.donor_name +
      d.donor_mobile +
      d.receipt_no
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalAmount = filtered.reduce(
    (sum: number, item: any) =>
      sum + Number(item.amount),
    0
  );

  return (
    <main className="min-h-screen bg-slate-100">

      <div className="bg-[#071C4D] text-white p-6">
        <h1 className="text-3xl font-black">
          Donation Management
        </h1>
      </div>

      <div className="p-6">

        <div className="grid md:grid-cols-2 gap-5 mb-6">

          <div className="bg-white rounded-2xl p-5 shadow">
            <h3>Total Donors</h3>
            <div className="text-4xl font-black text-blue-800">
              {filtered.length}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <h3>Total Collection</h3>
            <div className="text-4xl font-black text-green-700">
              ₹ {totalAmount.toLocaleString("en-IN")}
            </div>
          </div>

        </div>

        <input
          type="text"
          placeholder="Search donor..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border rounded-xl p-4 mb-5"
        />

        <div className="bg-white rounded-2xl shadow overflow-auto">

          <table className="w-full">

            <thead className="bg-[#071C4D] text-white">
              <tr>
                <th className="p-3">Receipt</th>
                <th className="p-3">Name</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>

              {filtered.map((d: any) => (
                <tr
                  key={d.id}
                  className="border-b"
                >
                  <td className="p-3">
                    {d.receipt_no}
                  </td>

                  <td className="p-3">
                    {d.donor_name}
                  </td>

                  <td className="p-3">
                    {d.donor_mobile}
                  </td>

                  <td className="p-3 font-bold text-green-700">
                    ₹ {Number(d.amount).toLocaleString("en-IN")}
                  </td>

                  <td className="p-3">

                    <a
                      href={`/api/download-receipt?receipt=${d.receipt_no}`}
                      target="_blank"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Receipt
                    </a>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}