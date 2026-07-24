import MarqueeSection from "@/components/common/MarqueeSection";
import Products2 from "@/components/common/Products2";
import Testimonials from "@/components/common/Testimonials";
import Header1 from "@/components/headers/Header1";

import BannerCountdown from "@/components/homes/fashion-elegantAbode/BannerCountdown";
import Categories from "@/components/homes/fashion-elegantAbode/Categories";
import Hero from "@/components/homes/fashion-elegantAbode/Hero";
import Lookbook from "@/components/homes/fashion-elegantAbode/Lookbook";
import Products from "@/components/homes/fashion-elegantAbode/AboutUS";

import React from "react";
import Features from "@/components/common/Features";
import Brands from "@/components/common/Brands";
import Footer1 from "@/components/footers/Footer1";
import MarqueeSection2 from "@/components/common/MarqueeSection2";

export const metadata = {
  title:
    "Escuela de canto || Katty Elisa",
  description: "Aprende a cantar con Katty Elisa, tu escuela de canto de confianza. Mejora tu técnica vocal y alcanza tus metas musicales con nuestros cursos personalizados.",
};

export default function HomeFashionElegantAbodePage() {
  return (
    <>
      
      <Header1 />
      <main className="katty-home-page">
        <Hero />
        <Products />
        <Categories />
      
      
      
       
        <Testimonials parentClass="flat-spacing pt-0" />
        
        <Features parentClass="flat-spacing-5" />
     
      </main>
      <Footer1 dark />
    </>
  );
}
