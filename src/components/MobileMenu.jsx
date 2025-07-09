"use client";

import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="w-full bg-primary-dark z-40 min-h-screen">
      <div className="container pt-[45px]">
        <h2 className="font-actay-wide font-bold text-2xl uppercase text-primary-white leading-[29px] mb-6">
          Need <span className="text-title-green">help?</span>
        </h2>
        <button className="flex justify-center items-center w-[320px] h-10 bg-primary-white rounded-[28px] text-primary-dark font-urbanist font-semibold text-sm leading-5 mb-[45px]">
          Contact us
        </button>
        <nav className="flex flex-col gap-8">
          <Link
            href="#"
            className="text-primary-white font-urbanist font-normal text-base"
          >
            Home
            <div className="border-b border-primary-white mt-2" />
          </Link>

          <Link
            href="#"
            className="text-primary-white font-urbanist font-normal text-base"
          >
            Services
            <div className="border-b border-primary-white mt-2" />
          </Link>
          <Link
            href="#"
            className="text-primary-white font-urbanist font-normal text-base"
          >
            About
            <div className="border-b border-primary-white mt-2" />
          </Link>
          <Link
            href="#"
            className="text-primary-white font-urbanist font-normal text-base"
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
