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
function Demo() {
  return (
    <div className='Demo'>
      <ModernHero />
      <FooterOne/>
      <FooterTwo/>
      <ImageAndContent />
      <SingleArticlePage />
      <PostList />
      <Categories />
      <ImageTemplate />
      <LatestPost />
      <HeroSection />
      <NavBarOne />
      <AuthOne/>
      <Auth />
      <ContactTree />
      <ContactSection />
      <ContactDetailAndForm />
      <Heading />

    </div>
  )
}

export default Demo