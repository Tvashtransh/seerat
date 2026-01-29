import React, { useState, useEffect } from "react";
import "./MultiDevelopmentFraming.css";

export default function MultiDevelopmentFraming() {
  const images = [
    "/multi1.jpg", "/multi2.jpg", "/multi3.jpg",
    "/multi4.jpg", "/multi5.jpg", "/multi6.jpg",
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
    <div className="multi-page">

      {/* Hero */}
      <section className="multi-hero animate-fade-up">
        <h1>
          Multi-Development <span>Framing</span>
        </h1>
        <p>Building Efficiency into Every Frame.</p>
      </section>

      {/* Intro */}
      <section className="multi-intro animate-fade-up delay-100">
        <p>
          At Setsquare Construction, we're revolutionizing the construction
          industry with our cutting-edge multi-development framing services.
        </p>
        <p>
          Our innovative approach combines efficiency, cost-effectiveness,
          and customization to deliver unparalleled results for residential
          complexes and mixed-use developments.
        </p>
      </section>

      {/* Why Choose Grid */}
      <section className="why-choose">
        <h2 className="animate-fade-up">Why Choose Setsquare?</h2>
        <div className="choose-grid animate-fade-up delay-100">
          <div className="choose-card">
            <h3>Efficiency</h3>
            <p>
              Our streamlined processes ensure rapid project completion
              without compromising on quality.
            </p>
          </div>

          <div className="choose-card">
            <h3>Cost-Effectiveness</h3>
            <p>
              Innovative techniques optimize resources, saving time and money
              without cutting corners.
            </p>
          </div>

          <div className="choose-card">
            <h3>Customization</h3>
            <p>
              Tailored framing solutions to meet your project’s unique needs,
              regardless of scale or complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Slider */}
      <div className="slider-wrapper animate-fade-up">
        <div className="slider-monitor">
          <div className="slider-window">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, index) => (
                <div className="slide" key={index}>
                  <img src={img} alt={`Multi Development ${index + 1}`} />
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

      {/* Advantage */}
      <section className="advantage animate-fade-up">
        <h2>The Setsquare Advantage</h2>
        <div className="advantage-grid">
          <div className="advantage-card">
            <h3>Our Expertise in Action</h3>
            <p>
              Whether you're developing a sprawling residential complex or a
              dynamic mixed-use property, our framing services exceed expectations.
            </p>
          </div>

          <div className="advantage-card">
            <h3>Residential Complexes</h3>
            <p>
              We bring architectural visions to life with sturdy, efficient,
              and aesthetically pleasing structures that stand the test of time.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
