import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import LatestPost from '../LatestePost/LatestPost'
import './Demo.css'
import Heading from '../Heading/Heading'
import ImageTemplate from '../ImageTemplate/ImageTemplate'
import PostList from '../Post/PostList'
import SingleArticlePage from '../SingleArticlePage/SingleArticlePage'
function Demo() {
  return (
    <div className='Demo'>
      <SingleArticlePage />
    <PostList/>
    <HeroSection/>
    <Heading />
    <LatestPost />
    <ImageTemplate />

    </div>
  )
}

export default Demo