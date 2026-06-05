import { ArrowRight, Clock, Eye } from 'lucide-react'

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

function ArticleCard({ article }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-emerald-500/40">
      <div className="aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-[260px] flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            <Eye aria-hidden="true" className="h-3.5 w-3.5" />
            {article.views.toLocaleString()}
          </span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-zinc-950 transition group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
          {article.title}
        </h3>

        <p className="article-excerpt mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-5">
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">{article.author}</span>
            <span>{dateFormatter.format(new Date(article.publishDate))}</span>
            <span className="inline-flex items-center gap-1">
              <Clock aria-hidden="true" className="h-3.5 w-3.5" />
              {article.readingTime}
            </span>
          </div>

          <a
            href={`/articles/${article.slug}`}
            className="inline-flex items-center gap-2 rounded-md bg-zinc-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-emerald-300"
          >
            Read More
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard
