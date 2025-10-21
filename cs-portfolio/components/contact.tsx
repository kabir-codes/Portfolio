"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contactRefs = useRef<(HTMLDivElement | null)[]>([])

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
    if (formRef.current) observer.observe(formRef.current)
    contactRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-background relative overflow-hidden opacity-0 translate-y-10 transition-all duration-700"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary opacity-20 rotate-45" />
      <div className="absolute bottom-20 left-20 w-16 h-16 border-4 border-foreground opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="inline-block p-4 border-4 border-foreground bg-primary brutalist-shadow mb-6">
              <h2 className="text-4xl sm:text-5xl font-black uppercase text-primary-foreground">Contact</h2>
            </div>
            <p className="text-base max-w-2xl">Have a project in mind or just want to chat? Let's connect</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div
              ref={formRef}
              className="p-8 border-4 border-foreground bg-card brutalist-shadow opacity-0 translate-x-[-50px] transition-all duration-700"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 uppercase">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2 border-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 uppercase">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2 border-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 uppercase">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-2 border-foreground focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full brutalist-border brutalist-shadow-sm bg-primary hover:bg-primary/90 font-bold uppercase transition-all hover:scale-105 hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", link: "mailto:hello@example.com", text: "hello@example.com" },
                {
                  icon: Github,
                  title: "GitHub",
                  link: "https://github.com",
                  text: "github.com/yourusername",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  link: "https://linkedin.com",
                  text: "linkedin.com/in/yourprofile",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    contactRefs.current[index] = el
                  }}
                  className="p-6 border-4 border-foreground bg-card brutalist-shadow opacity-0 translate-x-[50px] transition-all duration-700 hover:scale-105 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 border-4 border-foreground flex items-center justify-center flex-shrink-0 bg-primary transition-transform hover:rotate-12">
                      <contact.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 uppercase">{contact.title}</h3>
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-primary transition-colors font-mono"
                      >
                        {contact.text}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-6 border-4 border-foreground bg-muted brutalist-shadow">
                <p className="text-xs font-bold uppercase text-center">
                  Open to freelance • Collaborations • Full-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t-4 border-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase">© 2025 NERD™ • Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
