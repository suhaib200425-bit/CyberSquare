import React from 'react'
import './DashBoardCertification.css'
import Certification from '../../../Components/DashboardCertificateCard/CertificateCard'
function DashBoardCertification() {
  return (
    <div className='DashBoardCertification'>
        
        <h5 className='m-0 mt-2'>Certificates</h5>
        <p className='m-0'>Your earned certificates</p>
        <div className="row col-12 cerfications">
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
            <Certification />
        </div>
    </div>
  )
}

export default DashBoardCertification