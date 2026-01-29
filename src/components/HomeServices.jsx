import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeServices.css";

export default function HomeServices() {
  return (
    <section className="home-services">
      <div className="home-services-container">

        {/* Left Content */}
        <div className="home-services-content">
          <span className="section-tag">OUR SERVICES</span>

          <h2>
            Reliable Framing & Forming <br />
            Services You Can Trust
          </h2>

          <p>
            Setsquare Construction provides professional wood framing and
            concrete forming services for residential and commercial
            developments. We work closely with developers, contractors,
            and homeowners to deliver strong, precise structures.
          </p>

          <p>
            With a focus on quality craftsmanship, efficiency, and safety,
            our team supports projects across Metro Vancouver and the
            Lower Mainland from start to finish.
          </p>

          <NavLink to="/projects" className="services-cta">
            View Past Projects
          </NavLink>
        </div>

        {/* Right Service Cards */}
        <div className="home-services-cards">
          <div className="service-card">
            <h4>Wood Framing</h4>
            <p>
              High-quality residential and commercial framing built to
              last.
            </p>
          </div>

          <div className="service-card">
            <h4>Concrete Forming</h4>
            <p>
              Precision forming solutions for durable and safe foundations.
            </p>
          </div>

          <div className="service-card">
            <h4>On-Site Prefabrication</h4>
            <p>
              Efficient prefab services to reduce build time and costs.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
