import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ResidentialFraming.css";

export default function ResidentialFraming() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-service-detail-page">

      {/* Cinematic Hero Section */}
      <header
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/boundarybay-assets/boundarybay-1.jpg)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <div className="jll-breadcrumbs" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link> / <Link to="/services" style={{ color: '#fff' }}>Services</Link> / <span>Residential Framing</span>
          </div>
          <h1>Residential Framing</h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="jll-service-body">
        <div className="jll-container">
          <div className="jll-service-layout">

            {/* Left Column: Content */}
            <div className="jll-service-main">
              <section className="jll-content-block">
                <h2>Crafting Foundations for Living</h2>
                <p>
                  At Setsquare Construction, we understand that a home is more than just a structure—it's a personalized space designed for life.
                  Our residential framing services focus on the critical balance between structural integrity and design flexibility.
                </p>
                <p>
                  Whether working on a bespoke luxury estate or a high-efficiency single-family development, our team applies the same rigour
                  and attention to detail. We collaborate closely with architects and homeowners to ensure every beam and stud aligns perfectly with the vision.
                </p>
              </section>

              <section className="jll-content-block">
                <h3>Our Capabilities</h3>
                <ul className="jll-capabilities-list">
                  <li><strong>New Home Construction:</strong> Complete framing solutions from foundation to roof for new builds.</li>
                  <li><strong>Complex Roof Systems:</strong> Expertise in truss and hand-cut roof framing for unique architectural styles.</li>
                  <li><strong>Additions & Renovations:</strong> Seamlessly integrating new structures with existing frames.</li>
                  <li><strong>Architectural Features:</strong> Specialized framing for vaulted ceilings, window walls, and custom details.</li>
                </ul>
              </section>

              <section className="jll-image-gallery-grid">
                <img src="/summerland-1.jpg" onError={(e) => e.target.src = '/project-type-6.png'} alt="Luxury Residential Framing" />
                <img src="/troutlake-1.jpg" onError={(e) => e.target.src = '/project-type-2.png'} alt="Custom Home Construction" />
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="jll-service-sidebar">
              <div className="jll-sidebar-card">
                <h4>At a Glance</h4>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Fast</span>
                  <span className="stat-label">Turnaround Times</span>
                </div>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Precision</span>
                  <span className="stat-label">Laser-Level Accuracy</span>
                </div>
              </div>

              <div className="jll-sidebar-contact">
                <h4>Start Your Project</h4>
                <p>Ready to discuss your residential build?</p>
                <Link to="/contact" className="jll-btn-primary full-width">
                  Request a Consultation
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </div>

      {/* The Setsquare Advantage */}
      <section className="jll-advantage-section">
        <div className="jll-container">
          <h2>The Setsquare Advantage</h2>
          <div className="jll-advantage-grid">
            <div className="jll-advantage-item">
              <span className="advantage-icon">01</span>
              <h3>Specialized Techniques</h3>
              <p>Employing cutting-edge framing methods for superior quality and structural resilience.</p>
            </div>
            <div className="jll-advantage-item">
              <span className="advantage-icon">02</span>
              <h3>Efficiency & Speed</h3>
              <p>Streamlined workflows that keep your project on schedule without cutting corners.</p>
            </div>
            <div className="jll-advantage-item">
              <span className="advantage-icon">03</span>
              <h3>Code Compliance</h3>
              <p>Rigorous adherence to BC Building Codes and local municipal standards.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
