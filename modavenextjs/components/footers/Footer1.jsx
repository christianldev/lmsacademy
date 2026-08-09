"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ScrollTop from "../common/ScrollTop";
import { footerLinks, socialLinks } from "@/data/footerLinks";
import axios from "axios";
export default function Footer1({
  border = true,
  dark = false,
  hasPaddingBottom = false,
}) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        },
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount
  return (
    <>
      <footer
        id="footer"
        className={`footer ${dark ? "bg-main" : ""} ${
          hasPaddingBottom ? "has-pb" : ""
        } `}
      >
        <div className={`footer-wrap ${!border ? "border-0" : ""}`}>
          <div className="footer-body py-4">
            <div className="container">
              <div
                className="row d-flex align-items-center justify-content-between"
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  paddingBottom: "24px",
                }}
              >
                <div className="col-auto">
                  <div className="footer-logo">
                    <Link href={`/`}>
                      <Image
                        alt="Logo"
                        src={
                          dark
                            ? "/images/logo/logo.svg"
                            : "/images/logo/logo.svg"
                        }
                        width={140}
                        height={40}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="footer-menu d-flex gap-4">
                    {footerLinks.map((section, sectionIndex) => (
                      <React.Fragment key={sectionIndex}>
                        {section.items.map((item, itemIndex) => (
                          <div
                            className="text-caption-1 d-flex align-items-center"
                            key={itemIndex}
                          >
                            {item.isLink ? (
                              <Link
                                href={item.href}
                                className="footer-menu_item text-decoration-none text-secondary"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <a
                                href={item.href}
                                className="footer-menu_item text-decoration-none text-secondary"
                              >
                                {item.label}
                              </a>
                            )}
                            {(sectionIndex !== footerLinks.length - 1 ||
                              itemIndex !== section.items.length - 1) && (
                              <span
                                className="mx-2 text-secondary"
                                style={{ opacity: 0.5 }}
                              >
                                /
                              </span>
                            )}
                          </div>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="col-auto">
                  <ul
                    className={`tf-social-icon d-flex gap-3 m-0 p-0 list-unstyled ${dark ? "style-white" : ""}`}
                  >
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className={`text-secondary ${link.className}`}
                          aria-label={link.ariaLabel}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={`icon ${link.iconClass}`}
                            style={{ fontSize: "18px" }}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom py-4">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <p className="text-caption-1 text-secondary m-0">
                    © {new Date().getFullYear()} IC Web Studio. Todos los
                    derechos reservados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop hasPaddingBottom={hasPaddingBottom} />
    </>
  );
}
