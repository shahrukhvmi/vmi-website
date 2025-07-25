import AboutHero from "@/components/about/AboutHero";
import AboutVideo from "@/components/about/AboutVideo";
import CeoSection from "@/components/about/CeoSection";
import HorizontalScrollSection from "@/components/about/HorizontalScrollSection";
import StarsCanvas from "@/components/StarsCanvas";
import { useRouter } from "next/router";
import React from "react";

export default function about() {
  const router = useRouter();

  return (
    <main className="relative text-white min-h-screen overflow-hidden">
      <StarsCanvas />

      <AboutHero />

      <HorizontalScrollSection />

      <CeoSection />

      <AboutVideo />

      <div className="max-container-width w-6xl mx-auto flex justify-center brand-secton-main py-40 z-10 relative">
        <div className="brand-secton-wrap center-content middle-quote-font">
          <h3 className="text-center olivera-font">
            Your brand deserves more than just a launch,
            <br /> it deserves lift-off. From strategy to scale, we’re <br />{" "}
            here to guide every step of your journey.
          </h3>
          <div className="hero-btn example-2">
            <button
              onClick={() => router.push("/contact-us")}
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
