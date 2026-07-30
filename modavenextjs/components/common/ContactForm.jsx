"use client";
import React, { useRef, useState } from "react";

export default function ContactForm({
  parentClass = "contact-form-section",
}) {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        formRef.current.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={parentClass} id="contacto">
      <div className="container contact-form-container">
        <aside className="contact-info-card">
          <div className="contact-map-pattern" aria-hidden="true" />
          <a className="contact-phone" href="tel:+593999999999">
            +593 968886183
          </a>

          <div className="contact-info-group">
            <h3>Dirección</h3>
            <p>Guayaquil, Ecuador</p>
            <p>Modalidad  presencial </p>
          </div>

          <div className="contact-info-group">
            <h3>Email</h3>
            <p>
              <a href="mailto:admisionesescuelakattyelisa@gmail.com">admisionesescuelakattyelisa@gmail.com</a>
            </p>
           
          </div>

          <div className="contact-info-group contact-follow-group">
            <h3>Síguenos</h3>
            <ul className="contact-social-list" aria-label="Redes sociales">
              <li>
                <a href="https://www.instagram.com/escuelakattyelisa/" aria-label="Instagram">
                  <i className="icon icon-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@artistaskattyelisa" aria-label="TikTok">
                  <i className="icon icon-tiktok" />
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="contact-form-panel">
          <span className="contact-eyebrow">Contáctanos</span>
          <h2>Comienza hoy y transforma tu voz.</h2>
         

          <form className="contact-form" id="contactform" ref={formRef} onSubmit={handleSubmit}>
            {success && (
              <p style={{ color: "green", marginBottom: "15px" }}>
                ¡Mensaje enviado correctamente!
              </p>
            )}
            {error && (
              <p style={{ color: "red", marginBottom: "15px" }}>
                Hubo un error al enviar el mensaje. Inténtalo de nuevo.
              </p>
            )}
            <div className="contact-form-row">
              <label>
                <input type="text" name="name" autoComplete="name" required placeholder=" " />
                <span>Nombre</span>
              </label>
              <label>
                <input type="email" name="email" autoComplete="email" required placeholder=" " />
                <span>Email</span>
              </label>
            </div>
            <div className="contact-form-row">
            <label>
              <input type="tel" name="phone" autoComplete="tel" placeholder=" " />
              <span>Teléfono (Opcional)</span>
            </label>

            <label>
              <input type="text" name="subject" required placeholder=" " />
              <span>Asunto</span>
            </label>
            </div>
            

            <label>
              <textarea name="message" rows={6} required placeholder=" " />
              <span>Mensaje</span>
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
