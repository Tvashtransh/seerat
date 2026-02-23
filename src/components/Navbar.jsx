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
        <div className="ss-nav-wrapper">

          {/* BRANDING */}
          <NavLink to="/" className="ss-nav-brand">
            <div className="ss-logo-wrapper">
              <img src="/logo.png" alt="Set Square Construction" className="ss-logo" />
              <span className="ss-brand-name">SETSQUARE</span>
            </div>
          </NavLink>

          {/* MAIN NAVIGATION */}
          <nav className={`ss-main-nav ${menuOpen ? 'active' : ''}`}>
            <div className="ss-nav-links">
              <NavLink to="/" className="ss-nav-link">HOME</NavLink>
              <NavLink to="/services" className="ss-nav-link">SERVICES</NavLink>
              <NavLink to="/projects" className="ss-nav-link">PROJECTS</NavLink>
              <NavLink to="/gallery" className="ss-nav-link">GALLERY</NavLink>
              <NavLink to="/why-us" className="ss-nav-link">WHY US</NavLink>
              <NavLink to="/blog" className="ss-nav-link">BLOG</NavLink>
            </div>
          </nav>

          {/* ACTIONS */}
          <div className="ss-nav-actions">
            <NavLink to="/contact" className="ss-nav-cta">
              Get a Quote
            </NavLink>

            <button className="ss-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={`ss-burger ${menuOpen ? 'open' : ''}`}></span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
