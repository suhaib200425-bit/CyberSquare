import { useEffect } from "react";
import { useState } from "react";

export function ResponsiveNewsLayoutSingle({
  //  = responsiveNewsLayoutStyleConfig,
  pageBackgroundColor= {
    label: 'Page Background Color',
    type: 'color',
    value: '#ffffff',
    options: [],
  },
  desktopPadding= {
    label: 'Desktop Padding',
    type: 'text',
    value: '0px 100px',
    options: [],
  },
  mobilePadding= {
    label: 'Mobile Padding',
    type: 'text',
    value: '0px 10px',
    options: [],
  },
  containerMaxWidth= {
    label: 'Container Max Width',
    type: 'text',
    value: '1320px',
    options: [],
  },
  desktopColumnTemplate= {
    label: 'Desktop Column Template',
    type: 'text',
    value: 'minmax(0, 2fr) minmax(320px, 0.95fr)',
    options: [],
  },
  tabletColumnTemplate= {
    label: 'Tablet Column Template',
    type: 'text',
    value: '1fr',
    options: [],
  },
  categoryDesktopTemplate= {
    label: 'Category Desktop Template',
    type: 'text',
    value: 'minmax(300px, 0.82fr) minmax(0, 1.08fr)',
    options: [],
  },
  categoryMobileTemplate= {
    label: 'Category Mobile Template',
    type: 'text',
    value: '1fr',
    options: [],
  },
  desktopMainGap= {
    label: 'Desktop Main Gap',
    type: 'text',
    value: '38px',
    options: [],
  },
  mobileMainGap= {
    label: 'Mobile Main Gap',
    type: 'text',
    value: '34px',
    options: [],
  },
  sectionTitleColor= {
    label: 'Section Title Color',
    type: 'color',
    value: '#171717',
    options: [],
  },
  sectionTitleFontSizeDesktop= {
    label: 'Section Title Font Size Desktop',
    type: 'text',
    value: '34px',
    options: [],
  },
  sectionTitleFontSizeMobile= {
    label: 'Section Title Font Size Mobile',
    type: 'text',
    value: '28px',
    options: [],
  },
  sectionTitleFontWeight= {
    label: 'Section Title Font Weight',
    type: 'text',
    value: '800',
    options: [],
  },
  headingUnderlineColor= {
    label: 'Heading Underline Color',
    type: 'color',
    value: '#dedede',
    options: [],
  },
  headingUnderlineAccentColor= {
    label: 'Heading Underline Accent Color',
    type: 'color',
    value: '#c65045',
    options: [],
  },
  headingUnderlineHeight= {
    label: 'Heading Underline Height',
    type: 'text',
    value: '2px',
    options: [],
  },
  headingUnderlineAccentWidth= {
    label: 'Heading Underline Accent Width',
    type: 'text',
    value: '118px',
    options: [],
  },
  headingBottomMargin= {
    label: 'Heading Bottom Margin',
    type: 'text',
    value: '42px',
    options: [],
  },
  tabsGap= {
    label: 'Tabs Gap',
    type: 'text',
    value: '30px',
    options: [],
  },
  tabTextColor= {
    label: 'Tab Text Color',
    type: 'color',
    value: '#2f2f2f',
    options: [],
  },
  tabActiveTextColor= {
    label: 'Tab Active Text Color',
    type: 'color',
    value: '#b45a4d',
    options: [],
  },
  tabFontSize= {
    label: 'Tab Font Size',
    type: 'text',
    value: '13px',
    options: [],
  },
  tabFontWeight= {
    label: 'Tab Font Weight',
    type: 'text',
    value: '700',
    options: [],
  },
  featuredCardHeightDesktop= {
    label: 'Featured Card Height Desktop',
    type: 'text',
    value: '615px',
    options: [],
  },
  featuredCardHeightMobile= {
    label: 'Featured Card Height Mobile',
    type: 'text',
    value: '420px',
    options: [],
  },
  popularHeroHeightDesktop= {
    label: 'Popular Hero Height Desktop',
    type: 'text',
    value: '250px',
    options: [],
  },
  popularHeroHeightMobile= {
    label: 'Popular Hero Height Mobile',
    type: 'text',
    value: '310px',
    options: [],
  },
  cardRadius= {
    label: 'Card Radius',
    type: 'text',
    value: '4px',
    options: [],
  },
  imageObjectFit= {
    label: 'Image Object Fit',
    type: 'select',
    value: 'cover',
    options: ['cover', 'contain'],
  },
  overlayBackground= {
    label: 'Overlay Background',
    type: 'color',
    value: 'rgba(0,0,0,0.58)',
    options: [],
  },
  overlayGradient= {
    label: 'Overlay Gradient',
    type: 'text',
    value: 'linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.86) 100%)',
    options: [],
  },
  overlayPaddingDesktop= {
    label: 'Overlay Padding Desktop',
    type: 'text',
    value: '28px',
    options: [],
  },
  overlayPaddingMobile= {
    label: 'Overlay Padding Mobile',
    type: 'text',
    value: '20px',
    options: [],
  },
  badgeBackgroundColor= {
    label: 'Badge Background Color',
    type: 'color',
    value: '#2b1717',
    options: [],
  },
  badgeTextColor= {
    label: 'Badge Text Color',
    type: 'color',
    value: '#ffffff',
    options: [],
  },
  badgeFontSize= {
    label: 'Badge Font Size',
    type: 'text',
    value: '11px',
    options: [],
  },
  badgePadding= {
    label: 'Badge Padding',
    type: 'text',
    value: '5px 15px',
    options: [],
  },
  badgeRadius= {
    label: 'Badge Radius',
    type: 'text',
    value: '10px',
    options: [],
  },
  badgeGap= {
    label: 'Badge Gap',
    type: 'text',
    value: '8px',
    options: [],
  },
  titleColor= {
    label: 'Title Color',
    type: 'color',
    value: '#151515',
    options: [],
  },
  overlayTitleColor= {
    label: 'Overlay Title Color',
    type: 'color',
    value: '#ffffff',
    options: [],
  },
  featuredTitleFontSizeDesktop= {
    label: 'Featured Title Font Size Desktop',
    type: 'text',
    value: '25px',
    options: [],
  },
  featuredTitleFontSizeMobile= {
    label: 'Featured Title Font Size Mobile',
    type: 'text',
    value: '21px',
    options: [],
  },
  articleTitleFontSizeDesktop= {
    label: 'Article Title Font Size Desktop',
    type: 'text',
    value: '20px',
    options: [],
  },
  articleTitleFontSizeMobile= {
    label: 'Article Title Font Size Mobile',
    type: 'text',
    value: '18px',
    options: [],
  },
  popularTitleFontSize= {
    label: 'Popular Title Font Size',
    type: 'text',
    value: '18px',
    options: [],
  },
  titleFontWeight= {
    label: 'Title Font Weight',
    type: 'text',
    value: '800',
    options: [],
  },
  titleLineHeight= {
    label: 'Title Line Height',
    type: 'text',
    value: '1.32',
    options: [],
  },
  metaTextColor= {
    label: 'Meta Text Color',
    type: 'color',
    value: '#8a8a8a',
    options: [],
  },
  overlayMetaTextColor= {
    label: 'Overlay Meta Text Color',
    type: 'color',
    value: '#d8d8d8',
    options: [],
  },
  metaFontSize= {
    label: 'Meta Font Size',
    type: 'text',
    value: '13px',
    options: [],
  },
  metaFontWeight= {
    label: 'Meta Font Weight',
    type: 'text',
    value: '600',
    options: [],
  },
  iconSize= {
    label: 'Icon Size',
    type: 'text',
    value: '15px',
    options: [],
  },
  articleImageWidthDesktop= {
    label: 'Article Image Width Desktop',
    type: 'text',
    value: '190px',
    options: [],
  },
  articleImageWidthMobile= {
    label: 'Article Image Width Mobile',
    type: 'text',
    value: '112px',
    options: [],
  },
  articleImageHeightDesktop= {
    label: 'Article Image Height Desktop',
    type: 'text',
    value: '190px',
    options: [],
  },
  articleImageHeightMobile= {
    label: 'Article Image Height Mobile',
    type: 'text',
    value: '112px',
    options: [],
  },
  articleRowGapDesktop= {
    label: 'Article Row Gap Desktop',
    type: 'text',
    value: '16px',
    options: [],
  },
  articleRowGapMobile= {
    label: 'Article Row Gap Mobile',
    type: 'text',
    value: '14px',
    options: [],
  },
  articleStackGap= {
    label: 'Article Stack Gap',
    type: 'text',
    value: '22px',
    options: [],
  },
  popularListGap= {
    label: 'Popular List Gap',
    type: 'text',
    value: '18px',
    options: [],
  },
  popularThumbWidth= {
    label: 'Popular Thumb Width',
    type: 'text',
    value: '112px',
    options: [],
  },
  popularThumbHeight= {
    label: 'Popular Thumb Height',
    type: 'text',
    value: '92px',
    options: [],
  },
  fontFamily= {
    label: 'Font Family',
    type: 'text',
    value:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    options: [],
  },
  categoriesHeading= {
    label: 'Categories Heading',
    type: 'text',
    value: 'Categories',
    options: [],
  },
  popularHeading= {
    label: 'Popular Heading',
    type: 'text',
    value: 'Popular News',
    options: [],
  },
}) {

  const topCategories = [
    { title: "AUCTION NEWS" },
    { title: "ARTICLES" },
    { title: "STORIEs" }
  ]

  const topCategoriesPosts = [
    {
      _id: 1,
      createdAt: "2024-12-26T10:30:00.000Z",
      banner:
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      category: { title: "Gaming" },
      navigate: true
    },
    {
      _id: 2,
      createdAt: "2024-12-26T10:30:00.000Z",
      banner:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      category: { title: "Gaming" },
      navigate: true
    },
    {
      _id: 3,
      createdAt: "2024-12-26T10:30:00.000Z",
      banner:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      category: { title: "Gaming" },
      navigate: true
    },
    {
      _id: 4,
      createdAt: "2024-12-26T10:30:00.000Z",
      banner:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      category: { title: "Gaming" },
      navigate: true
    },
    {
      _id: 5,
      createdAt: "2024-12-26T10:30:00.000Z",
      banner:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      category: { title: "Gaming" },
      navigate: true
    },
    {
      _id: 6,
      createdAt: "2024-12-26T10:30:00.000Z",
      banner:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
      title: "Top 20 Gaming Smartphone Under 50k Best Selling",
      category: { title: "Gaming" },
      navigate: true
    },

  ]



  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  function dateFormat(date) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate
  }

  const [data, setData] = useState({
    topCategories: topCategories,
    topCategoriesPosts: topCategoriesPosts,
    topPopularPosts: topCategoriesPosts,

  })

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth < 1180)
    }
    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: pageBackgroundColor.value,
        padding: isMobile ? mobilePadding.value : desktopPadding.value,
        fontFamily: fontFamily.value,
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: containerMaxWidth.value,
          display: 'grid',
          gridTemplateColumns: isTablet
            ? tabletColumnTemplate.value
            : desktopColumnTemplate.value,
          gap: isMobile ? mobileMainGap.value : desktopMainGap.value,
        }}
      >
        <div className="w-full">
          <div
            className="flex w-full flex-col md:flex-row md:items-center md:justify-between"
            style={{
              gap: isMobile
                ? articleRowGapMobile.value
                : articleRowGapDesktop.value,
            }}
          >
            <div className="w-full">
              <h2
                style={{
                  color: sectionTitleColor.value,
                  fontSize: isMobile
                    ? sectionTitleFontSizeMobile.value
                    : sectionTitleFontSizeDesktop.value,
                  fontWeight: sectionTitleFontWeight.value,
                  lineHeight: titleLineHeight.value,
                  margin: 0,
                }}
              >
                {categoriesHeading.value}
              </h2>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: headingUnderlineHeight.value,
                  backgroundColor: headingUnderlineColor.value,
                  marginTop: badgeGap.value,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: headingUnderlineHeight.value,
                    width: headingUnderlineAccentWidth.value,
                    backgroundColor: headingUnderlineAccentColor.value,
                  }}
                />
              </div>
            </div>
            <div
              className="flex items-center gap-2 md:justify-end"
              style={{
                gap: tabsGap.value,
                marginTop: isMobile ? badgeGap.value : '0px',
              }}
            >
              <button
                key={`jiji`}
                type="button"
                className='whitespace-nowrap'
                style={{
                  appearance: 'none',
                  border: 0,
                  background: 'transparent',
                  color:
                    0 === 0
                      ? tabActiveTextColor.value
                      : tabTextColor.value,
                  cursor: 'pointer',
                  fontSize: tabFontSize.value,
                  fontWeight: tabFontWeight.value,
                  padding: 0,
                  textTransform: 'uppercase',
                }}
              >
                All
              </button>
              {data.topCategories.map((tab, index) => (
                <button
                  key={`${index}`}
                  type="button"
                  className='whitespace-nowrap'
                  style={{
                    appearance: 'none',
                    border: 0,
                    background: 'transparent',
                    color: tabTextColor.value,
                    cursor: 'pointer',
                    fontSize: tabFontSize.value,
                    fontWeight: tabFontWeight.value,
                    padding: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? categoryMobileTemplate.value
                : categoryDesktopTemplate.value,
              gap: isMobile ? mobileMainGap.value : articleStackGap.value,
              marginTop: headingBottomMargin.value,
            }}
          >
            <article
              style={{
                position: 'relative',
                minHeight: isMobile
                  ? featuredCardHeightMobile.value
                  : featuredCardHeightDesktop.value,
                overflow: 'hidden',
                borderRadius: cardRadius.value,
              }}
            >
              <img
                src={data?.topCategoriesPosts[0]?.banner}
                alt={data?.topCategoriesPosts[0]?.category?.title || "error"}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: imageObjectFit.value,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: overlayGradient.value,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: isMobile
                    ? overlayPaddingMobile.value
                    : overlayPaddingDesktop.value,
                }}
              >
                <div className="flex flex-wrap" style={{ gap: badgeGap.value }}>

                  <span
                    style={{
                      backgroundColor: badgeBackgroundColor.value,
                      borderRadius: badgeRadius.value,
                      color: badgeTextColor.value,
                      fontSize: badgeFontSize.value,
                      fontWeight: tabFontWeight.value,
                      padding: badgePadding.value,
                      textTransform: 'uppercase',
                    }}
                  >
                    {data?.topCategoriesPosts[0]?.category?.title}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      color: overlayTitleColor.value,
                      fontSize: isMobile
                        ? featuredTitleFontSizeMobile.value
                        : featuredTitleFontSizeDesktop.value,
                      fontWeight: titleFontWeight.value,
                      lineHeight: titleLineHeight.value,
                      margin: 0,
                    }}
                  >
                    {data?.topCategoriesPosts[0]?.title}

                  </h3>
                  <div
                    className="flex flex-wrap items-center"
                    style={{
                      gap: tabsGap.value,
                      marginTop: badgeGap.value,
                    }}
                  >

                    <span
                      className="inline-flex items-center"
                      style={{
                        gap: badgeGap.value,
                        color: overlayMetaTextColor.value,
                        fontSize: metaFontSize.value,
                        fontWeight: metaFontWeight.value,
                      }}
                    >

                      {dateFormat(data?.topCategoriesPosts[0]?.createdAt)}

                    </span>
                  </div>
                </div>
              </div>
            </article>

            <div className="flex flex-col" style={{ gap: articleStackGap.value }}>
              {data?.topCategoriesPosts?.slice(1,4).map((post, index) => (
                <article
                  key={`${post?.title}-${index}`}
                  className="flex"
                  style={{
                    gap: isMobile
                      ? articleRowGapMobile.value
                      : articleRowGapDesktop.value,
                  }}
                >
                  <img
                    src={post?.banner}
                    alt={post?.banner}
                    style={{
                      width: isMobile
                        ? articleImageWidthMobile.value
                        : articleImageWidthDesktop.value,
                      height: isMobile
                        ? articleImageHeightMobile.value
                        : articleImageHeightDesktop.value,
                      objectFit: imageObjectFit.value,
                      borderRadius: cardRadius.value,
                      flex: '0 0 auto',
                    }}
                  />
                  <div className="flex min-w-0 flex-col justify-center">
                    <div className="flex flex-wrap" style={{ gap: badgeGap.value }}>
                      
                        <span
                          style={{
                            backgroundColor: badgeBackgroundColor.value,
                            borderRadius: badgeRadius.value,
                            color: badgeTextColor.value,
                            fontSize: badgeFontSize.value,
                            fontWeight: tabFontWeight.value,
                            padding: badgePadding.value,
                          }}
                        >
                          {post?.category?.title}
                        </span>
                    </div>
                    <h3
                      className='line-clamp-3'
                      style={{
                        color: titleColor.value,
                        fontSize: isMobile
                          ? articleTitleFontSizeMobile.value
                          : articleTitleFontSizeDesktop.value,
                        fontWeight: titleFontWeight.value,
                        lineHeight: titleLineHeight.value,
                        margin: `${badgeGap.value} 0 0`,
                      }}
                    >
                      {post?.title}
                    </h3>
                    <div
                      className="flex flex-wrap items-center"
                      style={{
                        gap: tabsGap.value,
                        marginTop: badgeGap.value,
                      }}
                    >
                        <span
                          className="inline-flex items-center"
                          style={{
                            gap: badgeGap.value,
                            color: metaTextColor.value,
                            fontSize: metaFontSize.value,
                            fontWeight: metaFontWeight.value,
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            style={{
                              width: iconSize.value,
                              height: iconSize.value,
                            }}
                          >
                            <path
                              d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8a7 7 0 0 0-14 0"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                          {dateFormat(post?.createdAt)}
                        </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="w-full">
          <h2
            style={{
              color: sectionTitleColor.value,
              fontSize: isMobile
                ? sectionTitleFontSizeMobile.value
                : sectionTitleFontSizeDesktop.value,
              fontWeight: sectionTitleFontWeight.value,
              lineHeight: titleLineHeight.value,
              margin: 0,
            }}
          >
            {popularHeading.value}
          </h2>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: headingUnderlineHeight.value,
              backgroundColor: headingUnderlineColor.value,
              marginTop: badgeGap.value,
              marginBottom: headingBottomMargin.value,
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: headingUnderlineHeight.value,
                width: headingUnderlineAccentWidth.value,
                backgroundColor: headingUnderlineAccentColor.value,
              }}
            />
          </div>

          <article
            style={{
              position: 'relative',
              minHeight: isMobile
                ? popularHeroHeightMobile.value
                : popularHeroHeightDesktop.value,
              overflow: 'hidden',
              borderRadius: cardRadius.value,
            }}
          >
            <img
              src={data?.topPopularPosts[0]?.banner}
              alt={data?.topPopularPosts[0]?.banner}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: imageObjectFit.value,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: overlayGradient.value,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: isMobile
                  ? overlayPaddingMobile.value
                  : overlayPaddingDesktop.value,
              }}
            >
              <div className="flex flex-wrap" style={{ gap: badgeGap.value }}>
             
                  <span
                    style={{
                      backgroundColor: badgeBackgroundColor.value,
                      borderRadius: badgeRadius.value,
                      color: badgeTextColor.value,
                      fontSize: badgeFontSize.value,
                      fontWeight: tabFontWeight.value,
                      padding: badgePadding.value,
                    }}
                  >
                    {data?.topPopularPosts[0]?.category?.title}
                  </span>
              </div>
              <div>
                <h3
                  style={{
                    color: overlayTitleColor.value,
                    fontSize: popularTitleFontSize.value,
                    fontWeight: titleFontWeight.value,
                    lineHeight: titleLineHeight.value,
                    margin: 0,
                  }}
                >
                  {data?.topPopularPosts[0]?.title}
                </h3>
                <div
                  className="flex flex-wrap items-center"
                  style={{ gap: tabsGap.value, marginTop: badgeGap.value }}
                >
                    <span
                      className="inline-flex items-center"
                      style={{
                        gap: badgeGap.value,
                        color: overlayMetaTextColor.value,
                        fontSize: metaFontSize.value,
                        fontWeight: metaFontWeight.value,
                      }}
                    >
                      <span className='lowercase' >@{data?.topPopularPosts[0]?.category?.title}</span> /
                      {dateFormat(data?.topPopularPosts[0]?.createdAt)}
                    </span>
                </div>
              </div>
            </div>
          </article>

          <div
            className="flex flex-col"
            style={{
              gap: popularListGap.value,
              marginTop: popularListGap.value,
            }}
          >
            {data?.topPopularPosts?.slice(1,4).map((post, index) => (
              <article
                key={`${post?.title}-${index}`}
                className="flex"
                style={{ gap: articleRowGapDesktop.value }}
              >
                <img
                  src={post?.banner}
                  alt={post?.banner}
                  style={{
                    width: popularThumbWidth.value,
                    height: popularThumbHeight.value,
                    objectFit: imageObjectFit.value,
                    borderRadius: cardRadius.value,
                    flex: '0 0 auto',
                  }}
                />
                <div className="flex min-w-0 flex-col justify-center">
                  <h3
                    style={{
                      color: titleColor.value,
                      fontSize: popularTitleFontSize.value,
                      fontWeight: titleFontWeight.value,
                      lineHeight: titleLineHeight.value,
                      margin: 0,
                    }}
                  >
                    {post?.title}
                  </h3>
                  <span
                    className="inline-flex items-center"
                    style={{
                      gap: badgeGap.value,
                      color: metaTextColor.value,
                      fontSize: metaFontSize.value,
                      fontWeight: metaFontWeight.value,
                      marginTop: badgeGap.value,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{
                        width: iconSize.value,
                        height: iconSize.value,
                      }}
                    >
                      <path
                        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8a7 7 0 0 0-14 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {dateFormat(post?.createdAt)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}