
import React from 'react';
import { motion } from 'framer-motion';

interface SkillsProps {
  nextSection: () => void;
  prevSection: () => void;
}

const skills = [
  { name: "React", level: 95, color: "#61DAFB" },
  { name: "TypeScript", level: 90, color: "#3178C6" },
  { name: "Three.js", level: 85, color: "#324AB2" },
  { name: "Node.js", level: 88, color: "#339933" },
  { name: "Python", level: 82, color: "#3776AB" },
  { name: "MongoDB", level: 80, color: "#47A248" },
  { name: "AWS", level: 75, color: "#FF9900" },
  { name: "Docker", level: 78, color: "#2496ED" },
];

const Skills: React.FC<SkillsProps> = ({ nextSection }) => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-relaxed bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-xl text-white/80">
            Technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <motion.span
                  className="text-lg font-semibold"
                  style={{ color: skill.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ 
                    delay: index * 0.1 + 0.3, 
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                />
                
                <motion.div
                  className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 400] }}
                  transition={{ 
                    delay: index * 0.1 + 1.8,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <motion.div
                className="absolute -inset-1 rounded-xl opacity-0 blur-sm"
                style={{ backgroundColor: skill.color }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Git", "VS Code", "Figma", "Postman", "Webpack", "Jest"].map((tool, index) => (
                <motion.span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-white/10 text-white/80 border border-white/20"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.button
            onClick={nextSection}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
