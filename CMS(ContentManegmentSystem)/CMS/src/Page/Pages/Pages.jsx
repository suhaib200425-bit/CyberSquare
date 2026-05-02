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
function Pages() {
    const [form, setForm] = useState(false)
    const [update, setUpdate] = useState(null)
    const {SetBuilderPage}=useStore()
    const Navigate = useNavigate()
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData', form],
        queryFn: async () => {
            const response = await axios.get(PAGEAPI)
            console.log(response.data);

            return response.data
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
                        <h2 className='hed'>Pages</h2>
                        <p>Static pages like About, Contact, Pricing.</p>
                    </div>
                    <button onClick={() => {
                        setForm(true)
                        setUpdate(null)
                    }}>
                        <i class="fa-solid fa-plus"></i>
                        <span className='ms-2'>New Page</span>
                    </button>
                </div>
                <div className="mt-10 bg-white rounded-[5px] shadow overflow-hidden">
                    <table className="w-full text-left">

                        <thead className="bg-gray-50 border-b">
                            <tr className="text-gray-600 text-sm">

                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Slug</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Updated</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {data?.data?.map((page, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">

                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {page.title}
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {page.slug}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`text-xs px-3 py-1 rounded-full ${page.status === "published"
                                                ? "bg-blue-100 text-blue-600"
                                                : "bg-gray-200 text-gray-600"
                                                }`}
                                        >
                                            {page.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {page.updatedAt.split("T")[0]}
                                    </td>

                                    <td className="px-6 py-4 flex justify-end gap-3 text-gray-500">
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
            </div>
            {form && <FormPage mutation formname={'page'} setForm={setForm} update={update} />}
        </div>
    )
}

export default Pages