import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import LatestPost from '../LatestePost/LatestPost'
import './Demo.css'
import Heading from '../Heading/Heading'
import ImageTemplate from '../ImageTemplate/ImageTemplate'
import PostList from '../Post/PostList'
import SingleArticlePage from '../SingleArticlePage/SingleArticlePage'
import ImageAndContent from '../ImageAndContent/ImageAndContent'
import ContactDetailAndForm from '../ContactDetailAndForm/ContactDetailAndForm'
import ContactSection from '../ContectSection/ContactSection'
import ContactTree from '../ContactTree/ContactTree'
import Auth from '../Auth/Auth'
import AuthOne from '../AuthOne/AuthOne'
import NavBarOne from '../NavBarOne'
import Categories from '../Categories/Categories'
import FooterOne from '../footerOne/FooterOne'
import FooterTwo from '../footerOne/FooterTwo'
import ModernHero from '../HeroSectionOne/HeroSectionOne'
import HeroSectionTwo from '../HeroSectionTwo/HeroSection'
import FeaturedArticlesSection from '../FeaturedArticlesSection/FeaturedArticlesSection'
import NewsSection from '../NewsSection/NewsSection'
import TrendingNewsSection from '../TrendingSection/TrendingSection'
import HeroAnimated from '../HeroAnimated/HeroAnimated'
import NavBarTwo from '../NavBarOne'
function Demo() {
  return (
    <div className='Demo'>
      <NavBarTwo />
      <HeroAnimated/>
      
      <ContactTree />
      <ContactSection />
      <SingleArticlePage />
      <ContactDetailAndForm />
      {/* <TrendingNewsSection />
      <NewsSection />
      <FeaturedArticlesSection />
      <HeroSection />
      <HeroSectionTwo />
      <ModernHero />
      <FooterOne/>
      <FooterTwo/>
      <ImageAndContent />
      <PostList />
      <Categories />
      <ImageTemplate />
      <LatestPost />
      <NavBarOne />
      <AuthOne/>
      <Auth />
      <Heading /> */}

    </div>
  )
}

export default Demo