
import HighlightOne from './Highlight/HighlightOne/HighlightOne'
import './App.css'
import HeroFour from './HeroSections/HeroFour/HeroFour'
import HeroOne from './HeroSections/HeroOne/HeroOne'
import HeroThree from './HeroSections/HeroThree/HeroThree'
import HeroTwo from './HeroSections/HeroTwo/HeroTwo'
import LatestPostFour from './LatestPostsSection/LatestPostFour/LatestPostFour'
import LatestPostOne from './LatestPostsSection/LatestPostOne/LatestPostOne'
import LatestPostsFive from './LatestPostsSection/LatestPostsFive/LatestPostsFive'
import LatestPostThree from './LatestPostsSection/LatestPostThree/LatestPostThree'
import LatestPostTwo from './LatestPostsSection/LatestPostTwo/LatestPostTwo'
import PopularPostsList from './PopularList/PopularListOne'
import PopularListTwo from './PopularList/PopularListTwo'
import CategoriesSection from './PopularList/CategoriesSection'
import FeaturedSection from './PopularList/FeaturedSection'
import CategoryWise from './categoryWise/categoryWise'
import SmallNewsCards from './categoryWise/SmallCards'
import MustReadSection from './categoryWise/listWise'
import MovieNewsCard from './categoryWise/Other'
import FeaturedPosts from './categoryWise/njn'
import NewStoriesPosts from './categoryWise/bog'
import FashionTrendingSection from './categoryWise/njno'
import GillionTopSection from './TopSections/GillionTopSection'
import LatestModel from './categoryWise/newone'
import QuickStories from './categoryWise/QuickStories'
import PostCategory from './categoryWise/PostCategory'

function App() {

  return (
    <div className="">
      <p>PostCategory</p>
      <PostCategory />
      <p>QuickStories</p>
      <QuickStories />
      <p>LatestModel</p>
      <LatestModel />
      <p>SmallNewsCards</p>
      <SmallNewsCards />
      <p>MovieNewsCard</p>
      <MovieNewsCard />
      <p>FeaturedPosts</p>
      <FeaturedPosts />
      <p>FashionTrendingSection</p>
      <FashionTrendingSection />
      <p>NewStoriesPosts</p>
      <NewStoriesPosts />
      <p>categoryWise</p>
      <CategoryWise/>
      <hr />
      <FeaturedSection />
      <CategoriesSection />
      <PopularListTwo />
      <PopularPostsList />
      <HighlightOne />
      <LatestPostsFive />
      <HeroFour />
      <LatestPostThree />
      <LatestPostTwo />
      <LatestPostOne />
      <HeroOne />
      <HeroTwo />
      <HeroThree />
      <LatestPostFour />
    </div>
  )
}

export default App
