"use client"

import { ArticleCard } from "@/components/article-card"
import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const articles = [
  {
    title: "كيف تبني مستقبلك في عالم التقنية المتغير",
    excerpt: "اكتشف أهم المهارات التقنية المطلوبة في سوق العمل وكيفية تطويرها خطوة بخطوة",
    image: "/images/article-tech.jpg",
    category: "تقنية",
    date: "٢٠ يناير ٢٠٢٦",
    readTime: "٥ دقائق",
    slug: "build-tech-future"
  },
  {
    title: "أسرار النجاح: عادات يومية تغير حياتك",
    excerpt: "تعرف على العادات الصباحية التي يتبعها أنجح رواد الأعمال حول العالم",
    image: "/images/article-growth.jpg",
    category: "تطوير الذات",
    date: "١٨ يناير ٢٠٢٦",
    readTime: "٧ دقائق",
    slug: "success-habits"
  },
  {
    title: "دليلك الشامل لبدء مشروعك الخاص",
    excerpt: "من الفكرة إلى التنفيذ: كل ما تحتاج معرفته لإطلاق مشروعك التجاري بنجاح",
    image: "/images/article-business.jpg",
    category: "أعمال",
    date: "١٥ يناير ٢٠٢٦",
    readTime: "١٠ دقائق",
    slug: "start-business-guide"
  }
]

export function LatestArticles() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide bg-primary/10 px-4 py-2 rounded-full mb-4">
              استكشف أحدث المقالات
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
              آخر المقالات
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              مجموعة مختارة من أفضل المقالات في مجالات التقنية وتطوير الذات والأعمال
            </p>
          </AnimatedSection>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} {...article} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 group bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            عرض جميع المقالات
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
