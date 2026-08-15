import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

export const metadata = {
  title: "Aviso Legal | Katty Elisa",
  description:
    "Información legal y de contacto de la Escuela de Canto Katty Elisa.",
  alternates: {
    canonical: "https://escuelakattyelisa.ec/legal-notice",
  },
  openGraph: {
    title: "Aviso Legal | Katty Elisa",
    description: "Aviso legal de la Escuela de Canto Katty Elisa",
    url: "https://escuelakattyelisa.ec/legal-notice",
    type: "website",
  },
};

export default function LegalNotice() {
  return (
    <>
      <Header1 />
      <section className="legal-content-section" id="legal-notice">
        <div className="container">
          <div className="legal-content-wrapper">
            <div className="legal-header">
              <h1>Aviso Legal</h1>
              <p className="last-update">
                Última actualización: {new Date().toLocaleDateString("es-EC")}
              </p>
            </div>

            <div className="legal-body">
              <h2>1. Identificación de la Empresa</h2>
              <p>
                De conformidad con la Ley de Comercio Electrónico, Firmas
                Electrónicas y Mensajes de Datos del Ecuador, proporcionamos la
                siguiente información:
              </p>
              <ul>
                <li>
                  <strong>Nombre Comercial:</strong> Escuela de Canto Katty
                  Elisa
                </li>
                <li>
                  <strong>Titulares:</strong> Katty Elisa
                </li>
                <li>
                  <strong>Ubicación:</strong> Guayaquil, Pichincha, Ecuador
                </li>
                <li>
                  <strong>Teléfono de Contacto:</strong> +593 96 888 6183
                </li>
                <li>
                  <strong>Email:</strong> info@escuelakattyelisa.ec
                </li>
                <li>
                  <strong>Sitio Web:</strong> https://escuelakattyelisa.ec
                </li>
              </ul>

              <h2>2. Propósito del Sitio Web</h2>
              <p>
                El Sitio Web de la Escuela de Canto Katty Elisa tiene como
                finalidad:
              </p>
              <ul>
                <li>
                  Presentar información sobre nuestros servicios educativos
                </li>
                <li>
                  Proporcionar contenido sobre clases de canto y técnica vocal
                </li>
                <li>Facilitar el contacto directo con la escuela</li>
                <li>Compartir testimonios y experiencias de estudiantes</li>
                <li>Promocionar eventos y actividades especiales</li>
              </ul>

              <h2>3. Responsabilidad del Contenido</h2>
              <p>
                La Escuela de Canto Katty Elisa realiza los máximos esfuerzos
                para mantener actualizada y precisa la información del Sitio.
                Sin embargo:
              </p>
              <ul>
                <li>No garantiza la exactitud total del contenido</li>
                <li>
                  No es responsable por errores, omisiones o cambios sin previo
                  aviso
                </li>
                <li>
                  Se reserva el derecho de actualizar, corregir o modificar
                  contenido en cualquier momento
                </li>
              </ul>

              <h2>4. Derechos de Autor y Propiedad Intelectual</h2>
              <p>
                <strong>Contenido Protegido:</strong> Todo el contenido del
                Sitio, incluyendo:
              </p>
              <ul>
                <li>Textos, artículos y redacción</li>
                <li>Imágenes, fotografías y videos</li>
                <li>Logos, marcas y diseño gráfico</li>
                <li>Software, códigos y estructura del sitio</li>
              </ul>
              <p>
                está protegido por las leyes de derechos de autor de Ecuador y
                por tratados internacionales. Todos los derechos están
                reservados a la Escuela de Canto Katty Elisa, excepto donde se
                indique expresamente que el contenido es de terceros.
              </p>

              <h2>5. Uso del Contenido</h2>
              <p>El usuario puede:</p>
              <ul>
                <li>
                  Ver y descargar contenido para uso personal no comercial
                </li>
              </ul>
              <p>El usuario NO puede:</p>
              <ul>
                <li>Reproducir, distribuir o publicar contenido sin permiso</li>
                <li>Usar contenido con fines comerciales</li>
                <li>Modificar, traducir o crear trabajos derivados</li>
                <li>Remover avisos de derechos de autor o propiedad</li>
                <li>Usar en redes sociales sin atribución adecuada</li>
              </ul>

              <h2>6. Fotografías y Testimonios de Estudiantes</h2>
              <p>
                Las fotografías, videos y testimonios de estudiantes mostrados
                en el Sitio cuentan con el consentimiento informado de:
              </p>
              <ul>
                <li>Los estudiantes directamente (si son mayores de edad)</li>
                <li>Los padres o tutores legales (si son menores de edad)</li>
              </ul>
              <p>
                La Escuela se compromete a respetar la privacidad y dignidad de
                todos los estudiantes fotografiados.
              </p>

              <h2>7. Enlaces a Sitios Externos</h2>
              <p>
                El Sitio puede contener enlaces a sitios web de terceros, tales
                como:
              </p>
              <ul>
                <li>Redes sociales (Instagram, Facebook, YouTube)</li>
                <li>Plataformas de pago</li>
                <li>Sitios educativos o informativos relacionados</li>
              </ul>
              <p>
                <strong>Descargo de responsabilidad:</strong> La Escuela de
                Canto Katty Elisa no es responsable por:
              </p>
              <ul>
                <li>El contenido de sitios externos</li>
                <li>La disponibilidad o seguridad de esos sitios</li>
                <li>Las prácticas de privacidad de terceros</li>
                <li>Cualquier daño resultante del acceso a esos sitios</li>
              </ul>

              <h2>8. Redes Sociales</h2>
              <p>La Escuela de Canto Katty Elisa mantiene perfiles en:</p>
              <ul>
                <li>
                  <strong>Instagram:</strong> @escuelakattyelisa
                </li>
              </ul>
              <p>El contenido publicado en redes sociales está sujeto a:</p>
              <ul>
                <li>Las políticas de privacidad de cada plataforma</li>
                <li>Los términos de servicio de la red social</li>
                <li>Esta Política de Privacidad</li>
              </ul>

              <h2>9. Disponibilidad del Sitio</h2>
              <p>
                La Escuela de Canto Katty Elisa se esfuerza por mantener el
                Sitio disponible 24/7. Sin embargo:
              </p>
              <ul>
                <li>No garantiza disponibilidad continua sin interrupciones</li>
                <li>Puede realizar mantenimiento técnico sin previo aviso</li>
                <li>
                  No es responsable por interrupciones fuera de su control
                </li>
              </ul>

              <h2>10. Seguridad y Protección de Datos</h2>
              <p>
                La Escuela de Canto Katty Elisa implementa medidas de seguridad
                para proteger:
              </p>
              <ul>
                <li>
                  Datos personales ingresados a través del formulario de
                  contacto
                </li>
                <li>Información de comunicaciones por email</li>
                <li>Integridad del Sitio Web</li>
              </ul>
              <p>
                Para más información, consulta nuestra Política de Privacidad.
              </p>

              <h2>11. Limitación de Responsabilidad</h2>
              <p>
                Bajo ninguna circunstancia la Escuela de Canto Katty Elisa será
                responsable por:
              </p>
              <ul>
                <li>Daños indirectos o consecuentes</li>
                <li>Pérdida de datos o información</li>
                <li>Interrupciones del servicio</li>
                <li>Virus o malware en dispositivos de usuarios</li>
                <li>Errores en la transmisión de información</li>
              </ul>

              <h2>12. Renuncia de Garantías</h2>
              <p>
                El Sitio se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD" sin
                garantías de ningún tipo, ya sean expresas, implícitas o
                estatutarias.
              </p>
              <p>La Escuela NO garantiza:</p>
              <ul>
                <li>Que el Sitio sea libre de errores</li>
                <li>Que sea adecuado para un propósito particular</li>
                <li>Que sea completamente seguro</li>
                <li>La velocidad o rendimiento del Sitio</li>
              </ul>

              <h2>13. Cumplimiento Normativo</h2>
              <p>Este Sitio Web cumple con:</p>
              <ul>
                <li>
                  <strong>
                    Ley Orgánica de Protección de Datos Personales
                  </strong>{" "}
                  (LOPDP) de Ecuador
                </li>
                <li>
                  <strong>
                    Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes
                    de Datos
                  </strong>{" "}
                  de Ecuador
                </li>
                <li>
                  <strong>Reglamento General de Protección de Datos</strong>{" "}
                  (RGPD) - cuando aplica a usuarios de la Unión Europea
                </li>
                <li>
                  <strong>Normas de accesibilidad web</strong> para usuarios con
                  discapacidades
                </li>
              </ul>

              <h2>14. Cookies y Tecnologías de Seguimiento</h2>
              <p>
                <strong>
                  Este sitio web NO utiliza cookies ni sistemas de seguimiento.
                </strong>
                No implementamos:
              </p>
              <ul>
                <li>Cookies de sesión, persistentes o de análisis</li>
                <li>Google Analytics u otros trackers</li>
                <li>Píxeles de seguimiento o retargeting</li>
                <li>
                  LocalStorage, SessionStorage u otros almacenamientos del
                  navegador
                </li>
                <li>
                  Tecnologías de fingerprinting o identificación de dispositivos
                </li>
              </ul>
              <p>
                Tu navegación en este sitio es completamente anónima. Consulta
                nuestra Política de Privacidad para más detalles.
              </p>

              <h2>15. Modificaciones del Aviso Legal</h2>
              <p>
                La Escuela de Canto Katty Elisa se reserva el derecho de
                actualizar este Aviso Legal en cualquier momento. Los cambios
                entrarán en vigor cuando se publiquen en el Sitio. Tu uso
                continuado del Sitio implica la aceptación de los cambios.
              </p>

              <h2>16. Ley Aplicable y Jurisdicción</h2>
              <p>
                Este Aviso Legal se rige por las leyes de la República del
                Ecuador, sin consideración de sus conflictos de disposiciones
                legales. Cualquier disputa será resuelta exclusivamente en los
                juzgados competentes de Guayaquil, Pichincha, Ecuador.
              </p>

              <h2>17. Contacto para Consultas</h2>
              <p>Para cualquier pregunta sobre este Aviso Legal:</p>
              <ul>
                <li>
                  <strong>Email:</strong> info@escuelakattyelisa.ec
                </li>
                <li>
                  <strong>Teléfono:</strong> +593 96 888 6183
                </li>
                <li>
                  <strong>Ubicación:</strong> Guayaquil, Ecuador
                </li>
              </ul>

              <div className="legal-disclaimer" style={{ marginTop: "40px" }}>
                <p style={{ fontSize: "0.9em", color: "#666" }}>
                  <strong>Fecha de entrada en vigor:</strong>{" "}
                  {new Date().toLocaleDateString("es-EC")}
                </p>
                <p style={{ fontSize: "0.9em", color: "#666" }}>
                  Última actualización: {new Date().toLocaleDateString("es-EC")}
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
