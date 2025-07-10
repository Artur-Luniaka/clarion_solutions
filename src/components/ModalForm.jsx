"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import closeBtn from "../../public/SVG/btn-x.svg";

const ModalForm = ({ isOpen, onClose, onSubmit: onSubmitCallback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const nameValue = watch("name");
  const phoneValue = watch("phone");
  const isFormValid = nameValue && phoneValue;

  const onSubmit = (data) => {
    const formData = {
      ...data,
      phone: String(data.phone),
    };
    console.log(formData);

    reset();

    onClose();

    if (onSubmitCallback) {
      onSubmitCallback();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.classList.add("noscroll");
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("noscroll");
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div
        className="w-[320px] lg:w-[520px] h-[344px] lg:h-[462px] py-6 lg:py-12 px-5 lg:px-[72px] bg-primary-dark rounded-[20px]"
        style={{ boxShadow: "0 4px 20px 0 rgba(206, 255, 80, 0.25)" }}
      >
        <div className="relative">
          <h2 className="font-actay-wide font-bold text-2xl uppercase text-primary-white leading-[29px] mb-4 text-center lg:text-3xl lg:leading-[34px]">
            Request a Consultation
          </h2>
          <p className="font-urbanist font-light text-sm text-primary-white text-center mb-6 lg:text-base lg:mb-10">
            Fill in your details and our team will get back to you shortly.
          </p>
          <button
            onClick={onClose}
            className="absolute top-[-5px] lg:top-[-25px] right-0 lg:right-[-50px] w-5 h-5 lg:w-6 lg:h-6"
          >
            <Image src={closeBtn} alt="close" />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:flex lg:flex-col lg:items-center"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="w-[280px] lg:w-[376px] h-[40px] lg:h-[48px] px-6 py-[10px] border border-primary-white rounded-[32px] bg-transparent mb-3 lg:mb-4 placeholder:font-urbanist placeholder:font-light placeholder:text-sm placeholder:leading-5 placeholder:text-[#7e7e7e] outline-none hover:border-title-green transition-all duration-300 focus:border-title-green"
          />
          <input
            type="tel"
            placeholder="Phone number"
            {...register("phone", { required: true })}
            className="w-[280px] lg:w-[376px] h-[40px] lg:h-[48px] px-6 py-[10px] border border-primary-white rounded-[32px] bg-transparent mb-8 lg:mb-10 placeholder:font-urbanist placeholder:font-light placeholder:text-sm placeholder:leading-5 placeholder:text-[#7e7e7e] outline-none hover:border-title-green transition-all duration-300 focus:border-title-green"
          />
          <button
            type="submit"
            disabled={!isFormValid}
            className={`flex items-center justify-center w-[280px] lg:w-[376px] h-[40px] lg:h-[52px] bg-primary-white rounded-[28px] text-primary-dark font-urbanist font-semibold text-base leading-5 transition-all duration-300 ${
              isFormValid
                ? "opacity-100 hover:bg-btn-green cursor-pointer"
                : "opacity-40 cursor-not-allowed"
            }`}
          >
            Send request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
