import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

function ParallaxHero ({
    heading = { 
        label: "Main Title", 
        type: "textArea", 
        value: "Immersive Parallax Experiences" 
    },
    description = { 
        type: "textArea", 
        label: "Description", 
        value: "Create depth and emotion with perfectly timed background, foreground, and geometric layer movements." 
    },
    badgeText = {
        label: "Badge Text",
        type: "text",
        value: "Next Generation UX"
    },
    buttonText = { 
        value: "Get Started", 
        label: "Button text", 
        type: "text" 
    },
    buttonRoute = { value: "buttonRoute" },
    heroImage = {
        label: "Hero Image",
        type: "image",
        value: "https://i.pinimg.com/736x/cf/5c/c6/cf5cc670d58190ae02651e0aa1fb703f.jpg"
    },
    // 10 തീമുകൾ അടങ്ങിയ ഓപ്ഷൻ കോൺഫിഗറേഷൻ പ്രോപ്പ്
    themeColor = {
        label: "Theme Color",
        type: "options",
        value: "cyan", // Default Value
        options: [
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
    }
})  {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    // 10 തീമുകളുടെ സ്റ്റൈൽ മാപ്പർ
    const themeStyles = {
        indigo: {
            bgColor: 'bg-[#030214]',
            gridColor: 'rgba(99,102,241,0.04)',
            badgeBg: 'bg-indigo-950/50 border-indigo-900 text-indigo-400',
            textGradient: "from-indigo-400 via-purple-400 to-pink-400",
            buttonBg: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20",
            shape1: "from-indigo-500 to-purple-500",
            shape2: "border-pink-500",
            glowColor: "bg-indigo-500/10"
        },
        emerald: {
            bgColor: 'bg-[#010c06]',
            gridColor: 'rgba(16,185,129,0.04)',
            badgeBg: 'bg-emerald-950/50 border-emerald-900 text-emerald-400',
            textGradient: "from-emerald-400 via-teal-400 to-cyan-400",
            buttonBg: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20",
            shape1: "from-emerald-500 to-teal-500",
            shape2: "border-cyan-500",
            glowColor: "bg-emerald-500/10"
        },
        amber: {
            bgColor: 'bg-[#0f0801]',
            gridColor: 'rgba(245,158,11,0.04)',
            badgeBg: 'bg-amber-950/50 border-amber-900 text-amber-400',
            textGradient: "from-amber-400 via-orange-400 to-yellow-400",
            buttonBg: "bg-amber-600 hover:bg-amber-500 shadow-amber-600/20",
            shape1: "from-amber-500 to-orange-500",
            shape2: "border-yellow-500",
            glowColor: "bg-amber-500/10"
        },
        rose: {
            bgColor: 'bg-[#0f0106]',
            gridColor: 'rgba(244,63,94,0.04)',
            badgeBg: 'bg-rose-950/50 border-rose-900 text-rose-400',
            textGradient: "from-rose-400 via-pink-400 to-purple-400",
            buttonBg: "bg-rose-600 hover:bg-rose-500 shadow-rose-600/20",
            shape1: "from-rose-500 to-pink-500",
            shape2: "border-purple-500",
            glowColor: "bg-rose-500/10"
        },
        cyan: {
            bgColor: 'bg-[#010b12]',
            gridColor: 'rgba(6,182,212,0.04)',
            badgeBg: 'bg-cyan-950/50 border-cyan-900 text-cyan-400',
            textGradient: "from-cyan-400 via-blue-400 to-indigo-400",
            buttonBg: "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/20",
            shape1: "from-cyan-500 to-blue-500",
            shape2: "border-indigo-500",
            glowColor: "bg-cyan-500/10"
        },
        violet: {
            bgColor: 'bg-[#070114]',
            gridColor: 'rgba(139,92,246,0.04)',
            badgeBg: 'bg-violet-950/50 border-violet-900 text-violet-400',
            textGradient: "from-violet-400 via-fuchsia-400 to-pink-500",
            buttonBg: "bg-violet-600 hover:bg-violet-500 shadow-violet-600/20",
            shape1: "from-violet-500 to-fuchsia-500",
            shape2: "border-pink-500",
            glowColor: "bg-violet-500/10"
        },
        lime: {
            bgColor: 'bg-[#060a01]',
            gridColor: 'rgba(132,204,22,0.04)',
            badgeBg: 'bg-lime-950/50 border-lime-900 text-lime-400',
            textGradient: "from-lime-400 via-emerald-400 to-teal-400",
            buttonBg: "bg-lime-600 hover:bg-lime-500 shadow-lime-600/20 text-slate-950",
            shape1: "from-lime-500 to-emerald-500",
            shape2: "border-teal-500",
            glowColor: "bg-lime-500/10"
        },
        fuchsia: {
            bgColor: 'bg-[#0e0112]',
            gridColor: 'rgba(217,70,239,0.04)',
            badgeBg: 'bg-fuchsia-950/50 border-fuchsia-900 text-fuchsia-400',
            textGradient: "from-fuchsia-400 via-rose-400 to-amber-400",
            buttonBg: "bg-fuchsia-600 hover:bg-fuchsia-500 shadow-fuchsia-600/20",
            shape1: "from-fuchsia-500 to-rose-500",
            shape2: "border-amber-500",
            glowColor: "bg-fuchsia-500/10"
        },
        sky: {
            bgColor: 'bg-[#010914]',
            gridColor: 'rgba(56,189,248,0.04)',
            textGradient: "from-sky-400 via-slate-300 to-white",
            badgeBg: 'bg-sky-950/50 border-sky-900 text-sky-400',
            buttonBg: "bg-sky-600 hover:bg-sky-500 shadow-sky-600/20",
            shape1: "from-sky-500 to-blue-400",
            shape2: "border-slate-400",
            glowColor: "bg-sky-500/10"
        },
        orange: {
            bgColor: 'bg-[#120501]',
            gridColor: 'rgba(249,115,22,0.04)',
            badgeBg: 'bg-orange-950/50 border-orange-900 text-orange-400',
            textGradient: "from-orange-400 via-red-500 to-rose-600",
            buttonBg: "bg-orange-600 hover:bg-orange-500 shadow-orange-600/20",
            shape1: "from-orange-500 to-red-500",
            shape2: "border-rose-500",
            glowColor: "bg-orange-500/10"
        }
    };

    // Parallax logic (Mouse Move & Scroll Event listeners)
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            setOffset({ x, y });
        };

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

    // activeTheme സെലക്ട് ചെയ്യുന്നു
    const activeTheme = themeStyles[themeColor?.value] || themeStyles.indigo;

    // Parallax Layer Calculations
    const bgTransform = {
        transform: `translate(${offset.x * 20}px, ${offset.y * 20 + scrollY * 0.2}px)`
    };

    const imgTransform = {
        transform: `translate(${offset.x * -40}px, ${offset.y * -40 + scrollY * 0.4}px)`
    };

    const shapeFast1 = {
        transform: `translate(${offset.x * 80}px, ${offset.y * 80 + scrollY * 0.7}px)`
    };
    
    const shapeFast2 = {
        transform: `translate(${offset.x * -100}px, ${offset.y * -100 + scrollY * 0.9}px)`
    };

    return (
        <section className={`relative pt-10 md:pt-0 w-full min-h-screen overflow-hidden text-white flex items-start md:items-center justify-center transition-all duration-700 ease-in-out ${activeTheme.bgColor}`}>
            
            {/* BACKGROUND LAYER : SLOW */}
            <div 
                style={bgTransform}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)] transition-transform duration-75 ease-out"
            >
                {/* Dynamic Grid lines */}
                <div 
                    style={{ backgroundImage: `linear-gradient(to right, ${activeTheme.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${activeTheme.gridColor} 1px, transparent 1px)` }}
                    className="absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] transition-all duration-700" 
                />
            </div>

            {/* FAST SHAPES (Dynamic Floating Themes Elements) */}
            {/* Shape 1: Top Right */}
            <div 
                style={shapeFast1}
                className={`absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-tr rounded-lg blur-[1px] opacity-70 transition-all duration-75 ease-out hidden md:block ${activeTheme.shape1}`}
            />
            {/* Shape 2: Bottom Left */}
            <div 
                style={shapeFast2}
                className={`absolute bottom-1/4 left-1/4 w-16 h-16 border-4 rounded-full blur-[0.5px] opacity-60 transition-all duration-75 ease-out hidden md:block ${activeTheme.shape2}`}
            />

            {/* HERO CONTENT CONTAINER */}
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center relative z-10 max-w-7xl">
                
                {/* Left Side: Text Details */}
                <div className="space-y-6 text-center lg:text-left mt-12 md:mt-0">
                    {badgeText?.value && (
                        <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-500 ${activeTheme.badgeBg}`}>
                            {badgeText.value}
                        </span>
                    )}
                    
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r transition-all duration-500 ${activeTheme.textGradient}`}>
                            {heading?.value}
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
                        {description?.value}
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        {buttonText?.value && (
                            <button 
                                onClick={() => console.log(buttonRoute?.value)}
                                className={`flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-95 ${activeTheme.buttonBg}`}
                            >
                                {buttonText.value} <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                        <button className="px-6 py-3.5 font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl transition-all duration-200 active:scale-95">
                            Live Demo
                        </button>
                    </div>
                </div>

                {/* Right Side: MAIN IMAGE LAYER : MEDIUM */}
                <div className="flex justify-center items-center relative">
                    {/* Subtle glow behind image base on theme */}
                    <div className={`absolute w-72 h-72 rounded-full blur-3xl opacity-50 transition-all duration-700 ${activeTheme.glowColor}`} />
                    
                    <div 
                        style={imgTransform}
                        className="relative h-auto transition-transform duration-75 ease-out"
                    >
                        {heroImage?.value && (
                            <img 
                                src={heroImage.value} 
                                alt="Dynamic Hero Illustration" 
                                className="w-full max-w-[480px] h-[320px] md:h-[420px] object-cover rounded-3xl shadow-2xl border border-slate-900"
                            />
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ParallaxHero;