"use client";
import { ArrowUpRight, Mail } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [showMessage, setShowMessage] = useState(false)


  return (
    <header className="w-full bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/8 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-6">
            <p className="text-white/40 text-sm font-light tracking-widest uppercase">Backend Engineer</p>
            <h1 className="text-8xl lg:text-9xl font-light text-white leading-tight tracking-tight">
              Farhan Khan
            </h1>
          </div>

          <div className="space-y-6 max-w-3xl">
            <p className="text-2xl lg:text-3xl text-white/80 font-light leading-relaxed">
              I love <span className="text-white font-light">backend</span>. It feels like crafting the core foundation of any app.
            </p>
            
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Every system I build is a stepping stone in my learning journey. Building scalable microservices, optimizing databases, and designing resilient infrastructure that powers mission-critical applications.
            </p>

            <p className="text-base text-white/50 font-light leading-relaxed">
              Passionate about Go, Node.js, TypeScript, and elegant solutions to complex backend challenges. This is my passion, and this is my craft.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <button
              onMouseEnter={() => setShowMessage(true)}
              onMouseLeave={() => setShowMessage(false)}
              className="group relative inline-flex items-center gap-3 cursor-pointer transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              <span className="text-lg text-white/50 group-hover:text-white font-light transition-colors">
                {showMessage ? "Let's give me a journey of job" : "khandevichi@gmail.com"}
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            
            <a 
              href="mailto:khandevichi@gmail.com"
              className="absolute inset-0 opacity-0"
              onMouseEnter={() => setShowMessage(true)}
              onMouseLeave={() => setShowMessage(false)}
            />
          </div>
        </div>
      </div>
    </header>
  )
}