import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  codeLink: string;
  demoLink?: string;
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Freelance Marketplace",
      description:
        "A full-stack Freelance Marketplace platform that connects clients with skilled freelancers. Clients can post projects, review applications, and hire talent — while freelancers can browse opportunities, apply, and manage their work — all within a clean, role-based interface.",
      tags: [
        "Django",
        "DRF",
        "PostgreSQL",
        "Redis",
        "Celery",
        "Simple JWT",
        "Docker",
        "React 19",
        "Redux Toolkit",
        "React Router",
        "Tailwind CSS",
        "Stripe SDK",
        "Nginx",
        "Gunicorn",
      ],
      codeLink: "https://github.com/shamil-anfas/freelance-marketplace",
      demoLink: "https://freelancemarketplace-two.vercel.app/",
      image: "/projects/freelance-marketplace.png",
    },
    {
      title: "LeadAudit Pro",
      description:
        "A full-stack lead generation and website auditing platform that analyzes websites, evaluates performance and key business signals, and generates structured audit reports to identify improvement opportunities and potential leads.",
      tags: [
        "FastAPI",
        "Next.js",
        "Groq",
        "Apify",
        "PageSpeed API",
        "Google Sheets API",
      ],
      codeLink: "https://github.com/shamil-anfas/Lead_Audit",
      demoLink: "https://leadaudit-pro.vercel.app/",
      image: "/projects/leadaudit-pro.png",
    },
    {
      title: "AI Resume Analyzer (ATS Optimization Tool)",
      description:
        "A resume analysis platform that compares resumes against job descriptions, identifies skill and keyword gaps, and provides actionable suggestions to improve ATS compatibility.",
      tags: ["FastAPI", "LangChain", "React", "PyMuPDF", "LLM"],
      codeLink: "https://github.com/shamil-anfas/ai-resume-analyzer",
      demoLink: "https://ai-resume-analyzer-olive-kappa.vercel.app/",
      image: "/projects/ai-resume-analyzer.png",
    },
    {
      title: "Mentor Slot Booking System",
      description:
        "A mentorship scheduling platform that allows users to manage availability, book mentor slots, and receive automated email notifications.",
      tags: ["Django", "DRF", "PostgreSQL", "Celery", "Redis"],
      codeLink: "https://github.com/shamil-anfas/mentor-booking",
      image: "/projects/mentor-booking.png",
    },

    {
      title: "AI Document Assistant",
      description:
        "A document assistant that lets users upload files, ask questions about their content, and receive context-aware answers using retrieval-based search.",
      tags: ["FastAPI", "LangChain", "FAISS", "LLMs", "RAG"],
      codeLink: "https://github.com/shamil-anfas",
      image: "/projects/ai-document-assistant.png",
    },
    {
      title: "AI Client Onboarding Automation",
      description:
        "An automation built in Make that turns a sales handover into a fully set-up client project in seconds. An AI model reads the deal notes, extracts the scope, plans the tasks and flags risks. The workflow writes the project board, sends the client a welcome email and alerts the delivery team on Slack.",
      tags: [
        "Make",
        "Google Gemini",
        "Webhook",
        "Google Sheets",
        "Gmail",
        "Slack",
        "AI Automation",
        "JSON",
      ],
      codeLink: "https://github.com/shamil-anfas/onboarding-automation",
      image: "/projects/ai-onboarding-automation.jpg",
    },
    {
      title: "Hospital Appointment Booking Bot",
      description:
        "A Telegram bot that lets patients book appointments with doctors across multiple hospital departments. Patients tap through menus or type what they need, and an AI model routes them to the right department. Live availability, double-booking protection and booking data are handled by an n8n workflow backed by Google Sheets.",
      tags: [
        "n8n",
        "Telegram Bot API",
        "Google Gemini",
        "Google Sheets",
        "JavaScript",
        "AI Routing",
        "Webhook",
      ],
      codeLink: "https://github.com/shamil-anfas/hospital-appointment-bot",
      image: "/projects/hospital-appointment-bot.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of projects where ideas, engineering, and real-world
              problems come together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card flex">
                <Card className="overflow-hidden h-full flex flex-col w-full group">
                  {project.image && (
                    <div className="relative w-full h-48 overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">
                      {project.description}
                    </p>
                    <div className="project-tags mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4 flex items-center gap-2 flex-wrap">
                      <Button size="sm" variant="outline" asChild>
                        <Link
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1.5 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.demoLink && (
                        <Button size="sm" asChild>
                          <Link
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1.5 h-4 w-4" /> Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
