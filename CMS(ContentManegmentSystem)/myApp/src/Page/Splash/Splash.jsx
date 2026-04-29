import React, { useEffect } from 'react'
import './Splash.css'
import axios from 'axios'
import { USERAPI } from '../../assets/assets'
import useStore from '../../context/Zustand'
import { useNavigate } from 'react-router-dom'
function Splash() {
    const { user, SetUser } = useStore()
    const Navigate = useNavigate()
    useEffect(() => {
        const checkLoged = async () => {
            try {
                const token = localStorage.getItem('token')
                console.log(token);
                
                const response = await axios.get(`${USERAPI}`, {
                    headers: {
                        Authorization: `_ ${token}`
                    }
                })
                console.log(response.data);

                SetUser(response?.data?.user)
                Navigate('/page/Home')
            } catch (error) {
                console.log(error.response?.data || error.message);
                Navigate('/login')
            }

        }
        checkLoged()
    }, [])
    return (
        <div className='Splash'>
            {/* <img src="" alt="" srcset="" /> */}
            <h1>MY BRAND</h1>
        </div>
    )
}

export default Splash