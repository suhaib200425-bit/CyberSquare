import React from 'react'
import './Indro.css'
import NavBar from '../components/NavBar/NavBar'
import { ProfileImage } from '../assets/assets'
function Indro() {
    return (
        <div className='Indro'>
                    <NavBar />
                
            <div className="Content row">
                
                <div className="col-12 col-md-6 ProfileInfo">
                    <h2>SUHAIB-K</h2>
                    <p>WEB DEVELOPER</p>
                    <button>DOWNLOAD CV</button>
                </div>
                <div className="col-12 col-md-6 PrfileImage">
                    <img src={ProfileImage} alt="suhaib" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Indro