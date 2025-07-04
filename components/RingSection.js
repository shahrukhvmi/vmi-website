import React from "react";

function RingSection() {
  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden bg-no-repeat bg-center bg-full md:bg-full second-ring-css bg-[url('/second-ring.png')] bg-no-repeat bg-top">
      <div className="relative z-10 w-full max-w-[90%] mx-auto bg-white/5 backdrop-blur-xl rounded-xl px-6 md:px-12 py-50 ">
        <div className="max-w-6xl flex flex-col md:flex-row justify-between items-center gap-12 justify-items-center mx-auto">
          <div className="flex flex-col items-start max-w-md text-center md:text-left">
            <div className="ml-[-60px] mb-4">
              <img src="/second-logo.png" />
            </div>
            <p className="text-white/80 leading-relaxed mt-[-50px] poppins-font">
              Vibrant Media Inc. is not just a service provider—we're your
              partner in growth. From trend-sensitive design and cutting-edge
              development to strategic campaign planning and customized digital
              marketing, we offer a comprehensive suite of solutions tailored to
              your unique mission. Whether you're looking to enhance your brand,
              engage your audience, or scale your business, we're here to turn
              your vision into reality.
            </p>
          </div>

          <div className="relative flex justify-center items-center w-full max-w-md">
            <img src="/second-right.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RingSection;
