import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import "./Home.css";

export default function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [direction, setDirection] = useState("next"); // 'next' or 'prev'

  const expertiseSectionRef = React.useRef(null);

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

  // Auto-rotate Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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

  const nextProject = () => {
    setDirection("next");
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection("prev");
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!expertiseSectionRef.current) return;

      const section = expertiseSectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;

      const scrollProgress = Math.min(Math.max(-rect.top / (sectionHeight - window.innerHeight), 0), 0.99);
      const newIndex = Math.floor(scrollProgress * expertiseData.length);

      setActiveExpertise(prev => {
        if (prev !== newIndex) return newIndex;
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expertiseData.length]);

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="jll-home-page">

      <section className="ss-hero">

        {/* === LAYER 1: Background Slides === */}
        <div className="ss-hero-bg-wrapper">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`ss-hero-bg ${index === currentHeroIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>

        {/* === LAYER 2: Multi-stop Gradient Overlay === */}
        <div className="ss-hero-vignette" />

        {/* === LAYER 3: Hero Content === */}
        <div className="ss-hero-content">

          {/* Top bar: eyebrow + phone */}
          <div className="ss-hero-topbar">
            <span className="ss-hero-eyebrow">
              <span className="ss-hero-eyebrow-dot" />
              BC's Premier Wood Framing Contractor
            </span>
            <a href="tel:6048327008" className="ss-hero-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.35 2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.65a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92v1z" /></svg>
              604-832-7008
            </a>
          </div>

          {/* Main headline – animated key each slide change */}
          <div className="ss-hero-headline-wrap">
            <h1 className="ss-hero-title" key={currentHeroIndex}>
              <span className="ss-hero-title-line word-1"
                dangerouslySetInnerHTML={{ __html: heroSlides[currentHeroIndex].titleLine1 }}
              />
              <span className="ss-hero-title-line word-2"
                dangerouslySetInnerHTML={{ __html: heroSlides[currentHeroIndex].titleLine2 }}
              />
            </h1>
          </div>

          {/* Sub-tagline */}
          <p className="ss-hero-sub" key={`sub-${currentHeroIndex}`}>
            {heroSlides[currentHeroIndex].subtitle}
          </p>

          {/* CTAs */}
          <div className="ss-hero-ctas">
            <Link to="/contact" className="ss-hero-btn-primary">
              Request a Bid
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link to="/projects" className="ss-hero-btn-ghost">
              View Projects
            </Link>
          </div>

          <div className="ss-hero-bottom-strip">
            <div className="ss-hero-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Delta, BC &nbsp;·&nbsp; Metro Vancouver
            </div>
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
                  <div className="ss-author-info">
                    <span className="ss-author-name">Gurpreet Singh</span>
                    <span className="ss-author-role">Founder of Setsquare Construction</span>
                  </div>
                  <div className="ss-signature">
                    {/* Placeholder for signature look */}
                    <span className="signature-text">Gurpreet Singh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Scroll-Linked Transitions) */}
      <section className="jll-expertise-scroll-section" ref={expertiseSectionRef}>
        <div className="expertise-sticky-wrapper">
          <div className="jll-container">
            <div className="expertise-tabs-container">

              {/* 1. LEFT: Active Content */}
              <div className="expertise-content-left">
                <div className="expertise-icon-box">
                  <HiOutlineHome className="expertise-icon" />
                </div>
                <h2 className="expertise-active-title">
                  {expertiseData[activeExpertise].title}
                </h2>
                <p className="expertise-active-desc">
                  {expertiseData[activeExpertise].description}
                </p>
                <Link to={expertiseData[activeExpertise].link} className="expertise-explore-btn">
                  Explore More <span>&rarr;</span>
                </Link>
              </div>

              {/* 2. CENTER: Main Image Display */}
              <div className="expertise-display-main">
                <div className="expertise-image-card">
                  <img
                    src={expertiseData[activeExpertise].image}
                    alt={expertiseData[activeExpertise].title}
                    key={activeExpertise}
                    className="expertise-main-img fade-in"
                  />

                  <div className="expertise-image-label">
                    <div className="label-content-inner">
                      <span className="label-number">{expertiseData[activeExpertise].id}</span>
                      <span className="label-text">{expertiseData[activeExpertise].title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. RIGHT: Indicators */}
              <div className="expertise-vertical-tabs">
                {expertiseData.map((item, index) => (
                  <div
                    key={item.id}
                    className={`expertise-side-tab ${index === activeExpertise ? 'active' : ''}`}
                  >

                    <div className="tab-content">
                      <span className="tab-number">{item.id}</span>
                      <span className="tab-vertical-title">{item.title}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* 4. OUR STORY SECTION */}
      <section className="ss-story-section">
        <div className="jll-container">
          <div className="jll-grid-header">
            <span className="ss-story-eyebrow">OUR STORY</span>
            <h2 className="ss-story-heading">Built from the ground up — frame by frame.</h2>
          </div>

          <div className="ss-story-main-grid">
            <div className="ss-story-text">
              <p className="ss-story-body">
                SetSquare Construction was founded with a single vision — to bring uncompromising
                precision to wood frame construction in British Columbia. Starting with a small crew
                and one townhome project in Delta, we grew through reputation alone.
              </p>
              <p className="ss-story-body">
                Over two decades later, we've helped shape the skylines of communities across the
                Lower Mainland, partnering with BC's most respected developers.
              </p>
              <Link to="/why-us" className="ss-story-cta">
                Learn more about our heritage <span>&rarr;</span>
              </Link>
            </div>

            <div className="ss-story-featured-img">
              <img src="/frame-of-mind.jpg" alt="Our Legacy" />
              <div className="ss-story-year-stamp">Est. 2004</div>
            </div>
          </div>

          <div className="ss-story-milestones">
            {[
              { year: "2004", text: "Founded in Delta, BC" },
              { year: "2008", text: "Multi-development expansion" },
              { year: "2013", text: "Timber framing division launched" },
              { year: "2019", text: "500+ units completed" },
              { year: "Today", text: "Leading BC contractor" }
            ].map((milestone, idx) => (
              <div key={idx} className="ss-milestone-card">
                <span className="ss-milestone-year">{milestone.year}</span>
                <p className="ss-milestone-text">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECT */}

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

    </div >
  );
}
