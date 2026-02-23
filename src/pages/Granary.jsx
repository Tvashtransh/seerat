import React, { useEffect } from "react";
import "./ProjectDetail.css";

export default function Granary() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-page">

      {/* Hero */}
      <section
        className="project-detail-hero animate-fade-up"
        style={{ backgroundImage: 'url(/granary-assets/granary-2.jpg)' }}
      >
        <h1>THE GRANARY</h1>
        <span className="project-location-tag">Tsawwassen / Boundary Bay, British Columbia</span>
      </section>

      {/* Section 1: The Task */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>The Task</h2>
          <span className="project-subtitle">Community Development Project Wood Framing</span>
          <p>
            'The Granary' sits at the heart of the Southlands community, a vibrant agriculture-hood
            rooted in farming and food. Collaborating with multiple contractors, Setsquare Construction
            took on the challenge of framing the upper floors of this mixed-use building, which sits
            atop a concrete parkade and ground floor.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/granary-assets/granary-1.jpg" alt="The Granary Task" />
        </div>
      </section>

      {/* Section 2: Framing It Up */}
      <section className="project-content-section reverse animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Framing It Up</h2>
          <span className="project-subtitle">Community Development Project Wood Framing</span>
          <p>
            The project required precision as we framed the 80,000 sq ft structure, ensuring seamless
            integration between the concrete base and the wood-framed upper levels. Our team worked
            diligently to support the creation of this central hub.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/granary-assets/granary-2.jpg" alt="Framing The Granary" />
        </div>
      </section>

      {/* Section 3: Making Headway */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Making Headway</h2>
          <span className="project-subtitle">Community Development Project Wood Framing</span>
          <p>
            As the frame rose, The Granary began to take shape as the future home of Four Winds Brewing
            and other local businesses, embodying the spirit of the Southlands community.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/granary-assets/granary-3.jpg" alt="Granary Progress" />
        </div>
      </section>

      {/* Conclusion */}
      <section className="project-conclusion animate-fade-up">
        <h2>Completion</h2>
        <span className="project-subtitle" style={{ display: 'block', marginBottom: '20px' }}>Community Development Project Wood Framing</span>
        <p>
          We are proud to have been part of building The Granary, a landmark structure in Tsawwassen.
          Today, it stands as a bustling hub where the community gathers, grounded in the rich agricultural
          tradition of the area.
        </p>
        <div className="project-image-block" style={{ marginTop: '40px' }}>
          <img src="/granary-assets/granary-4.jpg" alt="Granary Completion" />
        </div>
      </section>

    </div>
  );
}
