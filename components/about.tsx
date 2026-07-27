import { Card, CardContent } from "@/components/ui/card";
import { Bot, Code2, Database, Server } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description:
        "Building reliable systems that handle application logic, data, authentication, and core business operations.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI & Automation",
      description:
        "Creating intelligent solutions and automated workflows that simplify tasks, reduce manual effort, and solve practical problems.",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data & Database Systems",
      description:
        "Designing and managing structured data systems that keep applications organized, efficient, and ready to scale.",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description:
        "Turning ideas into complete web applications with smooth experiences and reliable functionality from front to back.",
    },
  ];

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a Python Full Stack &amp; AI Developer with hands-on
                experience building real-world applications, automation
                workflows, and production-focused software solutions.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                My experience spans backend development, full-stack
                applications, and AI-powered systems, from designing RESTful
                APIs and database-driven applications to developing RAG
                solutions, AI agents, and automated workflows. I focus on
                writing clean, maintainable code and building reliable, scalable
                solutions that solve practical problems and deliver meaningful
                value to users and businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
