"use client";

import Image from "next/image";
import graphicMob from "../../public/IMG/hero-graphic-mob.png";
import graphicDesk from "../../public/IMG/hero-graphic-desk.png";
import lineMob from "../../public/IMG/hero-graphic-line-mob.png";
import lineDesk from "../../public/IMG/hero-graphic-line-desk.png";
import shadowMob from "../../public/IMG/hero-graphic-shadow-mob.png";
import shadowDesk from "../../public/IMG/hero-white-shadow-desk.png";
import manWoman from "../../public/IMG/hero-man-women-shadow.png";
import manWomanPhoto from "../../public/IMG/hero-man-women.webp";
import blackShadow from "../../public/IMG/hero-black-shadow.png";
import greenShadow from "../../public/IMG/hero-green-shadow.png";
import shapeMob from "../../public/IMG/hero-shape-mob.webp";
import shapeDesk from "../../public/IMG/hero-shape-desk.webp";

const HeroSection = ({ onOpenModal }) => {
  return (
    <section className="relative py-[45px] lg:pt-[41px] lg:pb-[146px] z-20">
      <Image
        src={greenShadow}
        alt="hero-graphic"
        className="absolute top-[-225px] lg:top-[-300px] left-[-150px] md:left-[-260px] lg:left-[-500px] -z-10 w-full h-full"
      />
      <Image
        src={greenShadow}
        alt="hero-graphic"
        className="absolute bottom-[-180px] lg:bottom-0 right-[-180px] lg:right-[-430px] -z-10 w-full h-full"
      />
      <Image
        src={shapeMob}
        alt="hero-graphic"
        className="absolute bottom-[-35px] md:bottom-[25px] left-[-180px] md:left-[-215px] -z-10 w-auto h-auto max-w-none lg:hidden"
      />
      <Image
        src={shapeDesk}
        alt="hero-graphic"
        className=" hidden lg:block absolute bottom-[-125px] left-[-110px] -z-10 w-full h-full"
      />
      <h1 className="text-primary-white font-actay-wide font-bold text-[32px] lg:text-[67px] uppercase mb-6 md:text-center lg:mb-[60px]">
        SEO That Brings You Clients
      </h1>
      <div className="lg:hidden">
        <div className="flex gap-4 mb-6 md:justify-center">
          <div className="w-[152px] h-[139px] py-3 px-4 rounded-[20px] shrink-0 backdrop-blur-[3px] shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.25)] bg-[rgba(208,255,89,0.16)]">
            <p className="font-urbanist font-semibold text-primary-white text-[40px] uppercase mb-4 leading-[40px]">
              100%
            </p>
            <p className="font-urbanist font-extralight text-primary-white text-sm w-[70px] leading-[18px]">
              Real results. Transparent process.
            </p>
          </div>
          <p className="font-urbanist font-light text-primary-white text-sm leading-[17px] md:w-[450px]">
            Boost your website’s position in Google and attract more organic
            traffic. We work with businesses of all sizes — from local companies
            to large eCommerce projects.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenModal}
          className="flex justify-center items-center w-[320px] h-10 bg-btn-green rounded-[28px] text-primary-dark font-urbanist font-semibold text-sm leading-5 mb-6 mx-auto"
        >
          Contact us
        </button>
        <div className="relative overflow-hidden py-[50px] px-4 bg-primary-white rounded-[20px] w-[320px] md:w-[688px]">
          <p className=" font-urbanist font-semibold text-xl uppercase text-primary-black w-[206px] leading-[24px] z-40 relative">
            Get more traffic — start now
          </p>
          <Image
            src={shadowMob}
            alt="hero-graphic"
            className="absolute top-0 left-0 z-20 w-[320px] md:w-[500px]"
          />
          <Image
            src={lineMob}
            alt="hero-graphic"
            className="absolute top-[25px] left-0 z-10 w-[320px] md:w-[688px]"
          />
          <Image
            src={graphicMob}
            alt="hero-graphic"
            width={209}
            height={152}
            className="absolute bottom-0 right-0 z-30 w-[209px] md:w-[260px]"
          />
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <div className="flex gap-[79px] items-center mb-[88px]">
          <button
            type="button"
            onClick={onOpenModal}
            className="flex justify-center items-center w-[265px] h-12 bg-btn-green rounded-[28px] text-primary-dark font-urbanist font-semibold text-base leading-5 hover:bg-primary-white transition-colors duration-300"
          >
            Contact us
          </button>
          <p className="font-urbanist font-light text-primary-white text-base w-[348px]">
            Boost your website’s position in Google and attract more organic
            traffic. We work with businesses of all sizes — from local companies
            to large eCommerce projects.
          </p>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col w-[265px] h-[232px] pt-5 pb-4 px-6 rounded-[20px] shrink-0 backdrop-blur-[3px] shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.25)] bg-[rgba(208,255,89,0.16)]">
            <p className="font-urbanist font-semibold text-primary-white text-[80px] uppercase mb-auto leading-[80px]">
              100%
            </p>
            <p className="font-urbanist font-extralight text-primary-white text-base w-[160px]">
              Real results. Transparent process.
            </p>
          </div>
          <div className="relative overflow-hidden py-[47px] px-7 bg-primary-white rounded-[20px] w-[532px]">
            <p className=" font-urbanist font-semibold text-[32px] uppercase text-primary-black w-[336px] z-40 relative">
              Get more traffic — start now
            </p>
            <Image
              src={shadowDesk}
              alt="hero-graphic"
              className="absolute top-0 left-0 z-20 w-[368px]"
            />
            <Image
              src={lineDesk}
              alt="hero-graphic"
              className="absolute top-[25px] left-0 z-10"
            />
            <Image
              src={graphicDesk}
              alt="hero-graphic"
              width={209}
              height={152}
              className="absolute bottom-0 right-[30px] z-30 w-[358px]"
            />
          </div>
        </div>
      </div>
      <Image
        src={manWoman}
        alt="hero-graphic"
        className="hidden lg:block absolute top-[100px] right-[-192px] z-40 w-[650px] h-[595px] object-cover"
      />
      <Image
        src={manWomanPhoto}
        alt="hero-graphic"
        className="hidden lg:block absolute top-[48px] right-[-235px] z-50 w-[688px] h-[630px] object-cover"
      />
      <Image
        src={blackShadow}
        alt="hero-graphic"
        className="hidden lg:block absolute bottom-[40px] right-[-150px] z-50"
        width={954}
        height={246}
      />
      <Image
        src={blackShadow}
        alt="hero-graphic"
        className="hidden lg:block absolute bottom-[-110px] right-[-65px] z-50 h-[500px]"
        width={954}
        height={246}
      />
    </section>
  );
};

export default HeroSection;
