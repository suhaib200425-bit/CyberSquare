import { Clock3, Eye, MessageCircle, Share2, Search, Zap } from 'lucide-react'

const featuredPosts = [
  {
    id: 1,
    category: 'Health',
    title: 'How Much Time On Social Networks Is Considered Healthy',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 2,
    category: 'Lifestyle',
    title: 'How Fashion Trend Change The Way You Think',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 3,
    category: 'Cars',
    title: 'Porsche Cayman Re-style Is On The Way',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 4,
    category: 'Tech',
    title: 'Smart Watches That Will Make You Spend Some Money',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 5,
    category: 'Tech',
    title: 'Best Cameras To Choose From In 2019',
    image:
      'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
]

const quickStories = [
  {
    category: 'Beauty',
    title: 'Lesson 1: Basics Of Photography With Natural Lighting',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop',
  },
  {
    category: 'Beauty',
    title: 'How To Find Good Spots For Nature Inspired Photo-Shoots',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400&auto=format&fit=crop',
  },
  {
    category: 'Cars',
    title: 'Sneak Peak Of Mercedes Benz Interior Update In C-class Sedans',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&auto=format&fit=crop',
  },
  {
    category: 'Lifestyle',
    title: 'White Stairway, Architectural Marvel!',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=400&auto=format&fit=crop',
  },
]

const spotlightPosts = [
  {
    title: "What's People Buzzing About? Your Content Should Join The Conversation",
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=700&auto=format&fit=crop',
    meta: 'Gillion, 3 years ago',
  },
  {
    title: 'Does Coffee Help Deduce Stress Hormone Levels?',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700&auto=format&fit=crop',
    meta: 'Gillion, 1 year ago',
  },
  {
    title: 'Review Of Healthy Breakfast Meals For Energy Boost',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=700&auto=format&fit=crop',
    meta: 'Gillion, 2 years ago',
    rating: '8.2',
  },
]

function SectionTitle({ children }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <h2 className="whitespace-nowrap text-[22px] font-extrabold leading-none text-[#222]">
        {children}
      </h2>
      <span className="h-px flex-1 bg-[#e8e8e8]" />
    </div>
  )
}

function FeaturedCard({ post }) {
  const isLarge = post.size === 'large'

  return (
    <article
      className={`group relative min-h-[190px] overflow-hidden rounded-[6px] bg-[#111] ${isLarge ? 'md:col-span-2 md:row-span-2 md:min-h-[390px]' : ''
        }`}
    >
      <img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <span className="mb-3 inline-flex text-[11px] font-bold italic">{post.category}</span>
        <h3
          className={`max-w-[520px] font-extrabold leading-tight ${isLarge ? 'text-[24px] md:text-[28px]' : 'text-[15px]'
            }`}
        >
          {post.title}
        </h3>
      </div>
    </article>
  )
}

function QuickStory({ story }) {
  return (
    <article className="grid grid-cols-[72px_1fr] items-center gap-3">
      <img
        src={story.image}
        alt={story.title}
        className="h-[58px] w-[72px] rounded-[5px] object-cover"
      />
      <div>
        <p className="text-[11px] font-bold italic text-[#aaa]">{story.category}</p>
        <h4 className="mt-1 text-[13px] font-bold leading-tight text-[#2a2a2a]">{story.title}</h4>
      </div>
    </article>
  )
}

function SpotlightCard({ post }) {
  return (
    <article className="group">
      <div className="relative h-[150px] overflow-hidden rounded-[5px] bg-[#eee]">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {post.rating && (
          <span className="absolute right-3 top-3 rounded-full bg-[#f4bf3a] px-2 py-1 text-[11px] font-extrabold text-white">
            {post.rating}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-[15px] font-extrabold leading-snug text-[#252525]">{post.title}</h3>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-[#aaa]">
        <span>{post.meta}</span>
        <span className="inline-flex items-center gap-1">
          <Clock3 size={12} /> 3 min read
        </span>
      </div>
    </article>
  )
}

function SocialButton({ label, count, className }) {
  return (
    <button
      type="button"
      className={`flex h-11 w-full items-center justify-between rounded-[5px] px-5 text-[12px] font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 ${className}`}
    >
      <span>{label}</span>
      <span>{count}</span>
    </button>
  )
}

function ReviewItem({ title, image, score }) {
  return (
    <article className="grid grid-cols-[64px_1fr] gap-3 border-b border-[#eeeeee] pb-4 last:border-none">
      <div className="relative h-[54px] overflow-hidden rounded-[5px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <span className="absolute left-1 top-1 rounded bg-[#22b8a9] px-1.5 py-0.5 text-[10px] font-bold text-white">
          {score}
        </span>
      </div>
      <div>
        <h4 className="text-[12px] font-extrabold leading-snug text-[#303030]">{title}</h4>
        <div className="mt-2 flex items-center gap-3 text-[10px] text-[#b7b7b7]">
          <span className="inline-flex items-center gap-1">
            <MessageCircle size={11} /> 0
          </span>
          <span className="inline-flex items-center gap-1">
            <Eye size={11} /> 228
          </span>
        </div>
      </div>
    </article>
  )
}

export default function GillionTopSection() {

  const spotlightPosts = [
  {
    title: "What's People Buzzing About? Your Content Should Join The Conversation",
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=700&auto=format&fit=crop',
    meta: 'Gillion, 3 years ago',
  },
  {
    title: 'Does Coffee Help Deduce Stress Hormone Levels?',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700&auto=format&fit=crop',
    meta: 'Gillion, 1 year ago',
  },
  {
    title: 'Review Of Healthy Breakfast Meals For Energy Boost',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=700&auto=format&fit=crop',
    meta: 'Gillion, 2 years ago',
    rating: '8.2',
  },
]

  const socialData = [
    { label: "Like", count: "1423" },
    { label: "Follow", count: "727" },
    { label: "Follow", count: "386" },
    { label: "Subscribe", count: "284" },
  ];

  const colors = ["#4086e8", "#17a8ef", "#d12f8c", "#f25342"];

  const smallCards = featuredPosts.filter((post) => post.size === 'small')
  const heroPost = featuredPosts.find((post) => post.size === 'large')

  return (
    <main className="min-h-screen bg-[#eef2f3] px-4 py-10 font-sans text-[#222] sm:px-6 lg:px-10">
      
    </main>
  )
}
