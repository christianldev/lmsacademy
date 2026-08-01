"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard1 from "../productCards/ProductCard1";
import {
  blogLinks,
  demoItems,
  otherPageLinks,
  otherShopMenus,
  productFeatures,
  productLinks,
  productStyles,
  shopFeatures,
  shopLayout,
  swatchLinks,
} from "@/data/menu";
import { usePathname } from "next/navigation";
export default function Nav() {
  const pathname = usePathname();
  const whatsappUrl = `https://wa.me/593968886183?text=${encodeURIComponent("Hola, me gustaría inscribirme en la escuela de artistas.")}`;

  return (
    <>
      {" "}
      <li
        className={`menu-item ${
          [...demoItems].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <a href="#" className="item-link">
          Inicio
       
        </a>
       
      </li>
      <li
        className={`menu-item ${
          [
            ...shopLayout,
            ...shopFeatures,
            ...productStyles,
            ...otherShopMenus,
          ].some((elm) => elm.href.split("/")[1] == pathname.split("/")[1])
            ? "active"
            : ""
        } `}
      >
        <a href="#nosotros" className="item-link">
          Nosotros
        
        </a>
       
      </li>
      <li
        className={`menu-item ${
          [...productLinks, ...swatchLinks, ...productFeatures].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <a href="#niveles" className="item-link">
          Niveles
         
        </a>
       
      </li>
      <li
        className={`menu-item position-relative ${
          [...blogLinks].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <a href="#testimonios" className="item-link">
         Testimonios
      
        </a>
        
      </li>
      <li
        className={`menu-item position-relative ${
          [...otherPageLinks].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <a href="#contacto" className="item-link">
         Contacto
         
        </a>
        
      </li>
     



      <li className="btn-inscribirme">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Inscribirme
        </a>
      </li>
    </>
  );
}
