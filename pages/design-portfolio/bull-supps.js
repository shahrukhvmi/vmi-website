import Link from "next/link";
import React from "react";

export default function BullSupps() {
  return (
    <main className="relative text-white  overflow-hidden z-10">
      <section>
        <div className="relative pt-60 flex flex-col items-center justify-center text-white text-center px-4 z-10 ">
          <div className="portfolio-banner-shadow"></div>
          <div className="portfolio-banner-shadow-right"></div>
        </div>

        <div className="w-6xl mx-auto max-container-width">
          <div className="porfolio-back-icon">
            <Link
              href="/design-portfolio"
              className="flex text-[18px] poppins-font items-center"
            >
              <span className="me-2">
                <img src="/back-icon.svg" />
              </span>
              Back
            </Link>
          </div>

          <div className="flex mt-5 gap-6 mb-30">
            <div className="single-portfolio-left">
              <img src="/bull.png" />
            </div>

            <div className="single-portfolio-right">
              <span className="poppins-font portfolio-single-badge">
                Branding
              </span>
              <div className="portfolio-single-title olivera-font mt-2 mb-5">
                <h1 className="text-[68px] leadning-none">Bull Supps</h1>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/client.svg" />
                <p className="poppins-font text-[18px]">
                  Client: <span className="font-bold">Bull Supps</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/role.svg" />
                <p className="poppins-font text-[18px]">
                  My Role: <span className="font-bold">Digital Designer</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/tools.svg" />
                <p className="poppins-font text-[18px]">
                  Tools Used:{" "}
                  <span className="font-bold">Adobe Illustrator</span>
                </p>
              </div>

              <div className="portfolio-single-description-wrapper flex align-center gap-3 border-[#30283b] border-2 rounded-lg py-2 px-3 mb-4">
                <img src="/tools.svg" />
                <p className="poppins-font text-[18px]">
                  Duration: <span className="font-bold">20 to 30 Days</span>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm font-light text-white/90 shadow-sm space-y-3">
                {/* Top Line and Heading */}
                <h3 className="text-white poppins-font text-[20px]">Details</h3>
                <hr className="border-t border-white/20 rounded-full mb-2" />

                {/* Paragraphs */}
                <p className="poppins-font text-[16px]">
                  This project allowed us to go all in on creating high-energy,
                  colorful and striking imagery while building a design system
                  that could scale across different digital touchpoints.
                </p>
                <p className="poppins-font text-[16px]">
                  Every detail — from layout to interaction — was designed with
                  consistency in mind, ensuring a unified look and feel whether
                  you’re browsing through the website, interacting with a
                  product feature, or navigating web apps like G-HUB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
