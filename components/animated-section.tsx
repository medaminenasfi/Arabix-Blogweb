"use client"

import React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { JSX } from "react/jsx-runtime"

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "zoom-in" 
  | "zoom-out"
  | "flip-up"
  | "flip-down"
  | "slide-up"
  | "slide-down"
  | "rotate-in"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const animationClasses: Record<AnimationType, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0"
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-12",
    visible: "opacity-100 translate-y-0"
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-12",
    visible: "opacity-100 translate-x-0"
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-12",
    visible: "opacity-100 translate-x-0"
  },
  "zoom-in": {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100"
  },
  "zoom-out": {
    hidden: "opacity-0 scale-110",
    visible: "opacity-100 scale-100"
  },
  "flip-up": {
    hidden: "opacity-0 rotateX-90 perspective-1000",
    visible: "opacity-100 rotateX-0"
  },
  "flip-down": {
    hidden: "opacity-0 -rotateX-90 perspective-1000",
    visible: "opacity-100 rotateX-0"
  },
  "slide-up": {
    hidden: "opacity-0 translate-y-20",
    visible: "opacity-100 translate-y-0"
  },
  "slide-down": {
    hidden: "opacity-0 -translate-y-20",
    visible: "opacity-100 translate-y-0"
  },
  "rotate-in": {
    hidden: "opacity-0 rotate-12 scale-90",
    visible: "opacity-100 rotate-0 scale-100"
  }
}

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className,
  as: Component = "div"
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>()
  const { hidden, visible } = animationClasses[animation]

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all ease-out",
        isInView ? visible : hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </Component>
  )
}
