"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../../public/IMG/header-logo.png";
import menu from "../../public/SVG/burger-menu.svg";
import closeBtn from "../../public/SVG/btn-x.svg";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import ModalForm from "./ModalForm";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      {showNotification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[10000] animate-slide-down w-[90%] max-w-md">
          <div className="bg-title-green text-primary-black px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg border-2 border-primary-white">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-black rounded-full animate-pulse flex-shrink-0"></div>
              <span className="font-urbanist font-semibold text-xs md:text-sm">
                Message sent successfully!
              </span>
            </div>
          </div>
        </div>
      )}
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
            href="#services"
            className="text-primary-white font-urbanist font-normal text-base hover:text-btn-green transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-primary-white font-urbanist font-normal text-base hover:text-btn-green transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-primary-white font-urbanist font-normal text-base hover:text-btn-green transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
        <button
          className="hidden lg:block w-[170px] h-10 bg-primary-white rounded-[28px] text-primary-dark font-urbanist font-semibold text-sm leading-5 hover:bg-btn-green transition-colors duration-300"
          onClick={openModal}
        >
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
      {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenModal={openModal}
        />
      )}
      <ModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Header;
