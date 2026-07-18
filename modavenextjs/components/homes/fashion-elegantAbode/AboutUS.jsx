"use client";
import React from "react";
import Link from "next/link";

export default function AboutUS() {
  return (
    <section className="about-agency-section">
      <div className="container">
        <div className="about-agency-grid">
          <div className="about-agency-content">
            <span className="about-agency-eyebrow">Sobre Nosotros</span>
            <h2>Descubre tu voz con Katty Elisa</h2>
            <p>
              En nuestra escuela creemos que todas las personas pueden aprender a
              cantar cuando reciben la guía adecuada, una metodología clara y un
              ambiente que inspire confianza.
            </p>
            <p>
              Más que enseñar técnica vocal, ayudamos a nuestros estudiantes a
              descubrir su propia voz, desarrollar seguridad en sí mismos y disfrutar
              el proceso de cantar.
            </p>
            <Link href="/about-us" className="about-agency-button">
              Conoce Más
            </Link>

            <div className="about-agency-stats" aria-label="Resultados de la escuela">
              <div className="about-agency-stat">
                <strong>240+</strong>
                <span>Voces formadas con confianza</span>
              </div>
              <div className="about-agency-stat">
                <strong>23+</strong>
                <span>Programas y talleres vocales</span>
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
      <style jsx>{`
        .about-agency-section {
          background: #101112;
          color: #f7f7f4;
          font-family: "Kumbh Sans", sans-serif;
          padding: clamp(72px, 8vw, 118px) 0;
          overflow: hidden;
        }

        .about-agency-grid {
          align-items: center;
          display: grid;
          gap: clamp(48px, 7vw, 96px);
          grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
        }

        .about-agency-content {
          max-width: 680px;
        }

        .about-agency-eyebrow {
          border: 1px solid #4affd8;
          border-radius: 999px;
          color: #ffffff;
          display: inline-flex;
          font-size: 16px;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 26px;
          padding: 8px 14px;
        }

        .about-agency-content h2 {
          color: #ffffff;
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 800;
          letter-spacing: 0;
          line-height: 1.16;
          margin-bottom: 26px;
          max-width: 720px;
        }

        .about-agency-content p {
          color: #aeb5be;
          font-size: 18px;
          line-height: 1.75;
          margin-bottom: 24px;
          max-width: 660px;
        }

        :global(.about-agency-button) {
          align-items: center;
          background: #ffd700;
          border-radius: 999px;
          color: #0d0f10;
          display: inline-flex;
          font-size: 15px;
          font-weight: 800;
          justify-content: center;
          line-height: 1;
          margin-top: 10px;
          min-height: 52px;
          min-width: 164px;
          padding: 17px 28px;
          text-transform: uppercase;
        }

        :global(.about-agency-button:hover) {
          background: #ffffff;
          color: #0d0f10;
        }

        .about-agency-stats {
          display: flex;
          gap: 42px;
          margin-top: 42px;
        }

        .about-agency-stat {
          min-width: 190px;
          padding-right: 42px;
        }

        .about-agency-stat + .about-agency-stat {
          border-left: 1px solid rgba(255, 255, 255, 0.16);
          padding-left: 42px;
        }

        .about-agency-stat strong {
          color: #efffe9;
          display: block;
          font-size: clamp(40px, 4vw, 56px);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 18px;
        }

        .about-agency-stat span {
          color: #aeb5be;
          display: block;
          font-size: 17px;
          line-height: 1.45;
        }

        .about-agency-media {
          margin-left: auto;
          max-width: 520px;
          position: relative;
          width: 100%;
        }

        .about-agency-video {
          aspect-ratio: 0.82;
          background: #1f2021 url("/images/nosotros/foto-katty.webp") center/cover no-repeat;
          border: 0;
          border-radius: 22px;
          display: block;
          filter: grayscale(1);
          object-fit: cover;
          width: 100%;
        }

        .about-agency-badge {
          align-items: center;
          background: #ffd700;
          border-radius: 10px;
          color: #0b0d0e;
          display: flex;
          flex-direction: column;
          justify-content: center;
          left: -86px;
          min-height: 164px;
          padding: 24px 22px;
          position: absolute;
          text-align: center;
          top: 37%;
          width: 170px;
        }

        .about-agency-badge strong {
          display: block;
          font-size: 52px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 18px;
        }

        .about-agency-badge span {
          display: block;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          max-width: 120px;
        }

        @media (max-width: 1199px) {
          .about-agency-grid {
            grid-template-columns: 1fr 0.9fr;
          }

          .about-agency-badge {
            left: -48px;
          }
        }

        @media (max-width: 991px) {
          .about-agency-grid {
            grid-template-columns: 1fr;
          }

          .about-agency-content,
          .about-agency-media {
            max-width: none;
          }

          .about-agency-media {
            margin-left: 0;
          }

          .about-agency-video {
            aspect-ratio: 16 / 11;
          }

          .about-agency-badge {
            left: 24px;
            top: auto;
            bottom: 24px;
          }
        }

        @media (max-width: 575px) {
          .about-agency-section {
            padding: 58px 0;
          }

          .about-agency-content h2 {
            font-size: 38px;
          }

          .about-agency-content p {
            font-size: 16px;
            line-height: 1.7;
          }

          .about-agency-stats {
            flex-direction: column;
            gap: 24px;
            margin-top: 34px;
          }

          .about-agency-stat,
          .about-agency-stat + .about-agency-stat {
            border-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.16);
            padding: 24px 0 0;
          }

          .about-agency-stat:first-child {
            border-top: 0;
            padding-top: 0;
          }

          .about-agency-video {
            aspect-ratio: 4 / 5;
            border-radius: 18px;
          }

          .about-agency-badge {
            bottom: 18px;
            left: 18px;
            min-height: 132px;
            width: 138px;
          }

          .about-agency-badge strong {
            font-size: 42px;
          }

          .about-agency-badge span {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
