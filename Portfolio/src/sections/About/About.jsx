import React from 'react'
import './About.css'
function About() {
    return (
        <div className='About'>
            <div className="Content row">
                <div className="col-0 col-md-6">
                    
                </div>
                <div className="col-12 col-md-6">

                    <h3 className='about'>About</h3>
                    <p>
                        Hi, I’m a passionate MERN Stack Developer with a strong interest in building modern, scalable web applications. I specialize in developing full-stack applications using MongoDB, Express.js, React.js, and Node.js.
                    </p>
                    <p>
                        I enjoy turning ideas into real-world projects and continuously improving my coding skills. I have hands-on experience in creating responsive user interfaces, developing REST APIs, and managing databases efficiently.

                    </p>

                    <p>
                        I am always eager to learn new technologies and take on challenging projects that help me grow as a developer. My goal is to build user-friendly and impactful applications that solve real problems.
                    </p>
                    <hr style={{height:'2px',color:'white'}} />
                    <div className="tolls">
<img src="https://i.pinimg.com/736x/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.jpg" alt="" />
<img src="https://i.pinimg.com/736x/fc/da/ff/fcdaff4d3f30005e462d0d3c31cfb691.jpg" alt="" />
<img src="https://i.pinimg.com/1200x/28/b0/d1/28b0d189571e22609f0e9378da7b09a4.jpg" alt="" />
<img src="https://i.pinimg.com/736x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About