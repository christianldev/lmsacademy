"use client";

import { testimonials6 } from "@/data/testimonials";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="section-testimonials-dark flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Nuestros Alumnos Felices</h3>
          <p className="description">
            Descubre por qué tantos estudiantes confían en nosotros para
            transformar su voz.
          </p>
        </div>
        <div className="testimonial-slider-container position-relative">
          <div className="nav-prev-testimonial">
            <i className="icon-arrLeft" />
          </div>
          <div className="nav-next-testimonial">
            <i className="icon-arrRight" />
          </div>
          
          <Swiper
            className="tf-sw-testimonial wow fadeInUp"
            data-wow-delay="0.1s"
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              992: { slidesPerView: 3 },
              768: { slidesPerView: 2, centeredSlides: false },
              0: { slidesPerView: 1, centeredSlides: false },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spd81",
            }}
            navigation={{
              prevEl: ".nav-prev-testimonial",
              nextEl: ".nav-next-testimonial",
            }}
            dir="ltr"
          >
            {testimonials6.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="testimonial-item-dark"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="content-inner">
                    <div className="top-row">
                      <div className="brand-logo">Google</div>
                      <div className="list-star-default color-primary">
                        {Array(item.stars)
                          .fill(0)
                          .map((_, starIndex) => (
                            <i key={starIndex} className="icon icon-star" />
                          ))}
                      </div>
                    </div>
                    <p className="text-review">"{item.text}"</p>
                    <div className="bottom-row">
                      <div className="box-author">
                        <div className="text-title author">{item.author}</div>
                        <div className="author-role">Alumno destacado</div>
                      </div>
                      <div className="review-date">May 9, 2023<br/>10:30 PM</div>
                    </div>
                  </div>
                  
                  <div className="avatar-wrapper">
                    <div className="avatar-img">
                      <span>{item.author.charAt(0)}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd81" />
        </div>
      </div>
    </section>
  );
}
