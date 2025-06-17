import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/viji2608', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vijayalakshmi-s2608', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/vijayalakshmi.400', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@VijayalakshmiS-m2b', label: 'YouTube' },
  { icon: Twitter, href: 'https://twitter.com/vijayalaks45059', label: 'X(Twitter)' },
];

const SocialLinks: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-8 left-4 md:left-8 z-50 flex flex-col space-y-4 pt-8"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 + index * 0.1 }}
        >
          <social.icon className="w-5 h-5 text-white/80 group-hover:text-white" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
