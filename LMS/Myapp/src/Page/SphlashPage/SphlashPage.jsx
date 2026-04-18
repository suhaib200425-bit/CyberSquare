import React, { useEffect } from 'react'
import './SphlashPage.css'
import { useLMS } from '../../Context/LmsContext';
import { useNavigate } from 'react-router-dom';
function SphlashPage() {
    const { UserLogedStatus, setUser } = useLMS()
    const Navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token);
        Promise.all([UserLogedStatus()]).then((result) => {
            
            console.log('Promise');
            console.log(result[0].status);
            console.log('Promise end');

            if (result[0].status) {
                setUser(result[0].user)
            } 
            Navigate('/home')
        })
    }, [])
    return (
        <div className='SphlashPage'>
            <h1><i class="bi bi-mortarboard"></i>Learn<span>Hub</span></h1>
        </div>
    )
}

export default SphlashPage