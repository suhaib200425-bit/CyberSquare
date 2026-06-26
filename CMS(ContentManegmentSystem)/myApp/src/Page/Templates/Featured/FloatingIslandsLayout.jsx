import React from 'react';

export const FloatingIslandsLayout = ({ items = [
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
  const textColor = config.textColor?.value || '#333333';

  return (
    <div style={{ padding: '80px 20px', backgroundColor: config.bgColor?.value || '#f0f4f8', minHeight: '100vh' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '50px 30px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {items.map((item, index) => {
          // Give even cards a staggered vertical offset displacement 
          const lateralOffset = index % 2 === 0 ? '0px' : '40px';
          
          return (
            <div 
              key={index}
              style={{
                backgroundColor: cardBg,
                color: textColor,
                borderRadius: '30px',
                padding: '25px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                transform: `translateY(${lateralOffset})`,
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `translateY(${parseInt(lateralOffset) - 15}px)`;
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `translateY(${lateralOffset})`;
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
              }}
            >
              {item.image?.value && (
                <img src={item.image.value} alt="" style={{ width: '100%', height: '200px', borderRadius: '20px', objectFit: 'cover', marginBottom: '20px' }} />
              )}
              <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px 0', fontWeight: '600' }}>{item.title?.value}</h3>
              {item.subtitle?.value && <p style={{ fontSize: '0.9rem', color: '#666', margin: 0, lineHeight: '1.4' }}>{item.subtitle.value}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};