"use client"

import { Code, TrendingUp, Briefcase, Lightbulb, ArrowLeft } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const categories = [
  {
    icon: Code,
    title: "تقنية",
    description: "أحدث الأخبار والمقالات في عالم البرمجة والتطوير",
    count: "٤٢ مقال",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/15 text-primary"
  },
  {
    icon: TrendingUp,
    title: "تطوير الذات",
    description: "نصائح وإرشادات لتحسين حياتك الشخصية والمهنية",
    count: "٣٨ مقال",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/20 text-accent-foreground"
  },
  {
    icon: Briefcase,
    title: "أعمال",
    description: "استراتيجيات ريادة الأعمال والتسويق الرقمي",
    count: "٢٩ مقال",
    gradient: "from-secondary to-secondary/50",
    iconBg: "bg-secondary text-secondary-foreground"
  },
  {
    icon: Lightbulb,
    title: "إلهام",
    description: "قصص نجاح ملهمة وتجارب حقيقية من رواد الأعمال",
    count: "٢١ مقال",
    gradient: "from-muted to-muted/50",
    iconBg: "bg-muted text-muted-foreground"
  }
]

export function Categories() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide bg-primary/10 px-4 py-2 rounded-full mb-4">
              اختر ما يناسبك
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              التصنيفات
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              تصفح المقالات حسب اهتماماتك واكتشف محتوى مخصص لك
            </p>
          </AnimatedSection>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ category, index }: { category: typeof categories[0]; index: number }) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>()
  const Icon = category.icon

  return (
    <div
      ref={ref}
      className={cn(
        "group relative bg-card p-8 rounded-2xl border border-border cursor-pointer overflow-hidden",
        "transition-all duration-500",
        "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Gradient Background on Hover */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        category.gradient
      )} />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with Animation */}
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
          "transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
          category.iconBg
        )}>
          <Icon className="w-8 h-8" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
          {category.title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {category.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">
            {category.count}
          </span>
          
          <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-all duration-300 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            استكشف
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </span>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />
    </div>
  )
}
