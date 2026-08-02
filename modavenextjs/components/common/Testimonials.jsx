"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { testimonialsWithProduct9 } from "@/data/products";

export default function Testimonials({ parentClass = "flat-spacing" }) {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderStars = (rating = 5) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i <= rating ? "#d4af37" : "#e5e7eb"}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>,
      );
    }
    return stars;
  };

  const renderTestimonialCard = (testimonial, index) => (
    <article key={index} className="testimonial-light-card">
      <div className="testimonial-card-header">
        <div className="testimonial-student">
          <div className="student-avatar" aria-hidden="true">
            {testimonial.author.charAt(0)}
          </div>
          <div className="testimonial-student-info">
            <h3>{testimonial.author}</h3>
            <p>{testimonial.level}</p>
          </div>
        </div>
        <div
          className="list-star-default"
          role="img"
          aria-label={`${testimonial.rating} de 5 estrellas`}
        >
          {renderStars(testimonial.rating)}
        </div>
      </div>
      <p className="text-review">{testimonial.quote}</p>
    </article>
  );

  return (
    <section
      id="testimonios"
      className={`section-testimonials-light-gradient ${parentClass} `}
    >
      <div className="container testimonials-layout">
        <div className="light-heading-wrapper">
          <div className="heading-content">
            <span className="subtitle-badge">Testimonios</span>
            <h2>Voces que cuentan su historia</h2>
            <p>
              Descubre cómo nuestros estudiantes desarrollan técnica, confianza
              y una conexión genuina con la música.
            </p>
          </div>
        </div>

        <div className="testimonials-content">
          {isMobile ? (
            <div className="light-list">
              {testimonialsWithProduct9.map((testimonial, index) =>
                renderTestimonialCard(testimonial, index),
              )}
            </div>
          ) : (
            <div className="swiper tf-sw-testimonial light-slider-container position-relative">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  1200: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={false}
                dir="ltr"
                spaceBetween={30}
                className="px-2"
              >
                {testimonialsWithProduct9.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    {renderTestimonialCard(testimonial, index)}
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="navigation-wrapper">
                <button
                  className="nav-prev-light"
                  type="button"
                  aria-label="Ver testimonio anterior"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  className="nav-next-light"
                  type="button"
                  aria-label="Ver siguiente testimonio"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
