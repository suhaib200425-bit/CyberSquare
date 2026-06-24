import React, { useEffect, useState } from 'react';
import { Trophy, Cpu, Landmark, Briefcase, Flame, ArrowUpRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';
import axios from 'axios';

function CategoryHero({
  desktopPadding = { value: "20px 100px" },
  mobilePadding = { value: "30px 10px" },
  gridTag = { value: true, type: "bool" },
  badgeText = { value: "Hot Off The Press" },
  mainTitle = { value: "Stay Ahead Of The" },
  title = { value: "Stories That Matter" },
  subTitle = { value: "Discover breaking news, deep dives, and expert analysis across fields. Select a category below to filter your feed." },
  themeColors = {
    label: "Theme Color Names",
    type: "options",
    value: "indigo",
    options: [
      [
        { label: 'Indigo Night', value: 'indigo' },
        { label: 'Emerald Aurora', value: 'emerald' },
        { label: 'Amber Solar', value: 'amber' },
        { label: 'Rose Cyber', value: 'rose' },
        { label: 'Cyan Matrix', value: 'cyan' },
        { label: 'Neon Violet', value: 'violet' },
        { label: 'Lime Toxic', value: 'lime' },
        { label: 'Fuchsia Velvet', value: 'fuchsia' },
        { label: 'Sky Frost', value: 'sky' },
        { label: 'Volcanic Orange', value: 'orange' }
      ]
    ]
  }

}) {
  const themes = {
    indigo: {
      name: 'Indigo Night',
      bgColor: 'bg-[#030214]', // Very dark Indigo-black
      gridColor: 'rgba(99,102,241,0.05)', // Indigo lines
      badgeBg: 'bg-indigo-955/40 border-indigo-900/60 text-indigo-400',
      gradientText: 'from-indigo-400 to-purple-400',
      cardHoverText: 'group-hover:text-indigo-400',
      bgGlowLeft: 'bg-indigo-600/10',
      bgGlowRight: 'bg-purple-600/10'
    },
    emerald: {
      name: 'Emerald Aurora',
      bgColor: 'bg-[#010c06]', // Very dark Green-black
      gridColor: 'rgba(16,185,129,0.05)', // Emerald lines
      badgeBg: 'bg-emerald-950/40 border-emerald-900/60 text-emerald-400',
      gradientText: 'from-emerald-400 to-cyan-400',
      cardHoverText: 'group-hover:text-emerald-400',
      bgGlowLeft: 'bg-emerald-600/10',
      bgGlowRight: 'bg-teal-600/10'
    },
    amber: {
      name: 'Amber Solar',
      bgColor: 'bg-[#0f0801]', // Very dark Amber-black
      gridColor: 'rgba(245,158,11,0.05)', // Amber lines
      badgeBg: 'bg-amber-950/40 border-amber-900/60 text-amber-400',
      gradientText: 'from-amber-400 to-orange-400',
      cardHoverText: 'group-hover:text-amber-400',
      bgGlowLeft: 'bg-amber-600/10',
      bgGlowRight: 'bg-yellow-600/10'
    },
    rose: {
      name: 'Rose Cyber',
      bgColor: 'bg-[#0f0106]', // Very dark Rose-black
      gridColor: 'rgba(244,63,94,0.05)', // Rose lines
      badgeBg: 'bg-rose-950/40 border-rose-900/60 text-rose-400',
      gradientText: 'from-rose-400 to-pink-400',
      cardHoverText: 'group-hover:text-rose-400',
      bgGlowLeft: 'bg-rose-600/10',
      bgGlowRight: 'bg-purple-600/10'
    },
    cyan: {
      name: 'Cyan Matrix',
      bgColor: 'bg-[#010b12]', // Very dark Cyan-black
      gridColor: 'rgba(6,182,212,0.05)', // Cyan lines
      badgeBg: 'bg-cyan-950/40 border-cyan-900/60 text-cyan-400',
      gradientText: 'from-cyan-400 to-blue-400',
      cardHoverText: 'group-hover:text-cyan-400',
      bgGlowLeft: 'bg-cyan-600/10',
      bgGlowRight: 'bg-indigo-600/10'
    },
    violet: {
      name: 'Neon Violet',
      bgColor: 'bg-[#070114]', // Very dark Violet-black
      gridColor: 'rgba(139,92,246,0.05)', // Violet lines
      badgeBg: 'bg-violet-950/40 border-violet-900/60 text-violet-400',
      gradientText: 'from-violet-400 to-fuchsia-400',
      cardHoverText: 'group-hover:text-violet-400',
      bgGlowLeft: 'bg-violet-600/10',
      bgGlowRight: 'bg-pink-600/10'
    },
    lime: {
      name: 'Lime Toxic',
      bgColor: 'bg-[#060a01]', // Very dark Lime-black
      gridColor: 'rgba(132,204,22,0.05)', // Lime lines
      badgeBg: 'bg-lime-950/40 border-lime-900/60 text-lime-400',
      gradientText: 'from-lime-400 to-emerald-400',
      cardHoverText: 'group-hover:text-lime-400',
      bgGlowLeft: 'bg-lime-600/10',
      bgGlowRight: 'bg-teal-600/10'
    },
    fuchsia: {
      name: 'Fuchsia Velvet',
      bgColor: 'bg-[#0e0112]', // Very dark Fuchsia-black
      gridColor: 'rgba(217,70,239,0.05)', // Fuchsia lines
      badgeBg: 'bg-fuchsia-950/40 border-fuchsia-900/60 text-fuchsia-400',
      gradientText: 'from-fuchsia-400 to-rose-400',
      cardHoverText: 'group-hover:text-fuchsia-400',
      bgGlowLeft: 'bg-fuchsia-600/10',
      bgGlowRight: 'bg-amber-600/10'
    },
    sky: {
      name: 'Sky Frost',
      bgColor: 'bg-[#010914]', // Very dark Sky-black
      gridColor: 'rgba(56,189,248,0.05)', // Sky lines
      badgeBg: 'bg-sky-950/40 border-sky-900/60 text-sky-400',
      gradientText: 'from-sky-400 to-slate-300',
      cardHoverText: 'group-hover:text-sky-400',
      bgGlowLeft: 'bg-sky-600/10',
      bgGlowRight: 'bg-blue-400/10'
    },
    orange: {
      name: 'Volcanic Orange',
      bgColor: 'bg-[#120501]', // Very dark Orange-black
      gridColor: 'rgba(249,115,22,0.05)', // Orange lines
      badgeBg: 'bg-orange-950/40 border-orange-900/60 text-orange-400',
      gradientText: 'from-orange-400 to-red-500',
      cardHoverText: 'group-hover:text-orange-400',
      bgGlowLeft: 'bg-orange-600/10',
      bgGlowRight: 'bg-rose-600/10'
    }
  };

  const theme = themes[themeColors.value];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  return (
    <section
      onClick={() => {
        console.log(themeOptions);
      }}
      style={{ padding: isMobile ? mobilePadding?.value : desktopPadding?.value }}
      className={`relative w-full min-h-screen overflow-hidden text-white flex flex-col justify-between py-12 md:py-20 transition-all duration-700 ease-in-out ${theme.bgColor}`}
    >

      {/* 1. DYNAMIC BACKGROUND TECH GRID */}

      {
        gridTag.value &&
        <div
          style={{ backgroundImage: `linear-gradient(to right, ${theme.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${theme.gridColor} 1px, transparent 1px)` }}
          className="absolute inset-0 bg-[size:3rem_3rem] transition-all duration-700 ease-in-out"
        />
      }
      {/* 2. DYNAMIC BACKGROUND GLOWS */}
      <div className={`absolute top-0 right-1/4 w-96 h-96 ${theme.bgGlowLeft} rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-in-out`} />
      <div className={`absolute bottom-0 left-1/4 w-96 h-96 ${theme.bgGlowRight} rounded-full blur-3xl pointer-events-none transition-all duration-700 ease-in-out`} />



      {/* MAIN HERO CONTENT */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex-1 flex flex-col justify-center items-center text-center max-w-3xl mt-8">

        {/* Dynamic Trending Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full mb-6 backdrop-blur-sm animate-pulse border transition-all duration-500 ${theme.badgeBg}`}>
          <Flame className="w-3.5 h-3.5" /> {badgeText?.value}
        </div>

        {/* Main Title with Dynamic Gradient */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
          {mainTitle?.value} <br />
          <span className={`bg-clip-text text-transparent bg-gradient-to-r transition-all duration-500 ${theme.gradientText}`}>
            {title?.value}
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-slate-400 max-w-xl">
          {subTitle?.value}
        </p>
      </div>

      

    </section>
  );
};

export default CategoryHero;