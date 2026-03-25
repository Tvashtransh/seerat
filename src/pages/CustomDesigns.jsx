import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCTA from "../components/HomeCTA";
import "./ResidentialFraming.css";

export default function CustomDesigns() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-service-detail-page">

      <header
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/res-assets/res1.jpg)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <div className="jll-breadcrumbs" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link> / <Link to="/services" style={{ color: '#fff' }}>Services</Link> / <span>Custom Designs</span>
          </div>
          <h1>Custom Designs</h1>
        </div>
      </header>

      <div className="jll-service-body">
        <div className="jll-container">
          <div className="jll-service-layout">

            <div className="jll-service-main">
              <section className="jll-content-block">
                <h2>Tailored to Your Specifications</h2>
                <p>
                  Our team of experts will work closely with you to create custom framing designs that reflect your style and preferences. From traditional to modern, we have the expertise to bring your ideas to reality, ensuring a unique and personalized touch to your home.
                </p>
                <p>
                  No architectural vision is out of reach. We collaborate with architects, builders, and homeowners during the pre-construction phase to map out complex load-bearing walls, custom roof pitches, and specialized architectural elements.
                </p>
              </section>

              <section className="jll-content-block">
                <h3>Our Areas of Custom Design Expertise</h3>
                <ul className="jll-capabilities-list">
                  <li><strong>Complex Roof Systems:</strong> Hipped, gabled, and flat roof transitions engineered for strength.</li>
                  <li><strong>Architectural Features:</strong> Vaulted ceilings, arched doorways, and customized alcoves.</li>
                  <li><strong>Structural Collaboration:</strong> We work directly alongside structural engineers to find building solutions.</li>
                  <li><strong>Adaptive Layouts:</strong> Custom modifications adapted safely on site when necessary.</li>
                </ul>
              </section>
            </div>

            <aside className="jll-service-sidebar">
              <div className="jll-sidebar-card">
                <h4>Key Benefits</h4>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Unique</span>
                  <span className="stat-label">Bespoke Frameworks</span>
                </div>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Vision</span>
                  <span className="stat-label">Architectural Accuracy</span>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>

      <HomeCTA />

    </div>
  );
}
