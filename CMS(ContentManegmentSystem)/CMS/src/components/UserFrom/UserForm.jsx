import { useState } from "react";
import axios from "axios"
import { PAGEAPI, USERAPI } from "../../assets/assets";
import { useEffect } from "react";
export default function UserForm({ setFormClose, update }) {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password:"",
        isVerified:false,
        role:"user"
    });


    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`${USERAPI}/get/id/${update}`)
                setForm({
                    username: response.data?.user?.username,
        email: response.data?.user?.email,
        password: null,
        isVerified: response.data?.user?.isVerified,
        role: response.data?.user?.role
                })
                console.log(response.data)
            } catch (error) {
                console.log(error.response.data || error.message);
            }
        }
        if (update) getUser()
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${USERAPI}/register`, form)
            console.log(response.data);
            setFormClose(false)
        } catch (error) {
            console.log(error.response.data || error.message);

        }
        console.log(form);
    };

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.patch(`${USERAPI}/update/${update}`, form)
            setFormClose(false)
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    }
    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <form className="bg-white w-[600px] rounded-lg p-6 shadow-lg" onSubmit={update?handleUpdate:handleSubmit}>

                <h2 className="text-xl font-semibold mb-4">New User</h2>

                {/* UserName */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">UserName</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                    />
                </div>
                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                    />
                </div>
                {/* password */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                    disabled={form.password==null}
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                    />
                </div>
                {/* Slug */}
                <div className="mb-4 flex">
                    <label className=" mb-1 font-medium">isVerified</label>
                    <input
                        type="checkbox"
                        name="isVerified"
                        checked={form.isVerified}
                        onChange={(e)=>{
                            setForm(prev=>{
                                return {
                                    ...prev,isVerified:e.target.checked
                                }
                            })
                        }}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                    />
                </div>

                <div className="w-1/2">
                    <label className="block mb-1 font-medium">role</label>
                    <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option>user</option>
                        <option>admin</option>
                        <option>editor</option>
                    </select>
                </div>


                {/* Buttons */}
                <div className="flex justify-end gap-3">
                    <button className="px-4 py-2 border rounded" onClick={(e) => {
                        e.preventDefault()
                        setFormClose(false)
                    }}>
                        Cancel
                    </button>
                    <button
                        onClick={update?handleUpdate:handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        {update?'Update':"Save"}
                    </button>
                </div>

            </form>
        </div>
    );
}