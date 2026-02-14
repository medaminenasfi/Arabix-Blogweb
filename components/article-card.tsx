"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  slug: string
  index?: number
}

export function ArticleCard({ 
  title, 
  excerpt, 
  image, 
  category, 
  date, 
  readTime, 
  slug,
  index = 0 
}: ArticleCardProps) {
  const { ref, isInView } = useScrollAnimation<HTMLElement>()

  return (
    <article 
      ref={ref}
      className={cn(
        "group bg-card rounded-2xl overflow-hidden border border-border transition-all duration-700",
        "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Link href={`/articles/${slug}`} className="block">
        {/* Image Container with Overlay Animation */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay that animates on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Category Badge with Animation */}
          <div className="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110">
            <Badge className="bg-primary text-primary-foreground shadow-lg">
              {category}
            </Badge>
          </div>

          {/* Read More Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
              <span className="font-medium">اقرأ المقال</span>
              <ArrowLeft className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {excerpt}
          </p>

          {/* Meta with animated underline */}
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 group-hover:text-foreground transition-colors">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-1.5 group-hover:text-foreground transition-colors">
                <Clock className="w-4 h-4" />
                {readTime}
              </span>
            </div>
            
            <span className="flex items-center gap-1 text-primary transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              المزيد
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
