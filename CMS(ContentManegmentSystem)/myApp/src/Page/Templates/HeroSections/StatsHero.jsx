import React, { useState, useEffect } from 'react';
import { Newspaper, Users, Globe, ArrowUpRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../../../assets/assets';


const StatsHero = ({
  desktopPadding={value:"20px 100px"},
  mobilePadding = {value:"30px 10px"},
  badgeText = { value: "Live Network Metrics" },
  mainTitle = { value: "The Numbers Behind <br/> Our Credibility." },
  subTitle = { value: "We deliver realtime updates and precise records. Empowering business leaders and readers globally with impactful information." },
  buttonText = { value: "Read Annual Report" },
  themeColors = {
    type: "options",
    label: "Theme Color Names",
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
  // CMS Fields: Stats Array Data

  const stats = [
    
    {
      id: 2,
      value: 500,
      label: "Expert Authors",
      icon: Users,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/5"
    },
    {
      id: 1,
      value: 10000,
      label: "Verified Articles",
      icon: Newspaper,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/5"
    },
    {
      id: 3,
      value: 1000000,
      label: "Monthly Visitors",
      icon: Globe,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-500/5"
    }
  ];

  const themes = {
    indigo: {
      name: 'Indigo Night',
      badgeBg: 'bg-indigo-950/40 border-indigo-900/50 text-indigo-400',
      gradientText: 'from-white via-indigo-200 to-indigo-500',
      btnBorder: 'hover:border-indigo-500 text-indigo-400',
      cardHoverText: 'group-hover:text-indigo-400',
      bgGlowLeft: 'bg-indigo-500/10',
      bgGlowRight: 'bg-purple-500/10'
    },
    emerald: {
      name: 'Emerald Aurora',
      badgeBg: 'bg-emerald-950/40 border-emerald-900/50 text-emerald-400',
      gradientText: 'from-white via-emerald-200 to-emerald-500',
      btnBorder: 'hover:border-emerald-500 text-emerald-400',
      cardHoverText: 'group-hover:text-emerald-400',
      bgGlowLeft: 'bg-emerald-500/10',
      bgGlowRight: 'bg-teal-500/10'
    },
    amber: {
      name: 'Amber Solar',
      badgeBg: 'bg-amber-950/40 border-amber-900/50 text-amber-400',
      gradientText: 'from-white via-amber-200 to-amber-500',
      btnBorder: 'hover:border-amber-500 text-amber-400',
      cardHoverText: 'group-hover:text-amber-400',
      bgGlowLeft: 'bg-amber-500/10',
      bgGlowRight: 'bg-orange-500/10'
    },
    rose: {
      name: 'Rose Cyber',
      badgeBg: 'bg-rose-950/40 border-rose-900/50 text-rose-400',
      gradientText: 'from-white via-rose-200 to-rose-500',
      btnBorder: 'hover:border-rose-500 text-rose-400',
      cardHoverText: 'group-hover:text-rose-400',
      bgGlowLeft: 'bg-rose-500/10',
      bgGlowRight: 'bg-purple-500/10'
    },
    cyan: {
      name: 'Cyan Matrix',
      badgeBg: 'bg-cyan-950/40 border-cyan-900/50 text-cyan-400',
      gradientText: 'from-white via-cyan-200 to-cyan-500',
      btnBorder: 'hover:border-cyan-500 text-cyan-400',
      cardHoverText: 'group-hover:text-cyan-400',
      bgGlowLeft: 'bg-cyan-500/10',
      bgGlowRight: 'bg-blue-500/10'
    },
    violet: {
      name: 'Neon Violet',
      badgeBg: 'bg-violet-950/40 border-violet-900/50 text-violet-400',
      gradientText: 'from-white via-violet-200 to-violet-500',
      btnBorder: 'hover:border-violet-500 text-violet-400',
      cardHoverText: 'group-hover:text-violet-400',
      bgGlowLeft: 'bg-violet-500/10',
      bgGlowRight: 'bg-fuchsia-500/10'
    },
    lime: {
      name: 'Lime Toxic',
      badgeBg: 'bg-lime-950/40 border-lime-900/50 text-lime-400',
      gradientText: 'from-white via-lime-200 to-lime-500',
      btnBorder: 'hover:border-lime-500 text-lime-400',
      cardHoverText: 'group-hover:text-lime-400',
      bgGlowLeft: 'bg-lime-500/10',
      bgGlowRight: 'bg-emerald-500/10'
    },
    fuchsia: {
      name: 'Fuchsia Velvet',
      badgeBg: 'bg-fuchsia-950/40 border-fuchsia-900/50 text-fuchsia-400',
      gradientText: 'from-white via-fuchsia-200 to-fuchsia-500',
      btnBorder: 'hover:border-fuchsia-500 text-fuchsia-400',
      cardHoverText: 'group-hover:text-fuchsia-400',
      bgGlowLeft: 'bg-fuchsia-500/10',
      bgGlowRight: 'bg-pink-500/10'
    },
    sky: {
      name: 'Sky Frost',
      badgeBg: 'bg-sky-950/40 border-sky-900/50 text-sky-400',
      gradientText: 'from-white via-sky-200 to-sky-400',
      btnBorder: 'hover:border-sky-500 text-sky-400',
      cardHoverText: 'group-hover:text-sky-400',
      bgGlowLeft: 'bg-sky-500/10',
      bgGlowRight: 'bg-slate-500/10'
    },
    orange: {
      name: 'Volcanic Orange',
      badgeBg: 'bg-orange-950/40 border-orange-900/50 text-orange-400',
      gradientText: 'from-white via-orange-200 to-orange-500',
      btnBorder: 'hover:border-orange-500 text-orange-400',
      cardHoverText: 'group-hover:text-orange-400',
      bgGlowLeft: 'bg-orange-500/10',
      bgGlowRight: 'bg-red-500/10'
    }
  };

  const theme = themes[themeColors.value || 'sky'];

  const formatNumber = (num) => {

    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }

    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }

    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }

    return num.toString();
  };

  const [statsData, setStatsData] = useState()
  const { webname } = useParams()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    axios
      .get(`${BASEURL}/api/hero/section/${webname}/total-users-posts-visiters`)
      .then((res) => {
        console.log("StatsHero Result");
        console.log(res.data);

        setStatsData(res.data?.data);
        // setStatsData(stats)

      })
      .catch((err) => {
        setStatsData(stats)
        console.log("StatsHero Error");
        console.error(err);
      });
  }, []);


  return (
    <section style={{
      padding:isMobile?mobilePadding.value : desktopPadding.value,
    }} className="relative w-full min-h-screen bg-slate-950 text-white flex flex-col justify-center py-16 lg:py-24 overflow-hidden">

      {/* Dynamic Background Subtle Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-fullh-full pointer-events-none z-0">
        <div className={`absolute top-12 left-10 w-72 h-72 ${theme.bgGlowLeft} rounded-full blur-3xl transition-all duration-500`} />
        <div className={`absolute bottom-12 right-10 w-72 h-72 ${theme.bgGlowRight} rounded-full blur-3xl transition-all duration-500`} />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">

        {/* TOP: MAIN TITLE AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-16 border-b border-slate-900">
          <div className="lg:col-span-7 space-y-4">
            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block border transition-all duration-500 ${theme.badgeBg}`}>
              {badgeText.value}
            </span>
            <h1 dangerouslySetInnerHTML={{
              __html: mainTitle.value
            }} className={`text-4xl md:text-6xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r transition-all duration-500 ${theme.gradientText}`}>

            </h1>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end items-start lg:items-end">
            <p className="text-slate-400 text-base md:text-lg max-w-md lg:text-right mb-6">
              {subTitle.value}
            </p>
            <button className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 font-medium transition-all duration-200 text-sm group ${theme.btnBorder}`}>
              {buttonText.value}
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>

        {/* BOTTOM: ANIMATED STATISTICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {statsData && statsData?.map((stat, index) => {
            const IconComponent = stats[index].icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className={`w-12 h-12 rounded-xl ${stats[index].bgColor} flex items-center justify-center mb-6 border border-slate-800/50 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${stats[index].iconColor}`} />
                  </div>

                  {/* Counter Component Call */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-5xl font-black tracking-tight text-white">
                      {formatNumber(stat?.value)} +
                    </span>
                  </div>

                  {/* Label Title with Dynamic Hover Color */}
                  <h3 className={`text-lg font-bold text-slate-200 mt-2 transition-colors duration-200 ${theme.cardHoverText}`}>
                    {stat.label}
                  </h3>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StatsHero;