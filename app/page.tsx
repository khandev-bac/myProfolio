import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { ContactFooter } from "@/components/contact-footer"
import SideProjects from "@/components/side-project"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <SideProjects/>
      <ContactFooter />
    </main>
  )
}
