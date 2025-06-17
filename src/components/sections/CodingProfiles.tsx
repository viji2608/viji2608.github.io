
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface CodingProfilesProps {
  nextSection: () => void;
  prevSection: () => void;
}

const profiles = [
  {
    name: "GitHub",
    username: "@johndoe",
    description: "Open source projects and contributions",
    stats: "150+ repositories",
    color: "#181717",
    icon: "🐙"
  },
  {
    name: "LeetCode",
    username: "@johndoe_dev",
    description: "Algorithm and data structure solutions",
    stats: "500+ problems solved",
    color: "#FF8C00",
    icon: "🧮"
  },
  {
    name: "CodePen",
    username: "@johndoe_pen",
    description: "Creative frontend experiments",
    stats: "75+ pens",
    color: "#000000",
    icon: "✏️"
  },
  {
    name: "Stack Overflow",
    username: "@john_doe",
    description: "Helping the developer community",
    stats: "2.5k reputation",
    color: "#F58025",
    icon: "📚"
  },
  {
    name: "HackerRank",
    username: "@johndoe123",
    description: "Competitive programming challenges",
    stats: "Gold badge holder",
    color: "#00EA64",
    icon: "🏆"
  },
  {
    name: "Dev.to",
    username: "@johndoe_dev",
    description: "Technical articles and tutorials",
    stats: "25+ articles",
    color: "#0A0A0A",
    icon: "📝"
  }
];

const CodingProfiles: React.FC<CodingProfilesProps> = ({ nextSection }) => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-fuchsia-900/20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Coding Profiles
          </h1>
          <p className="text-xl text-white/80">
            Connect with me across various coding platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
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
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-400/50 transition-all duration-300 overflow-hidden"
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
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${profile.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Github className="w-6 h-6" style={{ color: profile.color }} />
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

                    <motion.button
                      className="text-sm font-semibold px-4 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: profile.color,
                        color: profile.color
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit
                    </motion.button>
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
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
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
