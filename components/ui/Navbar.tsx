"use client";
import { useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
// import { ContactButton } from "./ContactButton";
import Link from "next/link";
import Cart from "../Cart";
import { cn } from "@/utils/cn";

import { useSectionStore } from "@/store/sectionStore";

const ListItem = ({
  href,
  title,
  classNameProp,
}: {
  href: string;
  title: string;
  classNameProp?: string;
  pathname?: string;
}) => {
  const { activeSection, setActiveSection } = useSectionStore();

  const isActive = activeSection === href;

  const handleClick = () => {
    // Actualiza la sección activa cuando se hace clic en un enlace
    setActiveSection(href);
  };
  return (
    <li className={cn(``, classNameProp)}>
      <Link
        href={href}
        onClick={handleClick}
        className={`w-fit hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70 ${
          isActive ? "underline" : ""
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        }}
        className="w-full fixed top-0 z-50 bg-segundo/60 backdrop-blur-md"
      >
        <hr className="absolute bottom-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-quinto to-transparent bg-center" />
        <ul className="relative px-2 flex justify-between items-center text-quinto text-xl font-medium font-primary h-[50px] ">
          {/* HOME */}
          <ListItem
            href="/"
            title="MUSTANG"
            classNameProp="order-3 md:order-first "
          />
          {/* DESKTOP MENU */}
          <ListItem href="/menu" title="MENÚ" classNameProp="hidden md:block" />
          {/* ABOUT US */}
          <ListItem
            href="/#nosotros"
            title="NOSOTROS"
            classNameProp="hidden md:block"
          />
          {/* CONTACT */}
          <ListItem
            href="/#contacto"
            title="CONTACTO"
            classNameProp="hidden md:block"
          />
          {/* GALLERY */}
          <ListItem
            href="/#galeria"
            title="GALERÍA"
            classNameProp="hidden md:block"
          />
          {/* CONTACT BUTTON */}
          {/* <ContactButton
            classNameProp={`text-quinto w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] order-1 sm:order-last`}
          /> */}
          {/* CART */}
          <Cart classNameProp="order-2 hidden md:block" />

          {/* MOBILE MENU ICON */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list order-3 md:hidden cursor-pointer hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
            viewBox="0 0 16 16"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>

          {/* MOBILE MENU */}
          {showMenu ? (
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 50 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute w-fit max-450:max-w-[300px] mx-auto px-3 py-1 inset-x-0 max-450:top-2 rounded-xl border border-cuarto flex flex-wrap items-center justify-center gap-4 500:gap-10  text-sm md:text-base text-center bg-primero/30 backdrop-blur-md"
            >
              {/* <Link
                href="/menu"
                className="hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
              >
                MENÚ
              </Link> */}
              <ListItem  href="/menu" title="MENÚ" classNameProp=""/>
              
              {/* <Link
                href="/#nosotros"
                className="hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
              >
                NOSOTROS
              </Link> */}
              <ListItem  href="/#nosotros" title="NOSOTROS" classNameProp=""/>
              {/* <Link
                href="/#contacto"
                className="hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
              >
                CONTACTO
              </Link> */}
              <ListItem  href="/#contacto" title="CONTACTO" classNameProp=""/>
              {/* <Link
                href="/#galeria"
                className="hover:scale-95 transition ease-in duration-150 hover:opacity-70 active:scale-95 active:opacity-70"
              >
                GALERÍA
              </Link> */}
              <ListItem  href="/#galeria" title="GALERÍA" classNameProp=""/>
            </m.div>
          ) : (
            ""
          )}
        </ul>
      </m.nav>
    </LazyMotion>
  );
};

export default Navbar;
