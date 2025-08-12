import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    country: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    // auto-hide after 3s
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
      setToast((t) => ({ ...t, show: false }));
    }, 3000);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // clear as user types
  };

  const validate = () => {
    const newErrors = {};

    // helpers
    const isEmpty = (v) => !v || v.trim() === "";
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const phoneOk = (v) => /^[+]?[\d\s()\-]{7,15}$/.test(v);

    if (isEmpty(formData.name) || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name.";
    }
    if (isEmpty(formData.email) || !emailOk(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (isEmpty(formData.phone) || !phoneOk(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (isEmpty(formData.service)) {
      newErrors.service = "Select a service.";
    }
    if (isEmpty(formData.country)) {
      newErrors.country = "Select your country.";
    }
    if (isEmpty(formData.comments) || formData.comments.trim().length < 10) {
      newErrors.comments = "Please add at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      // TODO: send to your API route
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2s loader
      showToast("Form submitted successfully!", "success");

      console.log("formData:", formData);
      setTimeout(() => {
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          country: "",
          comments: "",
        });
      }, 300);
      // reset if needed:
      // setFormData({ name:"", company:"", email:"", phone:"", service:"", country:"", comments:"" });
    } catch (err) {
      console.error(err);
      showToast("Something went wrong.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const err = (k) => errors[k];

  return (
    <>
      {toast.show && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-10 right-6 z-[9999] max-w-sm w-auto px-5 py-3 rounded-lg shadow-xl text-white flex items-start gap-3 transition-all duration-300
      ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          style={{ animation: "toast-slide-in 200ms ease-out" }}
        >
          <div className="text-sm leading-5 poppins-font">{toast.message}</div>
        </div>
      )}
      <div className="w-6xl mx-auto max-container-width relative z-10 pt-40 mb-10">
        <div className="contact-hero-section-shadow"></div>
        <div className="about-banner-shadow"></div>
        <div className="contact-card">
          <div className="contact-content">
            {/* LEFT TEXT */}
            <div className="contact-left">
              <h2 className="contact-form-heading olivera-font">
                Get Clear Solutions <br /> for Real Brand Needs
              </h2>
              <p className="description">
                We don’t work with standard templates or fixed pricing models.
                All our offerings are tailored to your brand’s specific
                requirements. Complete our online form to receive clear,
                customized quotations prepared specifically for you.
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
                  <strong>For all inquiries:</strong>
                  <br />
                  <a href="tel:+923452646481">+92 3452 646 481</a>
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="contact-right">
              <form className="form" noValidate onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="-"
                      className={`poppins-font ${
                        err("name") ? "input-error" : ""
                      }`}
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!err("name")}
                      aria-describedby={err("name") ? "name-error" : undefined}
                    />
                    {err("name") && (
                      <p id="name-error" className="error-text poppins-font">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">
                      Company Name{" "}
                      <span className="text-muted">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="-"
                      className="poppins-font"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="-"
                      className={`poppins-font ${
                        err("email") ? "input-error" : ""
                      }`}
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!err("email")}
                      aria-describedby={
                        err("email") ? "email-error" : undefined
                      }
                    />
                    {err("email") && (
                      <p id="email-error" className="error-text poppins-font">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="-"
                      className={`poppins-font ${
                        err("phone") ? "input-error" : ""
                      }`}
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={!!err("phone")}
                      aria-describedby={
                        err("phone") ? "phone-error" : undefined
                      }
                    />
                    {err("phone") && (
                      <p id="phone-error" className="error-text poppins-font">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Services</label>
                    <select
                      id="service"
                      className={`poppins-font ${
                        err("service") ? "input-error" : ""
                      }`}
                      value={formData.service}
                      onChange={handleChange}
                      aria-invalid={!!err("service")}
                      aria-describedby={
                        err("service") ? "service-error" : undefined
                      }
                    >
                      <option value="">Select service</option>
                      <option value="Web design">Web design</option>
                      <option value="Web development">Web development</option>
                      <option value="Custom development">
                        Custom development
                      </option>
                      <option value="App development">App development</option>
                      <option value="SEO">SEO</option>
                    </select>
                    {err("service") && (
                      <p id="service-error" className="error-text poppins-font">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select
                      id="country"
                      className={`poppins-font ${
                        err("country") ? "input-error" : ""
                      }`}
                      value={formData.country}
                      onChange={handleChange}
                      aria-invalid={!!err("country")}
                      aria-describedby={
                        err("country") ? "country-error" : undefined
                      }
                    >
                      <option value="">Select your country</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Dubai">Dubai</option>
                    </select>
                    {err("country") && (
                      <p id="country-error" className="error-text poppins-font">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="comments">Comments</label>
                  <textarea
                    id="comments"
                    placeholder="-"
                    rows="4"
                    className={`poppins-font ${
                      err("comments") ? "input-error" : ""
                    }`}
                    value={formData.comments}
                    onChange={handleChange}
                    aria-invalid={!!err("comments")}
                    aria-describedby={
                      err("comments") ? "comments-error" : undefined
                    }
                  />
                  {err("comments") && (
                    <p id="comments-error" className="error-text poppins-font">
                      {errors.comments}
                    </p>
                  )}
                </div>

                <div className="nav-btn example-2 form-assist-btn">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inner flex justify-center gap-2 poppins-font text-2xl items-center"
                    style={{
                      opacity: submitting ? 1 : 1,
                      cursor: submitting ? "not-allowed" : "pointer",
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
                    {submitting ? (
                      <div className="loader"></div>
                    ) : (
                      "Get A Quote"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* quick CSS helpers (tailor to your setup) */}
        <style jsx>{`
          .input-error {
            outline: 2px solid #ef4444;
          }
          .error-text {
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
          }
          .text-muted {
            opacity: 0.7;
            font-size: 0.875rem;
          }
          @keyframes toast-slide-in {
            from {
              transform: translateY(10px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </>
  );
}
