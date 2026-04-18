import React from 'react'
import './LearnSection.css'
import ChooseCard from '../../Components/ChooseCard/ChooseCard'
import { ProfileImage } from '../../assets/assets'
function LearnSection() {
  return (
    <div className='LearnSection'>
        <h3>Learn from the Best</h3>
        <p>Our instructors are leaders in their fields</p>
        <div className="Bestinstructors row">
            <ChooseCard Title={'Expert-Led Courses'} Description={'Learn from industry professionals with years of real-world experience.'} Icon={ProfileImage}
            Course={65} Students={'23+'} Rating={4.5} instructor
             />
            <ChooseCard Title={'Expert-Led Courses'} Description={'Learn from industry professionals with years of real-world experience.'} Icon={ProfileImage}
            Course={65} Students={'23+'} Rating={4.5} instructor
             />
            <ChooseCard Title={'Expert-Led Courses'} Description={'Learn from industry professionals with years of real-world experience.'} Icon={ProfileImage}
            Course={65} Students={'23+'} Rating={4.5} instructor
             />
        </div>
    </div>
  )
}

export default LearnSection