import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import './Home.css'
import MainCard from '../../components/MainCard/MainCard'
import LinerGraph from '../../components/LinerGraph/LinerGraph'
import LatestArticles from '../../components/LatestArticles/LatestArticles'
function Home() {
  return (
    <div className='Home'>
        <Navbar />
        <div className="Content">
            <h2 className='hed'>Dashboard</h2>
            <p>A live overview of your content and audience.</p>
            <div className="RowItems">
                <MainCard Title={'Total Posts'} Icon={<i class="fa-regular fa-note-sticky"></i>} Count={12} Color={''} />
                <MainCard Title={'Total Pages'} Icon={<i class="fa-solid fa-file-lines"></i>} Count={5} Color={''} />
                <MainCard Title={'Total Users'} Icon={<i class="fa-solid fa-people-group"></i>} Count={4} Color={''} />
                <MainCard Title={'Visitors today'} Icon={<i class="fa-solid fa-eye"></i>} Count={134} Color={''} />
            </div>
            <div className="RowItems">
                <LinerGraph />
                <LatestArticles/>
            </div>
        </div>
    </div>
  )
}

export default Home