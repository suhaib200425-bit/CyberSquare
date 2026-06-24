import React, { useState } from 'react';

function SplitScreenHero({
    bgHeight = { value: "100vh" },
    bgColor = { value: "black" },
    desktopPadding = { value: "50px 100px" },
    mobilePadding = { value: "40px 10px" },

    mainTitle = { value: "Design smarter. " },
    mainTitleColor = { value: "#fff" },

    title = { value: "Build faster." },
    titleColor = { value: "rgba(51, 163, 238, 0.87)" },

    subTitle = { value: "This split-screen layout gives you the perfect balance of persuasive copywriting on the left and a high-converting product visual on the right." },
    subTitleColor = { value: "grey" },

    firstBtnBgColor = { value: "rgba(51, 163, 238, 0.87)" },
    firstBtnColor = { value: "white" },
    firstBtnText = { value: "Select Blog " },

    heroImage = { value: "https://i.pinimg.com/1200x/92/28/89/9228893e1bf6160e74fe395ab3cfadf4.jpg" },
    heroImageWidth = { value: "100%" },
    heroImageHeight = { value: "100%" },
}) {
    // Handlers for button actions
    const handlePrimaryClick = () => console.log('Primary Action');
    const handleSecondaryClick = () => console.log('Secondary Action');

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    return (
        <section style={{
            backgroundColor: bgColor.value,
            height: bgHeight.value,
            padding: isMobile ? mobilePadding.value : desktopPadding.value
        }} className="min-h-[80vh] flex items-center bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Content */}
                <div className="flex flex-col justify-center text-left space-y-6 order-2 lg:order-1">
                    {/* Optional Tag/Badge */}
                    <span style={{
                        color: mainTitleColor.value
                    }} className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                        Now Live
                    </span>

                    {/* Heading */}
                    <h1 style={{
                        color: mainTitleColor.value
                    }} className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                        {mainTitle.value}<br />
                        <span style={{
                            color: titleColor.value
                        }} className="text-blue-600">{title.value}</span>
                    </h1>

                    {/* Description */}
                    <p style={{
                        color: subTitleColor.value
                    }} className="text-lg text-gray-600 max-w-lg">
                        {subTitle.value}
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <button
                            style={{
                                color: firstBtnColor.value,
                                backgroundColor: firstBtnBgColor.value,
                            }}
                            onClick={handlePrimaryClick}
                            className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200"
                        >
                            {firstBtnText.value}
                        </button>
                        <button
                            onClick={handleSecondaryClick}
                            className="px-8 py-3 text-gray-700 bg-white hover:bg-gray-50 font-medium rounded-lg border border-gray-300 shadow-sm transition duration-200"
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full h-full order-1 lg:order-2 flex justify-center">
                    <div className="relative w-full h-full max-w-lg lg:max-w-none aspect-square lg:aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                        <img
                            width={heroImageWidth.value}
                            height={heroImageHeight.value}
                            src={heroImage.value}
                            alt="Dashboard Analytics Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SplitScreenHero;