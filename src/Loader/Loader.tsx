// src/components/Loader.tsx
import React from "react";
import "./loader.css";

export const Loader: React.FC = () => {
  // نصنع مصفوفة بطول 16 من الفهارس [0..15]
  const cuboids = Array.from({ length: 16 }, (_, i) => i);
  // ولكل cuboid نصنع 6 جوانب
  const sides = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="loader">
      <div className="text">
        <h1>
         Fl<span>o</span>ra
          
        </h1>
      </div>
      <div className="loaderAll">

      <div className="content">
        {cuboids.map((b) => (
          <div className="cuboid" key={b}>
            {sides.map((s) => (
              <div className="side" key={s} />
            ))}
          </div>
        ))}
      </div>
        
      </div>

    </div>
  );
};
