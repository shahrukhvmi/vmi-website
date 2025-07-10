"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Lucido Colin",
    role: "Co-founder, Calebrico",
    image: "/dummy-one.png", // replace with actual path
    quote:
      "It's totally customizable with the theme settings, it's compatible with a tonne of important plugins and the support is outstanding.",
  },
  {
    name: "Lucido Colin",
    role: "Co-founder, Calebrico",
    image: "/dummy-one.png", // replace with actual path
    quote:
      "It's totally customizable with the theme settings, it's compatible with a tonne of important plugins and the support is outstanding.",
  },
  {
    name: "Lucido Colin",
    role: "Co-founder, Calebrico",
    image: "/dummy-one.png", // replace with actual path
    quote:
      "It's totally customizable with the theme settings, it's compatible with a tonne of important plugins and the support is outstanding.",
  },
  {
    name: "Lucido Colin",
    role: "Co-founder, Calebrico",
    image: "/dummy-one.png", // replace with actual path
    quote:
      "It's totally customizable with the theme settings, it's compatible with a tonne of important plugins and the support is outstanding.",
  },
  // Add more testimonials as needed
];

export default function TestimonialSlider() {
  return (
    <div className="testimonial-main-wrap z-10 relative">
      <div className="relative w-6xl max-container-width mx-auto text-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          className="mx-auto"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="w-[100%] testimonial-img-width rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="object-cover w-full"
                  />
                </div>
                <div className="text-[48px] flex flex-col justify-around">
                  <h3 className="olivera-font">“{t.quote}”</h3>
                  <p className="mt-6 text-sm font-normal poppins-font">
                    <strong>{t.name}</strong> <br />
                    {t.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination mt-10 flex justify-center gap-4"></div>

        {/* Navigation Arrows */}
        <div className="swiper-prev cursor-pointer text-xl swiper-btn">
          <img src="/left-arrow.png" />
        </div>
        <div className="swiper-next cursor-pointer text-xl swiper-btn">
          <img src="/right-arrow.png" />
        </div>
      </div>
    </div>
  );
}
