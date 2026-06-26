import React from 'react';

export function AppleLaunchLayout  ({ items =  [
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
], config =  {
  sectionTitle: { value: "Trending Insights", label: "Section Title", type: "text" },
  themeColor: { value: "#e50914", label: "Primary Theme Color", type: "color" },
  cardBg: { value: "#141414", label: "Card Background", type: "color" },
  textColor: { value: "#ffffff", label: "Main Text Color", type: "color" },
  subtitleColor: { value: "#aaaaaa", label: "Subtitle Color", type: "color" },
  enableAnimation: { value: true, label: "Enable Animations", type: "boolean" }
} })  {
  const textColor = config.textColor?.value || '#1d1d1f';
  const subtitleColor = config.subtitleColor?.value || '#86868b';
  const bgColor = config.bgColor?.value || '#f5f5f7';

  const hero = items[0];
  if (!hero) return null;

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', padding: '60px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {hero.category?.value && (
          <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase', color: config.themeColor?.value || '#0066cc' }}>
            {hero.category.value}
          </span>
        )}
        <h1 style={{ fontSize: '4.5rem', fontWeight: '700', letterSpacing: '-0.02em', margin: '10px 0 15px 0' }}>
          {hero.title?.value}
        </h1>
        {hero.subtitle?.value && (
          <p style={{ fontSize: '1.8rem', color: subtitleColor, maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: '1.3' }}>
            {hero.subtitle.value}
          </p>
        )}
        
        {/* Giant Hero Visual with Parallax Feeling Container */}
        <div style={{ 
          borderRadius: '28px', 
          overflow: 'hidden', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
          margin: '0 auto 60px auto',
          backgroundColor: '#fff'
        }}>
          <img src={hero.image?.value} alt="" style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '650px', objectFit: 'cover' }} />
        </div>

        {/* Multi-Floating Grid Secondary Elements */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {items.slice(1).map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '40px', textAlign: 'left', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '10px' }}>{item.title?.value}</h3>
              {item.subtitle?.value && <p style={{ color: subtitleColor, fontSize: '1rem', lineHeight: '1.4' }}>{item.subtitle.value}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};