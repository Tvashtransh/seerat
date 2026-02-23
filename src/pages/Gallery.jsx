import React, { useEffect } from "react";
import "./Gallery.css";

const galleryImages = [
  "/img1.png", "/img2.png", "/img3.png", "/img4.png",
  "/img5.png", "/img6.png", "/img7.png", "/img8.png",
  "/img9.png", "/img10.png"
];

export default function Gallery() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-gallery-page">

      {/* Cinematic Hero */}
      <section
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/gallery-hero.png)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <h1>Visual Showcase</h1>
        </div>
      </section>

      {/* Featured Case Studies - Large Layout */}
      <section className="jll-case-studies">
        <div className="jll-container">

          <div className="jll-case-study">
            <div className="jll-case-study-visual">
              <img src="/beforeafter1.png" alt="Multi-Residential Development" />
              <div className="jll-case-badge">Multi-Family</div>
            </div>
            <div className="jll-case-study-content">
              <span className="jll-case-location">Coquitlam, BC</span>
              <h2 className="jll-case-title">Avana Townhomes</h2>
              <p className="jll-case-desc">
                Setsquare Construction proudly contributed to the construction of
                Avana Townhomes at Cottonwood Park. This project resulted in the
                creation of a vibrant community comprising 52 units, where efficiency
                and structural integrity were the primary drivers.
              </p>
            </div>
          </div>

          <div className="jll-case-study reverse">
            <div className="jll-case-study-content">
              <span className="jll-case-location">Boundary Beach, Delta</span>
              <h2 className="jll-case-title">Single-Family Transformation</h2>
              <p className="jll-case-desc">
                We played a key role in transforming a 1970's rancher into a
                bright, spacious family home. Our precision framing aligned
                perfectly with the unique modern design requirements, bringing a
                contemporary vision to life with traditional wood framing expertise.
              </p>
            </div>
            <div className="jll-case-study-visual">
              <img src="/beforeafter2.png" alt="Single Family Residence" />
              <div className="jll-case-badge">Custom Residential</div>
            </div>
          </div>

        </div>
      </section>

      {/* On-Site Grid - Refined Masonry */}
      <section className="jll-gallery-grid-section">
        <div className="jll-container">
          <div className="jll-section-header">
            <h2 className="jll-section-title">On-Site Progress</h2>
            <p className="jll-section-desc">Behind the scenes of our active construction sites throughout the Lower Mainland.</p>
          </div>

          <div className="jll-gallery-masonry">
            {galleryImages.map((src, index) => (
              <div key={index} className="jll-gallery-item">
                <img src={src} alt={`Project Snapshot ${index + 1}`} loading="lazy" />
                <div className="jll-item-overlay">
                  <span>Project View #{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="jll-gallery-cta">
        <div className="jll-container">
          <div className="jll-cta-content">
            <h2>Building the Future of Wood Framing</h2>
            <p>Work with a partner that values precision as much as you do.</p>
            <div className="jll-cta-buttons">
              <a href="/contact" className="jll-btn-primary">Request a Quote</a>
              <a href="/services" className="jll-btn-outline">Our Services</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
