import { FileSearch } from 'lucide-react'

function EmptyState() {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-white px-6 text-center dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-4 rounded-full bg-zinc-100 p-4 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
        <FileSearch aria-hidden="true" className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold text-zinc-950 dark:text-white">No matching articles</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Try a different category, search term, or sort option to find what you are looking for.
      </p>
    </div>
  )
}

export default EmptyState
