"use client";

import Link from "next/link";

const MobileMenu = ({ onClose, onOpenModal }) => {
  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleContactClick = () => {
    if (onOpenModal) {
      onOpenModal();
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-full bg-primary-dark z-40 min-h-screen">
      <div className="container pt-[45px]">
        <h2 className="font-actay-wide font-bold text-2xl uppercase text-primary-white leading-[29px] mb-6">
          Need <span className="text-title-green">help?</span>
        </h2>
        <button
          type="button"
          className="flex justify-center items-center w-[320px] h-10 bg-primary-white rounded-[28px] text-primary-dark font-urbanist font-semibold text-sm leading-5 mb-[45px]"
          onClick={handleContactClick}
        >
          Contact us
        </button>
        <nav className="flex flex-col gap-8">
          <Link
            href="#"
            className="text-primary-white font-urbanist font-normal text-base"
            onClick={handleLinkClick}
          >
            Home
            <div className="border-b border-primary-white mt-2" />
          </Link>

          <Link
            href="#services"
            className="text-primary-white font-urbanist font-normal text-base"
            onClick={handleLinkClick}
          >
            Services
            <div className="border-b border-primary-white mt-2" />
          </Link>
          <Link
            href="#about"
            className="text-primary-white font-urbanist font-normal text-base"
            onClick={handleLinkClick}
          >
            About
            <div className="border-b border-primary-white mt-2" />
          </Link>
          <Link
            href="#contact"
            className="text-primary-white font-urbanist font-normal text-base"
            onClick={handleLinkClick}
          >
            Contact
            <div className="border-b border-primary-white mt-2" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
