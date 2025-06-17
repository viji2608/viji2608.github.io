
import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';

interface ProjectsProps {
  nextSection: () => void;
  prevSection: () => void;
}

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    tech: ["React", "Node.js", "MongoDB"],
    color: "#8B5CF6"
  },
  {
    title: "3D Portfolio Website",
    description: "Interactive 3D portfolio using Three.js and React Three Fiber",
    tech: ["Three.js", "React", "Framer Motion"],
    color: "#EC4899"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat app with AI integration and modern UI",
    tech: ["React", "Socket.io", "OpenAI"],
    color: "#06B6D4"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    tech: ["React", "Firebase", "Tailwind"],
    color: "#10B981"
  }
];

const Projects: React.FC<ProjectsProps> = ({ nextSection }) => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-white/80">
            Showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group h-80"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
                {/* 3D Background Element */}
                <div className="absolute inset-0 opacity-20">
                  <Canvas>
                    <ambientLight intensity={0.5} />
                    <Float speed={2} rotationIntensity={1}>
                      <Box args={[2, 2, 2]} position={[0, 0, 0]}>
                        <meshStandardMaterial color={project.color} wireframe />
                      </Box>
                    </Float>
                  </Canvas>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <motion.h3
                      className="text-2xl font-bold text-white mb-3"
                      whileHover={{ color: project.color }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/90"
                          whileHover={{ scale: 1.1, backgroundColor: `${project.color}20` }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className="self-start px-6 py-2 rounded-full border border-white/30 text-white/80 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05, borderColor: project.color }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10"
                  style={{ backgroundColor: project.color }}
                  whileHover={{ opacity: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={nextSection}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Skills →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
