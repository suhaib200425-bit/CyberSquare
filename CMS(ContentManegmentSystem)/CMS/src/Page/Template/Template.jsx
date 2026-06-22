import React, { useState } from 'react'
import './Template.css'
import { AUTHTEMPLATEAPI, BASEURL, THEMETEMPLATEAPI } from '../../assets/assets'
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import ReactPlayer from "react-player";
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer';
import { queryClient } from '../../Context/Tanstack';
import TargetValueChange from '../../components/TargetValueChange/TargetValueChange';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavBar/NavBar';
import ThemeForm from '../../components/ThemeForm/ThemeForm';
function Template() {
    const Navigate = useNavigate()
    const [form, setForm] = useState(false)
    const [active, setActive] = useState("")

    const { isPending, error, data } = useQuery({
        queryKey: ['themedata', form],
        queryFn: async () => {
            try {

                const token = localStorage.getItem('token')
                const response = await axios.get(THEMETEMPLATEAPI, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                console.log(response.data)
                setActive(response.data?.active)
                return response.data?.data
            } catch (error) {
                alert(error.response?.data?.message || error.message)
                console.log(error.response?.data || error.message);

            }

        }
    })

    // Mutations
    const checkedmutation = useMutation({
        mutationFn: async (ThemeTemplateId) => {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.patch(
                    `${THEMETEMPLATEAPI}/checked/${ThemeTemplateId}`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
                )
                return response.data?.data
            } catch (error) {
                alert(error.response?.data?.message || error.message)
                console.log(error.response?.data || error.message);

            }

        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['themedata'] })
        }
    })

    // MUTATIONS
    const deletemutation = useMutation({
        mutationFn: async (ThemeTemplateId) => {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.delete(
                    `${THEMETEMPLATEAPI}/${ThemeTemplateId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
                )
                return response.data?.data
            } catch (error) {
                alert(error.response?.data?.message || error.message)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['themedata'] })
        },
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='flex flex-col w-full'>

            <Navbar />
            <div className='p-5 w-full'>
                <h2 className='text-2xl font-semibold'>
                    All Theme's
                </h2>

                <p className='text-gray-500 mb-5'>
                    selected any one
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <div key={'create'} className='w-full cursor-pointer'>
                        <h3>{" x "}</h3>

                        <img
                            src={'https://i.pinimg.com/736x/13/1b/a0/131ba0a64bc08977226dd9447e033c47.jpg'}
                            alt=""
                            className='w-full h-[200px] rounded-[10px] object-cover'
                        />

                        <div className='py-[5px] flex items-center justify-center'>


                            <button onClick={() => {
                                setForm(true)
                            }} className='w-full rounded-[5px] py-1 px-2 bg-gray-300 text-black-600 font-medium'>
                                {"CREATE NEW TEMPLATE"}
                            </button>
                        </div>
                    </div>
                    {
                        data?.map(elem => (
                            <div key={elem._id} className='w-full cursor-pointer'>
                                <div className="flex item-center justify-between px-2 py-1">
                                    <h3>{elem.name}</h3>
                                    <div className="">
                                        <i onClick={() => {
                                            deletemutation.mutate(elem._id)
                                        }} className="fa-solid fa-trash-can"></i>
                                    </div>
                                </div>
                                <video

                                    muted
                                    playsInline
                                    preload="metadata"
                                    onMouseEnter={(e) => {
                                        e.target.play();
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.pause();
                                        e.target.currentTime = 0;
                                    }}
                                    style={{
                                        borderRadius: '10px',
                                        width: "100%",
                                        height: "200px",
                                        objectFit: "cover"
                                    }} >
                                    <source
                                        style={{ height: "100%" }}
                                        src={`${BASEURL}${elem.banner}`}
                                        type="video/mp4"
                                    />
                                </video>
                                {/*<img
                                    src={elem?.banner || 'https://i.pinimg.com/736x/4b/30/db/4b30dbe65f8ea7ff9f1318f6f89cb676.jpg'}
                                    alt=""
                                    className='w-full h-[200px] rounded-[10px] object-cover'
                                />*/}

                                <div className='py-[5px] flex items-center justify-between'>
                                    <input
                                        type="radio"
                                        name='authradio'
                                        checked={active.theme === elem._id}
                                        onChange={() => {
                                            checkedmutation.mutate(elem._id)
                                        }}
                                        className='w-5 h-5'
                                    />

                                    {
                                        active.theme === elem._id &&
                                        <span className='text-green-600 font-medium'>
                                            SELECTED
                                        </span>
                                    }

                                    <button
                                        className='px-[10px] py-[5px] rounded-[10px] bg-black text-white'
                                        onClick={() => {
                                        }}
                                    >
                                        <a href="http://localhost:5174/home">View</a>
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
            {
                form && <ThemeForm setForm={setForm} />
            }
        </div>
    )
}
export default Template