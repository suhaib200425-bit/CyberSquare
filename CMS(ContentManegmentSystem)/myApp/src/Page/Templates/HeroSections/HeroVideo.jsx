import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { animatedVideo } from '../../../assets/assets';

// Simulated CMS Fields as props with default fallbacks
const HeroVideo = ({
  desktopPadding={
type:"text",
label:"Desktop Padding",
value:"20px 100px"
  },
  mobilePadding={
type:"text",
label:"Mobile Padding",
value:"20px 10px"
  },
  videoUrl = {
    type:"video",
    label:"Backgroun Video",
    value:animatedVideo
  },
  title = {
    type:"textArea",
    label:"Main Title",
    value:"There, future of web design"
  },
  subtitle = {
    type:"textArea",
    label:"Sub Title",
    value:"Crafting high-performance user experiences with React, Tailwind CSS, and fluid motion tracking."
  },
  buttonText = {
    type:"textArea",
    label:"Button Name",
    value:"Get Started Today"
  }
}) => {
  
  // Framer Motion Animation Variants for the staggered slide-up effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child animation slightly
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000], // Smooth cubic-bezier easeOut
      },
    },
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  return (
    <section style={{
      padding:isMobile?mobilePadding.value:desktopPadding.value
    }} className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* 1. Background Video & Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={videoUrl.value}
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:bg-black/40" />
      </div>

      {/* 2. Title and CTA Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl flex flex-col items-start gap-6"
        >
          {/* Title (CMS Field) */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            {title.value}
          </motion.h1>

          {/* Subtitle (CMS Field) */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-200 font-light max-w-xl"
          >
            {subtitle.value}
          </motion.p>

          {/* Button / CTA (CMS Field) */}
          <motion.div variants={itemVariants} className="pt-2">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white border-2 border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
              {/* Button hover effect background expansion */}
              <span className="absolute inset-0 w-full h-full bg-black scale-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-100 -z-10" />
              
              {buttonText.value}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
          
        </motion.div>
      </div>

      {/* Optional: Subtle bottom gradient/vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroVideo;