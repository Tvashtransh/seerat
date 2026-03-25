import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function SummerlandLakefront() {
  return (
    <ProjectPage
      heroImage="/summerland-assets/summerland-2.jpg"
      title="Summerland Lakefront"
      location="Summerland, Okanagan, British Columbia"
      meta={[
        { label: "Project Type",  value: "Waterfront Custom Home" },
        { label: "Area",          value: "5,000+ sq ft" },
        { label: "Collaborator",  value: "Square Foot Construction" },
        { label: "Location",      value: "Summerland, BC" },
      ]}
      intro={{
        eyebrow: "The Task",
        heading: "A lakeside masterpiece near 100-Mile House.",
        body: "In collaboration with Square Foot Construction, Setsquare Construction had the privilege of wood framing a spectacular residential home near Summerland which features a dock for lakeside enjoyment. Perched by the water, this project required elegance in every beam.",
      }}
      galleryStrips={[
        {
          position: "afterIntro",
          layout: "cols-2",
          images: [
            "/summerland-assets/summerland-1.jpg",
            "/summerland-assets/summerland-2.jpg",
          ],
          heights: ["tall", "tall"],
        },
      ]}
      sections={[
        {
          eyebrow: "Framing It Up",
          heading: "Where structure meets the shoreline.",
          body: "The Summerland Waterfront home showcases our expertise in wood framing over 5,000 sq ft, blending structural integrity with the elegance of a lakeside retreat. Every detail was considered to complement the natural beauty of the Okanagan.",
          image: "/summerland-assets/summerland-2.jpg",
        },
        {
          eyebrow: "Making Headway",
          heading: "As inspiring as the view.",
          body: "Progress on the Summerland home was as inspiring as the view, with every beam and stud bringing us closer to a finished masterpiece by the water. Remote builds like this test a team's logistics and craftsmanship in equal measure.",
          image: "/summerland-assets/summerland-3.jpg",
          reverse: true,
        },
      ]}
      conclusionText={{
        eyebrow: "Completion",
        heading: "Standing proud beside the lake.",
        body: [
          "We successfully wood framed the Summerland Waterfront Project in collaboration with Square Foot Construction. This distinctive home, complete with a dock, stands as a beautiful addition to the lakeside.",
          "Ready to be enjoyed for years to come, this project demonstrates Setsquare's reach and capability beyond Metro Vancouver into the rest of British Columbia.",
        ],
      }}
      conclusionImages={[
        "/summerland-assets/summerland-1.jpg",
        "/summerland-assets/summerland-2.jpg",
        "/summerland-assets/summerland-3.jpg",
        "/summerland-assets/summerland-4.jpg",
      ]}
    />
  );
}
