
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
import AboutUsSection from './codeX'
import Imagebox from './imagebox'
import Quotes from './CODE-X/Quotes'
import HeroSectionImageContent from './CODE-X/HeroSectionImageContent'
import ContentDisplay from './CODE-X/ContentDisplay'
import BannerSection from './CODE-X/BannerSection'
import ContentImage from './CODE-X/ContentImage'
import { useEffect } from 'react'
import ContactPage from './CODE-X/ContactPage'
import ContactForm from './CODE-X/ContactForm'
import ContactFormTwo from './CODE-X/ContactFormTwo'

function App() {

  return (
    <div className="" onClick={() => {
      const jsonString = HeroSectionImageContent.toString();
      console.log(jsonString);
    }}>
      <p>ContactFormTwo</p>
      <ContactFormTwo />
      <p>ContactForm</p>
      <ContactForm />
      <p>ContactPage</p>
      <ContactPage/>
      <p>ContentImage</p>
      <ContentImage />
      <p>BANNER</p>
      <BannerSection />
      <p>ContentDisplay</p>
      <ContentDisplay />
      <p>HeroSectionImageContent</p>
      <HeroSectionImageContent />
      <p>Quotes</p>
      <Quotes />
      <p>CodeX</p>
      <AboutUsSection />
      {/* <p>imagebox</p> */}
      <Imagebox />

      <CategoriesSection />

      <FeaturedSection />
      <p>FeaturedPosts</p>
      <FeaturedPosts />
      <p>MovieNewsCard</p>
      <MovieNewsCard />
      <p>PostCategory</p>
      <PostCategory />
      <p>QuickStories</p>
      <QuickStories />
      <p>LatestModel</p>
      <LatestModel />
      <p>SmallNewsCards</p>
      <SmallNewsCards />
      <p>FashionTrendingSection</p>
      <FashionTrendingSection />
      <p>NewStoriesPosts</p>
      <NewStoriesPosts />
      <p>categoryWise</p>
      <CategoryWise />
      <hr />
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
