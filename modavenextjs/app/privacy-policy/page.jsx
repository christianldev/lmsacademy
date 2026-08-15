import React from "react";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

export const metadata = {
  title: "Política de Privacidad || Academia de Canto",
  description: "Política de Privacidad de la Academia de Canto.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header1 />
      <div className="tf-page-title style-2">
        <div className="container-full">
          <div className="heading text-center">Política de Privacidad</div>
        </div>
      </div>
      <section className="flat-spacing-11">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content-policy">
                <h4>1. Introducción</h4>
                <p>
                  En la Academia de Canto protegemos su información. Esta
                  Política de Privacidad explica cómo recopilamos, usamos y
                  protegemos los datos personales que nos proporciona a través
                  de nuestro formulario de contacto u otros medios.
                </p>
                <br />
                <h4>2. Información que recopilamos</h4>
                <p>
                  Cuando se comunica con nosotros a través de nuestro sitio web,
                  podemos recopilar la siguiente información:
                </p>
                <ul>
                  <li>Nombre completo.</li>
                  <li>Dirección de correo electrónico.</li>
                  <li>Número de teléfono.</li>
                  <li>
                    Cualquier otra información que decida proporcionarnos en el
                    mensaje.
                  </li>
                </ul>
                <br />
                <h4>3. Uso de la información</h4>
                <p>
                  La información que recopilamos se utiliza exclusivamente para:
                </p>
                <ul>
                  <li>
                    Responder a sus consultas sobre nuestras clases de canto.
                  </li>
                  <li>
                    Enviarle información relevante sobre horarios, tarifas y
                    promociones (solo si nos ha autorizado para ello).
                  </li>
                  <li>Mejorar nuestro servicio de atención al cliente.</li>
                </ul>
                <br />
                <h4>4. Protección de datos</h4>
                <p>
                  No vendemos, intercambiamos ni transferimos a terceros su
                  información personal. Mantenemos medidas de seguridad para
                  proteger sus datos personales cuando envía una solicitud.
                </p>
                <br />
                <h4>5. Derechos del usuario</h4>
                <p>
                  Usted tiene derecho a solicitar el acceso, corrección o
                  eliminación de sus datos personales en cualquier momento. Para
                  ello, póngase en contacto con nosotros.
                </p>
                <br />
                <h4>6. Consentimiento</h4>
                <p>
                  Al utilizar nuestro formulario de contacto, usted acepta
                  nuestra Política de Privacidad.
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
