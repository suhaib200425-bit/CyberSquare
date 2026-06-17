import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";
import  axios from "axios"
const stylesConfig = {
  "categoryName": { "label": "Category Name", "type": "color", "value": "" },
  "sectionPaddingDesktop": { "label": "Section Padding (Desktop)", "type": "text", "value": "64px 40px" },
  "sectionPaddingMobile": { "label": "Section Padding (Mobile)", "type": "text", "value": "32px 16px" },
  "containerMaxWidth": { "label": "Container Max Width", "type": "text", "value": "1280px" },
  "backgroundColor": { "label": "Background Color", "type": "color", "value": "#ffffff" },
  "headingFontColor": { "label": "Heading Font Color", "type": "color", "value": "#000000" },
  "headingFontSize": { "label": "Heading Font Size", "type": "text", "value": "2rem" },
  "headingIndicatorColor": { "label": "Heading Underline Indicator Color", "type": "color", "value": "#e53e3e" },
  "gridGapDesktop": { "label": "Grid Gap (Desktop)", "type": "text", "value": "24px" },
  "gridGapMobile": { "label": "Grid Gap (Mobile)", "type": "text", "value": "16px" },
  "cardBorderRadius": { "label": "Card Border Radius", "type": "text", "value": "8px" },
  "cardOverlayColor": { "label": "Card Gradient Overlay Bottom", "type": "color", "value": "rgba(0, 0, 0, 0.85)" },
  "cardTitleFontSize": { "label": "Card Title Font Size", "type": "text", "value": "1.25rem" },
  "cardTitleColor": { "label": "Card Title Color", "type": "color", "value": "#ffffff" },
  "metaFontColor": { "label": "Meta Text Color", "type": "color", "value": "#cbd5e1" },
  "metaFontSize": { "label": "Meta Text Font Size", "type": "text", "value": "0.875rem" },
  "tagFontSize": { "label": "Tag Font Size", "type": "text", "value": "0.65rem" },
  "tagFontColor": { "label": "Tag Font Color", "type": "color", "value": "#ffffff" },
}
export function LifestyleGridMonolithic({
  sectionPaddingDesktop = { value: "64px 100px" },
  sectionPaddingMobile = { value: "30px 10px" },
  containerMaxWidth = { value: "100%" },
  backgroundColor = { value: "#ffffff" },
  headingFontColor = { value: "#000000" },
  headingFontSize = { value: "2rem" },
  headingIndicatorColor = { value: "#e53e3e" },
  gridGapDesktop = { value: "24px" },
  gridGapMobile = { value: "16px" },
  cardBorderRadius = { value: "8px" },
  cardOverlayColor = { value: "rgba(75, 27, 27, 0.85)" },
  cardTitleFontSize = { value: "1.25rem" },
  cardTitleColor = { value: "#ffffff" },
  metaFontColor = { value: "#cbd5e1" },
  metaFontSize = { value: "0.875rem" },
  tagFontSize = { value: "0.65rem" },
  tagFontColor = { value: "#ffffff" },
  categoryName= { value:"" }
}) {
  const [isMobile, setIsMobile] = useState(false);
  const posts=[
      {
        "_id": 1,
        "title": "The Power of Music: How It Affects Our Mood and Well-being",
        "banner": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
        "author": "Jane Cooper",
        "createdAt": "May 20, 2025",
        "navigate" : true
      },
      {
        "_id": 2,
        "title": "10 Hidden Travel Gems You Need to Visit in 2025",
        "banner": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "author": "Jane Cooper",
        "createdAt": "May 19, 2025",
        "navigate" : true
      },
      {
        "_id": 3,
        "title": "Morning Habits to Refresh Your Mind",
        "banner": "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
        "author": "Jane Cooper",
        "createdAt": "May 18, 2025",
        "navigate" : true
      },
      {
        "_id": 4,
        "title": "Self-Care Ideas You Can Do in Just 10 Minutes",
        "banner": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
        "author": "Jane Cooper",
        "createdAt": "May 17, 2025",
        "navigate" : true
      },
      {
        "_id": 5,
        "title": "Date Night on a Budget: Ideas for a Perfect Evening",
        "banner": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
        "author": "Jane Cooper",
        "createdAt": "May 16, 2025",
        "navigate" : true
      },
      {
        "_id": 6,
        "title": "The Benefits of Spending Time with Friends",
        "banner": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
        "author": "Jane Cooper",
        "createdAt": "May 15, 2025",
        "navigate" : true
      }
    ]
  const categoryPosts = {
    categoryName: "Life Style",
    posts: posts
  }


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function dateFormat(date) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate
  }

  const Navigate = useNavigate()
  const [data, setData] = useState(categoryPosts)
  const { webname } = useParams()
  useEffect(() => {
    async function GetPosts() {
      Promise.all([
        axios.get(`${BASEURL}/api/post/${webname}/single-category-posts?limit=6&categorname=${categoryName.value}`)
      ]).then(([response]) => {
        // console.log("FashionTrendingSection");
        // console.log(response.data?.posts);

        setData({
          ...response.data?.data,
          posts: [...response.data?.data?.posts,...posts]
        })
      }).catch(error => {
        setData(categoryPosts)
        console.log(error.response?.data || error.message);
      });
    }
    GetPosts()
  }, [webname])


  const sectionPadding = isMobile
    ? sectionPaddingMobile.value
    : sectionPaddingDesktop.value;

  const gridGap = isMobile
    ? gridGapMobile.value
    : gridGapDesktop.value;

  return (
    data?
    <section
    // onClick={()=>console.log(data)}
      style={{
        padding: sectionPadding,
        backgroundColor: backgroundColor.value,
        width: '100%'
      }}
    >
      <div
        className="mx-auto w-full"
        style={{ maxWidth: containerMaxWidth.value }}
      >
        {/* Header Section */}
        <div className="mb-8 inline-block">
          <h2
            className="font-bold tracking-wide m-0 pb-2"
            style={{
              color: headingFontColor.value,
              fontSize: headingFontSize.value
            }}
          >
            {data?.categoryName}
          </h2>
          <div
            className="h-1 w-full"
            style={{ backgroundColor: headingIndicatorColor.value }}
          />
        </div>

        {/* Responsive Grid Layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: gridGap }}
        >
          {data?.posts.slice(0,6).map((card) => (
            <div
            onClick={()=> !card.navigate && Navigate(`/${webname}/post/${card._id}`)}
              key={card._id}
              className="relative overflow-hidden group cursor-pointer aspect-[16/10] w-full"
              style={{ borderRadius: cardBorderRadius.value }}
            >
              {/* Image Layer */}
              <img
                src={card.banner}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dynamic Gradient Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-between p-2"
                style={{
  background: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 40%, ${cardOverlayColor.value} 100%)`
}}
              >
                {/* Upper Area: Dynamic Tags Row */}
                <div className="flex flex-wrap gap-2 items-start">
                </div>

                {/* Lower Area: Titles & Meta Data */}
                <div className="w-full">
                  <h3
                    className="font-bold leading-tight mb-4 tracking-normal line-clamp-2 group-hover:underline"
                    style={{
                      color: cardTitleColor.value,
                      fontSize: cardTitleFontSize.value
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Meta Details Row with inline SVGs */}
                  <div
                    className="flex items-center flex-wrap gap-x-4 gap-y-1 font-medium"
                    style={{
                      color: metaFontColor.value,
                      fontSize: metaFontSize.value
                    }}
                  >
                    {/* Date field */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                      <span>{dateFormat(card.createdAt)}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    :null
  );
}
