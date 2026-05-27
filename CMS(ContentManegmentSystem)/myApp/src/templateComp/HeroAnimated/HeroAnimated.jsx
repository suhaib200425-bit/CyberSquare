import React, { useState } from 'react'
import { grass, mountain, stoneriver, sky, earth } from '../../assets/assets'
import "./HeroAnimated.css"
import { useEffect } from 'react';
function HeroAnimated() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className='HeroAnimated'>

            <img className='' src={sky} alt="" />
            <img style={{
                // fontSize: `${60 + scrollY * 0.1}px`,
                transform: `translateX(${scrollY * 0.5}px)`,
                // opacity: 1 - scrollY / 500,
            }} src={mountain} alt="" />


            <img style={{
                // fontSize: `${60 + scrollY * 0.1}px`,
                transform: `translateX(-${scrollY * 0.5}px)`,
                // opacity: 1 - scrollY / 500,
            }} src={stoneriver} alt="" />

            <h1 style={{
                // fontSize: `${60 + scrollY * 0.1}px`,
                transform: `translateY(${scrollY * 0.7}px)`,
                // opacity: 1 - scrollY / 500,
            }} id='content' className='w-full h-full  flex items-center justify-center  text-[60px] text-w[700] text-white'>NATUR BUTTY</h1>

            <img src={earth} alt="" />

            <img src={grass} alt="" />

            {/* 
                <img src={} alt="" />
             */}
        </div>
    )
}

export default HeroAnimated