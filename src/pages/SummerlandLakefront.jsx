import React, { useEffect } from "react";
import "./ProjectDetail.css";

export default function SummerlandLakefront() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-page">

      {/* Hero */}
      <section
        className="project-detail-hero animate-fade-up"
        style={{ backgroundImage: 'url(/summerland-assets/summerland-2.jpg)' }}
      >
        <h1>SUMMERLAND LAKEFRONT</h1>
        <span className="project-location-tag">Summerland, Okanagan, British Columbia</span>
      </section>

      {/* Section 1: The Task */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>The Task</h2>
          <span className="project-subtitle">Waterfront Custom Home</span>
          <p>
            In collaboration with Square Foot Construction, Setsquare Construction had the privilege of
            wood framing a spectacular residential home which features a dock for lakeside enjoyment.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/summerland-assets/summerland-1.jpg" alt="Summerland Task" />
        </div>
      </section>

      {/* Section 2: Framing It Up */}
      <section className="project-content-section reverse animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Framing It Up</h2>
          <span className="project-subtitle">Waterfront Custom Home</span>
          <p>
            The Summerland Waterfront home showcases our expertise in wood framing, blending structural
            integrity with the elegance of a lakeside retreat.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/summerland-assets/summerland-2.jpg" alt="Framing Summerland" />
        </div>
      </section>

      {/* Section 3: Making Headway */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Making Headway</h2>
          <span className="project-subtitle">Waterfront Custom Home</span>
          <p>
            Progress on the Summerland home was as inspiring as the view, with every beam and stud
            bringing us closer to a finished masterpiece by the water.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/summerland-assets/summerland-3.jpg" alt="Summerland Progress" />
        </div>
      </section>

      {/* Conclusion */}
      <section className="project-conclusion animate-fade-up">
        <h2>Completion</h2>
        <span className="project-subtitle" style={{ display: 'block', marginBottom: '20px' }}>Waterfront Custom Home</span>
        <p>
          We successfully wood framed the Summerland Waterfront Project in collaboration with
          Square Foot Construction. This distinctive home, complete with a dock, stands as a
          beautiful addition to the lakeside, ready to be enjoyed for years to come.
        </p>
        <div className="project-image-block" style={{ marginTop: '40px' }}>
          <img src="/summerland-assets/summerland-4.jpg" alt="Summerland Completion" />
        </div>
      </section>

    </div>
  );
}
