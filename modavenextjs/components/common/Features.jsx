"use client";

import { baquetaFeatures } from "@/data/features";

export default function Features({ parentClass = "flat-spacing baqueta-features-section" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="baqueta-features-header">
          <h2>
            ¿Por qué elegirnos?
          </h2>
          <p>Lo que nos hace únicos en la enseñanza musical</p>
        </div>

        <div className="baqueta-features-grid">
          {baquetaFeatures.map((item) => (
            <div key={item.id} className="baqueta-feature-card">
              <div className="feature-emoji">{item.emoji}</div>
              <h6 className="feature-title">{item.title}</h6>
              <p className="feature-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
