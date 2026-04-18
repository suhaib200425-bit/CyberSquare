import React, { useEffect, useState } from 'react'
import './CourseDetailsPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Courses, DefalutImage, ProfileImage } from '../../assets/assets';
import axios from 'axios';
import { BASEURL, CourseApi } from '../../assets/Api';

const CourseDetails = () => {
    const Navigate = useNavigate()
    const { CourseId } = useParams()
    const [Course, setCourse] = useState({})

    const getCourse = async () => {
        try {
            
            console.log('GET ONE COURSE');
            const response = await axios.get(`${CourseApi}/${CourseId}?populate=*`)
            console.log(response.data);
            
            console.log('GET ONE COURSE END');
            return {
                status: true,
                course: response.data.data
            }

        } catch (error) {
            console.error(error.response.data || error.message);
            return {
                status: false,
                course: error.response.data
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0,0)
        Promise.all([getCourse()]).then((result) => {
            
            
            if (result[0].status) {
                setCourse(result[0].course)
            }
        })
    }, [CourseId])
    return (
        <div>
            {
                Course &&
                <>
                    {/* MAIN SECTION */}
                    <div className="container py-5">
                        <div className="row">
                            {/* LEFT SIDE */}
                            <div className="col-md-8">
                                <p className="text-muted cursor-pointer" onClick={() => {
                                    Navigate(-1)
                                }}>← Back to Courses</p>

                                <span className="badge bg-light text-dark me-2">
                                    {Course.category?.Title}
                                </span>
                                <span className="badge bg-secondary">{Course.Level}</span>

                                <h1 className="fw-bold mt-3">
                                    {Course.Title}
                                </h1>

                                <p className="text-muted">
                                    {Course.Description}
                                </p>

                                <p>
                                    <i style={{ color: 'orange' }} class="bi bi-star-fill"></i> {Course.Rating} ({Course.reviews} Reviews) • {Course.students} Student
                                </p>

                                <div className="d-flex align-items-center mt-3">
                                    <img
                                        src={ ProfileImage}
                                        className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                                        style={{ width: "40px", height: "40px" }}
                                    />
                                    <div className="ms-2">
                                        <p className="mb-0 fw-bold">{'comming..'}</p>
                                        <small className="text-muted">Instructor</small>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE CARD */}
                            <div className="col-md-4">
                                <div className="card shadow p-3">
                                    <img
                                        src={ Course.Image?`${BASEURL}${Course.Image?.url}`:DefalutImage}
                                        className="card-img-top rounded"
                                        alt="course"
                                    />

                                    <div className="card-body">
                                        {
                                            Course.price?.Discounted != 0 ?
                                                <>
                                                    <h3 className="fw-bold">${Course.price?.Discounted}/-</h3>
                                                    <p className="text-muted text-decoration-line-through">
                                                        ${Course.price?.Original}/-
                                                    </p>
                                                </> :
                                                <h5 className="fw-bold" style={{ color: 'green' }}>Free</h5>

                                        }


                                        <button className="btn btn-primary w-100">
                                            {/* Continue Learning */} By Now
                                        </button>

                                        <div className="mt-3 text-muted">
                                            <p>⏱ {Course.Duration}</p>
                                            <p>📚 {Course.Lessons} lessons in {Course.Section} sections</p>
                                            <p>📊 {Course.Level}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default CourseDetails;