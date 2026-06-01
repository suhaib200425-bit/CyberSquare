function Quotes({
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  backgroundColor = { value: "white" },
  contentColor = { value: "black" },
  imageUrl = { value: "https://i.pinimg.com/1200x/09/a9/b9/09a9b90d45160d6d0ed5494f86f3e982.jpg" },
  qoutes = { value: " Our work does make sense .only if it is a faithful witness of his time" },
  director = { value: "Jean-Philippe Nuel, Director" },
  borderRadius = { value: "15px" }
}) {
  const isMobile = window.innerWidth < 768;

  return (
    <section className="w-full bg-white" style={{
      backgroundColor: backgroundColor.value,
      color: contentColor.value,
      padding: isMobile ? mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px"
    }}>
      <div className="mx-auto grid max-w-[1050px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.15fr] md:gap-16">
        <div className="relative max-w-[420px] pl-8  sm:pl-10">
          <span className="absolute left-0 top-[-10px] text-[48px] leading-none">
            &ldquo;
          </span>

          <blockquote dangerouslySetInnerHTML={{ __html: qoutes.value }} className="font-serif text-[28px] italic leading-[1.08] tracking-[-0.03em] sm:text-[34px]">

          </blockquote>

          <p className="mt-5 text-[12px] font-semibold ">

          </p>

          <span className="absolute bottom-[-18px] right-2 text-[42px]  leading-none sm:right-8">
            &rdquo;
          </span>
        </div>

        <div style={{
          borderRadius: borderRadius.value
        }} className="h-[190px] w-full overflow-hidden bg-[#f1f1f1] sm:h-[220px] md:h-[245px]">
          <img

            src={imageUrl.value}
            alt="Person arranging photos on a white wall"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Quotes
