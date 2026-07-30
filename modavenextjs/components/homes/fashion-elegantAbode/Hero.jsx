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
                     
                        <div className="box-title-slider">
                          <h1
                            className="fade-item fade-item-1 heading title-display text-white"
                            dangerouslySetInnerHTML={{
                              __html: slide.heading,
                            }}
                            style={{ 
                              fontSize: "clamp(26px, 5vw, 68px)", 
                              fontWeight: "800",
                              lineHeight: "1.1",
                              marginBottom: "24px", // Separación titulo - descripción
                              paddingTop: "20px"
                            }}
                          />
                          <p 
                            className="fade-item fade-item-2 body-text-1 text-white"
                            dangerouslySetInnerHTML={{ __html: slide.description }} // Para respetar los <br/> agregados
                            style={{ 
                              fontSize: "18px", 
                              fontWeight: "400", 
                              lineHeight: "1.6",
                              maxWidth: "500px",
                              marginBottom: "40px" // Separación descripción - botón
                            }}
                          />
                        </div>
                        <div className="fade-item fade-item-3 box-btn-slider">
                          <Link
                            href={`/shop-default-grid`}
                            className="btn-inscribirme"
                          >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text">{slide.buttonText}</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </Link>
                        </div>

                        {/* ================= ICONOS INFERIORES ================= */}
                        <div className="fade-item fade-item-4" style={{
                          display: "flex",
                          gap: "30px",
                          marginTop: "60px",
                          alignItems: "stretch"
                        }}>
                          {/* Item 1 */}
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", borderRight: "1px solid #30eef5", paddingRight: "30px" }}>
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#30eef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "12px" }}>
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span style={{ color: "#fff", fontSize: "14px", lineHeight: "1.4" }}>Para todas<br/>las edades</span>
                          </div>

                          {/* Item 2 */}
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", borderRight: "1px solid #30eef5", paddingRight: "30px" }}>
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#30eef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "12px" }}>
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M10.5 15V8.5l6-1V14"></path>
                              <circle cx="9" cy="15" r="1.5"></circle>
                              <circle cx="15" cy="14" r="1.5"></circle>
                            </svg>
                            <span style={{ color: "#fff", fontSize: "14px", lineHeight: "1.4" }}>Formación<br/>integral</span>
                          </div>

                          {/* Item 3 */}
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#30eef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "12px" }}>
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span style={{ color: "#fff", fontSize: "14px", lineHeight: "1.4" }}>Confianza<br/>escénica</span>
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
