import React from 'react'
import './Indro.css'
import InfoCard from '../components/InfoCard/InfoCard'
function Indro() {
    return (
        <>
            <div className='Indro col-12'>
                <div className="ProfileImage">
                    <img src={"https://i.pinimg.com/736x/62/16/9f/62169fb4f961f71ff689f1d6a215dc6f.jpg"} alt="" />
                </div>
                <div className="ProfileInfo">
                    <h1>SUHAIB-K</h1>
                    <p>Web Develeper</p>
                </div>

            </div>
            <div className="row OtherContent col-12">
                <div className="col-12 col-md-4">
                    <InfoCard title={'Deeper Skillset'} des={" A deeper skillset enables solving complex problems and adapting to evolving challenges.Continuously "} />
                </div>
                <div className="col-12 col-md-4">
                    <InfoCard title={'Creative Work'} des={"Creative projects built with modern technologies, focused on user-friendly and impactful design."} />
                </div>
                <div className="col-12 col-md-4">
                    <InfoCard title={'Strong Dedication'} des={"Dedicated to delivering high-quality work with continuous learning, and a passion for exceeding expectations."} />
                </div>
            </div>
        </>
    )
}

export default Indro