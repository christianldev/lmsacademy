"use client";
import { collectionData } from "@/data/collections";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="categories-voz-section flat-spacing">
      <div className="categories-voz-wrap">
        <div className="container">
          <div className="categories-voz-heading wow fadeInUp text-center">
           
            <h3 className="heading">
             Descubre<br />
               <span>tu voz</span>
            </h3>
            <p>
              Nuestra metodología moderna rompe las reglas tradicionales. Te brindamos las herramientas necesarias 
              para que domines tu instrumento vocal, liberes tu creatividad y conectes con tu audiencia en cada presentación.
            </p>
            <Link href={`/shop-collection`} className="btn-line py_8">
              Explorar Programas
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container-full categories-voz-carousel">
        <Swiper
          className="swiper tf-sw-collection"
          spaceBetween={15}
          loop={true}
          breakpoints={{
            1280: {
              slidesPerView: 5.1,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2.1,
              spaceBetween: 15,
            },
            0: {
              slidesPerView: 1.1,
              spaceBetween: 15,
            },
          }}
          dir="ltr"
        >
          {collectionData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="categories-voz-card wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <a className="img-style">
                  <Image
                    className="lazyload"
                    data-src={item.imageSrc}
                    alt={`banner-cls-${item.id}`}
                    src={item.imageSrc}
                    width={600}
                    height={800}
                  />
                </a>
                <div className="content">
                  <Link 
                    href={`/shop-collection`} 
                    className="cls-btn"
                  >
                    <h6 className="text">{item.title}</h6>
                    <i className="icon icon-arrowUpRight" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
