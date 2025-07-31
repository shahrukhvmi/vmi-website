import React from "react";
import PortfolioPageSlider from "./PortfolioPageSlider";
import { useRouter } from "next/router";

export default function PortfolioSeoWrap() {
  const router = useRouter();

  const portfolioImages = [
    "/seo-1.png",
    "/seo-2.png",
    "/seo-3.png",
    "/seo-4.png",
    "/seo-5.png",
    "/seo-6.png",
    "/seo-7.png",
    "/seo-8.png",
    "/seo-9.png",
    "/seo-10.png",
  ];

  return (
    <section className="home-portfolio-wrap" id="portfolio">
      <div className="w-6xl mx-auto max-container-width">
        <div className="portfolio-inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="portfolio-inner-heading-top">
              Search is the Map
            </span>{" "}
            <br />
            <span className="portfolio-inner-heading-span">
              We're the Compass.
            </span>
          </h2>
        </div>
      </div>
      <PortfolioPageSlider protfolio={portfolioImages} />
      <div className="w-full flex justify-center mt-8">
        <div className="nav-btn example-2">
          <button
            onClick={() => router.push("/seo-portfolio")}
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
