"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonialsWithProduct9 } from "@/data/products";

export default function Testimonials({ parentClass = "flat-spacing" }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderTestimonialCard = (testimonial, index) => (
    <article key={index} className="testimonial-showcase-card">
      <span className="testimonial-quote-mark " aria-hidden="true">
        “
      </span>
      <p>{testimonial.quote}</p>
    </article>
  );

  return (
    <section className={`section-testimonials testimonial-showcase ${parentClass}`}>
      <div className="testimonial-map-pattern" aria-hidden="true" />
      <div className="container">
        <div className="testimonial-showcase-heading heading-section text-center">
          <span>TESTIMONIOS</span>
          <h3>Lo que dicen nuestros alumnos</h3>
          <p>
            Experiencias reales de quienes han transformado su futuro con
            nuestra academia
          </p>
        </div>

        {isMobile ? (
          <div className="testimonial-showcase-list">
            {testimonialsWithProduct9.map((testimonial, index) =>
              renderTestimonialCard(testimonial, index)
            )}
          </div>
        ) : (
          <div className="swiper tf-sw-testimonial testimonial-showcase-slider">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 48,
                },
              }}
              modules={[Pagination]}
              pagination={false}
              dir="ltr"
              spaceBetween={15}
            >
              {testimonialsWithProduct9.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  {renderTestimonialCard(testimonial, index)}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
