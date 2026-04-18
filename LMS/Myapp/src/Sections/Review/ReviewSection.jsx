import React from 'react'
import './ReviewSection.css'
import ReviewCard from '../../Components/ReviewCard/ReviewCard'
function ReviewSection() {
  return (
    <div className='ReviewSection'>
        <h3>What Our Students Say</h3>
        <p>Join thousands of satisfied learners</p>
        <div className="StudentsReviews row col-12">
<ReviewCard />
<ReviewCard />
<ReviewCard />
<ReviewCard />
        </div>
    </div>
  )
}

export default ReviewSection