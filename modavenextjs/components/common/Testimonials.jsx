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

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
             <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i <= rating ? "#111822" : "#e5e7eb"} stroke="none">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
             </svg>
        );
    }
    return stars;
  };

  const renderTestimonialCard = (testimonial, index) => (
    <article key={index} className="testimonial-light-card">
      <div className="card-top">
         <div className="list-star-default">
              {renderStars(testimonial.rating || 5)}
         </div>
         <p className="text-review">{testimonial.quote}</p>
      </div>
   
      <div className="author-info">
             <span className="text-title">{testimonial.author}</span>
             <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4286 28.5714H9.71429V17.1429H15.4286L21.1429 5.71429H26.8571L21.1429 17.1429V28.5714ZM30.2857 28.5714H24.5714V17.1429H30.2857L36 5.71429H41.7143L36 17.1429V28.5714Z" fill="#cccccc" opacity="0.5"/>
                </svg>
             </div>
      </div>
    </article>
  );

  return (
    <section className={`section-testimonials-light-gradient ${parentClass} `}>
      <div className="container">
        
        <div className="light-heading-wrapper">
          <div className="heading-content">
              <span className="subtitle-badge">Testimonios</span>
              <h2>Nuestros estudiantes</h2>
          </div>
        </div>

        {isMobile ? (
          <div className="light-list">
            {testimonialsWithProduct9.map((testimonial, index) =>
              renderTestimonialCard(testimonial, index)
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
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
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
                <div 
                className="nav-prev-light"
                onClick={() => swiperRef.current?.slidePrev()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </div>
                <div 
                className="nav-next-light"
                onClick={() => swiperRef.current?.slideNext()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
