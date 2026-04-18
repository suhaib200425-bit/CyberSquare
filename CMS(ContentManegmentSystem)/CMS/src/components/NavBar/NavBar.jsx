import React, { useState } from "react";
import './NavBar.css'
import { ProfileImage } from "../../assets/assets";
import useStore from "../../Context/Zustand";
function Navbar() {
  const {SetActiveLeftMenu}=useStore()
  return (
    <div className="Navbar">

      <div className="leftSide">
        <i onClick={()=>{
          SetActiveLeftMenu()
        }} class="fa-solid fa-bars-staggered"></i>
        {/* <div className="logo" style={{backgroundImage:`url(${ProfileImage})`}}>
          
        </div> */}
        <span className="AdminName">Logo</span>
      </div>
      <div className="rightSide">
        <div className="profileimage"style={{backgroundImage:`url(${ProfileImage})`}}></div>
        <div className="ProfileName">
          <span>Suhaib k</span>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;