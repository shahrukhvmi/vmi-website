import React, { useEffect, useRef, useState } from "react";

export default function AboutVideo() {
  const videoRef = useRef(null);
  const [scale, setScale] = useState(0.8); // initial small size

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.intersectionRatio > 0.5) {
          setScale(1); // scale to full
        } else {
          setScale(0.6); // shrink again
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.3, 0.5, 0.7], // trigger as it's entering center
      }
    );

    const current = videoRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div className="w-6xl mx-auto max-container-width relative z-10 my-50 about-video-wrap">
      <div className="about-video-heading mb-20">
        <h2 className="olivera-font text-center">
          Innovate together <br />
          grow together
        </h2>
      </div>

      <div
        ref={videoRef}
        className="relative group overflow-hidden rounded-xl about-video-inner mx-auto transition-transform duration-700 ease-in-out"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <video
          src="/vmi-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </div>
    </div>
  );
}
