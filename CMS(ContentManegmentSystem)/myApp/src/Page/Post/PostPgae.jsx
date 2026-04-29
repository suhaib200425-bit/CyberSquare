import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { POSTAPI } from '../../assets/assets'
import { useQuery } from '@tanstack/react-query'
import BlogCard from '../../components/BlogCard/BlogCard'

function PostPgae() {
    const { postId } = useParams()
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData6', postId],
        queryFn: async () => {
            const res1 = await axios.get(`${POSTAPI}/postid/${postId}`)
            const res2 = await axios.get(`${POSTAPI}`) // example second API

            console.log(res1.data, 'POST');
            console.log(res2.data, 'COMMENTS');

            return {
                post: res1.data.data,
                otherpost: res2.data.data
            }
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className='PostPgae'>
            <div className="w-full ">
                <div className="w-[85%] mx-auto rounded-xl ">

                    {/* Category */}
                    <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600">
                        {data?.post?.category?.title}
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-800 mt-4">
                        {data?.post?.title}
                    </h1>

                    {/* Meta */}
                    <p className="text-sm text-gray-500 mt-2">
                        Priy Nair • {data?.post?.createdAt.split("T")[0]} • {data?.post?.views} views
                    </p>

                    {/* Top Image */}
                    <div className="w-full h-64 bg-gray-300 rounded-lg mt-6 overflow-hidden">
                        <img
                            src={'https://th.bing.com/th?id=ORMS.30cdea017eb4680b16b01f8265a4175c&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0'}
                            alt="blog"

                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="mt-6 space-y-4 text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: data?.post?.content }}>

                    </div>

                    {/* Divider */}
                    <hr className="my-8" />

                    {/* More Section */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        More in Technology
                    </h3>

                    <div className="'PostRow grid grid-cols-4 gap-2'">
                        {
                            data?.otherpost.map(elem => {
                                console.log(elem);
                                return <BlogCard
                                    postId={elem._id}
                                    image="https://boardmix-public-ff.oss-eu-central-1.aliyuncs.com/cms/presenti/home2/auto-design-1.png"
                                    category={elem.category?.title}
                                    title={elem.title}
                                    description={elem.excerpt}
                                    date="2025-04-08"
                                    views="3,120"
                                    key={elem._id}
                                />

                            }
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PostPgae
