import React from 'react'
import './MainCard.css'
function MainCard({ Title, Icon, Count, Color }) {
    return (
        <div className='MainCard'>
            <div className="">
                <p className='text-[20px]'>{Title}</p>
                <h2 className='Count text-center w-full'>{Count}</h2>
            </div>
            <div className="flex items-center">
                {Icon}
            </div>
        </div>
    )
}

export default MainCard