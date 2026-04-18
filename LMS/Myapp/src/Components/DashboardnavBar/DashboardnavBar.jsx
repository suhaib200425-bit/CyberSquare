import React from 'react'
import './DashboardnavBar.css'
import { ProfileImage } from '../../assets/assets'
import { useLMS } from '../../Context/LmsContext'
function DashboardnavBar() {
  const {User}=useLMS()
  return (
    <div className='DashboardnavBar'>
        <div className="leftContent">
           <h5><i class="bi bi-mortarboard"></i>My<span>Dashboard</span></h5> 
        </div>
        <div className="rightContent">
            <div className="">
                <strong className='m-0'>{User?.username}</strong>
                <p className="m-0">student</p>
            </div>
            <img src={ProfileImage} alt="" className="ProfileImage" />
        </div>
    </div>
  )
}

export default DashboardnavBar