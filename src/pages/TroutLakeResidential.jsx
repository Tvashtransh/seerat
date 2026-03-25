import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function TroutLakeResidential() {
  return (
    <ProjectPage
      heroImage="/troutlake-assets/troutlake-1.jpg"
      title="Trout Lake Residential"
      location="East Vancouver, Lower Mainland, British Columbia"
      meta={[
        { label: "Project Type", value: "Single-Family Residential" },
        { label: "Developer",    value: "Wallmark Homes" },
        { label: "Community",    value: "Trout Lake, East Vancouver" },
        { label: "Framing",      value: "Custom Wood Framing" },
      ]}
      intro={{
        eyebrow: "The Task",
        heading: "A distinctive home in the heart of East Vancouver.",
        body: "In collaboration with Wallmark Homes, Setsquare Construction contributed to the wood framing of a distinctive house build near Trout Lake, Vancouver. This unique home stands as part of the heart of the vibrant and welcoming community in East Vancouver.",
      }}
      galleryStrips={[
        {
          position: "afterIntro",
          layout: "cols-2",
          images: [
            "/troutlake-assets/troutlake-1.jpg",
            "/troutlake-assets/troutlake-2.jpg",
          ],
          heights: ["tall", "tall"],
        },
      ]}
      sections={[
        {
          eyebrow: "Framing It Up",
          heading: "Precision for a distinctive build.",
          body: "Precision and attention to detail were paramount as we framed this distinctive East Vancouver home. The architecture demanded a team that could move with care and accuracy — two hallmarks the Setsquare crew bring to every site.",
          image: "/troutlake-assets/troutlake-2.jpg",
        },
        {
          eyebrow: "Making Headway",
          heading: "Character reflected in every frame.",
          body: "As the frame came together, the home began to reflect the character of its surroundings, blending modern construction with the area's unique charm. Working near Trout Lake gave our team an appreciation for the community this home would become part of.",
          image: "/troutlake-assets/troutlake-3.jpg",
          reverse: true,
        },
      ]}
      conclusionText={{
        eyebrow: "Completion",
        heading: "A proud addition to the Trout Lake community.",
        body: [
          "We successfully concluded the framing of the Trout Lake House project in Vancouver, in collaboration with Wallmark Homes. The single-family home not only fulfills the functional needs of its occupants but also contributes to the aesthetic and character of the Trout Lake community.",
          "The East Vancouver home project represents a noteworthy addition to our portfolio, showcasing our expertise in framing residential builds with care and community in mind.",
        ],
      }}
      conclusionImages={[
        "/troutlake-assets/troutlake-1.jpg",
        "/troutlake-assets/troutlake-2.jpg",
        "/troutlake-assets/troutlake-3.jpg",
        "/troutlake-assets/troutlake-4.jpg",
      ]}
    />
  );
}
