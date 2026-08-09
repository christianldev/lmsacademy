import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
export default function Header1({ fullWidth = false }) {
  return (
    <header
      id="header"
      className={`header-default ${fullWidth ? "header-fullwidth" : ""} `}
    >
      <div className={fullWidth ? "" : "container"}>
        <div className="row wrapper-header align-items-center">
          <div className="col-md-4 col-3 d-xl-none">
            <a
              href="#mobileMenu"
              className="mobile-menu"
              data-bs-toggle="offcanvas"
              aria-controls="mobileMenu"
              aria-label="Abrir menú de navegación"
            >
              <i className="icon icon-categories" />
            </a>
          </div>
          <div className="col-xl-3 col-md-4 col-6">
            <Link href={`/`} className="logo-header">
              <Image
                alt="logo"
                className="logo"
                src="/images/logo/logo.svg"
                width={100}
                height={25}
              />
            </Link>
          </div>
          <div className="col-xl-9 d-none d-xl-block">
            <nav className="box-navigation text-center">
              <ul className="box-nav-ul d-flex align-items-center justify-content-center">
                <Nav />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
