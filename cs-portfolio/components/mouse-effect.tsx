"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  life: number
  maxLife: number
  vx: number
  vy: number
}

export function MouseEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Create new particles
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          size: Math.random() * 8 + 4,
          life: 0,
          maxLife: Math.random() * 30 + 20,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Get computed style to check for dark mode
      const isDark = document.documentElement.classList.contains("dark")

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life++
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vy += 0.1 // Gravity

        const alpha = 1 - particle.life / particle.maxLife

        if (alpha > 0) {
          // Draw pixelated square
          ctx.fillStyle = isDark ? `rgba(239, 68, 68, ${alpha})` : `rgba(239, 68, 68, ${alpha * 0.8})`
          ctx.fillRect(Math.floor(particle.x), Math.floor(particle.y), particle.size, particle.size)

          // Add border for brutalist effect
          ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${alpha * 0.5})` : `rgba(0, 0, 0, ${alpha * 0.3})`
          ctx.lineWidth = 2
          ctx.strokeRect(Math.floor(particle.x), Math.floor(particle.y), particle.size, particle.size)

          return true
        }
        return false
      })

      // Limit particles
      if (particlesRef.current.length > 100) {
        particlesRef.current = particlesRef.current.slice(-100)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-40" style={{ mixBlendMode: "normal" }} />
  )
}
