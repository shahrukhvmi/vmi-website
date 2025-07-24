import React from "react";

export default function Assistance() {
  return (
    <div className="w-6xl mx-auto max-container-width relative z-10 mb-30">
      <div className="contact-card-wrap flex relative z-10">
        <div className="contact-card-inner bg-white/5 backdrop-blur-md rounded-xl p-10 card-inner-glow">
          <h2 className="olivera-font">Need assistance?</h2>
          <p className="poppins-font">
            Feel free to reach out to us!
            <br /> We're here to provide you with more <br />
            information.
          </p>

          <div className="nav-btn example-2 form-assist-btn">
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
              Call Us Now
            </button>
          </div>
        </div>

        <div className="contact-card-inner bg-white/5 backdrop-blur-md rounded-xl p-10 card-inner-glow">
          <h2 className="olivera-font">Want to visit us?</h2>
          <p className="poppins-font">
            Vibrant Media Inc. 3rd Floor, Plot # 1-A <br /> 1/6, Block 1
            Nazimabad, 74600 Karachi,
            <br /> Pakistan
          </p>

          <div className="nav-btn example-2 form-assist-btn">
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
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
