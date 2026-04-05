import React from 'react'
import './Skills.css'
import SkillGraph from '../../components/SkillGraph/SkillGraph'
function Skills() {
  return (
    <div className='Skills'>
        <h6>SKILLS</h6>
        <h3 className='text-center'> 
            I Work Hard to Improve My <br />
            Skills Regularly
        </h3>
        <div className="row col-12 mt-4 skillsGraph">
            <SkillGraph lang={'HTML'} Per={'90%'}  />
            <SkillGraph lang={'CSS'} Per={'95%'}  />
            <SkillGraph lang={'JAVA SCRIPT'} Per={'89%'}  />
            <SkillGraph lang={'REACT JS'} Per={'97%'}  />
        </div>
    </div>
  )
}

export default Skills