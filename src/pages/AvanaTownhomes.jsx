import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function AvanaTownhomes() {
  return (
    <ProjectPage
      heroImage="/avana after/avana-aerial.jpg"
      title="Avana Townhomes"
      location="Cottonwood Park, Burquitlam, Coquitlam, British Columbia"
      meta={[
        { label: "Project Type",  value: "Multi-Family Townhomes" },
        { label: "Units",         value: "52 Townhomes" },
        { label: "Developer",     value: "Tangerine Developments" },
        { label: "Location",      value: "Coquitlam, BC" },
      ]}
      intro={{
        eyebrow: "The Task",
        heading: "52 townhomes woven into the Burquitlam community.",
        body: "Setsquare Construction has successfully contributed to the wood framing of the Avana townhome development nestled beside Cottonwood Park in Burquitlam, Coquitlam. This project is a testament to thoughtful design, community integration, and structural precision at scale.",
      }}
      galleryStrips={[
        {
          position: "afterIntro",
          layout: "cols-1-2",
          images: [
            "/avana after/avana-courtyard.jpg",
            "/avana-assets/avana1.jpg",
          ],
          heights: ["tall", "tall"],
        },
        {
          position: "afterIntro",
          layout: "cols-2",
          images: [
            "/avana-assets/avana2.jpg",
            "/avana after/avana-kitchen.jpg",
          ],
          heights: ["medium", "medium"],
        },
      ]}
      sections={[
        {
          eyebrow: "Framing It Up",
          heading: "Precision across 52 homes.",
          body: "Precision and efficiency were crucial as we framed these 52 townhomes, ensuring structural soundness while adhering to the highest standards of construction. Complex repeated framing across multiple buildings demanded a team that could work fast without sacrificing detail.",
          image: "/avana-assets/avana1.jpg",
        },
        {
          eyebrow: "Making Headway",
          heading: "A neighbourhood taking shape.",
          body: "The development quickly took shape, transforming the site into a vibrant residential community perfectly positioned near local amenities — Skytrain, YMCA, and Cottonwood Park all within easy reach of future residents.",
          image: "/avana-assets/avana2.jpg",
          reverse: true,
        },
      ]}
      conclusionText={{
        eyebrow: "Completion",
        heading: "52 homes. One proud community.",
        body: [
          "We are proud to have completed the framing for Avana, a development by Tangerine Developments. These 52 townhomes now stand ready to welcome families, offering easy access to the Skytrain, YMCA, and Cottonwood Park.",
          "Avana represents Setsquare's ability to deliver consistent, high-quality framing at scale while integrating seamlessly with tight community design constraints.",
        ],
      }}
      conclusionImages={[
        "/avana after/avana.jpg",
        "/avana after/avana-living.jpg",
        "/avana after/avana-aerial.jpg",
        "/avana after/avana-courtyard.jpg",
      ]}
    />
  );
}
