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
    <div className="contact-page">
      <div className="container contact-layout">

        {/* Left: Introduction */}
        <div className="contact-intro">
          <h1>Let's start your project.</h1>
          <p>
            Whether you have a custom home design or a multi-family development plan,
            we're ready to provide a detailed estimate.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <div className="contact-value">604-832-7008</div>
            </div>

            <div className="contact-item">
              <span className="contact-label">Email</span>
              <div className="contact-value">info@setsquareconstruction.ca</div>
            </div>

            <div className="contact-item">
              <span className="contact-label">Office</span>
              <div className="contact-value">
                11739 82A Avenue<br />Delta, BC V4C 2E5
              </div>
            </div>
          </div>

          <div className="contact-hiring-note">
            <strong>We're Hiring:</strong><br />
            Looking for experienced carpenters & framers (min. 1 year experience).
            Use the form to apply.
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrapper animate-fade-up delay-100">
          <h2 style={{ marginBottom: '24px', fontSize: '24px' }}>CONTACT SETSQUARE CONSTRUCTION</h2>
          <form onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="company">COMPANY</label>
              <input type="text" id="company" name="company" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">PHONE NUMBER</label>
              <input type="tel" id="phone" name="phone" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="date">ESTIMATED PROJECT START DATE</label>
              <input type="date" id="date" name="estimated_start_date" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="service">SERVICE INQUIRY</label>
              <select id="service" name="service_inquiry" className="form-input">
                <option value="wood framing">Wood Framing</option>
                <option value="forming">Forming</option>
                <option value="prefab">Prefab</option>
              </select>
            </div>

            <button type="submit" className="form-submit-btn">SEND MESSAGE</button>

            {status && <div className="form-status">{status}</div>}
          </form>
        </div>

      </div>
    </div>
  );
}
