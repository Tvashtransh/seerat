import React, { useState, useEffect } from "react";
import "./Careers.css";

export default function Careers() {
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
        setStatus("Thank you! We'll review your application and be in touch.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <div className="jll-careers-page">
      {/* Cinematic Hero Header */}
      <header
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/roofing.jpg)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <h1>Join Our Team</h1>
        </div>
      </header>

      <div className="jll-container" style={{ marginTop: '80px' }}>
        <div className="jll-careers-layout">
          {/* Left: Info */}
          <div className="jll-info-side">
            <section className="jll-info-block">
              <span className="jll-eyebrow">Careers at Setsquare</span>
              <h3>Build a Foundation for Your Future</h3>
              <p className="jll-careers-desc">
                We are always looking for experienced carpenters, dedicated framers, and site supervisors 
                to join our high-performance crews. At Setsquare Construction, we take pride in delivering 
                exceptional structural work across British Columbia.
              </p>

              <h4 style={{ marginBottom: '20px', fontSize: '20px' }}>Why Work With Us?</h4>
              <ul className="jll-benefits-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Competitive wages and steady work
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Commitment to on-site safety
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Opportunities for career advancement
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Work on BC's most exciting developments
                </li>
              </ul>
              
              <p style={{ marginTop: '40px', color: 'var(--text-secondary)' }}>
                <em>Note: Minimum 1 year of framing/construction experience is heavily preferred.</em>
              </p>
            </section>
          </div>

          {/* Right: Application Form */}
          <div className="jll-careers-form-container">
            <form onSubmit={handleSubmit} className="jll-form">
              <input type="checkbox" name="botcheck" className="hidden" />
              <input type="hidden" name="subject" value="New Employment Application - Setsquare Website" />

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
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" placeholder="604-000-0000" required />
                </div>

                <div className="jll-form-field">
                  <label htmlFor="experience">Years of Experience *</label>
                  <select id="experience" name="experience" required>
                    <option value="">Select experience level</option>
                    <option value="entry">Less than 1 year (Entry Level)</option>
                    <option value="1-3">1 - 3 years</option>
                    <option value="3-5">3 - 5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div className="jll-form-field full-width">
                  <label htmlFor="role">Position applying for *</label>
                  <select id="role" name="role" required>
                    <option value="framer">Framer / Carpenter</option>
                    <option value="lead">Lead Carpenter</option>
                    <option value="foreman">Site Foreman / Supervisor</option>
                    <option value="apprentice">Apprentice</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="jll-form-field full-width">
                  <label htmlFor="message">Cover Letter / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us a bit about your past experience, safety tickets, or skills..."
                  ></textarea>
                </div>

                {/* File upload for resume via Web3Forms requires a specific setup or file attachment PRO plan
                    We provide a message alternatively since free tier doesn't support file blobs usually
                */}
                <div className="jll-form-field full-width">
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '5px' }}>
                    *If your application is shortlisted, we will request your resume via email.
                  </p>
                </div>
              </div>

              <button type="submit" className="jll-submit-btn">
                {status === "Sending..." ? "Submitting Application..." : "Submit Application"}
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
