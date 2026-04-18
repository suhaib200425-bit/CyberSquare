import React from 'react'
import './DashBoardWishlist.css'
import DashboardWishlistItam from '../../../Components/DashboardWishlistItam/DashboardWishlistItam'
function DashBoardWishlist() {
  return (
    <div className='DashBoardWishlist'>
        
        <h5 className='m-0 mt-2'>Wishlist</h5>
        <p className='m-0'>Courses you've saved for later</p>
        <div className="allwhishlist">
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
            <DashboardWishlistItam/>
        </div>
    </div>

  )
}

export default DashBoardWishlist