import React, { useState } from 'react'
import './NavBar.css'
function NavBar() {
    const [Active, setActive] = useState('HOME')
    return (
        <div className='NavBar'>
            <p onClick={()=>{
                setActive('HOME')
            }}><a className={Active=='HOME'?'Active':''} >HOME</a></p>
            <p onClick={()=>{
                setActive('ABOUT')
            }}><a className={Active=='ABOUT'?'Active':''} >ABOUT</a></p>
            <p onClick={()=>{
                setActive('SERVICE')
            }}><a className={Active=='SERVICE'?'Active':''} >SERVICE</a></p>
            <p onClick={()=>{
                setActive('CONTECT')
            }}><a className={Active=='CONTECT'?'Active':''} >CONTECT</a></p>
        </div>
    )
}

export default NavBar