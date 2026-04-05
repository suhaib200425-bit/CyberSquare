import React from 'react'
import './Project.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { ChatApp, GrandCoffee } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
function Project() {
    // const Navigate=useNavigate()

    return (
        <div className='Project'>
            <h3 className='mb-3'><span>My</span> Latest Blog Posts</h3>
            <div className="row col-12">
                <ProjectCard image={GrandCoffee}
                    des={"A stylish coffee shop website built using HTML, CSS, and JavaScript.Designed with a clean layout to showcase menu and enhance user experience."}
                    title={"GrandCoffee"}
                    onTap={'https://cyber-square-two.vercel.app/'}
                />
                <ProjectCard
                    image={ChatApp}
                    des={"A real-time chat application for seamless communication.Built with a focus on speed, simplicity, and user experience."}
                    title={"ChatApp"}
                    onTap={'https://chat-app-eta-ten-39.vercel.app/auth'}
                />
                {/* <ProjectCard /> */}
            </div>
        </div>
    )
}

export default Project