"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/IMG/header-logo.png";
import tiktok from "../../public/SVG/tik-tok.svg";
import instagram from "../../public/SVG/instagram.svg";
import linkedin from "../../public/SVG/linkedin.svg";
import telegram from "../../public/SVG/telegram.svg";
import greenShadow from "../../public/IMG/hero-green-shadow.webp";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container py-[40px] lg:py-[70px] w-[360px] md:w-[768px] lg:w-[1280px] relative z-20">
      <Image
        src={greenShadow}
        alt="green-shadow"
        className="lg:hidden absolute bottom-0 left-[-500px] -z-10 w-auto max-w-none h-full"
      />
      <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-between lg:mb-[50px]">
        <div className="mb-[60px] lg:mb-0">
          <Link href="/" className="flex items-center gap-4">
            <Image src={logo} alt="logo" width={34} height={29} />
            <span className="text-primary-white font-urbanist font-bold text-base uppercase leading-5 tracking-[0.06em]">
              Clarion Solutions
            </span>
          </Link>
        </div>
        <div className="mb-[60px] lg:mb-0">
          <h3 className="text-primary-white font-actay-wide font-bold text-base uppercase leading-5 tracking-[0.06em] mb-4">
            Navigation
          </h3>
          <nav className="flex flex-col gap-5">
            <Link
              href="/"
              className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="mb-[60px] lg:mb-0">
          <h3 className="text-primary-white font-actay-wide font-bold text-base uppercase leading-5 tracking-[0.06em] mb-4">
            Information
          </h3>
          <nav className="flex flex-col gap-5">
            <Link
              href="/legal-details"
              className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
            >
              Legal Details
            </Link>
            <Link
              href="/terms-of-service"
              className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-[60px] mb-10 lg:mb-0">
          <div>
            <h3 className="text-primary-white font-actay-wide font-bold text-base uppercase leading-5 tracking-[0.06em] mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-5">
              <a
                href="tel:+16618575169"
                className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
              >
                +1 (661) 857-5169
              </a>
              <a
                href="mailto:clarionsolut@gmail.com"
                className="font-urbanist font-normal text-base text-primary-white hover:text-title-green transition-all duration-300"
              >
                clarionsolut@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-primary-white font-actay-wide font-bold text-base uppercase leading-5 tracking-[0.06em] mb-4">
              Social Media
            </h3>
            <div className="flex items-center gap-5">
              <a
                href="/"
                className="hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={linkedin}
                  alt="tik-tok"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="/"
                className="hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={instagram}
                  alt="instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="/"
                className="hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={telegram}
                  alt="linkedin"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="/"
                className="hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={tiktok}
                  alt="telegram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-primary-white font-montserrat font-normal text-sm leading-[29px] tracking-[0.05em] lg:text-base lg:tracking-[0.04em]">
        © {year} Clarion solutions
      </p>
    </footer>
  );
};

export default Footer;
