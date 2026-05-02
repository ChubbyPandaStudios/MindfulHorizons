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
import { WaveDivider } from '@/components/ui/wave-divider';

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
      <main className="bg-[#FAFAF7] overflow-x-hidden">
        <HeroSection onEnrollClick={handleEnrollClick} />
        
        {/* Hero to About transition */}
        <WaveDivider className="text-[#F5F1EC] -mt-1 bg-[#FAFAF7]" />
        
        <AboutSection />
        
        {/* About to Benefits transition (FAFAF7 -> F5F1EC) */}
        <div className="bg-[#FAFAF7]">
           <WaveDivider className="text-[#FAFAF7] rotate-180 bg-[#F5F1EC]" />
        </div>
        
        <BenefitsSection />
        
        {/* Benefits to Pricing transition (F5F1EC -> FAFAF7) */}
        <WaveDivider className="text-[#F5F1EC] bg-[#FAFAF7]" />
        
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
