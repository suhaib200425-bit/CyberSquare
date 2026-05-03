import React, { useEffect, useState } from 'react'
import axios from 'axios'
function PostList({
    title = { value: "Explore" },
    subTitle = { value: "Let's go on an Article" },
    api = { value: "http://172.23.112.119:5000/api/post" },
    getLimit = { value: 0 }
}) {

    const [posts, setPosts] = useState({});

    useEffect(() => {

        const getApiPosts = async () => {
            try {

                const response = await axios.get(
                    `${api.value}?limit=${getLimit.value
                        ? `${getLimit.value}`
                        : 1
                    }`
                );

                setPosts(response.data);

            } catch (err) {
                console.log(err.response?.data || err.message);
            }
        };

        getApiPosts();

    }, [getLimit.value]);

    return (

        <div className="mb-5">

            {/* Top Bar */}
            <div className="flex items-start justify-between">

                <div>

                    <h2 className="text-[20px] font-medium">
                        <span>{title?.value}</span> more
                    </h2>

                    <div className="text-[16px] text-gray-600">
                        {subTitle?.value}
                    </div>

                </div>

                <button className="px-[10px] py-[5px] rounded-[10px] bg-black text-white font-light">
                    View All
                </button>

            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[5px] md:gap-[10px] mt-2">

                {
                    posts?.data?.length > 0 &&
                    posts.data.map((elem, index) => (

                        <div key={index}>

                            <div className="h-[100px] md:h-[150px] rounded-[10px] overflow-hidden">

                                <img
                                    src={elem?.banner}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            <div className="p-[5px] text-[12px] md:text-[17px] font-normal overflow-hidden leading-normal line-clamp-2">

                                {elem?.title}

                            </div>

                        </div>

                    ))
                }

            </div>

            {/* Pagination */}
            <div className="mt-3">

                <div>
                    Page {posts?.currentPage} of {posts?.totalPages}
                </div>

            </div>

        </div>

    );
}

export default PostList