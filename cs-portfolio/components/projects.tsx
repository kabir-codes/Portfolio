"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Chat Application",
    description:
      "Real-time chat application with AI-powered message suggestions and sentiment analysis using natural language processing.",
    tags: ["Next.js", "TypeScript", "OpenAI", "WebSocket"],
    image: "/modern-chat-interface-with-ai-features.jpg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Neural Network Visualizer",
    description:
      "Interactive web tool for visualizing and understanding neural network architectures and training processes in real-time.",
    tags: ["React", "TensorFlow.js", "D3.js", "Python"],
    image: "/neural-network-visualization-dashboard.jpg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with advanced search, recommendation engine, and seamless checkout experience.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    image: "/modern-ecommerce-interface.png",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Code Snippet Manager",
    description:
      "Developer tool for organizing, searching, and sharing code snippets with syntax highlighting and AI-powered tagging.",
    tags: ["TypeScript", "Supabase", "Next.js", "AI"],
    image: "/code-editor-with-snippet-library.jpg",
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-background relative overflow-hidden opacity-0 translate-y-20 transition-all duration-1000 ease-out"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-muted rotate-45" />
      <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-foreground" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block p-4 border-4 border-foreground bg-primary brutalist-shadow mb-6">
              <h2 className="text-4xl sm:text-5xl font-black uppercase text-primary-foreground">Projects</h2>
            </div>
            <p className="text-base max-w-2xl">A selection of my work showcasing web development and AI/ML expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => {
                  projectRefs.current[index] = el
                }}
                className="border-4 border-foreground bg-card brutalist-shadow opacity-0 translate-y-20 transition-all duration-1000 ease-out hover:scale-[1.03] hover:-translate-y-2"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Window-style header */}
                <div className="border-b-4 border-foreground p-3 bg-muted flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 border-2 border-foreground bg-primary" />
                    <div className="w-3 h-3 border-2 border-foreground bg-background" />
                    <div className="w-3 h-3 border-2 border-foreground bg-background" />
                  </div>
                  <span className="text-xs font-bold uppercase ml-2">{project.title.substring(0, 20)}...</span>
                </div>

                {/* Project image */}
                <div className="relative aspect-video border-b-4 border-foreground overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 uppercase">{project.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed text-muted-foreground">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-bold border-2 border-foreground bg-muted uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="brutalist-border brutalist-shadow-sm bg-background hover:bg-primary hover:text-primary-foreground font-bold uppercase transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="brutalist-border brutalist-shadow-sm bg-primary hover:bg-foreground hover:text-background font-bold uppercase transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
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
