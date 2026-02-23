import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

// Service Data for cleaner rendering
const servicesList = [
  {
    id: 1,
    title: "Multi-Development Framing",
    description: "Tailored framing solutions for large-scale community developments and multi-unit projects across the Lower Mainland.",
    link: "/multi-development-framing",
    image: "/project-type-13.png"
  },
  {
    id: 2,
    title: "Residential Wood Framing",
    description: "Dependable and precise framing for single-family homes and custom residential builds throughout British Columbia.",
    link: "/residential-framing",
    image: "/project-type-3.png"
  },
  {
    id: 3,
    title: "Timber Framing",
    description: "Marrying traditional craftsmanship with modern engineering to create stunning exposed timber structures.",
    link: "/timber-framing",
    image: "/project-type-2.png"
  },
  {
    id: 4,
    title: "Commercial Wood Framing",
    description: "Executing large-scale commercial projects with the experience and capacity to handle complex structural requirements.",
    link: "/contact", // Redirects to contact as there is no dedicated page yet
    image: "/blog-10.png"
  }
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">

      {/* JLL-Style Hero Section */}
      <section className="jll-hero">
        <div className="jll-hero-image-wrapper">
          <img src="/hero-services.jpg" onError={(e) => e.target.src = '/project-type-2.png'} alt="Construction Site" className="jll-hero-image" />
        </div>
        <div className="jll-hero-overlay">
          <h1 className="jll-hero-title">Building with Precision & Purpose</h1>
          <p className="jll-hero-subtitle">
            Comprehensive wood framing services tailored to your project's unique demands. From concept to completion, we deliver excellence.
          </p>
          <Link to="/contact" className="jll-btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Intro Stats / Statement */}
      <section className="jll-intro-section">
        <div className="jll-container">
          <div className="jll-intro-grid">
            <div className="jll-intro-text">
              <h2 className="jll-section-title">Our Expertise</h2>
              <p>
                We offer a multitude of wood framing services to suit your needs.
                Our team is able and ready — put our experience to work.
                Whether it's a quaint residential build or expansive community development,
                Setsquare Construction is steadfast on specific core principles.
              </p>
            </div>
            <div className="jll-intro-stats">
              <div className="jll-stat-item">
                <span className="jll-stat-number">15+</span>
                <span className="jll-stat-label">Years Experience</span>
              </div>
              <div className="jll-stat-item">
                <span className="jll-stat-number">100+</span>
                <span className="jll-stat-label">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Stacked Section */}
      <section className="jll-services-stack-section">
        <div className="jll-container">
          <div className="jll-feature-stack">
            {servicesList.map((service, index) => (
              <div key={service.id} className={`jll-feature-row ${index % 2 !== 0 ? "reverse" : ""}`}>
                <div className="jll-feature-image rounded">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="jll-feature-content">
                  <span className="jll-eyebrow">Service Excellence</span>
                  <h3 className="jll-feature-heading">
                    {service.title}
                  </h3>
                  <p className="jll-feature-desc">
                    {service.description}
                  </p>
                  <Link to={service.link} className="jll-btn-card">
                    Explore Service <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frame of Mind / Values Section */}
      <section className="jll-values-section">
        <div className="jll-container">
          <div className="jll-values-wrapper">
            <div className="jll-values-content">
              <h2 className="jll-values-title">Frame of Mind</h2>
              <ul className="jll-values-list">
                <li>
                  <strong>Partnering</strong> with premier developers, builders, and general contractors.
                </li>
                <li>
                  <strong>Delivering</strong> consistent, dependable, trusted experience, skills and solutions.
                </li>
                <li>
                  <strong>Investing</strong> in advanced, innovative and safe training methods.
                </li>
              </ul>
              <Link to="/why-us" className="jll-btn-outline">
                Discover Our Story
              </Link>
            </div>
            <div className="jll-values-image">
              <img src="/project-type-3.png" alt="Team at Work" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
