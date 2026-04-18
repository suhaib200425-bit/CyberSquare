import React from 'react'
import './DashboardWishlistItam.css'
function DashboardWishlistItam() {
    return (
        <div className='DashboardWishlistItam mt-2'>
            <div className="leftBox">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" alt="" />
                <div className="listcontent">
                    <strong className='m-0 p-0'>AWS Cloud Practitioner Certification Prep</strong>
                    <p className='m-0'>Michael Chen <span className='ms-2'>32h 10m</span></p>
                </div>
            </div>
            <div className="rightBox">
                
            <p className='m-0 amount'>$39.99</p>
            <i class="bi bi-trash3"></i>
            </div>
        </div>
    )
}

export default DashboardWishlistItam