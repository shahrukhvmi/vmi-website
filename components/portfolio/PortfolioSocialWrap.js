import React from "react";
import PortfolioPageSlider from "./PortfolioPageSlider";
import { useRouter } from "next/router";

export default function PortfolioSocialWrap() {
  const router = useRouter();

  const portfolioImages = [
    "/social-1.png",
    "/social-2.png",
    "/social-3.png",
    "/social-4.png",
    "/social-5.png",
    "/social-6.png",
  ];

  return (
    <section className="home-portfolio-wrap" id="portfolio">
      <div className="w-6xl mx-auto max-container-width">
        <div className="portfolio-inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="portfolio-inner-heading-top">
              It's Not Just Social
            </span>{" "}
            <br />
            <span className="portfolio-inner-heading-span">It's Strategy</span>
          </h2>
        </div>
      </div>
      <PortfolioPageSlider protfolio={portfolioImages} />
      <div className="w-full flex justify-center mt-8">
        <div className="nav-btn example-2">
          <button
            onClick={() => router.push("/social-media-portfolio")}
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
