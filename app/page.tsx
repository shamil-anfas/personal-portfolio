import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shamil Anfas K | Python Full Stack & AI Developer",
  description:
    "Portfolio of Shamil Anfas K, a Python Full Stack & AI Developer specializing in Python, Django, FastAPI, React, Generative AI, and RAG solutions.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
