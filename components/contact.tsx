"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowUpCircle,
} from "lucide-react";
import Link from "next/link";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "shamilanfas.in@gmail.com",
      link: "mailto:shamilanfas.in@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Kerala, India",
      link: null,
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 8848399279",
      link: "tel:+918848399279",
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xykrnade", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full bg-muted/30">
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get In Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {/* Have a project in mind or want to discuss opportunities?
                I&apos;d love to hear from you! */}
                Have a project, an opportunity, or an idea worth discussing?
                Let’s connect and make it happen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    {status === "success" ? (
                      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                          <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-muted-foreground max-w-sm">
                          Thank you for reaching out. I&apos;ll get back to you
                          as soon as possible!
                        </p>
                        <Button
                          variant="outline"
                          className="mt-2"
                          onClick={() => setStatus("idle")}
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium"
                            >
                              Name
                            </label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Your email"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Subject of your message"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            className="min-h-[150px]"
                            required
                          />
                        </div>

                        {status === "error" && (
                          <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 px-4 py-3 text-sm text-red-700 dark:text-red-400">
                            <AlertCircle className="h-4 w-4 shrink-0" />
                            <span>
                              Something went wrong. Please try again or email me
                              directly.
                            </span>
                          </div>
                        )}

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={status === "sending"}
                        >
                          {status === "sending" ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending…
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors break-all"
                            target={
                              info.title === "Location" ? "_blank" : undefined
                            }
                            rel={
                              info.title === "Location"
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Connect with me</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Let’s stay connected
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href="https://github.com/shamil-anfas"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href="https://linkedin.com/in/shamilanfas"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="mailto:shamilanfas.in@gmail.com">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <rect
                              width="20"
                              height="16"
                              x="2"
                              y="4"
                              rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          <span className="sr-only">Email</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href="https://wa.me/918848399279?text=Hi%20Shamil!%20%F0%9F%91%8B%20I%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20connect."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                          </svg>
                          <span className="sr-only">WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-center pt-8 js-only">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="transition-transform hover:scale-110"
                aria-label="Back to top"
              >
                <ArrowUpCircle className="h-10 w-10 text-primary animate-bounce" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
