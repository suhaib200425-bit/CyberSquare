import React from 'react'
import './Category.css'
function Category({Title,Count,Icon}) {
  return (
    <div className='col-12 col-md-3 p-2'>
        <div className="Category">
            <div className="Icon">
              {Icon}
            </div>
            <h6>{Title}</h6>
            <p className='m-0'>{Count} Courses</p>
        </div>
    </div>
  )
}

export default Category