import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";
import axios from "axios";

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

    heroBodyFontSize = { value: '14px' },
    mobileHeroBodyFontSize = { value: '13px' },
    heroBodyColor = { value: '#ffffff' },

    listGap = { value: '28px' },

    listImageWidth = { value: '150px' },
    listImageHeight = { value: '90px' },

    listContentGap = { value: '10px' },

    titleFontSize = { value: '16px' },
    mobileTitleFontSize = { value: '14px' },
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
  const postsOne = [
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
  ];

  const postsTwo = [

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
  ];
  const categoryWise = [
    {
      category: "Technology",
      posts: postsOne,
    },

    {
      category: "Science",

      posts: postsTwo
    },
  ];

  const hotTopic = [
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
    }, {
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
  ];

  const [isMobile, setIsMobile] = useState()
  const [isTable, setIsTablet] = useState()
  const containerRef = useRef(null);

  const [data, setData] = useState({
    categoryWise: categoryWise,
    hotTopic: hotTopic
  })




  const Navigate = useNavigate()
  const { webname } = useParams()

  useEffect(() => {
    async function GetPosts() {
      Promise.all([
        axios.get(`${BASEURL}/api/post/${webname}/popular-category-posts-and-hot-post?limit=5`)
      ]).then(([response]) => {
        // console.log("FashionTrendingSection");
        // console.log(response.data?.posts);

        setData({
          categoryWise: [
            {
              ...response.data?.caregoryWisePosts[0],
              posts:[...response.data?.caregoryWisePosts[0].posts,...postsOne]
            },{
              ...response.data?.caregoryWisePosts[1],
              posts:[...response.data?.caregoryWisePosts[1].posts,...postsTwo]
            },
          
        ],
          hotTopic: [...response.data?.hotposts,...hotTopic],

        })
      }).catch(error => {
        setData({ posts: latestPosts })
        console.log(error.response?.data || error.message);
      });
    }
    GetPosts()
  }, [webname])

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

            <div className="min-w-0" key={category.category + categoryIndex}>
              <h2
                className="leading-none  tracking-normal  line-clamp-2"
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
                    className="whitespace-pre-line  line-clamp-3 leading-[1.08]"
                    style={{
                      fontSize: isMobile ? mobileHeroTitleFontSize.value : heroTitleFontSize.value,
                      color: heroTitleColor.value,
                      fontWeight: titleFontWeight.value,
                    }}
                  >
                    {category?.posts[0]?.title}
                  </h3>

                  <p
                    className="mt-1  line-clamp-2"
                    style={{
                      fontSize: isMobile ? mobileHeroBodyFontSize.value : heroBodyFontSize.value,
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
                {category?.posts?.slice(1, 3).map((article, articleIndex) => (
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
                          fontSize: isMobile ? mobileTitleFontSize.value : titleFontSize.value,
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
          

            <div
              className="grid grid-cols-1 sm:grid-cols-2"
              style={{
                rowGap: hotGridGapY.value,
                columnGap: hotGridGapX.value,
              }}
            >
              {data?.hotTopic?.slice(0, 6).map((article, i) => (
                <article className="min-w-0" key={article?.title + i}>
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
                      fontSize: isMobile ? mobileTitleFontSize.value : titleFontSize.value,
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