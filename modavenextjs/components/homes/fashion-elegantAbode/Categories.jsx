"use client";
import { collectionData } from "@/data/collections";
import React, { useState } from "react";

import Image from "next/image";

// Muestra la descripción completa en el overlay de la imagen, respetando saltos de línea
function getCaption(item) {
  return item.descripcion.replace(/\r\n?/g, "\n").replace(/\n/g, "<br />");
}

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="categories-voz-section" id="niveles">
      <div className="container">
        <div className="categories-voz-heading wow fadeInUp">
          <span className="categories-voz-eyebrow">Nuestros niveles</span>
          <h3 className="heading-routes">
            Explora Nuestra <span className="text-accent">Ruta Completa</span>
            <br />
            de aprendizaje
          </h3>
          <p>¿Qué aprenderás?</p>
          <ul className="categories-voz-list-descriptions">
            <li>Dominio escénico</li>
            <li>Proyección vocal</li>
            <li>Técnica de respiración</li>
            <li>Interpretación de canciones</li>
            <li>Seguridad y desenvolvimiento en el escenario</li>
            <li>Formación en instrumento (piano o guitarra a tu elección)</li>
          </ul>
        </div>

        <div className="categories-voz-content wow fadeInUp">
          <div className="categories-voz-image">
            {collectionData.map((item, index) => (
              <div
                key={item.id}
                className={`categories-voz-slide ${index === activeIndex ? "active" : ""}`}
              >
                <Image
                  className="categories-voz-img"
                  src={item.imageSrc}
                  alt={item.title}
                  width={600}
                  height={700}
                  priority={index === 0}
                />
                <div className="categories-voz-caption">
                  <p dangerouslySetInnerHTML={{ __html: getCaption(item) }} />
                </div>
              </div>
            ))}
          </div>

          <div className="categories-voz-list">
            {collectionData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`categories-voz-item ${index === activeIndex ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <span className="item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="item-title">{item.title}</span>
                <span className="item-arrow">
                  {index === activeIndex ? "↗" : "→"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
