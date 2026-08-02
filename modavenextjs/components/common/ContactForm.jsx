"use client";
import React, { useRef, useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validateField(name, value) {
  const trimmedValue = value.trim();

  switch (name) {
    case "name":
      return trimmedValue.length < 2 ? "Ingresa tu nombre completo." : "";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)
        ? ""
        : "Ingresa un correo electrónico válido.";
    case "phone":
      return !trimmedValue || /^[+\d][\d\s()-]{6,19}$/.test(trimmedValue)
        ? ""
        : "Ingresa un teléfono válido o déjalo vacío.";
    case "subject":
      return trimmedValue.length < 3
        ? "El asunto debe tener al menos 3 caracteres."
        : "";
    case "message":
      return trimmedValue.length < 10
        ? "El mensaje debe tener al menos 10 caracteres."
        : "";
    default:
      return "";
  }
}

export default function ContactForm({ parentClass = "contact-form-section" }) {
  const formRef = useRef();
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = ({ target }) => {
    const { name, value } = target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);

    if (touched[name]) {
      setFieldErrors((currentErrors) => ({
        ...currentErrors,
        [name]: validateField(name, value),
      }));
    }
  };

  const touchField = ({ target }) => {
    const { name, value } = target;
    setTouched((currentTouched) => ({ ...currentTouched, [name]: true }));
    setFieldErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const nextErrors = Object.fromEntries(
      Object.entries(values).map(([name, value]) => [
        name,
        validateField(name, value),
      ]),
    );
    setTouched(
      Object.fromEntries(Object.keys(values).map((name) => [name, true])),
    );
    setFieldErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccess(true);
        formRef.current.reset();
        setValues(initialValues);
        setTouched({});
        setFieldErrors({});
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
            <p>Modalidad presencial </p>
          </div>

          <div className="contact-info-group">
            <h3>Email</h3>
            <p>
              <a href="mailto:admisionesescuelakattyelisa@gmail.com">
                admisionesescuelakattyelisa@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-info-group contact-follow-group">
            <h3>Síguenos</h3>
            <ul className="contact-social-list" aria-label="Redes sociales">
              <li>
                <a
                  href="https://www.instagram.com/escuelakattyelisa/"
                  aria-label="Instagram"
                >
                  <i className="icon icon-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@artistaskattyelisa"
                  aria-label="TikTok"
                >
                  <i className="icon icon-tiktok" />
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="contact-form-panel">
          <span className="contact-eyebrow">Contáctanos</span>
          <h2>Comienza hoy y transforma tu voz.</h2>

          <form
            className="contact-form"
            id="contactform"
            ref={formRef}
            onSubmit={handleSubmit}
          >
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
              <label
                className={fieldErrors.name && touched.name ? "has-error" : ""}
              >
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={updateField}
                  onBlur={touchField}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby="name-error"
                  required
                  placeholder=" "
                />
                <span>Nombre</span>
                {touched.name && fieldErrors.name && (
                  <small id="name-error" className="field-error">
                    {fieldErrors.name}
                  </small>
                )}
              </label>
              <label
                className={
                  fieldErrors.email && touched.email ? "has-error" : ""
                }
              >
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={updateField}
                  onBlur={touchField}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby="email-error"
                  required
                  placeholder=" "
                />
                <span>Email</span>
                {touched.email && fieldErrors.email && (
                  <small id="email-error" className="field-error">
                    {fieldErrors.email}
                  </small>
                )}
              </label>
            </div>
            <div className="contact-form-row">
              <label
                className={
                  fieldErrors.phone && touched.phone ? "has-error" : ""
                }
              >
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={updateField}
                  onBlur={touchField}
                  aria-invalid={Boolean(fieldErrors.phone)}
                  aria-describedby="phone-error"
                  placeholder=" "
                />
                <span>Teléfono</span>
                {touched.phone && fieldErrors.phone && (
                  <small id="phone-error" className="field-error">
                    {fieldErrors.phone}
                  </small>
                )}
              </label>

              <label
                className={
                  fieldErrors.subject && touched.subject ? "has-error" : ""
                }
              >
                <input
                  type="text"
                  name="subject"
                  value={values.subject}
                  onChange={updateField}
                  onBlur={touchField}
                  aria-invalid={Boolean(fieldErrors.subject)}
                  aria-describedby="subject-error"
                  required
                  placeholder=" "
                />
                <span>Asunto</span>
                {touched.subject && fieldErrors.subject && (
                  <small id="subject-error" className="field-error">
                    {fieldErrors.subject}
                  </small>
                )}
              </label>
            </div>

            <label
              className={
                fieldErrors.message && touched.message ? "has-error" : ""
              }
            >
              <textarea
                name="message"
                rows={6}
                value={values.message}
                onChange={updateField}
                onBlur={touchField}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby="message-error"
                required
                placeholder=" "
              />
              <span>Mensaje</span>
              {touched.message && fieldErrors.message && (
                <small id="message-error" className="field-error">
                  {fieldErrors.message}
                </small>
              )}
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
