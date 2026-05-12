import React, { useState } from 'react'
import './AuthPages.css'
import { ALLAUTHPAGES, AUTHTEMPLATEAPI, BASEURL } from '../../assets/assets'
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer';
import { queryClient } from '../../Context/Tanstack';
import TargetValueChange from '../../components/TargetValueChange/TargetValueChange';
function AuthPages() {
    const [authpage, setAuthpage] = useState(null)
    const { isPending, error, data } = useQuery({
        queryKey: ['authdata'],
        queryFn: async () => {
            const response = await axios.get(AUTHTEMPLATEAPI)
            console.log(response.data);

            return response.data?.data
        }
    },)

    // Mutations
    const checkedmutation = useMutation({
        mutationFn: async (AuthTemplateId) => {
            const response = await axios.patch(`${AUTHTEMPLATEAPI}/checked/${AuthTemplateId}`)
            return response.data?.data
        },
        onSuccess: (result) => {
            queryClient.invalidateQueries({ queryKey: ['authdata'] })
        },
    })


    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='main-auth-container'>
            <h2 className='title'>Authentication Pages</h2>
            <p className='subtitle'>slected any one</p>
            <div className="AuthPages">
                {
                    data?.map(elem => (
                        <div className="AuthPage">
                            <img src={elem?.imageModel} alt="" srcset="" />
                            <div className="">
                                <input type="radio" name='authradio' checked={elem.checked} onClick={() => {
                                    checkedmutation.mutate(elem._id)
                                }} />
                                {elem.checked && <span>SELECTED</span>}
                                <button className="view" onClick={() => {
                                    setAuthpage(elem)
                                }}>view</button>
                            </div >


                        </div>
                    ))
                }

            </div>
            {
                authpage && <div className="formactive" >
                    <div className=" backArrow" onClick={() => {
                        setAuthpage(null)
                    }}>
                        <i class="fa-solid fa-angle-left"></i>
                        Back
                    </div>
                    <div className="p" style={{ width: "100%" }}>
                        <DynamicRenderer className="w-full" code={authpage?.template} props={authpage?.props} />
                    </div>
                    <div className="rightValueBox" style={{ width: "300px" }}>
                        <button className='mx-3 p-2 bg-black text-white' onClick={async () => {
                            try {
                                const response = await axios.patch(`${BASEURL}/api/auth/template/${authpage._id}`, authpage)
                                alert("updated")
                            } catch (error) {
                                console.log(error.response?.data || error.message);

                            }
                        }}>Save</button>
                        <TargetValueChange TargetValue={authpage} onChangeFunction={(key, value) => {
                            setAuthpage(prev => {
                                console.log(prev);

                                return {
                                    ...prev,
                                    props: {
                                        ...prev.props,
                                        [key]: {
                                            ...prev.props[key],
                                            value: value
                                        }
                                    }
                                }
                            })

                        }} />
                    </div>
                </div>

            }
        </div>
    )
}

export default AuthPages