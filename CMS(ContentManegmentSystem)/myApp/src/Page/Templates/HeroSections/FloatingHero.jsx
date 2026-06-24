import React, { useState, useEffect } from 'react';
import { Shield, Zap, Cpu, BarChart3, ArrowRight, Play } from 'lucide-react';

const FloatingHero = ({
  themeName = {
    label: "Theme Color Names",
    value: "amber",
    type: "options",
    options: [
      { value: 'indigo', label: 'Indigo Night' },
      { value: 'emerald', label: 'Emerald Aurora' },
      { value: 'amber', label: 'Amber Solar' },
      { value: 'rose', label: 'Rose Cyber' },
      { value: 'cyan', label: 'Cyan Matrix' },
      { value: 'violet', label: 'Neon Violet' },
      { value: 'lime', label: 'Lime Toxic' },
      { value: 'fuchsia', label: 'Fuchsia Velvet' },
      { value: 'sky', label: 'Sky Frost' },
      { value: 'orange', label: 'Volcanic Orange' }
    ]
  },
  badgeText = { value: " Introducing SaaS OS v2.0" },
  mainTitle = { value: "Automate Your Workflow." },
  title = { value: "Scale Without Limits." },
  subTitle = { value: "The all-in-one platform built for modern product teams. Connect your data pipelines, track growth metrics, and secure cloud operations instantly." },
  primaryBtnText = { value: "Start Free Trial " },
  secondryBtnText = { value: " Watch Demo " },
// Platform Preview Canvas
  canvasText = { value: "" },
  canvasSize = { value: "21px" }
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Move ട്രാക്ക് ചെയ്ത് കോർഡിനേറ്റ്സ് അപ്ഡേറ്റ് ചെയ്യുന്നു (-0.5 to 0.5)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mouse Parallax Speeds
  const slowParallax = {
    transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)`,
  };
  const fastParallax = {
    transform: `translate(${mousePos.x * -50}px, ${mousePos.y * -50}px)`,
  };

  const themes = {
    indigo: {
      name: 'Indigo Night',
      badgeBg: 'bg-indigo-950/40 border-indigo-900/50 text-indigo-400',
      badgePing: 'bg-indigo-400',
      gradientText: 'from-indigo-400 via-purple-400 to-pink-400',
      primaryBtn: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20',
      iconGlow: 'shadow-indigo-950/20 text-indigo-400',
      bgGlowLeft: 'bg-indigo-500/10'
    },
    emerald: {
      name: 'Emerald Aurora',
      badgeBg: 'bg-emerald-950/40 border-emerald-900/50 text-emerald-400',
      badgePing: 'bg-emerald-400',
      gradientText: 'from-emerald-400 via-teal-400 to-cyan-400',
      primaryBtn: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20',
      iconGlow: 'shadow-emerald-950/20 text-emerald-400',
      bgGlowLeft: 'bg-emerald-500/10'
    },
    amber: {
      name: 'Amber Solar',
      badgeBg: 'bg-amber-950/40 border-amber-900/50 text-amber-400',
      badgePing: 'bg-amber-400',
      gradientText: 'from-amber-400 via-orange-400 to-yellow-400',
      primaryBtn: 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/20',
      iconGlow: 'shadow-amber-950/20 text-amber-400',
      bgGlowLeft: 'bg-amber-500/10'
    },
    rose: {
      name: 'Rose Cyber',
      badgeBg: 'bg-rose-950/40 border-rose-900/50 text-rose-400',
      badgePing: 'bg-rose-400',
      gradientText: 'from-rose-400 via-pink-400 to-purple-400',
      primaryBtn: 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20',
      iconGlow: 'shadow-rose-950/20 text-rose-400',
      bgGlowLeft: 'bg-rose-500/10'
    },
    cyan: {
      name: 'Cyan Matrix',
      badgeBg: 'bg-cyan-950/40 border-cyan-900/50 text-cyan-400',
      badgePing: 'bg-cyan-400',
      gradientText: 'from-cyan-400 via-blue-400 to-indigo-400',
      primaryBtn: 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/20',
      iconGlow: 'shadow-cyan-950/20 text-cyan-400',
      bgGlowLeft: 'bg-cyan-500/10'
    },
    violet: {
      name: 'Neon Violet',
      badgeBg: 'bg-violet-950/40 border-violet-900/50 text-violet-400',
      badgePing: 'bg-violet-400',
      gradientText: 'from-violet-400 via-fuchsia-400 to-pink-500',
      primaryBtn: 'bg-violet-600 hover:bg-violet-500 shadow-violet-600/20',
      iconGlow: 'shadow-violet-950/20 text-violet-400',
      bgGlowLeft: 'bg-violet-500/10'
    },
    lime: {
      name: 'Lime Toxic',
      badgeBg: 'bg-lime-950/40 border-lime-900/50 text-lime-400',
      badgePing: 'bg-lime-400',
      gradientText: 'from-lime-400 via-emerald-400 to-teal-400',
      primaryBtn: 'bg-lime-600 hover:bg-lime-500 shadow-lime-600/20 text-slate-950',
      iconGlow: 'shadow-lime-950/20 text-lime-400',
      bgGlowLeft: 'bg-lime-500/10'
    },
    fuchsia: {
      name: 'Fuchsia Velvet',
      badgeBg: 'bg-fuchsia-950/40 border-fuchsia-900/50 text-fuchsia-400',
      badgePing: 'bg-fuchsia-400',
      gradientText: 'from-fuchsia-400 via-rose-400 to-amber-400',
      primaryBtn: 'bg-fuchsia-600 hover:bg-fuchsia-500 shadow-fuchsia-600/20',
      iconGlow: 'shadow-fuchsia-950/20 text-fuchsia-400',
      bgGlowLeft: 'bg-fuchsia-500/10'
    },
    sky: {
      name: 'Sky Frost',
      badgeBg: 'bg-sky-950/40 border-sky-900/50 text-sky-400',
      badgePing: 'bg-sky-400',
      gradientText: 'from-sky-400 via-slate-300 to-white',
      primaryBtn: 'bg-sky-600 hover:bg-sky-500 shadow-sky-600/20',
      iconGlow: 'shadow-sky-950/20 text-sky-400',
      bgGlowLeft: 'bg-sky-500/10'
    },
    orange: {
      name: 'Volcanic Orange',
      badgeBg: 'bg-orange-950/40 border-orange-900/50 text-orange-400',
      badgePing: 'bg-orange-400',
      gradientText: 'from-orange-400 via-red-500 to-rose-600',
      primaryBtn: 'bg-orange-600 hover:bg-orange-500 shadow-orange-600/20',
      iconGlow: 'shadow-orange-950/20 text-orange-400',
      bgGlowLeft: 'bg-orange-500/10'
    }
  };

  const theme = themes[themeName.value];



  return (
    <section className="relative w-full min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-20 overflow-hidden">

      {/* Tailwind Custom Styles (Animation Keyframes) */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-10deg); }
        }
        .animate-float-1 { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-slow 8s ease-in-out infinite 1s; }
        .animate-float-3 { animation: float-fast 5s ease-in-out infinite 0.5s; }
      `}} />

      {/* Dynamic Background Glows */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.08),transparent_50%)]`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]" />

      {/* ================= FLOATING ELEMENTS LAYER ================= */}

      {/* 1. FLOATING CIRCLES */}
      <div style={slowParallax} className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out hidden md:block">
        <div className={`absolute top-1/4 left-12 w-64 h-64 ${theme.bgGlowLeft} rounded-full blur-3xl animate-float-1 transition-all duration-500`} />
        <div className="absolute bottom-1/4 right-20 w-48 h-48 border border-purple-500/20 rounded-full animate-float-2 flex items-center justify-center">
          <div className="w-32 h-32 border border-dashed border-purple-500/10 rounded-full" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pink-500/40 rounded-full blur-[1px] animate-float-3" />
      </div>

      {/* 2. FLOATING ICONS */}
      <div style={fastParallax} className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out hidden lg:block">

        {/* Icon 1: Dynamic Color Base on Theme */}
        <div className={`absolute top-24 left-[15%] animate-float-1 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shadow-xl transition-all duration-500 ${theme.iconGlow}`}>
          <Shield className="w-6 h-6" />
        </div>

        <div className="absolute top-32 right-[15%] animate-float-3 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shadow-xl shadow-purple-950/20 text-amber-400">
          <Zap className="w-6 h-6 animate-pulse" />
        </div>

        <div className="absolute bottom-32 left-[18%] animate-float-2 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shadow-xl shadow-slate-950/40 text-emerald-400">
          <BarChart3 className="w-6 h-6" />
        </div>

        <div className="absolute bottom-24 right-[18%] animate-float-1 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl shadow-xl shadow-slate-950/40 text-pink-400">
          <Cpu className="w-6 h-6" />
        </div>
      </div>

      {/* ================= MAIN HERO CONTENT ================= */}
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center space-y-8 mt-12">

        {/* Dynamic SaaS Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full backdrop-blur-md border transition-all duration-500 ${theme.badgeBg}`}>
          <span className={`w-2 h-2 rounded-full animate-ping transition-all duration-500 ${theme.badgePing}`} />
          {badgeText.value}
        </div>

        {/* Main Headings with Dynamic Gradient */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
          {mainTitle.value} <br />
          <span className={`bg-clip-text text-transparent bg-gradient-to-r transition-all duration-500 ${theme.gradientText}`}>
            {title.value}
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subTitle.value}
        </p>

        {/* Call To Action Buttons with Dynamic Styles */}
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {
            primaryBtnText.value &&
            <button className={`w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white rounded-xl transition-all duration-200 shadow-lg active:scale-95 ${theme.primaryBtn}`}>
              {primaryBtnText.value}
            </button>
          }

          {
            secondryBtnText.value &&
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl transition-all duration-200 active:scale-95">
              {secondryBtnText.value}
            </button>
          }

        </div>

        {/* Minimal Dashboard Preview */}
        {
          canvasText.value &&
          <div className="pt-12 max-w-5xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-500 hidden sm:block">
            <div className="p-2 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-sm shadow-2xl">
              <div style={{
                fontSize:canvasSize.value
              }} className="h-64 md:h-80 w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/80 flex items-center justify-center text-slate-600 text-sm font-mono relative overflow-hidden">
                <div className="absolute top-3 left-4 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                </div>
                {canvasText.value}
              </div>
            </div>
          </div>
        }


      </div>
    </section>
  );
};

export default FloatingHero;