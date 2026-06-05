import { memo } from 'react'

function CategorySidebar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside className="lg:w-1/4">
      <div className="sticky top-4 rounded-lg border border-zinc-200 bg-white p-3 shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mb-3 px-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Categories
          </p>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
          {categories.map((category) => {
            const active = selectedCategory === category.name

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => onSelectCategory(category.name)}
                className={`flex min-w-max items-center justify-between gap-4 rounded-md px-3 py-2 text-left text-sm font-medium transition-all lg:min-w-0 ${
                  active
                    ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white'
                }`}
              >
                <span>{category.name}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    active
                      ? 'bg-white text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200'
                      : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400'
                  }`}
                >
                  {category.count}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default memo(CategorySidebar)
