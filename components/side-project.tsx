import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SideProjects() {
  return (
    <section aria-labelledby="side-projects-title" className="py-10 md:py-16">
      <div className="mx-auto max-w-2xl px-4 md:max-w-3xl lg:max-w-4xl">
        <header className="mb-6 flex items-center justify-between">
          <h2 id="side-projects-title" className="text-pretty text-xl font-semibold tracking-tight md:text-2xl">
            Side Projects
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Commitopia Card */}
          <Card className="group overflow-hidden border-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800">
            <Link
              href="https://commitopia-v3.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="block focus:outline-none"
              aria-label="Open Commitopia app in a new tab"
            >
              <CardHeader className="pb-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={
                      "/placeholder.svg?height=384&width=768&query=Commitopia%20AI%20Git%20commit%20summarizer%20app%20preview"
                    }
                    alt="Commitopia app preview screenshot"
                    width={768}
                    height={384}
                    className="h-40 w-full rounded-md object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    priority
                  />
                </div>
                <CardTitle className="mt-4 text-lg">Commitopia</CardTitle>
                <CardDescription className="text-sm">
                  Paste a GitHub repository URL and get AI-generated summaries of recent commits for a fast, clear
                  overview.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="flex flex-wrap items-center gap-2 text-xs">
                  <li className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 transition-colors dark:bg-slate-900 dark:text-slate-300">
                    AI
                  </li>
                  <li className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 transition-colors dark:bg-slate-900 dark:text-slate-300">
                    Git
                  </li>
                  <li className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 transition-colors dark:bg-slate-900 dark:text-slate-300">
                    Summaries
                  </li>
                  <li className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 transition-colors dark:bg-slate-900 dark:text-slate-300">
                    Next.js
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">Live • commitopia-v3.vercel.app</span>
                <span
                  className="pointer-events-none inline-flex select-none items-center gap-1 rounded-md border px-2 py-1 text-xs text-slate-700 transition-colors dark:border-slate-800 dark:text-slate-300"
                  aria-hidden="true"
                >
                  Open
                  <svg
                    aria-hidden="true"
                    className="ml-0.5 size-3 -translate-x-0.5 transition-transform group-hover:translate-x-0 group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </CardFooter>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
