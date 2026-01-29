import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeCTA.css";

export default function HomeCTA() {
  return (
    <section className="home-cta">
      <h2>Let’s Build Something Great Together</h2>
      <NavLink to="/contact" className="cta-btn">
        Get a Free Quote
      </NavLink>
    </section>
  );
}
