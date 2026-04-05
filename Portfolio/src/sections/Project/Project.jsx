import React from 'react'
import './Project.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { ChatApp, GrandCoffee } from '../../assets/assets'
function Project() {
    return (
        <div className='Project'>
            <h3 className='mb-3'><span>My</span> Latest Blog Posts</h3>
            <div className="row col-12">
                <ProjectCard image={GrandCoffee} 
                des={"A real-time chat application for seamless communication.Built with a focus on speed, simplicity, and user experience."}
                title={"GrandCoffee"}
                />
                <ProjectCard
                    image={ChatApp}
                    des={"A stylish coffee shop website built using HTML, CSS, and JavaScript.Designed with a clean layout to showcase menu and enhance user experience."}
                    title={"ChatApp"} />
                {/* <ProjectCard /> */}
            </div>
        </div>
    )
}

export default Project