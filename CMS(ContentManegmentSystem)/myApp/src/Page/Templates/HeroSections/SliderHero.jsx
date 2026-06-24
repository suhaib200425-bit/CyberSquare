import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Link } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';
import axios from 'axios';

const SliderHero = ({
  desktopPadding={value:"0px 100px"},
  mobilePadding={value:"0px 10px"},
}) => {
  // 1. CMS Fields Mock Data (Slides Array)
  
  const slides = [
    {
      id: 1,
      title: "Elevate Your Digital Experience",
      description: "Crafting modern, high-performance web solutions with cutting-edge layouts and seamless user interfaces.",
      banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      buttonText: "Explore Projects",
      buttonLink: "#projects"
    },
    {
      id: 2,
      title: "Smart CMS Configurations",
      description: "Manage your content dynamically with modular structures tailored for scalability and complete control.",
      banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      buttonText: "See Dashboard",
      buttonLink: "#dashboard"
    },
    {
      id: 3,
      title: "Intuitive UI/UX Design",
      description: "Bridging the gap between robust backend data logic and beautiful, fluid interactive components.",
      banner: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      buttonText: "View Case Studies",
      buttonLink: "#design"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setposts] = useState([]);
  const [progress, setProgress] = useState(0);
  const autoSlideDuration = 5000; // 5 സെക്കൻഡ് ഓരോ സ്ലൈഡിനും
  const timerRef = useRef(null);
  const progressRef = useRef(null);

  // Next Slide Function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === posts.length - 1 ? 0 : prevIndex + 1));
    setProgress(0);
  };

  // Previous Slide Function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? posts.length - 1 : prevIndex - 1));
    setProgress(0);
  };

    const { webname } = useParams()
    const Navigate = useNavigate()
    useEffect(() => {
      axios
        .get(`${BASEURL}/api/post/${webname}/new-posts?limit=3`)
        .then((res) => {
          console.log("SliderHero Result");
          console.log(res.data);
  
          setposts(res.data?.posts);
          // setposts(stats)
  
        })
        .catch((err) => {
          setposts(Sliders)
          console.log("SliderHero Error");
          console.error(err);
        });
    }, []);

  // Auto Slide & Progress Logic
  useEffect(() => {
    // പഴയ ടൈമറുകൾ ക്ലിയർ ചെയ്യുന്നു
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    // Progress Bar Update (Every 50ms)
    const intervalTime = 50;
    const steps = autoSlideDuration / intervalTime;
    let currentStep = 0;

    progressRef.current = setInterval(() => {
      currentStep++;
      const currentProgress = (currentStep / steps) * 100;
      setProgress(currentProgress);
    }, intervalTime);

    // Auto Slide Trigger
    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoSlideDuration);

    return () => {
      clearInterval(timerRef.current);
      clearInterval(progressRef.current);
    };
  }, [currentIndex]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  return (
    <>
      {
        posts.length ?
          <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-slate-950 text-white">

            {/* SLIDER WRAPPER */}
            <div className="relative w-full h-full">
              {posts?.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                  {/* Background Image Container with Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.banner}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                  </div>

                  {/* HERO CONTENT */}
                  <div  style={{
            padding:isMobile?mobilePadding.value:desktopPadding.value
          }} className="container mx-auto px-6 relative z-20 max-w-7xl w-full">
                    <div className="max-w-2xl space-y-6">
                      {/* Title Animation */}
                      <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight leading-tight transition-all duration-700 delay-100 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        {slide.title}
                      </h1>

                      {/* Description Animation */}
                      <p className={`text-base md:text-lg text-slate-300 transition-all duration-700 delay-350 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        {slide.description}
                      </p>

                      {/* Button Animation */}
                      <div className={`pt-2 transition-all duration-700 delay-500 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <button
                        onClick={()=>{
                          slide._id&&  Navigate(`/${webname}/post/${slide._id}`)
                        }}
                          className="inline-flex items-center gap-2 px-6 py-3 font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20"
                        >
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ARROW CONTROLS (Left / Right Buttons) */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-white transition-colors duration-200 hidden sm:block"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-slate-900/50 hover:bg-slate-800 border border-slate-800 text-white transition-colors duration-200 hidden sm:block"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* BOTTOM NAVIGATION & PROGRESS INDICATORS */}
            <div className="absolute bottom-8 left-0 right-0 z-30 container mx-auto px-6 max-w-7xl flex items-center justify-between">

              {/* Dynamic Slide Steps with Progress Bar */}
              <div className="flex gap-4 w-full md:w-auto md:min-w-[400px]">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => {
                      setCurrentIndex(index);
                      setProgress(0);
                    }}
                    className="flex-1 text-left group focus:outline-none"
                  >
                    {/* Step Number or Minimal Label */}
                    <span className={`text-xs font-semibold block mb-1 transition-colors ${index === currentIndex ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-400'
                      }`}>
                      0{index + 1}
                    </span>

                    {/* Progress Background Track */}
                    <div className="h-[3px] w-full bg-slate-800 rounded-full overflow-hidden relative">
                      {/* Active Filling Progress Indicator */}
                      {index === currentIndex && (
                        <div
                          style={{ width: `${progress}%` }}
                          className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-75 linear"
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Slide Counter Info (e.g., 1 / 3) */}
              <div className="text-sm font-medium tracking-wider text-slate-400 hidden md:block">
                <span className="text-white font-bold">{currentIndex + 1}</span> / {slides.length}
              </div>

            </div>

          </section> : <></>
      }
    </>
  );
};

export default SliderHero;