import { Vault } from 'lucide-react'
import React from 'react'

function ContentImage({
    shift={value:""},
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    contentColor = { value: "black" },
    subContentColor = { value: "#312d2dc7" },
    btnText = { value: "Contect Us" },
    btnColor = { value: "black" },
    btnTextColor = { value: "white" },
    imageUrl = { value: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop" },
    borderRadius = { value: "10px" },
    mainTitle = { value: "We Always MakeThe Best" },
    subTitle = { value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id odio placerat, convallis neque quis, interdum leo. Nam hendrerit urna nibh, eget sagittis erat varius non. Duis at varius augue. Donec tincidunt iaculis ligula, et maximus elit tincidunt eu." }
}) {
    const isMobile = window.innerWidth < 768;

    return (
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-15" style={{
            color: contentColor.value,
            padding: isMobile ? desktopPadding.value || "30px 10px" : desktopPadding.value || "30px 100px"
        }}>
            {!shift.value&& <div className="overflow-hidden rounded-[5px]" style={{
                borderRadius: borderRadius.value
            }}>
                <img
                    src={imageUrl.value}
                    alt="Video editor working at a studio desk"
                    className="h-[260px] w-full object-cover sm:h-[360px]"
                />
            </div>
            }

            <div>
                <p style={{
                }} className={"mb-3 text-[16px] font-semibold"} dangerouslySetInnerHTML={{ __html: "About Us" }} style={{ color: contentColor.value }} />
                <h2 style={{
                }} className={"line-clamp-2 text-[38px] font-extrabold leading-[1.05] tracking-normal sm:text-[54px]"} dangerouslySetInnerHTML={{ __html: mainTitle.value }} />
                <p style={{
                    color: subContentColor.value
                }} className={"line-clamp-4 mt-6 max-w-[540px] text-[14px] font-medium leading-[1.8]"} dangerouslySetInnerHTML={{ __html: subTitle.value }} />

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
            {shift.value&& <div className="overflow-hidden rounded-[5px]" style={{
                borderRadius: borderRadius.value
            }}>
                <img
                    src={imageUrl.value}
                    alt="Video editor working at a studio desk"
                    className="h-[260px] w-full object-cover sm:h-[360px]"
                />
            </div>
            }

        </div>
    )
}

export default ContentImage