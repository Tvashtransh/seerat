import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import HomeCTA from "../components/HomeCTA";
import "./Home.css";

export default function Home() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // 'next' or 'prev'

  // Casino counter refs
  const statsRef = useRef(null);
  const counterRefs = useRef([]);
  const statsAnimated = useRef(false);

  // Auto-slide ref
  const autoSlideRef = useRef(null);

  // Parallax refs – Our Story section
  const storyRef = useRef(null);
  const storyImgMain = useRef(null);
  const storyImgOff = useRef(null);
  const storyChip = useRef(null);
  const storyContent = useRef(null);
  const rafRef = useRef(null);

  // Hero Parallax refs
  const heroVideoRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroFilterRef = useRef(null);
  const heroBgTextRef = useRef(null);

  // Horizontal scroll refs
  const horizontalSectionRef = useRef(null);
  const horizontalScrollContainerRef = useRef(null);
  const tcWorksRef = useRef(null);

  useEffect(() => {
    console.log("Home Layout Update: Unified Grid Active");
  }, []);

  const heroVideos = [
    "/culmena-assets/latest 1.mp4",
    "/culmena-assets/latest 2.mp4"
  ];

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
      image: "/project-type-14.png",
      hoverImage: "/culmena-assets/DJI_0950.JPG",
      link: "/multi-development-framing"
    },
    {
      id: "02",
      title: "Residential Wood Framing",
      description: "Dependable and precise framing for single-family homes and custom residential builds throughout British Columbia.",
      image: "/res1.jpg",
      hoverImage: "/culmena-assets/DJI_0961.JPG",
      link: "/residential-framing"
    },
    {
      id: "03",
      title: "Timber Framing",
      description: "Marrying traditional craftsmanship with modern engineering to create stunning exposed timber structures.",
      image: "/timber1.jpg",
      hoverImage: "/granary-assets/granary-1.jpg",
      link: "/timber-framing"
    },
    {
      id: "04",
      title: "On-Site Prefab Services",
      description: "We specialize in delivering high-quality, efficient prefab solutions tailored to your needs. Our experienced team ensures a smooth installation process.",
      image: "/project-type-14.png",
      hoverImage: "/culmena-assets/DJI_0953.JPG",
      link: "/on-site-prefab-services"
    }
  ];

  const standardsData = [
    {
      id: "01",
      title: "Custom Designs",
      description: "Our team of experts will work closely with you to create custom framing designs that reflect your style and preferences. From traditional to modern, we have the expertise to bring your ideas to reality, ensuring a unique and personalized touch to your home.",
      image: "/res1.jpg",
    },
    {
      id: "02",
      title: "Professional Installation",
      description: "At Setsquare Construction, we guarantee professional and reliable installation services for all your framing needs. Our skilled craftsmen pay attention to every detail, ensuring a flawless finish that enhances the beauty and structural integrity of your home.",
      image: "/timber1.jpg",
    },
    {
      id: "03",
      title: "Quality Materials",
      description: "Using only the finest quality materials, we ensure that your home framing is not only visually appealing but also durable and long-lasting. Our commitment to excellence means that your investment in our services will stand the test of time, providing you with peace of mind and satisfaction.",
      image: "/culmena-assets/DJI_0953.JPG",
    }
  ];

  // Auto-rotate Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex(prev => (prev + 1) % 2); // Cycle between the 2 latest videos
    }, 8000); // 8 seconds per video
    return () => clearInterval(timer);
  }, []);

  // ── Casino counter animation ──────────────────────────────────────
  useEffect(() => {
    const statsSection = statsRef.current;
    if (!statsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true;
          counterRefs.current.forEach((el) => {
            if (!el) return;
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || "";
            const duration = 1800; // ms
            const frameDuration = 1000 / 60;
            const totalFrames = Math.round(duration / frameDuration);
            let frame = 0;

            const counter = setInterval(() => {
              frame++;
              const progress = frame / totalFrames;

              if (frame < totalFrames - 10) {
                // Casino scramble: rapid random numbers
                const scrambled = Math.floor(Math.random() * (target + 1));
                el.textContent = scrambled + suffix;
              } else {
                // Ease into final value
                const eased = Math.round(
                  target * (1 - Math.pow(1 - progress, 4))
                );
                el.textContent = Math.min(eased, target) + suffix;
              }

              if (frame >= totalFrames) {
                el.textContent = target + "+";
                clearInterval(counter);
              }
            }, frameDuration);
          });
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(statsSection);
    return () => observer.disconnect();
  }, []);

  // ── Our Story Parallax (scroll-driven, rAF) ─────────────────────
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return; // already queued
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const section = storyRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const winH = window.innerHeight;
        // progress: 0 when section top hits bottom of viewport, 1 when it leaves top
        const progress = 1 - rect.bottom / (winH + rect.height);
        const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
        const p = clamp(progress, 0, 1);

        // Main image → drifts UP  (-40px total travel)
        if (storyImgMain.current)
          storyImgMain.current.style.transform = `translateY(${-40 * p}px)`;

        // Offset image → drifts DOWN  (+50px total travel, opposite direction)
        if (storyImgOff.current)
          storyImgOff.current.style.transform = `translateY(${50 * p}px)`;

        // Experience chip → subtle horizontal drift
        if (storyChip.current)
          storyChip.current.style.transform = `translate(${-15 * p}px, ${-20 * p}px)`;

        // Content side → gentle vertical float + fade in from right
        if (storyContent.current) {
          const visibleP = clamp((p - 0.05) / 0.5, 0, 1); // starts slightly after scroll begins
          storyContent.current.style.transform = `translateY(${-25 * p}px)`;
          storyContent.current.style.opacity = `${0.4 + 0.6 * visibleP}`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Hero Shrink on Scroll ─────────────────────────────────────────
  useEffect(() => {
    const handleHeroScroll = () => {
      if (!heroVideoRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate progress (0 to 1) across the first 100vh
      const progress = Math.min(Math.max(scrollY / windowHeight, 0), 1);

      // Shrink video wrapper into a portrait shape
      const insetY = progress * 10;
      const insetX = progress * 32.5;
      const radius = progress * 16; // up to 16px border radius

      heroVideoRef.current.style.clipPath = `inset(${insetY}vh ${insetX}vw round ${radius}px)`;

      // Fade out foreground text
      if (heroContentRef.current) {
        // Fade out quickly in the first 30% of scroll
        const textOpacity = Math.max(1 - (progress * 3), 0);
        heroContentRef.current.style.opacity = textOpacity;
      }

      // Fade out filter
      if (heroFilterRef.current) {
        const filterOpacity = Math.max(1 - (progress * 4), 0);
        heroFilterRef.current.style.opacity = filterOpacity;
      }

      // Reveal background text slowly (it's already behind, but we can add a slight parallax or fade)
      if (heroBgTextRef.current) {
        // Option to add subtle scale or just let it sit there
        heroBgTextRef.current.style.transform = `scale(${1 + progress * 0.05})`;
      }
    };

    window.addEventListener("scroll", handleHeroScroll, { passive: true });
    handleHeroScroll(); // initial state

    return () => {
      window.removeEventListener("scroll", handleHeroScroll);
    };
  }, []);

  // ── Auto-slide "More to explore" every 4s ─────────────────────────
  // Auto-slide "More to explore" removed as requested
  /* 
  const startAutoSlide = useCallback(() => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setDirection("next");
      setCurrentProjectIndex((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 4000);
  }, [projects.length]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideRef.current);
  }, [startAutoSlide]);
  */

  const startAutoSlide = () => {}; // No-op to prevent breakages if called elsewhere

  // ── Telha Clarke Replica Animation ──────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tc-in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (tcWorksRef.current) {
      const header = tcWorksRef.current.querySelector('.tc-header');
      if (header) observer.observe(header);
      
      const items = tcWorksRef.current.querySelectorAll('.tc-project-item');
      items.forEach(item => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  // ── Horizontal Scroll for On-Site Progress ────────────────────────
  useEffect(() => {
    const handleHorizScroll = () => {
      if (!horizontalSectionRef.current || !horizontalScrollContainerRef.current) return;

      const rect = horizontalSectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Calculate scrollable distance inside this section
      const scrollableDistance = rect.height - windowH;
      if (scrollableDistance <= 0) return;

      // Calculate progress (0 when top is at top of viewport, 1 when bottom is at bottom of viewport)
      let scrolled = -rect.top;
      let progress = scrolled / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));

      const scroller = horizontalScrollContainerRef.current;
      const wrapper = scroller.parentElement;
      const maxTranslateX = Math.max(0, scroller.scrollWidth - wrapper.clientWidth);

      scroller.style.transform = `translateX(${-progress * maxTranslateX}px)`;
    };

    window.addEventListener("scroll", handleHorizScroll, { passive: true });
    handleHorizScroll();

    return () => window.removeEventListener("scroll", handleHorizScroll);
  }, []);

  const nextProject = () => {
    setDirection("next");
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    startAutoSlide(); // reset timer on manual nav
  };

  const prevProject = () => {
    setDirection("prev");
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    startAutoSlide(); // reset timer on manual nav
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="jll-home-page">

      <section className="ss-hero-scroll-container">
        <div className="ss-hero-premium ss-hero-sticky">

          {/* Background Text (Revealed on scroll) */}
          <div className="jll-container ss-hero-bg-text-container" ref={heroBgTextRef}>
            <h1 className="ss-hero-bg-text">
              {"SETSQUARE".split("").map((c, i) => <span key={`s1-${i}`}>{c}</span>)}
            </h1>
            <h1 className="ss-hero-bg-text">
              {"CONSTRUCTION".split("").map((c, i) => <span key={`s2-${i}`}>{c}</span>)}
            </h1>
          </div>

          {/* Foreground Video Wrapper */}
          <div className="ss-hero-video-wrapper" ref={heroVideoRef}>
            <video
              key={heroVideos[currentHeroIndex]}
              autoPlay
              muted
              loop
              playsInline
              className="ss-hero-video"
              poster="/hero-image.jpg"
              onLoadedData={(e) => e.target.play()}
            >
              <source src={heroVideos[currentHeroIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="ss-hero-overlay-refined" />

            {/* Centered Content */}
            <div className="ss-hero-content-centered" ref={heroContentRef}>
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

            {/* Bottom Search/Filter Bar */}
            <div className="ss-hero-bottom-filter" ref={heroFilterRef}>
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
            <div className="jll-stats-grid" ref={statsRef}>
              <div className="jll-stat-item">
                <span
                  className="jll-stat-number"
                  ref={(el) => (counterRefs.current[0] = el)}
                  data-target="80"
                  data-suffix="+"
                >80+</span>
                <span className="jll-stat-label">Projects Completed</span>
              </div>
              <div className="jll-stat-item">
                <span
                  className="jll-stat-number"
                  ref={(el) => (counterRefs.current[1] = el)}
                  data-target="20"
                  data-suffix="+"
                >20+</span>
                <span className="jll-stat-label">Years of Expertise</span>
              </div>
              <div className="jll-stat-item">
                <span
                  className="jll-stat-number"
                  ref={(el) => (counterRefs.current[2] = el)}
                  data-target="500"
                  data-suffix="+"
                >500+</span>
                <span className="jll-stat-label">Units Framed</span>
              </div>
              <div className="jll-stat-item">
                <span
                  className="jll-stat-number"
                  ref={(el) => (counterRefs.current[3] = el)}
                  data-target="10"
                  data-suffix="+"
                >10+</span>
                <span className="jll-stat-label">Trusted Developers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ss-about-message-section" style={{ backgroundImage: `url('/culmena-assets/DJI_0953.JPG')` }}>
        <div className="ss-message-overlay"></div>
        <div className="jll-container">
          <div className="ss-message-content">
            <h2 className="ss-message-title">A team of reliable and experienced Contractors</h2>
            <div className="ss-message-body">
              <span className="ss-quote-mark top-quote">"</span>
              <p>
                Setsquare Construction brings together decades of structural framing expertise and
                unwavering commitment to quality. Our teams are composed of highly skilled
                professionals who understand the complexities of large-scale wood frame
                developments in British Columbia.
              </p>
              <span className="ss-quote-mark bottom-quote">"</span>
            </div>
            
            <div className="ss-message-author">
              <div className="ss-founders-row">
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
                <span className="signature-text-light">N. Singh & G. Singh</span>
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
                  <div className="ss-expertise-img-base">
                    <img src={item.image} alt={item.title} className="ss-expertise-image" />
                  </div>
                  <div className="ss-expertise-img-hover">
                    <img src={item.hoverImage} alt={`${item.title} Hover`} className="ss-expertise-image" />
                  </div>
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

      {/* ── THE SETSQUARE STANDARD REPLICA ── */}
      <section className="tc-expertise-replica" ref={tcWorksRef}>
        <div className="jll-container">
          <div className="tc-header">
            <h2 className="tc-heading">
              <span className="tc-text-reveal">The Setsquare</span>
            </h2>
            <h2 className="tc-heading tc-italic">
              <span className="tc-text-reveal">Standard</span>
            </h2>
          </div>
          
          <div className="tc-projects-list">
            {standardsData.map((item) => (
              <div className="tc-project-item ss-standard-row" key={item.id}>
                <div className="ss-standard-layout">
                  <div className="ss-standard-text-side">
                    <div className="tc-project-number">
                      <span className="tc-text-reveal">{item.id}</span>
                    </div>
                    <div className="tc-project-title-wrap">
                      <h3 className="tc-project-title">
                        <span className="tc-text-reveal">{item.title}</span>
                      </h3>
                    </div>
                    <div className="tc-project-desc-wrap ss-standard-desc">
                      <p className="tc-project-desc">
                        <span className="tc-text-reveal">{item.description}</span>
                      </p>
                    </div>
                  </div>
                  <div className="ss-standard-image-side">
                    <div className="tc-project-image-wrap ss-standard-image-wrap">
                      <div className="tc-project-image-inner">
                         <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ss-story-section">
        <div className="jll-container">
          <div className="ss-story-flex-layout" ref={storyRef}>
            {/* Visual Aspect */}
            <div className="ss-story-visual-side">
              <div className="ss-story-image-main" ref={storyImgMain} style={{ willChange: 'transform', transition: 'transform 0.1s linear' }}>
                <img src="/frame-of-mind.jpg" alt="Setsquare Legacy" />
                <div className="ss-story-experience-chip" ref={storyChip} style={{ willChange: 'transform', transition: 'transform 0.12s linear' }}>
                  <span className="chip-value">20+</span>
                  <span className="chip-label">Years of <br />Expertise</span>
                </div>
              </div>
              <div className="ss-story-image-offset" ref={storyImgOff} style={{ willChange: 'transform', transition: 'transform 0.15s linear' }}>
                <img src="/whyus-about.jpg" alt="On-Site Detail" />
              </div>
            </div>

            {/* Content Aspect */}
            <div
              className="ss-story-content-side"
              ref={storyContent}
              style={{ willChange: 'transform, opacity', transition: 'transform 0.1s linear, opacity 0.1s linear' }}
            >
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

      <section className="ss-horiz-section" ref={horizontalSectionRef}>
        <div className="ss-horiz-sticky">
          {/* Left Fixed Content */}
          <div className="ss-horiz-left">
            <h2 className="ss-horiz-title">
              On-Site <br />
              Progress
            </h2>
            <p className="ss-horiz-desc">
              Watch our developments take shape. From the foundations up, precision framing is the unseen backbone of every great project we build alongside our developer partners.
            </p>
            <Link to="/gallery" className="ss-horiz-btn">
              Explore More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          {/* Right Scrolling Container */}
          <div className="ss-horiz-right-wrapper">
            <div className="ss-horiz-right" ref={horizontalScrollContainerRef}>
              {/* Using project images for progress frames */}
              <div className="ss-horiz-card">
                <img src="/1292 Rosenberg/dji_fly_20250306_160944_857_1741306346825_photo_optimized.jpg" alt="Site Progress 1" />
              </div>
              <div className="ss-horiz-card">
                <img src="/granary-assets/granary-1.jpg" alt="Site Progress 2" />
              </div>
              <div className="ss-horiz-card">
                <img src="/boundarybay-assets/boundarybay-1.jpg" alt="Site Progress 3" />
              </div>
              <div className="ss-horiz-card">
                <img src="/project-type-4.png" alt="Site Progress 4" />
              </div>
              <div className="ss-horiz-card">
                <img src="/culmena-assets/DJI_0953.JPG" alt="Site Progress 5" />
              </div>
              <div className="ss-horiz-card">
                <img src="/project-type-3.png" alt="Site Progress 6" />
              </div>
              {/* Added a spacer to ensure the last card easily reaches the center or left before scroll ends if desired */}
              <div style={{ width: '10vw', flexShrink: 0 }} />
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
          <div className="jll-featured-card-split">
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

          {/* Dot indicators */}
          <div className="jll-carousel-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`jll-dot${i === currentProjectIndex ? " active" : ""}`}
                onClick={() => {
                  setDirection(i > currentProjectIndex ? "next" : "prev");
                  setCurrentProjectIndex(i);
                  startAutoSlide();
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </div>
  );
}
