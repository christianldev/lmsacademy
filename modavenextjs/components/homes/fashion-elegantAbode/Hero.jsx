"use client";
import { slidesData } from "@/data/heroSlides";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination, Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <section className="tf-slideshow slider-style2 slider-effect-fade">
      <Swiper
        className="swiper tf-sw-slideshow"
        centeredSlides={false}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".spd33",
        }}
        dir="ltr"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="wrap-slider">
              {/* IMAGEN DE NEXT.JS USANDO FILL */}
              <Image
                alt="fashion-slideshow"
                src={slide.imageSrc}
                fill
                sizes="100vw"
                priority
                style={{ objectFit: "cover", objectPosition: "top center" }} // ← Cambiado a top center
              />

              {/* CAPA DE GRADIENTE OSCURO (Integra perfectamente el navbar de la escuela) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />

              {/* CONTENIDO ORIGINAL (Subimos el z-index para que flote) */}
              <div className="box-content" style={{ zIndex: 3, width: "100%" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-sm-10">
                      <div className="content-slider card-box bg-main">
                        <div className="box-title-slider">
                          <div
                            className="fade-item fade-item-1 heading title-display text-white"
                            dangerouslySetInnerHTML={{
                              __html: slide.heading,
                            }}
                          />
                          <p className="fade-item fade-item-2 body-text-1 text-white">
                            {slide.description}
                          </p>
                        </div>
                        <div className="fade-item fade-item-3 box-btn-slider">
                          <Link
                            href={`/shop-default-grid`}
                            className="tf-btn btn-fill btn-white"
                          >
                            <span className="text">{slide.buttonText}</span>
                            <i className="icon icon-arrowUpRight" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider type-circle white-circle justify-content-center spd33" />
        </div>
      </div>
    </section>
  );
}
