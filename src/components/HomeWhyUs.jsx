import React from "react";
import "./HomeWhyUs.css";

export default function HomeWhyUs() {
  return (
    <section className="home-whyus">
      <div className="home-whyus-container">

        {/* Header */}
        <div className="whyus-header">
          <span className="section-tag">WHY SETSQUARE</span>
          <h2>Built on Trust. Framed with Precision.</h2>
          <p>
            We bring experience, accountability, and craftsmanship to every
            framing and forming project across the Lower Mainland and British Columbia.
          </p>
        </div>

        {/* Cards */}
        <div className="whyus-grid">

          <div className="whyus-card">
            <div className="whyus-icon">🏗️</div>
            <h3>20+ Years of Experience</h3>
            <p>
              Our leadership team brings decades of combined residential and
              commercial wood framing and forming expertise.
            </p>
          </div>

          <div className="whyus-card">
            <div className="whyus-icon">📐</div>
            <h3>Precision & Quality</h3>
            <p>
              From prefab to on-site framing, every project is executed with
              accuracy, safety, and attention to detail.
            </p>
          </div>

          <div className="whyus-card">
            <div className="whyus-icon">🤝</div>
            <h3>Reliable Partnerships</h3>
            <p>
              Trusted by top developers and contractors, we deliver consistency,
              transparency, and dependable timelines.
            </p>
          </div>

          <div className="whyus-card">
            <div className="whyus-icon">📍</div>
            <h3>Local Expertise</h3>
            <p>
              Based in Delta, BC, we proudly serve Vancouver, Burnaby, Richmond,
              Coquitlam, Tsawwassen and the Lower Mainland.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
