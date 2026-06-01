import React from 'react'

function BannerSection({
    desktopHegiht = { value: "90vh" },
    mobileHegiht = { value: "50vh" },
    desktopMargin = { value: "40px 0px" },
    mobileMargin = { value: "" },
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    borderRadius = { value: "" },
    rowAline = { value: "center" },
    colAline = { value: "center" },
    textALine = { value: "center" },
    imageUrl = { value: "https://picsum.photos/1920/1080" },
    title = { value: "We Always Make <br /> The Best" },
    subTitle = { value: "orem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Maecenas id odio placerat," },
    btnText = { value: "Read Me" },
    btnColor = { value: "white" },
    btnTextColor = { value: "black" }
}) {
    const pagePadding = "20px 0px"
    const isMobile = window.innerWidth < 768;

    return (
        <section style={{
            padding: isMobile ? mobileMargin.value : desktopMargin.value
        }} >
            <div
                className="relative min-h-[330px] overflow-hidden bg-cover bg-center flex"
                style={{
                    alignItems: rowAline.value,
                    justifyContent: colAline.value,
                    minHeight: isMobile ? mobileHegiht.value || "maxContent" : desktopHegiht.value || "maxContent",
                    padding: isMobile ? mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px",
                    borderRadius: borderRadius.value,
                    backgroundImage: `url(${imageUrl.value})`,
                }}
            >
                <div className="absolute inset-0 bg-black/55"></div>

                <div className="relative z-10 mx-auto h-full"
                    style={{ padding: pagePadding }}
                >
                    <div className="flex  h-full flex-col items-center justify-center text-center" style={{

                    }}>
                        <h1
                            dangerouslySetInnerHTML={{ __html: title.value }}
                            style={{
                                textAlign: textALine.value
                            }}
                            className="text-[46px] font-extrabold leading-tight tracking-normal text-white sm:text-[64px]"

                        ></h1>

                        <p
                            dangerouslySetInnerHTML={{ __html: subTitle.value }}
                            style={{
                                textAlign: textALine.value
                            }}
                            className="mt-4 text-[15px] font-semibold text-black-500"
                        ></p>

                        {
                            btnText.value &&
                            <button
                                style={{
                                    backgroundColor: btnColor.value,
                                    color: btnTextColor.value
                                }}
                                type="button"
                                className="mt-4 rounded-full bg-white px-5 py-3 text-[14px] font-extrabold text-black transition hover:bg-white/85"
                            >
                                {btnText.value}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection