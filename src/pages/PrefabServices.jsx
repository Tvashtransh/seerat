import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCTA from "../components/HomeCTA";
import "./ResidentialFraming.css";

export default function PrefabServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-service-detail-page">

      {/* Cinematic Hero Section */}
      <header
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/project-type-14.png)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <div className="jll-breadcrumbs" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link> / <Link to="/services" style={{ color: '#fff' }}>Services</Link> / <span>On-Site Prefab Services</span>
          </div>
          <h1>On-Site Prefab Services</h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="jll-service-body">
        <div className="jll-container">
          <div className="jll-service-layout">

            {/* Left Column: Content */}
            <div className="jll-service-main">
              <section className="jll-content-block">
                <h2>Efficient and Scalable Prefab Solutions</h2>
                <p>
                  We specialize in delivering high-quality, efficient prefab solutions tailored to your needs. Our experienced team ensures a smooth installation process, bringing your vision to life with precision and care. Let us help you build your dream project with ease and effortlessly.
                </p>
                <p>
                  By taking advantage of on-site prefabrication, we minimize build times and significantly reduce material waste. Our streamlined process allows us to construct wall panels and essential framing components precisely before they are hoisted into their final position.
                </p>
              </section>

              <section className="jll-content-block">
                <h3>Our Prefabrication Capabilities</h3>
                <ul className="jll-capabilities-list">
                  <li><strong>Custom Wall Panels:</strong> Built exactly to specification, ready for rapid deployment.</li>
                  <li><strong>Floor and Roof Systems:</strong> Precision-cut and assembled for flawless structural integrity.</li>
                  <li><strong>Waste Reduction:</strong> Sustainable practices that optimize every single piece of timber.</li>
                  <li><strong>Speed of Assembly:</strong> Slashing critical path timelines for large-scale developments.</li>
                </ul>
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="jll-service-sidebar">
              <div className="jll-sidebar-card">
                <h4>Key Benefits</h4>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Speed</span>
                  <span className="stat-label">Faster Build Times</span>
                </div>
                <div className="jll-sidebar-stat">
                  <span className="stat-val">Precision</span>
                  <span className="stat-label">Factory-Level Accuracy</span>
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
