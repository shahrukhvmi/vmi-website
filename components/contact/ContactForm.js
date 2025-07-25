import React, { use } from "react";

export default function ContactForm() {
  return (
    <div className="w-6xl mx-auto max-container-width relative z-10 pt-40 mb-10">
      <div className="contact-hero-section-shadow"></div>
      <div className="about-banner-shadow"></div>
      <div className="contact-card">
        <div className="contact-content">
          {/* LEFT TEXT */}
          <div className="contact-left">
            <h2 className="contact-form-heading olivera-font">
              Start Your Project <br /> with Confidence
            </h2>
            <p className="description">
              Share your needs, and we’ll craft a solution. For quotes or
              questions, contact us—your next move starts here.
            </p>

            <div className="contact-info">
              <p>
                <strong>For project inquiries only:</strong>
                <br />
                <a href="mailto:info@vibrantmediainc.com">
                  info@vibrantmediainc.com
                </a>
              </p>

              <p>
                <strong>For other questions:</strong>
                <br />
                <a href="mailto:ask@vibrantmediainc.com">
                  ask@vibrantmediainc.com
                </a>
              </p>

              <p>
                <strong>For all inquiries:</strong>
                <br />
                <a href="tell:+15034464257">+1 503 446 4257</a>
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-right">
            <form className="form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="-" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input id="company" type="text" placeholder="-" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="-" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" placeholder="-" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Services</label>
                  <select id="service">
                    <option>Select service</option>
                    <option>Web design</option>
                    <option>Web development</option>
                    <option>Custom development</option>
                    <option>App development</option>
                    <option>Seo</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select id="country">
                    <option>Select your country</option>
                    <option>Pakistan</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Dubai</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments</label>
                <textarea id="comments" placeholder="-" rows="4" />
              </div>
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
                  Get A Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
