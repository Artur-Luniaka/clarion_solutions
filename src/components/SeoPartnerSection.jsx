"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import seoMob from "../../public/IMG/seo-section-img-mob.webp";
import seoDesk from "../../public/IMG/seo-section-img-desk.webp";
import logo from "../../public/IMG/header-logo.png";
import logoDesk from "../../public/IMG/seo-section-logo.png";

const SeoPartnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[45px] lg:py-[140px] lg:flex lg:relative">
      <div className="relative mb-[50px] z-20">
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-actay-wide font-bold text-primary-white text-[40px] leading-[48px] uppercase lg:text-[108px] lg:leading-[130px] lg:w-[540px]"
        >
          SEO Partner - is
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
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
        </motion.p>
      </div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="relative md:flex md:justify-center lg:hidden"
      >
        <Image
          src={seoMob}
          alt="seo-section-img-mob"
          width={320}
          height={197}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
          className="absolute top-[6px] left-0 md:left-[184px]"
        >
          <Image src={logo} alt="logo" width={39} height={33} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
          className="absolute bottom-0 left-[272px] md:left-[456px]"
        >
          <Image src={logo} alt="logo" width={39} height={33} />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "190px",
          right: "-60px",
          width: "633px",
          height: "390px",
        }}
        className="hidden lg:block"
      >
        <Image
          src={seoDesk}
          alt="seo-section-img-mob "
          className="w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.4, delay: 1.0, ease: "easeOut" }}
        style={{ position: "absolute", top: "153px", right: "495px" }}
        className="hidden lg:block"
      >
        <Image src={logoDesk} alt="logo" width={78} height={66} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
        style={{ position: "absolute", bottom: "190px", right: "-42px" }}
        className="hidden lg:block"
      >
        <Image src={logoDesk} alt="logo" width={78} height={66} />
      </motion.div>
    </section>
  );
};

export default SeoPartnerSection;
