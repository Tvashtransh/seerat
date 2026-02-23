import React, { useEffect } from "react";
import "./ProjectDetail.css";

export default function TroutLakeResidential() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-page">

      {/* Hero */}
      <section
        className="project-detail-hero animate-fade-up"
        style={{ backgroundImage: 'url(/troutlake-assets/troutlake-1.jpg)' }}
      >
        <h1>TROUT LAKE RESIDENTIAL</h1>
        <span className="project-location-tag">East Vancouver, Lower Mainland, British Columbia</span>
      </section>

      {/* Section 1: The Task */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>The Task</h2>
          <span className="project-subtitle">East Vancouver Home Wood Framing</span>
          <p>
            In collaboration with Wallmark Homes, Setsquare Construction contributed to the wood framing
            of a distinctive house build near Trout Lake, Vancouver. This unique home stands as part
            of the heart of the vibrant and welcoming community in East Vancouver.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/troutlake-assets/troutlake-1.jpg" alt="Trout Lake Task" />
        </div>
      </section>

      {/* Section 2: Framing It Up */}
      <section className="project-content-section reverse animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Framing It Up</h2>
          <span className="project-subtitle">East Vancouver Home Wood Framing</span>
          <p>
            Precision and attention to detail were paramount as we framed this distinctive East Vancouver home.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/troutlake-assets/troutlake-2.jpg" alt="Framing It Up" />
        </div>
      </section>

      {/* Section 3: Making Headway */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Making Headway</h2>
          <span className="project-subtitle">East Vancouver Home Wood Framing</span>
          <p>
            As the frame came together, the home began to reflect the character of its surroundings,
            blending modern construction with the area's unique charm.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/troutlake-assets/troutlake-3.jpg" alt="Making Headway" />
        </div>
      </section>

      {/* Conclusion */}
      <section className="project-conclusion animate-fade-up">
        <h2>Completion</h2>
        <span className="project-subtitle" style={{ display: 'block', marginBottom: '20px' }}>East Vancouver Home Framing</span>
        <p>
          We successfully concluded the framing of the Trout Lake House project in Vancouver, in collaboration
          with Wallmark Homes. The single-family home, not only fulfills the functional needs of its
          occupants but also contributes to the aesthetic and character of the Trout Lake community.
        </p>
        <p>
          The East Vancouver home project represents a noteworthy addition to our portfolio, showcasing
          our expertise in framing residential builds.
        </p>
        <div className="project-image-block" style={{ marginTop: '40px' }}>
          <img src="/troutlake-assets/troutlake-4.jpg" alt="Completion" />
        </div>
      </section>

    </div>
  );
}
