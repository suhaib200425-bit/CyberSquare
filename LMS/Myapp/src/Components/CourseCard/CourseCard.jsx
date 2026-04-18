import React from 'react'
import './CourseCard.css'
import { DefalutImage, ProfileImage } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { BASEURL } from '../../assets/Api'
function CourseCard({ elem, changeCol }) {
    const Navigate = useNavigate()
    return (
        <div key={elem.id} className={`col-12  p-2 ${changeCol ? 'col-md-4' : 'col-md-3'}`}>
            <div className="CourseCard" onClick={() => {
                Navigate(`/courses/${elem.documentId}`)
            }}>
                <img className='CourseImage' onClick={()=>{
                    console.log(`${BASEURL}${elem.Image?.url}`);
                    
                }} src={
                    elem.Image?`${BASEURL}${elem.Image?.url}`:DefalutImage
                } alt="" srcset="" />

                <div className="content">
                    <p className='CategoryTitle'>{elem.category.Title}</p>
                    <h6 className="title">{elem.Title}</h6>
                    <p className="description">{elem.Description}

                    </p>
                    <div className="otherDetails">
                        <div className="">
                            <i class="bi bi-alarm"></i>
                            <span className='ms-1'>{elem.Duration}</span>
                        </div>
                        <div className="">
                            <i class="bi bi-book"></i>
                            <span className='ms-1'> {elem.Lessons} lessons</span>
                        </div>
                    </div>
                    <hr />
                    <div className="instructor">
                        <div className="auther">
                            <img src={ProfileImage} alt="" srcset="" />
                            <span className='ms-1'>{elem.Auther?elem.Auther.username:"Comming"}</span>
                        </div>
                        <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <span className='ms-1'>{elem.Rating}</span>
                        </div>
                    </div>
                    <div className="otherInfo">
                        <div className="">
                            <i class="bi bi-person-fill"></i>
                            <span>{elem.Student}</span>
                            <span>Students</span>
                        </div>
                        <div className="">
                            <span className="rate">${elem.price.Original}</span>
                            <span className="offerrate">${elem.price.Discounted}</span>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CourseCard