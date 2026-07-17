"use client";
import { testimonials5 } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function Testimonials3() {
  return (
    <section className="flat-spacing bg-surface">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Customer Say!</h3>
          <p className="subheading">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
        <Swiper
          className="swiper tf-sw-testimonial wow fadeInUp"
          data-wow-delay="0.1s"
          spaceBetween={15} // data-space
          slidesPerView={3} // data-preview
          breakpoints={{
            1200: { slidesPerView: 3, spaceBetween: 30 }, // data-space-lg
            752: { slidesPerView: 2, spaceBetween: 30 }, // data-tablet
            0: { slidesPerView: 1, spaceBetween: 15 }, // data-mobile
          }}
          modules={[Pagination]}
          pagination={{
            el: ".spd445",
          }}
          dir="ltr"
        >
          {testimonials5.map((testimonial) => (
            <SwiperSlide className="swiper-slide" key={testimonial.id}>
              <div className="testimonial-item style-2 style-3">
                <div className="content-top">
                  <div className="list-star-default">
                    <i className="icon icon-star" />
                    <i className="icon icon-star" />
                    <i className="icon icon-star" />
                    <i className="icon icon-star" />
                    <i className="icon icon-star" />
                  </div>
                  <p className="text-secondary">{testimonial.text}</p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">
                        {testimonial.author}
                      </div>
                  
                    </div>
                  </div>
                </div>
               
                 
                  
                </div>
              
            </SwiperSlide>
          ))}
          <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd445"></div>
        </Swiper>
      </div>
    </section>
  );
}
