"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ImpactCounter() {
const { ref, inView } = useInView({
triggerOnce: true,
});

return ( <section
   ref={ref}
   className="bg-gradient-to-r from-slate-950 via-blue-900 to-blue-800 text-white py-24"
 > <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Our Impact
      </h2>

      <p className="mt-4 text-xl text-gray-300">
        Creating positive change in communities
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
        <h3 className="text-5xl font-bold text-orange-400">
          {inView && <CountUp end={5000} duration={3} />}+
        </h3>
        <p className="mt-3">Beneficiaries</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
        <h3 className="text-5xl font-bold text-green-400">
          {inView && <CountUp end={150} duration={3} />}+
        </h3>
        <p className="mt-3">Projects</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
        <h3 className="text-5xl font-bold text-yellow-400">
          {inView && <CountUp end={100} duration={3} />}+
        </h3>
        <p className="mt-3">Volunteers</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
        <h3 className="text-5xl font-bold text-cyan-400">
          {inView && <CountUp end={20} duration={3} />}+
        </h3>
        <p className="mt-3">Districts Reached</p>
      </div>

    </div>

  </div>
</section>

);
}
