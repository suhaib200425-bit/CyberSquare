import React from 'react'
import './Service.css'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
function Service() {
  return (
    <div className='Service'>
      <h2>My <span>Services</span></h2>
      <p className='servicePara'>“Comprehensive digital solutions tailored to your business needs.”</p>
      <div className="row col-12">
        <ServiceCard
          title={"Web Development"}
          content={"Custom web applications built with modern technologies for optimal performance and user experience."} />
        <ServiceCard
          title={"Technical Writing"}
          content={"Clear and comprehensive documentation to help users understand and utilize your products effectively."} />
        <ServiceCard
          title={"Mobile Development"}
          content={"Native and cross-platform mobile apps that deliver seamless experiences on all devices."} />
        <ServiceCard
          title={"Email Marketing"}
          content={"Strategic email campaigns designed to engage your audience and drive conversions."} />
        <ServiceCard
          title={"Email Marketing"}
          content={"Strategic email campaigns designed to engage your audience and drive conversions."} />
        <ServiceCard
          title={"Email Marketing"}
          content={"Strategic email campaigns designed to engage your audience and drive conversions."} />

      </div>
    </div>
  )
}

export default Service