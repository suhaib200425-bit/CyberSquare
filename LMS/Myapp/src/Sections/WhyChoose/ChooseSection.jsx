import React from 'react'
import './ChooseSection.css'
import ChooseCard from '../../Components/ChooseCard/ChooseCard'
function ChooseSection() {
  return (
    <div className='ChooseSection'>
        <h3>Why Choose LearnHub?</h3>
        <p>Everything you need for a world-class learning experience</p>
        <div className="ChooseCard row">
            <ChooseCard Title={'Expert-Led Courses'} Description={'Learn from industry professionals with years of real-world experience.'} Icon={<i class="bi bi-book-half"></i>} />
            <ChooseCard Title={'Earn Certificates'} Description={'Get recognized certificates upon completion to boost your career.'} Icon={<i class="bi bi-3-circle-fill"></i>} />
            <ChooseCard Title={'Lifetime Access'} Description={'Access your purchased courses anytime, anywhere, forever.'} Icon={<i class="bi bi-shield-fill-check"></i>} />
          
        </div>
    </div>
  )
}

export default ChooseSection