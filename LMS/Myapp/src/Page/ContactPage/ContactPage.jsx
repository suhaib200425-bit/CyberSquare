import React from 'react'
import './ContactPage.css'
import Banner from '../../Components/Banner/Banner'
function ContactPage() {
  return (
    <div className='ContactPage'>
      <Banner Title={'Contact Us'} Description={"Have a question? We'd love to hear from you."} />
      <div className="content row">
        <div className="col-5">
          <div className="contactDetail">
            <div className="icon">
              <i class="bi bi-envelope"></i>
            </div>
            <div className="texts">
              <strong>Email</strong>
              <p className='m-0'>suhaibkoppath66@gmail.com</p>
            </div>
          </div>
          <div className="contactDetail mt-4">
            <div className="icon">
              <i class="bi bi-telephone"></i>
            </div>
            <div className="texts">
              <strong>Phone No</strong>
              <p className='m-0'>+91 9895064141</p>
            </div>
          </div>
          <div className="contactDetail mt-4">
            <div className="icon">
              <i class="bi bi-geo-alt"></i>
            </div>
            <div className="texts">
              <strong>Location</strong>
              <p className='m-0'>pattambi,palakkad</p>
            </div>
          </div>

        </div>
        <div className="col-7 form">
          <form action="" className='col-12'>
            <div className="row ">
              <div className="col-12 col-md-6">
                <input type="text" placeholder='Your Name' />
              </div>
              <div className="col-12 col-md-6">
                <input type="email" placeholder='Your Email' />
              </div>
              <div className="col-12 mt-3">
                
                <input type="email" placeholder='Subject' />
              </div>
              <div className="col-12 mt-3">
                <textarea name="" id="" rows="6" placeholder='Your Message'></textarea>
              </div>
              <div className="sentBtn ms-2 mt-3">
                <i class="bi bi-send"></i>
                <label className='ms-2'> Sent Message</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage