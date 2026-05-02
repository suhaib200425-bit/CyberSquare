import React, { useEffect, useState } from 'react'
// import './LatestPost.css'
import axios from 'axios'
function LatestPost({
  title = {value:"Latest Articles"},
  spantitle = {value:"Explore Our "},
  api = {value:"http://localhost:5000/api/post"},
}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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
    <div className="mt-8 mb-5">
      
      {/* TITLE */}
      <h2 className="text-[20px] font-light mb-3">
        <span className="hidden md:inline">{spantitle.value}</span>
        {title.value}
      </h2>

      {posts.length > 0 && (
        <div className="flex gap-2 h-[200px] md:h-[400px]">

          {/* LEFT SIDE */}
          <div className="flex w-full md:min-w-[50%] gap-1">

            {/* FIRST CARD */}
            <div
              className="w-1/2 md:w-full rounded-lg bg-cover bg-center flex items-end shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              style={{
                backgroundImage:
                  "url(https://i.pinimg.com/736x/8b/5c/79/8b5c796b2c0508fb74d4a7eeb54ca882.jpg)",
              }}
            >
              <div className="w-full p-2 md:p-5">
                <h2 className="text-white font-semibold text-[15px] md:text-[25px] line-clamp-2">
                  {posts[0]?.title}
                </h2>
                <p className="text-gray-200 text-[12px] md:text-[14px] leading-tight line-clamp-3">
                  {posts[0]?.excerpt}
                </p>
              </div>
            </div>

            {/* SECOND CARD → MOBILE ONLY */}
            {posts.length > 1 && (
              <div
                className="w-1/2 md:hidden rounded-lg bg-cover bg-center flex items-end shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                style={{
                  backgroundImage:
                    "url(https://i.pinimg.com/736x/8b/5c/79/8b5c796b2c0508fb74d4a7eeb54ca882.jpg)",
                }}
              >
                <div className="w-full p-2">
                  <h2 className="text-white font-semibold text-[15px] line-clamp-2">
                    {posts[1]?.title}
                  </h2>
                  <p className="text-gray-200 text-[12px] leading-tight line-clamp-3">
                    {posts[1]?.excerpt}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE → DESKTOP ONLY */}
          <div className="hidden md:block w-full">
            {posts.slice(1, 4).map((elem) => (
              <div
                key={elem._id}
                className="flex gap-2 p-2 h-1/3"
              >
                <div className="min-w-[150px] max-w-[150px]">
                  <img
                    src="https://i.pinimg.com/736x/b2/1d/5c/b21d5c9b2bceeb42b938f30f7151567a.jpg"
                    alt=""
                    className="w-full h-full rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="font-semibold text-[20px] line-clamp-1">
                    {elem?.title}
                  </h2>
                  <p className="text-gray-600 leading-tight line-clamp-2">
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