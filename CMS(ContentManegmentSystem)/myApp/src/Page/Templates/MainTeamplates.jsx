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
import FeaturedHeroSection from './Featured/FeaturedHeroSection'
import { BentoGridLayout } from './Featured/BentoGridLayout'
import { MagazineStyleLayout } from './Featured/MagazineStyleLayout'
import { MasonryLayout } from './Featured/MasonryLayout'
import { CarouselLayout } from './Featured/CarouselLayout '
import { TimelineLayout } from './Featured/TimelineLayout'
import { HorizontalNewsCards } from './Featured/HorizontalNewsCards'
import { PremiumSaaSLayout } from './Featured/PremiumSaaSLayout'
import { SplitScreenLayout } from './Featured/SplitScreenLayout'
// import { UltimateCMSDashboardLayout } from './Featured/UltimateCMSDashboardLayout.JSX'
import { NetflixLayout } from './Featured/NetflixLayout'
import { AppleLaunchLayout } from './Featured/AppleLaunchLayout'
import { InfiniteScrollLayout } from './Featured/InfiniteScrollLayout'
import { NewspaperLayout } from './Featured/NewspaperLayout'
import { CardStackLayout } from './Featured/CardStackLayout'
import { StoryTimelineLayout } from './Featured/StoryTimelineLayout'
import { HexagonGridLayout } from './Featured/HexagonGridLayout'
import { FloatingIslandsLayout } from './Featured/FloatingIslandsLayout'
import { KnowledgeGraphLayout } from './Featured/KnowledgeGraphLayout'
import { Perspective3DLayout } from './Featured/Perspective3DLayout'
import Stack from './Stack'

function MainTeamplates() {
  return (
    <div>
      
      <p>SplitScreenLayout</p>
      <SplitScreenLayout />
      
      <p>NetflixLayout</p>
      <NetflixLayout />
      
      <p>AppleLaunchLayout</p>
      <AppleLaunchLayout />

      <p>InfiniteScrollLayout</p>
      <InfiniteScrollLayout />
      
      <p>StoryTimelineLayout</p>
      <StoryTimelineLayout />
      
      <p>HexagonGridLayout</p>
      <HexagonGridLayout />
{/*       
      <p>Perspective3DLayout</p>
      <Perspective3DLayout /> */}
      
      {/* <p>FloatingIslandsLayout</p>
      <FloatingIslandsLayout /> */}
      
      {/* <p>KnowledgeGraphLayout</p>
      <KnowledgeGraphLayout /> */}

      
      {/* <p>NewspaperLayout</p>
      <NewspaperLayout /> */}

      <p>CardStackLayout</p>
      <CardStackLayout />



      <p>UltimateCMSDashboardLayout</p>
      {/* <UltimateCMSDashboardLayout /> */}


      <p>HorizontalNewsCards</p>
      <HorizontalNewsCards />

      <p>PremiumSaaSLayout</p>
      <PremiumSaaSLayout />

      <p>TimelineLayout</p>
      <TimelineLayout />

      <p>CarouselLayout</p>
      <CarouselLayout />

      <p>MasonryLayout</p>
      <MasonryLayout />

      <p>MagazineStyleLayout</p>
      <MagazineStyleLayout />
      
      <p>MagazineStyleLayout</p>
      <MagazineStyleLayout />
      
      <p>BentoGridLayout</p>
      <BentoGridLayout />


      <FunctionBtnConverter fn={FeaturedHeroSection} />
      <p>FeaturedHeroSection</p>
      <FeaturedHeroSection />

      
      <FunctionBtnConverter fn={FeaturedHeroSection} />
      <p>FeaturedHeroSection</p>
      <FeaturedHeroSection />

          <FunctionBtnConverter fn={HeroBanner} />
          <p>HeroBanner</p>
      <HeroBanner />

       <FunctionBtnConverter fn={FullscreenHero} />
       <p>FullscreenHero</p>
      <FullscreenHero />
      
      <FunctionBtnConverter fn={HeroVideo} />
      <p>HeroVideo</p>
      <HeroVideo />

      <FunctionBtnConverter fn={SplitHero} />
      <p>SplitHero</p>
      <SplitHero />

      
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