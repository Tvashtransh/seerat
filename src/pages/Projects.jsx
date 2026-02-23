import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Projects.css";

const initialProjectItems = [
  {
    id: 1,
    title: "The Granary at Southlands",
    category: "Community Development",
    location: "Tsawwassen, Delta, BC",
    filterLocation: "Delta",
    image: "/granary-assets/granary-1.jpg",
    description: "Southlands' marketing hub featuring a concrete parkade, wood-framed floors, and retail space.",
    link: "/granary"
  },
  {
    id: 2,
    title: "Summerland Lakefront Custom",
    category: "Custom Residential",
    location: "Summerland, Interior, BC",
    filterLocation: "Interior, BC",
    image: "/project-type-2.png",
    description: "A spacious lakeside home crafted in the heart of a newly subdivided community.",
    link: "/summerland-lakefront"
  },
  {
    id: 3,
    title: "100-Mile House Waterfront",
    category: "Timber Framing",
    location: "100-Mile House, Interior, BC",
    filterLocation: "Interior, BC",
    image: "/project-type-3.png",
    description: "Grand residential build spanning over 5000 sq.ft perched by the water.",
    link: "/summerland-lakefront" // Linked to Summerland as per original code logic
  },
  {
    id: 4,
    title: "Avana Townhomes",
    category: "Multi-Family",
    location: "Burquitlam, Coquitlam, BC",
    filterLocation: "Coquitlam",
    image: "/project-type-4.png",
    description: "52 townhomes nestled beside Cottonwood Park, showcasing thoughtful framing work.",
    link: "/avana-townhomes"
  },
  {
    id: 5,
    title: "Boundary Bay Beach Home",
    category: "Custom Residential",
    location: "Boundary Bay, Delta, BC",
    filterLocation: "Delta",
    image: "/project-type-5.png",
    description: "Pivotal role in shaping a single-family home in the charming neighbourhood of Boundary Beach.",
    link: "/boundary-bay-beach" // Corrected link
  },
  {
    id: 6,
    title: "Garden Village Home",
    category: "Residential",
    location: "Burnaby, BC",
    filterLocation: "Burnaby",
    image: "/project-type-6.png",
    description: "Welcoming home in the thriving Garden Village community of Burnaby.",
    link: "/burnaby-residential"
  },
  {
    id: 7,
    title: "Culmena Townhomes",
    category: "Townhouse Community",
    location: "1292 Rosenburg, Coquitlam, BC",
    filterLocation: "Coquitlam",
    image: "/project-type-4.png",
    description: "Exciting new development featuring 107 modern townhome units at 1292 Rosenburg.",
    link: "/culmena"
  }
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = initialProjectItems.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "All" || project.filterLocation === locationFilter;
    const matchesCategory = categoryFilter === "All" || project.category === categoryFilter;

    return matchesSearch && matchesLocation && matchesCategory;
  });

  const locations = ["All", "Delta", "Coquitlam", "Burnaby", "Vancouver", "Interior, BC"];
  const categories = ["All", "Multi-Family", "Custom Residential", "Community Development", "Timber Framing"];

  return (
    <div className="jll-projects-page">

      {/* Cinematic Hero Header */}
      <section
        className="page-hero animate-fade-in"
        style={{ backgroundImage: 'url(/project-tsawwassen.jpg)' }}
      >
        <div className="page-hero-content animate-fade-up delay-100">
          <h1>Our Portfolio</h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="jll-filter-bar-sticky">
        <div className="jll-filter-container">

          <div className="jll-search-wrapper">
            <span className="jll-search-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <input
              type="text"
              placeholder="Keyword search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="jll-search-input"
            />
          </div>

          <div className="jll-filter-group">
            <div className="jll-select-wrapper">
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="jll-select"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc === "All" ? "All Locations" : loc}</option>)}
              </select>
            </div>

            <div className="jll-select-wrapper">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="jll-select"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat === "All" ? "All Sectors" : cat}</option>)}
              </select>
            </div>
          </div>

          <div className="jll-results-count">
            {filteredProjects.length} Result{filteredProjects.length !== 1 ? 's' : ''}
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="jll-projects-grid-section">
        <div className="jll-project-cards-grid">
          {filteredProjects.map((project) => (
            <Link to={project.link} key={project.id} className="jll-project-card">
              <div className="jll-project-image-container">
                <img src={project.image} alt={project.title} className="jll-project-image" />
              </div>
              <div className="jll-project-details">
                <h3 className="jll-project-title">{project.title}</h3>
                <p className="jll-project-desc">{project.description}</p>

                {/* JLL Style Tags */}
                <div className="jll-project-tags">
                  <span className="jll-project-tag">{project.category}</span>
                  {project.location && <span className="jll-project-tag">{project.location.split(',')[0]}</span>}
                </div>

                <div className="jll-card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </Link>
          ))}

          {filteredProjects.length === 0 && (
            <div className="jll-no-results">
              <h3>No projects found matching your criteria.</h3>
              <button
                className="jll-btn-reset"
                onClick={() => { setSearchTerm(""); setLocationFilter("All"); setCategoryFilter("All"); }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
