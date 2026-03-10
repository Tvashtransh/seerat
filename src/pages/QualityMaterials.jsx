import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCTA from "../components/HomeCTA";
import "./ResidentialFraming.css";

export default function QualityMaterials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-service-detail-page">

      <header
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/culmena-assets/DJI_0953.JPG)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <div className="jll-breadcrumbs" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link> / <Link to="/services" style={{ color: '#fff' }}>Services</Link> / <span>Quality Materials</span>
          </div>
          <h1>Quality Materials</h1>
        </div>
      </header>

      <div className="jll-service-body">
        <div className="jll-container">
          <div className="jll-service-layout">

            <div className="jll-service-main">
              <section className="jll-content-block">
                <h2>Built on a Foundation of Strength</h2>
                <p>
                  Using only the finest quality materials, we ensure that your home framing is not only visually appealing but also durable and long-lasting. Our commitment to excellence means that your investment in our services will stand the test of time, providing you with peace of mind and satisfaction.
                </p>
                <p>
                  From engineered lumber and LVLs to premium studs and structural panels, we do not compromise on the raw materials that hold your building together. High-quality lumber resists warping and shifting, producing a superior framing skeleton for finishing.
                </p>
              </section>

              <section className="jll-content-block">
                <h3>Our Material Standards</h3>
                <ul className="jll-capabilities-list">
                  <li><strong>Premium Lumber:</strong> Sourcing high-grade, kiln-dried dimensional lumber.</li>
                  <li><strong>Engineered Wood Products:</strong> Superior spanning capabilities and structural rigidity.</li>
                  <li><strong>Fasteners & Hardware:</strong> Using industry-leading hangers, ties, and shear components.</li>
                  <li><strong>Sustainable Sourcing:</strong> Working with suppliers committed to responsible forestry in BC.</li>
                </ul>
              </section>
            </div>

            <aside className="jll-service-sidebar">
              <div className="jll-sidebar-card">
                <h4>Key Benefits</h4>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Strength</span>
                  <span className="stat-label">Long-lasting Structures</span>
                </div>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Value</span>
                  <span className="stat-label">Investment Security</span>
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
