import React from 'react'
import './MainCard.css'
function MainCard({ Title, Icon, Count, Color }) {
    return (
        <div className='MainCard'>
            <div className="">
                <p>{Title}</p>
                <h2 className='Count'>{Count}</h2>
            </div>
            <div className="">
                {Icon}
            </div>
        </div>
    )
}

export default MainCard