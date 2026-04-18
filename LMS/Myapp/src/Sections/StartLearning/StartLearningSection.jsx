import React from 'react'
import './StartLearningSection.css'
import { useNavigate } from 'react-router-dom'
function StartLearningSection() {
    const Naviagate = useNavigate()
    return (
        <div className='StartLearningSection'>
            <div className="Content">
                <h1>Start Learning Today</h1>
                <p>Join thousands of students already learning on LearnHub. Get unlimited access <br /> to our premium courses.</p>
                <div className="btns">
                    <button className="leftBtn" onClick={() => {
                        Naviagate('/register')
                    }}>Get Start Free</button>
                    <button className="rightBtn">Browse Courses</button>
                </div>
            </div>
        </div>
    )
}

export default StartLearningSection