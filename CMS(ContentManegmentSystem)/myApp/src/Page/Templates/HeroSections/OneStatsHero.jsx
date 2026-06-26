import React, { useEffect, useState } from 'react';
import { BASEURL } from '../../../assets/assets';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OneStatsHero = ({
    heading = { 
        label:"Main Title",
        type:"textArea",
        value: "Empowering Creators Worldwide" 
    },
    description = { 
        type:"textArea",
        label:"Description",
        value: "Join a growing ecosystem of writers, thinkers, and readers sharing their insights every single day." },
    buttonText = { 
        value: "Explore Pltform", 
        label:"Button text",
        type:"text"
    },
    burronRoute = { value: "burronRoute" },
    burronColor = { 
        label:"Button Color",
        type:"color",
        value: "red"
     },
    // Color configuration props
    themeColor = {
        label: "Theme Color",
        type: "options",
        value: "blue",
        options: [
            {
                table: "Blue",
                value: "blue"
            },
            {
                table: "Indigo",
                value: "indigo"
            },
            {
                table: "Emerald",
                value: "emerald"
            },
            {
                table: "Violet",
                value: "violet"
            },
        ]
    }, // Options: 'blue ', 'indigo', 'emerald', 'violet'
}) => {

    // Tailwind color mapper based on the themeColor prop
    const themeStyles = {
        blue: {
            textGradient: "from-blue-600 to-indigo-600",
            buttonBg: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
            statValue: "text-blue-600",
        },
        indigo: {
            textGradient: "from-indigo-600 to-purple-600",
            buttonBg: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
            statValue: "text-indigo-600",
        },
        emerald: {
            textGradient: "from-emerald-600 to-teal-600",
            buttonBg: "bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500",
            statValue: "text-emerald-600",
        },
        violet: {
            textGradient: "from-violet-600 to-fuchsia-600",
            buttonBg: "bg-violet-600 hover:bg-violet-700 focus:ring-violet-500",
            statValue: "text-violet-600",
        }
    };

    const stats = [
        { value: 10500, label: "Active Users" },
        { value: 500, label: "Published Posts" },
        { value: 100, label: "Expert Authors" }
    ]

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
    useEffect(() => {
        axios
            .get(`${BASEURL}/api/hero/section/${webname}/total-users-posts-visiters`)
            .then((res) => {
                console.log("OneStatsHero Result");
                console.log(res.data);

                setStatsData(res.data?.data);
                // setStatsData(stats)

            })
            .catch((err) => {
                setStatsData(stats)
                console.log("OneStatsHero Error");
                console.error(err);
            });
    }, []);

    const activeTheme = themeStyles[themeColor] || themeStyles.blue;

    return (
        <section
            className="bg-grey-400 py-16 px-6 sm:py-24 sm:px-12 lg:px-24 text-center">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Dynamic Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">

                    <span className={` bg-gradient-to-r ${activeTheme.textGradient} bg-clip-text `}>
                        {heading.value}
                    </span>
                </h1>

                {/* Dynamic Description */}
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    {description.value}
                </p>

                {/* Dynamic Button */}
                {
                    buttonText.value &&
                    <button
                        onClick={() => {
                            console.log(burronRoute.value);
                        }}
                        className={`px-8 py-3 text-white font-medium rounded-xl shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${activeTheme.buttonBg}`}
                    >
                        {buttonText.value}
                    </button>
                }
                <div>

                </div>

                {/* Divider */}
                <hr className="border-gray-200 my-12 max-w-md mx-auto" />

                {/* Dynamic Statistics Section */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-3xl mx-auto pt-4">
                    {statsData?.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-100/80 transition transform hover:-translate-y-1 duration-200"
                        >
                            {/* Dynamic Stat Value (Size & Color) */}
                            <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${activeTheme.statValue}`}>
                                {formatNumber(stat.value)}+
                            </span>
                            {/* Stat Label */}
                            <span className="text-sm font-medium text-gray-500 mt-2 uppercase tracking-wide">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OneStatsHero;