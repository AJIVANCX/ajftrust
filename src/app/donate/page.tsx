"use client";

import { useState } from "react";

export default function DonatePage() {
const [amount, setAmount] = useState(1000);
const [donationType, setDonationType] = useState("once");

const [donorName, setDonorName] = useState("");
const [donorEmail, setDonorEmail] = useState("");
const [donorMobile, setDonorMobile] = useState("");
const [address, setAddress] = useState("");

const handleDonate = () => {
if (
!donorName ||
!donorEmail ||
!donorMobile ||
!address
) {
alert("Please fill all details");
return;
}
const options = {
  key: "rzp_test_Sw0zQu6y2wJkix",
  amount: amount * 100,
  currency: "INR",
  name: "Anand Jivan Foundation Trust",
  description:
    donationType === "monthly"
      ? "Monthly Donation"
      : "One Time Donation",

  prefill: {
    name: donorName,
    email: donorEmail,
    contact: donorMobile,
  },

  theme: {
    color: "#1e3a8a",
  },

 handler: async function (response: any) {

const save = await fetch(
"/api/save-donor",
{
method: "POST",
headers: {
"Content-Type": "application/json",
},
  body: JSON.stringify({
    paymentId:
      response.razorpay_payment_id,

    donorName,
    donorEmail,
    donorMobile,
    address,
    amount,
    donationType,
  }),
}

);

const result = await save.json();

console.log(
"Save Donor Response:",
result
);

if (
result.success &&
result.receiptNo
) {

window.location.href =
"/donate/success?receipt=" +
result.receiptNo;
} else {

alert(
"Receipt number generate nahi hua."
);

console.error(result);

}
},

};

const razorpay = new (window as any).Razorpay(options);
razorpay.open();


};

return ( <main className="bg-slate-100 min-h-screen">

  <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700 text-white py-12">

    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl animate-pulse"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold">
        Support Anand Jivan Foundation Trust
      </h1>

      <p className="mt-3">
        Education • Healthcare • Drinking Water • Women Empowerment
      </p>
    </div>

  </section>

  <section className="max-w-7xl mx-auto px-4 py-8">

    <div className="grid lg:grid-cols-5 gap-6">

      <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-5">
          Indian Giving Options
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-5">

          <button
            type="button"
            onClick={() => setDonationType("once")}
            className={`p-4 rounded-2xl border ${
              donationType === "once"
                ? "bg-blue-900 text-white"
                : "bg-white"
            }`}
          >
            ❤️ Give Once
          </button>

          <button
            type="button"
            onClick={() => setDonationType("monthly")}
            className={`p-4 rounded-2xl border ${
              donationType === "monthly"
                ? "bg-green-700 text-white"
                : "bg-white"
            }`}
          >
            🔄 Give Monthly
          </button>

        </div>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter Donation Amount"
          className="w-full border rounded-xl p-4 mb-4"
        />

        <div className="grid grid-cols-4 gap-3 mb-5">
          {[500,1000,2500,5000].map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => setAmount(amt)}
              className="py-3 border rounded-xl"
            >
              ₹{amt}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Full Name"
            value={donorName}
            onChange={(e)=>setDonorName(e.target.value)}
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={donorMobile}
            onChange={(e)=>setDonorMobile(e.target.value)}
            className="border rounded-xl p-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={donorEmail}
            onChange={(e)=>setDonorEmail(e.target.value)}
            className="border rounded-xl p-3"
          />

          <select className="border rounded-xl p-3">
            <option>Education Support</option>
            <option>Healthcare Support</option>
            <option>Drinking Water Project</option>
            <option>Women Empowerment</option>
            <option>General Donation</option>
          </select>

        </div>

        <textarea
          rows={3}
          placeholder="Full Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          className="w-full border rounded-xl p-3 mt-4"
        />

        <button
          onClick={handleDonate}
          className="w-full mt-5 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold"
        >
          {donationType === "monthly"
            ? `Start Monthly Donation ₹${amount}`
            : `Donate ₹${amount}`}
        </button>

      </div>

      <div className="lg:col-span-2 space-y-4">

        <div className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white rounded-3xl p-5">

          <h2 className="text-4xl font-bold">
            5400+
          </h2>

          <p>Lives Impacted</p>

          <div className="grid grid-cols-2 gap-3 mt-4 text-center">
            <div>
              <h4 className="font-bold">150+</h4>
              <p className="text-xs">Projects</p>
            </div>

            <div>
              <h4 className="font-bold">100+</h4>
              <p className="text-xs">Volunteers</p>
            </div>
          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-5">

          <div className="grid grid-cols-2 gap-4 items-center">

            <div className="text-center">
              <img
                src="/images/donate-qr.png"
                alt="Donation QR"
                className="w-32 mx-auto"
              />
            </div>

            <div>

              <h3 className="font-bold text-blue-900">
                HDFC Bank
              </h3>

              <p className="text-sm mt-2">
                Anand Jivan Foundation Trust
              </p>

              <p className="text-sm">
                A/C: 50200082194362
              </p>

              <p className="text-sm">
                IFSC: HDFC0005160
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>

</main>
);
}
