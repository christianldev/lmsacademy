import "../public/scss/main.scss";
import "photoswipe/style.css";
import "react-range-slider-input/dist/style.css";
import "../public/css/image-compare-viewer.min.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  metadataBase: new URL("https://lmsacademy.com"),
  title: {
    default: "Katty Elisa | Escuela de canto y voz",
    template: "%s | Katty Elisa",
  },
  description:
    "Descubre cursos de canto, técnica vocal, desarrollo artístico y formación musical con Katty Elisa. Aprende con clases personalizadas y resultados reales.",
  keywords: [
    "escuela de canto",
    "cursos de canto",
    "clases de voz",
    "técnica vocal",
    "entrenamiento vocal",
    "Katty Elisa",
    "formación musical",
  ],
  alternates: {
    canonical: "https://lmsacademy.com",
  },
  openGraph: {
    title: "Katty Elisa | Escuela de canto y voz",
    description:
      "Mejora tu técnica vocal, tu presencia escénica y tu confianza con los cursos de Katty Elisa.",
    url: "https://lmsacademy.com",
    siteName: "Katty Elisa",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katty Elisa | Escuela de canto y voz",
    description:
      "Cursos de canto y desarrollo vocal para principiantes y artistas avanzados.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="preload-wrapper popup-loader">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
