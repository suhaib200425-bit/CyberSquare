// FOOTER ONE

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../assets/assets";
import axios from "axios";

function FooterOne(
    {
        title = { value: "Digitro" },
        titleColor = { value: "black" },
        menuColor = { value: "grey" },
        hoverColor = { value: "black" },
        btnTextColor ={value:"white"}
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

    return (
        <footer className="w-full bg-white shadow-md rounded-[20px] px-6 md:px-16 py-10">

            {/* TOP */}
            <div className="flex flex-col items-center justify-center gap-6">

                {/* LOGO */}
                <div className="text-[30px] font-bold "
                    style={{
                        color: titleColor.value
                    }}>
                    {title.value}
                </div>

                {/* NAV */}
                <div className="flex flex-wrap items-center justify-center gap-5 text-[15px] text-gray-700">
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
                                            : menuColor.value
                                }}
                            >
                                {item?.title}
                            </Link>

                        ))

                    }
                </div>

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

                    <button className=" px-6 py-3 text-[14px]" style={{
                        backgroundColor:titleColor.value,
                        color:btnTextColor.value
                    }}>
                        Subscribe
                    </button>

                </div>

                {/* COPYRIGHT */}
                <p className="text-gray-500 text-[14px] text-center" style={{
                    color:menuColor.value
                }}>
                    © 2025 Your platform. All rights reserved.
                </p>

            </div>

        </footer>
    )
}


export default FooterOne