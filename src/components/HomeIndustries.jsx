import React from "react";
import "./HomeIndustries.css";

export default function HomeIndustries() {
  return (
    <section className="home-industries">
      <div className="home-industries-container">

        <div className="industries-header">
          <span className="section-tag">INDUSTRIES WE SERVE</span>
          <h2>
            Delivering Expertise Across <br />
            Residential & Commercial Builds
          </h2>
          <p>
            Setsquare Construction partners with developers, contractors, and
            owners to deliver reliable wood framing and forming solutions
            across British Columbia.
          </p>
        </div>

        <div className="industries-grid">

          {/* Large Residential */}
          <div className="industry-card">
            <div
              className="industry-image"
              style={{ backgroundImage: "url(/industry-residential.jpg)" }}
            ></div>

            <div className="industry-content">
              <h3>Large Residential Development</h3>

              <p>
                With over 20 years of experience in wood framing and forming,
                Setsquare Construction supports large-scale residential
                developments with precision, reliability, and efficiency.
              </p>

              <p>
                Our proven track record with developers such as BlueCity
                Construction and Tatla Developments reflects our commitment
                to delivering detailed proposals and dependable execution.
              </p>

              <p className="industry-highlight">
                Already have a framing company? We’d be honoured to be your
                backup.
              </p>
            </div>
          </div>

          {/* Commercial */}
          <div className="industry-card reverse">
            <div
              className="industry-image"
              style={{ backgroundImage: "url(/industry-commercial.jpg)" }}
            ></div>

            <div className="industry-content">
              <h3>Commercial Development</h3>

              <p>
                We specialize in wood framing and forming for commercial
                developments including government buildings, public-use
                spaces, and senior care facilities.
              </p>

              <p>
                Headquartered in Delta, BC, our teams travel across Vancouver,
                Tsawwassen, Burnaby, Richmond, Coquitlam, the Lower Mainland,
                and throughout British Columbia.
              </p>

              <p className="industry-highlight">
                Already have a framing company? Try us once — trust in us
                forever.
              </p>
            </div>
          </div>

          {/* Multiplex */}
          <div className="industry-card">
            <div
              className="industry-image"
              style={{ backgroundImage: "url(/industry-multiplex.jpg)" }}
            ></div>

            <div className="industry-content">
              <h3>Residential & Multiplex Development</h3>

              <p>
                We collaborate with general contractors and owners across
                Vancouver and British Columbia to deliver high-quality
                residential and multiplex projects.
              </p>

              <p>
                Our experience includes partnerships with Square Foot
                Construction, Wallmark Custom Homes, Foxridge Homes, JDL Homes,
                Talisman Homes, and New Vision Projects.
              </p>

              <p className="industry-highlight">
                Our network and reputation reflect our commitment to quality,
                efficiency, and long-term build integrity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
