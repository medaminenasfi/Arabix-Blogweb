"use client"

import Link from "next/link"
import { Twitter, Instagram, Linkedin, Youtube, Heart, ArrowUp } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const footerLinks = {
  quickLinks: [
    { href: "/", label: "الرئيسية" },
    { href: "/articles", label: "المقالات" },
    { href: "/about", label: "عنّا" },
    { href: "/contact", label: "تواصل" },
  ],
  categories: [
    { href: "/category/tech", label: "تقنية" },
    { href: "/category/self-development", label: "تطوير الذات" },
    { href: "/category/business", label: "أعمال" },
    { href: "/category/inspiration", label: "إلهام" },
  ],
  social: [
    { href: "#", icon: Twitter, label: "تويتر" },
    { href: "#", icon: Instagram, label: "انستغرام" },
    { href: "#", icon: Linkedin, label: "لينكدإن" },
    { href: "#", icon: Youtube, label: "يوتيوب" },
  ]
}

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <AnimatedSection animation="fade-up" className="md:col-span-1">
            <Link href="/" className="text-3xl font-bold mb-4 block text-background">
              مدوّنة المعرفة
            </Link>
            <p className="text-background/70 mb-6 leading-relaxed">
              مدونة عربية عصرية للمحتوى الهادف في مجالات التقنية وتطوير الذات والأعمال
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {footerLinks.social.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 bg-background/10 rounded-xl flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h3 className="font-bold text-lg mb-6 text-background">روابط سريعة</h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-background hover:translate-x-2 transition-all duration-300 inline-block"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Categories */}
          <AnimatedSection animation="fade-up" delay={200}>
            <h3 className="font-bold text-lg mb-6 text-background">التصنيفات</h3>
            <ul className="space-y-4">
              {footerLinks.categories.map((link, index) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-background hover:translate-x-2 transition-all duration-300 inline-block"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection animation="fade-up" delay={300}>
            <h3 className="font-bold text-lg mb-6 text-background">تواصل معنا</h3>
            <ul className="space-y-4 text-background/70">
              <li className="hover:text-background transition-colors">
                البريد: info@knowledge-blog.com
              </li>
              <li className="hover:text-background transition-colors">
                الهاتف: +966 50 000 0000
              </li>
              <li className="hover:text-background transition-colors">
                الرياض، المملكة العربية السعودية
              </li>
            </ul>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm flex items-center gap-2">
              صُنع بـ <Heart className="w-4 h-4 text-red-400 animate-pulse" /> في المملكة العربية السعودية
            </p>
            <p className="text-background/50 text-sm">
              جميع الحقوق محفوظة © ٢٠٢٦ مدوّنة المعرفة
            </p>
            <div className="flex gap-6 text-sm text-background/50">
              <Link href="/privacy" className="hover:text-background transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="hover:text-background transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 left-8 w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 transition-all duration-500 hover:scale-110 hover:shadow-xl z-50",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        )}
        aria-label="العودة للأعلى"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
