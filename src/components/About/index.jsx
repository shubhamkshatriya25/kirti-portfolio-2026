import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './styles.css'

export function About() {
  const [activeImage, setActiveImage] = useState(null);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
      alt: "moment",
      caption: "moment",
      pinColor: "#00e7ff",
      rotation: 2,
      top: "50%",
      left: "10%",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=800",
      alt: "moment",
      caption: "moment",
      pinColor: "#ffbd2e",
      rotation: -8,
      top: "50%",
      left: "60%",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      alt: "moment",
      caption: "moment",
      pinColor: "#ff3158",
      rotation: -3,
      top: "0%",
      left: "40%",
    },
  ];

  const handleMouseEnter = (photo) => {
    if (window.matchMedia("(hover: hover)").matches) {
      setActiveImage(photo);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: hover)").matches) {
      setActiveImage(null);
    }
  };

  const handleClick = (photo) => {
    if (!window.matchMedia("(hover: hover)").matches) {
      setActiveImage((prev) => (prev?.id === photo.id ? null : photo));
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="section-tag">[ About Me ]</div>

      <div className="about-grid">
        <motion.aside
          className="terminal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="terminal-head">
            <div className="lights"><i /><i /><i /></div>
          </div>
          <div className="terminal-body">
            <h2>Hello, I'm Kirti 👋</h2>
          <p>
            Think of my website as a fortress, protecting valuable information from
            cyber threats. As a PenTester, I'm like a knight in shining armor,
            defending against malicious attacks. My skills as a professional eSports
            player are like a secret weapon, helping me outmaneuver and defeat my
            opponents. Just like a gardener tends to a garden, I enjoy contributing
            to the security of open-source projects. In 2019, I played the regional
            qualifiers of the World Cyber Games and soared to a 7th place finish in
            it, solidifying my spot among the top 32 players in the world. You can
            call me FaLcOn, just like how a falcon is known for its precision and
            agility.
          </p>
          <p>
            I'm also a practitioner of VA/PT, Competitive Programming and
            MUNning, like a multi-talented artist with many brushes in my toolbox.
            Currently, I'm focusing on fortifying the defenses of browsers and
            android devices.
          </p>
          </div>
        </motion.aside>
        <div className="pegboard-container">
          <div className="pegboard">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="mini-polaroid"
                style={{
                  "--rot": `${photo.rotation}deg`,
                  top: photo.top,
                  left: photo.left,
                }}
                onMouseEnter={() => handleMouseEnter(photo)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(photo)}
              >
                <div 
                  className="push-pin" 
                  style={{ backgroundColor: photo.pinColor }} 
                />
                <img src={photo.src} alt={photo.alt} />
                <span className="handwritten-caption">{photo.caption}</span>
              </div>
            ))}
          </div>

          {activeImage && (
            <div 
              className="large-polaroid-popup"
              onMouseEnter={() => handleMouseEnter(activeImage)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveImage(null)}
            >
              <div className="large-polaroid-frame">
                <img src={activeImage.src} alt={activeImage.alt} />
                <span className="large-caption">{activeImage.caption}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}