"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ROLES = [
  "Python Full Stack & AI Developer",
  "Full Stack Engineer",
  "Backend Developer",
  "AI & Automation Engineer",
  "Generative AI Developer",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false)
      setTimeout(() => {
        // Switch role then fade in
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
        setVisible(true)
      }, 500) // half-second fade-out before switching
    }, 3000) // total display time per role

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 1.2,
          }}
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-balance">
              Hi, I&apos;m <span className="gradient-text">Shamil Anfas</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              <span
                className="js-only inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(-8px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  minHeight: "1.5em",
                }}
              >
                {ROLES[roleIndex]}
              </span>
              <noscript>
                <span>Python Full Stack & AI Developer | Django | FastAPI | Generative AI | RAG</span>
              </noscript>
            </p>
          </div>
          <div className="max-w-[700px] text-muted-foreground">
            <p className="text-lg text-pretty">
              Turning ideas into scalable web applications, intelligent AI solutions, and automated workflows.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="/Shamil_Anfas_Resume.pdf" download="Shamil_Anfas_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/shamil-anfas" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/shamilanfas" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:shamilanfas.in@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://wa.me/918848399279?text=Hi%20Shamil!%20%F0%9F%91%8B%20I%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20connect." target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
