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
function Demo() {
  return (
    <div className='Demo'>
      <NavBarOne />
      <AuthOne/>
      <Auth />
      <ContactTree />
      <ContactSection />
      <ContactDetailAndForm />
      <ImageAndContent />
      <SingleArticlePage />
      <PostList />
      <HeroSection />
      <Heading />
      <LatestPost />
      <ImageTemplate />

    </div>
  )
}

export default Demo