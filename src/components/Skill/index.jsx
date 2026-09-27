import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const SKILL_CATEGORIES = [
  {
    title: "Recon & Enumeration",
    tools: [
      "dig",
      "Maltego",
      "Nmap",
      "recon-ng",
    ],
  },
  {
    title: "Vulnerability Scanning & Exploitation",
    tools: [
      "Burp Suite",
      "Dirsearch",
      "fuzzing (ffuf, wfuzz)",
    ],
  },
  {
    title: "Post-Exploitation & Reporting",
    tools: [
      "Impacket tools",
      "Manual enumeration",
      "Markdown/HTML reporting",
    ],
  },
  {
    title: "Red Team Basics",
    tools: [
      "custom scripts",
      "Payload creation",
      "phishing simulations",
    ],
  },
];

export function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-tag">[ Technical Skills ]</div>
      <div className="skills-header">
        <h2>Skills &amp; Expertise</h2>
        <p>A comprehensive toolkit for offensive and defensive security operations</p>
      </div>

    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.35, duration: 0.5 }}
      > 
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div className="skill-card" key={idx}>
            <div className="card-header">
              <h4>{cat.title}</h4>
            </div>

            <div className="tools-wrapper">
              {cat.tools.map((tool, tIdx) => (
                <span className="tool-chip" key={tIdx}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </section>
  );
}