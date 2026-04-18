import React from 'react'
import { ProfileImage } from '../../assets/assets'
import './ReviewCard.css'
function ReviewCard() {
    return (
        <div className='col-12 col-md-3 p-2'>
            <div className="ReviewCard">
                <div className="stars">
                    <i style={{ color: 'orange' }} class="bi bi-star-fill"></i>
                    <i style={{ color: 'orange' }} class="bi bi-star-fill"></i>
                    <i style={{ color: 'orange' }} class="bi bi-star-fill"></i>
                    <i style={{ color: 'orange' }} class="bi bi-star-fill"></i>

                </div>
                <p>"The data science course is world-class. The hands-on projects and real-world examples made complex concepts easy to understand."</p>
                <div className="student">
                    <img src={ProfileImage} alt="" srcset="" />
                    <div className="">
                        <strong className='m-0'>Username</strong>
                        <br />
                        <label>courses</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard