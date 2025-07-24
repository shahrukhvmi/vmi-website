import ServiceRingSection from "@/components/services/ServiceRingSection";
// import ServiceHorizontal from "@/components/services/ServiceHorizontal";
import ServicesHero from "@/components/services/ServicesHero";
import StarsCanvas from "@/components/StarsCanvas";
import Technologia from "@/components/Technologia";
import TestimonialSlider from "@/components/TestimonialSlider";
import React from "react";

export default function services() {
  return (
    <main className="relative text-white min-h-screen overflow-hidden">
      <StarsCanvas />

      <ServicesHero />

      {/* <ServiceHorizontal /> */}

      <div className="max-container-width w-6xl mx-auto flex justify-center great-main items-center z-10 relative">
        <div className="great-design-wrap center-content middle-quote-font">
          <h3 className="text-center olivera-font">
            Great design isn’t just visual — it’s functional,
            <br /> intentional, and obsessively crafted to move people.
          </h3>
          <div className="text-center py-6">
            <p className="poppins-font">By Vibrant Media</p>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <ServiceRingSection />
      </div>

      <div className="mt-70">
        <Technologia />
      </div>
      <TestimonialSlider />

      <div className="max-container-width w-6xl mx-auto flex justify-center brand-secton-main pb-70 pt-50 z-10 relative">
        <div className="brand-secton-wrap center-content middle-quote-font">
          <h3 className="text-center olivera-font">
            Your brand deserves more than just a launch,
            <br /> it deserves lift-off. From strategy to scale, we’re <br />{" "}
            here to guide every step of your journey.
          </h3>
          <div className="hero-btn example-2">
            <button
              className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
              style={{
                background:
                  "linear-gradient(90deg,rgb(84, 47, 140),rgb(132, 72, 187))",
                boxShadow: `
      0 0 100px #9561c540,
      0 0 40px #9561c550,
      0 0 80px #9561c570,
      0 0 120px #9561c530
    `,
              }}
            >
              Book A Discovery Call{" "}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
