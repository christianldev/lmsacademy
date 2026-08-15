import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

export const metadata = {
  title: "Política de Privacidad | Katty Elisa",
  description:
    "Conoce cómo protegemos tu información personal en la Escuela de Canto Katty Elisa.",
  alternates: {
    canonical: "https://escuelakattyelisa.ec/privacy-policy",
  },
  openGraph: {
    title: "Política de Privacidad | Katty Elisa",
    description: "Política de privacidad de la Escuela de Canto Katty Elisa",
    url: "https://escuelakattyelisa.ec/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header1 />
      <section className="legal-content-section" id="privacy-policy">
        <div className="container">
          <div className="legal-content-wrapper">
            <div className="legal-header">
              <h1>Política de Privacidad</h1>
              <p className="last-update">
                Última actualización: {new Date().toLocaleDateString("es-EC")}
              </p>
            </div>

            <div className="legal-body">
              <h2>1. Introducción</h2>
              <p>
                La Escuela de Canto Katty Elisa (en adelante, "la Escuela",
                "nosotros" o "nuestro") respeta la privacidad de nuestros
                usuarios y visitantes. Esta Política de Privacidad explica cómo
                recopilamos, utilizamos, almacenamos y protegemos tu información
                personal cuando accedes a nuestro sitio web
                escuelakattyelisa.ec.
              </p>

              <h2>2. Información que Recopilamos</h2>
              <p>
                <strong>
                  Recopilamos información solo cuando tú nos la proporcionas
                  directamente
                </strong>{" "}
                a través de nuestro formulario de contacto:
              </p>
              <ul>
                <li>
                  <strong>Nombre completo</strong>
                </li>
                <li>
                  <strong>Correo electrónico</strong>
                </li>
                <li>
                  <strong>Número de teléfono</strong>
                </li>
                <li>
                  <strong>Asunto o tema de consulta</strong>
                </li>
                <li>
                  <strong>Mensaje o texto de tu consulta</strong>
                </li>
              </ul>
              <p
                style={{
                  marginTop: "20px",
                  fontStyle: "italic",
                  color: "#666",
                }}
              >
                <strong>Importante:</strong> Este sitio web NO utiliza cookies,
                NO recopila datos automáticamente, y NO implementa Google
                Analytics o sistemas de seguimiento de usuarios.
              </p>

              <h2>3. Uso de la Información</h2>
              <p>
                Los datos que envías a través del formulario de contacto se
                utilizan <strong>únicamente</strong> para:
              </p>
              <ul>
                <li>
                  Recibir tu consulta en nuestra bandeja de entrada
                  (admisionesescuelakattyelisa@gmail.com)
                </li>
                <li>Responder directamente a tu pregunta o solicitud</li>
                <li>Comunicarnos contigo sobre los temas que consultaste</li>
              </ul>
              <p style={{ marginTop: "15px", color: "#666" }}>
                <strong>No utilizamos tu información para:</strong> marketing
                masivo, perfiles de comportamiento, análisis de datos, o ningún
                otro propósito sin tu consentimiento explícito.
              </p>

              <h2>4. Compartir Información</h2>
              <p>
                <strong>No compartimos tu información personal</strong> con
                terceros. Los datos se envían directamente a Gmail (Google) a
                través de nuestro sistema de contacto, lo cual está cubierto por
                la Política de Privacidad de Google.
              </p>
              <p>Tu información se comparte solo en los siguientes casos:</p>
              <ul>
                <li>
                  <strong>Google (Gmail):</strong> Tu correo se envía a nuestro
                  buzón de Gmail siguiendo la Política de Privacidad de Google
                </li>
                <li>
                  <strong>Requerimientos legales:</strong> Si es obligatorio por
                  ley o orden judicial
                </li>
              </ul>

              <h2>5. Seguridad de la Información</h2>
              <p>
                Implementamos medidas técnicas y organizativas para proteger tu
                información personal contra acceso, alteración, divulgación o
                destrucción no autorizados. Sin embargo, ningún sistema de
                seguridad es completamente impenetrable.
              </p>

              <h2>6. Almacenamiento de Datos</h2>
              <p>
                Los datos del formulario de contacto se envían directamente a
                nuestro correo electrónico
                (admisionesescuelakattyelisa@gmail.com) a través de Gmail.{" "}
                <strong>
                  Los datos NO se guardan en una base de datos propia
                </strong>{" "}
                ni en servidores de la Escuela.
              </p>
              <p>
                Tu información se almacena en los servidores de Gmail (Google)
                según la Política de Privacidad de Google. Puedes revisar esa
                política en:{" "}
                <a href="https://policies.google.com/privacy" target="_blank">
                  https://policies.google.com/privacy
                </a>
              </p>
              <p>
                Los correos recibidos se conservan mientras sean necesarios para
                responder tus consultas. Puedes solicitar la eliminación de tus
                datos en cualquier momento.
              </p>

              <h2>7. Cookies y Tecnologías de Seguimiento</h2>
              <p>
                <strong>Este sitio web NO utiliza cookies.</strong> No
                implementamos:
              </p>
              <ul>
                <li>Cookies de sesión o persistentes</li>
                <li>Google Analytics u otros sistemas de tracking</li>
                <li>Píxeles de seguimiento</li>
                <li>LocalStorage o SessionStorage</li>
                <li>Publicidad retargeting</li>
              </ul>
              <p>
                Tu navegación en este sitio es completamente anónima y no se
                recopila información sobre tu comportamiento, dispositivo o
                ubicación.
              </p>

              <h2>8. Tus Derechos</h2>
              <p>
                Según la Ley Orgánica de Protección de Datos Personales de
                Ecuador (LOPDP) y el RGPD (si aplica), tienes derecho a:
              </p>
              <ul>
                <li>Acceder y saber qué datos guardamos sobre ti</li>
                <li>Solicitar la corrección de datos inexactos</li>
                <li>
                  Solicitar la eliminación de tu información (derecho al olvido)
                </li>
                <li>Oponerme al procesamiento de mis datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
              <p>
                Para ejercer estos derechos o tener preguntas sobre tus datos,
                escríbenos a:
                <strong>info@escuelakattyelisa.ec</strong>
              </p>

              <h2>9. Enlaces Externos</h2>
              <p>
                Nuestro sitio puede contener enlaces a sitios web de terceros.
                No somos responsables por sus políticas de privacidad. Te
                recomendamos revisar su política de privacidad antes de
                proporcionar información personal.
              </p>

              <h2>10. Cambios a Esta Política</h2>
              <p>
                Nos reservamos el derecho de actualizar esta Política de
                Privacidad en cualquier momento. Los cambios entrarán en vigor
                cuando se publiquen en este sitio. Te recomendamos revisar esta
                página periódicamente.
              </p>

              <h2>11. Contacto</h2>
              <p>
                Si tienes preguntas sobre esta Política de Privacidad o cómo
                tratamos tu información:
              </p>
              <ul>
                <li>
                  Email: <strong>info@escuelakattyelisa.ec</strong>
                </li>
                <li>
                  Teléfono: <strong>+593 96 888 6183</strong>
                </li>
                <li>Ubicación: Guayaquil, Ecuador</li>
              </ul>

              <div className="legal-disclaimer" style={{ marginTop: "40px" }}>
                <p style={{ fontSize: "0.9em", color: "#666" }}>
                  Esta Política de Privacidad está en conformidad con la Ley
                  Orgánica de Protección de Datos Personales de Ecuador (LOPDP)
                  y el Reglamento General de Protección de Datos (RGPD) de la
                  Unión Europea cuando aplique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </>
  );
}
