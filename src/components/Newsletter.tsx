"use client";

import { useState } from "react";

export default function Newsletter() {
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = async (
e: React.FormEvent
) => {
e.preventDefault();

setLoading(true);

try {
  alert(
    `Subscribed Successfully: ${email}`
  );

  setEmail("");
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}

};

return ( <section className="bg-gradient-to-r from-[#071C4D] to-blue-900 py-20">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-black text-white">
      Subscribe To Our Newsletter
    </h2>

    <p className="mt-4 text-blue-100 text-lg">
      Get updates about our projects,
      events, internships and impact stories.
    </p>

    <form
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
    >

      <input
        type="email"
        required
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        placeholder="Enter Your Email Address"
        className="w-full md:w-[450px] px-5 py-4 rounded-xl border border-white/20 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-bold px-8 py-4 rounded-xl"
      >
        {loading
          ? "Subscribing..."
          : "Subscribe"}
      </button>

    </form>

  </div>

</section>

);
}
