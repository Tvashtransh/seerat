import React from "react";
import { motion } from "framer-motion";
import "./BentoGallery.css";

const BentoGallery = ({ items, title, description }) => {
  return (
    <div className="bento-wrapper">
      <div className="bento-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-title"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-subtitle"
        >
          {description}
        </motion.p>
      </div>

      <div className="bento-grid">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`bento-item ${item.span}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="bento-card">
              {item.type === "video" ? (
                <video 
                  src={item.url} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="bento-media" 
                />
              ) : (
                <img src={item.url} alt={item.title} className="bento-media" />
              )}
              <div className="bento-overlay">
                <div className="bento-content">
                  <span className="bento-tag">{item.type}</span>
                  <h3 className="bento-item-title">{item.title}</h3>
                  <p className="bento-item-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGallery;
