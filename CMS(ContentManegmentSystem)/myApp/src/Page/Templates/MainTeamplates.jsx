import React from 'react'
import FeaturedSection from './items/FeaturedSection'
import FashionTrendingSection from './items/FashionTrendingSection'
import PostsCategory from './items/PostsCategory'
import CategoryWisePopular from './items/CategoryWisePopular'
import LatestPostOne from './items/LatestPostOne'
import FunctionBtnConverter from './FunctionBtnConverter'
import AuthOne from './AuthenticationForms/AuthOne'
import SelectedPostsLists from './items/SelectedPostsLists'
import LatestPostTwo from './items/LatestPostTwo'
import LatestPostsThree from './items/LatestPostThree'
import SectionPostListTwo from './items/SectionPostListTwo'
import SmallPostsList from './items/SmallPostsList'
import SelectedPostListThree from './items/SelectedPostListThree'
import SmallPostsListTwo from './items/SmallPostsListTwo'
import SinglePostCard from './items/SinglePostCard'
import { ResponsiveNewsLayoutSingle } from './CODE-X/ResponsiveNewsLayoutSingle'
import { NewsEditorialTemplateSingleFunction } from './CODE-X/NewsEditorialTemplateSingleFunction'
import { LifestyleGridMonolithic } from './CODE-X/LifestyleGridMonolithic'
import HeroSection from './HeroSections/HeroSection'
import HeroBanner from './HeroSections/HeroBanner'
import FullscreenHero from './HeroSections/FullscreenHero'
import HeroVideo from './HeroSections/HeroVideo'
import SplitHero from './HeroSections/SplitHero'
import ParallaxHero from './HeroSections/ParallaxHero'
import SliderHero from './HeroSections/SliderHero'
import CategoryHero from './HeroSections/CategoryHero'
import StatsHero from './HeroSections/StatsHero'
import FloatingHero from './HeroSections/FloatingHero'
import CenteredHero from './HeroSections/CenteredHero'
import SplitScreenHero from './HeroSections/SplitScreenHero'
import SearchHero from './HeroSections/SearchHero'
import OneStatsHero from './HeroSections/OneStatsHero'

function MainTeamplates() {
  return (
    <div>
      
  <FunctionBtnConverter fn={ParallaxHero} />
  <p>ParallaxHero</p>
      <ParallaxHero />
      
<FunctionBtnConverter fn={SliderHero} />
<p>SliderHero</p>
      <SliderHero />

      <FunctionBtnConverter fn={CategoryHero} />
      <p>CategoryHero</p>
      <CategoryHero />
      
<FunctionBtnConverter fn={StatsHero} />
<p>StatsHero</p>
<StatsHero />

      <FunctionBtnConverter fn={OneStatsHero} />
      <p>OneStatsHero</p>
      <OneStatsHero />

      <FunctionBtnConverter fn={FloatingHero} />
      <FloatingHero />

      <FunctionBtnConverter fn={CenteredHero} />
      <CenteredHero />
      
      <FunctionBtnConverter fn={SearchHero} />
      <SearchHero />
      
      <FunctionBtnConverter fn={SearchHero} />
      <SearchHero />

      <FunctionBtnConverter fn={SplitScreenHero} />
      <SplitScreenHero />


      





<FunctionBtnConverter fn={SplitHero} />
      <SplitHero />
      <FunctionBtnConverter fn={HeroVideo} />
      <HeroVideo />
      <FunctionBtnConverter fn={FullscreenHero} />
      <FullscreenHero />

      <FunctionBtnConverter fn={HeroBanner} />
      <HeroBanner />

      <FunctionBtnConverter fn={HeroSection} />
      <HeroSection />

      <FunctionBtnConverter fn={LifestyleGridMonolithic} />
      <LifestyleGridMonolithic />

      <FunctionBtnConverter fn={NewsEditorialTemplateSingleFunction} />
      <NewsEditorialTemplateSingleFunction />

      <FunctionBtnConverter fn={LatestPostTwo} />
      <LatestPostTwo />

      <FunctionBtnConverter fn={ResponsiveNewsLayoutSingle} />
      <ResponsiveNewsLayoutSingle />

      <FunctionBtnConverter fn={SinglePostCard} />
      <SinglePostCard />

      <FunctionBtnConverter fn={SmallPostsListTwo} />
      <SmallPostsListTwo />

      <FunctionBtnConverter fn={SelectedPostListThree} />
      <SelectedPostListThree />

      <FunctionBtnConverter fn={SmallPostsList} />
      <SmallPostsList />

      <FunctionBtnConverter fn={SectionPostListTwo} />
      <SectionPostListTwo />

      <FunctionBtnConverter fn={LatestPostsThree} />
      <LatestPostsThree />



      <FunctionBtnConverter fn={SelectedPostsLists} />
      <SelectedPostsLists />
      {/* AUTH SECTION  */}
      <FunctionBtnConverter fn={AuthOne} />
      <AuthOne />
      {/* OTHER SECTIONS */}
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