import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeAbout.css";

export default function HomeAbout() {
  return (
    <section className="home-about">
      <div className="home-about-container">

        {/* Logo */}
        <div className="about-logo">
          <img src="/logo.png" alt="Setsquare Construction Logo" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>ABOUT SETSQUARE</h2>

          <p>
            With over 20 years of combined residential and commercial wood
            framing & forming experience, Nav & Gurpreet co-founded
            Setsquare Construction in 2021.
          </p>

          <p>
            Their shared commitment to reshaping the construction landscape
            in Metro Vancouver led them to team up, driving a new chapter of
            excellence in the industry.
          </p>

          <p>
            Together, they bring a wealth of expertise to shape innovative and
            high-quality large-scale wood framing and forming projects
            throughout Vancouver, Burnaby, Delta, Tsawwassen, Richmond,
            Coquitlam and across the Lower Mainland.
          </p>

          <NavLink to="/why-us" className="about-btn">
            About Us
          </NavLink>
        </div>

      </div>
    </section>
  );
}
