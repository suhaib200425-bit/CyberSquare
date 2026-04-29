import React from 'react'
import './PostRow.css'
import BlogCard from '../BlogCard/BlogCard'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { POSTAPI } from '../../assets/assets';
function PostRow() {
    const { isPending, error, data: Post } = useQuery({
        queryKey: ['repoData4'],
        queryFn: async () => {
            const res = await axios.get(POSTAPI);
            console.log('POSTAPI');
            return res?.data; // ✅ MUST return here

        }
    })

    if (isPending) return 'Loading...'

    if (error) return <NotFound error={`An error has occurred: + ${error.message}`} />

    return (

        <>
            <div className='PostRow grid grid-cols-4 gap-2'>
                {
                    Post && Post?.data?.map(elem => {
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
            {/* Pagination */}
            {
                Post?.totalPages != 0 &&
                <div className="flex justify-between text-gray-500 mt-4">
                    <h6>Showing 10 of {Post?.totalPosts} posts</h6>

                    <div className="flex items-center gap-2">

                        {/* Prev Button */}
                        <button className="px-[10px] py-[5px] rounded-[5px] border border-black">
                            Prev
                        </button>

                        {/* Page Numbers */}
                        <div className="rounded-sm flex items-center justify-center text-white w-[35px] h-[35px] bg-blue-500">{Post?.currentPage}</div>
                        <div className="rounded-sm flex items-center justify-center text-white w-[35px] h-[35px] bg-gray-500">{Post?.currentPage+1}</div>
                        {/* <div className="rounded-sm flex items-center justify-center text-white w-[35px] h-[35px] bg-gray-500">3</div> */}

                        {/* Next Button */}
                        <button className="px-[10px] py-[5px] rounded-[5px] border border-black bg-blue-500 text-white">
                            Next
                        </button>

                    </div>
                </div>
            }
        </>
    )
}

export default PostRow