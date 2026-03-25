import React from "react";
import ProjectPage from "../components/ProjectPage";

export default function Culmena() {
  return (
    <ProjectPage
      heroImage="/culmena-assets/DJI_0953.JPG"
      title="Culmena Townhomes"
      location="1292 Rosenburg, Coquitlam, British Columbia"
      meta={[
        { label: "Project Type",  value: "Multi-Family Townhomes" },
        { label: "Units",         value: "107 Townhomes" },
        { label: "Developer",     value: "Tangerine Developments" },
        { label: "Location",      value: "Coquitlam, BC" },
      ]}
      intro={{
        eyebrow: "The Task",
        heading: "Coquitlam's Multi-Family Development Project.",
        body: "Culmena, located at 1292 Rosenburg, is an exciting new development currently in progress. Designed by Tangerine Developments, this impressive project will feature 107 modern townhome units, contributing significantly to the Burquitlam neighborhood.",
      }}
      galleryStrips={[
        {
          position: "afterIntro",
          layout: "cols-1-2",
          images: [
            "/culmena-assets/DJI_0950.JPG",
            "/culmena-assets/DJI_0951.JPG",
          ],
          heights: ["tall", "tall"],
        },
        {
          position: "afterIntro",
          layout: "cols-2",
          images: [
            "/culmena-assets/DJI_0961.JPG",
            "/culmena-assets/DJI_0963.JPG",
          ],
          heights: ["medium", "medium"],
        },
      ]}
      sections={[
        {
          eyebrow: "Making Headway",
          heading: "Revitalizing the Block.",
          body: "We take pride in framing this development, as a whole city block is being revitalized to accommodate these homes. Precision framing for 107 units requires meticulous planning and execution, and our team is delivering structural excellence floor by floor.",
          image: "/culmena-assets/DJI_0968.JPG",
        },
        {
          eyebrow: "Looking Forward",
          heading: "A new community rising.",
          body: "As the structures go up, the vision of a vibrant residential community becomes a reality. We are working closely with Tangerine Developments to ensure every detail meets the highest structural standards.",
          image: "/culmena-assets/DJI_0965.JPG",
          reverse: true,
        },
      ]}
      conclusionText={{
        eyebrow: "In Progress",
        heading: "Building for the future.",
        body: [
          "Our work on Culmena represents Setsquare's commitment to quality large-scale wood framing in the Lower Mainland. Integrating seamlessly with the community's vision, these townhomes are built to stand the test of time.",
          "Stay tuned as we continue to shape this entire city block in Coquitlam.",
        ],
      }}
      conclusionImages={[
        "/culmena-assets/DJI_0969.JPG",
        "/culmena-assets/DJI_0970.JPG",
        "/culmena-assets/DJI_0971.JPG",
        "/culmena-assets/DJI_0954.JPG",
      ]}
    />
  );
}
