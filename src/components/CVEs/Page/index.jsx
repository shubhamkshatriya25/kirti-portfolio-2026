import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CVEs } from "../CVEsData";
import "../styles.css";

export function CvePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCVEs = useMemo(() => {
    if (!searchQuery.trim()) return CVEs;
    const query = searchQuery.toLowerCase();
    return CVEs.filter(
      (cve) =>
        cve.CVENumber.toLowerCase().includes(query) ||
        cve.Description.toLowerCase().includes(query) ||
        (cve["Vulnerable Product"] &&
          cve["Vulnerable Product"].toLowerCase().includes(query)),
    );
  }, [searchQuery]);

  return (
    <div className="cve-page-wrapper">
      <div className="cve-page-header">
        <h2>Security Disclosures & CVEs</h2>
      </div>

      <div className="cve-search-bar">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search by CVE ID, vendor, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <button
                  className="clear-search"
                  onClick={() => setSearchQuery("")}
                >
                  [clear]
                </button>
              )}
            </div>
            <div className="search-stats">
              Showing <span>{filteredCVEs.length}</span> of{" "}
              <span>{CVEs.length}</span> entries
            </div>
          </div>

          {filteredCVEs.length === 0 ? (
            <div className="cve-no-results">
              <p>[!] No matching CVE records found for "{searchQuery}".</p>
            </div>
          ) : (
            <div className="cve-full-list">
              {filteredCVEs.map((cve) => (
                <div key={cve.CVENumber} className="cve-full-card">
                  <div className="cve-card-top">
                    <div className="cve-identity">
                      <span className="cve-number-badge">{cve.CVENumber}</span>
                      {cve["Vulnerable Product"] && (
                        <span className="cve-product-tag">
                          {cve["Vulnerable Product"]}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="cve-full-desc">{cve.Description}</p>

                  {cve.References && cve.References.length > 0 && (
                    <details className="cve-references">
                      <summary className="ref-summary">References</summary>
                      <ul className="ref-list">
                        {cve.References.map((refUrl, idx) => (
                          <li key={idx}>
                            <a
                              href={refUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ref-link"
                            >
                              {refUrl}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              ))}
            </div>
          )}
    </div>
  );
}
