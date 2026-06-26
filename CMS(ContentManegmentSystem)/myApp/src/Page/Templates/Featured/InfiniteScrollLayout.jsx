import React from 'react';

export function InfiniteScrollLayout  ({ items = [
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
} })  {
  const cardBg = config.cardBg?.value || '#ffffff';
  const textColor = config.textColor?.value || '#222222';
  const subtitleColor = config.subtitleColor?.value || '#666666';

  return (
    <div style={{ padding: '40px 20px', backgroundColor: config.bgColor?.value || '#fafafa', minHeight: '100vh' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {items.map((item, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: cardBg,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              color: textColor,
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
            }}
          >
            {item.image?.value && <img src={item.image.value} alt="" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />}
            <div style={{ padding: '24px' }}>
              {item.category?.value && (
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: config.themeColor?.value || '#ff4500', textTransform: 'uppercase' }}>
                  {item.category.value}
                </span>
              )}
              <h2 style={{ fontSize: '1.4rem', margin: '8px 0' }}>{item.title?.value}</h2>
              {item.subtitle?.value && <p style={{ color: subtitleColor, fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>{item.subtitle.value}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};