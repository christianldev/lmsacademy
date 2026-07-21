export default function ContactForm({
  parentClass = "contact-form-section",
}) {
  return (
    <section className={parentClass}>
      <div className="container contact-form-container">
        <aside className="contact-info-card">
          <div className="contact-map-pattern" aria-hidden="true" />
          <a className="contact-phone" href="tel:+593999999999">
            +593 968886183
          </a>

          <div className="contact-info-group">
            <h3>Dirección</h3>
            <p>Guayaquil, Ecuador</p>
            <p>Modalidad online y presencial con agenda previa.</p>
          </div>

          <div className="contact-info-group">
            <h3>Email</h3>
            <p>
              <a href="mailto:info@lmsacademy.com">info@lmsacademy.com</a>
            </p>
            <p>
              <a href="mailto:admisiones@lmsacademy.com">
                admisiones@lmsacademy.com
              </a>
            </p>
          </div>

          <div className="contact-info-group contact-follow-group">
            <h3>Síguenos</h3>
            <ul className="contact-social-list" aria-label="Redes sociales">
              <li>
                <a href="#" aria-label="Facebook">
                  <i className="icon icon-fb" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <i className="icon icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="TikTok">
                  <i className="icon icon-tiktok" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="X">
                  <i className="icon icon-x" />
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="contact-form-panel">
          <span className="contact-eyebrow">Contáctanos</span>
          <h2>Comienza hoy y transforma tu voz.</h2>
          <p>
            Cuéntanos qué quieres lograr y te guiaremos hacia el programa vocal
            adecuado para tu nivel, estilo y objetivos.
          </p>

          <form className="contact-form" id="contactform">
            <div className="contact-form-row">
              <label>
                <span>Nombre</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>

            <label>
              <span>Asunto</span>
              <input type="text" name="subject" required />
            </label>

            <label>
              <span>Mensaje</span>
              <textarea name="message" rows={6} required />
            </label>

            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}
