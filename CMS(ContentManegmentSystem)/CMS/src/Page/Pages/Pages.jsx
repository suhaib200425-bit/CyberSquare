import React, { useState } from 'react'
import './Pages.css'
import Navbar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom';
import FormPage from '../FormPage/FormPage';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PAGEAPI } from '../../assets/assets';
import { queryClient } from '../../Context/Tanstack';
import useStore from '../../Context/Zustand';
import Pagination from '../../components/Pagination/Pagination';
function Pages() {
    const [form, setForm] = useState(false)
    const [update, setUpdate] = useState(null)
    const [page, setPage] = useState(1)
    const { SetBuilderPage } = useStore()
    const Navigate = useNavigate()
    const { isPending, error, data } = useQuery({
        queryKey: ['PagesData', form, page],
        queryFn: async () => {
            try {
                const token =localStorage.getItem('token')
                const response = await axios.get(
                    `${PAGEAPI}?limit=6&page=${page}`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                console.log(response.data);

                return response.data
            } catch (error) {
                console.log(error.response?.data || error.message);
            }
        }
    },)

    const deleteMutation = useMutation({
        mutationFn: async (PageId) => {
            await axios.delete(`${PAGEAPI}/${PageId}`);
        },

        onSuccess: (_, PageId) => {
            // 🔥 Option 1: Refetch (simple)
            queryClient.invalidateQueries({ queryKey: ['repoData'] });
        },

        onError: (error) => {
            console.log("Delete error:", error.response?.data || error.message);
        }
    });


    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className='Pages'>
            <Navbar />
            <div className="Content">
                <div className="ContentHed">
                    <div className="">
                        <h1 className='hed'>Pages</h1>
                        <p>Static pages like About, Contact, Pricing.</p>
                    </div>
                    <button className='bg-[var(--ROW-COLOR)]  text-[var(--TEXT-COLOR)]' onClick={() => {
                        setForm(true)
                        setUpdate(null)
                    }}>
                        <i class="fa-solid fa-plus"></i>
                        <span className='ms-2'>New Page</span>
                    </button>
                </div>
                <div className="mt-10 bg-[var(--BG-COLOR)] rounded-[5px] shadow overflow-hidden">
                    <table className="w-full text-left">

                        <thead className="bg-[var(--ROW-COLOR)] border-b h-[50px]">
                            <tr className="text-[var(--TEXT-COLOR)] text-sm">

                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Slug</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Updated</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[var(--BG-S-COLOR)]">
                            {data?.data?.map((page, index) => (
                                <tr key={index} className="hover:bg-[var(--ROW-COLOR)] transition">

                                    <td className="px-6 py-4 font-medium text-[var(--TEXT-COLOR)]">
                                        {page.title}
                                    </td>

                                    <td className="px-6 py-4 text-[var(--BG-S-COLOR)]">
                                        {page.slug}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`text-xs px-3 py-1 rounded-full ${page.status === "published"
                                                ? "bg-blue-100 text-blue-600"
                                                : "bg-[var(--BG-S-COLOR)]-200 text-[var(--BG-S-COLOR)]-600"
                                                }`}
                                        >
                                            {page.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-[var(--BG-S-COLOR)]-500">
                                        {page.updatedAt.split("T")[0]}
                                    </td>

                                    <td className="px-6 py-4 flex justify-end gap-3 text-[var(--BG-S-COLOR)]-500">
                                        <button className="hover:text-orange-500" onClick={() => {
                                            setUpdate(page._id)
                                            setForm(true)
                                        }}>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button className="hover:text-green-500" onClick={() => {
                                            SetBuilderPage(page.title)
                                            Navigate(`/pagebuilder/${page._id}`)
                                        }}>
                                            <i class="fa-solid fa-file-lines"></i>
                                        </button>
                                        <button className="hover:text-red-500" onClick={() => {
                                            deleteMutation.mutate(page._id)
                                        }}>
                                            <i class="fa-solid fa-trash-can"></i>
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
            {form && <FormPage mutation formname={'page'} setForm={setForm} update={update} />}
        </div>
    )
}

export default Pages