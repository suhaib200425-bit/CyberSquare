function LoadingSkeleton({ count = 3 }) {
  return Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="aspect-[16/10] animate-pulse bg-zinc-200 dark:bg-zinc-800" />
      <div className="space-y-4 p-5">
        <div className="h-5 w-24 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="space-y-2">
          <div className="h-5 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="h-9 w-28 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
    </div>
  ))
}

export default LoadingSkeleton
