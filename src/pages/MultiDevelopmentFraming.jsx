import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ResidentialFraming.css"; // Reusing the JLL Service Detail Theme

export default function MultiDevelopmentFraming() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-service-detail-page">

      {/* Cinematic Hero Section */}
      <header
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/culmena-assets/DJI_0953.JPG)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <div className="jll-breadcrumbs" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link> / <Link to="/services" style={{ color: '#fff' }}>Services</Link> / <span>Multi-Development Framing</span>
          </div>
          <h1>Multi-Development Framing</h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="jll-service-body">
        <div className="jll-container">
          <div className="jll-service-layout">

            {/* Left Column: Content */}
            <div className="jll-service-main">
              <section className="jll-content-block">
                <h2>Scaling Excellence with Wood</h2>
                <p>
                  At Setsquare Construction, we specialize in the unique demands of multi-unit residential developments.
                  From 50-unit townhome complexes to sprawling mixed-use communities, our team brings the manpower and management expertise required to deliver on time and on budget.
                </p>
                <p>
                  We understand that in large-scale development, efficiency is currency. Our systematic approach to framing ensures rapid deployment,
                  minimal waste, and seamless coordination with other trades on busy job sites.
                </p>
              </section>

              <section className="jll-content-block">
                <h3>Project Capabilities</h3>
                <ul className="jll-capabilities-list">
                  <li><strong>Townhome Complexes:</strong> High-volume framing with consistent quality control across all units.</li>
                  <li><strong>Mixed-Use Buildings:</strong> Integrating residential wood framing with concrete and steel commercial podiums.</li>
                  <li><strong>Apartment Buildings:</strong> Up to 6-storey wood frame construction expertise.</li>
                  <li><strong>Project Management:</strong> Dedicated site supervisors ensuring safety and schedule adherence.</li>
                </ul>
              </section>

              <section className="jll-image-gallery-grid">
                <img src="/culmena-assets/DJI_0961.JPG" onError={(e) => e.target.src = '/project-type-4.png'} alt="Culmena Multi-Family Site" />
                <img src="/culmena-assets/DJI_0970.JPG" onError={(e) => e.target.src = '/project-type-10.png'} alt="Construction Progress" />
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="jll-service-sidebar">
              <div className="jll-sidebar-card">
                <h4>Key Benefits</h4>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Scale</span>
                  <span className="stat-label">Large Crew Capacity</span>
                </div>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Value</span>
                  <span className="stat-label">Cost-Effective Solutions</span>
                </div>
              </div>

              <div className="jll-sidebar-contact">
                <h4>Partner With Us</h4>
                <p>Planning a new development? Let's discuss your framing needs.</p>
                <Link to="/contact" className="jll-btn-primary full-width">
                  Get a Bid
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </div>

      {/* The Setsquare Advantage */}
      <section className="jll-advantage-section">
        <div className="jll-container">
          <h2>Why Developers Choose Setsquare</h2>
          <div className="jll-advantage-grid">
            <div className="jll-advantage-item">
              <span className="advantage-icon">01</span>
              <h3>Efficiency</h3>
              <p>Streamlined processes ensure rapid project completion, helping you meet occupancy dates.</p>
            </div>
            <div className="jll-advantage-item">
              <span className="advantage-icon">02</span>
              <h3>Scalability</h3>
              <p>The ability to ramp up manpower to meet aggressive schedules on large sites.</p>
            </div>
            <div className="jll-advantage-item">
              <span className="advantage-icon">03</span>
              <h3>Safety Leaders</h3>
              <p>Rigorous safety protocols that protect our team and your liability on site.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
