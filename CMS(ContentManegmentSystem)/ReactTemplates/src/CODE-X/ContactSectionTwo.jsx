import { Mail, MapPin, Phone } from 'lucide-react'

function ContactSectionTwo({
  backgroundColor={value:"white"},
  contentColor={value:"black"},
  formTitle={value:"Send Message"},
  formSubTitle={value:"Please fill out the form below with your details and message, and our team will get back to you as soon as possible."},
  secContentColor={value:"#fff"},
  btntextColor={value:"white"},
  badge = { value: 'Contact Us' },
  formBadge = { value: 'Get in touch' },
  title = { value: 'Need More Information? Get in Touch' },
  description = {
    value:
      'Contact us today for tailored marketing strategies and expert advice. We are eager to help your business grow',
  },
  phoneNumber = { value: '+1 (123) 456 7890' },
  email = { value: 'info@example.com' },
  address = {
    value: '7164 Barton Terrace, North Penelope, Vermont - 97820, USA',
  },
  themeColor = { value: '#a60dac' },
  darkColor = { value: '#050505' },
}) {
  const details = [
    {
      icon: <i style={{
         color: themeColor.value
      }} class="fa-solid fa-phone"></i>,
      title: 'Phone Number',
      value: phoneNumber.value,
    },
    {
      icon: <i style={{
         color: themeColor.value
      }} class="fa-solid fa-at"></i>,
      title: 'Email Address',
      value: email.value,
    },
    {
      icon: <i style={{
         color: themeColor.value
      }} class="fa-solid fa-location-arrow"></i>,
      title: 'Office Location',
      value: address.value,
      wide: true,
    },
  ]

  return (
    <section  className={`w-full bg-[${backgroundColor.value}] px-5 py-16 text-[${contentColor.value}]`}>
      <div className="mx-auto grid max-w-[940px] gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <aside
          style={{ backgroundColor: darkColor.value }}
          className="rounded-[12px] px-9 py-12 text-white shadow-[0_22px_55px_rgba(7,21,18,0.12)] sm:px-11"
        >
          <span
            style={{ backgroundColor: themeColor.value, color: btntextColor.value }}
            className="inline-flex h-7 items-center rounded-full px-4 text-[11px] font-semibold"
          >
            {badge.value}
          </span>

          <h2 className="mt-7 max-w-[300px] text-[28px] font-bold leading-[1.14] tracking-normal sm:text-[30px]">
            {title.value}
          </h2>

          <p className={`mt-6 max-w-[310px] text-[12px] font-medium leading-[1.75] text-[${secContentColor.value}]`}>
            {description.value}
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {details.map((item) => {

              if (!item.value) return null

              return (
                <div
                  key={item.title}
                  className={`grid grid-cols-[18px_1fr] gap-3 ${item.wide ? 'sm:col-span-2' : ''}`}
                >
                  {item.icon}
                  <div>
                    <h3 className="text-[13px] font-bold leading-none text-white">
                      {item.title}
                    </h3>
                    <p className={`mt-3 max-w-[245px] text-[11px] font-medium leading-[1.65] text-[${secContentColor.value}]`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>

        <div className="pt-1">
          {/* <span className="inline-flex h-7 items-center   px-4 text-[11px] font-semibold text-[#798178]">
            {formBadge.value}
          </span> */}

          <h2 className="mt-5 text-[30px] font-bold leading-tight ">
            {formTitle.value}
          </h2>

          <p className={`mt-5 max-w-[520px] text-[13px] font-medium leading-[1.75] text-[${darkColor.value}]`}>
            {formSubTitle.value}
          </p>

          <form className="mt-7 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name*"
                className={`h-12 rounded-[3px] border border-[#edf0ec] bg-white px-5 text-[13px] font-medium text-[#0d1513] outline-none transition placeholder:text-[#a7aaa6] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/25`}
              />
              <input
                type="text"
                placeholder="Last Name*"
                className={`h-12 rounded-[3px] border border-[#edf0ec] bg-white px-5 text-[13px] font-medium text-[#0d1513] outline-none transition placeholder:text-[#a7aaa6] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/25`}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                placeholder="Email*"
                className={`h-12 rounded-[3px] border border-[#edf0ec] bg-white px-5 text-[13px] font-medium text-[#0d1513] outline-none transition placeholder:text-[#a7aaa6] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/25`}
              />
              <input
                type="tel"
                placeholder="Phone*"
                className={`h-12 rounded-[3px] border border-[#edf0ec] bg-white px-5 text-[13px] font-medium text-[#0d1513] outline-none transition placeholder:text-[#a7aaa6] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/25`}
              />
            </div>

            <textarea
              placeholder="Write Message*"
              className={`min-h-[112px] resize-none rounded-[3px] border border-[#edf0ec] bg-white px-5 py-4 text-[13px] font-medium text-[#0d1513] outline-none transition placeholder:text-[#a7aaa6] focus:border-[${themeColor.value}] focus:ring-2 focus:ring-[${themeColor.value}]/25`}
            />

            <button
              style={{ backgroundColor: themeColor.value, color: btntextColor.value }}
              type="submit"
              className="mt-2 h-11 w-[128px] rounded-full text-[12px] font-bold shadow-[0_12px_24px_rgba(147,244,91,0.32)] transition hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-[#93f45b]/25"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSectionTwo
