"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute top-40 right-20 w-12 h-12 bg-primary animate-float" />
      <div className="absolute bottom-40 left-20 w-20 h-20 border-4 border-muted animate-float-delayed" />
      <div className="absolute bottom-20 right-40 w-8 h-8 bg-foreground rotate-12 animate-pulse" />

      {/* Arrows */}
      <div className="absolute top-1/3 right-10 flex flex-col gap-2 animate-slide-in-right">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-foreground" />
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-foreground" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-slide-in-left">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 border-4 border-foreground flex items-center justify-center bg-background">
                <Terminal className="h-10 w-10" />
              </div>
              <div className="h-12 w-1 bg-foreground" />
              <div className="px-4 py-2 border-4 border-foreground bg-background">
                <span className="text-sm font-bold">2025</span>
              </div>
            </div>
          </div>

          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black mb-6 uppercase leading-none animate-fade-in-up">
            NERD<span className="text-xs align-super">™</span>
          </h1>

          <div className="mb-8 p-6 border-4 border-foreground bg-card brutalist-shadow max-w-2xl animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase">Who am I?</h2>
            <p className="text-base leading-relaxed">
              I am a Computer Science student who is passionate about building things with code. Web development and
              AI/ML are my playgrounds where I experiment, learn, and create.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="brutalist-border brutalist-shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase transition-transform hover:scale-105"
            >
              View Projects →
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="brutalist-border brutalist-shadow-sm bg-background hover:bg-muted font-bold uppercase transition-transform hover:scale-105"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-4 animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-4 border-foreground bg-background hover:bg-primary hover:text-primary-foreground transition-all brutalist-shadow-sm hover:scale-110"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-4 border-foreground bg-background hover:bg-primary hover:text-primary-foreground transition-all brutalist-shadow-sm hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 border-4 border-foreground bg-background hover:bg-primary hover:text-primary-foreground transition-all brutalist-shadow-sm hover:scale-110"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hover:text-primary transition-colors"
      >
        <span className="text-xs font-bold uppercase">Scroll</span>
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  )
}
