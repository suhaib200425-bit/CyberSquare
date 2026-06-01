import React from 'react'

function ContactFormTwo({
  title = { value: "Get in touch, let <br/> us know how we can help" },
  locationName = { value: "pattambi" },
  locationUrl = {
    value:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.80140969103!2d-0.141588!3d51.503324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052d1c5f9fcb%3A0x3a3c0f0e7d56da58!2sLondon%20Eye!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  },
  mobileNo = { value: "+91 9895064141" },
  email = { value: "suhaibkoppath@gmail.com" },
}) {
  return (
    <div className="w-full px-5 py-20 bg-[#f3f1ef] rounded-[5px]">

      <h2
        className="text-center text-[42px] font-medium text-[#111] mb-[50px] leading-[1.3]"
        dangerouslySetInnerHTML={{ __html: title.value }}
      ></h2>

      <div className="max-w-[1100px] mx-auto bg-white rounded-[24px] p-[30px] flex gap-[30px] items-stretch flex-col lg:flex-row">

        {locationUrl.value && (
          <div className="flex-1">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              src={locationUrl.value}
              loading="lazy"
              allowFullScreen
              className="rounded-[18px] min-h-[400px]"
            ></iframe>
          </div>
        )}

        <form className="flex-1 flex flex-col justify-between">

          <div className="flex flex-col md:flex-row gap-5 mb-5">

            <div className="w-full">
              <label className="block mb-[10px] text-[14px] text-[#222] font-medium">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full border-none outline-none bg-[#f4f4f4] rounded-[14px] p-4 text-[14px]"
              />
            </div>

            <div className="w-full">
              <label className="block mb-[10px] text-[14px] text-[#222] font-medium">
                Email address
              </label>

              <input
                type="email"
                placeholder="Your email address"
                className="w-full border-none outline-none bg-[#f4f4f4] rounded-[14px] p-4 text-[14px]"
              />
            </div>

          </div>

          <div className="w-full">
            <label className="block mb-[10px] text-[14px] text-[#222] font-medium">
              Message
            </label>

            <textarea
              placeholder="Write something..."
              className="w-full border-none outline-none bg-[#f4f4f4] rounded-[14px] p-4 text-[14px] min-h-[220px] resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-5 border-none bg-[#4b63ff] text-white px-6 py-4 rounded-[50px] text-[15px] cursor-pointer transition-all duration-300 hover:bg-[#314cff]"
          >
            Send Message
          </button>

        </form>
      </div>

      <div className="max-w-[1100px] mx-auto mt-[25px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        <div className="bg-white rounded-[18px] p-[22px] flex items-center gap-4">
          <div className="w-[50px] h-[50px] bg-[#16213e] text-white flex items-center justify-center rounded-[14px] text-[20px]">
            <i className="fa-solid fa-envelope"></i>
          </div>

          <div>
            <p className="text-[13px] text-[#777] mb-[5px]">
              Email address
            </p>

            <h4 className="text-[16px] text-[#111] font-semibold">
              {email.value}
            </h4>
          </div>
        </div>

        <div className="bg-white rounded-[18px] p-[22px] flex items-center gap-4">
          <div className="w-[50px] h-[50px] bg-[#16213e] text-white flex items-center justify-center rounded-[14px] text-[20px]">
            <i className="fa-solid fa-phone"></i>
          </div>

          <div>
            <p className="text-[13px] text-[#777] mb-[5px]">
              Phone Number
            </p>

            <h4 className="text-[16px] text-[#111] font-semibold">
              {mobileNo.value}
            </h4>
          </div>
        </div>

        <div className="bg-white rounded-[18px] p-[22px] flex items-center gap-4">
          <div className="w-[50px] h-[50px] bg-[#16213e] text-white flex items-center justify-center rounded-[14px] text-[20px]">
            <i className="fa-solid fa-location-dot"></i>
          </div>

          <div>
            <p className="text-[13px] text-[#777] mb-[5px]">
              Our Location
            </p>

            <h4 className="text-[16px] text-[#111] font-semibold">
              {locationName.value}
            </h4>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactFormTwo