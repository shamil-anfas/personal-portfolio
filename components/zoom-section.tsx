"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ZoomSectionProps {
  children: React.ReactNode
  /** Scale when the section first enters viewport (default: 0.88) */
  zoomInScale?: number
  /** Scale when the section exits viewport (default: 0.95) */
  zoomOutScale?: number
  /** Additional className for the wrapper */
  className?: string
}

export default function ZoomSection({
  children,
  zoomInScale = 0.88,
  zoomOutScale = 0.95,
  className = "",
}: ZoomSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    // "start end" = section top hits viewport bottom
    // "end start" = section bottom hits viewport top
    offset: ["start end", "start center", "end center", "end start"],
  })

  // Map scroll progress through 4 keyframes (extra-wide spread for very slow feel):
  // 0.0 (entering) → 0.65 (fully visible) → 0.92 (start exit) → 1.0 (exiting)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.65, 0.92, 1],
    [zoomInScale, 1, 1, zoomOutScale]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.92, 1],
    [0.15, 1, 1, 0.4]
  )

  return (
    <div ref={ref} className={`zoom-section-wrapper ${className}`}>
      <motion.div
        style={{
          scale,
          opacity,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
