"use client";
import React from "react";
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
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">

            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item active">
                <a
                  href="#dropdown-menu-one"
                  className={`collapsed mb-menu-link ${[...demoItems].some(
                    (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
                  )
                      ? "active"
                      : ""
                    } `}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-one"
                >
                  <span></span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-one" className="collapse">
                  <ul className="sub-nav-menu">
                    {demoItems.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className={`sub-nav-link ${pathname.split("/")[1] == link.href.split("/")[1]
                              ? "active"
                              : ""
                            } `}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a href="/">Inicio</a>
              </li>
              <li className="nav-mb-item">

                <a href="#nosotros">Nosotros</a>

              </li>
               <li className="nav-mb-item">

                <a href="#niveles">Niveles</a>

              </li>
               <li className="nav-mb-item">
                <a href="#">Testimonios</a>
              </li>
                <li className="nav-mb-item">
                <a href="#contacto">Contacto</a>
              </li>



              <li className="nav-mb-item">
                <a
                  href="https://themeforest.net/user/themesflat"
                  className="mb-menu-link"
                >
                  Inscribirme
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-other-content">



          </div>
        </div>

      </div>
    </div>
  );
}
