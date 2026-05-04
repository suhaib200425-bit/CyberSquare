import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './SingleArticlePage.css'
function SingleArticlePage({
    titleSize = { value: '30px' },
    api={value:"http://172.23.112.119:5000/api/post/postid/"},
    titleWeight = { value: 600 },
    imageWeidth = { value: '' },
    imageHeight = { value: '' },
    imageRadius = { value: '5px' }
}) {
    const htmlString = `
    <h1>Hello World</h1>
    <p>This is dynamic HTML content</p>
  `;
    const [post, setpost] = useState({})

    useEffect(() => {
        const GetSigngleArticle = async () => {
            try {
                const response = await axios.get(api.value)

                setpost(response.data.data)
            } catch (error) {

            }
        }
        GetSigngleArticle()
    }, [])
    return (
        <div className='SingleArticlePage'>
            {
                post && <>
                    <h1 className="title" style={{ fontSize: titleSize.value, fontWeight: titleWeight.value }}>
                        {post?.title}
                    </h1>
                    <p className="subTitle mb-2">
                        {post?.excerpt}
                    </p>
                    <img
                        style={{
                            width: imageWeidth?.value ? imageWeidth?.value : "50%",
                            height: imageHeight?.value ? imageHeight.value : "30vh",
                            borderRadius: imageRadius?.value ? imageRadius.value : "0px"
                        }}
                        src={post?.banner} alt="" srcset="" />
                    <div
                        className="HTMLCONTNTE"
                        dangerouslySetInnerHTML={{ __html: post?.content }}
                    ></div></>
            }
        </div>
    )
}

export default SingleArticlePage