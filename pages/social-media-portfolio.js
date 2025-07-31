import React from "react";

export default function SocialMediaPortfolio() {
  return (
    <main className="relative text-white  overflow-hidden z-10">
      <section>
        <div className="relative pt-60 flex flex-col items-center justify-center text-white text-center px-4 z-10 ">
          <div className="portfolio-banner-shadow"></div>
          <div className="portfolio-banner-shadow-right"></div>
        </div>

        <div className="w-6xl mx-auto max-container-width">
          <div className="portfolio-inner-heading text-center w-full mb-30">
            <h2 className="olivera-font">
              <span className="portfolio-inner-heading-top">
                It's Not Just Social
              </span>{" "}
              <br />
              <span className="portfolio-inner-heading-span">
                It's Strategy
              </span>
            </h2>
          </div>

          <div className="flex justify-between mt-8 mb-30">
            <div className="detail-portfolio-image-wrapper relative">
              <img src="/social-1.png" />
              <div className="detail-portfolio-image-overlay">
                <div className="detail-portfolio-banner-badge">
                  <div className="mb-2">
                    <span className="ms-2 poppins-font detail-portfolio-branding">
                      Social Media Campaigns
                    </span>
                  </div>
                  <p className="ms-2 poppins-font font-bold">Tech Ancestry</p>
                </div>
              </div>
            </div>

            <div className="detail-portfolio-image-wrapper relative">
              <img src="/social-2.png" />
              <div className="detail-portfolio-image-overlay">
                <div className="detail-portfolio-banner-badge">
                  <div className="mb-2">
                    <span className="ms-2 poppins-font detail-portfolio-branding">
                      Social Media Campaigns
                    </span>
                  </div>
                  <p className="ms-2 poppins-font font-bold">Bridle 360</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8 mb-30">
            <div className="detail-portfolio-image-wrapper relative">
              <img src="/social-3.png" />
              <div className="detail-portfolio-image-overlay">
                <div className="detail-portfolio-banner-badge">
                  <div className="mb-2">
                    <span className="ms-2 poppins-font detail-portfolio-branding">
                      Social Media Campaigns
                    </span>
                  </div>
                  <p className="ms-2 poppins-font font-bold">Ravvrank.co</p>
                </div>
              </div>
            </div>

            <div className="detail-portfolio-image-wrapper relative">
              <img src="/social-4.png" />
              <div className="detail-portfolio-image-overlay">
                <div className="detail-portfolio-banner-badge">
                  <div className="mb-2">
                    <span className="ms-2 poppins-font detail-portfolio-branding">
                      Social Media Campaigns
                    </span>
                  </div>
                  <p className="ms-2 poppins-font font-bold">
                    Tanaal Properties
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8 mb-30">
            <div className="detail-portfolio-image-wrapper relative">
              <img src="/social-5.png" />
              <div className="detail-portfolio-image-overlay">
                <div className="detail-portfolio-banner-badge">
                  <div className="mb-2">
                    <span className="ms-2 poppins-font detail-portfolio-branding">
                      Social Media Campaigns
                    </span>
                  </div>
                  <p className="ms-2 poppins-font font-bold">
                    Salli Sit Happy{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="detail-portfolio-image-wrapper relative">
              <img src="/social-6.png" />
              <div className="detail-portfolio-image-overlay">
                <div className="detail-portfolio-banner-badge">
                  <div className="mb-2">
                    <span className="ms-2 poppins-font detail-portfolio-branding">
                      Social Media Campaigns
                    </span>
                  </div>
                  <p className="ms-2 poppins-font font-bold">Aaila Foods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
