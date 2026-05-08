import React, { useState } from 'react'
import './AuthPages.css'
import { ALLAUTHPAGES, AUTHTEMPLATEAPI } from '../../assets/assets'
import { useQuery,useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { DynamicRenderer } from '../../ComponentConvertFunction/DynamicRenderer';
import { queryClient } from '../../Context/Tanstack';
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
                authpage && <div className="formactive">
                    <DynamicRenderer code={authpage?.template} props={authpage?.props} />
                </div>

            }
        </div>
    )
}

export default AuthPages