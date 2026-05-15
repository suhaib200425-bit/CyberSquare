import React, { useState } from 'react'
import Navbar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'
import FormPage from '../FormPage/FormPage'
import { useMutation, useQuery } from '@tanstack/react-query'
import { CATEGORYAPI } from '../../assets/assets'
import axios from "axios"
import { queryClient } from '../../Context/Tanstack'
import Pagination from '../../components/Pagination/Pagination'
function Category() {
    const [update, setUpdate] = useState(null)
    const Navigate = useNavigate()
    const [form, setForm] = useState(false)
    const [page,setPage] = useState(1)
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData', form,page],
        queryFn: async () => {
            const response = await axios.get(`${CATEGORYAPI}?limit=6&page=${page}`)
            console.log(response.data);

            return response.data
        }

    },)

    const deleteMutation = useMutation({
        mutationFn: async (CategoryId) => {
            await axios.delete(`${CATEGORYAPI}/${CategoryId}`);
        },

        onSuccess: (_, CategoryId) => {
            // 🔥 Option 1: Refetch (simple)
            queryClient.invalidateQueries({ queryKey: ['repoData'] });
        },

        onError: (error) => {
            console.log("Delete error:", error.response?.data || error.message);
        }
    });


    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    const categories = [
        {
            title: 'Technology',
            slug: '/technology',
            parent: 'Latest in tech',
            post: 2
        }, {
            title: 'Design',
            slug: '/design',
            parent: 'UX & visual design',
            post: 4
        }, {
            title: 'Business',
            slug: '/business',
            parent: 'Strategy & growth',
            post: 2
        }, {
            title: 'Culture',
            slug: '/culture',
            parent: 'Stories & lifestyle',
            post: 2
        }

    ]
    return (
        <div className='w-full'>
            <Navbar />

            {/* Content */}
            <div className="w-[100%] p-[10px_15px]">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-[20px] font-bold">Category</h2>
                        <p>Organize your posts into topical groups.</p>
                    </div>
                    <button onClick={() => {
                        setForm(true)
                    }} className="p-[10px] rounded-[5px] text-white bg-[var(--back-color)] flex items-center">
                        <i className="fa-solid fa-plus"></i>
                        <span className="ml-2">New Category</span>
                    </button>

                </div>

                {/* Table */}
                <div className="mt-10 bg-white rounded-[5px] shadow overflow-hidden">
                    <table className="w-full text-left">

                        <thead className="bg-gray-50 border-b">
                            <tr className="text-gray-600 text-sm">
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Slug</th>
                                <th className="px-6 py-3">Parent</th>
                                <th className="px-6 py-3">Post</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {data?.data?.map((category, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">

                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {category.title}
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {category.slug}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="px-6 py-4 font-medium text-gray-800">
                                            {category.parent}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-gray-600">
                                        {category.post ? category.post.length : 0}
                                    </td>


                                    <td className="px-6 py-4 flex justify-end gap-3 text-gray-500">
                                        <button className="hover:text-orange-500" onClick={() => {
                                            setUpdate(category._id)
                                            setForm(true)
                                        }}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button className="hover:text-red-500" onClick={() => {
                                            deleteMutation.mutate(category._id)
                                        }}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                {
                    (data?.totalPages != 1) &&
                    <Pagination currentPage={data?.currentPage} totalPages={data?.totalPages} onPageChange={(page) => {
                        // setpage(page)
                        console.log(page);
                        setPage(page)
                    }} />
                }


            </div>
            {form && <FormPage formname={'category'} update={update} setForm={setForm} />}
        </div>
    )
}

export default Category