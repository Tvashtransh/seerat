import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function BurnabyResidential() {
  return (
    <ProjectPage
      heroImage="/burnaby-assets/burnaby-1.jpg"
      title="Burnaby Residential Home"
      location="Garden Village, Burnaby, British Columbia"
      meta={[
        { label: "Project Type", value: "Single-Family Residential" },
        { label: "Developer",    value: "Wallmark Homes" },
        { label: "Community",    value: "Garden Village, Burnaby" },
        { label: "Framing",      value: "Custom Wood Framing" },
      ]}
      intro={{
        eyebrow: "The Task",
        heading: "Framing a beautiful home in Garden Village.",
        body: "Setsquare Construction is proud to have played a role in wood framing a residential home project in the Garden Village community of Burnaby in collaboration with Wallmark Homes. We really enjoyed framing up this beautiful home which integrates seamlessly into the warm Garden Village community.",
      }}
      galleryStrips={[
        {
          position: "afterIntro",
          layout: "cols-2",
          images: [
            "/burnaby-assets/burnaby-1.jpg",
            "/burnaby-assets/burnaby-3.jpg",
          ],
          heights: ["tall", "tall"],
        },
      ]}
      sections={[
        {
          eyebrow: "Framing It Up",
          heading: "Precision aligned with Wallmark's vision.",
          body: "Our framing team focused on precision, quality craftsmanship, and structural integrity to ensure the framing aligned with Wallmark Homes' architectural vision. Every truss and stud was placed with purpose.",
          image: "/burnaby-assets/burnaby-2.jpg",
        },
        {
          eyebrow: "Making Headway",
          heading: "A solid foundation for every trade.",
          body: "As the project moved forward, the quality of the framing set a solid foundation for the rest of the build. Our commitment to staying on schedule without compromising quality made us a trusted partner on this Wallmark development.",
          image: "/burnaby-assets/burnaby-3.jpg",
          reverse: true,
        },
      ]}
      conclusionText={{
        eyebrow: "Completion",
        heading: "Proud to call this Wallmark home one of ours.",
        body: [
          "We successfully concluded the wood framing of the Garden Village project, Burnaby, in collaboration with Wallmark Homes. We're grateful to add this beautiful home to our portfolio.",
          "This project showcases Setsquare's wood framing craftsmanship aligned with the high standards of Wallmark Homes — a relationship we're proud to carry forward.",
        ],
      }}
      conclusionImages={[
        "/burnaby-assets/burnaby-1.jpg",
        "/burnaby-assets/burnaby-2.jpg",
        "/burnaby-assets/burnaby-3.jpg",
        "/burnaby-assets/burnaby-4.jpg",
      ]}
    />
  );
}
