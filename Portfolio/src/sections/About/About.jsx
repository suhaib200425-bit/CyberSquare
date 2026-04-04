import React from 'react'
import './About.css'
import { ProfileImage } from '../../assets/assets'
function About() {
    return (
        <div className='About'>
            <div className="Content row">
                <div className="col-12 col-md-5 About-image">
                    <img src={ProfileImage} alt="" srcset="" />
                </div>
                <div className="About-image-gradient1"></div>
                <div className="About-image-gradient2"></div>
                <div className="col-12 col-md-7 About-Info">
                    <h2>ABOUT ME</h2>
                    <p>
                       Hi, I’m Suhaib, a MERN Stack Developer. I am interested in building full-stack web applications using React, Node.js, Express, and MongoDB.

                    </p>
                    <p>
                        I am always ready to learn new technologies and develop real-world projects. I focus on building clean user interfaces and efficient backends.

                    </p>
                    <p>
                        My goal is to grow into a professional full-stack developer in the future.

                    </p>
                <hr style={{height:'5px',borderRadius:'10px',backgroundColor:'white'}} />

                </div>
            </div>
        </div>
    )
}

export default About