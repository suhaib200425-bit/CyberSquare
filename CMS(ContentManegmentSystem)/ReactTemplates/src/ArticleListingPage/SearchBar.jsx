import { Search } from 'lucide-react'

function SearchBar({ value, onChange }) {
  return (
    <label className="relative block flex-1">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
      />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search articles"
        className="h-11 w-full rounded-md border border-zinc-200 bg-white pl-10 pr-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-emerald-500 dark:focus:ring-emerald-500/15"
      />
    </label>
  )
}

export default SearchBar
