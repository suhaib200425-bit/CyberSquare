import React from 'react'
import './DashBoardProfile.css'
import { ProfileImage } from '../../../assets/assets'
function DashBoardProfile() {
  return (
    <div className='DashBoardProfile'>
            <h5 className='m-0 mt-2'>Profile Settings</h5>
            <p className='m-0'>Manage your account</p>
            <div className="col-8 profile">
                <div className="profileDiv ProfileInfo">
                    <img src={ProfileImage} alt="" />
                    <div className="profileInfo">
                        <strong>john Doe</strong>
                        <p>john@example.com</p>
                    </div>
                </div>
                <div className="profileDiv Personal">
                    <p>Personal Information</p>
                    <form  className="col-12 row">
                        <div className="col-6">
                            <label htmlFor="">Full Name</label><br />
                            <input type="text" value={'jon'}/>
                        </div>
                        <div className="col-6">
                            <label htmlFor="">Email</label><br />
                            <input type="text" value={'john@example.com'} disabled/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="">Phone Number</label>
                            <input type="text" placeholder='+91 9895064141'/>
                        </div>
                        <button className='sumbitbtn ms-2' >'Save Change</button>
                    </form>
                </div>
                <div className="profileDiv password">
                     <p>Change Password</p>
                     <div className="col-12">
                        <label htmlFor="">Current Password</label><br />
                        <input type="password"  />
                     </div>
                     <div className="col-12">
                        <label htmlFor="">New Password </label><br />
                        <input type="password"  />
                     </div>
                     <div className="col-12">
                        <label htmlFor="">Confirm Password</label><br />
                        <input type="password"  />
                     </div>

                     
                        <button className='updatebtn ms-0 mt-2' >Update Password</button>
                </div>

            </div>
    </div>
  )
}

export default DashBoardProfile