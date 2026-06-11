import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL } from "../../../assets/assets";
import useStore from "../../../context/Zustand";

function CategoryWisePopular({
    margin = { value: '' },
    desktopPadding = { value: '' },
    mobilePadding = { value: '' },
    title = { value: 'Popular Posts' }
}) {


    const categories = [
        { title: 'All' },
        { title: 'Gaming' },
        { title: 'Tech' },
        { title: 'Social Media' },
        { title: 'Web Design' }
    ];

    const { SetCategory } = useStore()

    const posts = [
        {
            id: 1,
            banner: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1200&auto=format&fit=crop',
            title: 'Top 20 Gaming Smartphone Under 50k Best Selling',
            navigate: true
        },
        {
            _id: 2,
            banner: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
            title: 'Top 20 Gaming Smartphone Under 50k Best Selling',
            navigate: true
        },
        {
            _id: 3,
            banner: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
            title: 'Top 20 Gaming Smartphone Under 50k Best Selling',
            navigate: true
        },
        {
            _id: 4,
            banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
            title: 'Top 20 Gaming Smartphone Under 50k Best Selling',
            navigate: true
        },
        {
            _id: 5,
            banner: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop',
            title: 'Top 20 Gaming Smartphone Under 50k Best Selling',
            navigate: true
        },
        {
            _id: 6,
            banner: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
            title: 'Top 20 Gaming Smartphone Under 50k Best Selling',
            navigate: true
        }
    ];
    const { webname } = useParams()
    const Navigate = useNavigate()
    const [data, setData] = useState(null)
    function formatDate(dateString) {
        // if(!dataString) return '20 JAN 2022'
        const date = new Date(dateString);

        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).toUpperCase();
    }


    useEffect(() => {
        async function GetPosts() {
            Promise.all([
                axios.get(`${BASEURL}/api/post/${webname}/top-category-posts?limit=6`),
                axios.get(`${BASEURL}/api/category/${webname}/top-post-categories`)
            ]).then(([postResponse, categoryResponse]) => {

                console.log("CategoryWisePopular");
                console.log(categoryResponse.data?.categories);
                console.log(postResponse.data?.posts);
                setData({
                    posts: [...postResponse.data?.posts, ...posts],
                    categories: [...categoryResponse.data?.categories]
                })
            }).catch(error => {
                setData({ posts: posts, categories: categories })
                console.log(error.response?.data || error.message);
            });
        }
        GetPosts()
    }, [webname])

    const isMobile = window.innerWidth < 768;

    return (
        <section
            style={{
                margin: margin.value,
                padding: isMobile
                    ? mobilePadding.value || '0px 10px'
                    : desktopPadding.value || '0px 100px'
            }}
            className="w-full bg-[#f5f5f5] px-4 py-8 md:px-8"
        >
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h2 className="mb-4 pt-10 text-[30px] font-extrabold text-black">
                        {title.value || 'Popular Posts'}
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        <button
                            className={
                                'rounded-full px-4 py-[3px] text-[12px] font-semibold transition-all duration-300 bg-white text-black hover:bg-black hover:text-white'
                            }
                        >
                            All
                        </button>
                        {data?.categories.map((item, index) => (
                            <button
                                onClick={() => {
                                    SetCategory(item)
                                    Navigate(`/${webname}/articles`)
                                }}
                                key={index}
                                className={
                                    null === 0
                                        ? 'rounded-full px-4 py-[6px] text-[12px] font-semibold transition-all duration-300 bg-black text-white'
                                        : 'rounded-full px-4 py-[6px] text-[12px] font-semibold transition-all duration-300 bg-white text-black hover:bg-black hover:text-white'
                                }
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">
                {data?.posts.slice(0, 6).map((post) => (
                    <div key={post._id} className="group">

                        <div className="mb-4 h-[190px] overflow-hidden rounded-[16px]">
                            <img
                                src={post.banner}
                                alt={post.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <h3 className="mb-3 line-clamp-2 text-[24px] font-bold leading-[1.2] text-black">
                            {post.title}
                        </h3>

                        <p className="mb-5 line-clamp-3 text-[13px] leading-[1.7] text-[#777]">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4">

                            <button onClick={() => {
                                if (post.navigate) return
                                Navigate(`/${webname}/post/${post._id}`)
                            }} className="rounded-full bg-black px-5 py-[7px] text-[12px] font-semibold text-white transition-all duration-300 hover:scale-105">
                                Read
                            </button>

                            <span className="text-[12px] text-[#666]">
                                {formatDate(post?.createdAt) }
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );


}

export default CategoryWisePopular