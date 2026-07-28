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
import ContactForm from "@/components/common/ContactForm";

export const metadata = {
  title: "Escuela de canto y formación vocal | LMS Academy",
  description:
    "Descubre cursos de canto, técnica vocal y desarrollo artístico en LMS Academy. Aprende con clases personalizadas y alcanza tu mejor versión como cantante.",
  alternates: {
    canonical: "https://lmsacademy.com",
  },
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
        <ContactForm  />
        <Features parentClass="flat-spacing-5" />
     
      </main>
      <Footer1 dark />
    </>
  );
}
