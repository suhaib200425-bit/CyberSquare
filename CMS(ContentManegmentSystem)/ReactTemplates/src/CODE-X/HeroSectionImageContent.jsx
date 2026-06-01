function HeroSectionImageContent({
  backgroundColor = { value: "" },
  contentColor = { value: "black" },
  mobileMargin = { value: "" },
  desktopMargin = { value: "" },
  mobilePadding = { value: "" },
  desktopPadding = { value: "" },
  borderRadius = { value: "" },
  bottomBackgroundColor = { value: "#c7c3be96" },
  imageUrlOne = { value: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=700&auto=format&fit=crop" },
  imageUrlTwo = { value: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=700&auto=format&fit=crop" },
  imageUrThree = { value: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=700&auto=format&fit=crop" },
  imageUrlFour = { value: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=700&auto=format&fit=crop" },
}) {
  const images = [
    {
      src: imageUrlOne.value,
      alt: "imageUrlOne",
      className: 'h-[150px] sm:h-[170px] lg:h-[190px]',
    },
    {
      src: imageUrlTwo.value,
      alt: "imageUrlTwo",
      className: 'mt-6 h-[120px] sm:h-[140px] lg:h-[155px]',
    },
    {
      src: imageUrThree.value,
      alt: "imageUrlThree",
      className: 'h-[150px] sm:h-[170px] lg:h-[190px]',
    },
    {
      src: imageUrlFour.value,
      alt: "imageUrlForu",
      className: 'mt-6 h-[120px] sm:h-[140px] lg:h-[155px]',
    },
  ]
  const isMobile = window.innerWidth < 768;

  return (
    <section style={{
      padding: isMobile ? mobileMargin.value : desktopMargin.value
    }} className=" w-full overflow-hidden  text-center">
      <div style={{
        color: contentColor.value,
        backgroundColor: backgroundColor.value,
        padding: isMobile ? mobilePadding.value || "20px 10px" : desktopPadding.value || "30px 100px",
        borderRadius: borderRadius.value
      }} className="relative bg-[#ffdd6a]">
        <div className="pointer-events-none absolute left-1/2 top-8 h-28 w-44 -translate-x-1/2">
          <span style={{
            borderColor: contentColor.value
          }} className="absolute left-1 top-3 h-5 w-5 rotate-45 border-l-[3px] border-t-[3px] " />
          <span style={{
            borderColor: contentColor.value
          }} className="absolute left-[15px] top-7 h-3 w-3 rotate-45 border-r-[3px] border-b-[3px] " />
          <span style={{
            borderColor: contentColor.value
          }} className="absolute right-10 top-1 h-2.5 w-2.5 rounded-full border-[3px] " />
          <span style={{
            borderColor: contentColor.value
          }} className="absolute right-0 top-6 h-4 w-4 rounded-full border-[3px] " />
          <span style={{
            borderColor: contentColor.value
          }} className="absolute right-5 top-16 h-3 w-3 rounded-full border-[3px] " />
        </div>

        <div className="relative z-10 mx-auto max-w-[720px]">
          <h1 className="text-[42px] font-extrabold leading-tight tracking-normal sm:text-[54px]">
            About us
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-[13px] font-semibold leading-[1.7] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-16 grid max-w-[980px] grid-cols-2 gap-5 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {images.map((image) => (
            <div
              key={image.alt}
              className={`overflow-hidden rounded-[10px] bg-white shadow-[0_14px_24px_rgba(88,66,12,0.14)] ${image.className}`}
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div style={{
          backgroundColor: bottomBackgroundColor.value
        }} className="absolute inset-x-0 bottom-0 h-[70px] bg-[#f8f3ea]" />

      </div>
    </section>
  )
}

export default HeroSectionImageContent
