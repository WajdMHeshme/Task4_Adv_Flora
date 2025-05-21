import React, { useState } from "react";
import "./FiltringSection.css";
import { items } from "../../../Data";
type Category = "Residential" | "Commercial" | "Agriculture" | "Industrial";
export const Flitring: React.FC = () => {
  const [selected, setSelected] = useState<Category>("Residential");
  const categories: Category[] = [
    "Residential",
    "Commercial",
    "Agriculture",
    "Industrial",
  ];

  const filtered = items
    .filter((item) => item.category === selected)
    .slice(0, 3);
  return (
    <section className="filter-section">
      <div className="overflow">
        <nav className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`btn ${cat === selected ? "active" : ""}`}
            >
              {cat === "Residential"
                ? "Residential Property"
                : `${cat} Property`}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid">
        {filtered.map((item) => (
          <div data-aos = "zoom-in" key={item.id} className="card">
            <div className="image-wrapper">
              <img src={item.imageUrl} alt="img" className="image" />
              <div className="contentDesc">
                <span className="badge featured">Featured</span>

                <span className="badge threed">3D</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Flitring;
