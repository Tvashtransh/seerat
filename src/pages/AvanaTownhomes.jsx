import React, { useEffect } from "react";
import "./ProjectDetail.css";

export default function AvanaTownhomes() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-page">

      {/* Hero */}
      <section className="project-detail-hero animate-fade-up">
        <h1>AVANA TOWNHOMES</h1>
        <span className="project-location-tag">Cottonwood Park, Burquitlam, Coquitlam, British Columbia</span>
      </section>

      {/* Section 1: The Task */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>The Task</h2>
          <span className="project-subtitle">Multi-Family Townhouse Project</span>
          <p>
            Setsquare Construction has successfully contributed to the wood framing of the Avana townhome
            development nestled beside Cottonwood Park in Burquitlam, Coquitlam. This project is a
            testament to thoughtful design and community integration.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/avana-assets/avana.jpg" alt="Avana Task" />
        </div>
      </section>

      {/* Section 2: Framing It Up */}
      <section className="project-content-section reverse animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Framing It Up</h2>
          <span className="project-subtitle">Multi-Family Townhouse Project</span>
          <p>
            Precision and efficiency were crucial as we framed these 52 townhomes, ensuring structural
            soundness while adhering to the highest standards of construction.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/avana-assets/avana1.jpg" alt="Avana Framing" />
        </div>
      </section>

      {/* Section 3: Making Headway */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Making Headway</h2>
          <span className="project-subtitle">Multi-Family Townhouse Project</span>
          <p>
            The development quickly took shape, transforming the site into a vibrant residential community
            perfectly positioned near local amenities.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/avana-assets/avana2.jpg" alt="Avana Progress" />
        </div>
      </section>

      {/* Conclusion */}
      <section className="project-conclusion animate-fade-up">
        <h2>Completion</h2>
        <span className="project-subtitle" style={{ display: 'block', marginBottom: '20px' }}>Multi-Family Townhouse Project</span>
        <p>
          We are proud to have completed the framing for Avana, a development by Tangerine Developments.
          These 52 townhomes now stand ready to welcome families, offering easy access to the Skytrain,
          YMCA, and Cottonwood Park.
        </p>
        <div className="project-image-block" style={{ marginTop: '40px' }}>
          <img src="/avana-assets/avana3.jpg" alt="Avana Completion" />
        </div>
      </section>

    </div>
  );
}
