import React from 'react'
import './DashBoardLearning.css'
import LearingCard from '../../../Components/DashboardLearingCard/LearingCard'
function DashBoardLearning() {
  return (
    <div className='DashBoardLearning'>

        <h5 className='m-0 mt-2'>My Learning</h5>
        <p className='m-0'>Your enrolled courses</p>
        <div className="learningCourses row col-12 mt-3">

          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
        </div>
    </div>
  )
}

export default DashBoardLearning