// FOOTER TWO

import { useEffect, useState } from "react";
import { BASEURL } from "../../assets/assets";
import axios from "axios";
import { Link } from "react-router-dom";

function FooterTwo(
    {
        backgroundColor = { value: "white" },
        logo = { value: "Digitro" },
        headerColor = { value: "black" },
        subTtle = { value: "Empowering your workflow with clarity and innovation" },
        logoColor = { value: "black" },
        contentColor = { value: "grey" },
        hoverColor = { value: "white" },
        padding = { value: "" },
        mobilePadding = { value: "" },
        contectNumber = { value: "+91 9895064141" },
        contectEmail = { value: "suhaib@gmail.com" },
        contectAddress = { value: "Aurum Creative Center 18th Floor, 1822 San Francisco,CA 94105, USA" },
        btnColor = { value: "black" },
        btnTextColor = { value: "white" },
        borderRadius ={value:""}
    }
) {

    const [menus, setMenus] = useState([])
    const [hover, setHover] = useState([])
    useEffect(() => {

        const getMenus = async () => {

            try {

                const response = await axios.get(
                    `${BASEURL}/api/menu`
                );

                setMenus(response.data.data);

            } catch (error) {

                console.log(
                    error.response?.data || error.message
                );

            }
        };

        getMenus();

    }, []);

    const isMobile = window.innerWidth < 768;
    return (
        <footer style={{
            padding: isMobile ? mobilePadding.value || "30px 10px" : padding.value || "30px 100px",
            backgroundColor: backgroundColor.value,
            borderRadius:borderRadius.value
        }} className="w-full bg-white shadow-md //rounded-[20px] px-6 md:px-16 py-12">

            {/* TOP */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* LOGO */}
                <div>
                    <div className="text-[30px] font-bold mb-3" style={{
                        color: logoColor.value
                    }}>
                        {logo.value}
                    </div>

                    <p className="text-gray-600 text-[15px] leading-[24px]" style={{
                        color: contentColor.value
                    }}>
                        {subTtle.value}
                    </p>
                </div>

                {/* NAVIGATION */}
                {
                    menus && menus.length &&
                    <div>
                        <h3 className="font-semibold mb-4 text-[17px]" style={{
                            color: headerColor.value
                        }}>
                            Navigation
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-600 text-[15px]">
                            {
                                menus?.map((item, i) => (

                                    <Link
                                        key={i}
                                        to={item?.page?.slug}
                                        onMouseEnter={() => {
                                            setHover(item?.title)
                                        }}
                                        onMouseLeave={() => {
                                            setHover('')
                                        }}
                                        style={{
                                            color:
                                                hover === item?.title
                                                    ? hoverColor.value
                                                    : contentColor.value
                                        }}
                                    >
                                        {item?.title}
                                    </Link>

                                ))

                            }
                        </div>
                    </div>
                }

                {/* CONTACT */}

                {
                    contectNumber.value &&
                    contectEmail.value &&
                    <div>
                        <h3 className="font-semibold mb-4 text-[17px]" style={{
                            color: headerColor.value
                        }}>
                            Contact
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-600 text-[15px]" style={{
                            color: contentColor.value
                        }}>
                            <p>{contectNumber.value}</p>
                            <p>{contectEmail.value}</p>
                        </div>
                    </div>
                }

                {/* ADDRESS */}
                {
                    contectAddress.value &&
                    <div>
                        <h3 className="font-semibold mb-4 text-[17px]" style={{
                            color: headerColor.value
                        }}>
                            Address
                        </h3>

                        <p className="text-gray-600 text-[15px] leading-[24px]" style={{
                            color: contentColor.value
                        }}>
                            {contectAddress.value}
                        </p>
                    </div>
                }


            </div>

            {/* LINE */}
            <div className="w-full h-[1px] bg-gray-200 my-8"></div>

            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                {/* INPUT */}
                <div className="flex items-center bg-white border border-gray-200 rounded-full overflow-hidden shadow-sm w-full md:w-[350px]">

                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 outline-none text-[14px]"
                    />

                    <button className="bg-orange-500 text-white text-[900] px-6 py-3 text-[14px]" style={{
                        backgroundColor:btnColor.value,
                        color:btnTextColor.value
                    }}>
                        Subscribe
                    </button>

                </div>

                {/* COPYRIGHT */}
                <p className="text-gray-500 text-[14px] text-center" style={{
                    color:contentColor.value
                }}>
                    © 2025 Your platform. All rights reserved.
                </p>

            </div>

        </footer>
    )
}

export default FooterTwo