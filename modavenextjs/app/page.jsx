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
    canonical: "https://escuelakattyelisa.ec",
  },
  openGraph: {
    title: "Katty Elisa | Escuela de canto en Guayaquil",
    description:
      "Aprende canto, técnica vocal y confianza escénica con Katty Elisa. Clases personalizadas para niños, jóvenes y adultos.",
    url: "https://escuelakattyelisa.ec",
    type: "website",
    images: [
      {
        url: "/images/slider/carrusel1.webp",
        width: 1200,
        height: 630,
        alt: "Katty Elisa - Escuela de canto y formación vocal",
      },
    ],
  },
};

export default function HomeFashionElegantAbodePage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "MusicSchool",
          name: "Katty Elisa",
          url: "https://escuelakattyelisa.ec",
          logo: "https://escuelakattyelisa.ec/images/logo/logo.svg",
          image: "https://escuelakattyelisa.ec/images/slider/carrusel1.webp",
          telephone: "+593968886183",
          sameAs: ["https://www.instagram.com/escuelakattyelisa/"],
          description:
            "Escuela de canto y formación vocal especializada en técnica vocal, desarrollo artístico y confianza escénica.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Guayaquil",
            addressLocality: "Guayaquil",
            addressRegion: "Guayas",
            addressCountry: "EC",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+593968886183",
            contactType: "customer service",
            availableLanguage: "Spanish",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "4",
            reviewCount: "4",
          },
          review: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Sofía M." },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Los profesores explican muy bien y corrigen sin hacerte sentir incómodo. Se nota que realmente les importa que aprendas.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Daniel R." },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Las técnicas de respiración y afinación me ayudaron muchísimo. Ahora canto con mucha más seguridad.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Paula G." },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Mi hija esperaba con emoción cada clase. Además de mejorar su voz, desarrolló disciplina, seguridad y amor por la música.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Mateo C." },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              reviewBody:
                "Lo que más me gustó fue el ambiente. Nunca me sentí juzgado y eso me ayudó a perder el miedo al micrófono.",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Cursos de canto y formación vocal",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Clases de canto",
                  description:
                    "Formación vocal para principiantes y estudiantes avanzados.",
                  provider: {
                    "@type": "Organization",
                    name: "Katty Elisa",
                    url: "https://escuelakattyelisa.ec",
                  },
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Técnica vocal",
                  description:
                    "Entrenamiento vocal profesional para mejorar el control, el timbre y la proyección de la voz.",
                  provider: {
                    "@type": "Organization",
                    name: "Katty Elisa",
                    url: "https://escuelakattyelisa.ec",
                  },
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Presencia escénica",
                  description:
                    "Desarrollo de la confianza, el lenguaje corporal y la expresión artística en el escenario.",
                  provider: {
                    "@type": "Organization",
                    name: "Katty Elisa",
                    url: "https://escuelakattyelisa.ec",
                  },
                },
              },
            ],
          },
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Katty Elisa",
          url: "https://escuelakattyelisa.ec",
          description: "Escuela de canto y formación vocal con Katty Elisa",
          inLanguage: "es-EC",
          publisher: {
            "@type": "Organization",
            name: "Katty Elisa",
            url: "https://escuelakattyelisa.ec",
          },
        }}
      />
      <Header1 />
      <main className="katty-home-page">
        <Hero />
        <Products />
        <Categories />
        <Testimonials />
        <ContactForm />
        <Features />
      </main>
      <Footer1 dark />
    </>
  );
}
