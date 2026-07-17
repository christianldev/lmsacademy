"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
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
    <article key={index} className="testimonial-item testimonial-item--compact style-4 wow fadeInUp">
      <div className="content">
        <div className="content-top">
          <div className="list-star-default">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="icon icon-star" />
            ))}
          </div>
          <p className="testimonial-quote">“{testimonial.quote}”</p>
        </div>
      </div>
    </article>
  );

  return (
    <section className={`section-testimonials ${parentClass}`}>
      <div className="container py-4">
        <div className="text-center mb-4 heading-section">
          <h3 className="wow fadeInUp text-primary mb-3 p-4">
            Lo que dicen nuestros alumnos
          </h3>
          <p className="text-white mx-auto font-bold">
            Experiencias reales de quienes han transformado su futuro con
            nuestra academia
          </p>
        </div>

        {isMobile ? (
          <div className="testimonial-mobile-list">
            {testimonialsWithProduct9.map((testimonial, index) =>
              renderTestimonialCard(testimonial, index)
            )}
          </div>
        ) : (
          <div className="swiper tf-sw-testimonial">
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
                  slidesPerView: 1.3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd7",
              }}
              dir="ltr"
              spaceBetween={15}
            >
              {testimonialsWithProduct9.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  {renderTestimonialCard(testimonial, index)}
                </SwiperSlide>
              ))}

              <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd7 text-primary" />
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
