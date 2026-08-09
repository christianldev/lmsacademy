import "../public/scss/main.scss";
import "photoswipe/style.css";
import "react-range-slider-input/dist/style.css";
import "../public/css/image-compare-viewer.min.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  metadataBase: new URL("https://escuelakattyelisa.ec"),
  applicationName: "Katty Elisa",
  title: {
    default: "Katty Elisa | Escuela de canto en Guayaquil",
    template: "%s | Katty Elisa",
  },
  description:
    "Descubre cursos de canto, técnica vocal, desarrollo artístico y formación musical con Katty Elisa. Aprende con clases personalizadas y resultados reales.",
  keywords: [
    "escuela de canto",
    "escuela de canto en Guayaquil",
    "escuela de canto para niños",
    "escuela de canto para jóvenes",
    "escuela de canto para adultos",
    "cursos de canto",
    "clases de voz",
    "técnica vocal",
    "entrenamiento vocal",
    "Katty Elisa",
    "formación musical",
    "escuela de canto en Ecuador",
    "clases de canto Guayaquil",
    "aprender a cantar",
  ],
  authors: [{ name: "Katty Elisa", url: "https://escuelakattyelisa.ec" }],
  creator: "Katty Elisa",
  publisher: "Katty Elisa",
  alternates: {
    canonical: "https://escuelakattyelisa.ec",
  },
  openGraph: {
    title: "Katty Elisa | Escuela de canto en Guayaquil",
    description:
      "Mejora tu técnica vocal, tu presencia escénica y tu confianza con los cursos de Katty Elisa.",
    url: "https://escuelakattyelisa.ec",
    siteName: "Katty Elisa",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/images/slider/carrusel1.webp",
        width: 1200,
        height: 630,
        alt: "Katty Elisa - Escuela de canto en Guayaquil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katty Elisa | Escuela de canto en Guayaquil",
    description:
      "Cursos de canto y desarrollo vocal para principiantes y artistas avanzados.",
    images: ["/images/slider/carrusel1.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
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
