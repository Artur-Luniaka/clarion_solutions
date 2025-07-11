"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import arrow from "../../public/SVG/diagonal-arrow.svg";
import shapeMob from "../../public/IMG/service-shape-mob.webp";
import shapeDesk from "../../public/IMG/service-shape-desk.webp";

const OurService = ({ onOpenModal }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const ourMob1 = "/IMG/our-one-mob.webp";
  const ourMob2 = "/IMG/our-two-mob.webp";
  const ourMob3 = "/IMG/our-three-mob.webp";
  const ourMob4 = "/IMG/our-four-mob.webp";
  const ourDesk1 = "/IMG/our-one-desk.webp";
  const ourDesk2 = "/IMG/our-two-desk.webp";
  const ourDesk3 = "/IMG/our-three-desk.webp";
  const ourDesk4 = "/IMG/our-four-desk.webp";
  const ourDesk5 = "/IMG/our-five-desk.webp";

  return (
    <section
      ref={ref}
      className="relative z-[500] py-[45px] lg:py-[140px]"
      id="services"
    >
      <Image
        src={shapeMob}
        alt="service-shape"
        className="absolute bottom-[-259px] md:bottom-[-40px] right-[-515px] md:right-[-50px] -z-10 w-auto h-full max-w-none lg:hidden pointer-events-none"
      />
      <Image
        src={shapeDesk}
        alt="service-shape"
        className="absolute bottom-[-200px] left-[-160px] -z-10 w-auto max-w-none h-full lg:block hidden pointer-events-none"
      />
      <div className="flex flex-wrap gap-4 lg:hidden">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="w-[152px]"
        >
          <h2 className="font-actay-wide text-[24px] font-bold text-title-green leading-[29px] uppercase mb-5">
            Our services
          </h2>
          <p className="font-urbanist text-sm font-light text-primary-white">
            We help businesses grow through
          </p>
        </motion.div>
        <motion.button
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourMob1})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[152px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left">
              Local SEO audit and strategy
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourMob2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[152px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left">
              Google Business optimization
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.button
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourMob3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[152px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left">
              Technical SEO setup
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourMob4})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[320px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left w-[125px]">
              On-page SEO improvements
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourMob2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[152px] h-[159px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-sm font-bold text-primary-dark leading-[17px] tracking-[0.01em] uppercase text-left">
              Link <br /> building and outreach
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-xs font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={12} height={12} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="w-[152px]"
        >
          <h2 className="font-actay-wide text-[24px] font-bold text-title-green leading-[29px] uppercase mb-5">
            Ready <br /> to start{" "}
            <span className="text-primary-white">SEO?</span>
          </h2>
          <p className="font-urbanist text-sm font-light text-primary-white">
            We provide easy-to-understand updates on your progress.
          </p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          className="w-[320px] h-[40px] flex items-center justify-center bg-btn-green text-primary-dark font-urbanist text-base font-semibold rounded-[28px] md:mx-auto"
        >
          Get in touch
        </motion.button>
      </div>
      <div className="hidden lg:flex flex-wrap gap-6">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="w-[370px]"
        >
          <h2 className="font-actay-wide text-[48px] font-bold text-title-green leading-[58px] uppercase mb-5">
            Our services
          </h2>
          <p className="font-urbanist text-base font-light text-primary-white">
            We help businesses grow through
          </p>
        </motion.div>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourDesk1})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[370px] h-[225px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left">
              Local SEO audit and strategy
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.button
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourDesk2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[370px] h-[225px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left">
              Google Business optimization
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourDesk3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[765px] h-[226px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left w-[264px]">
              On-page SEO improvements
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.button
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourDesk4})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[370px] h-[226px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left">
              Technical SEO setup
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.button
          initial={{ x: -30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
          type="button"
          onClick={onOpenModal}
          style={{
            backgroundImage: `url(${ourDesk5})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
          className="w-[370px] h-[226px] py-5 px-4"
        >
          <div className="flex flex-col h-full">
            <h3 className="font-actay-wide text-[28px] font-bold text-primary-dark leading-[34px] tracking-[0.01em] uppercase text-left">
              Link building and outreach
            </h3>
            <div className="flex items-center justify-between mt-auto">
              <p className="font-urbanist text-base font-semibold leading-5 text-primary-black">
                Learn more
              </p>
              <Image src={arrow} alt="arrow" width={15} height={14} />
            </div>
            <div className="border-b border-primary-black mt-[2px]" />
          </div>
        </motion.button>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="w-[765px]"
        >
          <h2 className="font-actay-wide text-[48px] font-bold text-title-green leading-[58px] uppercase mb-[57px] w-[568px]">
            Ready to start{" "}
            <span className="text-primary-white">your SEO journey? </span>
          </h2>
          <div className="flex justify-between">
            <p className="font-urbanist text-base font-light text-primary-white w-[307px]">
              We provide easy-to-understand updates on your progress.
            </p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.9, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
              type="button"
              onClick={onOpenModal}
              className="w-[307px] h-[52px] flex items-center justify-center bg-btn-green text-primary-dark font-urbanist text-base font-semibold rounded-[28px] hover:bg-primary-white transition-all duration-300"
            >
              Get in touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurService;
