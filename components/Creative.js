import React from "react";
import RingSlider from "./RingSlider";

function Creative() {
  return (
    <>
      <section className="creative-main">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="inner-heading text-center w-full">
            <h2 className="olivera-font">
              Our creative <br />
              <span className="inner-heading-span">superpowers!</span>
            </h2>
          </div>

          <div className="creative-menu olivera-font">
            <div className="creative-menu-item">
              <span className="creative-menu-span">Designing</span>
              <span className="icon">
                <img src="/btn-icon.svg" />
              </span>
            </div>
            <hr className="creative-hr" />
            <div className="creative-menu-item">
              <span className="creative-menu-span">Development</span>
              <span className="icon">
                <img src="/btn-icon.svg" />
              </span>
            </div>
            <hr className="creative-hr" />
            <div className="creative-menu-item">
              <span className="creative-menu-span">Marketing</span>
              <span className="icon">
                <img src="/btn-icon.svg" />
              </span>
            </div>
            <hr className="creative-hr" />
            <div className="creative-menu-item">
              <span className="creative-menu-span">Strategy & Campaigns</span>
              <span className="icon">
                <img src="/btn-icon.svg" />
              </span>
            </div>
          </div>
        </div>

        <div className="w-[90%] max-w-6xl creative-second-sec mx-auto"></div>
        <RingSlider />
      </section>
    </>
  );
}

export default Creative;
