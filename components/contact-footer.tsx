import Link from "next/link"

export function ContactFooter() {
  return (
    <footer className="w-full border-t border-slate-100 dark:border-slate-800">
      <div className="mx-auto max-w-xl px-6 py-10 animate-in fade-in slide-in-from-bottom-2">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Get in touch</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              Open to backend roles, platform work, and scalable systems.
            </p>
          </div>
          <span className="inline-flex cursor-default items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm bg-transparent border border-slate-500 border-dotted">
            khandevichi@gmail.com
          </span>
        </div>
        <div className="mt-6">
          <Link
            href="https://github.com/khandev-bac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 underline-offset-4 hover:underline dark:text-slate-300"
            aria-label="Open GitHub profile"
          >
            github.com/khandev-bac
          </Link>
        </div>
        <div className="mt-8 text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Farhan Khan</div>
      </div>
    </footer>
  )
}
