import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const FeaturedHeroSection = ({
    mainTitle = { 
        label: "Main Title", 
        type: "textArea", 
        value: "Stay Ahead with Exclusive Insights" 
    },
    badgeText = {
        label: "Badge Text",
        type: "text",
        value: ""
    },
    featuredPost = {
        label: "Featured Post Details",
        type: "object",
        value: {
            title: "The Future of Decentralized Ecosystems & Modern Architecture",
            category: "Technology",
            date: "June 24, 2026",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
            link: "#"
        }
    },
    sidePosts = {
        label: "Side Posts List",
        type: "array",
        value: [
            {
                id: 1,
                title: "Optimizing Core Web Vitals for Next-Gen User Experience",
                category: "Development",
                date: "June 22, 2026",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop",
                link: "#"
            },
            {
                id: 2,
                title: "How AI Micro-Agents are Reshaping SaaS Workflows",
                category: "AI & Tech",
                date: "June 19, 2026",
                image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=400&auto=format&fit=crop",
                link: "#"
            },
            {
                id: 3,
                title: "Designing for the Dark Mode: Principles and Pitfalls",
                category: "Design",
                date: "June 15, 2026",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop",
                link: "#"
            }
        ]
    },
    themeColor = {
        label: "Theme Color",
        type: "options",
        value: "indigo",
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
}) => {
    // സ്ക്രീൻ എന്റർ ചെയ്യുന്നത് കണ്ടുപിടിക്കാനുള്ള ലോജിക്
    const [hasEntered, setHasEntered] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // സെക്ഷൻ സ്ക്രീനിൽ കാണുമ്പോൾ (കുറഞ്ഞത് 10% എങ്കിലും വരുമ്പോൾ)
                if (entry.isIntersecting) {
                    setHasEntered(true);
                    observer.unobserve(entry.target); // ഒരു തവണ ആനിമേറ്റ് ചെയ്താൽ പിന്നെ ഒബ്സർവ് ചെയ്യേണ്ടതില്ല
                }
            },
            { threshold: 0.5 } // 50% സ്ക്രീനിൽ കയറുമ്പോൾ ട്രിഗർ ചെയ്യും
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const themeStyles = {
        indigo: {
            bgColor: 'bg-[#030214]',
            gridColor: 'rgba(99,102,241,0.04)',
            badgeBg: 'bg-indigo-950/50 border-indigo-900 text-indigo-400',
            textGradient: "from-indigo-400 via-purple-400 to-pink-400",
            hoverAccent: "group-hover:text-indigo-400",
            iconColor: "text-indigo-400"
        },
        emerald: {
            bgColor: 'bg-[#010c06]',
            gridColor: 'rgba(16,185,129,0.04)',
            badgeBg: 'bg-emerald-950/50 border-emerald-900 text-emerald-400',
            textGradient: "from-emerald-400 via-teal-400 to-cyan-400",
            hoverAccent: "group-hover:text-emerald-400",
            iconColor: "text-emerald-400"
        },
        amber: {
            bgColor: 'bg-[#0f0801]',
            gridColor: 'rgba(245,158,11,0.04)',
            badgeBg: 'bg-amber-950/50 border-amber-900 text-amber-400',
            textGradient: "from-amber-400 via-orange-400 to-yellow-400",
            hoverAccent: "group-hover:text-amber-400",
            iconColor: "text-amber-400"
        },
        rose: {
            bgColor: 'bg-[#0f0106]',
            gridColor: 'rgba(244,63,94,0.04)',
            badgeBg: 'bg-rose-950/50 border-rose-900 text-rose-400',
            textGradient: "from-rose-400 via-pink-400 to-purple-400",
            hoverAccent: "group-hover:text-rose-400",
            iconColor: "text-rose-400"
        },
        cyan: {
            bgColor: 'bg-[#010b12]',
            gridColor: 'rgba(6,182,212,0.04)',
            badgeBg: 'bg-cyan-950/50 border-cyan-900 text-cyan-400',
            textGradient: "from-cyan-400 via-blue-400 to-indigo-400",
            hoverAccent: "group-hover:text-cyan-400",
            iconColor: "text-cyan-400"
        },
        violet: {
            bgColor: 'bg-[#070114]',
            gridColor: 'rgba(139,92,246,0.04)',
            badgeBg: 'bg-violet-950/50 border-violet-900 text-violet-400',
            textGradient: "from-violet-400 via-fuchsia-400 to-pink-500",
            hoverAccent: "group-hover:text-violet-400",
            iconColor: "text-violet-400"
        },
        lime: {
            bgColor: 'bg-[#060a01]',
            gridColor: 'rgba(132,204,22,0.04)',
            badgeBg: 'bg-lime-950/50 border-lime-900 text-lime-400',
            textGradient: "from-lime-400 via-emerald-400 to-teal-400",
            hoverAccent: "group-hover:text-lime-400",
            iconColor: "text-lime-400"
        },
        fuchsia: {
            bgColor: 'bg-[#0e0112]',
            gridColor: 'rgba(217,70,239,0.04)',
            badgeBg: 'bg-fuchsia-950/50 border-fuchsia-900 text-fuchsia-400',
            textGradient: "from-fuchsia-400 via-rose-400 to-amber-400",
            hoverAccent: "group-hover:text-fuchsia-400",
            iconColor: "text-fuchsia-400"
        },
        sky: {
            bgColor: 'bg-[#010914]',
            gridColor: 'rgba(56,189,248,0.04)',
            badgeBg: 'bg-sky-950/50 border-sky-900 text-sky-400',
            textGradient: "from-sky-400 via-slate-300 to-white",
            hoverAccent: "group-hover:text-sky-400",
            iconColor: "text-sky-400"
        },
        orange: {
            bgColor: 'bg-[#120501]',
            gridColor: 'rgba(249,115,22,0.04)',
            badgeBg: 'bg-orange-950/50 border-orange-900 text-orange-400',
            textGradient: "from-orange-400 via-red-500 to-rose-600",
            hoverAccent: "group-hover:text-orange-400",
            iconColor: "text-orange-400"
        }
    };

    const activeTheme = themeStyles[themeColor?.value] || themeStyles.indigo;

    return (
        <section 
            ref={sectionRef}
            className={`relative w-full min-h-screen text-white py-16 px-6 lg:py-24 transition-all duration-700 ease-in-out ${activeTheme.bgColor}`}
        >
            
            {/* CSS Shifting strictly on entry detection */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes revealUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                /* സ്ക്രീനിൽ കയറുമ്പോൾ മാത്രം .active-reveal ക്ലാസ് ആനിമേഷൻ വർക്ക് ചെയ്യിക്കും */
                .active-reveal { opacity: 0; animation: revealUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .delay-0 { animation-delay: 0ms; }
                .delay-1 { animation-delay: 150ms; }
                .delay-2 { animation-delay: 300ms; }
                .delay-3 { animation-delay: 450ms; }
            `}} />

            {/* Background Grid Layer */}
            <div 
                style={{ backgroundImage: `linear-gradient(to right, ${activeTheme.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${activeTheme.gridColor} 1px, transparent 1px)` }}
                className="absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
            />

            <div className="container mx-auto max-w-7xl relative z-10">
                
                {/* HEADER AREA */}
                <div className={`text-center md:text-left mb-12 space-y-4 opacity-0 ${hasEntered ? 'active-reveal delay-0' : ''}`}>
                    {badgeText?.value && (
                        <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full border transition-all duration-500 ${activeTheme.badgeBg}`}>
                            {badgeText.value}
                        </span>
                    )}
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${activeTheme.textGradient}`}>
                            {mainTitle?.value}
                        </span>
                    </h1>
                </div>

                {/* MAIN GRID LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT AREA: LARGE FEATURED ARTICLE */}
                    <div className={`lg:col-span-7 opacity-0 ${hasEntered ? 'active-reveal delay-1' : ''}`}>
                        <div
                            className="group block relative rounded-3xl overflow-hidden bg-slate-900/40 border border-slate-900 hover:border-slate-800 transition-all duration-300 shadow-2xl"
                        >
                            <div className="h-[200px] sm:h-[280px] w-full overflow-hidden relative">
                                <img 
                                    src={featuredPost.value.image} 
                                    alt={featuredPost.value.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-800">
                                    {featuredPost.value.category}
                                </span>
                            </div>

                            <div className="p-6 md:p-8 space-y-4">
                                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                                    <span>{featuredPost.value.date}</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" /> {featuredPost.value.readTime}
                                    </div>
                                </div>
                                <h2 className={`text-xl md:text-3xl font-bold tracking-tight text-white transition-colors duration-300 ${activeTheme.hoverAccent}`}>
                                    {featuredPost.value.title}
                                </h2>
                                <div className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${activeTheme.iconColor}`}>
                                    Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT AREA: VERTICAL LIST OF POSTS */}
                    <div className="lg:col-span-5 space-y-6">
                        {sidePosts?.value?.map((post, idx) => (
                            <a 
                                href={post.link} 
                                key={post.id}
                                className={`group flex gap-4 p-4 rounded-2xl bg-slate-900/30 border border-transparent hover:border-slate-900 hover:bg-slate-900/50 transition-all duration-300 items-center opacity-0 ${
                                    hasEntered 
                                    ? `active-reveal ${idx === 0 ? 'delay-1' : idx === 1 ? 'delay-2' : 'delay-3'}` 
                                    : ''
                                }`}
                            >
                                <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-xl overflow-hidden flex-shrink-0 border border-slate-900 relative">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                </div>

                                <div className="space-y-1.5 flex-1">
                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${activeTheme.iconColor}`}>
                                        {post.category}
                                    </span>
                                    <h3 className={`text-sm sm:text-base font-bold text-slate-200 tracking-tight leading-snug line-clamp-2 transition-colors duration-300 ${activeTheme.hoverAccent}`}>
                                        {post.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium">
                                        {post.date}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedHeroSection;