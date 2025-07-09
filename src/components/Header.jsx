"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../../public/IMG/header-logo.png";
import menu from "../../public/SVG/burger-menu.svg";
import closeBtn from "../../public/SVG/btn-x.svg";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="container  pt-5 pb-[15px] lg:py-8 flex justify-between items-center w-[360px] md:w-[768px] lg:w-[1280px]">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="logo" width={34} height={29} />
          <span className="text-primary-white font-urbanist font-bold text-base uppercase leading-5 tracking-[0.06em]">
            Clarion Solutions
          </span>
        </Link>
        <nav className="gap-12 hidden lg:flex">
          <Link
            href="#"
            className="text-primary-white font-urbanist font-normal text-base hover:text-btn-green transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            href="#"
            className="text-primary-white font-urbanist font-normal text-base hover:text-btn-green transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-primary-white font-urbanist font-normal text-base hover:text-btn-green transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-primary-white font-urbanist font-normal text-base hover:text-btn-green transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
        <button className="hidden lg:block w-[170px] h-10 bg-primary-white rounded-[28px] text-primary-dark font-urbanist font-semibold text-sm leading-5 hover:bg-btn-green transition-colors duration-300">
          Contact us
        </button>
        <button
          className="flex items-center gap-2 lg:hidden"
          onClick={toggleMobileMenu}
        >
          <Image
            src={isMobileMenuOpen ? closeBtn : menu}
            alt={isMobileMenuOpen ? "close" : "menu"}
            width={24}
            height={24}
          />
        </button>
      </header>
      {isMobileMenuOpen && <MobileMenu />}
    </>
  );
};

export default Header;
