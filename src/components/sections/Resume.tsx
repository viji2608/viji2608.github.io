
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface ResumeProps {
  nextSection: () => void;
  prevSection: () => void;
}

const Resume: React.FC<ResumeProps> = ({ nextSection }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      // Here you would trigger the actual download
      console.log('Resume downloaded!');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Resume
          </h1>
          <p className="text-xl text-white/80 mb-12">
            Download my complete professional resume with all experience and skills
          </p>
        </motion.div>

        <motion.div
          className="relative group mx-auto w-80 h-96 mb-12"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          style={{ perspective: '1000px' }}
        >
          <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:shadow-purple-500/25">
            <div className="p-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
              <h3 className="text-2xl font-bold">John Doe</h3>
              <p className="text-purple-100">Full Stack Developer</p>
            </div>
            <div className="p-6 text-gray-800 space-y-4">
              <div>
                <h4 className="font-bold text-purple-600">Experience</h4>
                <p className="text-sm">Senior Developer at TechCorp</p>
              </div>
              <div>
                <h4 className="font-bold text-purple-600">Skills</h4>
                <p className="text-sm">React, Node.js, Three.js</p>
              </div>
              <div>
                <h4 className="font-bold text-purple-600">Education</h4>
                <p className="text-sm">CS Degree, MIT</p>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity
            }}
          />
        </motion.div>

        <motion.button
          onClick={handleDownload}
          disabled={isDownloading}
          className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-bold text-xl overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center space-x-3"
            animate={isDownloading ? { y: [0, -5, 0] } : {}}
            transition={{ duration: 0.5, repeat: isDownloading ? Infinity : 0 }}
          >
            <ArrowDown className={`w-6 h-6 ${isDownloading ? 'animate-bounce' : ''}`} />
            <span>{isDownloading ? 'Downloading...' : 'Download Resume'}</span>
          </motion.div>

          {isDownloading && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-white/50"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2 }}
            />
          )}
        </motion.button>

        <motion.button
          onClick={nextSection}
          className="mt-8 px-6 py-3 border border-white/30 rounded-full text-white/80 hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          View My Projects →
        </motion.button>
      </div>
    </div>
  );
};

export default Resume;
