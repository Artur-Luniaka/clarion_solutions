"use client";

import Image from "next/image";
import blackShadow from "../../public/IMG/join-black-shadow.webp";
import photoShadow from "../../public/IMG/join-photo-shadow.png";
import photo from "../../public/IMG/join-photo.webp";

const JoinSection = ({ onOpenModal }) => {
  return (
    <section className="py-[45px] lg:py-[145px] lg:relative">
      <div className="flex flex-col md:items-center lg:w-[536px]">
        <div className="relative mb-[30px]">
          <h2 className="font-actay-wide text-[24px] font-bold text-primary-white leading-[29px] uppercase md:mb-4 lg:text-left lg:text-[48px] lg:leading-[58px] lg:mb-[28px]">
            Join the world <br className="md:hidden lg:block" /> of effective
            SEO <span className="text-title-green">today</span>
          </h2>
          <p className="absolute bottom-[-11px] left-[100px] md:static font-urbanist text-sm font-light text-primary-white w-[116px] md:w-full md:text-center lg:hidden">
            We help businesses grow through
          </p>
          <p className="hidden lg:block lg:text-left lg:text-base lg:w-[322px] lg:font-urbanist lg:font-light lg:text-primary-white">
            Start growing your business with SEO strategies that work.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenModal}
          className="w-[320px] lg:w-[272px] h-[40px] lg:h-[52px] flex items-center justify-center bg-btn-green text-primary-dark font-urbanist text-base font-semibold rounded-[28px] lg:mr-auto hover:bg-primary-white transition-all duration-300"
        >
          Get started now
        </button>
      </div>
      <Image
        src={photoShadow}
        alt="black-shadow"
        className="absolute bottom-[45px] right-[-58px] w-[745px] h-[500px] hidden lg:block"
      />
      <Image
        src={photo}
        alt="photo"
        className="absolute bottom-[30px] right-[-130px] w-[810px] h-[580px] hidden lg:block"
      />

      <Image
        src={blackShadow}
        alt="black-shadow"
        className="absolute bottom-[-225px] right-[-125px] w-[850px] h-[500px] lg:block hidden lg:overflow-hidden"
      />
    </section>
  );
};

export default JoinSection;
