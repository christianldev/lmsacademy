"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const optionsData = [
  {
    value: "us",
    thumbnail: "/images/country/us.svg",
    text: "USD",
    selected: true,
  },
  {
    value: "vn",
    thumbnail: "/images/country/vn.svg",
    text: "VND",
  },
];
export default function CurrencySelect({ topStart = false, light = false }) {
  const [selected, setSelected] = useState(optionsData[0]);
  const [isDDOpen, setIsDDOpen] = useState(false);
  const languageSelect = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageSelect.current &&
        !languageSelect.current.contains(event.target)
      ) {
        setIsDDOpen(false); // Close the dropdown if click is outside
      }
    };
    // Add the event listener when the component mounts
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
 
}
