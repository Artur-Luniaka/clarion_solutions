"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import shapeMob from "../../public/IMG/why-shape-mob.webp";
import shapeDesk from "../../public/IMG/why-shape-desk.webp";
import greenShadow from "../../public/IMG/hero-green-shadow.webp";

const WhyClarionSol = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const whyMob1 = "/IMG/why-one-mob.webp";
  const whyMob2 = "/IMG/why-two-mob.webp";
  const whyMob3 = "/IMG/why-three-mob.webp";
  const whyMob4 = "/IMG/why-four-mob.webp";
  const whyDesk1 = "/IMG/why-one-desk.webp";
  const whyDesk2 = "/IMG/why-two-desk.webp";
  const whyDesk3 = "/IMG/why-three-desk.webp";
  const whyDesk4 = "/IMG/why-four-desk.webp";

  return (
    <section
      ref={ref}
      className="relative z-20 py-[45px] lg:pt-[140px] lg:pb-[231px]"
      id="about"
    >
      <Image
        src={shapeMob}
        alt="why-shape"
        className="absolute bottom-[-120px] md:bottom-[30px] right-[-440px] md:right-0 -z-10 w-auto h-full max-w-none lg:hidden pointer-events-none"
      />
      <Image
        src={shapeDesk}
        alt="why-shape"
        className="absolute bottom-[-110px] left-[-580px] -z-10 w-auto max-w-none h-full lg:block hidden pointer-events-none"
      />
      <Image
        src={greenShadow}
        alt="why-shape"
        className="absolute bottom-0 md:bottom-[70px] lg:bottom-[275px] left-[-140px] md:left-[-200px] lg:left-[-500px] -z-10 w-full h-full"
      />
      <Image
        src={greenShadow}
        alt="why-shape"
        className="hidden lg:block absolute bottom-[-450px] right-[-550px] -z-10 w-full h-full"
      />
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-actay-wide font-bold text-2xl leading-[29px] uppercase w-[284px] mb-6 lg:text-5xl lg:leading-[58px] lg:text-center lg:w-full lg:mb-[67px]"
      >
        Why <span className="text-title-green">ClarionSol</span>{" "}
        <br className="lg:hidden" />
        is your best choice
      </motion.h2>
      <div className="flex gap-4 flex-wrap md:justify-center lg:hidden">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${whyMob1})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="py-5 px-4 h-[232px] w-[152px] flex flex-col justify-end"
        >
          <h3 className="font-actay-wide font-bold text-sm text-primary-white leading-[17px] tracking-[0.01em] uppercase mb-4">
            Transparent process
          </h3>
          <p className="font-urbanist font-light text-xs text-primary-white">
            You'll always know what we're doing and why.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${whyMob2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="py-5 px-4 h-[232px] w-[152px] flex flex-col justify-start"
        >
          <h3 className="font-actay-wide font-bold text-sm text-primary-dark leading-[17px] tracking-[0.01em] uppercase mb-4">
            Tailored solutions
          </h3>
          <p className="font-urbanist font-light text-xs text-primary-dark">
            We create SEO plans that fit your unique business.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${whyMob3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="py-5 px-4 h-[232px] w-[152px] flex flex-col justify-start"
        >
          <h3 className="font-actay-wide font-bold text-sm text-primary-dark leading-[17px] tracking-[0.01em] uppercase mb-4">
            Clear reporting
          </h3>
          <p className="font-urbanist font-light text-xs text-primary-dark">
            We provide easy-to-understand updates on your progress.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${whyMob4})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="py-5 px-4 h-[232px] w-[152px] flex flex-col justify-end"
        >
          <h3 className="font-actay-wide font-bold text-sm text-primary-white leading-[17px] tracking-[0.01em] uppercase mb-4">
            Proven SEO strategies
          </h3>
          <p className="font-urbanist font-light text-xs text-primary-white">
            Our methods are tested, refined, and deliver real results.
          </p>
        </motion.div>
      </div>
      <div className="hidden lg:flex gap-6">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          style={{
            backgroundImage: `url(${whyDesk1})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="py-8 px-5 h-[393px] w-[272px] flex flex-col justify-end"
        >
          <h3 className="font-actay-wide font-bold text-[28px] text-primary-white leading-[34px] tracking-[0em] uppercase mb-5">
            Transparent process
          </h3>
          <p className="font-urbanist font-light text-base text-primary-white">
            You’ll always know what we’re doing and why.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            backgroundImage: `url(${whyDesk2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="py-8 px-5 h-[393px] w-[272px] flex flex-col justify-start"
        >
          <h3 className="font-actay-wide font-bold text-[28px] text-primary-dark leading-[34px] tracking-[0em] uppercase mb-5">
            Tailored solutions
          </h3>
          <p className="font-urbanist font-light text-base text-primary-dark w-[212px]">
            We create SEO plans that fit your unique business.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{
            backgroundImage: `url(${whyDesk3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="py-8 px-5 h-[393px] w-[272px] flex flex-col justify-end"
        >
          <h3 className="font-actay-wide font-bold text-[28px] text-primary-white leading-[34px] tracking-[0em] uppercase mb-5">
            Proven SEO strategies
          </h3>
          <p className="font-urbanist font-light text-base text-primary-white w-[218px]">
            Our methods are tested, refined, and deliver real results.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            backgroundImage: `url(${whyDesk4})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="py-8 px-5 h-[393px] w-[272px] flex flex-col justify-start"
        >
          <h3 className="font-actay-wide font-bold text-[28px] text-primary-dark leading-[34px] tracking-[0em] uppercase mb-5">
            Clear reporting
          </h3>
          <p className="font-urbanist font-light text-base text-primary-dark w-[215px]">
            We provide easy-to-understand updates on your progress.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyClarionSol;
