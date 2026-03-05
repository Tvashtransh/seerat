import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeCTA.css";

export default function HomeCTA() {
  return (
    <section className="ss-large-cta">
      <div className="jll-container ss-large-cta-grid">
        {/* Left Side: Large Heading Area */}
        <div className="ss-large-cta-left">
          <h2 className="ss-cta-big-text">
            It always<br />
            starts with a<br />
            conversation...
          </h2>
          {/* We put the buttons here or at the bottom depending on screen size, wait, in the image they are floating under the first column of the right side. Let's place them structurally below the right side content or just floating near bottom of left side if flex. */}
          <div className="ss-cta-buttons desktop-only">
            <NavLink to="/contact" className="ss-cta-btn-solid">
              Schedule a call
            </NavLink>
            <NavLink to="/projects" className="ss-cta-btn-outline">
              View Projects
            </NavLink>
          </div>
        </div>

        {/* Right Side: 3 Steps */}
        <div className="ss-large-cta-right">
          <div className="ss-cta-step">
            <span className="ss-step-number">01</span>
            <h3 className="ss-step-title">Consult</h3>
            <p className="ss-step-desc">
              By listening and asking questions, we advise on the best structural approach for your development. When you are ready... the plans are clear, realistic, and worth your investment.
            </p>
          </div>

          <div className="ss-cta-step">
            <span className="ss-step-number">02</span>
            <h3 className="ss-step-title">Plan</h3>
            <p className="ss-step-desc">
              When the project kicks off, we move fast. We review drawings, coordinate with architects, and double-check that every timber and truss is accounted for. You'll always know what's happening, and why.
            </p>
          </div>

          <div className="ss-cta-step">
            <span className="ss-step-number">03</span>
            <h3 className="ss-step-title">Build</h3>
            <p className="ss-step-desc">
              Then comes the best part, the execution. Timber raised, walls framed... One last inspection, and that moment when the structure becomes yours. Expect us to stay close after completion, ensuring the highest standards.
            </p>
          </div>

          <div className="ss-cta-buttons mobile-only">
            <NavLink to="/contact" className="ss-cta-btn-solid">
              Schedule a call
            </NavLink>
            <NavLink to="/projects" className="ss-cta-btn-outline">
              View Projects
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
