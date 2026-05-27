import React, { useState } from 'react'
import './Menu.css'
import Navbar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom';
import FormPage from '../FormPage/FormPage';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MENUAPI } from '../../assets/assets';
import { queryClient } from '../../Context/Tanstack';
import useStore from '../../Context/Zustand';
function Menu() {
    const [form, setForm] = useState(false)
    const [update, setUpdate] = useState(null)
    const {SetBuilderPage}=useStore()
    const Navigate = useNavigate()
    const { isPending, error, data } = useQuery({

        queryKey: ['repoData', form],
        queryFn: async () => {
            try{
                const token = localStorage.getItem('token')
                const response = await axios.get(MENUAPI,{
                     headers: { Authorization: `Bearer ${token}` }

                })
            console.log(response.data);

            return response.data
            }catch(error){
                alert(error.response?.data?.message || error.message)
            }
        }
    },)

    const deleteMutation = useMutation({
        mutationFn: async (PageId) => {
            await axios.delete(`${MENUAPI}/${PageId}`);
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
        <div className='Menu w-full'>
            <Navbar />
            <div className="Content">
                <div className="ContentHed">
                    <div className="">
                        <h2 className='hed'>Menu</h2>
                        <p>Static Menu like About, Contact, Pricing.</p>
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
                                <th className="px-6 py-3">Page</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {data?.data?.map((menu, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">

                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {menu?.title}
                                    </td>


                                    <td className="px-6 py-4 text-gray-500">
                                        {menu?.slug}
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {menu.page?.title}
                                    </td>

                                    <td className="px-6 py-4 flex justify-end gap-3 text-gray-500">
                                        <button className="hover:text-orange-500" onClick={() => {
                                            setUpdate(menu._id)
                                            setForm(true)
                                        }}>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button className="hover:text-red-500" onClick={() => {
                                            deleteMutation.mutate(menu._id)
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
            {form && <FormPage  formname={'menu'} setForm={setForm} update={update} />}
        </div>
    )
}

export default Menu