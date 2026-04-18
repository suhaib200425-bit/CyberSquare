import React from 'react'
import './AboutPage.css'
import Banner from '../../Components/Banner/Banner'
import ChooseCard from '../../Components/ChooseCard/ChooseCard'
function AboutPage() {
  return (
    <div className='AboutPage'>
        <Banner Title={'About LearnHub'} Description={'Empowering learners worldwide with accessible, high-quality education.'} />
        <div className="row content">
            <div className="col-6">
                <h2>Our Mission</h2>
                <p>
                    At LearnHub, we believe that education should be accessible to everyone, everywhere. Our platform connects passionate instructors with eager learners, providing the tools and environment needed for transformative learning experiences.
                </p>
                <p>
                    Founded in 2024, we've grown to serve over 50,000 students across 120+ countries, offering 200+ courses spanning technology, design, business, and creative fields.
                </p>
            </div>
            <div className="col-6 row">
                <ChooseCard Title={'200+'} Description={'Courses'} Icon={<i class="bi bi-book-half"></i>} changeCol/>
                <ChooseCard Title={'200+'} Description={'Courses'} Icon={<i class="bi bi-book-half"></i>} changeCol/>
                <ChooseCard Title={'200+'} Description={'Courses'} Icon={<i class="bi bi-book-half"></i>} changeCol/>
                <ChooseCard Title={'200+'} Description={'Courses'} Icon={<i class="bi bi-book-half"></i>} changeCol/>
            </div>
        </div>
    </div>
  )
}

export default AboutPage