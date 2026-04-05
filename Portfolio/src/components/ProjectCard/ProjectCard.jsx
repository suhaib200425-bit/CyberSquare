import React from 'react'
import './ProjectCard.css'
function ProjectCard({image,des,title}) {
    
  return (
    <div className=' col-12 col-md-4 p-2'>
        <div className="ProjectCard">
            <img src={image} alt="" srcset="" />
            <h5 className="ps-2 projectName">{title}</h5>
            <p>{des}</p>
        </div>
    </div>
  )
}

export default ProjectCard