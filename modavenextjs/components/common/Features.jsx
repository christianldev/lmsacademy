"use client";

import { baquetaFeatures } from "@/data/features";

export default function Features({ parentClass = "" }) {
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
              <img src="/images/students/estudiante.png" alt="Estudiante" className="student-img" />
            </div>

            <div className="newsletter-content-col">
              <div className="decor-lines"></div>
              <h2>
                Want To Stay <strong>Informed</strong> About<br />
                New <strong>Courses & Study</strong>?
              </h2>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Escribe tu correo electrónico" required />
                <button type="submit" className="subscribe-btn">Inscribirse ahora</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN INFERIOR: FEATURES */}
      <section className="baqueta-features-section">
        <div className="container">
          <div className="baqueta-features-header">
            <span className="baqueta-features-start-badge">How We Start Journey</span>
            <h2>Start Your Learning Journey Today!</h2>
            <p>Groove's intuitive shared inbox makesteam members together<br/>organize, prioritize and.In this episode.</p>
          </div>

          <div className="baqueta-features-grid">
            {baquetaFeatures.map((item) => (
              <div key={item.id} className="baqueta-feature-card">
                <div 
                  className="feature-svg-icon"
                  dangerouslySetInnerHTML={{ __html: item.svgIcon }}
                ></div>
                <h6 className="feature-title">{item.title}</h6>
                <p className="feature-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
