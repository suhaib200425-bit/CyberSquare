import React, { useState } from 'react'
import Navbar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom';
import FormPage from '../FormPage/FormPage';
import axios from 'axios';
import { POSTAPI } from '../../assets/assets';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../Context/Tanstack';
import Pagination from '../../components/Pagination/Pagination';

function Post() {
    const token = localStorage.getItem("token")
    const [form, setForm] = useState(false)
    const [page, setPage] = useState(1)
    const [update, setUpdate] = useState(null)
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData', form, page],
        queryFn: async () => {
            try {
                const response = await axios.get(`${POSTAPI}?limit=6&page=${page}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
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
            queryClient.invalidateQueries({ queryKey: ['repoData'] });
        },

        onError: (error) => {
            console.log("Delete error:", error.response?.data?.message || error.message);
        }
    });

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='w-full'>
            <Navbar />

            {/* Content */}
            <div className="w-[100%] p-[10px_15px]">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-[20px] font-bold">Posts</h2>
                        <p>Static pages like About, Contact, Pricing.</p>
                    </div>

                    <div className="flex gap-2">
                        <input className="border border-black p-[10px] rounded-[5px] " type="text" placeholder='Search Post' />
                        <button onClick={() => {
                            setForm(true)
                        }} className="p-[10px] rounded-[5px] text-white bg-[var(--back-color)] flex items-center">
                            <i className="fa-solid fa-plus"></i>
                            <span className="ml-2">New Page</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="mt-10 bg-white rounded-[5px] shadow overflow-hidden">
                    <table className="w-full text-left">

                        <thead className="bg-gray-50 border-b">
                            <tr className="text-gray-600 text-sm">
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">View</th>
                                <th className="px-6 py-3">Published</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {data?.data?.map((post, index) => (
                                <tr key={post._id} className="hover:bg-gray-50 transition">

                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {post.title}
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {post.category?.title}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                                            {post.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-gray-600">
                                        {post.views}
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {post.updatedAt.split("T")[0]}
                                    </td>

                                    <td className="px-6 py-4 flex justify-end gap-3 text-gray-500">
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
                    (data?.totalPages != 1) &&
                    <Pagination currentPage={data?.currentPage} totalPages={data?.totalPages} onPageChange={(page) => {
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