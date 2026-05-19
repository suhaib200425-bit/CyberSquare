import { useState } from "react";
import axios from "axios"
import { PAGEAPI } from "../../assets/assets";
import { useEffect } from "react";
export default function PageForm({ setFormClose, update }) {
    const [form, setForm] = useState({
        title: "",
        slug: "/",
        status: "Draft",
    });


    useEffect(() => {
        const getPage = async () => {
            try {
                const response = await axios.get(`${PAGEAPI}/${update}`)
                setForm({
                    title: response.data.data.title,
                    slug: response.data.data.slug,
                    status: response.data.data.status,
                })
                console.log(response.data)
            } catch (error) {
                console.log(error.response?.data || error.message);
            }
        }
        if (update) getPage()
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
            const response = await axios.post(PAGEAPI, form)
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
            const response = await axios.patch(`${PAGEAPI}/${update}`, form)
            setFormClose(false)
        } catch (error) {
            console.log(error.response.data || error.message);
        }
    }
    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
            <form className="bg-white w-[600px] rounded-lg p-6 shadow-lg" onSubmit={update?handleUpdate:handleSubmit}>

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
                    <label className="block mb-1 font-medium">Status</label>
                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option>Draft</option>
                        <option>Published</option>
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