"use client";
import React from "react";
import Link from "next/link";

export default function AboutUS() {
  return (
    <section className="about-agency-section" id="nosotros">
      {/* Background Animated Notes */}
      <div className="animated-notes">
        <div className="note note-1">&#9835;</div>
        <div className="note note-2">&#9833;</div>
        <div className="note note-3">&#9834;</div>
        <div className="note note-4">&#9836;</div>
        <div className="note note-5">&#9835;</div>
        <div className="note note-6">&#9834;</div>
      </div>

      <div className="container">
        <div className="about-agency-grid">
          <div className="about-agency-content">
            <span className="about-agency-eyebrow">Sobre Nosotros</span>
           <h2>Descubre tu voz con <span style={{color: '#4affd8'}}>Katty Elisa</span></h2>
            <p>
             En 2016, la cantante Katty Elisa fundó este espacio con un propósito claro: acompañar a cada estudiante a descubrir, formar y potenciar su talento vocal único. Lo que comenzó como un sueño musical se ha convertido en una comunidad vibrante con más de una década de experiencia formando a voces de todas las edades.
            </p>
            <p>Fundada y dirigida por la reconocida cantante Katty Elisa, nuestra escuela respira música, técnica y escenario en cada clase.</p>
             <p>Contamos con un equipo docente de profesionales altamente cualificados, enfocados en la técnica vocal, la salud de tu voz y el desarrollo de tu confianza escénica.</p>
             
            <p>10 Años Transformando Voces, nuestra trayectoria de más de una década respalda una metodología probada que combina disciplina, expresión artística y disfrute.</p>
            

            

            <div className="about-agency-stats" aria-label="Resultados de la escuela">
              <div className="about-agency-stat">
                <strong>1000+</strong>
                <span>Voces formadas con confianza</span>
              </div>
              <div className="about-agency-stat">
                <strong>10 años </strong>
                <span>Experiencia</span>
              </div>
            </div>
          </div>

          <div className="about-agency-media">
            <video
              className="about-agency-video"
              controls
              playsInline
              preload="metadata"
              poster="/images/nosotros/foto-katty.webp"
            >
              <source src="/videos/KATTYELISA-2.mp4" type="video/mp4" />
            </video>
            
          </div>
        </div>
      </div>
    </section>
  );
}
