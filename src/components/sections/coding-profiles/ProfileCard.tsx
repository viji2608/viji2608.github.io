
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { CodingProfile } from './types';

interface ProfileCardProps {
  profile: CodingProfile;
  index: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, index }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <motion.div
        className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-400/50 transition-all duration-300 overflow-hidden z-10"
        whileHover={{ y: -10, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 20px 20px, ${profile.color} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              {profile.icon}
            </motion.div>
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center relative z-20"
              style={{ backgroundColor: `${profile.color}20` }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Github className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </div>

          <motion.h3
            className="text-xl font-bold text-white mb-2"
            whileHover={{ color: profile.color }}
          >
            {profile.name}
          </motion.h3>

          <p className="text-sm text-violet-300 mb-2">{profile.username}</p>
          <p className="text-sm text-white/70 mb-4">{profile.description}</p>

          <div className="flex items-center justify-between">
            <motion.span
              className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
              whileHover={{ scale: 1.1 }}
            >
              {profile.stats}
            </motion.span>

            <motion.a
  href={profile.url}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-semibold px-4 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition-all duration-300 relative z-20"
  whileHover={{ 
    scale: 1.05,
    borderColor: profile.color,
    color: profile.color
  }}
  whileTap={{ scale: 0.95 }}
>
  Visit
</motion.a>
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10"
          style={{ backgroundColor: profile.color }}
          whileHover={{ opacity: 0.1 }}
        />

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-transparent"
          whileHover={{
            borderImage: `linear-gradient(45deg, ${profile.color}, transparent, ${profile.color}) 1`
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
