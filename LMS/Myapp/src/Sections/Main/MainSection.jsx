import React from 'react'
import './MainSection.css'
function MainSection() {
    return (
        <div className='MainSection'  >
            <h1 className='text-center main-hed'>Unlock Your Potential with <br /> <span>World-Class</span> Learning</h1>
            <p className='text-center main-pera'>Access premium courses from top industry experts. Build real skills, earn certificates,<br /> and accelerate your career with our cutting-edge learning platform.</p>
            <div className="btns">
                <button className="ExploreBtn">Explore Course</button>
                <button className="FreeBtn">Start Free Trial</button>
            </div>
            <div className="OtherInfo">
                <p>200+ Courses</p>
                <p>50K+ Students</p>
                <p>Expert Instructors</p>
            </div>
        </div>
    )
}

export default MainSection