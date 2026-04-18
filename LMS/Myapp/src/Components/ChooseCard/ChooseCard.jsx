import React from 'react'
import './ChooseCard.css'
function ChooseCard({ Title, Description, Icon, Course, Students, Rating, instructor, changeCol }) {
    return (
        <div className={`p-2 col-12 ${changeCol ? 'col-md-6' : 'col-md-4'} `} >
            <div className="ChooseCare" style={{ padding: changeCol ? '10px' : '' }}>
                <div className={instructor ? 'ImageDiv' : 'IconDiv'} >
                    {
                        instructor ?
                            <img src={Icon} alt="" srcSet="" /> :
                            Icon
                    }
                </div>

                <h5 className='mt-2'>{Title}</h5>
                <p className='m-0'>{Description}</p>

                {
                    instructor && <div className="mt-2 instructorsDetails">
                        <div className="">
                            {Course}  courses
                        </div>

                        <div className="">
                            <span className='fw-700'>{Students}</span> students
                        </div>

                        <div className="">
                            <i class="bi bi-star-fill"></i>
                            <span className='ms-1'>{Rating}</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ChooseCard