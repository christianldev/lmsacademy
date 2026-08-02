"use client";

import { baquetaFeatures } from "@/data/features";
import Image from "next/image";
import { useState } from "react";

export default function Features({ parentClass = "" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscription = async (event) => {
    event.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Persona interesada en inscripción",
          email: email.trim(),
          phone: "No proporcionado",
          subject: "Solicitud de información e inscripción",
          message:
            "Deseo recibir información sobre los próximos cursos, horarios y fechas de inscripción.",
        }),
      });

      if (!response.ok) throw new Error("No se pudo enviar la solicitud.");

      setEmail("");
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className={`baqueta-full-section ${parentClass}`}>
      {/* SECCIÓN SUPERIOR: BANNER NEWSLETTER */}
      <section className="baqueta-newsletter-section">
        <div className="container">
          <div className="newsletter-wrapper">
            <div className="newsletter-image-col">
              {/* Elementos decorativos de fondo para la imagen */}
              <div className="decor-yellow-circle"></div>
              {/* Imagen del estudiante (asegúrate de tener una imagen sin fondo en public/images/student-banner.png) */}
              <Image
                src="/images/students/estudiante.png"
                alt="Estudiante de la escuela de canto"
                className="student-img"
                width={360}
                height={360}
                sizes="(max-width: 991px) 180px, 35vw"
              />
            </div>

            <div className="newsletter-content-col">
              <div className="decor-lines"></div>
              <h2>
                ¿Quieres ser parte de nuestra escuela de canto? <br />
                <strong>
                  Conoce nuestros próximos cursos, horarios y fechas de
                  inscripción.
                </strong>
              </h2>
              <form className="newsletter-form" onSubmit={handleSubscription}>
                <input
                  type="email"
                  placeholder="Escribe tu correo electrónico"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  aria-invalid={status === "invalid"}
                  aria-describedby="newsletter-status"
                  required
                />
                <button
                  type="submit"
                  className="subscribe-btn"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Enviando..." : "Inscribirse ahora"}
                </button>
              </form>
              <p
                id="newsletter-status"
                className={`newsletter-status ${status}`}
                aria-live="polite"
              >
                {status === "invalid" &&
                  "Ingresa un correo electrónico válido."}
                {status === "success" &&
                  "Recibimos tu solicitud. Te contactaremos pronto."}
                {status === "error" &&
                  "No pudimos enviar tu solicitud. Inténtalo nuevamente."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN INFERIOR: FEATURES */}
      <section className="baqueta-features-section">
        <div className="container">
          <div className="baqueta-features-header">
            <span className="baqueta-features-start-badge">
              Nuestros Beneficios
            </span>
            <h2>Tu voz, nuestro compromiso</h2>
            <p>
              Una formación musical pensada para desarrollar tu talento,
              fortalecer tu confianza y disfrutar cada etapa del aprendizaje.
            </p>
          </div>

          <div className="baqueta-features-grid">
            {baquetaFeatures.map((item) => (
              <div key={item.id} className="baqueta-feature-card">
                <div
                  className="feature-svg-icon"
                  dangerouslySetInnerHTML={{ __html: item.svgIcon }}
                ></div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
