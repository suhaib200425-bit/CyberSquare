import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const FullscreenHero = () => {
  // Container variant to stagger the text fade-up animations
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each text element
        delayChildren: 0.3,   // Wait slightly for the bg zoom to start
      },
    },
  };

  // Text Fade Up variant
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }, // Smooth easeOutCubic
    },
  };

  // Background Image Zoom variant
  const bgZoomVariants = {
    hidden: { scale: 1.3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* 1. Fullscreen Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
        variants={bgZoomVariants}
        initial="hidden"
        animate="visible"
      >
        <img 
          src="https://i.pinimg.com/1200x/65/2f/05/652f0585487ba77425fce2b81f53007e.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 2. Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70 z-10" />

      {/* 3. Center Aligned Content */}
      <motion.div 
        className="relative max-w-4xl mx-auto px-6 text-center z-20 flex flex-col items-center space-y-6"
        variants={contentContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge / Tag */}
        <motion.div 
          variants={fadeUpVariants}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-indigo-200"
        >
          <Sparkles className="w-4 h-4 text-indigo-300" />
          Next Generation Experience
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          variants={fadeUpVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[1.1]"
        >
          Unleash Absolute <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Digital Power
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={fadeUpVariants}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed drop-shadow"
        >
          Immerse yourself in a seamless ecosystem engineered for scale, performance, and breathtaking fidelity. Built for creators who demand perfection.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={fadeUpVariants}
          className="pt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="px-8 py-4 rounded-full font-semibold bg-white text-black hover:bg-slate-200 active:scale-98 transition-all duration-200 shadow-xl shadow-white/10">
            Explore Ecosystem
          </button>
          <button className="px-8 py-4 rounded-full font-semibold bg-transparent border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm active:scale-98 transition-all duration-200">
            Watch Showcase
          </button>
        </motion.div>
      </motion.div>

      {/* Optional: Bottom indicator element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-50 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1.5 h-2 bg-white rounded-full" />
        </div>
      </div>

    </section>
  );
};

export default FullscreenHero;