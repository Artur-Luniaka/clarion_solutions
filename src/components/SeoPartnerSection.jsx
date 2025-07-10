"use client";

import Image from "next/image";
import seoMob from "../../public/IMG/seo-section-img-mob.webp";
import seoDesk from "../../public/IMG/seo-section-img-desk.webp";
import logo from "../../public/IMG/header-logo.png";
import logoDesk from "../../public/IMG/seo-section-logo.png";

const SeoPartnerSection = () => {
  return (
    <section className="py-[45px] lg:py-[140px] lg:flex lg:relative">
      <div className="relative mb-[50px] z-20">
        <h2 className="font-actay-wide font-bold text-primary-white text-[40px] leading-[48px] uppercase lg:text-[108px] lg:leading-[130px] lg:w-[540px]">
          SEO Partner - is
        </h2>
        <p
          style={{
            background: "linear-gradient(165deg, #fff 0%, #d0ff50 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="absolute bottom-[-22px] lg:bottom-[10px] right-0 lg:right-[-340px] font-actay-wide font-bold text-xs leading-[14px] uppercase w-[229px] tracking-[0.01em] lg:text-2xl lg:leading-[29px] lg:w-[544px]"
        >
          a trusted team that grows your online presence, boosts your rankings,
          and helps your business attract high-quality clients.
        </p>
      </div>
      <div className="relative md:flex md:justify-center lg:hidden">
        <Image
          src={seoMob}
          alt="seo-section-img-mob"
          width={320}
          height={197}
        />
        <Image
          src={logo}
          alt="logo"
          width={39}
          height={33}
          className="absolute top-[6px] left-0 md:left-[184px]"
        />
        <Image
          src={logo}
          alt="logo"
          width={39}
          height={33}
          className="absolute bottom-0 left-[272px] md:left-[456px]"
        />
      </div>
      <Image
        src={seoDesk}
        alt="seo-section-img-mob "
        className="hidden lg:block w-[633px] h-[390px] absolute bottom-[190px] right-[-60px]"
      />
      <Image
        src={logoDesk}
        alt="logo"
        width={78}
        height={66}
        className="hidden lg:block absolute top-[153px] right-[495px]"
      />
      <Image
        src={logoDesk}
        alt="logo"
        width={78}
        height={66}
        className="hidden lg:block absolute bottom-[190px] right-[-42px]"
      />
    </section>
  );
};

export default SeoPartnerSection;
