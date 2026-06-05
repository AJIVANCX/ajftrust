"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
{
image: "/images/hero1.jpg",
title: "Together We Can Build A Better Future",
subtitle:
"Education • Healthcare • Drinking Water • Women Empowerment",
},
{
image: "/images/hero2.jpg",
title: "Creating Sustainable Change",
subtitle:
"Community Development • Environment Protection • Social Welfare",
},
{
image: "/images/hero3.jpg",
title: "Empowering Lives Every Day",
subtitle:
"Support Children • Support Women • Support Communities",
},
];

export default function HeroSlider() {
return ( <section className="relative">

  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop
    className="h-screen"
  >

    {slides.map((slide, index) => (
      <SwiperSlide key={index}>

        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-900/70 to-emerald-700/50" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">

            <div className="max-w-7xl mx-auto px-6 text-white">

              <span className="bg-orange-500 px-5 py-2 rounded-full text-sm font-semibold">
                Anand Jivan Foundation Trust
              </span>

              <h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
                {slide.title}
              </h1>

              <p className="mt-6 text-xl md:text-2xl max-w-3xl">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 hover:scale-105">
                  Donate Now
                </button>

                <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 hover:scale-105">
                  Become Volunteer
                </button>

              </div>

            </div>

          </div>

          {/* Wave Bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-[120px]"
            >
              <path
                d="M321.39,56.44C175.28,108.72,0,0,0,0V120H1200V0C1078.33,98.67,940.84,111.84,821.39,89.08C676.74,61.34,571.94,-9.52,321.39,56.44Z"
                className="fill-white"
              />
            </svg>
          </div>

        </div>

      </SwiperSlide>
    ))}

  </Swiper>

</section>

);
}
