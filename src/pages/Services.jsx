import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export default function Services() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">

      {/* HERO / INTRO */}
      <div className="services-hero animate-fade-up">
        <h1>Wood Framing Services</h1>
        <p>
          We offer a multitude of wood framing services to suit your needs.
          Our team is able and ready — put our experience to work.
        </p>

        <Link to="/contact" className="btn btn-primary">
          Get a Quote
        </Link>
      </div>

      {/* ON-SITE PREFAB */}
      <div className="prefab-section animate-fade-up delay-100">
        <h2>On-Site Prefab Services</h2>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
          <p style={{ fontSize: '21px', color: 'var(--text-secondary)' }}>
            We specialize in delivering high-quality, efficient prefab solutions
            tailored to your needs. Our experienced team ensures a smooth
            installation process.
          </p>
        </div>

        <div className="prefab-features">
          <div className="feature-card">
            <h3>Custom Designs</h3>
            <p>
              Our experts work closely with you to create framing solutions
              that reflect your style, preferences, and project needs.
            </p>
          </div>

          <div className="feature-card">
            <h3>Professional Installation</h3>
            <p>
              Skilled craftsmen ensure flawless execution, structural integrity,
              and reliable results on every build.
            </p>
          </div>

          <div className="feature-card">
            <h3>Quality Materials</h3>
            <p>
              We use only premium materials to ensure durability, longevity,
              and peace of mind for years to come.
            </p>
          </div>
        </div>
      </div>

      {/* FRAMING SERVICES */}
      <div className="framing-section">

        <ServiceCard
          title="Multi-Development Framing"
          text={`Explore our multi-development wood framing services, tailored for large-scale projects in and throughout the Lower Mainland.

We work with developers and general contractors on mid to large-scale community developments and are happy to provide references from past builds.`}

          link="/multi-development-framing"
        />

        <ServiceCard
          title="Residential Wood Framing"
          text={`Our journey started small and we've grown into a team known for our dependable framing solutions.

Whether you're a homeowner or a builder, we've got you covered. We offer straightforward and effective wood framing solutions throughout Vancouver, Tsawwassen and Delta, Burnaby, Richmond, Coquitlam and throughout British Columbia.`}
          link="/residential-framing"
        />

        <ServiceCard
          title="Timber Framing"
          text={`Our service marries traditional craftsmanship with cutting-edge technology, offering the best of both worlds. 

We honor the ancient art of timber framing while embracing modern advancements to enhance efficiency and durability.`}
          link="/timber-framing"
        />

        <ServiceCard
          title="Commercial Wood Framing"
          text={`We have the experience, capacity and skills to execute large-scale commercial projects. 

Although our roots are in Delta, our expertise spans across British Columbia, with our dedicated crews traveling extensively to craft custom wood frame structures.`}
          link="/contact"
        />

      </div>

      {/* FRAME OF MIND */}
      <div className="frameofmind-section">
        <h2>Frame of Mind</h2>
        <p>
          Whether it's a quaint residential build or expansive community development, Setsquare Construction is steadfast on: <br /><br />
          <b>Partnering</b> with premier developers, builders, and general contractors. <br /><br />
          <b>Delivering</b> consistent, dependable, trusted experience, skills and solutions for each project. <br /><br />
          <b>Investing </b>in advanced, innovative and safe training methods, while fostering an exceptional team.
        </p>

        <Link to="/why-us" className="btn btn-outline" style={{ marginTop: '20px' }}>
          Learn More About Us
        </Link>
      </div>

    </div>
  );
}

/* REUSABLE CARD COMPONENT */
function ServiceCard({ title, text, link }) {
  return (
    <div className="service-card animate-fade-up">
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <Link to={link || "/contact"} className="link-btn">
        Learn More →
      </Link>
    </div>
  );
}
