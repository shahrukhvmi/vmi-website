import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="footer-wrapper pt-20 z-10 relative">
      <div className="max-container-width w-6xl mx-auto">
        <div className="footer-wrap">
          <div className="footer-left footer-col w-[50%]">
            <div className="footer-logo-img">
              <img src="/footer-logo.png" />
            </div>
            <p className="mt-6 poppins-font">
              Enhance your business media experience with our collaborative
              digital environment. Explore our offerings today.
            </p>
            <div className="example-2 footer-btn mt-6">
              <button
                className="inner flex justify-center poppins-font text-xl items-center"
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
                Book A Discovery Call{" "}
                {/* <span>
                  <img src="/btn-icon.svg" />
                </span> */}
              </button>
            </div>

            <div className="footer-navigation py-8 mt-20">
              <ul className="flex justify-between poppins-font">
                <li className="cursor-pointer">
                  <p>Home</p>
                </li>
                <li className="cursor-pointer">
                  <p>About Us</p>
                </li>
                <li className="cursor-pointer">
                  <p>Services</p>
                </li>
                <li className="cursor-pointer">
                  <p>Portfolio</p>
                </li>
                <li className="cursor-pointer">
                  <p>Contact Us</p>
                </li>
              </ul>
            </div>

            <div className="footer-email pt-20 poppins-font">
              <p className="email-text1">Email</p>
              <p className="email-text2">info@vibrantmediainc.com</p>
            </div>

            <div className="footer-email pt-10 pb-20 poppins-font">
              <p className="text-[15px]">Follow Us</p>
              <ul className="flex mt-4 gap-4">
                <li>
                  <img src="/facebook.svg" />
                </li>
                <li>
                  <img src="/insta.svg" />
                </li>
                <li>
                  <img src="/x.svg" />
                </li>
                <li>
                  <img src="/linkedin.svg" />
                </li>
                {/* <li>
                <img src="/youtube.svg" />
              </li> */}
              </ul>
            </div>
          </div>
          <div className="footer-right footer-col text-right">
            {/* <img src="/footer-bg-blur.png" /> */}
          </div>
        </div>
        <div className="rights-wrap flex justify-between pb-10 poppins-font">
          <p className="text-[#E9E9E9]">
            © 2025 Vibrant Media Inc. All rights reserved
          </p>
          <p className="text-[#E9E9E9]">
            Security | Privacy & Cookie Policy | Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
