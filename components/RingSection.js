import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RingSection() {
  const sectionRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const triggerElement = sectionRef.current;
      const endElement = triggerElement.querySelector(".content-box");

      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top top",
        endTrigger: endElement,
        end: "bottom bottom", // Unpin when content box ends
        pin: ringRef.current,
        pinSpacing: true,
        scrub: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Pinned ring background */}
      <div
        ref={ringRef}
        className="w-full h-[100px] flex justify-center items-start z-0 "
        style={{
          position: "absolute", // ✅ stays over content, no shift
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}

      >
        <img
          src="/second-ring.png"
          alt="Ring Background"
          className="w-full max-w-screen object-fit"
        />
      </div>

      {/* Scrollable foreground content */}
      <div className="relative z-10 w-full flex justify-center items-center pt-[600px] pb-[0px]">
        <div className="w-full max-w-[90%] mx-auto bg-white/5 backdrop-blur-xl rounded-xl px-6 md:px-12 py-20">
          <div className="max-w-6xl flex flex-col md:flex-row justify-between items-center gap-12 mx-auto">
            {/* Left content */}
            <div className="flex flex-col items-start max-w-md text-center md:text-left">
              <div className="ml-[-60px] mb-4">
                <img src="/second-logo.png" alt="Logo" />
              </div>
              <p className="text-white/80 leading-relaxed mt-[-20px] poppins-font">
                Vibrant Media Inc. is not just a service provider—we're your
                partner in growth. From trend-sensitive design and cutting-edge
                development to strategic campaign planning and customized digital
                marketing, we offer a comprehensive suite of solutions tailored to
                your unique mission. Whether you're looking to enhance your brand,
                engage your audience, or scale your business, we're here to turn
                your vision into reality.
              </p>
            </div>

            {/* Right image */}
            <div className="relative flex justify-center items-center w-full max-w-md">
              <img src="/second-right.png" alt="Decorative graphic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RingSection;
