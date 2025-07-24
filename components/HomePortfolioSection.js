import React from "react";
import PortfolioSlider from "./PortfolioSlider";

function HomePortfolioSection() {
  return (
    <section className="home-portfolio-wrap" id="portfolio">
      <div className="w-6xl mx-auto max-container-width">
        <div className="inner-heading text-center w-full">
          <h2 className="olivera-font">
            <span className="inner-heading-top">Work That</span> <br />
            <span className="inner-heading-span">Speaks Volumes</span>
          </h2>
        </div>
      </div>
      <PortfolioSlider />
    </section>
  );
}

export default HomePortfolioSection;
