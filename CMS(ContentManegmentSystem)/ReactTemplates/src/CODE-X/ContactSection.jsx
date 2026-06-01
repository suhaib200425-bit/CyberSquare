import { Mail, MapPin, Phone } from 'lucide-react'



function ContactSection({
  title={value:"Get In Touch"},
  backgroundColor={value:"white"},
  contentColor={value:"black"},
  themeColor={value:"#b2cc21"},
  phoneNumber = { value: "+91 9895064141" },
  email = { value: "suhaibkoppath66@gmail.com" },
  place = { value: "pttambi,palakkad, kerala" },
  iconColor ={value :"blackpo"}
}) {

  const contactDetails = [
    {
      icon: <i className={`fa-solid fa-location-arrow text-[${iconColor.value}]`}></i>,
      title: 'Address',
      line: place.value,
    },
    {
      icon: <i className={`fa-solid fa-mobile text-[${iconColor.value}]`}></i>,
      title: 'Phone',
      line: phoneNumber.value,
    },
    {
      icon: <i className={`fa-solid fa-at text-[${iconColor.value}]`}></i>,
      title: 'Email',
      line: email.value,
    },
  ]

  return (
    <section style={{
      backgroundColor:backgroundColor.value,
      color:contentColor.value,
      
    }} className="w-full bg-white px-5 py-16  ">
      <div className="mx-auto grid max-w-[900px] gap-10 md:grid-cols-[250px_1fr] md:items-start">
        <aside>
          <h2 className="mb-8 text-[32px] font-bold leading-tight ">
            {title.value}
          </h2>

          <div className="flex flex-col gap-8">
            {contactDetails.map((item) => {
              const Icon = item.icon
              if (!item.line) return
              return (
                <div key={item.title} className="grid grid-cols-[34px_1fr] gap-4">
                  <span style={{
                    backgroundColor:themeColor.value,
                     boxShadow: `0 8px 18px ${themeColor.value}`
                  }} className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#f45628] text-white shadow-[0_8px_18px_rgba(244,86,40,0.22)]">
                  
                     { item.icon}
                  </span>

                  <div>
                    <h3 className="mb-2 text-[15px] font-semibold leading-none ">
                      {item.title}
                    </h3>
                      <p key={item.line} className="text-[13px] leading-[1.05] ">
                        {item.line}
                      </p>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>

        <form className="grid gap-4 pt-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full name"
              className={`h-11 rounded-[6px] border border-[#eeeeee] bg-white px-4 text-[15px] text-[#111] outline-none transition placeholder:text-[#a8a8a8] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/10`}
            />
            <input
              type="email"
              placeholder="Email Address..."
              className={`h-11 rounded-[6px] border border-[#eeeeee] bg-white px-4 text-[15px] text-[#111] outline-none transition placeholder:text-[#a8a8a8] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/10`}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="tel"
              placeholder="Phone"
              className={`h-11 rounded-[6px] border border-[#eeeeee] bg-white px-4 text-[15px] text-[#111] outline-none transition placeholder:text-[#a8a8a8] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/10`}
            />
            <input
              type="text"
              placeholder="Subject"
              className={`h-11 rounded-[6px] border border-[#eeeeee] bg-white px-4 text-[15px] text-[#111] outline-none transition placeholder:text-[#a8a8a8] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/10`}
            />
          </div>

          <textarea
            placeholder="Your Message"
            className={`min-h-[142px] resize-none rounded-[6px] border border-[#eeeeee] bg-white px-4 py-4 text-[15px] text-[#111] outline-none transition placeholder:text-[#a8a8a8] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/10`}
          />

          <button
          style={{
                    backgroundColor:themeColor.value,
                    color:iconColor.value,
                     boxShadow: `0 8px 18px ${themeColor.value}`

          }}  
            type="submit"
            className="mt-2 h-11 w-[142px] rounded-full bg-[#f45628] text-[12px] font-bold text-white shadow-[0_12px_22px_rgba(244,86,40,0.24)] transition hover:bg-[#df4520] focus:outline-none focus:ring-4 focus:ring-[#f45628]/20"
          >
            Send Message +
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
