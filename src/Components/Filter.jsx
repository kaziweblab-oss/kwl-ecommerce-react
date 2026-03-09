import React, { useState, useEffect } from "react";

import "./Filter.css";

export default function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  useEffect(() => {
    const handleFilterResize = () => {
      const width = window.innerWidth;
      if (width > 780) {
        setIsFilterOpen(true);
      } else {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener("resize", handleFilterResize);
    return () => {
      window.removeEventListener("resize", handleFilterResize);
    };
  }, []);

  let clickHandelar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="btn-section">
        <button className="filter-btn" onClick={clickHandelar}>
          Filter
        </button>
      </div>
      <div className={isFilterOpen ? "active" : "filter-section "}>
        <h1>Filters</h1>
        <hr />
        <div className="option">
          <label htmlFor="all">All : </label>
          <input type="checkbox" name="all" />
        </div>{" "}
        <div className="option">
          <label htmlFor="phone">Phone : </label>
          <input type="checkbox" name="phone" />
        </div>{" "}
        <div className="option">
          <label htmlFor="laptop">Laptop : </label>
          <input type="checkbox" name="laptop" />
        </div>{" "}
        <div className="option">
          <label htmlFor="tablet">Tablet : </label>
          <input type="checkbox" name="tablet" />
        </div>{" "}
        <div className="prize-range">
          <label htmlFor="prizeRange">
            <div><p>Prize Range : </p></div>
            <div>
              <span>Prize</span> <p>0$-1000$</p>
            </div>
          </label>
          <input
            className="range"
            type="range"
            min={0}
            max={1000}
            step={10}
            name="prizeRange"
          />
        </div>
      </div>
    </div>
  );
}
