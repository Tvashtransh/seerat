import React, { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "bef4708b-58ad-4ba2-acb4-5a008f2b4ebd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Thank you! We'll be in touch shortly.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <div className="jll-contact-page">

      {/* JLL-Style Header */}
      <header className="jll-page-header">
        <div className="jll-container">
          <h1 className="jll-display-heading">Connect with Us</h1>
          <p className="jll-display-subheading">
            Whether you're developing a multi-family complex or building your dream home,
            our specialized team is ready to provide the precision framing you need.
          </p>
        </div>
      </header>

      <div className="jll-container">
        <div className="jll-contact-layout">

          {/* Left: Contact Info */}
          <div className="jll-contact-info">
            <section className="jll-info-block">
              <span className="jll-eyebrow">Our Location</span>
              <h3>Headquarters</h3>
              <p className="jll-address">
                11739 82A Avenue<br />
                Delta, BC V4C 2E5
              </p>

              <div className="jll-contact-links">
                <div className="jll-contact-item">
                  <span className="jll-label">General Inquiries</span>
                  <a href="mailto:info@setsquareconstruction.ca">info@setsquareconstruction.ca</a>
                </div>
                <div className="jll-contact-item">
                  <span className="jll-label">Call Our Office</span>
                  <a href="tel:6048327008">604-832-7008</a>
                </div>
              </div>
            </section>

            <section className="jll-hiring-block">
              <h3>Join the Team</h3>
              <p>
                We are always looking for experienced carpenters and dedicated framers
                to join our high-performance crews. (Min. 1 year experience required).
              </p>
              <p className="jll-hiring-note">Apply via the form and specify 'Employment' in your message.</p>
            </section>
          </div>

          {/* Right: Contact Form */}
          <div className="jll-contact-form-container">
            <form onSubmit={handleSubmit} className="jll-form">
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="jll-form-grid">
                <div className="jll-form-field">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>

                <div className="jll-form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>

                <div className="jll-form-field">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" placeholder="Agency or Developer Name" />
                </div>

                <div className="jll-form-field">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" placeholder="604-000-0000" required />
                </div>

                <div className="jll-form-field full-width">
                  <label htmlFor="service">Service Inquiry</label>
                  <select id="service" name="service_inquiry">
                    <option value="wood framing">Wood Framing</option>
                    <option value="multi-development">Multi-Development Framing</option>
                    <option value="timber-framing">Timber Framing</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="jll-form-field full-width">
                  <label htmlFor="message">How can we help? *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="jll-submit-btn">
                {status === "Sending..." ? "Sending Message..." : "Submit Inquiry"}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>

              {status && <div className={`jll-form-status ${status.includes("Thank") ? "success" : "error"}`}>{status}</div>}
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}
