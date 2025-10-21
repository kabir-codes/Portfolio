import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { MouseEffect } from "@/components/mouse-effect"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MouseEffect />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <DarkModeToggle />
    </main>
  )
}
