"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Hero() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-xl px-6 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-2">
        <div className="mb-6 flex items-center justify-end">
          <ThemeToggle />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="group text-pretty text-3xl font-semibold tracking-tight md:text-4xl">
              {"Hi, I'm Farhan Khan"}{" "}
              <span
                aria-hidden
                className="inline-block origin-[70%_70%] transition-transform duration-300 group-hover:rotate-12"
              >
                👋
              </span>
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Backend Engineer</p>
            <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-200">
              I love backend systems and building scalable services—focused on performance, reliability, and clean APIs.
              Also have a little experience with Flutter and React Native for end-to-end prototypes.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                aria-label="Email: khandevichi@gmail.com"
                className="inline-flex cursor-default items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform duration-200 motion-safe:hover:translate-y-0.5 bg-slate-950 border-slate-500 border"
              >
                khandevichi@gmail.com
              </span>

              <a
                href="https://github.com/khandev-bac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:shadow-sm motion-safe:hover:-translate-y-0.5 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
                aria-label="Open GitHub profile"
              >
                <Github className="h-4 w-4" aria-hidden />
                GitHub
              </a>

              <a
                href="#skills"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:shadow-sm motion-safe:hover:-translate-y-0.5 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                View skills
              </a>
            </div>
          </div>

          <Avatar className="h-14 w-14 ring-1 ring-slate-200 ring-offset-2 ring-offset-white overflow-hidden shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:rotate-1 dark:ring-slate-700 dark:ring-offset-slate-950 md:h-16 md:w-16">
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khan-o1p0vNyrHtDZW7dYqmYphDB1ZjNkGZ.jpeg"
              alt="Farhan Khan avatar"
            />
            <AvatarFallback>FK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
