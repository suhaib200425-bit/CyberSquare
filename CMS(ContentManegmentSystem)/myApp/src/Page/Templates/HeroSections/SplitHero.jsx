import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SplitHero = ({
    title = {
        label: "Main Title",
        type: "textArea",
        value: "Design systems built for scale."
    },
    subtitle = {
        label: "Sub Title",
        type: "textArea",
        value: "We engineer modular frontend architecture that bridges the gap between clean code and striking visual design."
    },
    ctaText = {
        label: "Cta Text",
        type: "text",
        value: "Explore Our Work"
    },
    // 3 distinct high-quality images for the gallery layout
    imagesOne = {
        label: "First Image",
        type: "image",
        value: "https://i.pinimg.com/1200x/0e/43/47/0e4347a06ab119bcabca9328f5335be6.jpg"
    },
    imagesTwo = {
        type: "image",
        label: "Secound Image",
        value: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=400&q=80"
    },
    imagesThree = {
        type: "image",
        label: "Third Image",
        value: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=400&q=80"
    }
}) => {
    const containerRef = useRef(null);

    // 1. Mouse coordinates for the Parallax Engine
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();

        // Calculate normalized cursor coordinates (-0.5 to 0.5)
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        // Snap back to center smoothly when mouse exits
        mouseX.set(0);
        mouseY.set(0);
    };

    // 2. Physics springs to smooth out jerky cursor movements
    const springConfig = { damping: 50, stiffness: 150, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // 3. Map mouse ranges to different parallax offsets (Layer 1 moves faster than Layer 2)
    const layer1X = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
    const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

    const layer2X = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
    const layer2Y = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

    // Left Content Animations
    const contentContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const textSlideUpVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
        }
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full min-h-screen bg-slate-950 flex items-center overflow-hidden py-20 lg:py-0 select-none"
        >
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* LEFT COLUMN: Content (Fade + Slide Up) */}
                <motion.div
                    variants={contentContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-5 flex flex-col justify-center space-y-6 text-white z-10"
                >
                    <motion.div variants={textSlideUpVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Now Live</span>
                    </motion.div>

                    <motion.h1
                        variants={textSlideUpVariants}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-100"
                    >
                        {title.value}
                    </motion.h1>

                    <motion.p
                        variants={textSlideUpVariants}
                        className="text-lg text-slate-400 font-normal leading-relaxed max-w-lg"
                    >
                        {subtitle.value}
                    </motion.p>

                    {
                        ctaText.value &&
                        <motion.div variants={textSlideUpVariants} className="pt-4">
                            <button className="group flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                                {ctaText.value}
                                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </motion.div>
                    }

                </motion.div>

                {/* RIGHT COLUMN: Parallax Image Gallery */}
                <div className="lg:col-span-7 relative w-full h-[500px] lg:h-[650px] flex items-center justify-center">

                    {/* Decorative Glowing Backdrop */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative w-full h-full max-w-[550px] lg:max-w-none grid grid-cols-12 grid-rows-12 gap-4">

                        {/* Image 1: Main Base Layer (Slower Parallax Tracking) */}
                        <motion.div
                            style={{ x: layer1X, y: layer1Y }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="top-10 left-20  w-[320px] h-[230px] absolute overflow-hidden rounded-2xl shadow-2xl border border-white/10 group bg-slate-900"
                        >
                            <img
                                src={imagesOne.value}
                                alt="Main showcase"
                                className="w-full h-full  object-cover transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Image 2: Tertiary Bottom Center Layer (Slower Parallax) */}
                        <motion.div
                            style={{ x: layer2X, y: layer2Y }}
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="top-50 left-[-50px] md:left-[65%]  w-[220px] h-[150px] absolute overflow-hidden rounded-2xl shadow-2xl border border-white/10 group bg-slate-900 z-10"
                        >
                            <img
                                src={imagesTwo.value}
                                alt="Gallery accent bottom"
                                className="w-full h-full object-cover transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Image 3: Tertiary Bottom Center Layer (Slower Parallax) */}
                        <motion.div
                            style={{ x: layer1X, y: layer1Y }}
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="top-80 left-40  w-[320px] h-[230px] absolute overflow-hidden rounded-2xl shadow-2xl border border-white/10 group bg-slate-900 z-10"
                        >
                            <img
                                src={imagesThree.value}
                                alt="Gallery accent bottom"
                                className="w-full h-full object-cover transition-transform duration-700"
                            />
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default SplitHero;