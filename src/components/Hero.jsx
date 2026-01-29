import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const heroImageRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `
          translate3d(${x}px, ${y}px, 0) scale(1.08)
        `;
      }

      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `
          rotateY(${x / 4}deg)
          rotateX(${-y / 4}deg)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div className="hero-image" ref={heroImageRef} />
      <div className="hero-overlay" />

      <div className="hero-content" ref={heroContentRef}>
        <p className="hero-top-text">GET WOOD FRAMING WITH</p>

        <h1 className="hero-title">SETSQUARE CONSTRUCTION</h1>

        <p className="hero-phone">
          CALL <strong>604-832-7008</strong>
        </p>

        {/* NEW CONTENT FROM ORIGINAL SITE */}
        <h2 className="hero-subtitle">
          LOWER MAINLAND'S <br />
          <span>WOOD FRAMING EXPERTS</span>
        </h2>

        <p className="hero-description">
          We cater and contract to developers, general contractors, and homeowners.
          Setsquare Construction specializes in on-site prefab services, expert
          framing and forming for residential and commercial projects throughout
          Vancouver, Tsawwassen, Delta, Burnaby, Richmond, Coquitlam and the Metro
          Vancouver region.
        </p>

        <div className="hero-buttons">
          <NavLink to="/contact" className="btn-primary">
            Let's get wood framing
          </NavLink>

          <NavLink to="/projects" className="btn-outline">
            Our Projects
          </NavLink>
        </div>
      </div>
    </section>
  );
}
