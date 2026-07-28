"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollTop from "@/components/common/ScrollTop";
import Context from "@/context/Context";
import CartModal from "@/components/modals/CartModal";
import QuickView from "@/components/modals/QuickView";
import QuickAdd from "@/components/modals/QuickAdd";
import Compare from "@/components/modals/Compare";
import MobileMenu from "@/components/modals/MobileMenu";
import SearchModal from "@/components/modals/SearchModal";
import SizeGuide from "@/components/modals/SizeGuide";
import Wishlist from "@/components/modals/Wishlist";
import DemoModal from "@/components/modals/DemoModal";
import Categories from "@/components/modals/Categories";
import AccountSidebar from "@/components/modals/AccountSidebar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm").then(() => {});
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (!header) return;

      if (window.scrollY > 100) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    setScrollDirection("up");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
      } else {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const bootstrap = require("bootstrap");
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (scrollDirection === "up") {
        header.style.top = "0px";
        header.style.transform = "translateY(0)";
      } else {
        header.style.top = "0px";
        header.style.transform = `translateY(-${header.offsetHeight}px)`;
      }
    }
  }, [scrollDirection]);

  useEffect(() => {
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);

  return (
    <>
      <Context>
        <div id="wrapper" key="wrapper">
          {children}
        </div>
        <CartModal key="cart-modal" />
        <QuickView key="quick-view" />
        <QuickAdd key="quick-add" />
        <Compare key="compare" />
        <MobileMenu key="mobile-menu" />
        <SearchModal key="search-modal" />
        <SizeGuide key="size-guide" />
        <Wishlist key="wishlist" />
        <DemoModal key="demo-modal" />
        <Categories key="categories" />
        <AccountSidebar key="account-sidebar" />
      </Context>
      <ScrollTop />
    </>
  );
}
