"use client";

import { useState } from "react";

export default function VolunteerPage() {
    const [form, setForm] = useState({
        fullName: "",
        fatherName: "",
        motherName: "",
        dob: "",
        gender: "",
        mobile: "",
        email: "",
        pincode: "",
        state: "",
        district: "",
        village: "",
        postOffice: "",
        thana: "",
        qualification: "",
        occupation: "",
        aadhaar: "",
        reason: "",
        agree: false,
    });

    const handlePincode = async (
        pin: string
    ) => {
        setForm({
            ...form,
            pincode: pin,
        });

        if (pin.length === 6) {
            try {
                const res = await fetch(
                    `https://api.postalpincode.in/pincode/${pin}`
                );

                const data =
                    await res.json();

                if (
                    data[0].Status === "Success"
                ) {
                    setForm((prev) => ({
                        ...prev,
                        pincode: pin,
                        state:
                            data[0].PostOffice[0]
                                .State,
                        district:
                            data[0].PostOffice[0]
                                .District,
                    }));
                }
            } catch (err) {
                console.log(err);
            }
        }

    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        if (!form.agree) {
            alert(
                "Please accept Terms & Conditions"
            );
            return;
        }

        const res = await fetch(
            "/api/volunteer-register",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify(form),
            }
        );

        const result = await res.json();

        if (result.success) {
            alert(
                `Volunteer ID: ${result.volunteerId}`
            );

            window.location.href =
                "/volunteer/success?id=" +
                result.volunteerId;
        } else {
            alert(result.message);
        }
    };

    return (<main className="min-h-screen bg-slate-100">

        {/* HERO */}

        <section className="bg-gradient-to-r from-[#071C4D] via-blue-900 to-[#071C4D] text-white py-14">

            <div className="max-w-7xl mx-auto px-4 text-center">

                <h1 className="text-4xl md:text-5xl font-black">
                    Volunteer Registration
                </h1>

                <p className="mt-4 text-lg text-blue-100">
                    Join Anand Jivan Foundation Trust
                    and Create Social Impact
                </p>

            </div>

        </section>

        {/* FORM */}

        <section className="max-w-6xl mx-auto px-4 py-10">

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >

                <div className="bg-[#071C4D] text-white px-6 py-4">

                    <h2 className="text-xl font-bold">
                        Volunteer Application Form
                    </h2>

                </div>

                <div className="p-6 md:p-8">

                    {/* PERSONAL */}

                    <h3 className="font-bold text-xl text-[#071C4D] border-b pb-2 mb-5">
                        Personal Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="border p-3 rounded-xl"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    fullName:
                                        e.target.value,
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Father Name"
                            className="border p-3 rounded-xl"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    fatherName:
                                        e.target.value,
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Mother Name"
                            className="border p-3 rounded-xl"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    motherName:
                                        e.target.value,
                                })
                            }
                        />

                        <input
                            type="date"
                            className="border p-3 rounded-xl"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    dob:
                                        e.target.value,
                                })
                            }
                        />

                        <select
                            className="border p-3 rounded-xl"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    gender:
                                        e.target.value,
                                })
                            }
                        >
                            <option>
                                Select Gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className="border p-3 rounded-xl"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    mobile:
                                        e.target.value,
                                })
                            }
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border p-3 rounded-xl"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    email:
                                        e.target.value,
                                })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Aadhaar Number"
                            className="border p-3 rounded-xl"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    aadhaar:
                                        e.target.value,
                                })
                            }
                        />

                    </div>

                    {/* ADDRESS */}

                    <h3 className="font-bold text-xl text-[#071C4D] border-b pb-2 mt-10 mb-5">
                        Address Details
                    </h3>

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            type="text"
                            placeholder="PIN Code"
                            className="border p-3 rounded-xl"
                            onChange={(e) =>
                                handlePincode(
                                    e.target.value
                                )
                            }
                        />

                        <input
                            type="text"
                            value={form.state}
                            placeholder="State"
                            readOnly
                            className="border p-3 rounded-xl bg-gray-100"
                        />

                        <input
                            type="text"
                            value={form.district}
                            placeholder="District"
                            readOnly
                            className="border p-3 rounded-xl bg-gray-100"
                        />

                        <input
                            type="text"
                            placeholder="Village / City"
                            className="border p-3 rounded-xl"
                        />

                        <input
                            type="text"
                            placeholder="Post Office"
                            className="border p-3 rounded-xl"
                        />

                        <input
                            type="text"
                            placeholder="Police Station / Thana"
                            className="border p-3 rounded-xl"
                        />

                    </div>

                    {/* OTHER */}

                    <h3 className="font-bold text-xl text-[#071C4D] border-b pb-2 mt-10 mb-5">
                        Additional Details
                    </h3>

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            type="text"
                            placeholder="Qualification"
                            className="border p-3 rounded-xl"
                        />

                        <input
                            type="text"
                            placeholder="Occupation"
                            className="border p-3 rounded-xl"
                        />

                    </div>

                    <textarea
                        rows={4}
                        placeholder="Why do you want to join AJF Volunteer Program?"
                        className="w-full border p-3 rounded-xl mt-5"
                    />

                    {/* TERMS */}

                    <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mt-8">

                        <label className="flex items-start gap-3">

                            <input
                                type="checkbox"
                                checked={
                                    form.agree
                                }
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        agree:
                                            e.target.checked,
                                    })
                                }
                            />

                            <span>
                                I hereby declare that
                                all information
                                provided by me is true
                                and correct. I agree
                                to work as a volunteer
                                of Anand Jivan
                                Foundation Trust.
                            </span>

                        </label>

                    </div>

                    <button
                        type="submit"
                        className="w-full mt-8 bg-gradient-to-r from-[#071C4D] to-blue-900 text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition"
                    >
                        Submit Volunteer Application
                    </button>

                </div>

            </form>

        </section>

    </main>

    );
}
