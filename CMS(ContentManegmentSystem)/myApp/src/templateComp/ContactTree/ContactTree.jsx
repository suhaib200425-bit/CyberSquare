// ContactSection.jsx

import React from "react";
function ContactTree({
    title = { value: "Title" },
    subTitle = { value: "Description" },
    address = { value: "place" },
    mobile = { value: "" },
    email = { value: "" },
    LocationUrl ={value:""}
}) {
    return (
        <div className="w-full bg-[#f5f5f5] py-[80px]">

            <div className="w-[85%] mx-auto flex justify-between gap-[60px] flex-wrap @md:flex-nowrap">

                {/* LEFT SIDE */}
                <div className="flex-1 min-w-[300px]">

                    <h1 className="text-[48px] @md:text-[48px] text-[#0d1321] mb-5 font-semibold">
                        {title.value}
                    </h1>

                    <p className="text-[#777] leading-[1.8] mb-[35px]">
                        {subTitle.value}
                    </p>

                    <div className="flex flex-col gap-[25px]">

                        <div className="flex items-center gap-[18px]">
                            <div className="w-[50px] h-[50px] bg-[#ff8c1a] rounded-full flex items-center justify-center text-white text-[22px]">
                                <i className="fa-solid fa-location-arrow"></i>
                            </div>

                            <div>
                                <h3 className="text-[18px] text-[#0d1321] font-semibold">
                                    Address
                                </h3>

                                <span className="text-[#777] text-[15px]">
                                    {address.value}
                                </span>
                            </div>
                        </div>

                        {
                            mobile.value &&
                            <div className="flex items-center gap-[18px]">
                                <div className="w-[50px] h-[50px] bg-[#ff8c1a] rounded-full flex items-center justify-center text-white text-[22px]">
                                    <i className="fa-solid fa-phone"></i>
                                </div>

                                <div>
                                    <h3 className="text-[18px] text-[#0d1321] font-semibold">
                                        Phone Number
                                    </h3>

                                    <span className="text-[#777] text-[15px]">
                                        {mobile.value}
                                    </span>
                                </div>
                            </div>
                        }
                        {
                            email.value &&
                            <div className="flex items-center gap-[18px]">
                                <div className="w-[50px] h-[50px] bg-[#ff8c1a] rounded-full flex items-center justify-center text-white text-[22px]">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>

                                <div>
                                    <h3 className="text-[18px] text-[#0d1321] font-semibold">
                                        E-Mail
                                    </h3>

                                    <span className="text-[#777] text-[15px]">
                                        {email.value}
                                    </span>
                                </div>
                            </div>
                        }


                    </div>

                    <hr className="my-[35px] border-0 border-t border-[#ddd]" />

                    <div>

                        <h3 className="mb-5 text-[#0d1321] font-semibold">
                            Follow Us:
                        </h3>

                        <div className="flex gap-[15px]">

                            <div className="w-[42px] h-[42px] bg-[#ff8c1a] text-white rounded-full flex items-center justify-center cursor-pointer font-bold">
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>

                            <div className="w-[42px] h-[42px] bg-[#ff8c1a] text-white rounded-full flex items-center justify-center cursor-pointer font-bold">
                                <i className="fa-brands fa-twitter"></i>
                            </div>

                            <div className="w-[42px] h-[42px] bg-[#ff8c1a] text-white rounded-full flex items-center justify-center cursor-pointer font-bold">
                                <i className="fa-brands fa-x-twitter"></i>
                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1 min-w-[320px] bg-white p-[45px] rounded-[20px] max-md:p-4 max-md:max-w-full">

                    <h1 className="text-[#0d1321] mb-[35px] text-[48px] max-md:text-[25px] font-semibold">
                        Send a Message
                    </h1>

                    <form className="flex flex-col">

                        <input
                            type="text"
                            placeholder="Name"
                            className="border-none border-b border-[#ddd] py-[15px] px-[5px] mb-[25px] outline-none text-[16px] bg-transparent"
                        />

                        <input
                            type="email"
                            placeholder="E-mail address"
                            className="border-none border-b border-[#ddd] py-[15px] px-[5px] mb-[25px] outline-none text-[16px] bg-transparent"
                        />

                        <textarea
                            placeholder="Message"
                            className="border-none border-b border-[#ddd] py-[15px] px-[5px] mb-[25px] outline-none text-[16px] bg-transparent resize-none h-[100px]"
                        ></textarea>

                        <p className="text-[13px] text-[#999] leading-[1.6] mb-[30px]">
                            By submitting you agree to the processing of your
                            personal data by Subx as described in the Privacy Statement.
                        </p>

                        <button
                            type="submit"
                            className="w-[170px] h-[50px] bg-[#ff8c1a] text-white border-none rounded-[30px] cursor-pointer text-[16px] font-semibold transition-all duration-300 hover:bg-[#e67600] max-@md:w-max max-@md:h-max max-@md:px-[30px] max-@md:py-[10px]"
                        >
                            Submit
                        </button>

                    </form>

                </div>

            </div>

            {/* MAP */}
            {
                LocationUrl.value && <div className="w-[85%] mx-auto mt-[70px]">

                <iframe
                    title="Google Map"
                    src={LocationUrl.value}
                    loading="lazy"
                    allowFullScreen
                    className="w-full h-[350px] border-0 rounded-[10px]"
                ></iframe>

            </div>
            }
        </div>
    );
}

export default ContactTree;