import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">

      {/* 1. TOP BAR: Logo + Back to Top */}
      <div className="footer-top-bar">
        <div className="footer-brand-section">
          <img src="/logo.png" alt="Set Square" className="footer-logo" />
          <span className="footer-tagline">SEE A BRIGHTER WAY</span>
        </div>
        <button onClick={scrollToTop} className="back-to-top-btn">
          <span className="arrow-up">↑</span>
        </button>
      </div>

      <div className="footer-container">

        {/* Column 1: Intro & CTA */}
        <div className="footer-column brand-col">
          <p className="footer-intro">
            There's the conventional way of doing things. And then, there's the Set Square way.
            A more innovative, intelligent and human way. Find out how you can see a brighter way with Set Square.
          </p>

          <button className="subscribe-btn">
            Subscribe now <span>&rarr;</span>
          </button>

          <div className="footer-socials">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">ig</a>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div className="footer-column">
          <h3 className="footer-heading">Our Services</h3>
          <NavLink to="/services" className="footer-link">Overview</NavLink>
          <NavLink to="/multi-development-framing" className="footer-link">Multi-Family Framing</NavLink>
          <NavLink to="/residential-framing" className="footer-link">Custom Residential</NavLink>
          <NavLink to="/timber-framing" className="footer-link">Timber Framing</NavLink>
          <NavLink to="/contact" className="footer-link">Request a Bid</NavLink>
        </div>

        {/* Column 3: Company */}
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <NavLink to="/projects" className="footer-link">Our Projects</NavLink>
          <NavLink to="/why-us" className="footer-link">Why Set Square?</NavLink>
          <NavLink to="/gallery" className="footer-link">Gallery</NavLink>
          <NavLink to="/contact" className="footer-link">Contact Us</NavLink>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Info</h3>
          <a href="tel:6048327008" className="footer-link">604-832-7008</a>
          <a href="mailto:info@setsquareconstruction.ca" className="footer-link">info@setsquareconstruction.ca</a>
          <span className="footer-link" style={{ cursor: 'default', color: '#555' }}>
            11739 82A Avenue<br />Delta, BC V4C 2E5
          </span>
        </div>

      </div>

      {/* BOTTOM BAR: Copyright */}
      <div className="footer-bottom">
        <span className="interest-label">© {currentYear} Set Square Construction Ltd.</span>
        <div className="interest-links">
          <NavLink to="/privacy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms of Service</NavLink>
        </div>
      </div>

    </footer>
  );
}
