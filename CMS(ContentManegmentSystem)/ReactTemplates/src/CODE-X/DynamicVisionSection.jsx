function DynamicVisionSection({
    backgroundColor = { value: "#ffffff" },
    contentColor = { value: "#111111" },
    subContentColor = { value: "#666666" },
    sectionMaxWidth = { value: "" },
    desktopMargin = { value: "40px 100px" },
    mobileMargin = { value: "24px 10px" },
    desktopPadding = { value: "0px" },
    mobilePadding = { value: "0" },
    borderRadius = { value: "" },
    imageUrl = { value: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop" },
    imageWidth = { value: "490px" },
    imageHeight = { value: "520px" },
    imageBorderRadius = { value: "20px" },
    imagePosition = { value: "right" },
    title = { value: "Our Vision" },
    paragraphOne = { value: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy." },
    paragraphTwo = { value: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and" },
    paragraphThree = { value: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings." },
    titleSize = { value: "42px" },
    textSize = { value: "13px" },
    columnGap = { value: "90px" },
}) {
    const isMobile = window.innerWidth < 768;
    const isImageFirst = imagePosition.value === "left";
    const paragraphs = [paragraphOne.value, paragraphTwo.value, paragraphThree.value].filter(Boolean);

    const imageBlock = (
        <div className="overflow-hidden" style={{ borderRadius: imageBorderRadius.value }}>
            <img
                src={imageUrl.value}
                alt={title.value.replace(/<[^>]*>/g, "")}
                className="w-full object-cover"
                style={{
                    maxWidth: isMobile ? "100%" : imageWidth.value,
                    height: isMobile ? "320px" : imageHeight.value,
                }}
            />
        </div>
    );

    const contentBlock = (
        <div className="max-w-[430px]">
            <h2
                className="font-extrabold leading-[1.05] tracking-normal"
                style={{
                    color: contentColor.value,
                    fontSize: isMobile ? "34px" : titleSize.value,
                }}
                dangerouslySetInnerHTML={{ __html: title.value }}
            />
            <div className="mt-7 space-y-5">
                {paragraphs.map((paragraph, index) => (
                    <p
                        key={index}
                        className="font-medium leading-[1.75]"
                        style={{
                            color: subContentColor.value,
                            fontSize: textSize.value,
                        }}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <section
            className="w-full overflow-hidden"
            style={{
                backgroundColor: backgroundColor.value,
                padding: isMobile ? mobileMargin.value : desktopMargin.value,
                borderRadius: borderRadius.value,
            }}
        >
            <div
                className="mx-auto grid grid-cols-1 items-center md:grid-cols-2"
                style={{
                    maxWidth: sectionMaxWidth.value || "100%",
                    padding: isMobile ? mobilePadding.value : desktopPadding.value,
                    gap: isMobile ? "34px" : columnGap.value,
                }}
            >
                {isImageFirst ? imageBlock : contentBlock}
                {isImageFirst ? contentBlock : imageBlock}
            </div>
        </section>
    )
}

export default DynamicVisionSection
