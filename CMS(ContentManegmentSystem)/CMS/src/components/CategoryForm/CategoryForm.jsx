import { useState } from "react";
import { CATEGORYAPI } from "../../assets/assets";
import axios from "axios"
import { useEffect } from "react";
export default function CategoryForm({ setFormClose, update }) {
    const [SelectionCategory, setSelectionCategory] = useState([])
    const [form, setForm] = useState({
        title: "",
        slug: '/',
        parent: 0,
        description: ""
    });
    useEffect(() => {
        const getUpdateCategory = async () => {
            try {
                const token = localStorage.getItem("token")
                const response = await axios.get(`${CATEGORYAPI}/${update}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,

                    },
                })
                setForm({
                    title: response.data.data.title,
                    slug: response.data.data.slug,
                    parent: response.data.data.parent,
                    description: response.data.data.description
                })
                console.log(response.data)
            } catch (error) {
                console.log(error.response?.data || error.message);
                alert(error.response?.data?.message || error.message);
            }
        }

        const getSelectionCategory = async () => {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.get(`${CATEGORYAPI}/all/categoryname`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setSelectionCategory(response.data.data)
                console.log(response.data)
            } catch (error) {
                alert(error.response?.data?.message || error.message);
                console.log(error.response?.data || error.message);
            }
        }
        if (update) getUpdateCategory()
        getSelectionCategory()
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
            const token = localStorage.getItem('token')

            const response = await axios.post(CATEGORYAPI, form, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(response.data);
            setFormClose(false)
        } catch (error) {
            console.log(error.response?.data || error.message);

        }
        console.log(form);
    };
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('token')

            const response = await axios.patch(`${CATEGORYAPI}/${update}`, form, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setFormClose(false)
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    }


    return (
        <div className="z-99 fixed inset-0 bg-black/40 flex justify-center items-center">
            <form className="bg-[var(--BG-COLOR)] text-[var(--TEXT-COLOR)] w-[600px] rounded-lg p-6 shadow-lg" onSubmit={update ? handleUpdate : handleSubmit}>

                <h2 className="text-xl font-semibold mb-4">New Category</h2>

                {/* Title */}
                <div className="mb-4">
                    <label className="block mb-1  font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className="w-full border p-2 border-[var(--BG-S-COLOR)] rounded-[6px] focus:outline-[var(--BG-COLOR)]"
                    />
                </div>
                {/*PARENT*/}
                <div className="flex gap-2">

                    <div className="w-1/2">
                        <label className="block mb-1 font-medium">Status</label>
                        <select
                            name="parent"
                            value={form.parent}
                            onChange={handleChange}
                            className="w-full border border-[var(--BG-S-COLOR)] p-2 rounded"
                        >
                            <option value={0}>Parent</option>
                            <option>Published</option>
                        </select>
                    </div>
                    {/* Slug */}
                    <div className="w-1/2 mb-4">
                        <label className="block mb-1 font-medium">Slug</label>
                        <input
                            required
                            type="text"
                            name="slug"
                            value={form.slug}
                            onChange={handleChange}
                            className="w-full border border-[var(--BG-S-COLOR)] p-2 rounded focus:outline-[var(--BG-COLOR)]"
                        />
                    </div>
                </div>
                {/* Description */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea

                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border border-[var(--BG-S-COLOR)] p-2 rounded h-[80px]"
                    />
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
                        {update ? "Update" : "Save"}
                    </button>
                </div>

            </form>
        </div>
    );
}