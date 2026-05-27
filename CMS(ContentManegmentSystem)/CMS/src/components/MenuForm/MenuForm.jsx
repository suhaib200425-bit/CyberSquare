import { useState } from "react";
import axios from "axios"
import { MENUAPI, PAGEAPI } from "../../assets/assets";
import { useEffect } from "react";
export default function MenuForm({ setFormClose, update }) {
    const [form, setForm] = useState({
        title: "",
        slug: "/",
        page: 0,
    });

    const [pages, setPages] = useState([])
const token = localStorage.getItem('token')
    useEffect(() => {
        
        const getMenu = async () => {
            try {
                const response = await axios.get(`${MENUAPI}/${update}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setForm({
                    title: response.data.data.title,
                    slug: response.data.data.slug,
                    page: response.data.data.page._id,
                })
                console.log(response.data)
            } catch (error) {
                console.log(error.response.data || error.message);
            }
        }
        const getPage = async () => {
            try {
                const response = await axios.get(PAGEAPI, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                console.log('getPage')
                console.log(response.data.data);

                setPages(response.data.data)
            } catch (error) {
                console.log(error.response.data || error.message);
            }
        }
        if (update) getMenu()
        getPage()
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form);

        try {
            const response = await axios.post(MENUAPI, form,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(response.data);
            setFormClose(false)
        } catch (error) {
            console.log(error.response.data || error.message);

        }
        console.log(form);
    };

    const handleUpdate = async (e) => {
        e.preventDefault()
        console.log(form);

        try {
            const response = await axios.patch(`${MENUAPI}/${update}`, form,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setFormClose(false)
        } catch (error) {
            console.log(error.response.data || error.message);
        }
    }
    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <form className="bg-white w-[600px] rounded-lg p-6 shadow-lg" onSubmit={update ? handleUpdate : handleSubmit}>

                <h2 className="text-xl font-semibold mb-4">New Page</h2>

                {/* Title */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                    />
                </div>
                {/* Slug */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Slug</label>
                    <input
                        type="text"
                        name="slug"
                        value={form.slug}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                    />
                </div>

                <div className="w-1/2">
                    <label className="block mb-1 font-medium">Page</label>
                    <select
                        name="page"
                        value={form.page}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value={0}>Page</option>
                        {
                            pages && pages?.map((page, i) => <option key={i} value={page._id}>{page.title}</option>)
                        }

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
                        onClick={update ? handleUpdate : handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        {update ? 'Update' : "Save"}
                    </button>
                </div>

            </form>
        </div>
    );
}