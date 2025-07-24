import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";
import StatsSection from "@/components/StatsSection";
import Creative from "@/components/Creative";
import GiffSection from "@/components/GiffSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Technologia from "@/components/Technologia";
import Footer from "@/components/Footer";
import Rights from "@/components/Rights";
import RingSection from "@/components/RingSection";
import SecondNavbar from "@/components/SecondNavbar";
import HeroTwo from "@/components/HeroTwo";
import GlowCard from "@/components/GlowCard";
import HomePortfolioSection from "@/components/HomePortfolioSection";
import { useEffect } from "react";

const HaloCanvas = dynamic(() => import("@/components/HaloCanvas"), {
  ssr: false,
});
const StarsCanvas = dynamic(() => import("@/components/StarsCanvas"), {
  ssr: false,
});

export default function Index() {
  return (
    <main className="relative text-white min-h-screen overflow-hidden">
      {/* <LiquidCursor /> */}
      <StarsCanvas />

      <div className="relative">
        {/* <HeroTwo /> */}
        <HeroSection />

        <RingSection />
      </div>
      {/* <StatsSection /> */}
      <Creative />

      <HomePortfolioSection />

      <div className="max-container-width w-6xl mx-auto flex justify-center brand-secton-main py-40 z-10 relative">
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
      {/* <GiffSection /> */}
      <TestimonialSlider />
      <Technologia />

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
      {/* <Rights /> */}
    </main>
  );
}
