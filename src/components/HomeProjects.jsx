import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeProjects.css";

export default function HomeProjects() {
  return (
    <section className="home-projects">
      <div className="home-projects-container">

        {/* Section Header */}
        <div className="projects-header">
          <span className="section-tag">FEATURED PROJECTS</span>
          <h2>All Framed Up</h2>
          <p>
            We have had the pleasure of working with some exceptional multi-family
            builders such as BlueCity Construction, Talisman Homes, Tatla
            Developments, and Foxridge Homes.
          </p>
        </div>

        {/* Projects Row */}
        <div className="projects-row">

          <NavLink to="/projects" className="project-card">
            <img src="/project-tsawwassen.jpg" alt="Tsawwassen Community" />
            <div className="project-overlay">
              <h3>Tsawwassen Community Development</h3>
              <span>Click to View More →</span>
            </div>
          </NavLink>

          <NavLink to="/projects" className="project-card">
            <img src="/project-coquitlam.jpg" alt="Coquitlam Townhomes" />
            <div className="project-overlay">
              <h3>Coquitlam Community Townhomes</h3>
              <span>Click to View More →</span>
            </div>
          </NavLink>

          <NavLink to="/projects" className="project-card">
            <img src="/project-waterfront.jpg" alt="Waterfront Home" />
            <div className="project-overlay">
              <h3>100-Mile Waterfront Single Family Home</h3>
              <span>Click to View More →</span>
            </div>
          </NavLink>

        </div>
      </div>
    </section>
  );
}
