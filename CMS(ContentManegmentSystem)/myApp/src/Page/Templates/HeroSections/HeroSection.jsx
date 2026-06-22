import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function HeroSection ({
    // 1. Container Props
    heroContentPadding = { value: '24px 26px 25px' },
    backgroundImage = { value: "https://i.pinimg.com/1200x/4b/4c/e5/4b4ce5edb9423b494c87275fab56dfbf.jpg" },

    // 2. Badge Props (Puthuthaayi add cheythath)
    badgeText = { value: 'NEW UPDATE' }, // Text display cheyyan
    badgeTextColor = { value: '#ffffff' },
    badgeFontSize = { value: '60px' },
    badgeFontWeight = { value: '800' },
    badgePadding = { value: '8px 14px' },
    badgeRadius = { value: '4px' },

    // 3. Title Props
    title = { value: 'Your Main Heading' },
    heroTitleFontSize = { value: '40px' },
    mobileHeroTitleFontSize = { value: '20px' },
    heroTitleColor = { value: '#ffffff' },

    // 4. Body/Subtext Props
    subtext = { value: 'This is a default subtext. Pass your own text via props.' },
    heroBodyFontSize = { value: '14px' },
    mobileHeroBodyFontSize = { value: '13px' },
    heroBodyColor = { value: '#ffffff' },

    // 5. Button Prop
    buttonColor = { value: '#b9b0b0' },
    buttonBgColor = { value: '#2b1006' },
    buttonText = { value: 'CLICK ME' }
})  {

    // inline styles-il mobile/desktop responsive size handle cheyyan vendi custom CSS variables create cheyyunnu
    const customStyles = {
        padding: heroContentPadding?.value,
        '--title-size-desktop': heroTitleFontSize?.value,
        '--title-size-mobile': mobileHeroTitleFontSize?.value,
        '--body-size-desktop': heroBodyFontSize?.value,
        '--body-size-mobile': mobileHeroBodyFontSize?.value,
    };
    const containerRef= useRef()
const [isMobile,setIsMobile]=useState(false)
 useEffect(() => {
    const updateViewport = () => {
      if (!containerRef.current) return;

      const observer = new ResizeObserver((entries) => {
        const width = entries[0].contentRect.width;

        setIsMobile(width < 768);
      });
    }
    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])
    return (
        <div ref={containerRef} className="z-10 relative h-screen w-full overflow-hidden flex items-center justify-center">

            {/* Background & Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `url(${backgroundImage.value})`
                }}
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

            {/* Main Content Container */}
            <div
                className=" top-0 h-screen  overflow-hidden  text-center text-white max-w-3xl px-4 flex flex-col items-center justify-center transition-all duration-300"
                style={customStyles} // Dynamic Padding & Text size variables ivide apply cheyyunnu
            >

                {/* Dynamic Badge Component */}
                {badgeText?.value && (
                    <span
                        className="relative inline-block mb-4 tracking-wider uppercase"
                        style={{
                            color: badgeTextColor?.value,
                            fontSize: badgeFontSize?.value,
                            fontWeight: badgeFontWeight?.value,
                            padding: badgePadding?.value,
                            borderRadius: badgeRadius?.value,
                        }}
                    >
                        {badgeText.value}
                    </span>
                )}

                {/* Dynamic Responsive Title */}
                <h1
                className='relative'
                    style={{
                        color: heroTitleColor?.value,
                        fontSize: 'var(--title-size-desktop)', // Desktop default size
                    }}
                    // Mobile responsive sizing inline override (Tailwind-te 'style' wrapper custom style aayi thazhe kodukkunnu)
                    ref={(el) => {
                        if (el && isMobile) {
                            el.style.fontSize = mobileHeroTitleFontSize?.value;
                        }
                    }}
                >
                    {title?.value }
                </h1>

                {/* Dynamic Responsive Body/Subtext */}
                <p
                    className="relative mb-8 max-w-xl drop-shadow"
                    style={{
                        color: heroBodyColor?.value,
                        fontSize: 'var(--body-size-desktop)',
                    }}
                    ref={(el) => {
                        if (el && isMobile) {
                            el.style.fontSize = mobileHeroBodyFontSize?.value;
                        }
                    }}
                >
                    {subtext?.value}
                </p>

                {/* Action Button */}
                {
                    buttonText.value &&
                    <button
                        style={{
                            backgroundColor: buttonBgColor.value,
                            color: buttonColor.value
                        }}
                        className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-[${buttonColor.value}]/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-in-out cursor-pointer`}>
                        {buttonText?.value}
                    </button>
                }

            </div>

        </div>
    );
};

export default HeroSection;