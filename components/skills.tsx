export function Skills() {
  const core = [
    "Go (Golang)",
    "Node.js",
    "TypeScript",
    "REST & GraphQL",
    "PostgreSQL",
    "Redis",
    "Message Queues",
    "Authentication",
    "Caching",
    "Rate Limiting",
  ]
  const ops = ["Vercel", "Docker", "CI/CD", "Observability (logs/metrics/traces)", "Testing"]
  const mobile = ["Flutter", "React Native"]

  return (
    <section id="skills" className="w-full border-t border-slate-100 dark:border-slate-800">
      <div className="mx-auto max-w-xl px-6 py-12 md:py-16 animate-in fade-in slide-in-from-bottom-2">
        <h2 className="text-lg font-semibold">Skills & Tools</h2>

        <div className="mt-6 grid grid-cols-1 gap-6">
          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Core Backend</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {core.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-slate-200 px-3 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Platform & Ops</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {ops.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-slate-200 px-3 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Mobile (Exposure)</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {mobile.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-amber-200 bg-amber-50 px-3 py-1 text-sm text-amber-800 transition-colors hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200 dark:hover:bg-amber-900/50"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Limited experience for prototypes; primary focus remains backend.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
