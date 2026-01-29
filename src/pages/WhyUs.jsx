import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./WhyUs.css";

export default function WhyUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="whyus-page">

      {/* Hero */}
      <section className="whyus-hero animate-fade-up">
        <h1>Why Setsquare?</h1>
        <p>
          Over 20 years of hands-on expertise building foundation and framing
          solutions that define skylines and support communities.
        </p>
      </section>

      {/* About Section */}
      <section className="feature-row animate-fade-up delay-100">
        <div className="feature-text">
          <h2>Built on partnership.</h2>
          <p>
            Brothers Nav & Gurpreet combined their strengths to establish Setsquare Construction
            with a simple mission: uncompromising quality.
          </p>
          <p>
            Together, they leverage extensive expertise to pioneer innovative wood framing projects,
            from single-family residential builds to expansive multi-community developments
            across British Columbia.
          </p>
          <NavLink to="/contact" className="btn btn-primary" style={{ marginTop: '10px' }}>
            Let's Work Together
          </NavLink>
        </div>
        <div className="feature-image">
          <img src="/whyus-about.jpg" alt="About Setsquare" />
        </div>
      </section>

      {/* Values Grid Section */}
      <section className="values-grid-section animate-fade-up">
        <div className="container-large">
          <h2 className="section-title">Our Frame of Mind</h2>

          <div className="values-grid">
            {/* Row 1: Text - Image - Text */}
            <div className="value-card text-card bg-beige">
              <h3>Partnering</h3>
              <p>We build lasting relationships with premier developers, builders, and general contractors who value precision.</p>
              <div className="card-arrow">&rarr;</div>
            </div>

            <div className="value-card image-card">
              <img src="/culmena-assets/DJI_0953.JPG" alt="Partnering" />
            </div>

            <div className="value-card text-card bg-beige">
              <h3>Delivering</h3>
              <p>Consistent, dependable execution. We don't just frame structures; we frame trust with every beam we place.</p>
              <div className="card-arrow">&rarr;</div>
            </div>

            {/* Row 2: Image - Text - Image */}
            <div className="value-card image-card">
              <img src="/granary-assets/granary-1.jpg" alt="Delivering" />
            </div>

            <div className="value-card text-card bg-beige">
              <h3>Investing</h3>
              <p>We prioritize advanced safety training and innovative methods to foster an exceptional, high-performance team.</p>
              <div className="card-arrow">&rarr;</div>
            </div>

            <div className="value-card image-card">
              <img src="/burnaby-assets/burnaby-1.jpg" alt="Investing" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients-section">
        <div className="container-large">
          <h2 className="animate-fade-up">Trusted Partners</h2>
          <div className="clients-grid animate-fade-up delay-100">

            <div className="client-card">
              <img src="/bluecity-logo.png" alt="BlueCity" />
              <span className="client-name">BlueCity Construction</span>
              <NavLink to="/granary" className="client-project">The Granary</NavLink>
            </div>

            <div className="client-card">
              <img src="/squarefoot-logo.png" alt="Square Foot" />
              <span className="client-name">Square Foot Construction</span>
              <NavLink to="/summerland-lakefront" className="client-project">Summerland Lakefront</NavLink>
            </div>

            <div className="client-card">
              <img src="/tatla-logo.png" alt="Tatla" />
              <span className="client-name">Tatla Developments</span>
              <NavLink to="/avana-townhomes" className="client-project">Avana Townhomes</NavLink>
            </div>

            <div className="client-card">
              <img src="/newvision-logo.png" alt="New Vision" />
              <span className="client-name">New Vision Projects</span>
              <NavLink to="/boundary-bay-beach" className="client-project">Boundary Bay Home</NavLink>
            </div>

            <div className="client-card">
              <img src="/wallmark-logo.png" alt="Wallmark" />
              <span className="client-name">Wallmark Custom Homes</span>
              <NavLink to="/burnaby-residential" className="client-project">Residential Projects</NavLink>
            </div>

            <div className="client-card">
              <img src="/jdl-logo.png" alt="JDL" />
              <span className="client-name">JDL Homes</span>
              <span className="client-project">Multiple Projects</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
