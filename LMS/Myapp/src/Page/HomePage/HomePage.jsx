import React from 'react'
import './HomePage.css'
import Category from '../../Components/Category/Category'
import MainSection from '../../Sections/Main/MainSection'
import CategorySection from '../../Sections/Category/CategorySection'
import FeatureSection from '../../Sections/Feature/FeatureSection'
import ChooseSection from '../../Sections/WhyChoose/ChooseSection'
import LearnSection from '../../Sections/Learn/LearnSection'
import ReviewSection from '../../Sections/Review/ReviewSection'
import StartLearningSection from '../../Sections/StartLearning/StartLearningSection'
function HomePage() {
  return (
    <>
      {/* MAIN  */}
      <MainSection/>
      {/* CATEGORY  */}
      <CategorySection/>
      {/* Features  */}
      <FeatureSection/>
      {/* CHOOSE */}
      <ChooseSection />
      {/* LEARN  */}
      <LearnSection />
      {/* REVIEW  */}
      <ReviewSection />
      {/* Start Learning  */}
      <StartLearningSection />
      {/* Footer  */}
    </>
  )
}

export default HomePage