import React from 'react';

export const Perspective3DLayout = ({ items = [
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
  const cardBg = config.cardBg?.value || '#ffffff';
  const textColor = config.textColor?.value || '#1a1a1a';

  return (
    <div style={{ 
      padding: '80px 20px', 
      backgroundColor: config.bgColor?.value || '#f6f9fc', 
      perspective: '1000px', // Establishes the 3D space
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px'
    }}>
      {items.map((item, index) => (
        <div 
          key={index}
          style={{
            width: '300px',
            height: '400px',
            backgroundColor: cardBg,
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
            transform: 'rotateX(15deg) rotateY(-10deg)',
            transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease',
            cursor: 'pointer',
            color: textColor,
            fontFamily: 'sans-serif'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1.04)';
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'rotateX(15deg) rotateY(-10deg)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.08)';
          }}
        >
          {item.image?.value && <img src={item.image.value} alt="" style={{ width: '100%', height: '50%', objectFit: 'cover' }} />}
          <div style={{ padding: '20px', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', margin: '0 0 8px 0', fontWeight: '600', lineHeight: '1.3' }}>{item.title?.value}</h3>
              {item.subtitle?.value && <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.subtitle.value}</p>}
            </div>
            {item.category?.value && (
              <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', color: config.themeColor?.value || '#000' }}>
                {item.category.value}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};