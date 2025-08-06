"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Thawrani",
    role: "Co-founder, Calebrico",
    image: "/dummy-one.png", // replace with actual path
    quote:
      "Finally, an agency that understands what the business needs! Vibrant Media Inc.’s emphasis on goal-focused strategies greatly changed the way we marketed our services, and within months, we saw a clear rise in qualified leads. Highly recommended!",
  },
  {
    name: "Mariya Adeel",
    role: "Co-founder, Calebrico",
    image: "/dummy-one.png", // replace with actual path
    quote:
      "Vibrant Media Inc. revamped our business website, and we must say the new website was a total game-changer! The color theme, functionality, navigation, everything was perfect! Looking forward to future collaborations.",
  },
  {
    name: "Faizan Masudi",
    role: "Co-founder, Calebrico",
    image: "/dummy-one.png", // replace with actual path
    quote:
      "For a year, our social media was stagnant with no engagement. After partnering with Vibrant Media Inc., we not only saw steady growth in followers but also observed genuine audience interaction. It was indeed an achievement.",
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
                <div className="text-[33px] flex flex-col justify-around home-testimonial-text">
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
