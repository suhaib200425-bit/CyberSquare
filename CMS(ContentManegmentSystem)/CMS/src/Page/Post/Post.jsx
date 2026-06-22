import React, { useState } from 'react'
import Navbar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom';
import FormPage from '../FormPage/FormPage';
import axios from 'axios';
import { POSTAPI } from '../../assets/assets';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../Context/Tanstack';
import Pagination from '../../components/Pagination/Pagination';
import '../Post/Post.css'
import DropdownMenu from '../../components/Dropdown/Dropdown';

function Post() {
    const token = localStorage.getItem("token")
    const [form, setForm] = useState(false)
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState(1)
    const [postState,setPostState] = useState({title:"Published"})
    const [search,setSearch] = useState("")
    const [update, setUpdate] = useState(null)
    const { isPending, error, data } = useQuery({
        queryKey: ['PostData', form, page,postState],
        queryFn: async () => {
            try {
                const response = await axios.get(`${POSTAPI}/posts-by-status?limit=6&page=${page}&state=${postState.title}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                console.log("POST PAGE");
                console.log(response.data);
                
                setPosts(response.data)
                return response.data
            } catch (error) {
                alert(error.response?.data?.message || error.message)
            }
        }

    })

    const deleteMutation = useMutation({
        mutationFn: async (PostId) => {
            await axios.delete(`${POSTAPI}/${PostId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        },

        onSuccess: (_, PostId) => {
            // 🔥 Option 1: Refetch (simple)
            queryClient.invalidateQueries({ queryKey: ['PostData'] });
        },

        onError: (error) => {
            console.log("Delete error:", error.response?.data?.message || error.message);
        }
    });

     const searchMutation = useMutation({
        mutationFn: async (value) => {
            
            const response = await axios.get(`${POSTAPI}/search-posts-by-query?limit=6&page=${page}&state=${postState.title}&search=${value}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPosts(response.data)

        },

        onSuccess: (result) => {
            // 🔥 Option 1: Refetch (simple)
            // queryClient.invalidateQueries({ queryKey: ['PostData'] });
        },

        onError: (error) => {
            console.log("Search error:", error.response?.data?.message || error.message);
        }
    });

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='w-full bg-[var(--BG-COLOR)] text-[var(--TEXT-COLOR)]'>
            <Navbar />

            {/* Content */}
            <div className="w-[100%] p-[10px_15px] ">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-[25px] font-bold">Posts</h2>
                        <p>Static pages like About, Contact, Pricing.</p>
                    </div>

                    <div className="flex gap-2">
                        <input
                        onChange={(e)=>{
                            searchMutation.mutate(e.target.value)
                        }} 
                        className="border h-[50px] border-[var(--BG-S-COLOR)] p-[10px] rounded-[5px] " type="text" placeholder='Search Post' />
                        <DropdownMenu Height={"50px"} PageMenus={[{title:"Draft"},{title:"Published"}]} setactiveMenu={setPostState} activeMenu={postState} />
                        <button onClick={() => {
                            setForm(true)
                        }} className="h-[50px] p-[0px_10px] rounded-[5px] text-white bg-[var(--back-color)] flex items-center">
                            <i className="fa-solid fa-plus"></i>
                            <span className="ml-2">New Page</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="mt-10 bg-[var(--BG-COLOR)] text-[var(--TEXT-COLOR)] rounded-[5px] shadow overflow-hidden">
                    <table className="w-full text-left">

                        <thead className="bg-[var(--ROW-COLOR)] border-b h-[50px]">
                            <tr className="text-[var(--TEXT-COLOR)] text-sm">
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">View</th>
                                <th className="px-6 py-3">Published</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[var(--BG-S-COLOR)]">
                            {posts?.data?.map((post, index) => (
                                <tr key={post?._id} className="hover:bg-[var(--ROW-COLOR)] transition">

                                    <td className="px-6 py-4 font-medium text-[var(--TEXT-COLOR)]-800">
                                        {post?.title}
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {post?.category?.title || "--" }
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                                            {post?.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-gray-600">
                                        {post?.views}
                                    </td>

                                    <td className="px-6 py-4 ">
                                        {post?.updatedAt.split("T")[0]}
                                    </td>

                                    <td className="px-6 py-4 flex justify-end gap-3 text-grey-500">
                                        <button className="hover:text-orange-500" onClick={() => {
                                            setUpdate(post._id)
                                            setForm(true)
                                        }}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button className="hover:text-green-500">
                                            <i className="fa-solid fa-file-lines"></i>
                                        </button>
                                        <button className="hover:text-red-500" onClick={() => {
                                            deleteMutation.mutate(post._id)
                                        }}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                {/* Pagination */}


                {
                    (posts?.totalPages != 1) &&
                    <Pagination currentPage={posts?.currentPage} totalPages={posts?.totalPages} onPageChange={(page) => {
                        // setpage(page)
                        console.log(page);
                        setPage(page)
                    }} />
                }
            </div>
            {form && <FormPage formname={'post'} setForm={setForm} update={update} />}
        </div>
    )
}

export default Post