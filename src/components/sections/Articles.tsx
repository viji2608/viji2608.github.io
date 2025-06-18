
import React from 'react';
import { motion } from 'framer-motion';

interface ArticlesProps {
  nextSection: () => void;
  prevSection: () => void;
}

const articles = [
  {
    title: "Building Interactive 3D Experiences with React Three Fiber",
    excerpt: "Learn how to create stunning 3D web experiences using React Three Fiber and Three.js",
    date: "Dec 15, 2023",
    readTime: "8 min read",
    category: "Tutorial"
  },
  {
    title: "Advanced Animation Techniques with Framer Motion",
    excerpt: "Master complex animations and micro-interactions that enhance user experience",
    date: "Nov 28, 2023",
    readTime: "12 min read",
    category: "Guide"
  },
  {
    title: "The Future of Web Development: WebGL and Beyond",
    excerpt: "Exploring the next generation of web technologies and their impact on development",
    date: "Nov 10, 2023",
    readTime: "6 min read",
    category: "Opinion"
  },
  {
    title: "Performance Optimization for Modern React Applications",
    excerpt: "Essential techniques for building fast and efficient React applications",
    date: "Oct 22, 2023",
    readTime: "10 min read",
    category: "Technical"
  }
];

const Articles: React.FC<ArticlesProps> = ({ nextSection }) => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-indigo-900/20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Articles
          </h1>
          <p className="text-xl text-white/80">
            Insights, tutorials, and thoughts on modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <motion.span
                    className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    {article.category}
                  </motion.span>
                  <span className="text-sm text-white/60">{article.date}</span>
                </div>
                
                <motion.h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {article.title}
                </motion.h3>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">{article.readTime}</span>
                  <motion.button
                    className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center space-x-1"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </motion.button>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.01 }}
              />
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.button
              className="px-6 py-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Articles
            </motion.button>
            <motion.button
              className="px-6 py-3 rounded-full border border-white/30 text-white/80 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Newsletter
            </motion.button>
          </motion.div>

          <motion.button
            onClick={nextSection}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Coding Profiles →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
