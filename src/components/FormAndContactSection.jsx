"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import socialBall from "../../public/SVG/social-ball.svg";
import callUs from "../../public/SVG/social-phone.svg";
import emailUs from "../../public/SVG/social-sms.svg";
import tiktok from "../../public/SVG/tik-tok.svg";
import instagram from "../../public/SVG/instagram.svg";
import linkedin from "../../public/SVG/linkedin.svg";
import telegram from "../../public/SVG/telegram.svg";
import photo from "../../public/IMG/form-photo.webp";
import logo from "../../public/IMG/seo-section-logo.png";
import Notification from "./Notification";
import shapeMob from "../../public/IMG/form-shape-mob.webp";
import shapeDesk from "../../public/IMG/form-shape-desk.webp";
import greenShadow from "../../public/IMG/hero-green-shadow.webp";

const FormAndContactSection = ({ onSubmit: onSubmitCallback }) => {
  const [formKey, setFormKey] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const phoneValue = watch("phone");
  const isFormValid = phoneValue && phoneValue.toString().trim() !== "";

  const onSubmit = async (data) => {
    try {
      const formData = {
        name: data.name || "",
        phone: String(data.phone),
        message: data.message || "",
      };

      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        reset();
        setFormKey((prev) => prev + 1);

        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);

        if (onSubmitCallback) {
          onSubmitCallback();
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="py-[45px] lg:py-[154px] relative z-20" id="contact">
        <Image
          src={shapeMob}
          alt="form-shape"
          className="absolute bottom-[-120px] left-[-195px] -z-10 w-auto h-auto max-w-none md:hidden pointer-events-none"
        />
        <Image
          src={shapeDesk}
          alt="form-shape"
          className="absolute bottom-[-195px] left-[-165px] z-[15] w-auto h-full max-w-none lg:block hidden pointer-events-none"
        />
        <Image
          src={greenShadow}
          alt="green-shadow"
          className="hidden lg:block absolute bottom-0 left-[-650px] -z-10 w-full h-full"
        />
        <Image
          src={greenShadow}
          alt="green-shadow"
          className="hidden lg:block absolute top-[-180px] left-[650px] -z-10 w-full h-full"
        />
        <div className="flex flex-col gap-6 mb-6 lg:flex lg:justify-between lg:flex-row lg:mb-[53px]">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-actay-wide font-bold text-[24px] leading-[29px] text-primary-white uppercase lg:text-[64px] lg:leading-[77px] lg:w-[665px]"
          >
            Have a <span className="text-title-green">question</span> about our
            SEO services?
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="font-urbanist font-light text-sm text-primary-white lg:text-base lg:w-[269px] lg:mt-auto"
          >
            Write to us — we’ll help you choose the best option for your
            business.
          </motion.p>
        </div>
        <div className="mb-6 lg:mb-20 relative z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form
              key={formKey}
              onSubmit={handleSubmit(onSubmit)}
              className="md:flex md:flex-col md:items-center lg:items-start"
            >
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className="w-[320px] lg:w-[370px] h-[40px] lg:h-[48px] px-6 py-[10px] border border-primary-white rounded-[32px] bg-transparent mb-3 placeholder:font-urbanist placeholder:font-light placeholder:text-sm placeholder:text-[#7e7e7e] outline-none hover:border-title-green transition-all duration-300 focus:border-title-green"
              />

              <input
                type="tel"
                placeholder="Phone number (required)"
                {...register("phone")}
                className="w-[320px] lg:w-[370px] h-[40px] lg:h-[48px] px-6 py-[10px] border border-primary-white rounded-[32px] bg-transparent mb-3 placeholder:font-urbanist placeholder:font-light placeholder:text-sm placeholder:text-[#7e7e7e] outline-none hover:border-title-green transition-all duration-300 focus:border-title-green"
              />

              <textarea
                placeholder="Your message"
                {...register("message")}
                className="w-[320px] lg:w-[370px] h-[100px] lg:h-[116px] px-6 py-[14px] border border-primary-white rounded-xl bg-transparent mb-4 placeholder:font-urbanist placeholder:font-light placeholder:text-sm placeholder:text-[#7e7e7e] resize-none outline-none hover:border-title-green transition-all duration-300 focus:border-title-green"
              />

              <button
                type="submit"
                disabled={!isFormValid}
                className={` w-[320px] lg:w-[370px] h-[40px] lg:h-[56px] rounded-[28px] bg-primary-white text-primary-black font-urbanist font-semibold text-base flex items-center justify-center transition-all duration-300 ${
                  isFormValid
                    ? "opacity-100 hover:bg-btn-green cursor-pointer"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                Send
              </button>
            </form>

            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[724px] h-[308px] hidden lg:block absolute top-0 right-[-60px]"
            >
              <Image
                src={photo}
                alt="form-and-contact-section"
                className="w-[724px] h-[308px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.05 }}
              viewport={{ once: true }}
              className="w-[78px] h-[66px] absolute top-[19px] left-[496px] hidden lg:block"
            >
              <Image src={logo} alt="logo" className="w-[78px] h-[66px]" />
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 md:items-center lg:flex-row lg:justify-between relative z-20">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="w-[320px] lg:w-[362px] py-3 pl-4 pr-[13px] lg:px-4 lg:pt-3 lg:pb-5 rounded-xl backdrop-blur-[4px] shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.25)] bg-[rgba(208,255,89,0.16)]"
          >
            <div className="flex items-center justify-between mb-6 lg:mb-[40px]">
              <h3 className="font-actay-wide font-bold text-sm text-primary-white uppercase leading-5 tracking-[0.07em] lg:text-base">
                Social Media
              </h3>
              <div className="w-10 h-10 bg-primary-white rounded-xl flex items-center justify-center">
                <Image
                  src={socialBall}
                  alt="social-media"
                  width={20}
                  height={20}
                />
              </div>
            </div>
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
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-[320px] lg:w-[362px] py-3 pl-4 pr-[13px] lg:px-4 lg:pt-3 lg:pb-5 rounded-xl backdrop-blur-[4px] shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.25)] bg-[rgba(208,255,89,0.16)]"
          >
            <div className="flex items-center justify-between mb-6 lg:mb-[40px]">
              <h3 className="font-actay-wide font-bold text-sm text-primary-white uppercase leading-5 tracking-[0.07em] lg:text-base">
                Call Us
              </h3>
              <div className="w-10 h-10 bg-primary-white rounded-xl flex items-center justify-center">
                <Image src={callUs} alt="call-us" width={20} height={20} />
              </div>
            </div>
            <a
              href="tel:+16618575169"
              className="font-urbanist font-light text-sm text-primary-white lg:text-base hover:text-title-green transition-all duration-300"
            >
              +1 (661) 857-5169
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
            viewport={{ once: true }}
            className="w-[320px] lg:w-[362px] py-3 pl-4 pr-[13px] lg:px-4 lg:pt-3 lg:pb-5 rounded-xl backdrop-blur-[4px] shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.25)] bg-[rgba(208,255,89,0.16)]"
          >
            <div className="flex items-center justify-between mb-6 lg:mb-[40px]">
              <h3 className="font-actay-wide font-bold text-sm text-primary-white uppercase leading-5 tracking-[0.07em] lg:text-base">
                Email Us
              </h3>
              <div className="w-10 h-10 bg-primary-white rounded-xl flex items-center justify-center">
                <Image src={emailUs} alt="email-us" width={20} height={20} />
              </div>
            </div>
            <a
              href="mailto:clarionsolut@gmail.com"
              className="font-urbanist font-light text-sm text-primary-white lg:text-base hover:text-title-green transition-all duration-300"
            >
              clarionsolut@gmail.com
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FormAndContactSection;
