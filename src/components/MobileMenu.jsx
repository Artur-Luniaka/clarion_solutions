"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full bg-primary-dark z-40 min-h-screen pt-[80px]"
    >
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
    </motion.div>
  );
};

export default MobileMenu;
