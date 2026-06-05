import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { articleCategories, articles } from './articlesData'
import axios from 'axios'
import { BASEURL } from '../assets/assets'
import { useNavigate, useParams } from 'react-router-dom'

const ALL_CATEGORY = 'All Articles'
const PAGE_SIZE = 9

function ArticlesPage({

  themeColor = { value: "#8e15ff" },
  backgroundColor = { value: "white" },
  contentColor = { value: "black" },
  secContentColor = { value: "#111010d3" },
  categoryBoxBgColor = { value: "#ffffff" }
}) {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [allcategory, setAllCategory] = useState([])
  const [LoadingCompleted, setLoadingCompleted] = useState(false)
  const [allposts, setAllposts] = useState({})
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreRef = useRef(null)

  // const Navigate= useNavigate()
  const {webname} = useParams()

  useEffect(() => {
    const getPostsAndCategory = async () => {
      try {
        setIsLoading(true)
        const postResponse = await axios.get(
          `${BASEURL}/api/post/get/published?website=kite${selectedCategory != null ? `&category=${selectedCategory._id}` : ""
          }&limit=3`
        );
        setCurrentPage(postResponse.data?.pagination?.currentPage)
        if (postResponse.data?.pagination?.currentPage == postResponse.data?.pagination?.
          totalPages) {
          setLoadingCompleted(true)
        }
        setAllposts(postResponse.data)
        console.log("error end");

        const categoryResponse = await axios.get(`${BASEURL}/api/category/get/published?website=kite`)
        setAllCategory(categoryResponse.data?.data)


        // alert("okey")

        console.log(categoryResponse.data?.data)
        console.log(postResponse.data)
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        console.log(err.response?.data || err.message);

      }

    }
    getPostsAndCategory()
  }, [selectedCategory])




  const handleSelectCategory = useCallback((category) => {
    setCurrentPage(0)
    setSelectedCategory(category || null)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  useEffect(() => {
    const target = loadMoreRef.current

    if (!target || isLoading || LoadingCompleted || currentPage == 0) return

    const observer = new IntersectionObserver(
      ([entry]) => {

        // alert(currentPage)

        if (!entry.isIntersecting || isLoading) return
        const LoadingPosts = async () => {
          try {
            setIsLoading(true)

            const postResponse = await axios.get(
              `${BASEURL}/api/post/get/published?website=kite${selectedCategory != null ? `&category=${selectedCategory._id}` : ""
              }&limit=3&page=${currentPage + 1}`
            );
            console.log(postResponse.data?.pagination);
            // alert(postResponse.data?.pagination?.currentPage)
            setCurrentPage(postResponse.data?.pagination?.currentPage)
            if (postResponse.data?.pagination?.currentPage == postResponse.data?.pagination?.
              totalPages) {
              setLoadingCompleted(true)
            }
            setAllposts(prev => {
              console.log({
                ...postResponse.data,
                data: [...prev.data, ...postResponse.data?.data]
              });

              return {
                ...postResponse.data,
                data: [...prev.data, ...postResponse.data?.data]
              }
            })
            setIsLoading(false)
          } catch (error) {
            setIsLoading(false)
            console.log(error.response?.data || error.message);
          }
        }
        LoadingPosts()

      },
      {
        // rootMargin: '100px 0px'
      }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [isLoading])
  //filteredArticles.length, hasMore,isLoading
  return (
    <main
      style={{
        backgroundColor: backgroundColor.value,
        color: contentColor.value
      }}
      className="min-h-screen px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <header className="mb-8 border-b border-zinc-200 pb-6">
          <p
            style={{ color: secContentColor.value }}
            className="text-sm font-semibold uppercase tracking-wide"
          >
            Editorial Library
          </p>

          <div className="mt-3">
            <h1 className="text-3xl font-black sm:text-4xl">
              Articles
            </h1>

            <p
              style={{ color: secContentColor.value }}
              className="mt-2 max-w-2xl text-base leading-7"
            >
              Browse practical ideas, product notes, and publishing insights.
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">

          <aside className="lg:w-1/4">
            <div
              style={{
                backgroundColor: categoryBoxBgColor.value
              }}
              className="sticky top-4 rounded-lg border border-zinc-200 p-3 shadow-sm"
            >
              <div className="mb-3 px-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Categories
                </p>
              </div>

              <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col">
                <button
                  onClick={() => handleSelectCategory(null)

                  }
                  style={{
                    backgroundColor: !selectedCategory
                      ? `${themeColor.value}20`
                      : 'transparent',
                    color: !selectedCategory
                      ? themeColor.value
                      : contentColor.value
                  }}
                  className="flex min-w-max items-center justify-between gap-4 rounded-md px-3 py-2 text-sm font-medium transition-all"
                >
                  <span>All</span>
                </button>
                {allcategory?.map((category) => {

                  const active = selectedCategory?._id === category?._id

                  return (
                    <button
                      key={category?._id}
                      onClick={() => handleSelectCategory(category)}
                      style={{
                        backgroundColor: active
                          ? `${themeColor.value}20`
                          : 'transparent',
                        color: active
                          ? themeColor.value
                          : contentColor.value
                      }}
                      className="flex min-w-max items-center justify-between gap-4 rounded-md px-3 py-2 text-sm font-medium transition-all"
                    >
                      <span>{category?.title}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </aside>

          <section className="min-w-0 lg:w-3/4">

            <div className="mb-5">
              <h2 className="text-2xl font-bold">
                {selectedCategory?.title}
              </h2>

              <p
                style={{ color: secContentColor.value }}
                className="mt-1 text-sm"
              >
                Showing {allposts?.pagination?.totalPosts} of {allposts?.pagination?.totalPosts} articles
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

              {allposts?.data?.map((article) => (
                <article
                  key={article.id}
                  style={{
                    backgroundColor: backgroundColor.value
                  }}
                  className="group overflow-hidden rounded-lg border border-zinc-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[16/10] overflow-hidden  line-clamp-2">
                    <img
                      src={article?.banner}
                      alt={article?.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-btween p-5">
                    <div className="">
                      <div className="mb-3">
                        <span
                          style={{
                            backgroundColor: `${themeColor.value}20`,
                            color: themeColor.value
                          }}
                          className="rounded-full px-2.5 py-1 text-xs font-semibold"
                        >
                          {article?.category?.title}
                        </span>
                      </div>

                      <h3 className="text-lg line-clamp-3 font-bold leading-snug">
                        {article?.title}
                      </h3>

                      <p className="mt-3 line-clamp-4 text-sm leading-6 text-zinc-600">
                        {article?.excerpt}
                      </p>
                    </div>

                    <div className="mt-auto pt-3">
                      <p
                      onClick={()=>{
                        // Navigate(`${webname}/post/${article?._id}`)
                      }}
                        
                        className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-3 py-2 text-sm font-semibold text-white"
                      >
                        Read More
                      </p>
                    </div>

                  </div>
                </article>
              ))}

            </div>
            {/* !mash More */}
            {
              isLoading && (
                <p className="mt-20 text-center text-[25px] font-medium text-zinc-500">
                  Loading
                </p>
              )
            }
            {(allposts?.data?.length == 0 && !isLoading) || LoadingCompleted && (
              <p className="mt-20 text-center text-[25px] font-medium text-zinc-500">
                No More Articles
              </p>
            )}

            <div ref={loadMoreRef} className="h-10" />
          </section>
        </div>
      </div>
    </main>
  )
}

export default ArticlesPage