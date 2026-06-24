import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ParallaxHero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mouse Move Event Listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Mouse position സ്ക്രീനിന്റെ സെന്ററിൽ നിന്നും എത്ര മാറിയെന്ന് കണ്ടെത്തുന്നു (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setOffset({ x, y });
    };

    // Scroll Event Listener
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax Speeds (Calculated based on your input)
  // 1. Background (Slow)
  const bgTransform = {
    transform: `translate(${offset.x * 20}px, ${offset.y * 20 + scrollY * 0.2}px)`
  };

  // 2. Main Image (Medium)
  const imgTransform = {
    transform: `translate(${offset.x * -40}px, ${offset.y * -40 + scrollY * 0.4}px)`
  };

  // 3. Shapes (Fast)
  const shapeFast1 = {
    transform: `translate(${offset.x * 80}px, ${offset.y * 80 + scrollY * 0.7}px)`
  };
  
  const shapeFast2 = {
    transform: `translate(${offset.x * -100}px, ${offset.y * -100 + scrollY * 0.9}px)`
  };

  return (
    <section className="relative pt-10 md:pt-0 w-full h-screen overflow-hidden bg-slate-950 text-white flex items-start md:items-center justify-center">
      
      {/* BACKGROUND LAYER : SLOW */}
      <div 
        style={bgTransform}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] transition-transform duration-75 ease-out"
      >
        {/* Grid lines or starry dots background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* FAST SHAPES (Floating Elements) */}
      {/* Shape 1: Top Right */}
      <div 
        style={shapeFast1}
        className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-lg blur-[2px] opacity-70 transition-transform duration-75 ease-out hidden md:block"
      />
      {/* Shape 2: Bottom Left */}
      <div 
        style={shapeFast2}
        className="absolute bottom-1/4 left-1/4 w-16 h-16 border-4 border-indigo-500 rounded-full blur-[1px] opacity-60 transition-transform duration-75 ease-out hidden md:block"
      />

      {/* HERO CONTENT CONTAINER */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-start relative z-10 max-w-7xl">
        
        {/* Left Side: Text Details */}
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-950/50 border border-blue-900 rounded-full">
            Next Generation UX
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Immersive <br />
            <span className="text-blue-500">Parallax</span> Experiences
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-md mx-auto lg:mx-0">
            Create depth and emotion with perfectly timed background, foreground, and geometric layer movements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="flex items-center justify-center gap-2 px-6 py-3 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl transition-all duration-200">
              Live Demo
            </button>
          </div>
        </div>

        {/* Right Side: MAIN IMAGE LAYER : MEDIUM */}
        <div className="flex justify-center items-center relative">
          {/* Subtle glow behind image */}
          <div className="absolute  bg-blue-500/10 rounded-full blur-3xl" />
          
          <div 
            style={imgTransform}
            className="relative  h-96 transition-transform duration-75 ease-out"
          >
            {/* നിങ്ങൾക്ക് ഇഷ്ടമുള്ള ഇമേജ് URL ഇവിടെ നൽകാം */}
            <img 
              src="https://i.pinimg.com/736x/cf/5c/c6/cf5cc670d58190ae02651e0aa1fb703f.jpg" 
              alt="Abstract 3D Art" 
              className="w-[500px] h-[500px] object-cover rounded-3xl shadow-2xl border border-slate-800"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ParallaxHero;