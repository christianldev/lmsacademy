"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
    <article key={index} className="testimonial-custom-card">
      <div className="testimonial-quote-cyan">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="#4affd8"
          stroke="none"
        >
          <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z"></path>
        </svg>
      </div>
      <p>{testimonial.quote}</p>
    </article>
  );

  return (
    <section className={`section-testimonials-clean ${parentClass}`}>
      <div className="container">
        <div className="clean-heading text-center">
          <span className="subtitle-cyan">TESTIMONIOS</span>
          <h2>Lo que dicen nuestros alumnos</h2>
          <p>
            Experiencias reales de quienes han transformado su futuro con
            nuestra academia
          </p>
        </div>

        {isMobile ? (
          <div className="clean-list">
            {testimonialsWithProduct9.map((testimonial, index) =>
              renderTestimonialCard(testimonial, index)
            )}
          </div>
        ) : (
          <div className="swiper tf-sw-testimonial clean-slider position-relative flex-center-wrapper">
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
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
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
