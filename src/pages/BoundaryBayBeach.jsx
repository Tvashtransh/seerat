import React, { useEffect } from "react";
import "./ProjectDetail.css";

export default function BoundaryBayBeach() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-page">

      {/* Hero */}
      <section className="project-detail-hero animate-fade-up">
        <h1>BOUNDARY BAY RESIDENTIAL FRAMING</h1>
        <span className="project-location-tag">Delta / Boundary Bay Beach, British Columbia</span>
      </section>

      {/* Section 1: The Task */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>The Task</h2>
          <span className="project-subtitle">Boundary Bay Residential Framing</span>
          <p>
            Setsquare Construction played a pivotal role in shaping a single-family home in the
            charming neighbourhood of Boundary Bay, Delta.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/boundarybay-assets/boundarybay-1.jpg" alt="Boundary Bay Task" />
        </div>
      </section>

      {/* Section 2: Framing It Up */}
      <section className="project-content-section reverse animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Framing It Up</h2>
          <span className="project-subtitle">Boundary Bay Residential Framing</span>
          <p>
            Precision and attention to detail were key as we framed this custom home,
            ensuring it complemented the unique character of the Boundary Bay community.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/boundarybay-assets/boundarybay-2.jpg" alt="Framing It Up" />
        </div>
      </section>

      {/* Section 3: Making Headway */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Making Headway</h2>
          <span className="project-subtitle">Boundary Bay Residential Framing</span>
          <p>
            Progress was steady as the structure took form, setting the stage for a beautiful
            residential addition to the area.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/boundarybay-assets/boundarybay-3.jpg" alt="Making Headway" />
        </div>
      </section>

      {/* Conclusion */}
      <section className="project-conclusion animate-fade-up">
        <h2>Completion</h2>
        <span className="project-subtitle" style={{ display: 'block', marginBottom: '20px' }}>Boundary Bay Residential Framing</span>
        <p>
          We successfully completed the framing for the Boundary Bay project in Delta. The end result
          is a structurally sound and aesthetically pleasing home that stands as a testament to our
          commitment to quality residential construction.
        </p>
        <div className="project-image-block" style={{ marginTop: '40px' }}>
          <img src="/boundarybay-assets/boundarybay-4.jpg" alt="Boundary Bay Completion" />
        </div>
      </section>

    </div>
  );
}
