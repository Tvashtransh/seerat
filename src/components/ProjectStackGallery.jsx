import React from "react";
import "./ProjectStackGallery.css";

const ProjectStackGallery = ({ images }) => {
    if (!images || images.length === 0) return null;

    return (
        <div className="ps-stack-container">
            {images.map((imgSrc, index) => (
                <div className="ps-stacked-card" key={index}>
                    <div className="ps-card-inner">
                        <img src={imgSrc} alt={`Gallery image ${index + 1}`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectStackGallery;
