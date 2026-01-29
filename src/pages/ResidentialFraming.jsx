import React, { useState, useEffect } from "react";
import "./ResidentialFraming.css";

export default function ResidentialFraming() {
  const images = [
    "/res1.jpg", "/res2.jpg", "/res3.jpg",
    "/res4.jpg", "/res5.jpg", "/res6.jpg",
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
    <div className="residential-page">

      {/* Hero */}
      <section className="res-hero animate-fade-up">
        <h1>Residential <span>Framing</span></h1>
        <p>Elevate Your Vision.</p>
      </section>

      {/* Intro */}
      <section className="res-intro animate-fade-up delay-100">
        <p>
          At Setsquare Construction, we don't just build frames; we craft the foundations of your dreams.
          Specializing in residential framing, we bring your architectural visions to life with precision,
          passion, and unparalleled expertise.
        </p>
      </section>

      {/* Signature Services */}
      <section className="signature-services">
        <h2 className="animate-fade-up">Our Signature Services</h2>
        <div className="services-grid animate-fade-up delay-100">
          <div className="service-card">
            <h3>New Home Construction</h3>
            <p>
              Transform empty lots into vibrant communities. Our team excels in framing multi-unit residential projects, ensuring each structure is built to last.
            </p>
          </div>

          <div className="service-card">
            <h3>Additions & Renovations</h3>
            <p>
              Breathe new life into existing spaces. Whether you're expanding a single unit or renovating an entire complex, our experts ensure seamless integration.
            </p>
          </div>

          <div className="service-card">
            <h3>Post-and-Beam Structures</h3>
            <p>
              Blend natural beauty with modern living. Our timber framing services create stunning, eco-friendly structures that stand the test of time.
            </p>
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
                  <img src={img} alt={`Residential Framing ${index + 1}`} />
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
      <section className="res-advantage animate-fade-up">
        <h2>The Setsquare Advantage</h2>
        <div className="advantage-grid">
          <div className="advantage-card">
            <h3>Specialized Techniques</h3>
            <p>
              Our team employs cutting-edge framing methods, ensuring superior quality and efficiency.
            </p>
          </div>

          <div className="advantage-card">
            <h3>Faster Completion Times</h3>
            <p>
              We understand time is money. Our streamlined processes mean your project is completed swiftly without compromising on quality.
            </p>
          </div>

          <div className="advantage-card">
            <h3>Custom Design Capabilities</h3>
            <p>
              Your vision is unique, and so are our solutions. We work closely with architects and designers to bring even the most ambitious concepts to life.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
