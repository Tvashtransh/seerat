import React, { useEffect } from "react";
import HomeCTA from "../components/HomeCTA";
import BentoGallery from "../components/ui/BentoGallery";
import ImageComparison from "../components/ui/ImageComparison";
import "./Gallery.css";

const bentoMediaItems = [
  {
    id: 1,
    type: "image",
    title: "Culmena Development",
    desc: "Large-scale community framing",
    url: "/culmena-assets/DJI_0950.JPG",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Project Flythrough",
    desc: "A closer look at our latest project.",
    url: "/culmena-assets/culmena v1.1.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Avana Community",
    desc: "Coquitlam townhome development",
    url: "/avana after/avana-aerial.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "The Granary",
    desc: "Southlands community hub",
    url: "/granary-assets/granary-1.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "video",
    title: "Structural Details",
    desc: "Precision wood framing",
    url: "/culmena-assets/DJI_0964.MP4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "Trout Lake Home",
    desc: "East Vancouver residential framing",
    url: "/troutlake-assets/troutlake-1.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "video",
    title: "Site Progress",
    desc: "Behind the scenes of our active sites.",
    url: "/culmena-assets/DJI_0975.MP4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
];

const galleryImages = [
  "/img-assets/img1.png", "/img-assets/img2.png", "/img-assets/img3.png", "/img-assets/img4.png",
  "/img-assets/img5.png", "/img-assets/img6.png", "/img-assets/img7.png", "/img-assets/img8.png",
  "/img-assets/img9.png", "/img-assets/img10.png"
];

export default function Gallery() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jll-gallery-page">


      <BentoGallery 
        items={bentoMediaItems}
        title="Gallery Shots Collection"
        description="A curated collection of our finest structural achievements and site progress."
      />

      {/* Featured Case Studies - Large Layout */}
      <section className="jll-case-studies">
        <div className="jll-container">

          <div className="jll-case-study">
            <div className="jll-case-study-visual">
              <ImageComparison 
                beforeImage="/avana-assets/avana1.jpg" 
                afterImage="/avana after/avana.jpg" 
              />
              <div className="jll-case-badge">Multi-Family</div>
            </div>
            <div className="jll-case-study-content">
              <span className="jll-case-location">Coquitlam, BC</span>
              <h2 className="jll-case-title">Avana Townhomes</h2>
              <p className="jll-case-desc">
                Setsquare Construction proudly contributed to the construction of
                Avana Townhomes at Cottonwood Park. This project resulted in the
                creation of a vibrant community comprising 52 units, where efficiency
                and structural integrity were the primary drivers.
              </p>
            </div>
          </div>

          <div className="jll-case-study reverse">
            <div className="jll-case-study-content">
              <span className="jll-case-location">Boundary Beach, Delta</span>
              <h2 className="jll-case-title">Single-Family Transformation</h2>
              <p className="jll-case-desc">
                We played a key role in transforming a 1970's rancher into a
                bright, spacious family home. Our precision framing aligned
                perfectly with the unique modern design requirements, bringing a
                contemporary vision to life with traditional wood framing expertise.
              </p>
            </div>
            <div className="jll-case-study-visual">
              <ImageComparison 
                beforeImage="/boundarybay-assets/boundarybay-1.jpg" 
                afterImage="/boundarybay-assets/boundarybay-2.jpg" 
              />
              <div className="jll-case-badge">Custom Residential</div>
            </div>
          </div>

        </div>
      </section>

      {/* On-Site Grid - Refined Masonry */}
      <section className="jll-gallery-grid-section">
        <div className="jll-container">
          <div className="jll-section-header">
            <h2 className="jll-section-title">On-Site Progress</h2>
            <p className="jll-section-desc">Behind the scenes of our active construction sites throughout the Lower Mainland.</p>
          </div>

          <div className="jll-gallery-masonry">
            {galleryImages.map((src, index) => (
              <div key={index} className="jll-gallery-item">
                <img src={src} alt={`Project Snapshot ${index + 1}`} loading="lazy" />
                <div className="jll-item-overlay">
                  <span>Project View #{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      <HomeCTA />

    </div>
  );
}
