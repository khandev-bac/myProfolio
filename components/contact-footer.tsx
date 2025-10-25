"use client";
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [hoveredEmail, setHoveredEmail] = useState(false)

  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-28">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-5">
            <h2 className="text-7xl lg:text-8xl font-light text-white">Let's Connect</h2>
            <p className="text-lg text-white/60 font-light leading-relaxed max-w-2xl">
              I'm always interested in new challenges, collaborations, and opportunities to learn. If you have an exciting project or just want to chat about backend systems, let's talk.
            </p>
          </div>

          <div className="w-full max-w-2xl space-y-4 pt-2">
            <a 
              href="mailto:khandevichi@gmail.com"
              onMouseEnter={() => setHoveredEmail(true)}
              onMouseLeave={() => setHoveredEmail(false)}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 to-transparent p-6 transition-all duration-400 hover:border-white/40 hover:from-white/12 hover:to-white/3 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div className="text-left space-y-1">
                    <p className="text-sm text-white/40 font-light group-hover:text-white/60 transition-colors">Email</p>
                    <p className="text-xl text-white/80 font-light group-hover:text-white transition-colors">
                      {hoveredEmail ? "Let's give me a journey of job" : "khandevichi@gmail.com"}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                </div>
              </div>
            </a>

            <a 
              href="https://github.com/khandev-bac"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 to-transparent p-6 transition-all duration-400 hover:border-white/40 hover:from-white/12 hover:to-white/3 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div className="text-left space-y-1">
                    <p className="text-sm text-white/40 font-light group-hover:text-white/60 transition-colors">GitHub</p>
                    <p className="text-xl text-white/80 font-light group-hover:text-white transition-colors">github.com/khandev-bac</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
                </div>
              </div>
            </a>
          </div>

          <div className="pt-10 border-t border-white/10 w-full">
            <p className="text-white/30 font-light text-sm">© {new Date().getFullYear()} Farhan Khan. Passionate about backend. Learning every day.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}