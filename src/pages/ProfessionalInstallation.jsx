import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCTA from "../components/HomeCTA";
import "./ResidentialFraming.css";

export default function ProfessionalInstallation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-service-detail-page">

      <header
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/timber1.jpg)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <div className="jll-breadcrumbs" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link> / <Link to="/services" style={{ color: '#fff' }}>Services</Link> / <span>Professional Installation</span>
          </div>
          <h1>Professional Installation</h1>
        </div>
      </header>

      <div className="jll-service-body">
        <div className="jll-container">
          <div className="jll-service-layout">

            <div className="jll-service-main">
              <section className="jll-content-block">
                <h2>Precision Meets Craftsmanship</h2>
                <p>
                  At Setsquare Construction, we guarantee professional and reliable installation services for all your framing needs. Our skilled craftsmen pay attention to every detail, ensuring a flawless finish that enhances the beauty and structural integrity of your home.
                </p>
                <p>
                  From large timber trusses to intricate joist layouts, our teams of experienced framers work meticulously to ensure plumb lines, perfect angles, and structurally sound installations.
                </p>
              </section>

              <section className="jll-content-block">
                <h3>Our Installation Standards</h3>
                <ul className="jll-capabilities-list">
                  <li><strong>Safety First:</strong> Adhering to the highest OH&S safety protocols on every site.</li>
                  <li><strong>Code Compliance:</strong> Exceeding local building codes across British Columbia.</li>
                  <li><strong>Skilled Journeymen:</strong> Highly experienced crews executing complex blueprints.</li>
                  <li><strong>Strict Tolerances:</strong> Framing built to the exact millimeter to assure quality finishes for downstream trades.</li>
                </ul>
              </section>
            </div>

            <aside className="jll-service-sidebar">
              <div className="jll-sidebar-card">
                <h4>Key Benefits</h4>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Reliability</span>
                  <span className="stat-label">Consistent Quality</span>
                </div>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Safety</span>
                  <span className="stat-label">Secure Job Sites</span>
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
