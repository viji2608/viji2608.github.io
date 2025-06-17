
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroAbout from '@/components/sections/HeroAbout';
import CallToAction from '@/components/sections/CallToAction';
import Resume from '@/components/sections/Resume';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Articles from '@/components/sections/Articles';
import CodingProfiles from '@/components/sections/CodingProfiles';
import SocialLinks from '@/components/SocialLinks';
import ParticleBackground from '@/components/ParticleBackground';

const sections = [
  { id: 'hero', component: HeroAbout, name: 'About' },
  { id: 'cta', component: CallToAction, name: 'Hire Me' },
  { id: 'resume', component: Resume, name: 'Resume' },
  { id: 'projects', component: Projects, name: 'Projects' },
  { id: 'skills', component: Skills, name: 'Skills' },
  { id: 'contact', component: Contact, name: 'Contact' },
  { id: 'articles', component: Articles, name: 'Articles' },
  { id: 'profiles', component: CodingProfiles, name: 'Profiles' },
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl font-bold text-white"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          Loading Portfolio...
        </motion.div>
      </div>
    );
  }

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <ParticleBackground />
      
      <Navigation 
        sections={sections}
        currentSection={currentSection}
        goToSection={goToSection}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="min-h-screen"
        >
          <CurrentComponent 
            nextSection={nextSection}
            prevSection={prevSection}
          />
        </motion.div>
      </AnimatePresence>

      <SocialLinks />

      {/* Navigation arrows */}
      <motion.button
        title="Go to previous section"
        onClick={prevSection}
        className="fixed left-4 top-[60%] transform -translate-y-1/2 z-50 p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={nextSection}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Index;
