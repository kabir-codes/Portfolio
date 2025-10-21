"use client"

import { useEffect, useRef } from "react"
import { Code2, Brain, Zap } from "lucide-react"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const journeyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (journeyRef.current) observer.observe(journeyRef.current)
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      icon: Code2,
      title: "Web Dev",
      description: "Building responsive and performant web applications with modern frameworks and clean code.",
    },
    {
      icon: Brain,
      title: "AI/ML",
      description: "Exploring neural networks and machine learning to create intelligent systems.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Combining creativity with technical skills to solve complex problems.",
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-muted relative overflow-hidden opacity-0 translate-y-20 transition-all duration-1000 ease-out"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 border-4 border-foreground opacity-20" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary opacity-10 rotate-12" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-block p-4 border-4 border-foreground bg-background brutalist-shadow">
              <h2 className="text-4xl sm:text-5xl font-black uppercase">About</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className="p-6 border-4 border-foreground bg-background brutalist-shadow opacity-0 translate-y-20 transition-all duration-1000 ease-out hover:scale-105 hover:-translate-y-2 hover:brutalist-shadow-lg"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 w-16 h-16 border-4 border-foreground flex items-center justify-center bg-primary transition-all duration-300 hover:rotate-12 hover:scale-110">
                  <card.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>

          <div
            ref={journeyRef}
            className="p-8 border-4 border-foreground bg-background brutalist-shadow opacity-0 translate-y-20 transition-all duration-1000 ease-out"
          >
            <h3 className="text-2xl font-bold mb-6 uppercase">My Journey</h3>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Currently pursuing Computer Science, I've developed a passion for both web development and artificial
                intelligence. What started as curiosity about how websites work has evolved into building full-stack
                applications and experimenting with ML models.
              </p>
              <p>
                I believe in learning by doing. Whether it's implementing a new algorithm, building a web app, or
                contributing to open-source projects, I'm always hands-on with code. The intersection of elegant design
                and intelligent systems is where I thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
