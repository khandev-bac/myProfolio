export function About() {
  return (
    <section className="w-full bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-28">
        <div className="flex flex-col items-center text-center space-y-12">
          <h2 className="text-7xl lg:text-8xl font-light text-white">About Me</h2>
          
          <div className="max-w-4xl space-y-6">
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Backend engineering isn't just what I do—it's how I think. Every service I architect, every database I optimize, every API I design is part of a continuous learning journey. I believe that great backend systems are like well-crafted foundations; they're invisible but absolutely essential.
            </p>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              My focus is on building systems that are reliable, scalable, and elegant. Whether it's Go microservices, Node.js applications, or TypeScript frameworks, I approach each project with a commitment to clean code, thoughtful design, and continuous improvement.
            </p>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              I'm passionate about mentoring, learning from the community, and pushing the boundaries of what's possible in distributed systems. This is more than a career—it's a calling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
