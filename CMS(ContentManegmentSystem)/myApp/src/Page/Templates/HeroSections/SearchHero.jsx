import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';

const SearchHero = ({
    bgHeight = { value: "100vh" },
    desktopPadding = { value: "50px 100px" },
    mobilePadding = { value: "40px 10px" },

    mainTitle = { value: "Stay Curious." },
    mainTitleColor = { value: "#fff" },

    title = { value: "Discover Stories That Matter." },
    titleColor = { value: "black" },

    subTitle = { value: " Search through thousands of articles, expert guides, and breaking news updates curated just for you." },
    subTitleColor = { value: "grey" },

    themeColor = {
        type: "options",
        label: "Theme Gradient",
        value: "Blue Dark",
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
            { value: "Modern Purple", label: "Modern Purple" }
        ]
    }

}) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Example trending tags
    const popularTags = [{ title: 'Tech' }, { title: 'Design' }, { title: 'AI' }, { title: 'Business' }, { title: 'Lifestyle' }];

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Add your search routing or API call logic here
    };

    const handleTagClick = (tag) => {
        setSearchQuery(tag);
        console.log('Filtering by tag:', tag);
        // Add your tag filtering logic here
    };

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
        "Modern Purple": "bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"
    };

    const themeGradient = gradients[themeColor.value || "Blue Dark"]

    const [categories, setCategories] = useState()
    const { webname } = useParams()
    const Navigate = useNavigate()

    // Mobile screen detection handling
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        axios
            .get(`${BASEURL}/api/category/${webname}/top-post-categories`)
            .then((res) => {
                console.log("Search Hero Result");
                console.log(res.data);

                setCategories(res.data?.categories);
                // setCategories(stats)

            })
            .catch((err) => {
                setCategories(popularTags)
                console.log("Search Hero Error");
                console.error(err);
            });
    }, []);

    return (
        <section style={{
            height: bgHeight.value,
            padding: isMobile ? mobilePadding.value : desktopPadding.value
        }} className={`${themeGradient} h-screen relative text-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center`}>

            {/* Background Decorative Element (Optional) */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            <div className="max-w-3xl mx-auto relative z-10 space-y-6">

                {/* Heading */}
                <h1
                    style={{
                        color: mainTitleColor.value
                    }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    {mainTitle.value} <br />
                    <span style={{
                        color: titleColor.value
                    }} className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-black">
                        {title.value}
                    </span>
                </h1>

                {/* Description */}
                <p 
                style={{
                    color:subTitleColor.value
                }} className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    {subTitle.value}
                </p>



                {/* Popular Tags Section */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-4 text-sm text-slate-400">
                    {categories?.length ? <span className="font-medium mr-1">Popular:</span> : ""}
                    {categories?.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                handleTagClick(tag)
                            }}
                            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full border border-slate-700 transition duration-150 text-xs sm:text-sm"
                        >
                            #{tag.title}
                        </button>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SearchHero;