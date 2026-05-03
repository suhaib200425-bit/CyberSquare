import { useState } from "react";
import EditorContainer from "../TinyMCE/TinyMCE";
import axios from "axios";
import { CATEGORYAPI, POSTAPI } from "../../assets/assets";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function PostForm({ setFormClose, update }) {
    const Navigate = useNavigate()
    const [form, setForm] = useState({
        title: "",
        category: null,
        status: "Draft",
        excerpt: "",
        banner: "",
        content: ""
    });
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData', update],
        queryFn: async () => {
            const catRes = await axios.get(`${CATEGORYAPI}/all/categoryname`)


            if (update !== null) {
                const postRes = await axios.get(`${POSTAPI}/postid/${update}`)
                setForm({
                    title: postRes.data?.data.title,
                    category: postRes.data?.data.category?._id,
                    status: postRes.data?.data.status,
                    excerpt: postRes.data?.data.excerpt,
                    content: postRes.data?.data.content,
                    banner: postRes.data?.data?.banner
                })
            }

            return catRes.data.data

        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const EditorContainerValue = (newValue) => {
        setForm({ ...form, content: newValue })
        console.log(newValue);

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(form);
            const response = await axios.post(POSTAPI, form)
            setFormClose(false)
        } catch (error) {
            console.log(error.response.data || error.message);

        }

    };
    const handleUpdate = async (e) => {
        alert('helo')
        e.preventDefault()
        try {
            console.log(form);
            const response = await axios.patch(`${POSTAPI}/${update}`, form)
            console.log(response.data);

            setFormClose(false)
        } catch (error) {
            console.log(error.response.data || error.message);

        }

    };

    return (
        <div className=" overflow-y-auto fixed inset-0 bg-black flex justify-center ">
            <form className="bg-white w-full h-max  rounded-lg p-6 shadow-lg" onSubmit={update ? handleUpdate : handleSubmit}>

                <h2 className="text-xl font-semibold mb-4">New post</h2>

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
                {/* Banner */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Banner</label>
                    <input
                        type="text"
                        name="banner"
                        value={form.banner}
                        onChange={handleChange}
                        className="w-full border p-2 rounded focus:outline-blue-500"
                    />
                </div>

                {/* Category & Status */}
                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <label className="block mb-1 font-medium">Category</label>
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                        >

                            <option value={null}>Choose</option>
                            {
                                data?.map(elem => (
                                    <option value={elem._id}>{elem.title}</option>
                                ))
                            }
                        </select>
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
                </div>

                {/* Excerpt */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Excerpt</label>
                    <textarea
                        name="excerpt"
                        value={form.excerpt}
                        onChange={handleChange}
                        className="w-full border p-2 rounded h-[80px]"
                    />
                </div>

                {/* Content */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium ">Content</label>
                    <EditorContainer content={form.content} EditorContainerValue={EditorContainerValue} />
                    {/* <textarea
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        className="w-full border p-2 rounded h-[400px]"
                    /> */}
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