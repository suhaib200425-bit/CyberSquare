import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect } from 'react';
import { USERAPI } from '../../assets/assets';
import axios from "axios"
import useStore from '../../Context/Zustand';
import { useNavigate } from "react-router-dom"
const Splash = () => {
    const { SetUser } = useStore()
    const Navigate = useNavigate()
    useEffect(() => {
        const checkLoged = async () => {
            try {
                const token = localStorage.getItem('token')
                console.log(token);
                const response = await axios.get(USERAPI, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                console.log(response.data);
                SetUser(response.data?.user)
                Navigate('/home')


            } catch (error) {
                alert(error.response?.data?.messsage || error.message)
                console.log(error.response?.data || error.message);
                Navigate('/authentication')

            }
        }
        checkLoged()
    }, [])
    return (
        <div className="flex items-center h-screen">
            <DotLottieReact
                src="https://lottie.host/29529c08-6d70-47bd-bc9a-e2c417a418b8/EhyNBgLkuQ.lottie"
                loop
                autoplay
            />
        </div>
    );
};

export default Splash