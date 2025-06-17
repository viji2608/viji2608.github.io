
import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  nextSection: () => void;
  prevSection: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ nextSection }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-black to-purple-900/20" />
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Work Together?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Let's create something amazing together. I'm available for freelance projects and full-time opportunities.
          </p>
        </motion.div>

        <motion.div
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.button
            className="relative px-12 py-6 text-2xl font-bold text-white rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #8B5CF6, #EC4899, #06B6D4)',
              backgroundSize: '300% 300%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            whileHover={{
              boxShadow: "0 0 50px rgba(139, 92, 246, 0.5), 0 0 100px rgba(236, 72, 153, 0.3)"
            }}
            onClick={nextSection}
          >
            <motion.span
              className="relative z-10"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hire Me Now
            </motion.span>
            
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { title: "Fast Delivery", desc: "Quick turnaround times" },
            { title: "Modern Tech", desc: "Latest frameworks & tools" },
            { title: "24/7 Support", desc: "Always available to help" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
