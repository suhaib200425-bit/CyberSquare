import ArticleCard from './ArticleCard'
import EmptyState from './EmptyState'
import LoadingSkeleton from './LoadingSkeleton'

function ArticleGrid({ articles, isLoading, hasMore }) {
  if (!isLoading && articles.length === 0) {
    return <EmptyState />
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
        {isLoading && <LoadingSkeleton count={3} />}
      </div>

      {!hasMore && articles.length > 0 && (
        <p className="mt-10 text-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
          No More Articles
        </p>
      )}
    </>
  )
}

export default ArticleGrid
