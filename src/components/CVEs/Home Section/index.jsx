import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CVEs } from "../CVEsData";
import "../styles.css";

export function CveSection({ limit = 3 }) {
  const featuredCVEs = CVEs.slice(0, limit);

  return (
    <section className="cve-section" id="cves">
      <div className="section-tag">[ Security Disclosures ]</div>

      <div className="section-title-container">
        <h2>Common Vulnerabilities & Exposures</h2>
        <p>Documented security disclosures and vulnerability findings.</p>
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
          <span className="terminal-path">~/cve_disclosures_preview.sh</span>
        </div>

        <div className="terminal-body">
          <div className="cve-grid">
            {featuredCVEs.map((cve) => (
              <div key={cve.CVENumber} className="cve-card">
                <div className="cve-card-header">
                  <span className="cve-number">{cve.CVENumber}</span>
                  {cve["Vulnerable Product"] && (
                    <span className="cve-badge-product">
                      {cve["Vulnerable Product"].split(" ")[0]}
                    </span>
                  )}
                </div>
                <p className="cve-description">{cve.Description}</p>
                <div className="cve-footer">
                  <span className="ref-count">
                    {cve.References?.length || 0} References
                  </span>
                  <a
                    href={cve.References?.[0] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cve-link"
                  >
                    View Details &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="cve-view-all-container">
            <Link to="/cves" className="btn-view-all">
              <span>View All CVEs ({CVEs.length})</span>
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
