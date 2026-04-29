import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogCard = ({ postId, image, category, title, description, date, views }) => {
  const Navigate = useNavigate()
  return (
    <div className="w-full p-2" onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      Navigate(`/post/${postId}`)
    }} >
      <div className="bg-white rounded-xl  shadow-md overflow-hidden hover:shadow-lg transition duration-300">

        <div className="flex flex-col h-[250px] ">
          {/* Image */}
          <div className="w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-[150px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4 h-[100px]">
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
              {category}
            </span>

            <h2 className={`mt-2 font-semibold text-lg ${description?'line-clamp-1':'line-clamp-2'}`}>{title}</h2>

            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
              {description}
            </p>

          </div>
        </div>
        <div className="p-4 flex justify-between items-center mt-4 text-xs text-gray-400">
          <span>{date}</span>
          <span>{views} views</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;