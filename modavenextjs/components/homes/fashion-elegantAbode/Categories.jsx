"use client";
import { collectionData } from "@/data/collections";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="categories-voz-section flat-spacing">
      <div className="categories-voz-wrap">
        <div className="container">
          <div className="categories-voz-heading wow fadeInUp text-center">
            <h3 className="heading">
            NUESTRA RUTA VOCAL<br />
              <span ></span>
            </h3>
            <p>
            Avanza paso a paso a través de nuestro método estructurado. Desde tus primeras respiraciones hasta el dominio del escenario, aquí trazas el camino de tu propia evolución musical.
            </p>
            <Link href={`/shop-collection`} className="btn-line py_8">
              Explorar Programas
            </Link>
          </div>
        </div>
      </div>

      <div className="container categories-voz-grid-wrap">
        <div className="categories-voz-grid">
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
              </div>
              <div className="content">
                <h6 className="text">{item.title}</h6>
                <p className="category-desc">{item.descripcion}</p>
                <Link href={`/shop-collection`} className="cls-btn">
                  Ver Nivel
                  <i className="icon icon-arrowUpRight" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
