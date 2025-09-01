"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === "dark" // derive from resolvedTheme to reflect system preference correctly

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark} // expose toggle state to assistive technologies
      title={isDark ? "Switch to light mode" : "Switch to dark mode"} // add tooltip for clarity
      className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 transition-all hover:bg-slate-50 hover:shadow-sm motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60 dark:focus-visible:ring-cyan-400/60"
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  )
}
