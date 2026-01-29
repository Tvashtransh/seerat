import React, { useState, useEffect } from "react";
import "./TimberFraming.css";

export default function TimberFraming() {
  const images = [
    "/timber1.jpg", "/timber2.jpg",
    "/timber3.jpg", "/timber4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const next = () => {
    if (current < images.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="timber-page">

      {/* Hero */}
      <section className="timber-hero animate-fade-up">
        <h1>Timber <span>Framing</span></h1>
        <p>Building Dreams, One Frame at a Time.</p>
      </section>

      {/* Intro */}
      <section className="timber-intro animate-fade-up delay-100">
        <p>
          With years of expertise in crafting sturdy, beautiful structures for both residential homes and multi-family dwellings, we're here to turn your vision into reality.
        </p>
      </section>

      {/* Why Choose */}
      <section className="timber-why">
        <h2 className="animate-fade-up">Why Choose Timber Framing?</h2>
        <div className="why-grid animate-fade-up delay-100">
          <div className="why-card">
            <h3>Energy Efficiency</h3>
            <p>Our timber frames create a tight envelope, significantly reducing energy costs.</p>
          </div>
          <div className="why-card">
            <h3>Rapid Construction</h3>
            <p>Watch your dream home rise faster than traditional building methods allow.</p>
          </div>
          <div className="why-card">
            <h3>Superior ROI</h3>
            <p>Invest in a structure that stands the test of time, both in durability and value.</p>
          </div>
        </div>
      </section>

      {/* Slider */}
      <div className="slider-wrapper animate-fade-up">
        <div className="slider-monitor">
          <div className="slider-window">
            <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {images.map((img, index) => (
                <div className="slide" key={index}>
                  <img src={img} alt={`Timber Framing ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="slider-controls">
          <button className="slider-btn" onClick={prev} disabled={current === 0}>‹</button>
          <button className="slider-btn" onClick={next} disabled={current === images.length - 1}>›</button>
        </div>
      </div>

      {/* Process */}
      <section className="timber-process animate-fade-up">
        <h2>Our Process</h2>
        <div className="process-grid">
          <div className="process-card">
            <h3>Design Consultation</h3>
            <p>We start by understanding your vision, working closely with you to create a design that matches your dreams and needs.</p>
          </div>
          <div className="process-card">
            <h3>Precision Crafting</h3>
            <p>Our skilled artisans carefully select and prepare each timber, ensuring perfect fits and joints.</p>
          </div>
          <div className="process-card">
            <h3>On-Site Assembly</h3>
            <p>Watch in awe as your structure takes shape, with our expert team efficiently raising the frame on your property.</p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="timber-serve">
        <h2 className="animate-fade-up">Who We Serve</h2>
        <div className="serve-grid animate-fade-up delay-100">
          <div className="serve-card">
            <h3>Property Developers</h3>
            <p>Create unique, standout projects that attract discerning buyers.</p>
          </div>
          <div className="serve-card">
            <h3>Rural Homebuilders</h3>
            <p>Blend traditional craftsmanship with modern living in picturesque settings.</p>
          </div>
          <div className="serve-card">
            <h3>Luxury Homeowners</h3>
            <p>Elevate your living space with the unmatched beauty and strength of timber framing.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
