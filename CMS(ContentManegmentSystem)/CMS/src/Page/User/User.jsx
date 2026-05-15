import { useState } from "react"
import useStore from "../../Context/Zustand"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { USERAPI } from "../../assets/assets"
import './User.css'
import { useMutation, useQuery } from '@tanstack/react-query';
import Navbar from "../../components/NavBar/NavBar"
import FormPage from "../FormPage/FormPage"
import Pagination from "../../components/Pagination/Pagination"
import { queryClient } from "../../Context/Tanstack"
function Users() {
    // const {SetBuilderPage}=useStore()
    const Navigate = useNavigate()
const [page,setPage]=useState(1)
    const [form, setForm] = useState(false)
    const [update, setUpdate] = useState(null)
    const { isPending, error, data } = useQuery({
        queryKey: ['userData', form,page],
        queryFn: async () => {
            const response = await axios.get(`${USERAPI}/all?limit=6&page=${page}`)
            console.log(response.data);

            return response.data
        }
    },)



    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className='Users'>
            <Navbar />
            <div className="Content">
                <div className="ContentHed">
                    <div className="">
                        <h2 className='hed'>Users</h2>
                        <p>Static pages like About, Contact, Pricing.</p>
                    </div>
                    <button onClick={() => {
                        setForm(true)
                        setUpdate(null)
                    }}>

                        <i class="fa-solid fa-plus"></i>
                        <span className='ms-2'>New User</span>
                    </button>
                </div>
                <div className="mt-10 bg-white rounded-[5px] shadow overflow-hidden">
                    <table className="w-full text-left">

                        <thead className="bg-gray-50 border-b">
                            <tr className="text-gray-600 text-sm">

                                <th className="px-6 py-3">UserName</th>
                                <th className="px-6 py-3">email</th>
                                <th className="px-6 py-3">role</th>
                                {/* <th className="px-6 py-3">isVerified</th> */}
                                <th className="px-6 py-3">Create At</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">
                            {data?.users?.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">

                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {user?.username}
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {user?.email}
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {user?.role}
                                    </td>

                                    {/* <td className="px-6 py-4">
                                        <span
                                            className={`text-xs px-3 py-1 rounded-full ${user?.isVerified 
                                                ? "bg-blue-100 text-blue-600"
                                                : "bg-gray-200 text-gray-600"
                                                }`}
                                        >
                                            {user?.isVerified}
                                        </span>
                                    </td> */}

                                    <td className="px-6 py-4 text-gray-500">
                                        {user?.createdAt.split("T")[0]}
                                    </td>

                                    <td className="px-6 py-4 flex justify-end gap-3 text-gray-500">
                                        <button className="hover:text-orange-500" onClick={() => {
                                            setUpdate(user._id)
                                            setForm(true)
                                        }}>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button className="hover:text-green-500" onClick={() => {
                                            // SetBuilderuser(user.title)
                                            // Navigate(`/userbuilder/${user._id}`)
                                        }}>
                                            <i class="fa-solid fa-file-lines"></i>
                                        </button>
                                        <button className="hover:text-red-500" onClick={() => {
                                            // deleteMutation.mutate(user._id)
                                        }}>
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                {
                    (data?.totalPages!=1)&&
                    <Pagination currentPage={data?.currentPage} totalPages={data?.totalPages} onPageChange={(page) => {
                    // setpage(page)
                    console.log(page);
                    setPage(page)
                }} />
                }
            </div>
            {form && <FormPage mutation formname={'user'} setForm={setForm} update={update} />}
        </div>
    )
}

export default Users