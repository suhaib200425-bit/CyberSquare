import React from 'react'
import './MyCoursesCard.css'
import { DefalutImage } from '../../assets/assets'
import { BASEURL } from '../../assets/Api'
function MyCoursesCard({elem}) {
    return (
            <div className="col-md-4 p-2">
                <div className="course-card">

                    {/* <!-- Image --> */}
                    <div className="card-img">
                        <img src={elem.Image?`${BASEURL}${elem.Image?.url}`:DefalutImage} className="img-fluid" />
                    </div>

                    {/* <!-- Content --> */}
                    <div className="card-body">

                        {/* <!-- Top Row --> */}
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="badge bg-light text-dark border">published</span>
                            <span className="price">{elem.price.Discounted!==0?`$${elem.price?.Discounted}`:'FREE'}</span>
                        </div>

                        {/* <!-- Title --> */}
                        <h6 className="title">
                           {elem.Title}
                        </h6>

                        {/* <!-- Meta --> */}
                        <div className="meta">
                            <span>{elem.Student} students</span>
                            <span>{0} lessons</span>
                        </div>

                        {/* <!-- Buttons --> */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <button className="btn btn-outline-secondary w-75">
                                ✏️ Edit
                            </button>

                            <div className="icons">
                                👁️ 🗑️
                            </div>
                        </div>

                    </div>

                </div>
        </div>
    )
}

export default MyCoursesCard