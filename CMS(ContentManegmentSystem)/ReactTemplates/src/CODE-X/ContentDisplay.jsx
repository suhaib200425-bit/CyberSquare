function ContentDisplay({
  
  backgroundColor = { value: "white" },
  mobilePadding = { value: "" },
  desktopPadding = { value: "" },
  mainTitle = {value:"We make sure your idea &amp; creation delivered properly"},
  mainTextColor={value:"black"},
  leftSubTitle={value:"Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus. Sed sagittis nonnunc ac malesuada. Quisque ut eleifend urna. Etiam nec porttitor erat, vel ullamcorpererat. Fusce euismod ipsum eget nunc pulvinar feugiat. <br/> <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
  rightSubTitle={value:"Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus. Sed sagittis nonnunc ac malesuada. Quisque ut eleifend urna. Etiam nec porttitor erat, vel ullamcorpererat. Fusce euismod ipsum eget nunc pulvinar feugiat. <br/> <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
  subTextColor={value:"grey"}
}) {
  const isMobile = window.innerWidth < 768;

  return (
    <section className="w-full bg-white " style={{
      backgroundColor:backgroundColor.value,
      padding:isMobile?mobilePadding.value || "30px 10px" :desktopPadding.value || "30px 100px"
    }}>
      <div className="mx-auto max-w-[980px]">
        <h2 dangerouslySetInnerHTML={{__html:mainTitle.value}} style={{
          color:mainTextColor.value
        }} className="max-w-[620px] text-[30px] font-extrabold leading-[1.15] tracking-normal sm:text-[42px]">
          
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20">
          <p
          dangerouslySetInnerHTML={{__html:leftSubTitle.value}}
           style={{
            color:subTextColor.value
          }} className="text-[13px] font-semibold leading-[1.75] text-[#77736c]">
            
          </p>
          <p
          dangerouslySetInnerHTML={{__html:rightSubTitle.value}}
           style={{
            color:subTextColor.value
          }} className="text-[13px] font-semibold leading-[1.75] text-[#77736c]">
            
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContentDisplay
