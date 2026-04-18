import React, { useEffect, useState } from 'react'
import './MyCourses.css'
import MyCoursesCard from '../../../Components/MyCoursesCard/MyCoursesCard'
import axios from 'axios'
import { CourseApi } from '../../../assets/Api'
function MyCourses() {
    const [myCourses, setMyCourses] = useState([])
    useEffect(() => {
        const getMyCourses = async () => {
            try {
                const response = await axios.get(`
            ${CourseApi}?
            filters[Auther][documentId][$eq]=bstdwabe11cgigvcrtgnzbis
            &populate=*
            `)
                return {
                    status: true,
                    data: response.data.data
                }
            } catch (error) {
                return {
                    status: false,
                    error: error.response.data || error.message
                }
            }
        }

        Promise.all([getMyCourses()]).then(result => {
            if (result[0].status) {
                setMyCourses(result[0].data)
            } else {
                console.log(result[0].error);

            }
        })
    }, [])
    return (
        <div className='MyCourses'>

            <h5 className='m-0 mt-2'>My Courses</h5>
            <p className='m-0'>Manage your courses</p>
            <div className="row col-12 mt-2">
                {
                    myCourses&&myCourses.map(elem=>{
                        console.log(elem);
                        return  <MyCoursesCard elem={elem}/>
                    })
                }
            </div>
        </div>
    )
}

export default MyCourses