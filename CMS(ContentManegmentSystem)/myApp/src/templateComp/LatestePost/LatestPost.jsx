import React, { useEffect, useState } from 'react'
// import './LatestPost.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function LatestPost({
  title = { value: "Latest Articles" },
  spantitle = { value: "Explore Our " },
  api = { value: "http://localhost:5000/api/post" },
}) {
  const [posts, setPosts] = React.useState([]);

const Navigate=useNavigate()

  React.useEffect(() => {
    const getapiPost = async () => {
      try {
        const response = await axios.get(api.value);
        setPosts(response.data.data || []);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };
    getapiPost();
  }, [api.value]);

  return (
    <div className="mt-8 mb-5 w-full">
      
      {/* TITLE */}
      <h2 className="text-[20px] font-light mb-3">
        <span className="hidden md:inline">{spantitle.value}</span>
        {title.value}
      </h2>

      {posts.length > 0 && (
        <div className="flex flex-col md:flex-row gap-3 w-full">

          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2" onClick={()=>{
            Navigate(`/post/${posts[0]?._id}`)
          }}>
            <div
              className="w-full min-h-[220px] md:min-h-[350px] rounded-lg bg-cover bg-center flex items-end shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/8b/5c/79/8b5c796b2c0508fb74d4a7eeb54ca882.jpg)",
              }}
            >
              <div className="w-full p-3 md:p-5">
                <h2 className="text-white font-semibold text-[16px] md:text-[24px] line-clamp-2">
                  {posts[0]?.title}
                </h2>
                <p className="text-gray-200 text-[13px] md:text-[14px] leading-tight line-clamp-3">
                  {posts[0]?.excerpt}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2">
            {posts.slice(1, 4).map((elem) => (
              <div
              onClick={()=>{
                Navigate(`/post/${elem?._id}`)
              }}
                key={elem._id}
                className="flex gap-3 py-2 md:py-3 items-center min-h-[100px]"
              >
                {/* IMAGE */}
                <div className="min-w-[120px] max-w-[120px]">
                  <img
                    src="https://i.pinimg.com/736x/b2/1d/5c/b21d5c9b2bceeb42b938f30f7151567a.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>

                {/* TEXT */}
                <div className="flex flex-col justify-center overflow-hidden">
                  <h2 className="font-semibold text-[16px] md:text-[18px] line-clamp-1">
                    {elem?.title}
                  </h2>
                  <p className="text-gray-600 text-[13px] leading-tight line-clamp-2">
                    {elem?.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default LatestPost