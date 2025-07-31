import React from "react";
import PortfolioPageSlider from "./PortfolioPageSlider";
import { useRouter } from "next/router";

export default function PortfolioDesignWrap() {
  const router = useRouter();

  const portfolioImages = [
    "/design-1.png",
    "/design-2.png",
    "/design-3.png",
    "/design-4.png",
    "/design-5.png",
    "/design-6.png",
    "/design-7.png",
    "/design-8.png",
    "/design-9.png",
    "/design-10.png",
    "/design-11.png",
    "/design-12.png",
    "/design-13.png",
    "/design-14.png",
    "/design-15.png",
  ];

  return (
    <section className="home-portfolio-wrap" id="portfolio">
      <div className="w-6xl mx-auto max-container-width">
        <div className="portfolio-inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="portfolio-inner-heading-top">Creative Design</span>{" "}
            <br />
            <span className="portfolio-inner-heading-span">
              From Idea to Impact
            </span>
          </h2>
        </div>
      </div>
      <PortfolioPageSlider protfolio={portfolioImages} />

      <div className="w-full flex justify-center mt-8">
        <div className="nav-btn example-2">
          <button
            onClick={() => router.push("/design-portfolio")}
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
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
