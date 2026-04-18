import React from 'react'
import './MenuIcon.css'
import { useLMS } from '../../Context/LmsContext'
function MenuIcon({ Icon, Title, OnTap }) {
    const { DashboardMenu, setDashboardMenu } = useLMS()
    return (
        <div className={DashboardMenu != Title ? 'MenuIcon' : 'ActiveBox'} onClick={() => {
            if (OnTap) OnTap()
            else setDashboardMenu(Title)
        }}>
            {Icon}
            <label htmlFor="">{Title}</label>
        </div>
    )
}

export default MenuIcon