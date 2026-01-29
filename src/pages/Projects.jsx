import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";

const projectItems = [
  {
    id: 1,
    title: "The Granary at Southlands",
    category: "Community Development",
    location: "Tsawwassen, BC",
    image: "/project-type-1.png",
    description: "Setsquare framed The Granary, Southlands' hub, blending a concrete parkade, wood-framed floors, and a ground-floor Four Winds space."
  },
  {
    id: 2,
    title: "Summerland Lakefront Custom",
    category: "Custom Residential",
    location: "Summerland, BC",
    image: "/project-type-2.png",
    description: "Crafted in the heart of a newly subdivided lakeside community. Our wood framing expertise played a crucial role in bringing to life a spacious home."
  },
  {
    id: 3,
    title: "100-Mile House Waterfront",
    category: "Timber Framing",
    location: "Interior BC",
    image: "/project-type-3.png",
    description: "Perched by the water near 100-Mile House, our wood framing work takes centre stage in a grand residential build spanning over 5000 sq.ft."
  },
  {
    id: 4,
    title: "Avana Townhomes",
    category: "Multi-Family",
    location: "Coquitlam, BC",
    image: "/project-type-4.png",
    description: "Nestled beside Cottonwood Park, Avana's 52 townhomes are a testament to thoughtful framing work."
  },
  {
    id: 5,
    title: "Boundary Bay Beach Home",
    category: "Custom Residential",
    location: "Delta, BC",
    image: "/project-type-5.png",
    description: "Pivotal role in shaping a single-family home in the charming neighbourhood of Boundary Beach, Delta."
  },
  {
    id: 6,
    title: "Garden Village Home",
    category: "Residential",
    location: "Burnaby, BC",
    image: "/project-type-6.png",
    description: "In the thriving Garden Village community of Burnaby, our wood framing expertise was showcased in a welcoming home."
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  // Consolidated Project Data with Links and standardized Locations for filtering
  const projectItems = [
    {
      id: 1,
      title: "The Granary at Southlands",
      category: "Community Development",
      location: "Tsawwassen, Delta, BC",
      filterLocation: "Delta",
      image: "/project-type-1.png",
      description: "Setsquare framed The Granary, Southlands' hub, blending a concrete parkade, wood-framed floors, and a ground-floor Four Winds space.",
      link: "/granary"
    },
    {
      id: 2,
      title: "Summerland Lakefront Custom",
      category: "Custom Residential",
      location: "Summerland, Interior, BC",
      filterLocation: "Interior, BC",
      image: "/project-type-2.png",
      description: "Crafted in the heart of a newly subdivided lakeside community. Our wood framing expertise played a crucial role in bringing to life a spacious home.",
      link: "/summerland-lakefront"
    },
    {
      id: 3,
      title: "100-Mile House Waterfront",
      category: "Timber Framing",
      location: "100-Mile House, Interior, BC",
      filterLocation: "Interior, BC",
      image: "/project-type-3.png",
      description: "Perched by the water near 100-Mile House, our wood framing work takes centre stage in a grand residential build spanning over 5000 sq.ft.",
      link: "/summerland-lakefront" // Reusing page as per user flow or create new if distinct? User linked 100-mile to Summerland logic previously.
    },
    {
      id: 4,
      title: "Avana Townhomes",
      category: "Multi-Family",
      location: "Burquitlam, Coquitlam, BC",
      filterLocation: "Coquitlam",
      image: "/project-type-4.png",
      description: "Nestled beside Cottonwood Park, Avana's 52 townhomes are a testament to thoughtful framing work.",
      link: "/avana-townhomes"
    },
    {
      id: 5,
      title: "Boundary Bay Beach Home",
      category: "Custom Residential",
      location: "Boundary Bay, Delta, BC",
      filterLocation: "Delta",
      image: "/project-type-5.png",
      description: "Pivotal role in shaping a single-family home in the charming neighbourhood of Boundary Beach, Delta.",
      link: "/boundary-bay-beach-home"
    },
    {
      id: 6,
      title: "Garden Village Home",
      category: "Residential",
      location: "Burnaby, BC",
      filterLocation: "Burnaby",
      image: "/project-type-6.png",
      description: "In the thriving Garden Village community of Burnaby, our wood framing expertise was showcased in a welcoming home.",
      link: "/burnaby-residential"
    },
    {
      id: 7,
      title: "Culmena Townhomes",
      category: "Townhouse Community",
      location: "1292 Rosenburg, Coquitlam, BC",
      filterLocation: "Coquitlam",
      image: "/project-type-4.png", // Using similar image type for now
      description: "Culmena, located at 1292 Rosenburg, is an exciting new development featuring 107 modern townhome units.",
      link: "/culmena"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLocationSelect = (loc) => {
    setLocationFilter(loc === "All" ? "" : loc);
    setShowLocationDropdown(false);
  };

  const filteredProjects = projectItems.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter ? project.filterLocation === locationFilter : true;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="projects-page">

      {/* 1. HEADER SECTION (Light Grey) */}
      <div className="projects-header-bg">
        <div className="projects-container">
          <NavLink to="/" className="breadcrumb">Home</NavLink>

          <div className="header-content">
            <div className="header-title">
              <h1>Our Projects</h1>
            </div>
            <div className="header-desc">
              <p>
                Across British Columbia, we partner with developers and homeowners to create
                lasting structures. Explore our portfolio, illustrating how we're building
                the future of framing with precision and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FILTER BAR (Sticky) */}
      <div className="filter-bar-container">
        <div className="filter-bar">

          {/* Keywords Search */}
          <div className="search-input-wrapper">
            <label className="filter-label">Keywords</label>
            <i className="search-icon">🔍</i>
            <input
              type="text"
              placeholder="Search by keywords"
              className="filter-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Dropdown Group */}
          <div className="filter-group">

            {/* Location Dropdown */}
            <div className="dropdown-wrapper" style={{ position: 'relative' }}>
              <button
                className={`filter-btn ${locationFilter ? 'active' : ''}`}
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                {locationFilter || "Location"} <span className="chevron">▼</span>
              </button>

              {showLocationDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={() => handleLocationSelect("All")}>All Locations</div>
                  <div className="dropdown-item" onClick={() => handleLocationSelect("Delta")}>Delta</div>
                  <div className="dropdown-item" onClick={() => handleLocationSelect("Coquitlam")}>Coquitlam</div>
                  <div className="dropdown-item" onClick={() => handleLocationSelect("Burnaby")}>Burnaby</div>
                  <div className="dropdown-item" onClick={() => handleLocationSelect("Vancouver")}>Vancouver</div>
                  <div className="dropdown-item" onClick={() => handleLocationSelect("Interior, BC")}>Interior, BC</div>
                </div>
              )}
            </div>

            <button className="filter-btn">
              Services <span className="chevron">▼</span>
            </button>
            <button className="filter-btn">
              Property types <span className="chevron">▼</span>
            </button>
          </div>

          {/* Search Button */}
          <button className="search-action-btn">
            Search
          </button>

        </div>
      </div>

      {/* 3. RESULTS GRID */}
      <div className="projects-results">
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <NavLink
              to={project.link || "#"}
              key={project.id}
              className="project-card"
            >
              <img src={project.image} alt={project.title} className="project-card-image" />

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  <span className="project-tag">{project.category}</span>
                  <span className="project-tag">{project.location}</span>
                </div>
              </div>

              <div className="card-arrow">&rarr;</div>
            </NavLink>
          ))}

          {filteredProjects.length === 0 && (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
              <h3>No projects found matching your criteria.</h3>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
