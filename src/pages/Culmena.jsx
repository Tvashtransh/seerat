import React, { useEffect } from "react";
import "./ProjectDetail.css";

export default function Culmena() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="project-detail-page">

            {/* Hero */}
            <section
                className="project-detail-hero animate-fade-up"
                style={{ backgroundImage: 'url(/culmena-assets/DJI_0953.JPG)' }}
            >
                <h1>CULMENA</h1>
                <span className="project-location-tag">1292 Rosenburg, Coquitlam, British Columbia</span>
            </section>

            {/* Section 1: The Task */}
            <section className="project-content-section animate-fade-up delay-100">
                <div className="project-text-block">
                    <h2>The Task</h2>
                    <span className="project-subtitle">Coquitlam's Multi-Family Development Project</span>
                    <p>
                        Culmena, located at 1292 Rosenburg, is an exciting new development currently in progress.
                        Designed by Tangerine Developments, this impressive project will feature 107 modern townhome units.
                    </p>
                </div>
                <div className="project-image-block">
                    <img src="/culmena-assets/DJI_0953.JPG" alt="Culmena Development" />
                </div>
            </section>

            {/* Section 2: Progress */}
            <section className="project-content-section reverse animate-fade-up delay-100">
                <div className="project-text-block">
                    <h2>Making Headway</h2>
                    <span className="project-subtitle">Revitalizing the Block</span>
                    <p>
                        We take pride in framing this development, as a whole city block is being revitalized to
                        accommodate these homes. Stay tuned to watch our progress unfold!
                    </p>
                </div>
                <div className="project-image-block">
                    <img src="/culmena-assets/DJI_0968.JPG" alt="Culmena Progress" />
                </div>
            </section>

        </div>
    );
}
