import React from 'react'
import './LearingCard.css'
import { useNavigate } from 'react-router-dom'
function LearingCard() {
    const Navigate =useNavigate()
    return (
        <div className='col-12 col-md-4 p-2'>
            <div className="LearingCard card shadow-sm border-0" >

                {/* Image */}
                <img
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
                    className="card-img-top"
                    alt="course"
                    style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
                />

                {/* Body */}
                <div className="card-body">

                    {/* Category */}
                    <span className="badge bg-light text-dark mb-2">
                        Web Development
                    </span>

                    {/* Title */}
                    <h6 className="card-title fw-semibold">
                        Complete React Developer Bootcamp 2024
                    </h6>

                    {/* Progress */}
                    <div className="d-flex justify-content-between">
                        <small>Progress</small>
                        <small>65%</small>
                    </div>

                    <div className="progress mb-3" style={{ height: "6px" }}>
                        <div
                            className="progress-bar "
                            style={{ width: "95%" }}
                        ></div>
                    </div>

                    {/* Button */}
                    <button className="btn w-100 " onClick={()=>{
                        Navigate(`/dashboard/learn/${'j650twlcepecw9dr9jljs56x'}`)
                    }}>
                        Continue Learning
                    </button>

                </div>
            </div>
        </div>
    )
}

export default LearingCard