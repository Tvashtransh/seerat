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
    <div className="gallery-page">

      {/* Intro */}
      <section className="gallery-hero animate-fade-up">
        <h1>Our Portfolio</h1>
        <p>
          A visual journey through our precision wood framing,
          from complex multi-family developments to custom single-family homes.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="gallery-featured">

        {/* Project 1 */}
        <div className="featured-project animate-fade-up delay-100">
          <div className="project-visual">
            <img src="/beforeafter1.png" alt="Multi-Residential Development" />
          </div>
          <div className="project-info">
            <span className="project-location">Coquitlam, BC</span>
            <h2>Avana Townhomes</h2>
            <p>
              Setsquare Construction proudly contributed to the construction of
              Avana Townhomes at Cottonwood Park. This project resulted in the
              creation of a vibrant community comprising 52 units.
            </p>
          </div>
        </div>

        {/* Project 2 - Alt Layout */}
        <div className="featured-project alt animate-fade-up delay-200">
          <div className="project-info">
            <span className="project-location">Boundary Beach, Delta</span>
            <h2>Single-Family Transformation</h2>
            <p>
              We played a key role in transforming a 1970's rancher into a
              bright, spacious family home. Our precision framing aligned
              perfectly with the unique modern design requirements.
            </p>
          </div>
          <div className="project-visual">
            <img src="/beforeafter2.png" alt="Single Family Residence" />
          </div>
        </div>

      </section>

      {/* Grid Gallery */}
      <section className="gallery-grid-section">
        <div className="container-large">
          <h2 className="animate-fade-up">On Site Snapshots</h2>
          <div className="gallery-masonry animate-fade-up delay-200">
            {galleryImages.map((src, index) => (
              <div key={index} className="gallery-item">
                <img src={src} alt={`Project Snapshot ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
