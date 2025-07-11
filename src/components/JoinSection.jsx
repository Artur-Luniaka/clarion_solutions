"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import blackShadow from "../../public/IMG/join-black-shadow.webp";
import photoShadow from "../../public/IMG/join-photo-shadow.png";
import photo from "../../public/IMG/join-photo.webp";
import shapeMob from "../../public/IMG/join-shape-mob.webp";
import shapeDesk from "../../public/IMG/join-shape-desk.webp";
import greenShadow from "../../public/IMG/hero-green-shadow.webp";

const JoinSection = ({ onOpenModal }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-[45px] lg:py-[145px] relative z-20">
      <Image
        src={shapeMob}
        alt="join-shape"
        className="absolute bottom-[-280px] left-[-280px] md:left-[-260px] -z-10 w-auto h-auto max-w-none lg:hidden pointer-events-none"
      />
      <Image
        src={shapeDesk}
        alt="join-shape"
        className="absolute bottom-[-80px] left-0 -z-10 w-auto max-w-none h-full lg:block hidden pointer-events-none"
      />
      <Image
        src={greenShadow}
        alt="join-shape"
        className="absolute bottom-[-180px] lg:bottom-[100px] left-[-110px] lg:left-[-600px] -z-10 w-full h-[600px]"
      />
      <Image
        src={greenShadow}
        alt="join-shape"
        className="hidden lg:block absolute top-0 left-[500px] -z-10 w-full h-[600px]"
      />
      <div className="flex flex-col md:items-center lg:w-[536px]">
        <div className="relative mb-[30px]">
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="font-actay-wide text-[24px] font-bold text-primary-white leading-[29px] uppercase md:mb-4 lg:text-left lg:text-[48px] lg:leading-[58px] lg:mb-[28px]"
          >
            Join the world <br className="md:hidden lg:block" /> of effective
            SEO <span className="text-title-green">today</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute bottom-[-11px] left-[100px] md:static font-urbanist text-sm font-light text-primary-white w-[116px] md:w-full md:text-center lg:hidden"
          >
            We help businesses grow through
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:block lg:text-left lg:text-base lg:w-[322px] lg:font-urbanist lg:font-light lg:text-primary-white"
          >
            Start growing your business with SEO strategies that work.
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          className="w-[320px] lg:w-[272px] h-[40px] lg:h-[52px] flex items-center justify-center bg-btn-green text-primary-dark font-urbanist text-base font-semibold rounded-[28px] lg:mr-auto hover:bg-primary-white transition-all duration-300"
        >
          Get started now
        </motion.button>
      </div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "45px",
          right: "-58px",
          zIndex: 10,
          width: "745px",
          height: "500px",
        }}
        className="hidden lg:block"
      >
        <Image src={photoShadow} alt="black-shadow" className="w-full h-full" />
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "30px",
          right: "-130px",
          zIndex: 20,
          width: "810px",
          height: "580px",
        }}
        className="hidden lg:block"
      >
        <Image src={photo} alt="photo" className="w-full h-full" />
      </motion.div>
      <Image
        src={blackShadow}
        alt="black-shadow"
        className="absolute bottom-[-225px] right-[-255px] w-[1000px] h-[500px] lg:block hidden z-30"
      />
    </section>
  );
};

export default JoinSection;
