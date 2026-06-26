import React, { useState, useEffect } from 'react';

export function NetflixLayout({ items = [
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
} }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const themeColor = config.themeColor?.value || '#e50914';
    const cardBg = config.cardBg?.value || '#181818';
    const textColor = config.textColor?.value || '#ffffff';
    const subtitleColor = config.subtitleColor?.value || '#b3b3b3';

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [items.length]);

    if (!items.length) return null;
    const heroItem = items[activeIndex];

    return (
        <div style={{ backgroundColor: '#000', color: textColor, fontFamily: 'Helvetica, Arial, sans-serif', overflowX: 'hidden' }}>
            {/* Featured Hero Slider */}
            <div style={{
                position: 'relative',
                height: '70vh',
                backgroundImage: `linear-gradient(to top, #000 5%, transparent 40%), linear-gradient(to right, rgba(0,0,0,0.8) 30%, transparent 70%), url(${heroItem.image?.value})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                padding: '0 4%',
                transition: 'background-image 0.8s ease-in-out'
            }}>
                <div style={{ maxWidth: '600px', zIndex: 2 }}>
                    {heroItem.category?.value && (
                        <span style={{ color: themeColor, textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '2px', fontSize: '14px' }}>
                            {heroItem.category.value}
                        </span>
                    )}
                    <h1 style={{ fontSize: '3rem', margin: '10px 0', fontWeight: 'bold', lineHeight: '1.1' }}>{heroItem.title?.value}</h1>
                    {heroItem.subtitle?.value && <p style={{ color: subtitleColor, fontSize: '1.2rem', marginBottom: '20px' }}>{heroItem.subtitle.value}</p>}
                    <button style={{ backgroundColor: themeColor, color: '#fff', border: 'none', padding: '12px 24px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>
                        Read Now
                    </button>
                </div>
            </div>

            {/* Horizontal Slider Rows */}
            <div style={{ padding: '20px 4%', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{config.sectionTitle?.value || "Popular on Showcase"}</h2>
                <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '20px', scrollBehavior: 'smooth' }}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={{
                                flex: '0 0 240px',
                                backgroundColor: cardBg,
                                borderRadius: '4px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={item.image?.value} alt="" style={{ width: '100%', height: '135px', objectFit: 'cover' }} />
                            <div style={{ padding: '12px' }}>
                                <h4 style={{ fontSize: '0.95rem', margin: '0 0 5px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title?.value}</h4>
                                {item.subtitle?.value && <p style={{ fontSize: '0.8rem', color: subtitleColor, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.subtitle.value}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};