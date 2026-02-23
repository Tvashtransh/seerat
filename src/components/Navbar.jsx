import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine direction and visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling DOWN and past threshold -> Hide
        setVisible(false);
      } else {
        // Scrolling UP -> Show
        setVisible(true);
      }

      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`ss-navbar ${scrolled ? 'scrolled' : ''} ${!visible ? 'ss-navbar-hidden' : ''}`}>
      <div className="ss-nav-container">

        {/* ROW 1: BRANDING & UTILITIES */}
        <div className="ss-nav-top">
          <NavLink to="/" className="ss-nav-brand">
            <div className="ss-logo-wrapper">
              <img src="/logo.png" alt="Set Square Construction" className="ss-logo" />
              <div className="ss-brand-divider"></div>
              <span className="ss-slogan">SETSQUARE CONSTRUCTION</span>
            </div>
          </NavLink>

          <div className="ss-nav-utilities">
            <div className="ss-utility-item ss-country-selector">
              <img src="https://flagcdn.com/w20/ca.png" alt="Canada" className="ss-flag" />
              <span>Canada</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
            </div>

            <button className="ss-utility-item ss-search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>

            <NavLink to="/contact" className="ss-contact-cta">
              Get a Quote
            </NavLink>

            <button className="ss-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={`ss-burger ${menuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* ROW 2: NAVIGATION LINKS */}
        <nav className={`ss-nav-bottom ${menuOpen ? 'active' : ''}`}>
          <div className="ss-nav-links">
            <NavLink to="/" className="ss-nav-link">HOME</NavLink>
            <NavLink to="/services" className="ss-nav-link">SERVICES</NavLink>
            <NavLink to="/projects" className="ss-nav-link">PROJECTS</NavLink>
            <NavLink to="/gallery" className="ss-nav-link">GALLERY</NavLink>
            <NavLink to="/why-us" className="ss-nav-link">WHY US</NavLink>
            <NavLink to="/blog" className="ss-nav-link">BLOG</NavLink>
            <NavLink to="/contact" className="ss-nav-link">CONTACT</NavLink>
          </div>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
