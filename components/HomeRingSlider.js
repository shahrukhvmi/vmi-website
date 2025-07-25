// components/RingSlider.jsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HomeRingSlider() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const data = [
    {
      img: "/service-ring-1.png",
      title: "1. A free strategy to start!",
      body: "Before our meeting, complete a form in 5 minutes. Outline goals and audience. We'll discuss outcomes and a plan.",
    },
    {
      img: "/service-ring-2.png",
      title: "2. Onboarding",
      body: "Happy with our strategy? It's time for our 2nd call to onboard you. We'll create milestones and set up your payment plan.",
    },
    {
      img: "/service-ring-3.png",
      title: "3. Let the magic happen",
      body: "We bring your project to life, refining details to ensure it is captivating and impactful. Project design, QA testing, and revisions.",
    },
    {
      img: "/service-ring-4.png",
      title: "4. Launch & Maintenance",
      body: "Once approved, we transfer files, give access, set up backups, and prepare for launch. Handover of files and post-delivery support.",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    gsap.set(cardsRef.current, { yPercent: 100, opacity: 0 });
    gsap.set(cardsRef.current[0], { yPercent: 0, opacity: 1 });

    cardsRef.current.forEach((card, index) => {
      if (index === 0) return;

      const triggerStart = `top+=${(index - 1) * window.innerHeight} top`;
      const triggerEnd = `+=${window.innerHeight}`;

      gsap.to(card, {
        yPercent: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: triggerStart,
          end: triggerEnd,
          scrub: true,
          onEnter: () => card.classList.add("z-10"),
          onLeaveBack: () => card.classList.remove("z-10"),
        },
      });
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${(data.length - 1) * window.innerHeight}`,
      pin: true,
      scrub: true,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <div className="w-6xl mx-auto max-container-width mb-20 z-10">
        <div className="inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="">We're here to</span> <br />
            <span className="inner-heading-span">make you win</span>
          </h2>
        </div>
      </div>
      <div ref={containerRef} className="relative w-full ring-wrap-main">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute w-[70vw] h-[70vw] animate-spin-slow z-0"></div>

          <div className="relative w-full h-full flex items-center justify-center">
            {data.map((item, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="absolute service-ring-card backdrop-blur-[20px] opacity-0"
              >
                <div className="flex justify-center">
                  <img src={item?.img} />
                </div>
                <h3 className="mb-4 olivera-font">{item.title}</h3>
                <p className="poppins-font">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
