"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollSection() {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);

  const wrapperRef = useRef(null);
  const glowRef = useRef(null);
  const backgroundRef = useRef(null);
  let rafId = null;

  // Glow logic
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const glow = glowRef.current;

    if (!wrapper || !glow) return;

    const handleMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        glow.style.opacity = "1";
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId);
      glow.style.opacity = "0";
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // GSAP scroll horizontal logic
  useEffect(() => {
    const container = containerRef.current;
    const content = scrollContentRef.current;

    const scrollLength = content.scrollWidth - container.offsetWidth;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${content.scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen text-white overflow-hidden flex items-center z-10 backdrop-blur-xs horizontal-main-wrap"
    >
      <div
        ref={wrapperRef}
        className="relative w-screen h-screen text-white overflow-hidden flex items-center z-10"
      >
        {/* Cursor-follow glow */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute transition-opacity duration-300"
          style={{
            background: `
            radial-gradient(
              ellipse at 30% 50%, 
              rgba(208, 128, 255, 1) 0%, 
              rgba(134, 76, 255, 0.8) 40%, 
              rgba(98, 0, 255, 0.5) 65%, 
              transparent 80%
            )
          `,
            filter: "blur(120px)",
            width: "450px",
            height: "450px",
            position: "absolute",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            left: "0px",
            top: "0px",
            opacity: 0,
          }}
        />
        <div
          ref={scrollContentRef}
          className="whitespace-nowrap px-20 tracking-wide leading-snug font-[serif] flex items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          <div className="olivera-font horizontal-text-1 horizontal-remaining-text">
            Vibrant Media Inc. celebrates
          </div>{" "}
          <div className="olivera-font horizontal-text-2">8+</div>{" "}
          <div className="olivera-font horizontal-text-3 horizontal-remaining-text">
            years of driving digital{" "}
            <span className="horizontal-success">success</span> through tailored
            solutions. From{" "}
            <span className="horizontal-img-1 relative">websites to</span>{" "}
            <span className="horizontal-img-2 relative">
              marketing campaigns
            </span>
            , they’ve helped{" "}
            <div className="inline-block relative me-15">
              <div className="horizontal-top-brand">top brands</div>{" "}
              <div className="horizontal-grow">grow</div>
            </div>{" "}
            with impactful results.
          </div>
        </div>
      </div>
    </section>
  );
}
