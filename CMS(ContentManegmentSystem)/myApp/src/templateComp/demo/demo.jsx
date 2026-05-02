import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import LatestPost from '../LatestePost/LatestPost'
import './Demo.css'
import Heading from '../Heading/Heading'
function Demo() {
  return (
    <div className='Demo'>
    
    <HeroSection/>
    <Heading />
    <LatestPost />
    </div>
  )
}

export default Demo