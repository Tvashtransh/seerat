import React, { useState, useEffect } from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "Narwinder Singh",
    role: "Founder",
    tags: ["Leadership", "Operations"],
    image: "/whyus-about.jpg",
  },
  {
    name: "Gurpreet Singh",
    role: "Founder",
    tags: ["Leadership", "Strategy"],
    image: "/frame-of-mind.jpg",
  },
  {
    name: "Alex Thompson",
    role: "Lead Foreman",
    tags: ["On-Site", "Framing"],
    image: "/granary-assets/granary-1.jpg",
  },
  {
    name: "David Chen",
    role: "Safety Officer",
    tags: ["Safety", "Compliance"],
    image: "/culmena-assets/DJI_0961.JPG",
  },
  {
    name: "Jas Johal",
    role: "Site Supervisor",
    tags: ["Management", "Planning"],
    image: "/avana-assets/avana1.jpg",
  },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getCardStyle = (index) => {
    let diff = (index - currentIndex + teamMembers.length) % teamMembers.length;
    
    // We only want to show 4 cards total. The active one (diff=0), and 3 behind it (1, 2, 3)
    // The rest should be hidden to the left or invisible.
    
    // Reverse the diff logically for visual stacking if it gets too high to prevent weird loops
    let logicalDiff = diff;
    if (logicalDiff > 3) logicalDiff = -1; // hide it

    if (logicalDiff === 0) {
      return {
        zIndex: 10,
        transform: "translateX(0) scale(1)",
        opacity: 1,
      };
    } else if (logicalDiff === 1) {
      return {
        zIndex: 9,
        transform: "translateX(160px) scale(0.85)",
        opacity: 0.8,
      };
    } else if (logicalDiff === 2) {
      return {
        zIndex: 8,
        transform: "translateX(280px) scale(0.7)",
        opacity: 0.45,
      };
    } else if (logicalDiff === 3) {
      return {
        zIndex: 7,
        transform: "translateX(360px) scale(0.55)",
        opacity: 0.2,
      };
    } else {
      // Hidden cards move to the left and fade out
      return {
        zIndex: 1,
        transform: "translateX(-150px) scale(1.1)",
        opacity: 0,
        pointerEvents: "none",
      };
    }
  };

  return (
    <div className="ss-team-page">
      
      {/* Left text block */}
      <div className="ss-team-left">
        <h1 className="ss-team-title">
          <span>MEET</span>
          <span className="italic">OUR</span>
          <span>TEAM</span>
        </h1>
        <p className="ss-team-desc">
          When you need the foundation built right, you can trust the expert craftsmen at Setsquare Construction.
        </p>
      </div>

      {/* Center Carousel */}
      <div className="ss-team-carousel-container">
        
        <div className="ss-team-cards-wrapper">
          {teamMembers.map((member, index) => {
            const isActive = index === currentIndex;
            return (
              <div 
                key={index} 
                className={`ss-team-card ${isActive ? 'active' : ''}`}
                style={getCardStyle(index)}
              >
                <img src={member.image} alt={member.name} />

                {/* Sub-info rendered globally for active card but attached geometrically to it */}
                <div className="ss-team-info">
                  <h3>{member.name}</h3>
                  <div className="ss-team-pills">
                    {member.tags.map(tag => (
                      <span key={tag} className="ss-team-pill">{tag.toUpperCase()}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Controls */}
      <div className="ss-team-controls">
        <button className="ss-team-nav-btn" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
        </button>
        <button className="ss-team-nav-btn" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
          </svg>
        </button>
      </div>

      {/* Counter */}
      <div className="ss-team-counter">
        {currentIndex + 1}
        <span>/ {teamMembers.length}</span>
      </div>

    </div>
  );
}
