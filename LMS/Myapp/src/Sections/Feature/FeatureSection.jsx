import React, { useEffect, useState } from 'react'
import './FeatureSection.css'
import CourseCard from '../../Components/CourseCard/CourseCard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CourseApi } from '../../assets/Api'
function FeatureSection() {
    const Navigate = useNavigate()
const [Courses,setCourses]=useState([])
    const GetCourses = async () => {
        try {
            const response = await axios.get(`${CourseApi}?populate=*`)
            console.log(response.data);
            return {
                status: true,
                courses: response.data.data
            }
        } catch (error) {
            console.log(error.response.data || error.message);
            return {
                status: false,
                Error: error.response.data
            }
        }

    }
    useEffect(() => {
        Promise.all([GetCourses()]).then((result) => {
            console.log('COURSES');
            console.log(result);
            if(result[0].status){
                setCourses(result[0].courses)
            }
            console.log('COURSES END');
        })
    }, [])
    return (
        <div className='FeatureSection'>
            <div className="FeaturHed">
                <div className="content">
                    <h4 className='m-0'>Featured Courses</h4>
                    <p className='m-0'>Handpicked courses to accelerate your learning</p>
                </div>
                <div className="ViewCourses" onClick={() => {
                    Navigate('/courses')
                }}>
                    <p className='m-0'>View All</p>
                    <i class="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div className="ListOfCourses row col-12">
                {
                    Courses&&Courses.slice(0,4).map(elem => (
                        <CourseCard elem={elem} />
                    ))
                }
            </div>

        </div>
    )
}

export default FeatureSection