"use client";
import { collectionData } from "@/data/collections";
import React from "react";

import Image from "next/image";

export default function Categories() {
  return (
    <section className="categories-voz-section flat-spacing" id="niveles">
      <div className="categories-voz-wrap">
        <div className="container">
          <div className="categories-voz-heading wow fadeInUp text-center">
            <h3 className="heading-routes">
            Ruta de aprendizaje<br />
              <span ></span>
            </h3>
            <p>
            Todo gran artista comienza desde el mismo lugar. En escuela de Artistas con Katty Elisa, todos nuestros estudiantes inician en el Nivel 1, donde descubrirán las bases para desarrollar una voz segura, fuerte y llena de confianza. <br />

             No importa si es tu primera vez cantando o si ya tienes experiencia. Nuestro programa está diseñado para que avances paso a paso, disfrutando cada logro en el camino.
           </p>
       
            <p className="btn-line py_8">
              NUESTROS NIVELES
            </p>
          </div>
        </div>
      </div>

      <div className="container categories-voz-grid-wrap">
        <div className="categories-voz-grid ">
          {collectionData.map((item) => (
            <div className="categories-voz-card wow fadeInUp" key={item.id} data-wow-delay={item.delay}>
              <div className="img-style">
                <Image
                  className="lazyload"
                  data-src={item.imageSrc}
                  alt={`banner-cls-${item.id}`}
                  src={item.imageSrc}
                  width={600}
                  height={800}
                />
                <div className="content">
                  <h6 className="text">{item.title}</h6>
                  <p className="category-desc">{item.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
