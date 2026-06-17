import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const metadata = {
  dynamicStyleConfiguration: {
    desktopPadding: {
      label: 'Desktop Padding',
      type: 'text',
      value: '48px 50px 42px',
      options: [],
    },
    tabletPadding: {
      label: 'Tablet Padding',
      type: 'text',
      value: '36px 28px',
      options: [],
    },
    mobilePadding: {
      label: 'Mobile Padding',
      type: 'text',
      value: '26px 18px',
      options: [],
    },
    backgroundColor: {
      label: 'Background Color',
      type: 'color',
      value: '#ffffff',
      options: [],
    },
    pageMaxWidth: {
      label: 'Page Max Width',
      type: 'text',
      value: '1770px',
      options: [],
    },
    desktopColumnGap: {
      label: 'Desktop Column Gap',
      type: 'text',
      value: '62px',
      options: [],
    },
    tabletColumnGap: {
      label: 'Tablet Column Gap',
      type: 'text',
      value: '34px',
      options: [],
    },
    mobileColumnGap: {
      label: 'Mobile Column Gap',
      type: 'text',
      value: '34px',
      options: [],
    },
    sectionHeaderFontSize: {
      label: 'Section Header Font Size',
      type: 'text',
      value: '40px',
      options: [],
    },
    mobileSectionHeaderFontSize: {
      label: 'Mobile Section Header Font Size',
      type: 'text',
      value: '31px',
      options: [],
    },
    sectionHeaderColor: {
      label: 'Section Header Color',
      type: 'color',
      value: '#070707',
      options: [],
    },
    sectionHeaderFontWeight: {
      label: 'Section Header Font Weight',
      type: 'text',
      value: '800',
      options: [],
    },
    dividerColor: {
      label: 'Divider Color',
      type: 'color',
      value: '#111111',
      options: [],
    },
    dividerHeight: {
      label: 'Divider Height',
      type: 'text',
      value: '2px',
      options: [],
    },
    dividerTopMargin: {
      label: 'Divider Top Margin',
      type: 'text',
      value: '16px',
      options: [],
    },
    dividerBottomMargin: {
      label: 'Divider Bottom Margin',
      type: 'text',
      value: '38px',
      options: [],
    },
    mobileDividerBottomMargin: {
      label: 'Mobile Divider Bottom Margin',
      type: 'text',
      value: '24px',
      options: [],
    },
    heroHeight: {
      label: 'Hero Height',
      type: 'text',
      value: '278px',
      options: [],
    },
    mobileHeroHeight: {
      label: 'Mobile Hero Height',
      type: 'text',
      value: '250px',
      options: [],
    },
    imageRadius: {
      label: 'Image Radius',
      type: 'text',
      value: '4px',
      options: [],
    },
    heroOverlay: {
      label: 'Hero Overlay',
      type: 'color',
      value: 'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.76) 100%)',
      options: [],
    },
    heroContentPadding: {
      label: 'Hero Content Padding',
      type: 'text',
      value: '24px 26px 25px',
      options: [],
    },
    badgeBackgroundColor: {
      label: 'Badge Background Color',
      type: 'color',
      value: '#4d0f0f',
      options: [],
    },
    badgeTextColor: {
      label: 'Badge Text Color',
      type: 'color',
      value: '#ffffff',
      options: [],
    },
    badgeFontSize: {
      label: 'Badge Font Size',
      type: 'text',
      value: '18px',
      options: [],
    },
    badgeFontWeight: {
      label: 'Badge Font Weight',
      type: 'text',
      value: '800',
      options: [],
    },
    badgePadding: {
      label: 'Badge Padding',
      type: 'text',
      value: '8px 14px',
      options: [],
    },
    badgeRadius: {
      label: 'Badge Radius',
      type: 'text',
      value: '4px',
      options: [],
    },
    heroTitleFontSize: {
      label: 'Hero Title Font Size',
      type: 'text',
      value: '31px',
      options: [],
    },
    mobileHeroTitleFontSize: {
      label: 'Mobile Hero Title Font Size',
      type: 'text',
      value: '25px',
      options: [],
    },
    heroTitleColor: {
      label: 'Hero Title Color',
      type: 'color',
      value: '#ffffff',
      options: [],
    },
    heroBodyFontSize: {
      label: 'Hero Body Font Size',
      type: 'text',
      value: '20px',
      options: [],
    },
    mobileHeroBodyFontSize: {
      label: 'Mobile Hero Body Font Size',
      type: 'text',
      value: '16px',
      options: [],
    },
    heroBodyColor: {
      label: 'Hero Body Color',
      type: 'color',
      value: '#ffffff',
      options: [],
    },
    listGap: {
      label: 'List Gap',
      type: 'text',
      value: '28px',
      options: [],
    },
    listImageWidth: {
      label: 'List Image Width',
      type: 'text',
      value: '222px',
      options: [],
    },
    listImageHeight: {
      label: 'List Image Height',
      type: 'text',
      value: '215px',
      options: [],
    },
    listContentGap: {
      label: 'List Content Gap',
      type: 'text',
      value: '24px',
      options: [],
    },
    titleFontSize: {
      label: 'Title Font Size',
      type: 'text',
      value: '23px',
      options: [],
    },
    mobileTitleFontSize: {
      label: 'Mobile Title Font Size',
      type: 'text',
      value: '20px',
      options: [],
    },
    titleColor: {
      label: 'Title Color',
      type: 'color',
      value: '#050505',
      options: [],
    },
    titleFontWeight: {
      label: 'Title Font Weight',
      type: 'text',
      value: '800',
      options: [],
    },
    excerptFontSize: {
      label: 'Excerpt Font Size',
      type: 'text',
      value: '21px',
      options: [],
    },
    mobileExcerptFontSize: {
      label: 'Mobile Excerpt Font Size',
      type: 'text',
      value: '17px',
      options: [],
    },
    excerptColor: {
      label: 'Excerpt Color',
      type: 'color',
      value: '#4f4f58',
      options: [],
    },
    hotGridGapX: {
      label: 'Hot Grid Gap X',
      type: 'text',
      value: '22px',
      options: [],
    },
    hotGridGapY: {
      label: 'Hot Grid Gap Y',
      type: 'text',
      value: '32px',
      options: [],
    },
    hotImageHeight: {
      label: 'Hot Image Height',
      type: 'text',
      value: '178px',
      options: [],
    },
    mobileHotImageHeight: {
      label: 'Mobile Hot Image Height',
      type: 'text',
      value: '188px',
      options: [],
    },
  },
  
}
export function NewsEditorialTemplateSingleFunction(

  {
    desktopPadding = { value: '30px 100px' },
    tabletPadding = { value: '30px 20px' },
    mobilePadding = { value: '30px 10px' },

    backgroundColor = { value: '#ffffff' },
    pageMaxWidth = { value: '100%' },

    desktopColumnGap = { value: '20px' },
    tabletColumnGap = { value: '34px' },
    mobileColumnGap = { value: '34px' },

    sectionHeaderFontSize = { value: '23px' },
    mobileSectionHeaderFontSize = { value: '31px' },
    sectionHeaderColor = { value: '#070707' },
    sectionHeaderFontWeight = { value: '800' },

    dividerColor = { value: '#111111' },
    dividerHeight = { value: '2px' },
    dividerTopMargin = { value: '16px' },
    dividerBottomMargin = { value: '10px' },
    mobileDividerBottomMargin = { value: '24px' },

    heroHeight = { value: '278px' },
    mobileHeroHeight = { value: '200px' },

    imageRadius = { value: '10px' },

    heroOverlay = {
      value: 'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.76) 100%)',
    },

    heroContentPadding = { value: '24px 26px 25px' },

    badgeBackgroundColor = { value: '#4d0f0f' },
    badgeTextColor = { value: '#ffffff' },
    badgeFontSize = { value: '18px' },
    badgeFontWeight = { value: '800' },
    badgePadding = { value: '8px 14px' },
    badgeRadius = { value: '4px' },

    heroTitleFontSize = { value: '23px' },
    mobileHeroTitleFontSize = { value: '20px' },
    heroTitleColor = { value: '#ffffff' },

    heroBodyFontSize = { value: '19px' },
    mobileHeroBodyFontSize = { value: '17px' },
    heroBodyColor = { value: '#ffffff' },

    listGap = { value: '28px' },

    listImageWidth = { value: '150px' },
    listImageHeight = { value: '90px' },

    listContentGap = { value: '10px' },

    titleFontSize = { value: '23px' },
    mobileTitleFontSize = { value: '16px' },
    titleColor = { value: '#050505' },
    titleFontWeight = { value: '800' },

    excerptFontSize = { value: '16px' },
    mobileExcerptFontSize = { value: '14px' },
    excerptColor = { value: '#4f4f58' },

    hotGridGapX = { value: '22px' },
    hotGridGapY = { value: '32px' },

    hotImageHeight = { value: '135px' },
    mobileHotImageHeight = { value: '188px' },
  }
) {
  const contentData = metadata.dynamicContentData
  const [isMobile, setIsMobile] = useState()
  const [isTable, setIsTablet] = useState()
  const containerRef = useRef(null);
  const categoryWise = [
    {
      category: "Technology",
      posts: [
        {
          banner:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995",
          title: "How AI is Transforming the Future of Work",
          excerpt:
            "Exploring the impact of artificial intelligence on industries and careers.",
          tags: ["NEW", "TECH"],
        },
        {
          banner:
            "https://images.unsplash.com/photo-1535378620166-273708d44e4c",
          title: "Will AI Take Over Jobs or Create New Opportunities?",
          excerpt:
            "Debating the future of employment in the age of AI.",
          tags: ["MAY 12", "AI"],
        },
        {
          banner:
            "https://images.unsplash.com/photo-1518770660439-4636190af475",
          title: "Top 5 Gadgets You Need in 2024",
          excerpt:
            "Our picks for the most innovative devices this year.",
          tags: ["MAY 10", "GADGETS"],
        },
        {
          banner:
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
          title: "Meta Quest 3 Review: The Best VR Headset Yet?",
          excerpt:
            "A deep dive into features, performance, and value.",
          tags: ["MAY 08", "REVIEWS"],
        },
      ],
    },

    {
      category: "Science",

      posts: [
        
        {
          banner:
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
          title: "Meta Quest 3 Review: The Best VR Headset Yet?",
          excerpt:
            "A deep dive into features, performance, and value.",
          tags: ["MAY 08", "REVIEWS"],
        },
        {
          banner:
            "https://images.unsplash.com/photo-1576086213369-97a306d36557",
          title: "Breakthrough in Cancer Research: New Hope for Patients",
          excerpt:
            "Scientists develop a new therapy showing promise in early trials.",
          tags: ["FEATURED"],
        },
        {
          banner:
            "https://images.unsplash.com/photo-1579154204601-01588f351e67",
          title: "New Vaccine Shows 90% Effectiveness in Trials",
          excerpt:
            "A major step forward in fighting emerging diseases.",
          tags: ["MAY 11", "MEDICINE"],
        },
        {
          banner:
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
          title: "How Climate Change is Impacting Ocean Life",
          excerpt:
            "Scientists warn of irreversible damage if action is delayed.",
          tags: ["MAY 09", "ENVIRONMENT"],
        },
      ],
    },
  ];
  const hotTopic = {
    category: "Hot Topic",

    posts: [
      {
        banner: "https://images.unsplash.com/photo-1535378620166-273708d44e4c",
        title: "Global Protests Demand Climate Action",
        excerpt: "Thousands take to the streets worldwide.",
      },
      {
        banner: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        title: "How Communities Build Stronger Together",
        excerpt: "Local initiatives making a real difference.",
      },
      {
        banner: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
        title: "Mental Health Awareness on the Rise",
        excerpt: "Breaking the stigma and promoting well-being.",
      },{
        banner: "https://images.unsplash.com/photo-1535378620166-273708d44e4c",
        title: "Global Protests Demand Climate Action",
        excerpt: "Thousands take to the streets worldwide.",
      },
      {
        banner: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        title: "How Communities Build Stronger Together",
        excerpt: "Local initiatives making a real difference.",
      },
      {
        banner: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
        title: "Mental Health Awareness on the Rise",
        excerpt: "Breaking the stigma and promoting well-being.",
      },
    ],
  };
  const [data, setData] = useState({
    categoryWise: categoryWise,
    hotTopic: hotTopic
  })

  useEffect(() => {
    const updateViewport = () => {
      if (!containerRef.current) return;

      const observer = new ResizeObserver((entries) => {
        const width = entries[0].contentRect.width;

        setIsMobile(width < 768);
        setIsTablet(width < 1180);
      });
    }
    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  return (
    <section
      ref={containerRef}
      className="w-full"
      style={{
        background: backgroundColor.value,
      }}
    >
      <div
        className="mx-auto px-0 py-0"
        style={{
          maxWidth: pageMaxWidth.value,
          padding: isMobile ? mobilePadding.value :
            isTable ? tabletPadding.value : desktopPadding.value,
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-2"
          style={{
            gap: isMobile ? mobileColumnGap.value :
              isTable ? tabletColumnGap.value : desktopColumnGap.value,
          }}
        >
          {data?.categoryWise.map((category, categoryIndex) => (
          
            <div className="min-w-0" key={category.category+categoryIndex}>
              <h2
                className="leading-none  tracking-normal"
                style={{
                  fontSize: sectionHeaderFontSize.value,
                  color: sectionHeaderColor.value,
                  fontWeight: sectionHeaderFontWeight.value,
                }}
              >
                {category?.category}
              </h2>

              <div
                className="w-full"
                style={{
                  height: dividerHeight.value,
                  background: dividerColor.value,
                  marginTop: dividerTopMargin.value,
                  marginBottom: dividerBottomMargin.value,
                }}
              />

              <article
                className="relative isolate overflow-hidden"
                style={{
                  marginBottom: listGap.value,
                  height: heroHeight.value,
                  borderRadius: imageRadius.value,
                }}
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={category?.posts[0]?.banner}
                  alt={category?.posts[0]?.banner}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: heroOverlay.value,
                  }}
                />

                <div
                  className="relative z-10 flex h-full flex-col justify-end"
                  style={{
                    padding: heroContentPadding.value,
                  }}
                >


                  <h3
                    className="whitespace-pre-line leading-[1.08]"
                    style={{
                      fontSize: heroTitleFontSize.value,
                      color: heroTitleColor.value,
                      fontWeight: titleFontWeight.value,
                    }}
                  >
                    {category?.posts[0]?.title}
                  </h3>

                  <p
                    className="mt-1"
                    style={{
                      fontSize: heroBodyFontSize.value,
                      color: heroBodyColor.value,
                    }}
                  >
                    {category?.posts[0]?.excerpt}
                  </p>
                </div>
              </article>

              <div
                className="grid"
                style={{
                  gap: listGap.value,
                }}
              >
                {category?.posts?.slice(1,4).map((article, articleIndex) => (
                  <article
                    key={`${article.title}-${articleIndex}`}
                    className="grid grid-cols-1"
                    style={{
                      gap: listContentGap.value,
                      gridTemplateColumns: `${listImageWidth.value} 1fr`,
                    }}
                  >
                    <img
                      src={article?.banner}
                      alt={article?.banner}
                      className="object-cover"
                      style={{
                        width: listImageWidth.value,
                        height: listImageHeight.value,
                        borderRadius: imageRadius.value,
                      }}
                    />

                    <div className="min-w-0 pt-0">


                      <h3
                        className="line-clamp-3"
                        style={{
                          fontSize: titleFontSize.value,
                          color: titleColor.value,
                          fontWeight: titleFontWeight.value,
                        }}
                      >
                        {article.title}
                      </h3>

                      {/* <p
                        className="mt-1"
                        style={{
                          fontSize: isMobile? mobileExcerptFontSize.value :excerptFontSize.value,
                          color: excerptColor.value,
                        }}
                      >
                        {article.excerpt.value}
                      </p> */}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
          <div className="min-w-0 md:col-span-2 lg:col-span-1">
            <h2
              className=" line-clamp-3 leading-none tracking-normal"
              style={{
                fontSize: sectionHeaderFontSize.value,
                color: sectionHeaderColor.value,
                fontWeight: sectionHeaderFontWeight.value,
              }}
            >
              {data.hotTopic.category}
            </h2>

            <div
              className="w-full"
              style={{
                height: dividerHeight.value,
                background: dividerColor.value,
                marginTop: dividerTopMargin.value,
                marginBottom: dividerBottomMargin.value,
              }}
            />

            <div
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{
                rowGap: hotGridGapY.value,
                columnGap: hotGridGapX.value,
              }}
            >
              {data?.hotTopic?.posts.slice(0,6).map((article,i) => (
                <article className="min-w-0" key={article?.title+i}>
                  <img
                    src={article?.banner}
                    alt={article?.banner}
                    className="w-full object-cover"
                    style={{
                      height: hotImageHeight.value,
                      borderRadius: imageRadius.value,
                    }}
                  />

                  <h3
                    className=" leading-[1] line-clamp-2 mt-1"
                    style={{
                      fontSize: titleFontSize.value,
                      color: titleColor.value,
                      fontWeight: titleFontWeight.value,
                    }}
                  >
                    {article?.title}
                  </h3>

                </article>
              ))}
            </div>
          </div>
        </div>


      </div>

    </section>
  )
}

const modularDefaultProps = {
  dynamicStyleConfiguration: {
    desktopPadding: {
      label: 'Desktop Padding',
      type: 'text',
      value: '48px 50px 42px',
      options: [],
    },
    tabletPadding: {
      label: 'Tablet Padding',
      type: 'text',
      value: '36px 28px',
      options: [],
    },
    mobilePadding: {
      label: 'Mobile Padding',
      type: 'text',
      value: '26px 18px',
      options: [],
    },
    backgroundColor: {
      label: 'Background Color',
      type: 'color',
      value: '#ffffff',
      options: [],
    },
    pageMaxWidth: {
      label: 'Page Max Width',
      type: 'text',
      value: '1770px',
      options: [],
    },
    desktopColumnGap: {
      label: 'Desktop Column Gap',
      type: 'text',
      value: '62px',
      options: [],
    },
    tabletColumnGap: {
      label: 'Tablet Column Gap',
      type: 'text',
      value: '34px',
      options: [],
    },
    mobileColumnGap: {
      label: 'Mobile Column Gap',
      type: 'text',
      value: '34px',
      options: [],
    },
    sectionHeaderFontSize: {
      label: 'Section Header Font Size',
      type: 'text',
      value: '40px',
      options: [],
    },
    mobileSectionHeaderFontSize: {
      label: 'Mobile Section Header Font Size',
      type: 'text',
      value: '31px',
      options: [],
    },
    sectionHeaderColor: {
      label: 'Section Header Color',
      type: 'color',
      value: '#070707',
      options: [],
    },
    sectionHeaderFontWeight: {
      label: 'Section Header Font Weight',
      type: 'text',
      value: '800',
      options: [],
    },
    dividerColor: {
      label: 'Divider Color',
      type: 'color',
      value: '#111111',
      options: [],
    },
    dividerHeight: {
      label: 'Divider Height',
      type: 'text',
      value: '2px',
      options: [],
    },
    dividerTopMargin: {
      label: 'Divider Top Margin',
      type: 'text',
      value: '16px',
      options: [],
    },
    dividerBottomMargin: {
      label: 'Divider Bottom Margin',
      type: 'text',
      value: '38px',
      options: [],
    },
    mobileDividerBottomMargin: {
      label: 'Mobile Divider Bottom Margin',
      type: 'text',
      value: '24px',
      options: [],
    },
    heroHeight: {
      label: 'Hero Height',
      type: 'text',
      value: '278px',
      options: [],
    },
    mobileHeroHeight: {
      label: 'Mobile Hero Height',
      type: 'text',
      value: '250px',
      options: [],
    },
    imageRadius: {
      label: 'Image Radius',
      type: 'text',
      value: '4px',
      options: [],
    },
    heroOverlay: {
      label: 'Hero Overlay',
      type: 'color',
      value: 'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.76) 100%)',
      options: [],
    },
    heroContentPadding: {
      label: 'Hero Content Padding',
      type: 'text',
      value: '24px 26px 25px',
      options: [],
    },
    badgeBackgroundColor: {
      label: 'Badge Background Color',
      type: 'color',
      value: '#4d0f0f',
      options: [],
    },
    badgeTextColor: {
      label: 'Badge Text Color',
      type: 'color',
      value: '#ffffff',
      options: [],
    },
    badgeFontSize: {
      label: 'Badge Font Size',
      type: 'text',
      value: '18px',
      options: [],
    },
    badgeFontWeight: {
      label: 'Badge Font Weight',
      type: 'text',
      value: '800',
      options: [],
    },
    badgePadding: {
      label: 'Badge Padding',
      type: 'text',
      value: '8px 14px',
      options: [],
    },
    badgeRadius: {
      label: 'Badge Radius',
      type: 'text',
      value: '4px',
      options: [],
    },
    heroTitleFontSize: {
      label: 'Hero Title Font Size',
      type: 'text',
      value: '31px',
      options: [],
    },
    mobileHeroTitleFontSize: {
      label: 'Mobile Hero Title Font Size',
      type: 'text',
      value: '25px',
      options: [],
    },
    heroTitleColor: {
      label: 'Hero Title Color',
      type: 'color',
      value: '#ffffff',
      options: [],
    },
    heroBodyFontSize: {
      label: 'Hero Body Font Size',
      type: 'text',
      value: '20px',
      options: [],
    },
    mobileHeroBodyFontSize: {
      label: 'Mobile Hero Body Font Size',
      type: 'text',
      value: '16px',
      options: [],
    },
    heroBodyColor: {
      label: 'Hero Body Color',
      type: 'color',
      value: '#ffffff',
      options: [],
    },
    listGap: {
      label: 'List Gap',
      type: 'text',
      value: '28px',
      options: [],
    },
    listImageWidth: {
      label: 'List Image Width',
      type: 'text',
      value: '222px',
      options: [],
    },
    listImageHeight: {
      label: 'List Image Height',
      type: 'text',
      value: '215px',
      options: [],
    },
    listContentGap: {
      label: 'List Content Gap',
      type: 'text',
      value: '24px',
      options: [],
    },
    titleFontSize: {
      label: 'Title Font Size',
      type: 'text',
      value: '23px',
      options: [],
    },
    mobileTitleFontSize: {
      label: 'Mobile Title Font Size',
      type: 'text',
      value: '20px',
      options: [],
    },
    titleColor: {
      label: 'Title Color',
      type: 'color',
      value: '#050505',
      options: [],
    },
    titleFontWeight: {
      label: 'Title Font Weight',
      type: 'text',
      value: '800',
      options: [],
    },
    excerptFontSize: {
      label: 'Excerpt Font Size',
      type: 'text',
      value: '21px',
      options: [],
    },
    mobileExcerptFontSize: {
      label: 'Mobile Excerpt Font Size',
      type: 'text',
      value: '17px',
      options: [],
    },
    excerptColor: {
      label: 'Excerpt Color',
      type: 'color',
      value: '#4f4f58',
      options: [],
    },
    hotGridGapX: {
      label: 'Hot Grid Gap X',
      type: 'text',
      value: '22px',
      options: [],
    },
    hotGridGapY: {
      label: 'Hot Grid Gap Y',
      type: 'text',
      value: '32px',
      options: [],
    },
    hotImageHeight: {
      label: 'Hot Image Height',
      type: 'text',
      value: '178px',
      options: [],
    },
    mobileHotImageHeight: {
      label: 'Mobile Hot Image Height',
      type: 'text',
      value: '188px',
      options: [],
    },
  },
  
}

function SectionTitle({ title, styleConfig }) {
  return (
    <>
      <h2
        className="leading-none tracking-normal max-sm:text-[var(--mobile-section-header-size)] sm:text-[var(--section-header-size)]"
        style={{
          color: sectionHeaderColor.value,
          fontWeight: sectionHeaderFontWeight.value,
        }}
      >
        {title.value}
      </h2>
      <div
        className="w-full"
        style={{
          height: dividerHeight.value,
          background: dividerColor.value,
          marginTop: dividerTopMargin.value,
          marginBottom: dividerBottomMargin.value,
        }}
      />
    </>
  )
}

function Badge({ badge, styleConfig }) {
  return (
    <span
      className="inline-flex items-center leading-none"
      style={{
        background: badgeBackgroundColor.value,
        color: badgeTextColor.value,
        fontSize: badgeFontSize.value,
        fontWeight: badgeFontWeight.value,
        padding: badgePadding.value,
        borderRadius: badgeRadius.value,
      }}
    >
      {badge.value}
    </span>
  )
}

function HeroCard({ hero, styleConfig }) {
  return (
    <article className="relative isolate mb-[var(--list-gap)] h-[var(--hero-height)] overflow-hidden rounded-[var(--image-radius)] max-sm:h-[var(--mobile-hero-height)]">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={hero.value.imageUrl.value}
        alt={hero.value.imageAlt.value}
      />
      <div className="absolute inset-0" style={{ background: heroOverlay.value }} />
      <div
        className="relative z-10 flex h-full flex-col justify-end"
        style={{ padding: heroContentPadding.value }}
      >
        <div className="mb-14 flex flex-wrap gap-4 max-sm:mb-8">
          {hero.value.badges.value.map((badge, index) => (
            <Badge badge={badge} key={`${badge.value}-${index}`} styleConfig={styleConfig} />
          ))}
        </div>
        <h3
          className="whitespace-pre-line leading-[1.08] tracking-normal max-sm:text-[var(--mobile-hero-title-size)] sm:text-[var(--hero-title-size)]"
          style={{
            color: heroTitleColor.value,
            fontWeight: titleFontWeight.value,
          }}
        >
          {hero.value.title.value}
        </h3>
        <p
          className="mt-2 whitespace-pre-line leading-[1.18] tracking-normal max-sm:text-[var(--mobile-hero-body-size)] sm:text-[var(--hero-body-size)]"
          style={{ color: heroBodyColor.value }}
        >
          {hero.value.excerpt.value}
        </p>
      </div>
    </article>
  )
}

function ArticleRow({ article, styleConfig }) {
  return (
    <article className="grid grid-cols-1 gap-[var(--list-content-gap)] sm:grid-cols-[var(--list-image-width)_1fr]">
      <img
        className="w-full rounded-[var(--image-radius)] object-cover sm:w-[var(--list-image-width)]"
        style={{ height: listImageHeight.value }}
        src={article.imageUrl.value}
        alt={article.imageAlt.value}
      />
      <div className="min-w-0 pt-3 max-sm:pt-0">
        <div className="mb-5 flex flex-wrap gap-4">
          {article.badges.value.map((badge, index) => (
            <Badge badge={badge} key={`${badge.value}-${index}`} styleConfig={styleConfig} />
          ))}
        </div>
        <h3
          className="whitespace-pre-line leading-[1.17] tracking-normal max-sm:text-[var(--mobile-title-size)] sm:text-[var(--title-size)]"
          style={{
            color: titleColor.value,
            fontWeight: titleFontWeight.value,
          }}
        >
          {article.title.value}
        </h3>
        <p
          className="mt-3 whitespace-pre-line leading-[1.28] tracking-normal max-sm:text-[var(--mobile-excerpt-size)] sm:text-[var(--excerpt-size)]"
          style={{ color: excerptColor.value }}
        >
          {article.excerpt.value}
        </p>
      </div>
    </article>
  )
}

function CategoryColumn({ category, styleConfig }) {
  return (
    <div className="min-w-0">
      <SectionTitle title={category.heading} styleConfig={styleConfig} />
      <HeroCard hero={category.hero} styleConfig={styleConfig} />
      <div className="grid gap-[var(--list-gap)]">
        {category.articles.value.map((article) => (
          <ArticleRow article={article} key={article.title.value} styleConfig={styleConfig} />
        ))}
      </div>
    </div>
  )
}

function HotTopicCard({ article, styleConfig }) {
  return (
    <article className="min-w-0">
      <img
        className="h-[var(--hot-image-height)] w-full rounded-[var(--image-radius)] object-cover max-sm:h-[var(--mobile-hot-image-height)]"
        src={article.imageUrl.value}
        alt={article.imageAlt.value}
      />
      <h3
        className="mt-4 whitespace-pre-line leading-[1.12] tracking-normal max-sm:text-[var(--mobile-title-size)] sm:text-[var(--title-size)]"
        style={{
          color: titleColor.value,
          fontWeight: titleFontWeight.value,
        }}
      >
        {article.title.value}
      </h3>
      <p
        className="mt-3 whitespace-pre-line leading-[1.22] tracking-normal max-sm:text-[var(--mobile-excerpt-size)] sm:text-[var(--excerpt-size)]"
        style={{ color: excerptColor.value }}
      >
        {article.excerpt.value}
      </p>
    </article>
  )
}

function HotTopicColumn({ hotTopic, styleConfig }) {
  return (
    <div className="min-w-0 md:col-span-2 lg:col-span-1">
      <SectionTitle title={hotTopic.value.heading} styleConfig={styleConfig} />
      <div className="grid grid-cols-1 gap-y-[var(--hot-gap-y)] sm:grid-cols-2 sm:gap-x-[var(--hot-gap-x)]">
        {hotTopic.value.articles.value.map((article) => (
          <HotTopicCard article={article} key={article.title.value} styleConfig={styleConfig} />
        ))}
      </div>
    </div>
  )
}

export function NewsEditorialTemplateModular(props = modularDefaultProps) {
  const styleConfig = props.dynamicStyleConfiguration
  const contentData = props.dynamicContentData

  return (
    <section
      className="w-full"
      style={{
        '--desktop-padding': desktopPadding.value,
        '--tablet-padding': tabletPadding.value,
        '--mobile-padding': mobilePadding.value,
        '--page-max-width': pageMaxWidth.value,
        '--desktop-column-gap': desktopColumnGap.value,
        '--tablet-column-gap': tabletColumnGap.value,
        '--mobile-column-gap': mobileColumnGap.value,
        '--section-header-size': sectionHeaderFontSize.value,
        '--mobile-section-header-size': mobileSectionHeaderFontSize.value,
        '--hero-height': heroHeight.value,
        '--mobile-hero-height': mobileHeroHeight.value,
        '--image-radius': imageRadius.value,
        '--list-gap': listGap.value,
        '--list-image-width': listImageWidth.value,
        '--list-content-gap': listContentGap.value,
        '--title-size': titleFontSize.value,
        '--mobile-title-size': mobileTitleFontSize.value,
        '--excerpt-size': excerptFontSize.value,
        '--mobile-excerpt-size': mobileExcerptFontSize.value,
        '--hot-gap-x': hotGridGapX.value,
        '--hot-gap-y': hotGridGapY.value,
        '--hot-image-height': hotImageHeight.value,
        '--mobile-hot-image-height': mobileHotImageHeight.value,
        background: backgroundColor.value,
      }}
    >
      <div className="mx-auto max-w-[var(--page-max-width)] px-0 py-0 sm:p-[var(--tablet-padding)] lg:p-[var(--desktop-padding)] max-sm:p-[var(--mobile-padding)]">
        <div className="grid grid-cols-1 gap-[var(--mobile-column-gap)] lg:grid-cols-[1fr_1fr_1fr] lg:gap-[var(--desktop-column-gap)] md:grid-cols-2 md:gap-[var(--tablet-column-gap)]">
          {contentData.categories.value.map((category) => (
            <CategoryColumn
              category={category}
              key={category.heading.value}
              styleConfig={styleConfig}
            />
          ))}
          <HotTopicColumn hotTopic={contentData.hotTopic} styleConfig={styleConfig} />
        </div>
      </div>
    </section>
  )
}

export { modularDefaultProps as newsEditorialTemplateDefaultProps }

export default NewsEditorialTemplateModular
