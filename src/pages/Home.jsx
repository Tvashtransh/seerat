import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // 'next' or 'prev'

  useEffect(() => {
    console.log("Home Layout Update: Unified Grid Active");
  }, []);

  const heroSlides = [
    {
      image: "/culmena-assets/DJI_0953.JPG",
      titleLine1: "Precision Framing",
      titleLine2: "at <em>Scale.</em>",
      subtitle: "Delivering structural excellence for 100+ unit townhome developments across BC.",
      label: "Multi-Dev"
    },
    {
      image: "/1292 Rosenberg/dji_fly_20250306_160944_857_1741306346825_photo_optimized.jpg",
      titleLine1: "Community",
      titleLine2: "<em>Infrastructure.</em>",
      subtitle: "Framing the landmarks that define modern neighbourhoods in the Lower Mainland.",
      label: "Commercial"
    },
    {
      image: "/boundarybay-assets/boundarybay-1.jpg",
      titleLine1: "Residential",
      titleLine2: "<em>Excellence.</em>",
      subtitle: "Luxury wood framing for high-end custom estates and multi-family projects.",
      label: "Residential"
    },
    {
      image: "/granary-assets/granary-4.jpg",
      titleLine1: "Structural",
      titleLine2: "<em>Integrity.</em>",
      subtitle: "Over two decades of master framing craft and developer trust in British Columbia.",
      label: "Timber"
    }
  ];

  const projects = [
    {
      id: 1,
      image: "/granary-assets/granary-1.jpg",
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

  const expertiseData = [
    {
      id: "01",
      title: "Multi-Development Framing",
      description: "Tailored framing solutions for large-scale community developments and multi-unit projects across the Lower Mainland.",
      image: "/multi1.jpg",
      link: "/multi-development-framing"
    },
    {
      id: "02",
      title: "Residential Wood Framing",
      description: "Dependable and precise framing for single-family homes and custom residential builds throughout British Columbia.",
      image: "/res1.jpg",
      link: "/residential-framing"
    },
    {
      id: "03",
      title: "Timber Framing",
      description: "Marrying traditional craftsmanship with modern engineering to create stunning exposed timber structures.",
      image: "/timber1.jpg",
      link: "/timber-framing"
    }
  ];

  // Auto-rotate Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextProject = () => {
    setDirection("next");
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection("prev");
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="jll-home-page">

      <section className="ss-hero-premium">
        {/* Background Video */}
        <div className="ss-hero-video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="ss-hero-video"
            poster="/hero-image.jpg"
          >
            <source src="/culmena-assets/DJI_0964.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="ss-hero-overlay-refined" />
        </div>

        {/* Centered Content */}
        <div className="ss-hero-content-centered">
          <div className="ss-hero-text-minimal">
            <span className="ss-hero-brand-eyebrow">SETSQUARE CONSTRUCTION</span>
            <h1 className="ss-hero-main-title">
              THE <br />
              <span className="serif-font">SETSQUARE</span>
            </h1>
            <p className="ss-hero-sub-minimal">
              PRECISION FRAMING & MASTER CRAFTSMANSHIP
            </p>
          </div>
        </div>

        {/* Bottom Search/Filter Bar (Apple/EMAAR Style) */}
        <div className="ss-hero-bottom-filter">
          <div className="ss-filter-pill">
            <div className="ss-filter-item">
              <span className="filter-label">PROJECT TYPE</span>
              <div className="filter-select">
                <span>All Projects</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
            <div className="ss-filter-divider" />
            <div className="ss-filter-item">
              <span className="filter-label">LOCATION</span>
              <div className="filter-select">
                <span>Metro Vancouver</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
            <div className="ss-filter-divider" />
            <div className="ss-filter-item">
              <span className="filter-label">SCALE</span>
              <div className="filter-select">
                <span>Multi-Family</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </div>
            <button className="ss-filter-search-btn">
              SEARCH PROJECTS
            </button>
          </div>
        </div>
      </section>

      <section className="jll-explore-section">
        <div className="jll-container">
          <div className="jll-explore-grid">
            <div className="jll-explore-text">
              <h2 className="jll-explore-title">Our impact in numbers</h2>
              <p className="jll-explore-desc">
                Setsquare Construction brings decades of combined experience and a proven track record of
                delivering structural excellence across British Columbia.
              </p>
            </div>
            <div className="jll-stats-grid">
              <div className="jll-stat-item">
                <span className="jll-stat-number">80+</span>
                <span className="jll-stat-label">Projects Completed</span>
              </div>
              <div className="jll-stat-item">
                <span className="jll-stat-number">20+</span>
                <span className="jll-stat-label">Years of Expertise</span>
              </div>
              <div className="jll-stat-item">
                <span className="jll-stat-number">500+</span>
                <span className="jll-stat-label">Units Framed</span>
              </div>
              <div className="jll-stat-item">
                <span className="jll-stat-number">10+</span>
                <span className="jll-stat-label">Trusted Developers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ss-about-home">
        <div className="jll-container">
          <div className="ss-about-card">
            <div className="ss-about-card-inner">
              <div className="ss-about-image-col">
                <img src="/whyus-about.jpg" alt="Our Team" className="ss-about-img" />
              </div>
              <div className="ss-about-content-col">
                <span className="ss-about-eyebrow">ABOUT US</span>
                <h2 className="ss-about-title">A team of reliable and experienced Contractors</h2>
                <p className="ss-about-desc">
                  Setsquare Construction brings together decades of structural framing expertise and
                  unwavering commitment to quality. Our teams are composed of highly skilled
                  professionals who understand the complexities of large-scale wood frame
                  developments in British Columbia.
                </p>
                <div className="ss-about-author">
                  <div className="ss-founders-row" style={{ display: 'flex', gap: '40px' }}>
                    <div className="ss-author-info">
                      <span className="ss-author-name">Narwinder Singh</span>
                      <span className="ss-author-role">Co-Founder</span>
                    </div>
                    <div className="ss-author-info">
                      <span className="ss-author-name">Gurpreet Singh</span>
                      <span className="ss-author-role">Co-Founder</span>
                    </div>
                  </div>
                  <div className="ss-signature">
                    <span className="signature-text">N. Singh & G. Singh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ss-expertise-section">
        <div className="jll-container">
          <div className="jll-grid-header">
            <span className="ss-story-eyebrow">OUR EXPERTISE</span>
            <h2 className="ss-story-heading">Specialized framing for every project scale.</h2>
          </div>

          <div className="ss-expertise-grid">
            {expertiseData.map((item) => (
              <div key={item.id} className="ss-expertise-card">
                <div className="ss-expertise-img-wrap">
                  <img src={item.image} alt={item.title} className="ss-expertise-image" />
                  <div className="ss-expertise-number">{item.id}</div>
                </div>
                <div className="ss-expertise-content">
                  <h3 className="ss-expertise-title">{item.title}</h3>
                  <p className="ss-expertise-body">{item.description}</p>
                  <Link to={item.link} className="ss-expertise-link">
                    Explore services <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ss-story-section">
        <div className="jll-container">
          <div className="ss-story-flex-layout">
            {/* Visual Aspect */}
            <div className="ss-story-visual-side">
              <div className="ss-story-image-main">
                <img src="/frame-of-mind.jpg" alt="Setsquare Legacy" />
                <div className="ss-story-experience-chip">
                  <span className="chip-value">20+</span>
                  <span className="chip-label">Years of <br />Expertise</span>
                </div>
              </div>
              <div className="ss-story-image-offset">
                <img src="/whyus-about.jpg" alt="On-Site Detail" />
              </div>
            </div>

            {/* Content Aspect */}
            <div className="ss-story-content-side">
              <span className="ss-story-eyebrow">OUR STORY</span>
              <h2 className="ss-story-heading">Two decades of structural precision.</h2>

              <div className="ss-story-punch-text">
                <p>
                  Founded in Delta, BC with a single crew and a vision for structural excellence,
                  Setsquare has grown into BC's trusted framing partner.
                </p>
                <p>
                  We don't just build structures; we frame the future of communities by partnering
                  with the province's top developers to deliver quality at scale.
                </p>
              </div>

              <div className="ss-story-stats-row">
                <div className="ss-story-stat-card">
                  <span className="stat-card-year">2004</span>
                  <span className="stat-card-desc">Est. in Delta</span>
                </div>
                <div className="ss-story-stat-card">
                  <span className="stat-card-year">500+</span>
                  <span className="stat-card-desc">Units Framed</span>
                </div>
                <div className="ss-story-stat-card">
                  <span className="stat-card-year">80+</span>
                  <span className="stat-card-desc">Developments</span>
                </div>
              </div>

              <Link to="/why-us" className="ss-story-modern-cta">
                Discover Our Heritage
                <div className="cta-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="jll-featured-carousel">
        <div className="jll-container">
          <div className="jll-section-header flex-between">
            <h2 className="jll-section-title-plain">More to explore</h2>
            <div className="jll-carousel-nav">
              <button onClick={prevProject} className="jll-nav-square">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button onClick={nextProject} className="jll-nav-square">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
          <div className={`jll-featured-card-split ${direction}`} key={currentProject.id}>
            <div className="jll-featured-img">
              <img src={currentProject.image} alt={currentProject.title} />
            </div>
            <div className="jll-featured-content-box">
              <h3>{currentProject.title}</h3>
              <p>{currentProject.desc}</p>
              <Link to={currentProject.link} className="jll-arrow-link-plain">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="jll-cta-strip">
        <div className="jll-container content-center">
          <h2>Looking for a dependable framing partner?</h2>
          <Link to="/contact" className="jll-btn-white">Request a Consultation</Link>
        </div>
      </section>
    </div>
  );
}
