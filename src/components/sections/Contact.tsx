import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  nextSection: () => void;
  prevSection: () => void;
}

const Contact: React.FC<ContactProps> = ({ nextSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-purple-900/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-white/80">
            Ready to bring your ideas to life? Let's talk!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>s.vijayalakshmi.20070826@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+91 7200139765</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>Chennai, Tamil Nadu</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-teal-400 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-teal-400 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-teal-400 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-teal-500 to-purple-500 text-white font-semibold relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="success"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>✅</span>
                      <span>Message Sent!</span>
                    </motion.span>
                  ) : isSubmitting ? (
                    <motion.span
                      key="loading"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center justify-center space-x-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={nextSection}
            className="px-8 py-4 rounded-full border border-white/30 text-white/80 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View Articles →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
