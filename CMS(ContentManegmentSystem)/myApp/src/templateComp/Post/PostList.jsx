import React, { useEffect, useState } from 'react'
import './PostList.css'
import axios from 'axios'
function PostList({
    title = { value: "Explore" },
    subTitle = { value: "Let's go on an Article" },
    api = { value: "http://172.23.112.119:5000/api/post" },
    getLimit = { value: 8 }
}) {
    const [posts, setPosts] = useState({})
    useEffect(() => {
        const getApiPosts = async () => {
            try {

                const response = await axios.get(`${api.value}?${getLimit.value ? `limit=${getLimit.value}` :"limit=1"}`)
                setPosts(response.data)
                console.log(response.data);
                
            } catch (err) {
                console.log(err.response?.data || err.message);
            }
        }
        getApiPosts()
    },[])
    return (
        <div className='PostList'>
            <div className="ListBar">
                <div className="">

                    <h2 className="ListBar-Title"><span>{title?.value}</span> more</h2>
                    <div className="ListBar-subTitle">{subTitle?.value} </div>
                </div>
                <button className="viewMore">View All</button>
            </div>
            <div className="ListItems mt-2">
                {
                    posts?.data?.length > 0 &&
                    posts.data?.map(elem => (
                        <div className="listCard">
                            <div className="imageDiv">
                                <img src={elem?.banner} alt="" srcset="" />
                            </div>
                            <div className="contentDic overflow-hidden leading-normal line-clamp-2">
                               {elem?.title}
                            </div>
                        </div>
                    ))
                }


            </div>
            <div className="paginationDiv mt-3">
                <div className="shortDescription">
                    Page {posts?.currentPage} of {posts?.totalPages}
                </div>
                <div className="navigateBtns">

                </div>
            </div>
        </div>
    )
}

export default PostList