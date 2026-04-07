import React from 'react'
import './About.css'
import { ProfileImage } from '../../assets/assets'
function About() {
    return (
        <div className='About col-12'>
            <h6>About Me</h6>
            <h3>A passinate developer <br /> who loves to code </h3>
            <div className="row mt-2">
                <div className="col-12 col-md-6">
                    <img className='AboutImage' src={ProfileImage} alt="" srcset="" />
                </div>
                <div className="col-12 col-md-6 pt-sm-3">
                    <h5>My Bio</h5>
                    <p>
                        Software developer with a passion for coding
                        Focused on writing clean and efficient code
                        Constantly exploring new tools and frameworks
                        Problem solver with analytical thinking
                        Dedicated to continuous growth in techS
                        oftware developer with a passion for coding
                        Focused on writing clean and efficient code
                        Constantly exploring new tools and frameworks
                        Problem solver with analytical thinking
                        Dedicated to continuous growth in tech
                    </p>
                    <div className="row table mt-2 col-11 ms-1">
                        <div className="col-6">
                            <h6 className="mt-2 text-start">Name</h6>
                            <p className='p-0 m-0'>Suhaib</p>
                            <h6 className="mt-2 text-start">Phone no</h6>
                            <p className='p-0 m-0'>+91 9895064141</p>
                            <h6 className="mt-2 text-start">Email</h6>
                            <p className='p-0 m-0'>suhaib200425@gmail.com</p>
                        </div>
                        <div className="col-6">
                            
                            <h6 className="mt-2 text-start">Address</h6>
                            <p className='p-0 m-0'>koppath</p>
                            <h6 className="mt-2 text-start d-none">asa</h6>
                            <p className='p-0 m-0 d-none'>+91 </p>
                            <h6 className="mt-2 text-start">BOD</h6>
                            <p className='p-0 m-0'>25/09/2004</p>
                        </div>

                    </div>
                    <button className='aboutBtn'> Download  CV</button>
                </div>
            </div>
        </div>
    )
}

export default About