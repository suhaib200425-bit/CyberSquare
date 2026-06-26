import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function HeroBanner(
  {
    mainTitle = {
      type: "text",
      label: "Main Title",
      value: "Design Smarter."
    },
    mainTitleColor = {
      type: "color",
      label: "Main Title Color",
      value: "#ffff"
    },
    title = {
      type: "text",
      label: "Build Faster.",
      value: "Build Faster."
    },
    titleColor = {
      type: "color",
      label: "Title Color",
      value: "#ffffff"
    },
    subTitle={
      label:"Description",
      type:"textArea",
      value:"Create breathtaking user interfaces with our production-ready components. Optimized for speed, flexibility, and stunning visual impact."
    },
    subTitleColor={
      type: "color",
      label: "Title Color",
      value: "#d9cdcdfa"
    },
    primaryText={
      type: "text",
      label: "Primary Button Text",
      value: "Get Start"
    },
    secondaryText={
      type: "text",
      label: "Secondary Button Text",
      value: "Learn More"
    },
    themeColor = {
      type: "options",
      label: "Theme Gradient",
      value: "Cyber Dark",
      options: [
        { value: "Blue Dark", label: "Blue Dark" },
        { value: "Purple Dark", label: "Purple Dark" },
        { value: "Emerald Dark", label: "Emerald Dark" },
        { value: "Navy Premium", label: "Navy Premium" },
        { value: "Black Violet", label: "Black Violet" },
        { value: "Cyber Dark", label: "Cyber Dark" },
        { value: "Dark Red", label: "Dark Red" },
        { value: "Dark Pink", label: "Dark Pink" },
        { value: "Royal Blue", label: "Royal Blue" },
        { value: "Premium Black", label: "Premium Black" },
        { value: "SaaS Premium", label: "SaaS Premium" },
        { value: "AI Tech", label: "AI Tech" },
        { value: "CMS Premium", label: "CMS Premium" },
        { value: "Modern Purple", label: "Modern Purple" },
        { value: "none", label: "None" }
      ]
    },
    imageUrl = {
      label: "Image Selected",
      value: "https://i.pinimg.com/736x/ea/fd/6a/eafd6a24c6d2be48975e5d7d93efaa26.jpg",
      type: "image"
    }
  }
) {
  // Animation variants for staggered fade-in
  const gradients = {
    "Blue Dark": "bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950",
    "Purple Dark": "bg-gradient-to-br from-slate-950 via-purple-950 to-fuchsia-950",
    "Emerald Dark": "bg-gradient-to-br from-gray-950 via-emerald-950 to-teal-950",
    "Navy Premium": "bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950",
    "Black Violet": "bg-gradient-to-br from-black via-violet-950 to-indigo-950",
    "Cyber Dark": "bg-gradient-to-br from-zinc-950 via-cyan-950 to-blue-950",
    "Dark Red": "bg-gradient-to-br from-zinc-950 via-red-950 to-orange-950",
    "Dark Pink": "bg-gradient-to-br from-slate-950 via-pink-950 to-purple-950",
    "Royal Blue": "bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950",
    "Premium Black": "bg-gradient-to-br from-zinc-950 via-neutral-900 to-black",
    "SaaS Premium": "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950",
    "AI Tech": "bg-gradient-to-br from-black via-blue-950 to-cyan-950",
    "CMS Premium": "bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950",
    "Modern Purple": "bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950",
    "none": "bg-white"
  };

  const themeGradient = gradients[themeColor.value || "none"]


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
    <section className={`${themeGradient} relative w-full min-h-[80vh] flex items-center text-white overflow-hidden px-6 py-12 md:px-12 lg:px-24`}>
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

          <motion.h1
            style={{
              color: mainTitleColor.value
            }}
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            {mainTitle.value} <br />
            <span
              style={{
                color: titleColor.value
              }} className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text ">
              {title.value}
            </span>
          </motion.h1>

          <motion.p
          style={{
            color:subTitleColor.value
          }}
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            {subTitle.value}
             </motion.p>

          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            {
              primaryText.value&&
              <button className="group flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200">
             {primaryText.value}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            }
            
            {
              secondaryText.value&&
              <button className="flex items-center justify-center bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium px-8 py-3.5 rounded-xl transition-all duration-200">
             {secondaryText.value}
            </button>
            }
            
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
              src={imageUrl.value}
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