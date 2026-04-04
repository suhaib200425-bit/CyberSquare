import React from 'react'
import './Indro.css'
import NavBar from '../components/NavBar/NavBar'
import { ProfileImage } from '../assets/assets'
import InfoCard from '../components/InfoCard/InfoCard'
function Indro() {
    return (
        <>
            <div className='Indro'>
                <div className="ProfileImage">
                    <img src={"https://i.pinimg.com/736x/62/16/9f/62169fb4f961f71ff689f1d6a215dc6f.jpg"} alt="" />
                </div>
                <div className="ProfileInfo">
                    <h1>SUHAIB-K</h1>
                    <p>Web Develeper</p>
                </div>

            </div>
            <div className="row OtherContent">
                <div className="col-12 col-md-4">
                    <InfoCard title={'Deeper Skillset'} />
                </div>
                <div className="col-12 col-md-4">
                    <InfoCard title={'Creative Work'} />
                </div>
                <div className="col-12 col-md-4">
                    <InfoCard title={'Strong Dedication'} />
                </div>
            </div>
        </>
    )
}

export default Indro