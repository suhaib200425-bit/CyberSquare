// AuthOne.jsx

import { useState } from "react";
// import "./AuthOne.css";
import { FaUser, FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";

function AuthOne(
    {
        backgroundColor = { value: "transparent" },
        color = { value: "black" },
        btnColor = { value: "black" },
        btnTextColor = { value: "white" },
        inputBackgroundColor = { value: "#1010" },
        inputTextColor = { value: "black" },
        image = { value: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop" } }
) {

    const [state, setState] = useState(true);

    return (

        <div className="w-full h-[100vh] flex items-center justify-center "

            style={{ backgroundColor: backgroundColor.value }}
        >

            <div
                className="
            w-full 
            h-[100vh]
            flex 
            flex-col 
            lg:flex-row 
            //bg-[#050505] 
            p-5 
            md:p-10 
            gap-10">

                {/* LEFT SIDE */}
                <div className="w-full h-[100vh] lg:w-1/2 flex items-center justify-center">

                    <div className="w-full h-[full] overflow-hidden rounded-[30px] bg-black">

                        <img
                            src={image.value}
                            alt="game"
                            className="w-full h-full object-cover brightness-75"
                        />

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="w-full h-full lg:w-1/2 flex flex-col justify-center text-white">

                    <h1 className="text-[28px] md:text-[35px] font-bold mb-10"
                        style={{ color: color.value }}
                    >
                        {
                            state
                                ? "Login your account"
                                : "Create an account"
                        }
                    </h1>

                    <form className="w-full">

                        {/* USERNAME */}
                        {
                            !state &&

                            <div style={{ backgroundColor: inputBackgroundColor.value }} className="w-full h-[50px] bg-[#111] border border-[#1d1d1d] rounded-[18px] mb-5 flex items-center px-5">

                                <FaUser className="text-[#666] text-[18px] mr-4" />

                                <input
                                    style={{ color: inputTextColor.value }}
                                    type="text"
                                    placeholder="User Name"
                                    className="h-full w-full bg-transparent outline-none text-white placeholder:text-[#666]"
                                />

                            </div>
                        }

                        {/* EMAIL */}
                        <div style={{ backgroundColor: inputBackgroundColor.value }} className="w-full h-[50px] bg-[#111] border border-[#1d1d1d] rounded-[18px] mb-5 flex items-center px-5">

                            <FaEnvelope className="text-[#666] text-[18px] mr-4" />

                            <input
                                style={{ color: inputTextColor.value }}
                                type="email"
                                placeholder="Email address"
                                className="h-full w-full bg-transparent outline-none text-white placeholder:text-[#666]"
                            />

                        </div>

                        {/* PASSWORD */}
                        <div style={{ backgroundColor: inputBackgroundColor.value }} className="w-full h-[50px] bg-[#111] border border-[#1d1d1d] rounded-[18px] mb-5 flex items-center px-5">

                            <FaLock className="text-[#666] text-[18px] mr-4" />

                            <input
                                style={{ color: inputTextColor.value }}
                                type="password"
                                placeholder="Password"
                                className="h-full w-full bg-transparent outline-none text-white placeholder:text-[#666]"
                            />

                        </div>

                        {/* CONFIRM PASSWORD */}
                        {
                            !state &&

                            <div style={{ backgroundColor: inputBackgroundColor.value }} className="w-full h-[50px] bg-[#111] border border-[#1d1d1d] rounded-[18px] mb-5 flex items-center px-5">

                                <FaLock className="text-[#666] text-[18px] mr-4" />

                                <input
                                    style={{ color: inputTextColor.value }}
                                    type="password"
                                    placeholder="Confirm password"
                                    className="h-full w-full bg-transparent outline-none text-white placeholder:text-[#666]"
                                />

                            </div>
                        }

                        {/* SUBMIT BUTTON */}
                        <button
                            style={{ backgroundColor: btnColor.value, color: btnTextColor.value }}
                            className="
                                w-full h-[50px]
                                rounded-[18px]
                                bg-gradient-to-r
                                from-[#ff416c]
                                to-[#ff4b2b]
                                text-white
                                text-[16px]
                                font-semibold
                                cursor-pointer
                                mt-2
                                mb-5
                            "
                        >
                            Submit
                        </button>

                        {/* GOOGLE BUTTON */}
                        <button
                            type="button"
                            className="
                                w-full h-[50px]
                                rounded-[18px]
                                bg-black
                                border-2 border-[#222]
                                text-white
                                text-[15px]
                                flex items-center justify-center
                                gap-3
                                cursor-pointer
                            "
                        >
                            <FaGoogle />
                            Continue with Google
                        </button>

                    </form>

                    {/* TOGGLE */}
                    <p className="mt-8 text-center text-[#777] text-[14px]">

                        {
                            !state
                                ? "Already have an account?"
                                : "Create an account ?"
                        }

                        <span
                            onClick={() => {
                                setState(prev => !prev);
                            }}
                            className="
                                text-[#ff416c]
                                cursor-pointer
                                ml-2
                            "
                        >
                            {
                                !state
                                    ? "Login"
                                    : "Register"
                            }
                        </span>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default AuthOne;
