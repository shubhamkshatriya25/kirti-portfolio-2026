import React, { useState, useMemo } from "react";
import { honoursAndRewards } from "../HonoursData";
import "../styles.css";

export function HonoursPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHonours = useMemo(() => {
    if (!searchQuery.trim()) return honoursAndRewards;
    const query = searchQuery.toLowerCase();
    return honoursAndRewards.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="cve-page-wrapper">
      <div className="cve-page-header">
        <h2>Honours & Rewards</h2>
      </div>

      <div className="cve-search-bar">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search by award title or keyword..."
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
          Showing <span>{filteredHonours.length}</span> of{" "}
          <span>{honoursAndRewards.length}</span> entries
        </div>
      </div>

      {filteredHonours.length === 0 ? (
        <div className="cve-no-results">
          <p>[!] No matching award records found for "{searchQuery}".</p>
        </div>
      ) : (
        <div className="cve-full-list">
          {filteredHonours.map((item, index) => (
            <div key={index} className="cve-full-card">

              <h3 className="honour-card-title">{item.name}</h3>

              {item.link ? (
                <div className="cve-references" style={{ borderTop: "1px dashed var(--border-subtle)", paddingTop: "12px", marginTop: "12px" }}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ref-link"
                  >
                    {item.link}
                  </a>
                </div>
              ) : (
                <div className="honour-no-link-text">
                  [Official Award / No External Link]
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}