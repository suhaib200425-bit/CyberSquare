import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { POSTAPI } from '../../assets/assets';
function PostList({
    title = { value: "Explore" },
    subTitle = { value: "Let's go on an Article" },
    api = { value: POSTAPI },
    getLimit = { value: 0},
    pagination = { value: false }
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

    const Pagnavigate = async (page) => {
        const response = await axios.get(
            `${api.value}?limit=${getLimit.value
                ? `${getLimit.value}`
                : 1
            }&page=${page}`
        );

        setPosts(response.data);
    }

    return (

        <div className="mb-5">

            {
                posts?.data &&
                <>
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
                    {
                        pagination.value &&
                        posts?.totalPages != 1 &&

                        <div className="mt-3 flex items-center justify-between">

                            <div className="text-[18px] font-light text-[rgba(29,28,28,0.781)]">
                                Page {posts?.currentPage} of {posts?.totalPages}
                            </div>

                            <div className="flex gap-1">

                                {/* Prev */}
                                <button
                                    className="rounded-[5px] bg-black text-white px-[10px] py-[5px]"
                                    onClick={() => {
                                        Pagnavigate(posts?.currentPage - 1)
                                    }}
                                    disabled={posts?.currentPage === 1}
                                >
                                    Prev
                                </button>

                                {/* Current Page */}
                                {
                                    Array.from(
                                        {
                                            length:
                                                posts?.totalPages > 1
                                                    ? 1
                                                    : posts?.totalPages || 0
                                        },
                                        (_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    Pagnavigate(posts?.currentPage)
                                                }}
                                                className="w-[30px] border border-black p-[5px] rounded-[5px] bg-[rgba(170,165,165,0.685)]"
                                            >
                                                {posts?.currentPage}
                                            </button>
                                        )
                                    )
                                }

                                {/* Dots */}
                                {
                                    posts?.totalPages != posts?.currentPage + 1 &&
                                    posts?.totalPages != posts?.currentPage &&
                                    posts?.totalPages > 3 &&
                                    (
                                        <span className="px-1">
                                            ...
                                        </span>
                                    )
                                }

                                {/* Last Page */}
                                {
                                    posts?.totalPages != posts?.currentPage && (
                                        <button
                                            onClick={() => {
                                                Pagnavigate(posts?.totalPages)
                                            }}
                                            className="w-[30px] border border-black p-[5px] rounded-[5px]"
                                        >
                                            {posts?.totalPages}
                                        </button>
                                    )
                                }

                                {/* Next */}
                                <button
                                    onClick={() => {
                                        Pagnavigate(posts?.currentPage + 1)
                                    }}
                                    className="rounded-[5px] bg-black text-white px-[10px] py-[5px]"
                                    disabled={
                                        posts?.currentPage === posts?.totalPages
                                    }
                                >
                                    Next
                                </button>

                            </div>

                        </div>
                    }
                </>
            }

        </div>

    );
}

export default PostList