import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProjectPage.css";

/**
 * ProjectPage — Reusable template for dedicated project pages.
 *
 * Props:
 *  - heroImage        : string  — background image for the hero
 *  - title            : string  — project title
 *  - location         : string  — location tag shown under title
 *  - meta             : Array<{ label, value }> — meta bar items
 *  - intro            : { eyebrow, heading, body }
 *  - sections         : Array<{ eyebrow, heading, body (str|str[]), image, reverse? }>
 *  - galleryStrips    : Array<{ position, layout, images, heights? }>
 *                         position: 'afterIntro' | 'afterSection0' | 'afterSection1' …
 *                         layout:   'cols-2' | 'cols-3' | 'cols-1-2' | 'cols-2-1'
 *  - conclusionText   : { eyebrow?, heading, body (str|str[]) }
 *  - conclusionImages : string[]  — images for the Summerland-style stacked gallery
 */
export default function ProjectPage({
  heroImage,
  title,
  location,
  meta = [],
  intro,
  sections = [],
  conclusionText,
  conclusionImages = [],
  galleryStrips = [],
}) {
  const revealRefs = useRef([]);
  const cardRefs   = useRef([]); // reset each render cycle below
  // Reset card refs array length to match current images
  cardRefs.current = cardRefs.current.slice(0, conclusionImages.length);

  // ── Scroll-reveal ──────────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);
    revealRefs.current = revealRefs.current.filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    revealRefs.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── Stacked-card scale effect ──────────────────────────────────────
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (cards.length < 2) return;

    const SHRINK_PER_CARD = 0.04; // scale reduction per buried card
    const STICKY_TOP = 120;       // must match CSS `top` value in px

    const onScroll = () => {
      cards.forEach((card, i) => {
        const inner = card.querySelector(".pp-stack-card-inner");
        if (!inner) return;

        // Count how many cards BELOW this one have reached sticky position
        let buriedBy = 0;
        for (let j = i + 1; j < cards.length; j++) {
          const belowTop = cards[j].getBoundingClientRect().top;
          if (belowTop <= STICKY_TOP + 1) buriedBy++;
        }

        const scale = Math.max(0.82, 1 - buriedBy * SHRINK_PER_CARD);
        inner.style.transform = `scale(${scale})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount to set initial state
    return () => window.removeEventListener("scroll", onScroll);
  }, [conclusionImages]);

  // ── Helpers ────────────────────────────────────────────────────────
  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const addCard = (el, i) => {
    cardRefs.current[i] = el;
  };

  const stripsFor = (pos) => galleryStrips.filter((s) => s.position === pos);

  const renderStrip = (strip, key) => (
    <div
      key={key}
      className={`pp-gallery-strip ${strip.layout || "cols-2"}`}
      ref={addReveal}
    >
      {strip.images.map((src, i) => (
        <div
          key={i}
          className={`pp-gallery-img ${(strip.heights || [])[i] || "medium"}`}
        >
          <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  );

  // ── Render ─────────────────────────────────────────────────────────
  return (
    <div className="pp-page">

      {/* ── Hero ── */}
      <section
        className="pp-hero"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="pp-hero-content">
          <span className="pp-hero-eyebrow">Project</span>
          <h1 className="pp-hero-title">{title}</h1>
          <span className="pp-hero-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {location}
          </span>
        </div>

        <div className="pp-hero-scroll">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
          Scroll
        </div>
      </section>

      {/* ── Meta Bar ── */}
      {meta.length > 0 && (
        <div className="pp-meta-bar">
          {meta.map((item, i) => (
            <div key={i} className="pp-meta-item">
              <span className="pp-meta-label">{item.label}</span>
              <span className="pp-meta-value">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      <div className="pp-body">

        {/* ── Back link ── */}
        <Link to="/projects" className="pp-nav-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          All Projects
        </Link>

        {/* ── Intro ── */}
        {intro && (
          <div className="pp-intro pp-reveal" ref={addReveal}>
            {intro.eyebrow && (
              <span className="pp-intro-eyebrow">{intro.eyebrow}</span>
            )}
            {intro.heading && (
              <h2 className="pp-intro-heading">{intro.heading}</h2>
            )}
            {intro.body && (
              <p className="pp-intro-body">{intro.body}</p>
            )}
          </div>
        )}

        {/* ── Strips after intro ── */}
        {stripsFor("afterIntro").map((s, i) => renderStrip(s, `intro-strip-${i}`))}

        {/* ── Content Sections ── */}
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <div
              className={`pp-content-block${section.reverse ? " reverse" : ""} pp-reveal`}
              ref={addReveal}
            >
              <div className="pp-block-text">
                {section.eyebrow && (
                  <span className="pp-block-eyebrow">{section.eyebrow}</span>
                )}
                {section.heading && (
                  <h2 className="pp-block-heading">{section.heading}</h2>
                )}
                {Array.isArray(section.body)
                  ? section.body.map((p, pi) => (
                      <p key={pi} className="pp-block-body">{p}</p>
                    ))
                  : section.body && (
                      <p className="pp-block-body">{section.body}</p>
                    )}
              </div>

              {section.image && (
                <div className="pp-block-img">
                  <img src={section.image} alt={section.heading} loading="lazy" />
                </div>
              )}
            </div>

            {/* Strips after this section */}
            {stripsFor(`afterSection${index}`).map((s, i) =>
              renderStrip(s, `section-${index}-strip-${i}`)
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ================================================================
          COMPLETION SECTION — Summerland-style stacked gallery
          Lives outside .pp-body so the stack can be full-width
          ================================================================ */}
      {(conclusionText || conclusionImages.length > 0) && (
        <div className="pp-completion">

          {/* Centered header */}
          {conclusionText && (
            <div className="pp-completion-header pp-reveal" ref={addReveal}>
              {conclusionText.eyebrow && (
                <span className="pp-completion-eyebrow">
                  {conclusionText.eyebrow}
                </span>
              )}
              {conclusionText.heading && (
                <h2 className="pp-completion-heading">
                  {conclusionText.heading}
                </h2>
              )}
              {Array.isArray(conclusionText.body)
                ? conclusionText.body.map((p, pi) => (
                    <p key={pi} className="pp-completion-body">{p}</p>
                  ))
                : conclusionText.body && (
                    <p className="pp-completion-body">{conclusionText.body}</p>
                  )}
            </div>
          )}

          {/* Stacked scrolling cards */}
          {conclusionImages.length > 0 && (
            <div className="pp-stack-track">
              {conclusionImages.map((src, i) => (
                <div
                  key={i}
                  className="pp-stack-card"
                  ref={(el) => addCard(el, i)}
                >
                  <div className="pp-stack-card-inner">
                    <img src={src} alt={`Completion ${i + 1}`} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pp-stack-footer" />
        </div>
      )}

    </div>
  );
}
