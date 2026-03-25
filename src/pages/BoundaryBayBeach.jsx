import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function BoundaryBayBeach() {
  return (
    <ProjectPage
      heroImage="/boundarybay-assets/boundarybay-1.jpg"
      title="Boundary Bay Residential"
      location="Delta / Boundary Bay Beach, British Columbia"
      meta={[
        { label: "Project Type", value: "Single-Family Residential" },
        { label: "Location",     value: "Delta, BC" },
        { label: "Community",    value: "Boundary Bay" },
        { label: "Framing",      value: "Custom Wood Framing" },
      ]}
      intro={{
        eyebrow: "The Task",
        heading: "A custom home in one of BC's most scenic communities.",
        body: "Setsquare Construction played a pivotal role in shaping a single-family home in the charming neighbourhood of Boundary Bay, Delta. This build required sensitivity to the character of the area as much as structural precision.",
      }}
      galleryStrips={[
        {
          position: "afterIntro",
          layout: "cols-2",
          images: [
            "/boundarybay-assets/boundarybay-1.jpg",
            "/boundarybay-assets/boundarybay-2.jpg",
          ],
          heights: ["tall", "tall"],
        },
      ]}
      sections={[
        {
          eyebrow: "Framing It Up",
          heading: "Complementing the character of Boundary Bay.",
          body: "Precision and attention to detail were key as we framed this custom home, ensuring it complemented the unique character of the Boundary Bay community. Our team worked closely with the architect's vision to produce a structure as refined as its surroundings.",
          image: "/boundarybay-assets/boundarybay-2.jpg",
        },
        {
          eyebrow: "Making Headway",
          heading: "Structure set for a lifetime.",
          body: "Progress was steady as the structure took form, setting the stage for a beautiful residential addition to the area. Each phase was completed with precision to ensure the foundation was rock-solid for every trade to follow.",
          image: "/boundarybay-assets/boundarybay-3.jpg",
          reverse: true,
        },
      ]}
      conclusionText={{
        eyebrow: "Completion",
        heading: "A home that belongs in its landscape.",
        body: [
          "We successfully completed the framing for the Boundary Bay project in Delta. The end result is a structurally sound and aesthetically pleasing home that stands as a testament to our commitment to quality residential construction.",
          "This project is a proud addition to Setsquare's growing portfolio of custom residential builds across the Lower Mainland.",
        ],
      }}
      conclusionImages={[
        "/boundarybay-assets/boundarybay-1.jpg",
        "/boundarybay-assets/boundarybay-2.jpg",
        "/boundarybay-assets/boundarybay-3.jpg",
        "/boundarybay-assets/boundarybay-4.jpg",
      ]}
    />
  );
}
