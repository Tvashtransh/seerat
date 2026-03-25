import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCTA from "../components/HomeCTA";
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
              <img src="/whyus-about.jpg" onError={(e) => e.target.src = '/project-type-assets/project-type-3.png'} alt="Narwinder Singh and Gurpreet Singh" />
              <div className="jll-image-caption">Narwinder & Gurpreet Singh - Founders</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - "Frame of Mind" */}
      <section className="ss-fom-section">
        <div className="jll-container">
          <div className="ss-fom-layout">
            
            {/* Left Column */}
            <div className="ss-fom-left">
              <span className="ss-fom-eyebrow">OUR FRAME OF MIND</span>
              <h2 className="ss-fom-heading">
                The core principles that guide every beam we place.
              </h2>
              <p className="ss-fom-description">
                At Setsquare Construction, we believe that how we build is just as important as what we build. Our core principles ensure every project is handled with precision, reliability, and integrity.
              </p>
              
              <Link to="/contact" className="ss-fom-btn">
                <span className="ss-fom-btn-text">Work With Us</span>
                <div className="ss-fom-btn-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>
            </div>

            {/* Right Column (List) */}
            <div className="ss-fom-right">
              
              <div className="ss-fom-item">
                <div className="ss-fom-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0921d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <div className="ss-fom-item-text">
                  <h3>Partnering</h3>
                  <p>We build lasting relationships. We view every project as a collaboration, working seamlessly with general contractors to solve problems before they arise.</p>
                </div>
              </div>

              <div className="ss-fom-item">
                <div className="ss-fom-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0921d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </div>
                <div className="ss-fom-item-text">
                  <h3>Delivering</h3>
                  <p>Consistency is our currency. From the first chalk line to the final inspection, we deliver dependable results that keep your schedule on track.</p>
                </div>
              </div>

              <div className="ss-fom-item">
                <div className="ss-fom-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0921d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="ss-fom-item-text">
                  <h3>Investing</h3>
                  <p>We invest in our people. Through advanced safety training and skill development, we foster a high-performance culture that takes pride in craftsmanship.</p>
                </div>
              </div>

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

          <div className="jll-marquee-container">
            <div className="jll-marquee-track">
              {/* Duplicate array for seamless infinite looping */}
              {[...Array(2)].map((_, index) => (
                <div key={index} className="jll-marquee-group">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeCTA />

    </div>
  );
}
