import React from 'react'
import './Service.css'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
function Service() {
  return (
    <div className='Service'>
        <h2>My <span>Services</span></h2>
        <p className='servicePara'>“Comprehensive digital solutions tailored to your business needs.”</p>
        <div className="row col-12">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            {/* <ServiceCard />
            <ServiceCard />
            <ServiceCard /> */}
        </div>
    </div>
  )
}

export default Service