import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* ROW 1: UTILITY BAR */}
        <div className="navbar-top-row">
          {/* Brand */}
          <NavLink to="/" className="brand-section">
            <img src="/logo.png" alt="Set Square Construction" className="jll-logo" />
            <span className="tagline">PRECISION FRAMING EXPERTS</span>
          </NavLink>

          {/* Tools */}
          <div className="utility-tools">
            <a href="tel:6048327008" className="region-btn" style={{ border: 'none', background: 'transparent', fontWeight: 'bold' }}>
              📞 604-832-7008
            </a>
            <NavLink to="/contact" className="contact-btn">
              Get a Quote
            </NavLink>

            {/* Mobile Toggle inside tools row for space efficiency */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* ROW 2: NAVIGATION */}
        <div className={`navbar-bottom-row ${menuOpen ? 'open' : ''}`}>
          <div className="nav-links-center">
            <NavLink to="/" className="nav-link">HOME</NavLink>
            <NavLink to="/services" className="nav-link">SERVICES</NavLink>
            <NavLink to="/projects" className="nav-link">PROJECTS</NavLink>
            <NavLink to="/gallery" className="nav-link">GALLERY</NavLink>
            <NavLink to="/why-us" className="nav-link">WHY US</NavLink>
            <NavLink to="/blog" className="nav-link">BLOG</NavLink>
            <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
