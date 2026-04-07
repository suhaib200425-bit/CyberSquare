import React from 'react'
import './Service.css'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { EmailIcon, MobileIcon, TechIcon, UIUX_Design_Icon, WEB_Design_Icon, WebIcon } from '../../assets/assets'
function Service() {
  return (
    <div className='Service'>
      <h2>My <span>Services</span></h2>
      <p className='servicePara'>“Comprehensive digital solutions tailored to your business needs.”</p>
      <div className="row col-12">
        <ServiceCard
          image={WebIcon}
          title={"Web Development"}
          content={"Custom web applications built with modern technologies for optimal performance and user experience."} />
        <ServiceCard
          image={TechIcon}
          title={"Technical Writing"}
          content={"Clear and comprehensive documentation to help users understand and utilize your products effectively."} />
        <ServiceCard
          image={MobileIcon}
          title={"Mobile Development"}
          content={"Native and cross-platform mobile apps that deliver seamless experiences on all devices."} />
        <ServiceCard
          image={EmailIcon}
          title={"Email Marketing"}
          content={"Strategic email campaigns designed to engage your audience and drive conversions."} />
        <ServiceCard
          image={UIUX_Design_Icon}
          title={"UI/UX Design"}
          content={"Intuitive and visually appealing designs that enhance user satisfaction and engagement."} />
        <ServiceCard
          image={WEB_Design_Icon}
          title={"Web Design"}
          content={"Modern and responsive website designs tailored to reflect your brand identity."} />

      </div>
    </div>
  )
}

export default Service