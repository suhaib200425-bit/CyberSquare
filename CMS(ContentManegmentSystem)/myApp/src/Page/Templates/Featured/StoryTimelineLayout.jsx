import React, { useState, useEffect } from 'react';

export const StoryTimelineLayout = ({ items = [
    {
        title: { value: "The Future of AI", label: "Article Title", type: "text" },
        subtitle: { value: "How deep learning is changing code", label: "Subtitle", type: "text" },
        image: { value: "https://picsum.photos/800/600?random=1", label: "Cover Image URL", type: "text" },
        category: { value: "Technology", label: "Category Tag", type: "text" }
    },
    {
        title: { value: "Mastering React Server Components", label: "Article Title", type: "text" },
        subtitle: { value: "Building faster web applications", label: "Subtitle", type: "text" },
        image: { value: "https://picsum.photos/800/600?random=2", label: "Cover Image URL", type: "text" },
        category: { value: "React", label: "Category Tag", type: "text" }
    },
    {
        title: { value: "Scaling Microservices Effectively", label: "Article Title", type: "text" },
        subtitle: { value: "Strategies for enterprise systems", label: "Subtitle", type: "text" },
        image: { value: "https://picsum.photos/800/600?random=3", label: "Cover Image URL", type: "text" },
        category: { value: "Backend", label: "Category Tag", type: "text" }
    },
    {
        title: { value: "Modern UI Trends in 2026", label: "Article Title", type: "text" },
        subtitle: { value: "Design systems that users love", label: "Subtitle", type: "text" },
        image: { value: "https://picsum.photos/800/600?random=4", label: "Cover Image URL", type: "text" },
        category: { value: "Design", label: "Category Tag", type: "text" }
    },
    {
        title: { value: "Next.js Performance Optimization", label: "Article Title", type: "text" },
        subtitle: { value: "Improving Core Web Vitals", label: "Subtitle", type: "text" },
        image: { value: "https://picsum.photos/800/600?random=5", label: "Cover Image URL", type: "text" },
        category: { value: "Next.js", label: "Category Tag", type: "text" }
    },
    {
        title: { value: "Building SaaS Products Faster", label: "Article Title", type: "text" },
        subtitle: { value: "From MVP to production", label: "Subtitle", type: "text" },
        image: { value: "https://picsum.photos/800/600?random=6", label: "Cover Image URL", type: "text" },
        category: { value: "Startup", label: "Category Tag", type: "text" }
    },
    {
        title: { value: "Understanding Cloud Architecture", label: "Article Title", type: "text" },
        subtitle: { value: "AWS, Azure and modern deployment", label: "Subtitle", type: "text" },
        image: { value: "https://picsum.photos/800/600?random=7", label: "Cover Image URL", type: "text" },
        category: { value: "Cloud", label: "Category Tag", type: "text" }
    }
], config = {

    sectionTitle: { value: "Trending Insights", label: "Section Title", type: "text" },
    themeColor: { value: "#e50914", label: "Primary Theme Color", type: "color" },
    cardBg: { value: "#141414", label: "Card Background", type: "color" },
    textColor: { value: "#ffffff", label: "Main Text Color", type: "color" },
    subtitleColor: { value: "#aaaaaa", label: "Subtitle Color", type: "color" },
    enableAnimation: { value: true, label: "Enable Animations", type: "boolean" }
} }) => {
  const [current, setCurrent] = useState(0);
  const textColor = config.textColor?.value || '#ffffff';

  useEffect(() => {
    if (!items.length) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current, items.length]);

  if (!items.length) return null;
  const activeItem = items[current];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', backgroundColor: '#111' }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        height: '650px',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 30%, transparent 75%), url(${activeItem.image?.value})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: textColor,
        fontFamily: 'sans-serif'
      }}>
        {/* Progress Bars */}
        <div style={{ position: 'absolute', top: '15px', left: '10px', right: '10px', display: 'flex', gap: '5px', zIndex: 20 }}>
          {items.map((_, idx) => (
            <div key={idx} style={{ flex: 1, height: '3px', backgroundColor: 'rgba(251,251,251,0.3)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                backgroundColor: '#fff',
                width: idx < current ? '100%' : idx === current ? '100%' : '0%',
                transition: idx === current ? 'width 4000ms linear' : 'none'
              }} />
            </div>
          ))}
        </div>

        {/* Content Overlay Layout */}
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '30px 20px', zIndex: 10 }}>
          {activeItem.category?.value && (
            <span style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', backgroundColor: config.themeColor?.value || '#fff', color: '#000', padding: '2px 8px', borderRadius: '20px' }}>
              {activeItem.category.value}
            </span>
          )}
          <h2 style={{ fontSize: '1.75rem', margin: '15px 0 10px 0', fontWeight: '700', lineHeight: '1.2' }}>{activeItem.title?.value}</h2>
          {activeItem.subtitle?.value && <p style={{ fontSize: '0.95rem', opacity: 0.85, margin: 0, lineHeight: '1.4' }}>{activeItem.subtitle.value}</p>}
        </div>
      </div>
    </div>
  );
};