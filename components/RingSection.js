import React, { useRef, useEffect } from "react";

const RingSection = () => {
  const wrapperRef = useRef(null);
  const glowRef = useRef(null);
  let rafId = null;

  const handleMouseMove = (e) => {
    if (!wrapperRef.current || !glowRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Cancel previous animation frame to prevent stacking
    cancelAnimationFrame(rafId);

    // Smooth motion with requestAnimationFrame
    rafId = requestAnimationFrame(() => {
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
      glowRef.current.style.opacity = "1";
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafId);
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden bg-[url('/second-ring.png')] bg-top bg-no-repeat bg-cover second-ring-css">
      {/* Wrapper with relative positioning */}
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 w-full max-w-[90%] overflow-hidden rounded-xl"
      >
        {/* Glow absolutely inside same relative parent */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute z-30 transition-opacity duration-300"
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

        {/* The blurred glassy card */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-10 overflow-hidden z-30">
          <div className="w-6xl ring-section-max-width flex flex-col md:flex-row justify-between items-center gap-12 justify-items-center mx-auto py-40">
            {/* Left Content */}
            <div className="text-center md:text-left ring-left-width">
              <div className="ml-[-60px] mb-4">
                <img src="/second-logo.png" alt="Logo" />
              </div>
              <p className="text-white/80 leading-relaxed mt-[-20px] poppins-font">
                Vibrant Media Inc. is not just a service provider—we're your
                partner in growth. From trend-sensitive design and cutting-edge
                development to strategic campaign planning and customized
                digital marketing, we offer a comprehensive suite of solutions
                tailored to your unique mission. Whether you're looking to
                enhance your brand, engage your audience, or scale your
                business, we're here to turn your vision into reality.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center items-center ring-left-width">
              <img src="/second-right.png" alt="Decorative Graphic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingSection;
