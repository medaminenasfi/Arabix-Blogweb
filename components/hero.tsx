"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-blog.jpg"
          alt="مدوّنة المعرفة"
          fill
          className={`object-cover transition-all duration-1000 ${isLoaded ? "scale-100" : "scale-110"}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-foreground/80 via-foreground/60 to-foreground/40" />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <div 
            className={`inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              مرحباً بك في عالم المعرفة
            </span>
          </div>
          
          {/* Animated Title with Character Stagger Effect */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 text-balance transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <span className="block overflow-hidden">
              <span className={`block transition-transform duration-700 delay-300 ${isLoaded ? "translate-y-0" : "translate-y-full"}`}>
                مدونة عربية
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className={`block text-primary transition-transform duration-700 delay-500 ${isLoaded ? "translate-y-0" : "translate-y-full"}`}>
                للمحتوى الهادف
              </span>
            </span>
          </h1>
          
          {/* Description with Line Animation */}
          <p 
            className={`text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            نقدم لك محتوى عربي أصيل في مجالات التقنية وتطوير الذات والأعمال. 
            انضم إلى آلاف القراء الذين يثقون بنا.
          </p>
          
          {/* Animated Buttons */}
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button 
              size="lg" 
              className="gap-2 group relative overflow-hidden bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10">استكشف المقالات</span>
              <ArrowLeft className="w-4 h-4 relative z-10 transition-transform group-hover:-translate-x-2" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary-foreground/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground/50 transition-all duration-300"
            >
              تعرّف علينا
            </Button>
          </div>

          {/* Stats Counter */}
          <div 
            className={`flex gap-8 mt-12 pt-8 border-t border-primary-foreground/20 transition-all duration-700 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <CounterStat value={130} label="مقال منشور" suffix="+" />
            <CounterStat value={10} label="ألف قارئ" suffix="+" />
            <CounterStat value={4} label="تصنيفات" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 delay-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col items-center gap-2 text-primary-foreground/60 animate-bounce">
          <span className="text-sm">اكتشف المزيد</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  )
}

function CounterStat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
        {suffix}{count}
      </div>
      <div className="text-sm text-primary-foreground/70">{label}</div>
    </div>
  )
}
