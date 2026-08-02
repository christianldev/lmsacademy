"use client";

import { useEffect, useState } from "react";

export default function ScrollTop({ hasPaddingBottom = false }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 500 && !isButtonVisible) {
        setIsButtonVisible(true);
      } else if (scrollTop <= 500 && isButtonVisible) {
        setIsButtonVisible(false);
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(checkScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isButtonVisible]);

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phoneNumber = "593968886183"; // Reemplaza con tu número
    const message = "Hola, me gustaría obtener más información.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      id="whatsapp-button"
      className={`whatsapp-floating-button ${hasPaddingBottom ? "type-1" : ""} ${
        isButtonVisible ? "show" : ""
      }`}
      onClick={handleWhatsAppClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25d366",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        border: "none",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform: isButtonVisible ? "scale(1)" : "scale(0)",
      }}
    >
      <svg
        width="35"
        height="35"
        style={{ display: "block", width: "35px", height: "35px" }}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WhatsApp"
        role="img"
        viewBox="0 0 512 512"
      >
        <path
          fill="#ffffff"
          d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
        ></path>
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="26"
          d="M123 393l14-65a138 138 0 1150 47z"
        ></path>
      </svg>
    </button>
  );
}
