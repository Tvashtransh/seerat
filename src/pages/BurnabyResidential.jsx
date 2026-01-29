import React, { useEffect } from "react";
import "./ProjectDetail.css";

export default function BurnabyResidential() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-detail-page">

      {/* Hero */}
      <section className="project-detail-hero animate-fade-up">
        <h1>BURNABY RESIDENTIAL HOME</h1>
        <span className="project-location-tag">Garden Village, Burnaby, British Columbia</span>
      </section>

      {/* Section 1: The Task */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>The Task</h2>
          <span className="project-subtitle">Single Family Residential Wood Framing</span>
          <p>
            Setsquare Construction is proud to have played a role in wood framing a residential home project
            in the Garden Village community of Burnaby in collaboration with Wallmark Homes. We really
            enjoyed framing up this beautiful home which integrates seamlessly into the warm Garden Village Community.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/burnaby-assets/burnaby-1.jpg" alt="Burnaby Task" />
        </div>
      </section>

      {/* Section 2: Framing It Up */}
      <section className="project-content-section reverse animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Framing It Up</h2>
          <span className="project-subtitle">Single Family Residential Wood Framing</span>
          <p>
            Our framing team focused on precision, quality craftsmanship, and structural integrity to
            ensure the framing aligned with Wallmark Homes’ architectural vision.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/burnaby-assets/burnaby-2.jpg" alt="Framing It Up" />
        </div>
      </section>

      {/* Section 3: Making Headway */}
      <section className="project-content-section animate-fade-up delay-100">
        <div className="project-text-block">
          <h2>Making Headway</h2>
          <span className="project-subtitle">Single Family Residential Wood Framing</span>
          <p>
            As the project moved forward, the quality of the framing set a solid foundation for the rest of the build.
          </p>
        </div>
        <div className="project-image-block">
          <img src="/burnaby-assets/burnaby-3.jpg" alt="Making Headway" />
        </div>
      </section>

      {/* Conclusion */}
      <section className="project-conclusion animate-fade-up">
        <h2>Completion</h2>
        <span className="project-subtitle" style={{ display: 'block', marginBottom: '20px' }}>Single Family Residential Wood Framing</span>
        <p>
          We successfully concluded the wood framing of the Garden Village project, Burnaby, in collaboration
          with Wallmark Homes. We're grateful to add this beautiful home to our portfolio, showcasing
          our wood framing that aligned with the vision of Wallmark Homes.
        </p>
        <div className="project-image-block" style={{ marginTop: '40px' }}>
          <img src="/burnaby-assets/burnaby-4.jpg" alt="Burnaby Completion" />
        </div>
      </section>

    </div>
  );
}
