import React from 'react'
import FeaturedSection from './items/FeaturedSection'
import FashionTrendingSection from './items/FashionTrendingSection'
import PostsCategory from './items/PostsCategory'

function Main() {
  return (
    <div>
      <PostsCategory />
      <FashionTrendingSection />
      <FeaturedSection />
    </div>
  )
}

export default Main