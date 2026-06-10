import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASEURL } from '../../../assets/assets';

function PostsCategory({
    desktopPadding = { value: '' },
    mobilePadding = { value: '' },
    backgroundColor = { value: '' },
    contentColor = { value: 'black' },
    contentSecColor = { value: '#1d1b1bbe' },
    themeColor ={value:"red"},
    api = {
        value: "/latest-posts",
        type: "option",
        options: [
            {
                name: "Latest Posts",
                api: `/latest-posts`
            }, {
                name: "Popular Posts",
                api: "/popular-posts"
            }
        ]
    }
}) {

    // Data Array for Spotlight Posts
    const spotlightPosts = [
        {
            _id: 1,
            title: "What's People Buzzing About? Your Content Should Join The Conversation",
            banner: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=700&auto=format&fit=crop',
            category: { title: 'Gillion' },
            navigate: true
        }, {
            _id: 2,
            title: 'Does Coffee Help Deduce Stress Hormone Levels?',
            banner: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700&auto=format&fit=crop',
            category: { title: 'Gillion' },
            navigate: true
        }, {
            _id: 3,
            title: 'Review Of Healthy Breakfast Meals For Energy Boost',
            banner: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=700&auto=format&fit=crop',
            category: { title: 'Gillion' },
            navigate: true
        }
    ];
     // Data Array for Social Media Buttons
    const socialData = [
        { title: 'Like', totalPosts: '99' },
        { title: 'Follow', totalPosts: '99' },
        { title: 'Follow', totalPosts: '99' },
        { title: 'Subscribe', totalPosts: '99' }
    ];


    const { webname } = useParams()
    const Navigate = useNavigate()
    const [data, setData] = useState(null)
    useEffect(() => {
        async function GetPosts() {
            Promise.all([
                axios.get(`${BASEURL}/api/post/${webname}${api.value}?limit=3`),
                axios.get(`${BASEURL}/api/category/${webname}/top-post-categories`)
            ]).then(([postResponse,categoryResponse]) => {

                console.log("PostsCategory");
                console.log(postResponse.data?.posts);
                setData({ 
                    posts: [...postResponse.data?.posts, ...spotlightPosts] ,
                    categories:[...categoryResponse.data?.categories,...socialData]
                })
            }).catch(error => {
                setData({posts:spotlightPosts,categories:socialData})
                console.log(error.response?.data || error.message);
            });
        }
        GetPosts()
    }, [webname, api.value])
   
    const colors = ['#4086e8', '#17a8ef', '#d12f8c', '#f25342'];

    // Screen size handling
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial run
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Section Styles Calculation
    const sectionStyle = {
        backgroundColor: backgroundColor.value,
        color: contentColor.value,
        padding: isMobile ? (mobilePadding.value || '0px 10px') : (desktopPadding.value || '0px 100px')
    };

    return (
        <section className="mx-auto bg-white" style={sectionStyle}>
            <div className="grid gap-10 lg:grid-cols-[1fr_270px] pb-10 pt-10">

                {/* Left Section - Spotlight Posts */}
                <section>
                    <div className="mb-5 flex items-center gap-4">
                        <h2 className="whitespace-nowrap text-[22px] font-extrabold leading-none">
                            Todays spotlight
                        </h2>
                        <span
                            style={{ backgroundColor: themeColor.value }}
                            className="h-[2px] flex-1 bg-[#e8e8e8]"
                        />
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {data?.posts.slice(0,3).map((post, index) => (
                            <article key={index} className="group" onClick={()=>{
                                if(post.navigate) return
                                Navigate(`/${webname}/post/${post._id}`)
                            }}>
                                <div className="relative h-[150px] overflow-hidden rounded-[5px] bg-[#eee]">
                                    <img
                                        src={post?.banner}
                                        alt={post?.category?.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="mt-3 text-[15px] font-extrabold leading-snug line-clamp-2">
                                    {post?.title}
                                </h3>
                                <div
                                    style={{ color: themeColor.value }}
                                    className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-[#aaa]"
                                >
                                    <span>{post?.category?.title}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Right Section - Sidebar Social Connections */}
                <aside className="space-y-8">
                    <section>
                        <div className="mb-5 flex items-center gap-4">
                            <h2 className="whitespace-nowrap text-[22px] font-extrabold leading-none">
                                Stay connected
                            </h2>
                            <span
                                style={{ backgroundColor: themeColor.value }}
                                className="h-[2px] flex-1 bg-[#e8e8e8]"
                            />
                        </div>

                        <div className="space-y-3">
                            {data?.categories?.map((category, index) => (
                                <button
                                    key={index}
                                    style={{ backgroundColor: colors[index] }}
                                    type="button"
                                    className="flex h-11 w-full items-center justify-between rounded-[5px] px-5 text-[12px] font-extrabold text-white shadow-sm transition hover:-translate-y-0.5"
                                >
                                    <span>{category.title}</span>
                                    <span>{category.totalPosts}</span>
                                </button>
                            ))}
                        </div>
                    </section>
                </aside>

            </div>
        </section>
    );
}

export default PostsCategory;