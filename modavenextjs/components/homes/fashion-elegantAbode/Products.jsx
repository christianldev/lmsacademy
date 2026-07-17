"use client";
import ProductCard1 from "@/components/productCards/ProductCard1";
import { products } from "@/data/products";
import React from "react";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Products() {
  return (
    <section className="section"
    
      style={{ backgroundColor: "#1a1a1a", color: "#f8f8f8" }}
    >
      <div className="container section">
        <div className=" text-center wow fadeInUp p-4 section ">
          <div className="my-4  heading-section">
            <h3 >
              ¿QUIENES SOMOS?
            </h3>
          </div>
          <div className="row justify-content-center mt-4 text-center ">
            <div className="col-md-6 d-flex justify-content-center align-items-center ">
              <video
                style={{
                  height: "600px",
                  width: "500px",
                  borderRadius: "15px",
                  boxShadow: "0 10px 30px rgba(0,0,0,.2)"
                }}
                controls
                playsInline
                preload="metadata"
                poster="/images/nosotros/foto-katty.webp"
              >
                <source src="/videos/KATTYELISA-2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-md-6 d-flex justify-content  ">
              <p
                className="my-5 text-light"
              >
                En nuestra escuela creemos que todas las personas pueden aprender a
                cantar cuando reciben la guía adecuada, una metodología clara y un
                ambiente que inspire confianza. <br />
                Más que enseñar técnica vocal, ayudamos a nuestros estudiantes a
                descubrir su propia voz, desarrollar seguridad en sí mismos y disfrutar
                el proceso de cantar. No importa si estás dando tus primeros pasos o si ya
                tienes experiencia diseñamos un aprendizaje adaptado a tu nivel y objetivos.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}
