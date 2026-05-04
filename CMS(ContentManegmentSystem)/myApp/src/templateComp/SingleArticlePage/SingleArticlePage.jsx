import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './SingleArticlePage.css'
import { useParams } from 'react-router-dom';
function SingleArticlePage({
    titleSize = { value: '30px' },
    api = { value: "http://192.168.31.24:5000/api/post" },
    defalut = { value: "/postid/69f62d57d0f6b14b3a672a94" },
    titleWeight = { value: 600 },
    imageWeidth = { value: '100%' },
    imageHeight = { value: '300px' },
    imageRadius = { value: '5px' },
    imageAline = { value: 'start' }
}) {
    const htmlString = `
    <h1>Hello World</h1>
    <p>This is dynamic HTML content</p>
  `;
    const [post, setpost] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const APIREST = defalut.value ? api.value + defalut.value : api.value + /postid/ + id
        console.log(APIREST);

        const GetSigngleArticle = async () => {
            try {
                const response = await axios.get(APIREST)
                setpost(response.data?.data)
                

            } catch (error) {
                console.log(error.response?.data || error.message);

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
                    <div className="flex" style={{
                        justifyContent: imageAline.value,
                    }}>
                        <img

                            style={{
                                
                                width: imageWeidth?.value ? imageWeidth?.value : "50%",
                                height: imageHeight?.value ? imageHeight.value : "30vh",
                                borderRadius: imageRadius?.value ? imageRadius.value : "0px"
                            }}
                            src={post?.banner} alt="" srcset="" />
                    </div>
                    <div
                        className="HTMLCONTNTE"
                        dangerouslySetInnerHTML={{ __html: post?.content }}
                    ></div></>
            }
        </div>
    )
}

export default SingleArticlePage