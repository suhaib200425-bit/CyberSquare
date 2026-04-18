import React from 'react'
import './DashBoardMain.css'
import IconBox from '../../../Components/DashboardIconBox/IconBox'
import LearingCard from '../../../Components/DashboardLearingCard/LearingCard'
function DashBoardMain({Title,SubTitle}) {
  return (
    <div className='DashBoardMain'>
        <h5 className='m-0 mt-2'>{Title}</h5>
        <p className='m-0'>{SubTitle}</p>
        <div className="status row col-12">
          <IconBox Icon={<i class="bi bi-book-half"></i>} Title={'Enrolled Courses'} Count={2} />
          <IconBox Icon={<i class="bi bi-check2-circle"></i>} Title={'Completed'} Count={1} />
          <IconBox Icon={<i class="bi bi-arrow-up-right"></i>} Title={'Avg Progress'} Count={3} />
          <IconBox Icon={<i class="bi bi-award"></i>} Title={'Certificates'} Count={5} />
        </div>

        <div className="learningcard row col-12">
          <div className="hed">
            <p>Continue Learning</p>
            <button>View All</button>
          </div>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
          <LearingCard/>
        </div>
    </div>
  )
}

export default DashBoardMain