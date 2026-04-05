import React from 'react'
import './SkillGraph.css'
function SkillGraph({lang,Per}) {
  return (
    <div className='SkillGraph col-12 col-md-6 p-2'>
        <div className="topbar">
            <p className='lang'>{lang}</p>
            <p className='per'>{Per}</p>
        </div>
        <div className="fullBar">
            <div className="perBar" style={{width:Per}}></div>
        </div>
    </div>
  )
}

export default SkillGraph