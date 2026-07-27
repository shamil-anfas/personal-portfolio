import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import ClientLayout from "./client";
import { Suspense } from "react";
import { Mona_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NoScriptStyles from "@/components/noscript-styles";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shamilanfas.com"),
  title: "Shamil Anfas | Python Full Stack & AI Developer",
  description:
    "Portfolio of Shamil Anfas, a Python Full Stack & AI Developer specializing in Python, Django, FastAPI, React, Generative AI, and RAG solutions.",
  keywords: [
    "Shamil Anfas",
    "Python Developer",
    "Full Stack Developer",
    "AI Developer",
    "Django",
    "FastAPI",
    "React",
    "Generative AI",
    "RAG",
    "LangChain",
  ],
  authors: [{ name: "Shamil Anfas" }],
  creator: "Shamil Anfas",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Shamil Anfas | Python Full Stack & AI Developer",
    description:
      "Portfolio of Shamil Anfas, a Python Full Stack & AI Developer specializing in Python, Django, FastAPI, React, Generative AI, and RAG solutions.",
    siteName: "Shamil Anfas Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Shamil Anfas Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamil Anfas | Python Full Stack & AI Developer",
    description:
      "Portfolio of Shamil Anfas, a Python Full Stack & AI Developer specializing in Python, Django, FastAPI, React, Generative AI, and RAG solutions.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <NoScriptStyles />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-mono antialiased",
          fontSans.variable,
        )}
      >
        <Suspense fallback={null}>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
