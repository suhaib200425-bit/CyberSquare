import React from 'react'
import './LatestArticles.css'
import { Link } from "react-router-dom";

const ListArticle=[
  {
    "id": 1,
    "title": "Designing a Modern CMS in 2025",
    "views": 4280
  },
  {
    "id": 2,
    "title": "Why Headless Isn't Always the Answer",
    "views": 3120
  },
  {
    "id": 3,
    "title": "Building Drag-and-Drop Page Builders",
    "views": 2845
  },
  {
    "id": 4,
    "title": "The State of Editorial Workflows",
    "views": 2510
  },
  {
    "id": 5,
    "title": "Typography for Long-Form Reading",
    "views": 1980
  }
]
function LatestArticles() {
  return (
    <div className='LatestArticles'>
        <div className="ArticlesHed">
            <h2>Popular articles</h2>
            <Link>View All</Link> 
        </div>
        <div className="ListArticls mt-4">
            {ListArticle&&ListArticle.map((elem,i)=>(
                <div className="flex gap-2 mt-2 items-center">
                    <div className="counterBox">{i+1}</div>
                    <div className="ArticleDetails">
                        <span className='truncate w-full m-0'>{elem.title}</span> <br />
                        <span className='text-[10px] m-0 '></span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LatestArticles