import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import './Home.css'
import MainCard from '../../components/MainCard/MainCard'
import LinerGraph from '../../components/LinerGraph/LinerGraph'
import LatestArticles from '../../components/LatestArticles/LatestArticles'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { DASHBOARDAPI } from '../../assets/assets'
function Home() {
    const [Dashboard, setDashboard] = useState([])
    useEffect(() => {
        const getDashboard = async () => {
            try {

                const response = await axios.get(DASHBOARDAPI)
                setDashboard(response.data)
            } catch (err) {
                console.log(err.response?.data || err.message);

            }
        }
        getDashboard()
    }, [])
    return (
        <div className='Home'>
            <Navbar />
            <div className="Content">
                <h2 className='hed'>Dashboard</h2>
                <p>A live overview of your content and audience.</p>
                <div className="RowItems">
                    <MainCard Title={'Total Posts'} Icon={<i class="fa-regular fa-note-sticky"></i>} Count={Dashboard?.posts} Color={''} />
                    <MainCard Title={'Total Pages'} Icon={<i class="fa-solid fa-file-lines"></i>} Count={Dashboard?.pages} Color={''} />
                    <MainCard Title={'Total Users'} Icon={<i class="fa-solid fa-people-group"></i>} Count={Dashboard?.users} Color={''} />
                    <MainCard Title={'Visitors today'} Icon={<i class="fa-solid fa-eye"></i>} Count={Dashboard?.totalVisitors} Color={''} />
                </div>
                <div className="RowItems">
                    <LinerGraph GraphData={Dashboard?.data} />
                    <LatestArticles />
                </div>
            </div>
        </div>
    )
}

export default Home