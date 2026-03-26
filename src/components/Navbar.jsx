import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // Only the homepage has a dark image hero — all other pages have a light background
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Reset scroll state on route change
    setScrolled(window.scrollY > 20);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // On non-home pages, always show the dark/scrolled state
  const isScrolledOrSubpage = scrolled || !isHomePage;

  return (
    <header className={`ss-navbar ${isScrolledOrSubpage ? 'scrolled' : ''} ${!visible ? 'ss-navbar-hidden' : ''}`}>
      <div className="ss-nav-container">
        <div className="ss-nav-wrapper">

          {/* BRANDING */}
          <NavLink to="/" className="ss-nav-brand">
            <div className="ss-logo-wrapper">
              <img src="/logo_old.png" alt="Set Square Construction" className="ss-logo" />
            </div>
          </NavLink>

          {/* MAIN NAVIGATION */}
          <nav className={`ss-main-nav ${menuOpen ? 'active' : ''}`}>
            <div className="ss-nav-links">
              <NavLink to="/" className="ss-nav-link">HOME</NavLink>
              <div className="ss-nav-dropdown-wrapper">
                <NavLink to="/services" className="ss-nav-link">SERVICES</NavLink>
                <div className="ss-nav-dropdown-menu">
                  <NavLink to="/multi-development-framing" className="ss-nav-dropdown-link">Multi Development Framing</NavLink>
                  <NavLink to="/residential-framing" className="ss-nav-dropdown-link">Residential Framing</NavLink>
                  <NavLink to="/timber-framing" className="ss-nav-dropdown-link">Timber Framing</NavLink>
                  <NavLink to="/on-site-prefab-services" className="ss-nav-dropdown-link">Prefabs</NavLink>
                </div>
              </div>
              <NavLink to="/projects" className="ss-nav-link">PROJECTS</NavLink>
              <NavLink to="/gallery" className="ss-nav-link">GALLERY</NavLink>
              <NavLink to="/why-us" className="ss-nav-link">WHY US</NavLink>
              <NavLink to="/team" className="ss-nav-link">TEAM</NavLink>
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
