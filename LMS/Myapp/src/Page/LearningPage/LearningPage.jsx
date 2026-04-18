
import React, { useEffect, useState } from "react";
import './LearningPage.css'
import { useNavigate } from "react-router-dom";
import { DemoVideo } from "../../assets/assets";
import axios from "axios";
import { SectionApi } from "../../assets/Api";
const courseData = {
    title: "Complete React Developer Bootcamp 2024",
    progress: 20,
    sections: [
        {
            title: "Getting Started",
            lessons: [
                {
                    id: 1,
                    title: "Introduction & Course Overview",
                    duration: "8:30",
                    completed: true,
                },
                {
                    id: 2,
                    title: "Setting Up Your Environment",
                    duration: "12:15",
                    completed: true,
                },
                {
                    id: 3,
                    title: "Course Resources & Downloads",
                    duration: "5:00",
                    completed: true,
                },
            ],
        },
        {
            title: "Core Concepts",
            lessons: [
                {
                    id: 4,
                    title: "Understanding the Fundamentals",
                    duration: "15:45",
                    completed: true,
                },
                {
                    id: 5,
                    title: "Practical Examples",
                    duration: "20:00",
                    completed: false,
                },
                {
                    id: 6,
                    title: "Hands-on Exercise",
                    duration: "10:00",
                    completed: false,
                },
            ],
        },
    ],
};


function LearningPage() {
    const Navigate = useNavigate()
    const [Activelesson,setActivelesson]=useState({})
    const [sections,setSections]=useState([])
    const [page, setPage] = useState(false)
    //   const [activeLesson, setActiveLesson] = useState(
    //     courseData.sections[0].lessons[0]
    //   );

    useEffect(()=>{
        const getCourseAnd=async ()=>{
            try{
                const response= await axios.get(
                    `${SectionApi}?
                    filters[course][documentId][$eq]=j650twlcepecw9dr9jljs56x
                    &populate[lessons][populate]=*`
                )
                return {
                    status:true,
                    data:response.data.data
                }
            }catch(error){
                return {
                    status:false,
                    error:error.response.data
                }
            }
        }
        Promise.all([getCourseAnd()]).then(result=>{
            console.log("PROMISE RESUKT");
            
            if(result[0].status) setSections(result[0].data);
            
        })
    },[])

    return (
        <div className="LearningPage row col-12 ">
            <div className={`col-3 ${page ? 'sectionsandlessons' : ''}`}>
                <div className="backtolearning" onClick={() => {
                    Navigate(-1)
                }}>
                    <i class="bi bi-arrow-left-short"></i>
                    <span>Back To My Learning</span>
                </div>
                <div className="Learning-progress-box">
                    <>
                        {courseData.title}
                        <div className="Learning-progress">
                            <div className="mt-1 progressbar">
                                <div className="progressper" style={{ width: `${courseData.progress}%` }}></div>
                            </div>
                            ${courseData.progress}%
                        </div>
                        <hr />
                    </>
                    <div className="allsections">
                        {
                            sections&&sections.map((item => {
                                return <>
                                    <div className="section">
                                        <div className="hed">

                                            <p className="m-0">{item.Title}</p>
                                            <i class="bi bi-caret-right-fill"></i>
                                        </div>
                                        <div className="alllessons">
                                            {
                                                item.lessons.map((elem,i) => {
                                                    const previd=()=>{
                                                        if(0==i) return 0
                                                        return i-1
                                                    }
                                                    
                                                    return <>
                                                        <hr />
                                                        <div className="lesson" onClick={()=>{
                                                            setActivelesson(elem)
                                                        }}>
                                                            {
                                                                elem.isLearn ? <i style={{ color: 'green' }} class="bi bi-check2-circle"></i> : 
                                                                item.lessons[previd()].isLearn?
                                                                <i style={{ color: 'orange' }}  class="bi bi-unlock-fill"></i>:<i style={{ color: 'gray' }} class="bi bi-lock-fill"></i>
                                                            }
                                                            <div className="content">
                                                                {elem.Title} <br />
                                                                <span>{elem.Duration}</span>
                                                            </div>
                                                        </div></>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            }))
                        }

                    </div>
                </div>
            </div>
            <div className={`${page ? 'transition col-12' : ' col-9'}`}>
                <div className="hedline" onClick={() => {
                    setPage(prev => !prev)
                }}>
                    {page ? <i class="bi bi-caret-right-fill"></i> : <i class="bi bi-caret-left-fill"></i>}
                    <span className="ms-2">{Activelesson && Activelesson.title}</span>
                </div>
                <div className="content">
                    <video controls>
                        <source src={DemoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="hed">
                        <div className="">
                            <h6 className="m-0">Hands-on Exercise</h6>
                        <p className="m-0"> video · 20:00</p>
                        </div>
                        <button><i class="bi bi-check2-circle"></i> Mark Complete</button>
                    </div>
                    <div className="Notes">
                        <button><i class="bi bi-download me-2"></i>Download Notes</button>
                        <button><i class="bi bi-download me-2"></i>Resources</button>
                    </div>
                    <hr />
                    <div className="navigateBtns">
                        <button className="prev">Previous</button>
                        <button className="next">Next</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LearningPage;