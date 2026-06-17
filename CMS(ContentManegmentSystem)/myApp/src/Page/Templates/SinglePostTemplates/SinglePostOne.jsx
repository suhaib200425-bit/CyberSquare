import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";
import axios from "axios";

export default function SinglePostOne({ contentColor = { value: 'black' },
    titleSize = { value: '30px' }, api = { value: `${BASEURL}/api/post` },
    defalut = { value: '/get/default' }, titleWeight = { value: 600 },
    imageWeidth = { value: '100%' }, imageHeight = { value: '300px' },
    imageRadius = { value: '5px' }, imageAline = { value: 'start' },
    padding = { value: '10px 250px' }, mobilePadding = { value: '' } }) {

    const [post, setpost] = useState(null);
    const { PostId, webname } = useParams();

    async function GetSigngleArticle() {
        try {
            const id = PostId || '69f62d57d0f6b14b3a672a94';
            const APIREST = `${BASEURL}/api/post/${webname}/single-post/${id}`;

            console.log(APIREST);

            const response = await axios.get(APIREST);

            console.log(response.data);

            setpost(response.data?.data);
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    }

    useEffect(() => {
        GetSigngleArticle();
    }, [PostId]);

    return (
        <div
            className='SingleArticlePage'
            style={{
                color: contentColor.value,
                padding:
                    window.innerWidth < 768
                        ? mobilePadding.value || '0px 10px'
                        : padding.value || '0px 100px',
            }}
        >
            {post && (
                <>
                    <h1
                        className='title mb-5'
                        style={{
                            fontSize: titleSize.value,
                            fontWeight: titleWeight.value
                        }}
                    >
                        {post?.title}
                    </h1>

                    <p className='subTitle mb-2'>
                        {post?.excerpt}
                    </p>

                    <div
                        className='flex'
                        style={{
                            justifyContent: imageAline.value
                        }}
                    >
                        <img
                            style={{
                                width: imageWeidth?.value ? imageWeidth?.value : '50%',
                                height: imageHeight?.value ? imageHeight.value : '30vh',
                                borderRadius: imageRadius?.value ? imageRadius.value : '0px'
                            }}
                            src={post?.banner}
                            alt=''
                        />
                    </div>

                    <div
                        className='HTMLCONTNTE'
                        dangerouslySetInnerHTML={{ __html: post?.content }}
                    ></div>
                </>
            )}
        </div>
    );
}