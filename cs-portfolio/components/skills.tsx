"use client"

import { useEffect, useRef } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "Supabase", level: 80 },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", level: 85 },
      { name: "TensorFlow", level: 70 },
      { name: "PyTorch", level: 65 },
      { name: "NLP", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Figma", level: 75 },
    ],
  },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-muted relative overflow-hidden opacity-0 translate-y-10 transition-all duration-700"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-foreground opacity-20 rotate-12" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block p-4 border-4 border-foreground bg-background brutalist-shadow mb-6">
              <h2 className="text-4xl sm:text-5xl font-black uppercase">Skills</h2>
            </div>
            <p className="text-base max-w-2xl">Technologies and tools I use to build modern applications</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                ref={(el) => {
                  categoryRefs.current[index] = el
                }}
                className="p-6 border-4 border-foreground bg-background brutalist-shadow opacity-0 translate-y-10 transition-all duration-700 hover:scale-[1.02]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-6 uppercase border-b-4 border-foreground pb-3">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold uppercase">{skill.name}</span>
                        <span className="text-sm font-bold">{skill.level}%</span>
                      </div>
                      {/* Brutalist progress bar */}
                      <div className="h-4 border-2 border-foreground bg-background overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border-4 border-foreground bg-background brutalist-shadow text-center">
            <p className="text-sm font-bold uppercase">Always learning and exploring new technologies</p>
          </div>
        </div>
      </div>
    </section>
  )
}
