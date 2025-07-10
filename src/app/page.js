"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JoinSection from "@/components/JoinSection";
import OurService from "@/components/OurService";
import SeoPartnerSection from "@/components/SeoPartnerSection";
import WhyClarionSol from "@/components/WhyClarionSol";
import FormAndContactSection from "@/components/FormAndContactSection";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";
import ModalForm from "@/components/ModalForm";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalFormSubmit = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleMainFormSubmit = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      <Notification isVisible={showNotification} />
      <Header onOpenModal={openModal} />
      <main className="container w-[360px] md:w-[768px] lg:w-[1280px]">
        <HeroSection onOpenModal={openModal} />
        <SeoPartnerSection />
        <WhyClarionSol />
        <OurService onOpenModal={openModal} />
        <JoinSection onOpenModal={openModal} />
        <FormAndContactSection onSubmit={handleMainFormSubmit} />
        <ModalForm
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleModalFormSubmit}
        />
      </main>
      <Footer />
    </>
  );
}
