import React from 'react';

export const KnowledgeGraphLayout = ({ items = [
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
  const nodeBg = config.nodeBg?.value || '#111827';
  const textColor = config.textColor?.value || '#ffffff';
  const accentColor = config.themeColor?.value || '#3b82f6';

  if (!items.length) return null;
  const centralNode = items[0];
  const perimeterNodes = items.slice(1, 5);

  return (
    <div style={{ 
      padding: '80px 20px', 
      backgroundColor: config.bgColor?.value || '#030712', 
      minHeight: '600px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    }}>
      {/* Central Core Hub Node */}
      <div style={{
        zIndex: 10,
        backgroundColor: accentColor,
        color: '#fff',
        padding: '30px',
        borderRadius: '50%',
        width: '220px',
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: `0 0 40px ${accentColor}44`,
        fontFamily: 'sans-serif'
      }}>
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Featured Focus</span>
        <h3 style={{ fontSize: '1.15rem', margin: '5px 0 0 0', fontWeight: 'bold' }}>{centralNode.title?.value}</h3>
      </div>

      {/* Linked Radial Orbit Branches */}
      {perimeterNodes.map((item, idx) => {
        // Calculate structured coordinate offset placement angles
        const angle = (idx * (360 / perimeterNodes.length)) * (Math.PI / 180);
        const radius = 240; 
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div key={idx} style={{ position: 'absolute', transform: `translate(${x}px, ${y}px)`, zIndex: 5 }}>
            {/* SVG Connecting Link Line */}
            <svg style={{ position: 'absolute', top: '50%', left: '50%', width: radius, height: radius, transform: `translate(${-x}px, ${-y}px)`, pointerEvents: 'none', zIndex: -1 }}>
              <line x1={x + 100} y1={y + 50} x2={radius} y2={radius} stroke={accentColor} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
            </svg>

            <div style={{
              backgroundColor: nodeBg,
              color: textColor,
              padding: '16px',
              borderRadius: '12px',
              width: '180px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              border: `1px solid ${accentColor}33`,
              fontSize: '0.9rem'
            }}>
              <strong style={{ display: 'block', marginBottom: '4px' }}>{item.title?.value}</strong>
              {item.subtitle?.value && <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{item.subtitle.value}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
};