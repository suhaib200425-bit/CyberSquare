function DynamicDreamSection({
    backgroundColor = { value: "#ffffff" },
    contentColor = { value: "#111111" },
    accentColor = { value: "#111111" },
    sideBackgroundColor = { value: "#174760" },
    sectionMaxWidth = { value: "" },
    desktopMargin = { value: "40px 0px" },
    mobileMargin = { value: "24px 10px" },
    desktopPadding = { value: "70px 90px" },
    mobilePadding = { value: "44px 18px" },
    borderRadius = { value: "" },
    leftImageUrl = { value: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop" },
    rightImageUrl = { value: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&auto=format&fit=crop" },
    title = { value: "If you can <em>dream</em> it, we can <em>build</em> it." },
    subTitle = { value: "We adapt a uniquely personalized perspective to each project to deliver stunning spaces of optimal function. Renowned for our architectural understanding and masterful craftsmanship, our portfolio of residential projects" },
    btnText = { value: "Get in touch" },
    btnColor = { value: "#000000" },
    btnTextColor = { value: "#ffffff" },
    imageWidth = { value: "390px" },
    imageHeight = { value: "250px" },
}) {
    const isMobile = window.innerWidth < 768;

    return (
        
        
            <div
                className="w-full overflow-hidden relative mx-auto overflow-hidden"
                style={{
                    
                padding: isMobile ? mobileMargin.value : desktopMargin.value,
                // backgroundColor: sideBackgroundColor.value,
                    maxWidth: sectionMaxWidth.value || "100%",
                    backgroundColor: backgroundColor.value,
                    borderRadius: borderRadius.value,
                    color: contentColor.value,
                    // padding: isMobile ? mobilePadding.value : desktopPadding.value,
                }}
            >
                    <div className="grid min-h-[330px] grid-cols-1 items-center gap-8 md:grid-cols-[250px_1fr_250px]">

                {
                    !isMobile&&
                    <div className="order-2 flex justify-center md:order-1 md:justify-start">
                        <div
                            className="overflow-hidden rounded-br-[34px] rounded-tr-[34px] shadow-[0_16px_34px_rgba(0,0,0,0.13)]"
                            style={{
                                width: isMobile ? "min(100%, 270px)" : imageWidth.value,
                                height: isMobile ? "180px" : imageHeight.value,
                            }}
                        >
                            <img
                                src={leftImageUrl.value}
                                alt="Left feature"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                }
                

                    <div className="order-1 mx-auto max-w-[470px] text-center md:order-2">
                        {/* <div
                            className="mx-auto mb-5 h-5 w-5 rotate-45"
                            style={{ backgroundColor: accentColor.value }}
                        /> */}
                        <h2
                            className="text-[30px] font-normal leading-[1.08] tracking-normal sm:text-[38px]"
                            dangerouslySetInnerHTML={{ __html: title.value }}
                        />
                        <p
                            className="mx-auto mt-5 max-w-[400px] text-[12px] font-medium leading-[1.65]"
                            dangerouslySetInnerHTML={{ __html: subTitle.value }}
                        />

                        {btnText.value && (
                            <button
                                type="button"
                                className="rounded-[10px] mt-6 px-3 py-2 text-[14px] font-semibold transition hover:opacity-85"
                                style={{
                                    backgroundColor: btnColor.value,
                                    color: btnTextColor.value,
                                }}
                            >
                                {btnText.value}
                            </button>
                        )}
                    </div>

                    {
                        !isMobile&&<div className="order-3 flex justify-center md:justify-end">
                        <div
                            className="overflow-hidden rounded-bl-[34px] rounded-tl-[34px] shadow-[0_16px_34px_rgba(0,0,0,0.13)]"
                            style={{
                                width: isMobile ? "min(100%, 270px)" : imageWidth.value,
                                height: isMobile ? "180px" : imageHeight.value,
                            }}
                        >
                            <img
                                src={rightImageUrl.value}
                                alt="Right feature"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    }
                </div>
            </div>
    )
}

export default DynamicDreamSection
