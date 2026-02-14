"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Users, Star, Zap } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useEffect, useState } from "react"

const stats = [
  { icon: BookOpen, value: 130, label: "مقال منشور", suffix: "+" },
  { icon: Users, value: 10, label: "ألف قارئ", suffix: "+" },
  { icon: Star, value: 98, label: "% رضا القراء", suffix: "" },
]

export function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-2xl shadow-primary/5">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-accent/10 rounded-full animate-float" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <AnimatedSection animation="fade-right">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  انضم إلينا اليوم
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={100}>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-card-foreground leading-tight">
                  انضم إلى مجتمع
                  <span className="text-primary"> المعرفة</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={200}>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  كن جزءاً من مجتمع يضم آلاف القراء العرب الشغوفين بالتعلم والتطور المستمر
                </p>
              </AnimatedSection>
              
              {/* Stats */}
              <AnimatedSection animation="fade-right" delay={300}>
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {stats.map((stat, index) => (
                    <StatCounter key={stat.label} stat={stat} delay={index * 200} />
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={400}>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="gap-2 group relative overflow-hidden shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  >
                    <span className="relative z-10">ابدأ رحلتك الآن</span>
                    <ArrowLeft className="w-4 h-4 relative z-10 transition-transform group-hover:-translate-x-2" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary-foreground/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent hover:bg-muted transition-all duration-300"
                  >
                    تصفح المقالات
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            {/* Visual Animation */}
            <AnimatedSection animation="zoom-in" delay={200} className="hidden md:block">
              <div className="relative flex items-center justify-center">
                {/* Animated Circles */}
                <div className="relative w-80 h-80">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" />
                  
                  {/* Middle Ring with Dots */}
                  <div className="absolute inset-8 border-2 border-primary/30 rounded-full animate-spin-reverse">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-primary rounded-full"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `rotate(${i * 60}deg) translateX(120px) translateY(-50%)`
                        }}
                      />
                    ))}
                  </div>

                  {/* Pulsing Circles */}
                  <div className="absolute inset-12 bg-primary/10 rounded-full animate-pulse" />
                  <div className="absolute inset-16 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute inset-20 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/50 animate-float">
                      <BookOpen className="w-12 h-12 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute top-4 right-8 w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0.3s" }}>
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-8 left-4 w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0.6s" }}>
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCounter({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const [count, setCount] = useState(0)
  const Icon = stat.icon

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCount(stat.value)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [stat.value, delay])

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-1 text-primary mb-1">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-card-foreground">
        {stat.suffix}{count}{stat.suffix === "%" ? "%" : ""}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  )
}
