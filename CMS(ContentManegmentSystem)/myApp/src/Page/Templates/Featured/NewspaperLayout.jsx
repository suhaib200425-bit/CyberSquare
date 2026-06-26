import React from 'react';

export function NewspaperLayout  ({ items = [
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
  const textColor = config.textColor?.value || '#111111';
  const borderColor = config.borderColor?.value || '#222222';
  
  if (items.length === 0) return null;
  const lead = items[0];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', color: textColor, fontFamily: '"Georgia", serif' }}>
      {/* Header Banner */}
      <div style={{ textAlign: 'center', borderBottom: `4px double ${borderColor}`, paddingBottom: '15px', marginBottom: '25px' }}>
        <h1 style={{ fontSize: '3.5rem', textTransform: 'uppercase', margin: 0, fontFamily: '"Cinzel", serif', letterSpacing: '1px' }}>
          {config.magazineName?.value || "THE CHRONICLE"}
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '30px' }}>
        {/* Left: Main Editorial Engine */}
        <div style={{ borderRight: `1px solid ${borderColor}`, paddingRight: '30px' }}>
          <div style={{ marginBottom: '30px' }}>
            <img src={lead.image?.value} alt="" style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover' }} />
            <h2 style={{ fontSize: '2.5rem', margin: '15px 0 10px 0', lineHeight: '1.1' }}>{lead.title?.value}</h2>
            {lead.subtitle?.value && <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.4', fontStyle: 'italic' }}>{lead.subtitle.value}</p>}
          </div>

          {/* Sub-grid columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: `1px solid ${borderColor}`, paddingTop: '20px' }}>
            {items.slice(1, 3).map((item, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: '1.4rem', margin: '0 0 8px 0' }}>{item.title?.value}</h3>
                {item.subtitle?.value && <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>{item.subtitle.value}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Side Feed Column */}
        <div>
          <h4 style={{ margin: '0 0 15px 0', padding: '4px 8px', backgroundColor: '#000', color: '#fff', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center' }}>
            Latest Intelligence
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {items.slice(3).map((item, idx) => (
              <div key={idx} style={{ borderBottom: `1px dashed ${borderColor}`, paddingBottom: '15px' }}>
                <h5 style={{ fontSize: '1.1rem', margin: '0 0 5px 0' }}>{item.title?.value}</h5>
                {item.subtitle?.value && <p style={{ fontSize: '0.85rem', color: '#555', margin: 0 }}>{item.subtitle.value}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};