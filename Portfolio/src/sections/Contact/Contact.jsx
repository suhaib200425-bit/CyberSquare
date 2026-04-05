import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='Contact'>
        <h3>Contact </h3>
        <form action="" method="post">
            <label htmlFor="">You'r Name</label>
            <input name='name' type="text" required placeholder='Name' />
            <label htmlFor="">You'r Email</label>
            <input name='email' type="email" required placeholder='Email' />
            <label htmlFor="">Message</label>
            <textarea name="message" id="" placeholder='Message' cols="30" rows="7"></textarea>

            <input type="submit" className='submitbtn' value={'Sent Message'}/>
        </form>
    </div>
  )
}

export default Contact