export function Skills() {
  const allSkills = [
    { name: "Go", icon: "𝙶𝚘" },
    { name: "Node.js", icon: "⬢" },
    { name: "TypeScript", icon: "TS" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "NestJS", icon: "⚔️" },
    { name: "Express", icon: "⚡" },
    { name: "Spring Boot", icon: "🌱" },
    { name: "GraphQL", icon: "◊" },
    { name: "REST", icon: "↔️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "🔴" },
    { name: "Message Queues", icon: "📬" },
    { name: "Event Streaming", icon: "📊" },
    { name: "Microservices", icon: "🔗" },
    { name: "WebSockets", icon: "🔌" },
    { name: "Authentication", icon: "🔐" },
    { name: "Rate Limiting", icon: "⏱️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "CI/CD", icon: "🔄" },
    { name: "Flutter", icon: "🦋" },
    { name: "React Native", icon: "⚛️" }
  ]

  return (
    <section className="w-full bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-32">
        <div className="flex flex-col items-center text-center space-y-16">
          <h2 className="text-7xl lg:text-8xl font-light text-white">Skills & Expertise</h2>
          
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allSkills.map((skill) => (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 to-transparent p-6 transition-all duration-400 hover:border-white/40 hover:from-white/12 hover:to-white/3 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center text-center space-y-3">
                  <div className="text-5xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 font-bold tracking-tight">
                    {skill.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-light text-white group-hover:text-white/95 transition-all duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}