function AboutUsSection({ 
  desktopPadding = { value: "" },
  mobilePadding = { value: "" },
  backgroundColor = { value: "white" },
  contentColor = { value: "black" },
  mainTitle={value:"About us."},
  leftDemyText={value:"About us.<br/>Our team.<br/>Press."},
  contentText={value:" Studio Marani, communication agency based in Milan, has been created in 2011 from Maurizio Marani after his long term experience with the uberfamous McCann Erickson.Many of his clients, like L&apos;Espresso Group and Radio Deejay, will follow him in this new adventure and many others such as Radio Capital. <br/><br/> After a fortunate encounter with the copywriter and content manager Anna Scardovelli,Studio Marani gains another fundamental member of his creative team. Anna, at that time, was already collaborating with big international brands like Barilla, Volkswagen, Campari, Vodafone, Philips, Kraft, Intesa San Paolo and Fiat, she is a TV  / ADV / Theatre author and founder of the firm &quot;Scrittomisto&quot; in 2000. Valentina De Franco, Project Manager, completes Studio Marani creative team."}
}) {
  const isMobile = window.innerWidth < 768;
  
  return (
    <section style={{
      color:contentColor.value,
      backgroundColor: backgroundColor.value,
      padding: isMobile ? mobilePadding.value || "30px 10px" : desktopPadding.value || "40px 100px"
    }} className="w-full bg-white px-6 py-8 text-[#111111] sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-7 md:grid-cols-[150px_1fr] md:gap-16">
        <div className="pt-16 text-[13px] font-semibold leading-[1.45] md:pt-[72px]">
          <p dangerouslySetInnerHTML={{__html:leftDemyText.value}}></p>
        </div>

        <div>
          <h1 className="mb-10 text-[48px] font-black uppercase leading-none tracking-[-0.04em] sm:text-[58px] md:text-[64px]">
            {mainTitle.value}
          </h1>

          <div className="max-w-[690px] space-y-6 text-[14px] font-semibold leading-[1.55] ">
            <p dangerouslySetInnerHTML={{__html:contentText.value}}>
              
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
