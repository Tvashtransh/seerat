import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./WhyUs.css";

export default function WhyUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-whyus-page">

      {/* Cinematic Hero Section */}
      <section
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/whyus-about.jpg)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <h1>Built on Partnership</h1>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="jll-narrative-section">
        <div className="jll-container">
          <div className="jll-narrative-grid">
            <div className="jll-narrative-text">
              <span className="jll-eyebrow">Our Story</span>
              <h2>A Legacy of Uncompromising Quality</h2>
              <p>
                Founded by brothers Narwinder Singh & Gurpreet Singh, Setsquare Construction was established with a singular mission:
                to bring a higher standard of precision to the wood framing industry.
              </p>
              <p>
                What started as a small, family-run operation has grown into one of the Lower Mainland's most trusted framing partners.
                Our success isn't just measured in square footage, but in the enduring relationships we've built with developers,
                architects, and homeowners who demand the best.
              </p>
              <div className="jll-signature-block">
                <p className="jll-quote">"We don't just frame structures; we frame trust."</p>
              </div>
            </div>
            <div className="jll-narrative-image">
              <img src="/whyus-about.jpg" onError={(e) => e.target.src = '/project-type-3.png'} alt="Narwinder Singh and Gurpreet Singh" />
              <div className="jll-image-caption">Narwinder & Gurpreet Singh - Founders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - "Frame of Mind" */}
      <section className="jll-values-stripe">
        <div className="jll-container">
          <div className="jll-section-header-center">
            <h2>Our Frame of Mind</h2>
            <p className="jll-lead-center">The core principles that guide every beam we place.</p>
          </div>

          <div className="jll-values-row">
            <div className="jll-value-col">
              <div className="jll-value-number">01</div>
              <h3>Partnering</h3>
              <p>We build lasting relationships. We view every project as a collaboration, working seamlessly with general contractors to solve problems before they arise.</p>
            </div>
            <div className="jll-value-col">
              <div className="jll-value-number">02</div>
              <h3>Delivering</h3>
              <p>Consistency is our currency. From the first chalk line to the final inspection, we deliver dependable results that keep your schedule on track.</p>
            </div>
            <div className="jll-value-col">
              <div className="jll-value-number">03</div>
              <h3>Investing</h3>
              <p>We invest in our people. Through advanced safety training and skill development, we foster a high-performance culture that takes pride in craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Clients Section */}
      <section className="jll-partners-section">
        <div className="jll-container">
          <div className="jll-split-header">
            <h2>Trusted Partners</h2>
            <Link to="/projects" className="jll-link-arrow">View Our Work &rarr;</Link>
          </div>

          <div className="jll-partners-grid">
            {/* Partner Logos */}
            <div className="jll-partner-card">
              <img src="/bluecity-logo.png" alt="BlueCity Construction" />
              <span>BlueCity Construction</span>
            </div>
            <div className="jll-partner-card">
              <img src="/squarefoot-logo.png" alt="Square Foot Construction" />
              <span>Square Foot Construction</span>
            </div>
            <div className="jll-partner-card">
              <img src="/tatla-logo.png" alt="Tatla Developments" />
              <span>Tatla Developments</span>
            </div>
            <div className="jll-partner-card">
              <img src="/newvision-logo.png" alt="New Vision Projects" />
              <span>New Vision Projects</span>
            </div>
            <div className="jll-partner-card">
              <img src="/wallmark-logo.png" alt="Wallmark Custom Homes" />
              <span>Wallmark Custom Homes</span>
            </div>
            <div className="jll-partner-card">
              <img src="/jdl-logo.png" alt="JDL Homes" />
              <span>JDL Homes</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="jll-cta-band">
        <div className="jll-container">
          <h2>Ready to start your next project?</h2>
          <Link to="/contact" className="jll-btn-white">Contact Us</Link>
        </div>
      </section>

    </div>
  );
}
