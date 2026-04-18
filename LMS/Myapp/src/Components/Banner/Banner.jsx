import React from 'react'
import './Banner.css'
function Banner({Title,Description,Search}) {
  return (
    <div className='Banner'>
        <h1>{Title}</h1>
        <p>{Description}</p>
        {
            Search&&
           <div className="search">
            <div className="icon">
                <i class="bi bi-search"></i>
            </div>
            <input type="text" placeholder='search courses...' />
           </div>
        }
    </div>
  )
}

export default Banner