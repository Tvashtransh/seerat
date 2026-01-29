import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export default function Home() {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      id: 1,
      image: "/project-type-1.png",
      title: "TSAWWASSEN COMMUNITY DEVELOPMENT",
      desc: "Setsquare framed The Granary, Southlands' hub, blending a concrete parkade, wood-framed floors, and a ground-floor Four Winds space. 35 residences above completed the vision.",
      link: "/granary"
    },
    {
      id: 2,
      image: "/project-type-4.png",
      title: "COQUITLAM COMMUNITY TOWNHOMES",
      desc: "Nestled beside Cottonwood Park, Avana's 52 townhomes are a testament to thoughtful framing work, seamlessly woven into the fabric of the Burquitlam neighbourhood.",
      link: "/avana-townhomes"
    },
    {
      id: 3,
      image: "/project-type-3.png",
      title: "100-MILE WATERFRONT SINGLE FAMILY HOME",
      desc: "Perched by the water near 100-Mile House, our wood framing work takes centre stage in a grand residential build spanning over 5000 sq.ft.",
      link: "/summerland-lakefront"
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="home-page">

      {/* 1. HERO SECTION (Davos Snow Theme) */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Building BC's Future, Frame by Frame.</h1>

          <NavLink to="/projects" className="hero-cta-btn">
            View Our Projects
            <span>&rarr;</span>
          </NavLink>
        </div>

        {/* Overlap Module */}
        <div className="hero-overlap-module">
          <div className="overlap-container">
            <span className="overlap-title">Latest Work</span>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE SECTION (Matched to JLL Screenshot) */}
      <section className="explore-section">
        <div className="explore-container">

          {/* Left Column: Heading & Text */}
          <div className="explore-intro">
            <h2>Excellence in every frame</h2>
            <p>
              From complex custom homes to large-scale multi-family developments,
              Set Square Construction delivers precision, safety, and quality
              across the Lower Mainland.
            </p>
          </div>

          {/* Right Column: Grid of Links (Now Stats/Info) */}
          <div className="explore-stats-grid">

            {/* Item 1 */}
            <div className="explore-stat-item">
              <div className="stat-number">
                15+ Years <span className="stat-arrow">↓</span>
              </div>
              <div className="stat-label">Experience in the field</div>
            </div>

            {/* Item 2 */}
            <div className="explore-stat-item">
              <div className="stat-number">
                200+ Projects <span className="stat-arrow">↓</span>
              </div>
              <div className="stat-label">Delivered successfully</div>
            </div>

            {/* Item 3 */}
            <div className="explore-stat-item">
              <div className="stat-number">
                100% Safety <span className="stat-arrow">↓</span>
              </div>
              <div className="stat-label">Record on all sites</div>
            </div>

            {/* Item 4 */}
            <div className="explore-stat-item">
              <div className="stat-number">
                Pro Solutions <span className="stat-arrow">↓</span>
              </div>
              <div className="stat-label">For complex framing</div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Feature Card Stack) */}
      <section className="section-padding">

        {/* Expertise Heading - Reusing explore-header for consistency */}
        <div className="explore-header">
          <h2>Our expertise</h2>
        </div>

        <div className="expertise-container">

          {/* Card 1: Multi-Development */}
          <div className="feature-card">
            <div className="feature-image">
              <img src="/multi1.jpg" alt="Multi-Development Framing" />
            </div>
            <div className="feature-content">
              <span className="feature-eyebrow">LARGE SCALE CONSTRUCTION</span>
              <h3 className="feature-title">
                Scaling up the <strong>future</strong> of development.
              </h3>
              <p className="feature-desc">
                Our multi-family framing services offer precise, scalable solutions for large developments.
                We combine speed with structural integrity to keep your timeline on track.
              </p>
              <NavLink to="/multi-development-framing" className="feature-btn">
                View multi-family solutions <span>&rarr;</span>
              </NavLink>
            </div>
          </div>

          {/* Card 2: Custom Residential (Reversed & Right Aligned) */}
          <div className="feature-card reverse">
            <div className="feature-image">
              <img src="/res1.jpg" alt="Custom Residential Framing" />
            </div>
            <div className="feature-content align-right">
              <span className="feature-eyebrow">CUSTOM HOMES</span>
              <h3 className="feature-title">
                Building <strong>dream</strong> homes, frame by frame.
              </h3>
              <p className="feature-desc">
                From intricate custom designs to standard residential builds, our team ensures
                every beam and stud is placed with expert precision.
              </p>
              <NavLink to="/residential-framing" className="feature-btn">
                Explore residential framing <span>&rarr;</span>
              </NavLink>
            </div>
          </div>

          {/* Card 3: Timber Framing */}
          <div className="feature-card">
            <div className="feature-image">
              <img src="/timber1.jpg" alt="Timber Framing" />
            </div>
            <div className="feature-content">
              <span className="feature-eyebrow">SPECIALTY FRAMING</span>
              <h3 className="feature-title">
                Timeless <strong>timber</strong> craftsmanship.
              </h3>
              <p className="feature-desc">
                Merging traditional aesthetics with modern engineering. Our timber framing
                services add character and robust strength to any project.
              </p>
              <NavLink to="/timber-framing" className="feature-btn">
                Discover timber framing <span>&rarr;</span>
              </NavLink>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FEATURED PROJECT (Dynamic Carousel) */}
      <section className="more-explore-section">

        {/* Header with Nav Arrows */}
        <div className="explore-header">
          <h2>Featured Project</h2>
          <div className="explore-nav">
            <button className="nav-arrow" onClick={prevProject}>&lt;</button>
            <button className="nav-arrow" onClick={nextProject}>&gt;</button>
          </div>
        </div>

        {/* The Card */}
        <div className="explore-card-split animate-fade-in" key={currentProject.id}>

          <div className="ecs-image">
            <img src={currentProject.image} alt={currentProject.title} />
          </div>

          <div className="ecs-content">
            <h3>{currentProject.title}</h3>
            <p>{currentProject.desc}</p>

            <NavLink to={currentProject.link} className="ecs-arrow-link">
              <span>&rarr;</span>
            </NavLink>
          </div>

        </div>
      </section>

    </div>
  );
}
