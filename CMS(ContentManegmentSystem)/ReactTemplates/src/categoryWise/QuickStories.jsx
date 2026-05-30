import React from 'react'

function QuickStories({
    desktopPadding = { value: "" },
    mobilePadding = { value: "" },
    backgroundColor = { value: "" },
    contentColor = { value: "black" },
    themeColor = { value: "red" },
}) {
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
    const isMobile = window.innerWidth < 768;

    return (
        <div className="my-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4" style={{
            padding:isMobile?mobilePadding.value || "0px 10px" : desktopPadding.value || "0px 100px"
        }}>
            {quickStories.map((story, index) => (
                <article key={index} className="grid grid-cols-[72px_1fr] items-center gap-3">
                    <img
                        src={story.image}
                        alt={story.title}
                        className="h-[58px] w-[72px] rounded-[5px] object-cover"
                    />
                    <div>
                        <p className="text-[11px] font-bold italic text-[#aaa]">{story.category}</p>
                        <h4 className="mt-1 text-[13px] font-bold leading-tight text-[#2a2a2a] line-clamp-2">{story.title}</h4>
                    </div>
                </article>
                // <QuickStory key={story.title} story={story} />
            ))}
        </div>
    )
}

export default QuickStories