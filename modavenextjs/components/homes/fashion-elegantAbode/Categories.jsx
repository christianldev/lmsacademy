"use client";
import { collectionData } from "@/data/collections";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Categories() {
  return (
    <section className="flat-spacing">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes goldShimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `
      }} />
      <div className="container">
        <div className="heading-section-2 wow fadeInUp text-center" style={{ flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
          <h3 className="heading" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Descubre Tu Voz</h3>
          <p className="text-secondary" style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
            Nuestra metodología moderna rompe las reglas tradicionales. Te brindamos las herramientas necesarias 
            para que domines tu instrumento vocal, liberes tu creatividad y conectes con tu audiencia en cada presentación.
          </p>
          <Link href={`/shop-collection`} className="btn-line py_8 mt-3">
            Explorar Programas
          </Link>
        </div>
      </div>
      <div className="container-full mt-5" style={{ padding: "0 15px" }}>
        <Swiper
          className="swiper tf-sw-collection"
          spaceBetween={15}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 5.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.1,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 2.1,
              spaceBetween: 15,
            },
          }}
          dir="ltr"
        >
          {collectionData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="collection-position-2 style-3 wow fadeInUp"
                data-wow-delay={item.delay}
                style={{ 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                }}
              >
                <a className="img-style" style={{ display: 'block', overflow: 'hidden', height: '400px' }}>
                  <Image
                    className="lazyload"
                    data-src={item.imageSrc}
                    alt={`banner-cls-${item.id}`}
                    src={item.imageSrc}
                    width={600}
                    height={800}
                    style={{ transition: 'transform 0.5s ease', objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </a>
                <div className="content" style={{ bottom: '20px', left: '0', right: '0', padding: '0 20px', display: 'flex', justifyContent: 'center' }}>
                  <Link 
                    href={`/shop-collection`} 
                    className="cls-btn"
                    style={{
                      background: 'linear-gradient(45deg, #d4af37, #ffd700, #ffec8b, #d4af37)',
                      backgroundSize: '300% 300%',
                      animation: 'goldShimmer 3s ease infinite',
                      color: '#000',
                      border: 'none',
                      borderRadius: '30px',
                      padding: '12px 25px',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                      minWidth: '200px',
                      justifyContent: 'space-between',
                      margin: '0 auto'
                    }}
                  >
                    <h6 className="text" style={{ color: '#000', margin: 0, fontWeight: 'bold' }}>{item.title}</h6>
                    <i className="icon icon-arrowUpRight" style={{ color: '#000', fontWeight: 'bold' }} />
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
