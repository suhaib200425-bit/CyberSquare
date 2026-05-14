import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './SingleArticlePage.css'
import { useParams } from 'react-router-dom';
import { BASEURL } from '../../assets/assets';
function SingleArticlePage({
    titleSize = { value: "30px" },
    api = { value: `${BASEURL}/api/post` },
    defalut = { value: "/get/default" },
    titleWeight = { value: 600 },
    imageWeidth = { value: "100%" },
    imageHeight = { value: "300px" },
    imageRadius = { value: "5px" },
    imageAline = { value: "start" },
    padding={value:''},
    mobilePadding={value:""}

}) {

    // STATES
    const [post, setpost] = useState({});

    // PARAMS
    const { id } = useParams();

    // GET ARTICLE
    async function GetSigngleArticle() {

        try {

            const APIREST =
                defalut.value
                    ? api.value + defalut.value
                    : id?api.value + "/postid/" + id
                    :api.value + '/get/default';

            console.log(APIREST);

            const response = await axios.get(
                APIREST
            );

            setpost(response.data?.data);

        } catch (error) {

            console.log(
                error.response?.data ||
                error.message
            );

        }

    }

    // USE EFFECT
    useEffect(() => {

        GetSigngleArticle();

    }, [api.value, defalut.value]);

    return (

        <div className="SingleArticlePage" style={{
            padding: window.innerWidth < 768 ? mobilePadding.value || "0px 10px" : padding.value || "0px 100px",
        }}>

            {
                post && (

                    <>

                        {/* TITLE */}
                        <h1
                            className="title"
                            style={{
                                fontSize:
                                    titleSize.value,
                                fontWeight:
                                    titleWeight.value
                            }}
                        >

                            {post?.title}

                        </h1>

                        {/* SUB TITLE */}
                        <p className="subTitle mb-2">

                            {post?.excerpt}

                        </p>

                        {/* IMAGE */}
                        <div
                            className="flex"
                            style={{
                                justifyContent:
                                    imageAline.value
                            }}
                        >

                            <img
                                style={{
                                    width:
                                        imageWeidth?.value
                                            ? imageWeidth?.value
                                            : "50%",
                                    height:
                                        imageHeight?.value
                                            ? imageHeight.value
                                            : "30vh",
                                    borderRadius:
                                        imageRadius?.value
                                            ? imageRadius.value
                                            : "0px"
                                }}
                                src={post?.banner}
                                alt=""
                            />

                        </div>

                        {/* CONTENT */}
                        <div
                            className="HTMLCONTNTE"
                            dangerouslySetInnerHTML={{
                                __html:
                                    post?.content
                            }}
                        ></div>

                    </>

                )
            }

        </div>

    );

}

export default SingleArticlePage