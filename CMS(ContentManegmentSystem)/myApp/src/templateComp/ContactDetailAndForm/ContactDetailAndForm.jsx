import React from 'react'
import './ContactDetailAndForm.css'
function ContactDetailAndForm({
  topPera = { value: "WERE HERE TO HELP YOU" },
  title = { value: "Discuss Your Needs And Issue" },
  email = { value: "suhaibkoppath66@gmail.com" },
  contact = { value: "+91 9895064141" }
}) {
  return (
    <div className='flex gap-[10px] min-h-screen max-md:block'>

      <div className="flex flex-col justify-center w-1/2 max-md:w-full">

        <p className='text-[15px] text-[rgba(88,85,85,0.918)]'>
          {topPera.value}
        </p>

        <h1 className='leading-none w-[70%] text-[50px] font-[700] max-md:text-[30px] max-md:w-full'>
          {title.value}
        </h1>

        <div className="webview">

          <div className="flex mt-[10px] gap-[10px]">

            <div className="icon">
              <i className="fa-solid fa-envelope text-[25px] max-md:text-[19px]"></i>
            </div>

            <div className="Contect">
              <h5 className="title">Email</h5>
              <p>{email.value}</p>
            </div>

          </div>

          <div className="flex mt-[10px] gap-[10px]">

            <div className="icon">
              <i className="fa-solid fa-phone text-[25px] max-md:text-[19px]"></i>
            </div>

            <div className="Contect">
              <h5 className="title">Phone No</h5>
              <p>{contact.value}</p>
            </div>

          </div>

        </div>

      </div>

      <div className="flex flex-col justify-center w-1/2 max-md:w-full">

        <form action="" className='w-full p-[20px] rounded-[10px] max-md:p-0'>

          <p className='mt-[10px]'>Name</p>

          <input
            type="text"
            name='name'
            placeholder='Enter the Name'
            className='w-full h-[40px] text-[18px] outline outline-1 outline-black px-[10px] py-[5px] rounded-[5px]'
          />

          <p className='mt-[10px]'>Email</p>

          <input
            type="email"
            name='email'
            placeholder='Enter the Email'
            className='w-full h-[40px] text-[18px] outline outline-1 outline-black px-[10px] py-[5px] rounded-[5px]'
          />

          <p className='mt-[10px]'>Message</p>

          <textarea
            name="message"
            cols="30"
            rows="6"
            placeholder='Enter the Message'
            className='w-full text-[18px] outline outline-1 outline-black px-[10px] py-[5px] rounded-[5px]'
          ></textarea>

          <button className='px-[50px] py-[10px] rounded-[10px] bg-black text-white'>
            Sent
          </button>

        </form>

      </div>

    </div>
  )
}


export default ContactDetailAndForm