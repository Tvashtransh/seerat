import React, { useState, useRef, useCallback } from "react";
import "./ImageComparison.css";

const ImageComparison = ({ beforeImage, afterImage, className = "" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`image-comparison-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
    >
      <div className="image-after">
        <img src={afterImage} alt="After" draggable="false" />
      </div>
      <div
        className="image-before"
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt="Before" draggable="false" />
      </div>
      <div
        className="comparison-slider"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-line" />
        <div className="slider-handle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 8 4 4-4 4" />
            <path d="M6 8l-4 4 4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
