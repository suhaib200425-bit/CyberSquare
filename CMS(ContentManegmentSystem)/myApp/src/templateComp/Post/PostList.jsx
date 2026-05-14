import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASEURL } from '../../assets/assets';
import { useNavigate, useParams } from 'react-router-dom';
function PostList({
    title = { value: 'Explore' },
    subTitle = { value: "Let's go on an Article" },
    api = { value: `${BASEURL}/api/post` },
    getLimit = { value: 0 },
    pagination = { value: false },
    padding = { value: "" },
    mobilePadding = { value: "" },
    viewBtn = { value: "" }
}) {

    // STATES
    const [posts, setPosts] = useState({});
    const {id}=useParams()
    const Navigate = useNavigate()

    // GET POSTS
    async function getApiPosts() {

        try {

            const response = await axios.get(
                `${api.value}/${id?id:""}?limit=${getLimit.value
                    ? `${getLimit.value}`
                    : 1
                }`
            );

            setPosts(response.data);

        } catch (err) {

            console.log(
                err.response?.data ||
                err.message
            );

        }

    }

    // USE EFFECT
    useEffect(() => {

        getApiPosts();

    }, [getLimit.value,id]);

    // PAGINATION
    async function Pagnavigate(page) {

        try {

            const response = await axios.get(
                `${api.value}?limit=${getLimit.value
                    ? `${getLimit.value}`
                    : 1
                }&page=${page}`
            );

            setPosts(response.data);

        } catch (err) {

            console.log(
                err.response?.data ||
                err.message
            );

        }

    }

    return (

        <div className='mb-5' style={{
            padding: window.innerWidth < 768 ? mobilePadding.value || "0px 10px" : padding.value || "0px 100px",
        }}>

            {
                posts?.data && (

                    <>

                        {/* HEADER */}
                        <div className='flex items-start justify-between'>

                            <div>

                                <h2 className='text-[20px] font-medium'>

                                    <span>
                                        {title?.value}
                                    </span>

                                    {" "}

                                </h2>

                                <div className='text-[16px] text-gray-600'>

                                    {subTitle?.value}

                                </div>

                            </div>
                            {
                                viewBtn.value && <button
                                    className='px-[10px] py-[5px] rounded-[10px] bg-black text-white font-light'
                                >
                                    View All
                                </button>
                            }



                        </div>

                        {/* POSTS */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-[5px] md:gap-[10px] mt-2'>

                            {
                                posts?.data?.length > 0 &&
                                posts.data.map((elem, index) => (

                                    <div key={index} onClick={()=>{
                                        Navigate(`/post/${elem._id}`)
                                    }}>

                                        {/* IMAGE */}
                                        <div className='h-[100px] md:h-[150px] rounded-[10px] overflow-hidden'>

                                            <img
                                                src={elem?.banner}
                                                alt=''
                                                className='w-full h-full object-cover'
                                            />

                                        </div>

                                        {/* TITLE */}
                                        <div className='p-[5px] text-[12px] md:text-[17px] font-normal overflow-hidden leading-normal line-clamp-2'>

                                            {elem?.title}

                                        </div>

                                    </div>

                                ))
                            }

                        </div>

                        {/* PAGINATION */}
                        {
                            pagination.value &&
                            posts?.totalPages != 1 && (

                                <div className='mt-3 flex items-center justify-between'>

                                    {/* PAGE TEXT */}
                                    <div className='text-[18px] font-light text-[rgba(29,28,28,0.781)]'>

                                        Page {
                                            posts?.currentPage
                                        } of {
                                            posts?.totalPages
                                        }

                                    </div>

                                    {/* BUTTONS */}
                                    <div className='flex gap-1'>

                                        {/* PREV */}
                                        <button
                                            className='rounded-[5px] bg-black text-white px-[10px] py-[5px]'
                                            onClick={() => {
                                                Pagnavigate(
                                                    posts?.currentPage - 1
                                                )
                                            }}
                                            disabled={
                                                posts?.currentPage === 1
                                            }
                                        >
                                            Prev
                                        </button>

                                        {/* CURRENT PAGE */}
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
                                                            Pagnavigate(
                                                                posts?.currentPage
                                                            )
                                                        }}
                                                        className='w-[30px] border border-black p-[5px] rounded-[5px] bg-[rgba(170,165,165,0.685)]'
                                                    >

                                                        {
                                                            posts?.currentPage
                                                        }

                                                    </button>

                                                )
                                            )
                                        }

                                        {/* DOTS */}
                                        {
                                            posts?.totalPages != posts?.currentPage + 1 &&
                                            posts?.totalPages != posts?.currentPage &&
                                            posts?.totalPages > 3 && (

                                                <span className='px-1'>
                                                    ...
                                                </span>

                                            )
                                        }

                                        {/* LAST PAGE */}
                                        {
                                            posts?.totalPages != posts?.currentPage && (

                                                <button
                                                    onClick={() => {
                                                        Pagnavigate(
                                                            posts?.totalPages
                                                        )
                                                    }}
                                                    className='w-[30px] border border-black p-[5px] rounded-[5px]'
                                                >

                                                    {
                                                        posts?.totalPages
                                                    }

                                                </button>

                                            )
                                        }

                                        {/* NEXT */}
                                        <button
                                            onClick={() => {
                                                Pagnavigate(
                                                    posts?.currentPage + 1
                                                )
                                            }}
                                            className='rounded-[5px] bg-black text-white px-[10px] py-[5px]'
                                            disabled={
                                                posts?.currentPage === posts?.totalPages
                                            }
                                        >
                                            Next
                                        </button>

                                    </div>

                                </div>

                            )
                        }

                    </>

                )
            }

        </div>

    );

}

export default PostList