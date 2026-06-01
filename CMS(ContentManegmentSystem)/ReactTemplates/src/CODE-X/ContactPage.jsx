import {
  Briefcase,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Search,
  Send,
} from 'lucide-react'

function ContactPage() {
  const navItems = ['Home', 'About Us', 'Services', 'Pages', 'Contact Us']

  const contactCards = [
    {
      icon: Phone,
      title: '(+876) 765 665',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.',
      className: 'bg-[#9ec6c9] text-white',
    },
    {
      icon: Mail,
      title: 'mail@influenca.id',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus',
      className: 'bg-[#d9edf2] text-[#243333]',
    },
    {
      icon: MapPin,
      title: 'London Eye London',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.',
      className: 'bg-white text-[#243333] shadow-[0_15px_45px_rgba(51,76,82,0.12)]',
    },
  ]

  const footerLinks = {
    Navigation: ['Home', 'Pages', 'About Us', 'Services'],
    'Quick Link': ['Contact Us', 'FAQs', 'Booking', 'Pages'],
    Services: ['Home', 'Contact', 'Blog', '404'],
  }

  return (
    <main className="min-h-screen bg-white font-sans text-[#203030]">
      

      <section className="relative overflow-hidden bg-[#d9edf2] px-5 pb-24 pt-8 text-center sm:px-8 lg:px-28">
        <div className="pointer-events-none absolute left-[12%] top-14 hidden h-16 w-28 opacity-25 md:block">
          {[0, 1, 2, 3, 4].map((item) => (
            <span
              key={item}
              className="absolute h-9 w-9 rotate-45 border-r-2 border-t-2 border-[#6f959a]"
              style={{ left: `${item * 18}px` }}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute right-[11%] top-44 hidden h-16 w-28 opacity-25 md:block">
          {[0, 1, 2, 3, 4].map((item) => (
            <span
              key={item}
              className="absolute h-9 w-9 rotate-45 border-r-2 border-t-2 border-[#6f959a]"
              style={{ left: `${item * 18}px` }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-[760px]">
          <h1 className="text-[52px] font-black leading-tight tracking-normal text-[#142222] sm:text-[76px]">
            Contact Us
          </h1>
          <div className="mx-auto mt-5 flex w-44 items-center gap-2">
            {[0, 1, 2, 3, 4].map((item) => (
              <span key={item} className="h-3 flex-1 rounded-full border-t-2 border-[#6d9298]" />
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-[520px] text-[13px] font-semibold leading-[1.7] text-[#729096]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>

      {/* <section className="relative z-10 mx-auto -mt-10 max-w-[960px] rounded-t-[18px] bg-white px-6 py-8 sm:px-10">
        <div className="grid grid-cols-2 items-center gap-8 text-[#879499] md:grid-cols-4">
          {['logoipsum', 'LOGOIPSUM', 'LOGOIPSUM', 'LOGOIPSUM'].map((logo, index) => (
            <div key={`${logo}-${index}`} className="flex items-center justify-center gap-2">
              <span className="h-8 w-8 rounded-full border-[5px] border-[#9aa7aa]" />
              <span className="text-[20px] font-bold tracking-normal">{logo}</span>
            </div>
          ))}
        </div>
      </section> */}

      <section className="mx-auto grid max-w-[960px] gap-10 px-6 py-16 lg:grid-cols-[1fr_330px] lg:px-0">
        <form className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <input
              type="email"
              placeholder="Email"
              className="h-14 rounded-[15px] bg-[#d9edf2] px-7 text-[16px] font-semibold text-[#4d6f74] outline-none placeholder:text-[#7b989d]"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="h-14 rounded-[15px] bg-[#d9edf2] px-7 text-[16px] font-semibold text-[#4d6f74] outline-none placeholder:text-[#7b989d]"
            />
          </div>
          <input
            type="text"
            placeholder="Name"
            className="h-14 rounded-[15px] bg-[#d9edf2] px-7 text-[16px] font-semibold text-[#4d6f74] outline-none placeholder:text-[#7b989d]"
          />
          <textarea
            placeholder="Message"
            className="min-h-[140px] size-none rounded-[15px] bg-[#d9edf2] px-7 py-5 text-[17px] font-semibold text-[#4d6f74] outline-none placeholder:text-[#7b989d]"
          />
          <button
            type="submit"
            className="h-14 w-40 rounded-full bg-[#79aeb3] text-[18px] font-bold text-white transition hover:bg-[#609ba1]"
          >
            Submit Button
          </button>
        </form>

        <aside className="rounded-[24px] bg-[#6fa4aa] bg-[linear-gradient(135deg,rgba(58,114,120,0.92),rgba(129,183,188,0.78))] p-8 text-white shadow-[0_18px_45px_rgba(55,95,100,0.16)]">
          <h2 className="text-[24px] font-extrabold">Our Newsletters</h2>
          <p className="mt-5 text-[13px] font-semibold leading-[1.7] text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <input
            type="email"
            placeholder="Email"
            className="mt-8 h-12 w-full rounded-full bg-white px-6 text-[13px] font-semibold text-[#55777c] outline-none placeholder:text-[#8ca6aa]"
          />
          <button
            type="button"
            className="mt-4 h-12 w-full rounded-full bg-[#102020] text-[13px] font-bold text-white transition hover:bg-[#233738]"
          >
            Submit Button
          </button>
        </aside>
      </section>

      <section className="mx-auto grid max-w-[960px] gap-9 px-6 pb-12 md:grid-cols-3 lg:px-0">
        {contactCards.map((card) => {
          const Icon = card.icon
          return (
            <article key={card.title} className={`rounded-[20px] p-8 ${card.className}`}>
              <Icon size={42} strokeWidth={1.6} />
              <h3 className="mt-6 text-[23px] font-extrabold">{card.title}</h3>
              {/* <p className="mt-5 text-[13px] font-semibold leading-[1.7] opacity-80">{card.text}</p> */}
            </article>
          )
        })}
      </section>

      <section className="mx-auto max-w-[960px] px-6 pb-24 lg:px-0">
        <div className="h-[250px] overflow-hidden rounded-[18px] bg-[#d9edf2]">
          <iframe
            title="London Eye London map"
            src="https://www.google.com/maps?q=London%20Eye%20London&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      <footer className="bg-[#6c9fa3] px-6 py-20 text-white sm:px-10 lg:px-28">
        <div className="mx-auto grid max-w-[960px] gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <section>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-10 w-8 flex-col gap-1">
                <span className="h-3 w-3 rounded-full bg-white" />
                <span className="h-7 w-5 rounded-sm bg-white" />
              </span>
              <span>
                <span className="block text-[28px] font-black leading-none">Influenca</span>
                <span className="block text-[8px] font-bold tracking-normal text-white/80">
                  Influencer Marketing Agency
                </span>
              </span>
            </a>
            <p className="mt-7 max-w-[250px] text-[13px] font-semibold leading-[1.7] text-white/85">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
            </p>
          </section>

          {Object.entries(footerLinks).map(([title, links]) => (
            <section key={title}>
              <h3 className="text-[16px] font-extrabold">{title}</h3>
              <div className="mt-6 flex flex-col gap-3 text-[13px] font-semibold text-white/85">
                {links.map((link) => (
                  <a href="#" key={link} className="transition hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-[960px] gap-6 border-b border-white/25 pb-12 md:grid-cols-4">
          <p className="flex items-center gap-3 text-[13px] font-bold">
            <MapPin fill="currentColor" size={20} /> London Eye, London UK
          </p>
          <p className="flex items-center gap-3 text-[13px] font-bold">
            <Phone fill="currentColor" size={20} /> (+876) 765 665
          </p>
          <p className="flex items-center gap-3 text-[13px] font-bold">
            <Briefcase fill="currentColor" size={20} /> mail@influenca.id
          </p>
          <div className="flex items-center gap-5">
            <span className="text-[15px] font-black">f</span>
            <span className="text-[15px] font-black">t</span>
            <span className="text-[15px] font-black">yt</span>
            <Send size={18} fill="currentColor" />
          </div>
        </div>

        <p className="mt-8 text-center text-[13px] font-semibold text-white/80">
          &copy; 2023 Influenca Template - All Rights Reserved
        </p>
      </footer>
    </main>
  )
}

export default ContactPage
