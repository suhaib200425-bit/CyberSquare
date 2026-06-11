import React from 'react'
import FeaturedSection from './items/FeaturedSection'
import FashionTrendingSection from './items/FashionTrendingSection'
import PostsCategory from './items/PostsCategory'
import CategoryWisePopular from './items/CategoryWisePopular'
import LatestPostOne from './items/LatestPostOne'
import FunctionBtnConverter from './FunctionBtnConverter'

function MainTeamplates() {
  return (
    <div>
      <FunctionBtnConverter fn={LatestPostOne} />
      <LatestPostOne />

      <FunctionBtnConverter fn={CategoryWisePopular} />
      <CategoryWisePopular />

      <FunctionBtnConverter fn={PostsCategory} />
      <PostsCategory />
      
      <FunctionBtnConverter fn={FashionTrendingSection} />
      <FashionTrendingSection />
      
      <FunctionBtnConverter fn={FeaturedSection} />
      <FeaturedSection />
    </div>
  )
}

export default MainTeamplates