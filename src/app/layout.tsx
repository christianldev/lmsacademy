import BootstrapJs from "@/core/common/bootstrap-js/bootstrapjs";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@tabler/icons-webfont/dist/tabler-icons.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import "../../src/style/icons/feather/feather.css";
import "../../src/style/css/meanmenu.css";
import "../../src/style/css/iconsax.css";
import "./globals.scss"


export const metadata = {
  title: "Dreams LMS | Advanced Learning Management System Template",
  description: "Dreams LMS is a powerful Learning Management System template designed for educators, training institutions, and businesses. Manage courses, track student progress, conduct virtual classes, and enhance e-learning experiences with an intuitive and feature-rich platform.",
  keywords: "LMS template, Learning Management System, e-learning software, online course platform, student management, education portal, virtual classroom, training management system, course tracking, online education",
  author: "Dreams Technologies",
  icons: {
    icon: "favicon.png",
    shortcut: "favicon.png", // Add shortcut icon for better support
    apple: "favicon.png", // Optional: for Apple devices (place in `public/`)
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapJs />
      </body>
    </html>
  );
}
