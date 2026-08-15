import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

export const metadata = {
  title: "Términos y Condiciones | Katty Elisa",
  description:
    "Términos y condiciones de uso del sitio web de la Escuela de Canto Katty Elisa.",
  alternates: {
    canonical: "https://escuelakattyelisa.ec/terms",
  },
  openGraph: {
    title: "Términos y Condiciones | Katty Elisa",
    description: "Términos y condiciones de la Escuela de Canto Katty Elisa",
    url: "https://escuelakattyelisa.ec/terms",
    type: "website",
  },
};

export default function Terms() {
  return (
    <>
      <Header1 />
      <section className="legal-content-section" id="terms">
        <div className="container">
          <div className="legal-content-wrapper">
            <div className="legal-header">
              <h1>Términos y Condiciones de Uso</h1>
              <p className="last-update">
                Última actualización: {new Date().toLocaleDateString("es-EC")}
              </p>
            </div>

            <div className="legal-body">
              <h2>1. Aceptación de Términos</h2>
              <p>
                Al acceder y utilizar el sitio web escuelakattyelisa.ec (en
                adelante, "el Sitio"), aceptas estar sujeto a estos Términos y
                Condiciones de Uso (en adelante, "los Términos"). Si no estás de
                acuerdo con estos Términos, no debes utilizar el Sitio.
              </p>

              <h2>2. Uso del Sitio Web</h2>
              <p>
                El Sitio es operado por la Escuela de Canto Katty Elisa. Aceptas
                usar el Sitio solo para propósitos legítimos y en conformidad
                con todas las leyes aplicables.
              </p>
              <p>No debes utilizar el Sitio para:</p>
              <ul>
                <li>Transmitir contenido ilegal, ofensivo o dañino</li>
                <li>Interferir con el funcionamiento del Sitio</li>
                <li>Intentar obtener acceso no autorizado</li>
                <li>Realizar prácticas de spam o correo no deseado</li>
                <li>Violar derechos de propiedad intelectual</li>
                <li>
                  Compartir información personal de otros sin consentimiento
                </li>
              </ul>

              <h2>3. Propiedad Intelectual</h2>
              <p>
                Todo el contenido del Sitio, incluyendo texto, imágenes, videos,
                logos, gráficos y software, está protegido por derechos de autor
                y pertenece a la Escuela de Canto Katty Elisa o a sus
                proveedores de contenido.
              </p>
              <p>
                <strong>Prohibido:</strong> Reproducir, distribuir, transmitir,
                exhibir o hacer públicos los contenidos sin permiso explícito
                por escrito.
              </p>
              <p>
                <strong>Permitido:</strong> Descargar contenido solo para uso
                personal no comercial, siempre que se mantengan los avisos de
                derechos de autor.
              </p>

              <h2>4. Limitación de Responsabilidad</h2>
              <p>
                El Sitio se proporciona "tal cual" sin garantías de ningún tipo,
                ya sean expresas, implícitas o estatutarias. La Escuela de Canto
                Katty Elisa:
              </p>
              <ul>
                <li>
                  No garantiza que el Sitio sea libre de errores, interrupciones
                  o que sea completamente seguro
                </li>
                <li>
                  No es responsable por daños indirectos, incidentales,
                  especiales o consecuentes derivados del uso o la imposibilidad
                  de usar el Sitio
                </li>
                <li>
                  No es responsable por la precisión, integridad o utilidad de
                  la información en el Sitio
                </li>
                <li>
                  No respalda ningún contenido de terceros vinculado desde el
                  Sitio
                </li>
              </ul>

              <h2>5. Enlaces Externos</h2>
              <p>
                El Sitio puede contener enlaces a sitios web de terceros. Estos
                enlaces se proporcionan solo como referencia y no constituyen un
                respaldo de esos sitios. No somos responsables por el contenido,
                disponibilidad o prácticas de privacidad de sitios externos.
              </p>

              <h2>6. Formulario de Contacto</h2>
              <p>
                Al enviar información a través de nuestro formulario de
                contacto, aceptas:
              </p>
              <ul>
                <li>Proporcionar información precisa y completa</li>
                <li>
                  Que tu información será utilizada solo para responder tu
                  consulta
                </li>
                <li>
                  Consultar nuestra Política de Privacidad para entender cómo se
                  protege tu información
                </li>
              </ul>

              <h2>7. Limitación de Responsabilidad de Contenido del Sitio</h2>
              <p>La Escuela de Canto Katty Elisa no es responsable por:</p>
              <ul>
                <li>Pérdida de datos, interrupciones del servicio o virus</li>
                <li>Daños a dispositivos o pérdida de conexión a Internet</li>
                <li>Retrasos en el servicio fuera de nuestro control</li>
                <li>Cambios o interrupciones en el Sitio sin previo aviso</li>
              </ul>

              <h2>8. Indemnización</h2>
              <p>
                Aceptas indemnizar, defender y eximir de responsabilidad a la
                Escuela de Canto Katty Elisa, sus directivos, empleados y
                agentes de cualquier reclamación, daño, pérdida o gasto
                (incluyendo honorarios de abogados) que surja de:
              </p>
              <ul>
                <li>Tu uso del Sitio</li>
                <li>Tu violación de estos Términos</li>
                <li>Tu violación de derechos de terceros</li>
              </ul>

              <h2>9. Modificación de Términos</h2>
              <p>
                Nos reservamos el derecho de actualizar estos Términos en
                cualquier momento sin previo aviso. Tu uso continuado del Sitio
                después de publicar cambios constituye tu aceptación de los
                nuevos Términos.
              </p>

              <h2>10. Suspensión y Terminación</h2>
              <p>Nos reservamos el derecho de:</p>
              <ul>
                <li>
                  Suspender o terminar tu acceso al Sitio en cualquier momento
                </li>
                <li>
                  Sin responsabilidad por pérdidas o daños que resulten de la
                  suspensión
                </li>
                <li>Si violas estos Términos o cualquier ley aplicable</li>
              </ul>

              <h2>11. Jurisdicción y Ley Aplicable</h2>
              <p>
                Estos Términos se rigen por las leyes de la República del
                Ecuador, sin considerar sus conflictos de disposiciones legales.
                Cualquier disputa surgida será resuelta en los juzgados
                competentes de Guayaquil, Ecuador.
              </p>

              <h2>12. Divisibilidad</h2>
              <p>
                Si alguna disposición de estos Términos se considera inválida o
                inaplicable, la disposición será modificada al mínimo necesario
                para hacerla válida, o si no es posible, será separada del resto
                de los Términos, sin afectar la validez de las demás
                disposiciones.
              </p>

              <h2>13. Contacto para Preguntas</h2>
              <p>Si tienes preguntas sobre estos Términos y Condiciones:</p>
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
                  Al utilizar este Sitio, reconoces que has leído, comprendido y
                  aceptas estar sujeto a estos Términos y Condiciones de Uso.
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
