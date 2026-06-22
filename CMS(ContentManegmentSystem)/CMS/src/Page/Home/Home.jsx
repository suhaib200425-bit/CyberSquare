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
import { useQuery } from '@tanstack/react-query'

function Home() {
    const [Dashboard, setDashboard] = useState([])
    const { isPending, error, data } = useQuery({
        queryKey: ['DashbordData'],
        queryFn: async () => {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.get(DASHBOARDAPI, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setDashboard(response.data) 

                // const delay=(ms) => {
                //     return new Promise((resolve) => {
                //         setTimeout(resolve, ms);
                //     });
                // }
                // await delay(4000)  //4s
                return response.data
            } catch (error) {
                console.log(error.response?.data || error.message);

            }
        }
    },)



    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className='Home'>
            <Navbar />
            <div className="Content">



                <h2 className='hed'>Dashboard</h2>
                <p>A live overview of your content and audience.</p>

                <div className="RowItems">
                    <LinerGraph GraphData={data?.data} />
                    <LatestArticles />
                </div>
                <div className="RowItems">
                    <MainCard Title={'Total Posts'} Icon={<i class="fa-regular fa-note-sticky"></i>} Count={data?.posts} Color={''} />
                    <MainCard Title={'Total Pages'} Icon={<i class="fa-solid fa-file-lines"></i>} Count={data?.pages} Color={''} />
                    <MainCard Title={'Total Users'} Icon={<i class="fa-solid fa-people-group"></i>} Count={data?.users} Color={''} />
                    <MainCard Title={'Visitors today'} Icon={<i class="fa-solid fa-eye"></i>} Count={data?.totalVisitors} Color={''} />
                </div>
            </div>
        </div>
    )
}

export default Home