export default function GallerySection() {
const gallery = [
"/images/gallery1.jpg",
"/images/gallery2.jpg",
"/images/gallery3.jpg",
"/images/gallery4.jpg",
"/images/gallery5.jpg",
"/images/gallery6.jpg",
"/images/gallery7.jpg",
"/images/gallery8.jpg",
];

return ( <section className="py-28 bg-gray-50"> <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="text-orange-500 font-semibold uppercase">
        Gallery
      </span>

      <h2 className="text-5xl font-bold text-blue-900 mt-4">
        Our Activities
      </h2>

      <p className="mt-4 text-gray-600">
        Moments from our social welfare and community development programs.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-5">

      {gallery.map((image, index) => (
        <div
          key={index}
          className="
            overflow-hidden
            rounded-3xl
            shadow-lg
            group
          "
        >
          <img
            src={image}
            alt=""
            className="
              h-72
              w-full
              object-cover
              transition-all
              duration-500
              group-hover:scale-110
            "
          />
        </div>
      ))}

    </div>

  </div>
</section>
);
}
