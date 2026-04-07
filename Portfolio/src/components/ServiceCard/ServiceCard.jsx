import React from 'react'
import './ServiceCard.css'
function ServiceCard({ image,title, content }) {
  return (
    <div className=' col-12 col-md-4 p-2'>
      <div className="ServiceCard">
        <div className="icon" style={{backgroundImage:`url(${image})`}}></div>
        <h5 className='mt-2'>{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ServiceCard