import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function Granary() {
  return (
    <ProjectPage
      heroImage="/granary after/LAP0658_MotivGranary_0061.webp"
      title="The Granary"
      location="Tsawwassen / Boundary Bay, British Columbia"
      meta={[
        { label: "Project Type", value: "Community Development" },
        { label: "Scope", value: "Wood Framing — 80,000 sq ft" },
        { label: "Location", value: "Tsawwassen, BC" },
        { label: "Stories", value: "Multi-Storey Mixed-Use" },
      ]}
      intro={{
        eyebrow: "The Task",
        heading: "Framing the heart of Southlands community.",
        body:
          "'The Granary' sits at the heart of the Southlands community, a vibrant agriculture-hood rooted in farming and food. Collaborating with multiple contractors, Setsquare Construction took on the challenge of framing the upper floors of this mixed-use building, which sits atop a concrete parkade and ground floor.",
      }}
      galleryStrips={[
        {
          position: "afterIntro",
          layout: "cols-1-2",
          images: [
            "/granary after/southlands-the-granary-woonerf.jpg",
            "/granary-assets/granary-1.jpg",
          ],
          heights: ["tall", "tall"],
        },
        {
          position: "afterIntro",
          layout: "cols-3",
          images: [
            "/granary-assets/granary-2.jpg",
            "/granary-assets/granary-3.jpg",
            "/granary after/the-granary-at-southlands-british-columbia-canada-housing-m050525-a-2.webp",
          ],
          heights: ["medium", "medium", "medium"],
        },
      ]}
      sections={[
        {
          eyebrow: "Framing It Up",
          heading: "Precision at 80,000 sq ft.",
          body: "The project required precision as we framed the 80,000 sq ft structure, ensuring seamless integration between the concrete base and the wood-framed upper levels. Our team worked diligently to support the creation of this central hub for the Southlands community.",
          image: "/granary-assets/granary-4.jpg",
        },
        {
          eyebrow: "Making Headway",
          heading: "Taking shape floor by floor.",
          body: "As the frame rose, The Granary began to take shape as the future home of Four Winds Brewing and other local businesses, embodying the spirit of the Southlands community. Complex coordination with concrete and mechanical trades required our team to operate with surgical precision.",
          image: "/granary-assets/granary-3.jpg",
          reverse: true,
        },
      ]}
      conclusionText={{
        eyebrow: "Completion",
        heading: "A landmark standing proud.",
        body: [
          "We are proud to have been part of building The Granary, a landmark structure in Tsawwassen. Today, it stands as a bustling hub where the community gathers, grounded in the rich agricultural tradition of the area.",
          "This project demonstrates Setsquare's capability to deliver precision on complex, multi-trade mixed-use developments on time and to the highest structural standard.",
        ],
      }}
      conclusionImages={[
        "/granary after/LAP0658_MotivGranary_0072.webp",
        "/granary after/LAP0658_MotivGranary_0118.webp",
        "/granary after/LAP0658_MotivGranary_0155.webp",
        "/granary after/southlands-the-granary-woonerf.jpg",
      ]}
    />
  );
}
