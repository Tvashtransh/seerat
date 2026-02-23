import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="jll-footer">

      {/* 1. TOP HEADER: Logo + Tagline + Scroll Top */}
      <div className="jll-footer-header">
        <div className="jll-footer-brand">
          <img src="/logo.png" alt="Set Square" className="jll-footer-logo" />
          <span className="jll-footer-tagline">PRECISION FRAMING EXPERTS</span>
        </div>
        <button onClick={scrollToTop} className="jll-scroll-top-btn">
          <span>&uarr;</span>
        </button>
      </div>

      <div className="jll-footer-container">

        {/* 2. MAIN GRID */}
        <div className="jll-footer-grid">

          {/* Col 1: Brand Info */}
          <div className="jll-footer-col brand-col">
            <p className="jll-footer-intro">
              There's the conventional way of doing things. And then, there's the SetSquare way.
              A more innovative, intelligent and human way to build.
            </p>

            <button className="jll-subscribe-btn">
              Subscribe now <span>&rarr;</span>
            </button>

            <div className="jll-footer-socials">
              <a href="#" className="jll-social-icon"><FaFacebookF /></a>
              <a href="#" className="jll-social-icon"><FaInstagram /></a>
              <a href="#" className="jll-social-icon"><FaXTwitter /></a>
              <a href="#" className="jll-social-icon"><FaWhatsapp /></a>
              <a href="mailto:info@setsquareconstruction.ca" className="jll-social-icon"><FaEnvelope /></a>
            </div>
          </div>

          {/* Col 2: How can we help? */}
          <div className="jll-footer-col">
            <h4 className="jll-footer-heading">How can we help?</h4>
            <ul className="jll-footer-links">
              <li><NavLink to="/multi-development-framing">Multi-Family Framing</NavLink></li>
              <li><NavLink to="/residential-framing">Custom Residential</NavLink></li>
              <li><NavLink to="/timber-framing">Timber Framing</NavLink></li>
              <li><NavLink to="/contact">Request a Bid</NavLink></li>
              <li><NavLink to="/services">View Capabilities</NavLink></li>
            </ul>
          </div>

          {/* Col 3: Careers (Simplified for SetSquare) */}
          <div className="jll-footer-col">
            <h4 className="jll-footer-heading">Join our team</h4>
            <ul className="jll-footer-links">
              <li><NavLink to="/contact">Work at SetSquare</NavLink></li>
              <li><NavLink to="/why-us">Meet our people</NavLink></li>
              <li><NavLink to="/contact">Subcontractor Opportunities</NavLink></li>
            </ul>
          </div>

          {/* Col 4: Corporate Info */}
          <div className="jll-footer-col">
            <h4 className="jll-footer-heading">Company Info</h4>
            <ul className="jll-footer-links">
              <li><NavLink to="/why-us">About SetSquare</NavLink></li>
              <li><NavLink to="/projects">Our Projects</NavLink></li>
              <li><a href="mailto:info@setsquareconstruction.ca">info@setsquareconstruction.ca</a></li>
              <li><a href="tel:6048327008">604-832-7008</a></li>
              <li style={{ fontSize: '14px', color: '#555', marginTop: '10px', lineHeight: '1.5' }}>
                11739 82A Avenue<br />
                Delta, BC V4C 2E5
              </li>
            </ul>
          </div>

        </div>

        {/* 3. ALSO OF INTEREST STRIP (SEO Links) */}
        <div className="jll-interest-strip">
          <span className="jll-interest-label">Also of Interest:</span>
          <div className="jll-interest-links">
            <NavLink to="/granary">The Granary Project</NavLink>
            <NavLink to="/avana-townhomes">Avana Townhomes</NavLink>
            <NavLink to="/timber-framing">BC Timber Construction</NavLink>
            <NavLink to="/services">Vancouver Framing Services</NavLink>
          </div>
        </div>

      </div>

      {/* 4. BOTTOM BAR */}
      <div className="jll-footer-bottom">
        <div className="jll-footer-bottom-container">
          <div className="jll-bottom-links">
            <NavLink to="/privacy">Privacy statement</NavLink>
            <NavLink to="/terms">Terms of use</NavLink>
            <NavLink to="/cookies">Cookies</NavLink>
            <NavLink to="/sitemap">Sitemap</NavLink>
          </div>

          <div className="jll-bottom-right">
            <span className="jll-copyright">Copyright {currentYear} Set Square Construction Ltd.</span>
            <div className="jll-region-select-small">
              <img src="https://flagcdn.com/w20/ca.png" alt="Canada" />
              <span>Canada</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
