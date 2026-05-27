import React, { useEffect, useRef, useState } from 'react'
import "./ThemeForm.css"
import axios from 'axios'
import { THEMETEMPLATEAPI } from '../../assets/assets'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { MenuAndPages } from '../../assets/default';

function ThemeForm({ setForm }) {
    const inputRef = useRef()
    const imageRef = useRef()
    const [themeName, setThemeName] = useState('')
    const [bannerImage, setBannerImage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [Otherfield, setOtherfield] = useState([])


    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function handleChange(e) {
        setThemeName(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMessage('')
        let THEMEID = null
        if (themeName.trim() == '' && bannerImage.trim() == "") return
        try {
            // THEME TEMPLATE CREATED SECTION 
            const themeResponse = await axios.post(THEMETEMPLATEAPI, { name: themeName, banner: bannerImage }

            )
            console.log("themeResponse");
            console.log(themeResponse.data);
            console.log("themeResponse end");
            THEMEID = themeResponse.data.data._id
            setOtherfield([
                {
                    message: "Page Created Peading...",
                    status: false
                }, {
                    message: "Menu Created Peading...",
                    status: false
                }, {
                    message: "Category Created Peading...",
                    status: false
                }, {
                    message: "Post Created Peading...",
                    status: false
                }])
            inputRef.current.disabled = true;
            imageRef.current.disabled = true;

            // PAGE TEMPLATE CREATED SECTION 
            setOtherfield(
                [
                    {
                        message: "Page Created Processing...",
                        status: false
                    }, {
                        message: "Menu Created Peading...",
                        status: false
                    }, {
                        message: "Category Created Peading...",
                        status: false
                    }, {
                        message: "Post Created Peading...",
                        status: false
                    }
                ])
            const pageResponse = await axios.post(`${THEMETEMPLATEAPI}/page`, { page: MenuAndPages["page"], id: THEMEID })
            console.log("pageResponse");
            console.log(pageResponse.data);
            console.log("pageResponse end");

            await new Promise((resolve) =>
                setTimeout(resolve, 1000)
            );
            setOtherfield(
                [
                    {
                        message: "Page Completed",
                        status: true
                    }, {
                        message: "Menu Created Processing...",
                        status: false
                    }, {
                        message: "Category Created Peading...",
                        status: false
                    }, {
                        message: "Post Created Peading...",
                        status: false
                    }
                ])

            // MENU TEMPLATE CREATED SECTION 
            const menuResponse = await axios.post(`${THEMETEMPLATEAPI}/menu`, { menu: MenuAndPages["menu"], id: THEMEID, pageId: pageResponse.data?.pageId })
            console.log("menuResponse");
            console.log(menuResponse.data);
            console.log("menuResponse end");

            await new Promise((resolve) =>
                setTimeout(resolve, 1000)
            );
            setOtherfield(
                [
                    {
                        message: "Page Completed",
                        status: true
                    }, {
                        message: "Menu Completed",
                        status: true
                    }, {
                        message: "Category Created Processing...",
                        status: false
                    }, {
                        message: "Post Created Peading...",
                        status: false
                    }
                ])


            // CATEGORY TEMPLATE CREATED SECTION
            const categoryResponse = await axios.post(`${THEMETEMPLATEAPI}/category`, { category: MenuAndPages["category"], id: THEMEID })
            console.log("categoryResponse");
            console.log(categoryResponse.data);
            console.log("categoryResponse end");

            await new Promise((resolve) =>
                setTimeout(resolve, 1000)
            );
            setOtherfield(
                [
                    {
                        message: "Page Completed",
                        status: true
                    }, {
                        message: "Menu Completed",
                        status: true
                    }, {
                        message: "Category Completed",
                        status: true
                    }, {
                        message: "Post Created Processing...",
                        status: false
                    }
                ])

            // POST TEMPLATE CREATED SECTION
            // const postResponse = await axios.post(`${THEMETEMPLATEAPI}/post`, { post: MenuAndPages["post"], categoryId: categoryResponse.data?.categoryId, id: THEMEID })
            // console.log("postResponse");
            // console.log(postResponse.data);
            // console.log("postResponse end");

            await new Promise((resolve) =>
                setTimeout(resolve, 1000)
            );
            setOtherfield(
                [
                    {
                        message: "Page Completed",
                        status: true
                    }, {
                        message: "Menu Completed ",
                        status: true
                    }, {
                        message: "Category Completed",
                        status: true
                    }, {
                        message: "Post Completed",
                        status: true
                    }
                ])
            await new Promise((resolve) =>
                setTimeout(resolve, 1000)
            );
            setForm(false)
        } catch (error) {
            console.log(error.response?.data || error.message);
            if (THEMEID) await axios.delete(`${THEMETEMPLATEAPI}/${THEMEID}`)
            setErrorMessage(error.response?.data?.message || error.message)
            setOtherfield([])

        }
    }
    return (
        <div className='ThemeForm'>
            <form action="" onSubmit={handleSubmit}>
                <h1>Create New Theme Template</h1>
                {/* <p>mdkll dlsmdlkml lklsd</p> */}
                {/* <span className='m-[5px 10px] text-gray-700'>Banner Image</span> */}
                <div className="inputbox">

                    <input onChange={(e) => {
                        setBannerImage(e.target.value)
                    }} required ref={imageRef} type="text" className='w-full' placeholder='Banner URL' />
                </div>
                <span className='m-[5px 10px] text-gray-700'>Template Name</span>

                <div className="inputbox">
                    <input required onChange={handleChange} ref={inputRef} type="text" placeholder='Enter The Template Name' />
                    <button onClick={handleSubmit}>Sumbit</button>
                </div>
                <div className="mt-3"></div>
                {
                    Otherfield?.map((elem, i) => (
                        <>
                            <div key={i} style={{
                                // backgroundColor: elem.color,
                                // opacity: 0.7
                                alignItems: "center"

                            }} className=" flex gap-2 item-center  rounded-[7px]  ">
                                <div className="flex item-center justify-center " style={{ alignItems: "center", width: "50px", height: "50px" }}>
                                    {
                                        elem.status ?
                                            <DotLottieReact
                                                src="https://lottie.host/0c8c3878-06de-4e74-8ece-1becb631a37f/2iiOoUDriP.lottie"
                                                autoplay
                                            /> :
                                            <DotLottieReact
                                                style={{ width: "25px", height: "25px" }}
                                                src="https://lottie.host/ddb194a2-5c31-4f8e-8767-607014ce82fd/gejhs0HdIv.lottie"
                                                loop
                                                autoplay
                                            />

                                    }

                                </div>
                                {elem.message}
                            </div>
                            <hr />
                        </>
                    ))

                }
                <div className="text-red-500">{errorMessage}</div>
            </form>

        </div>
    )
}

export default ThemeForm