import Testimonials from "@/components/common/Testimonials";
import Header1 from "@/components/headers/Header1";
import Categories from "@/components/homes/fashion-elegantAbode/Categories";
import Hero from "@/components/homes/fashion-elegantAbode/Hero";
import Products from "@/components/homes/fashion-elegantAbode/AboutUS";
import React from "react";
import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import ContactForm from "@/components/common/ContactForm";
import StructuredData from "@/components/common/StructuredData";

export const metadata = {
  title: "Escuela de canto y formación vocal | Katty Elisa",
  description:
    "Clases de canto, técnica vocal y desarrollo artístico en Katty Elisa. Aprende con docentes expertos, mejora tu voz y construye tu proyecto musical.",
  alternates: {
    canonical: "https://lmsacademy.com",
  },
  openGraph: {
    title: "Katty Elisa | Escuela de canto y voz",
    description:
      "Aprende canto, técnica vocal y confianza escénica con Katty Elisa. Clases personalizadas para niños, jóvenes y adultos.",
    url: "https://lmsacademy.com",
    type: "website",
  },
};

export default function HomeFashionElegantAbodePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Katty Elisa",
          url: "https://lmsacademy.com",
          sameAs: ["https://www.instagram.com/", "https://www.facebook.com/"],
          description:
            "Escuela de canto y formación vocal especializada en técnica vocal, desarrollo artístico y confianza escénica.",
          areaServed: "Ecuador",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Cursos de canto y formación vocal",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Clases de canto",
                  description: "Formación vocal para principiantes y estudiantes avanzados.",
                },
              },
            ],
          },
        }}
      />
      <Header1 />
      <main className="katty-home-page">
        <Hero />
        <Products />
        <Categories />
        <Testimonials parentClass="flat-spacing pt-0" />
        <ContactForm />
        <Features parentClass="flat-spacing-5" />
      </main>
      <Footer1 dark />
    </>
  );
}
