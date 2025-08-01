export default function HeroSection() {
  return (
    <>
      <section className="relative pt-90 flex flex-col items-center justify-center text-white text-center px-4 z-10">
        <div className="hero-section-shadow"></div>
        <div className="hero-left-shadow">
          <img src="/left.png" />
        </div>
        <div className="hero-right-shadow">
          <img src="/right.png" />
        </div>
        <span className="bg-white/10 text-sm available-text px-4 py-1 rounded-full border border-white/20 text-green-400 mb-4 z-10">
          ● Available for New Projects
        </span>
        <h1 className="hero-text leading-tight z-10 olivera-font poppins-font">
          ROI-Driven Design and <br /> Development Agency
          {/* <span className="hero-span olivera-font">Development</span> Agency */}
        </h1>
        <p className="mt-4 text-gray-300 text-xl z-10 poppins-font">
          We don’t just design, we solve your brand’s biggest challenges
        </p>
        {/* <button
        className="mt-8 inline-block px-8 py-3 rounded-full text-white text-sm font-medium transition-transform duration-300 hover:scale-105 z-10"
        style={{
          background: "linear-gradient(90deg, #663FA0, #9561C5)",
          boxShadow: `
      0 0 100px #9561c540,
      0 0 40px #9561c550,
      0 0 80px #9561c570,
      0 0 120px #9561c530
    `,
          border: "1px solid #9561C5",
        }}
      >
        Book A Discovery Call →
      </button> */}

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
            {/* <span>
              <img src="/btn-icon.svg" />
            </span> */}
          </button>
        </div>
      </section>
    </>
  );
}
