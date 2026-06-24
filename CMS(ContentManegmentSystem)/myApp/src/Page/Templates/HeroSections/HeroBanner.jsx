import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  // Animation variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays the animation of each child element
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
    },
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white overflow-hidden px-6 py-12 md:px-12 lg:px-24">
      {/* Subtle background glow decorative element */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          className="flex flex-col justify-center space-y-6 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="text-indigo-400 font-semibold tracking-wider uppercase text-sm"
          >
            Introducing the Future
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Design Smarter. <br />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Build Faster.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            Create breathtaking user interfaces with our production-ready components. Optimized for speed, flexibility, and stunning visual impact.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <button className="group flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium px-8 py-3.5 rounded-xl transition-all duration-200">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Featured Image */}
        <motion.div 
          className="flex justify-center items-center w-full"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-lg lg:max-w-none aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/50 dynamic-gradient-border">
            {/* Replace this placeholder with your actual product image or illustration */}
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1024&auto=format&fit=crop" 
              alt="Featured Abstract Artwork" 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroBanner;