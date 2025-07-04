import React from "react";

function Technologia() {
  return (
    <div className="tech-main-shadow relative overflow-x-hidden">
      <div className="tech-main-shadow-wrap">
        <img src="/tech-main-shadow.png" />
      </div>
      <div className="technologia-main relative">
        <div className="w-[90%] max-w-6xl mx-auto">
          <div className="inner-heading text-center w-full">
            <h2 className="olivera-font">
              Technologies <br />
              <span className="inner-heading-span">behind the magic</span>
            </h2>
          </div>

          <div className="technologia-logos mt-30">
            <img src="/tech-logos.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologia;
