const categories = [
  'Technology',
  'Product',
  'Design',
  'Engineering',
  'Marketing',
  'Culture',
  'Business',
  'AI',
]

const images = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
]

const authors = [
  'Maya Chen',
  'Noah Rivera',
  'Aarav Mehta',
  'Sophia Grant',
  'Ethan Brooks',
  'Priya Nair',
  'Liam Hart',
  'Zara Khan',
]

const titleSeeds = [
  'Building better editorial systems',
  'How teams ship thoughtful product updates',
  'A practical guide to modern content workflows',
  'Designing dashboards people actually use',
  'What high-performing engineering teams measure',
  'The quiet power of audience research',
  'Inside the future of AI-assisted publishing',
  'Turning analytics into clearer decisions',
  'Scaling a content platform without losing speed',
  'The playbook for cleaner collaboration',
]

const excerpts = [
  'A sharp look at the habits, systems, and small decisions that help publishing teams move faster without trading away quality.',
  'Modern content work is full of moving parts. This guide breaks down practical patterns that keep teams aligned and readers engaged.',
  'From discovery to delivery, the strongest teams build repeatable workflows that still leave room for editorial judgment.',
  'Useful interfaces feel calm, legible, and quick. Here is how product teams can make complex work easier to scan and act on.',
]

export const articleCategories = categories

export const articles = Array.from({ length: 1200 }, (_, index) => {
  const category = categories[index % categories.length]
  const seed = titleSeeds[index % titleSeeds.length]
  const date = new Date(2026, 4, 31)
  date.setDate(date.getDate() - index)

  return {
    id: index + 1,
    title: `${seed}: ${category} note ${index + 1}`,
    slug: `${seed.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index + 1}`,
    category,
    image: images[index % images.length],
    excerpt: excerpts[index % excerpts.length],
    author: authors[index % authors.length],
    publishDate: date.toISOString(),
    readingTime: `${4 + (index % 8)} min read`,
    views: 90000 - index * 17 + ((index % 13) * 391),
    featured: index % 11 === 0,
  }
})
