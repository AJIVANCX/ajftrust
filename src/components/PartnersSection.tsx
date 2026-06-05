export default function PartnersSection() {
const partners = [
"/images/partner1.png",
"/images/partner2.png",
"/images/partner3.png",
"/images/partner4.png",
"/images/partner5.png",
"/images/partner6.png",
];

return ( <section className="py-28 bg-white"> <div className="max-w-7xl mx-auto px-6">


    <div className="text-center mb-16">
      <span className="text-orange-500 font-semibold uppercase">
        Trusted By
      </span>

      <h2 className="text-5xl font-bold text-blue-900 mt-4">
        Our Partners & Supporters
      </h2>

      <p className="mt-4 text-gray-600">
        Working together for sustainable social impact.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

      {partners.map((logo, index) => (
        <div
          key={index}
          className="
            bg-white
            p-6
            rounded-2xl
            shadow-lg
            hover:shadow-2xl
            transition-all
            duration-300
            flex
            items-center
            justify-center
          "
        >
          <img
            src={logo}
            alt="Partner Logo"
            className="h-20 object-contain"
          />
        </div>
      ))}

    </div>

  </div>
</section>
);
}
