import { Download, ExternalLink } from "lucide-react"

export function Apps() {
  const apps = [
    {
      title: "Swipester",
      subtitle: "Photo Organization • iOS App",
      description: "The smarter way to organize photos. Swipe right to keep, swipe left to delete. Built with privacy-first architecture, smart detection for duplicates, screenshots, and old photos. All processing happens on your device—because your photos are yours alone.",
      features: ["⚡ Lightning Fast", "🧠 Smart Detection", "💾 Free Up Space", "🔒 Privacy Focused"],
      url: "https://swipester.farhankhan.fun/",
      icon: "📸"
    },
    {
  title: "CloudyBox",
  subtitle: "Photo Upload & Management • iOS/Android App",
  description: "Easily manage and upload your photos with CloudyBox. Swipe right to upload, swipe left to skip. All your photos are securely handled, with progress tracking and seamless background uploads. Simple, fast, and intuitive for everyday photo management.",
  features: ["⚡ Fast Uploads", "📂 Organized Photos", "✅ Swipe to Upload or Skip", "🔒 Secure & Private"],
  url: "https://cloudybox.farhankhan.fun/",
  icon: "☁️"
}

  ]

  return (
    <section className="w-full bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-28">
        <div className="flex flex-col items-center text-center space-y-12">
          <h2 className="text-7xl lg:text-8xl font-light text-white">Apps & Products</h2>
          
          <div className="w-full space-y-6">
            {apps.map((app) => (
              <a
                key={app.title}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 via-transparent to-white/3 p-10 transition-all duration-400 hover:border-white/40 hover:from-white/12 hover:via-white/3 hover:to-white/8 hover:shadow-xl hover:-translate-y-1">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
                  </div>

                  <div className="relative flex items-start justify-between gap-8">
                    <div className="flex-1 text-left space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="text-6xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 flex-shrink-0">
                          {app.icon}
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-3xl font-light text-white group-hover:text-white/95 transition-all duration-300">
                            {app.title}
                          </h3>
                          <p className="text-sm text-white/40 font-light group-hover:text-white/60 transition-colors">{app.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-base text-white/65 font-light leading-relaxed max-w-2xl group-hover:text-white/80 transition-colors">
                        {app.description}
                      </p>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {app.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs text-white/50 font-light border border-white/15 rounded-full px-4 py-2 bg-white/5 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white/80 transition-all"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 flex-shrink-0 pt-1">
                      <ExternalLink className="w-6 h-6 text-white/30 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <Download className="w-6 h-6 text-white/30 group-hover:text-white transition-all" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}