import React from "react";
import { Link } from "react-router-dom";
import { honoursAndRewards } from "../HonoursData";
import { motion } from "framer-motion";
import "../styles.css";

export function HonoursSection({ limit = 3 }) {
  const featuredHonours = honoursAndRewards.slice(0, limit);

  return (
    <section className="honours-section" id="honours">
        <div className="section-tag">[ Honours ]</div>
      <div className="section-title-container">
        <h2>Honours & Rewards</h2>
        <p>Recognitions, tournament wins, and cybersecurity accolades.</p>
      </div>

      <motion.div
        className="terminal cve-terminal-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <div className="terminal-head">
          <div className="lights">
            <i />
            <i />
            <i />
          </div>
          <span className="terminal-path">~/honours_preview.sh</span>
        </div>

        <div className="terminal-body">
          <div className="honours-grid">
            {featuredHonours.map((item, index) => (
              <div key={index} className="honour-card">
                <h3 className="honour-title">{item.name}</h3>
                <div className="honour-card-header">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="honour-link"
                    >
                      View Credential &rarr;
                    </a>
                  ) : (
                    <span className="honour-no-link">[Awarded]</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="cve-view-all-container">
            <Link to="/honours" className="btn-view-all">
              <span>View All Honours ({honoursAndRewards.length})</span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
