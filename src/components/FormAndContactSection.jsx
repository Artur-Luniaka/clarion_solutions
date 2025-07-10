"use client";

import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import socialBall from "../../public/SVG/social-ball.svg";
import callUs from "../../public/SVG/social-phone.svg";
import emailUs from "../../public/SVG/social-sms.svg";
import tiktok from "../../public/SVG/tik-tok.svg";
import instagram from "../../public/SVG/instagram.svg";
import linkedin from "../../public/SVG/linkedin.svg";
import telegram from "../../public/SVG/telegram.svg";
import photo from "../../public/IMG/form-photo.webp";
import logo from "../../public/IMG/seo-section-logo.png";

const FormAndContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section
      className="py-[45px] lg:py-[154px] lg:relative lg:z-10"
      id="contact"
    >
      <div className="flex flex-col gap-6 mb-6 lg:flex lg:justify-between lg:flex-row lg:mb-[53px]">
        <h2 className="font-actay-wide font-bold text-[24px] leading-[29px] text-primary-white uppercase lg:text-[64px] lg:leading-[77px] lg:w-[665px]">
          Have a <span className="text-title-green">question</span> about our
          SEO services?
        </h2>
        <p className="font-urbanist font-light text-sm text-primary-white lg:text-base lg:w-[269px] lg:mt-auto">
          Write to us — we’ll help you choose the best option for your business.
        </p>
      </div>
      <div className="mb-6 lg:mb-20 lg:relative">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:flex md:flex-col md:items-center lg:items-start"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="w-[320px] lg:w-[370px] h-[40px] lg:h-[48px] px-6 py-[10px] border border-primary-white rounded-[32px] bg-transparent mb-3 placeholder:font-urbanist placeholder:font-light placeholder:text-sm placeholder:text-[#7e7e7e]"
          />

          <input
            type="tel"
            placeholder="Phone number"
            {...register("phone", { required: true })}
            className="w-[320px] lg:w-[370px] h-[40px] lg:h-[48px] px-6 py-[10px] border border-primary-white rounded-[32px] bg-transparent mb-3 placeholder:font-urbanist placeholder:font-light placeholder:text-sm placeholder:text-[#7e7e7e]"
          />

          <textarea
            placeholder="Your message"
            {...register("message", { required: true })}
            className="w-[320px] lg:w-[370px] h-[100px] lg:h-[116px] px-6 py-[14px] border border-primary-white rounded-xl bg-transparent mb-4 placeholder:font-urbanist placeholder:font-light placeholder:text-sm placeholder:text-[#7e7e7e] resize-none"
          />

          <button
            type="submit"
            className="w-[320px] lg:w-[370px] h-[40px] lg:h-[56px] rounded-[28px] bg-primary-white text-primary-black font-urbanist font-semibold text-base flex items-center justify-center hover:bg-btn-green transition-all duration-300"
          >
            Send
          </button>
        </form>
        <Image
          src={photo}
          alt="form-and-contact-section"
          className="w-[724px] h-[308px] hidden lg:block absolute top-0 right-[-60px]"
        />
        <Image
          src={logo}
          alt="logo"
          className="w-[78px] h-[66px] absolute top-[19px] left-[496px] hidden lg:block"
        />
      </div>
      <div className="flex flex-col gap-4 md:items-center lg:flex-row lg:justify-between">
        <div className="w-[320px] lg:w-[362px] py-3 pl-4 pr-[13px] lg:px-4 lg:pt-3 lg:pb-5 rounded-xl backdrop-blur-[14px] shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.25)] bg-[rgba(208,255,89,0.16)]">
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
            <a href="/">
              <Image
                src={linkedin}
                alt="tik-tok"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            <a href="/">
              <Image
                src={instagram}
                alt="instagram"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            <a href="/">
              <Image
                src={telegram}
                alt="linkedin"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            <a href="/">
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
        <div className="w-[320px] lg:w-[362px] py-3 pl-4 pr-[13px] lg:px-4 lg:pt-3 lg:pb-5 rounded-xl backdrop-blur-[14px] shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.25)] bg-[rgba(208,255,89,0.16)]">
          <div className="flex items-center justify-between mb-6 lg:mb-[40px]">
            <h3 className="font-actay-wide font-bold text-sm text-primary-white uppercase leading-5 tracking-[0.07em] lg:text-base">
              Call Us
            </h3>
            <div className="w-10 h-10 bg-primary-white rounded-xl flex items-center justify-center">
              <Image src={callUs} alt="call-us" width={20} height={20} />
            </div>
          </div>
          <a
            href="tel:+380970067656"
            className="font-urbanist font-light text-sm text-primary-white lg:text-base"
          >
            +380-97-006-76-56
          </a>
        </div>
        <div className="w-[320px] lg:w-[362px] py-3 pl-4 pr-[13px] lg:px-4 lg:pt-3 lg:pb-5 rounded-xl backdrop-blur-[14px] shadow-[inset_0_4px_14px_0_rgba(255,255,255,0.25)] bg-[rgba(208,255,89,0.16)]">
          <div className="flex items-center justify-between mb-6 lg:mb-[40px]">
            <h3 className="font-actay-wide font-bold text-sm text-primary-white uppercase leading-5 tracking-[0.07em] lg:text-base">
              Email Us
            </h3>
            <div className="w-10 h-10 bg-primary-white rounded-xl flex items-center justify-center">
              <Image src={emailUs} alt="email-us" width={20} height={20} />
            </div>
          </div>
          <a
            href="mailto:email@gmail.com"
            className="font-urbanist font-light text-sm text-primary-white lg:text-base"
          >
            email@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FormAndContactSection;
