"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CurrencySelect from "../common/CurrencySelect";
import {
  blogLinks,
  demoItems,
  otherPageLinks,
  otherShopMenus,
  productFeatures,
  productLinks,
  productStyles,
  shopFeatures,
  shopLayout,
  swatchLinks,
} from "@/data/menu";
import { usePathname } from "next/navigation";
export default function MobileMenu() {
  const pathname = usePathname();
  return (
    <div
      className="offcanvas offcanvas-start canvas-mb"
      id="mobileMenu"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        style={{ color: "#ffffff" }}
      />

      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <div className="mb-4 px-3">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo.svg"
                  alt="Logo"
                  className="img-fluid"
                  width={180}
                  height={45}
                  style={{ width: "auto", height: "auto", maxHeight: "80px" }}
                />
              </Link>
            </div>

            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item my-4">
                <a
                  href="/"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#f5c542")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#ffffff")
                  }
                >
                  Inicio
                </a>
              </li>
              <li className="nav-mb-item my-4">
                <a
                  href="#nosotros"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#f5c542")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#ffffff")
                  }
                >
                  Nosotros
                </a>
              </li>
              <li className="nav-mb-item my-4">
                <a
                  href="#niveles"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#f5c542")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#ffffff")
                  }
                >
                  Niveles
                </a>
              </li>
              <li className="nav-mb-item my-4">
                <a
                  href="#testimonios"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#f5c542")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#ffffff")
                  }
                >
                  Testimonios
                </a>
              </li>
              <li className="nav-mb-item my-4">
                <a
                  href="#contacto"
                  style={{ color: "#ffffff" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#f5c542")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#ffffff")
                  }
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-other-content"></div>
        </div>
      </div>
    </div>
  );
}
