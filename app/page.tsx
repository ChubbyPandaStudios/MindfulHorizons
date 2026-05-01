'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import EnrollModal from '@/components/EnrollModal';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <Header onEnrollClick={handleEnrollClick} />
      <main className="bg-[#FAFAF7]">
        <HeroSection onEnrollClick={handleEnrollClick} />
        <AboutSection />
        <BenefitsSection />
        <PricingSection onEnrollClick={handleEnrollClick} />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer 
        onEnrollClick={handleEnrollClick}
        onContactClick={handleContactClick}
      />
      <EnrollModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
    </>
  );
}
