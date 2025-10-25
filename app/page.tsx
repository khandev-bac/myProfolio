import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import SideProjects from "@/components/side-project"
import { Contact } from "@/components/contact-footer"
import { Apps } from "@/components/app"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Apps/>
      <Contact />
    </main>
  )
}
