
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  sections: Array<{ id: string; name: string }>;
  currentSection: number;
  goToSection: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sections, currentSection, goToSection }) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.div>

        <div className="hidden md:flex space-x-6">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => goToSection(index)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                currentSection === index
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 backdrop-blur-md text-white/80 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile menu indicator */}
        <div className="md:hidden flex space-x-2">
          {sections.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSection === index ? 'bg-purple-400' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => goToSection(index)}
            />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
