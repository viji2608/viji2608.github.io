
import React from 'react';
import { motion } from 'framer-motion';
import { CodingProfilesProps } from './coding-profiles/types';
import { profiles } from './coding-profiles/data';
import ProfileCard from './coding-profiles/ProfileCard';

const CodingProfiles: React.FC<CodingProfilesProps> = ({ nextSection }) => {
  return (
    <div className="min-h-screen py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-fuchsia-900/20" />
      
      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 pb-2 leading-[1.25] bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent px-4">
            Coding Profiles
          </h1>
          <p className="text-xl text-white/80 px-4">
            Connect with me across various coding platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
          {profiles.map((profile, index) => (
            <ProfileCard 
              key={profile.name}
              profile={profile}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-16 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's Code Together!</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, open source contributions, or just to connect and share ideas.
            </p>
          </motion.div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top ↑
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfiles;
