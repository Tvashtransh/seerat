import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ResidentialFraming.css"; // Shared JLL Theme

export default function TimberFraming() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-service-detail-page">

      {/* Cinematic Hero Section */}
      <header
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/granary-assets/granary-4.jpg)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <div className="jll-breadcrumbs" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link> / <Link to="/services" style={{ color: '#fff' }}>Services</Link> / <span>Timber Framing</span>
          </div>
          <h1>Timber Framing</h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="jll-service-body">
        <div className="jll-container">
          <div className="jll-service-layout">

            {/* Left Column: Content */}
            <div className="jll-service-main">
              <section className="jll-content-block">
                <h2>The Art of Exposed Structure</h2>
                <p>
                  Timber framing is more than just construction; it's an architectural statement.
                  At Setsquare Construction, we combine the aesthetic warmth of heavy timber with the structural precision required by modern building codes.
                </p>
                <p>
                  Whether you are envisioning a grand entrance for a mountain resort, a hybrid timber frame home, or decorative accents for a commercial project,
                  our artisans select and craft each beam to ensure both beauty and strength.
                </p>
              </section>

              <section className="jll-content-block">
                <h3>Our Process</h3>
                <ul className="jll-capabilities-list">
                  <li><strong>Design Consultation:</strong> Collaborating with architects to detail joinery and connections that match your vision.</li>
                  <li><strong>Precision Fabrication:</strong> Off-site or on-site cutting of timbers with millimetre accuracy.</li>
                  <li><strong>Raise Day:</strong> Efficient assembly of the frame, often completed in a fraction of the time of stick framing.</li>
                  <li><strong>Finishing:</strong> Expert application of stains and finishes to protect and highlight the wood grain.</li>
                </ul>
              </section>

              <section className="jll-image-gallery-grid">
                <img src="/granary-assets/granary-1.jpg" onError={(e) => e.target.src = '/project-type-2.png'} alt="Granary Timber Project" />
                <img src="/timber1.jpg" onError={(e) => e.target.src = '/project-type-3.png'} alt="Exposed Wood Joinery" />
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="jll-service-sidebar">
              <div className="jll-sidebar-card">
                <h4>Benefits</h4>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Legacy</span>
                  <span className="stat-label">Timeless Appeal</span>
                </div>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">R-Value</span>
                  <span className="stat-label">Superior Insulation</span>
                </div>
              </div>

              <div className="jll-sidebar-contact">
                <h4>Build Something Unique</h4>
                <p>Have a timber frame project in mind?</p>
                <Link to="/contact" className="jll-btn-primary full-width">
                  Consult an Expert
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </div>

      {/* Advantage / Capabilities */}
      <section className="jll-advantage-section">
        <div className="jll-container">
          <h2>Who We Serve</h2>
          <div className="jll-advantage-grid">
            <div className="jll-advantage-item">
              <span className="advantage-icon">01</span>
              <h3>Luxury Homeowners</h3>
              <p>Elevate your living space with the unmatched status and beauty of heavy timber.</p>
            </div>
            <div className="jll-advantage-item">
              <span className="advantage-icon">02</span>
              <h3>Commercial Resorts</h3>
              <p>Create welcoming, grand spaces for lodges, clubhouses, and restaurants.</p>
            </div>
            <div className="jll-advantage-item">
              <span className="advantage-icon">03</span>
              <h3>Developers</h3>
              <p>Add standout features to entryways and common areas to increase property value.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
