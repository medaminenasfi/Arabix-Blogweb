"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, Sparkles, Send } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubscribed(true)
      setEmail("")
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-foreground/5 animate-float"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              left: `${10 + i * 12}%`,
              top: `${10 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${5 + i}s`
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated Icon */}
          <AnimatedSection animation="zoom-in">
            <div className="relative w-20 h-20 mx-auto mb-8">
              <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl animate-ping" style={{ animationDuration: "2s" }} />
              <div className="relative w-20 h-20 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-primary-foreground/20">
                <Mail className="w-10 h-10" />
              </div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary-foreground/80 animate-pulse" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              اشترك في النشرة البريدية
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-primary-foreground/80 mb-10 text-lg max-w-xl mx-auto">
              احصل على أحدث المقالات والنصائح مباشرة في بريدك الإلكتروني، مرة واحدة أسبوعياً
            </p>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection animation="fade-up" delay={300}>
            {!isSubscribed ? (
              <form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <div className="relative flex-1 group">
                  <Input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:ring-2 focus:ring-primary-foreground/20 pr-12 transition-all duration-300"
                    required
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50 group-focus-within:text-primary-foreground transition-colors" />
                </div>
                <Button 
                  type="submit"
                  variant="secondary"
                  size="lg"
                  disabled={isLoading}
                  className="h-14 px-8 font-semibold group relative overflow-hidden"
                >
                  <span className={`flex items-center gap-2 transition-all duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                    اشترك الآن
                    <Send className="w-4 h-4 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-xl font-semibold">شكراً لاشتراكك!</p>
                <p className="text-primary-foreground/80">سنتواصل معك قريباً بأحدث المقالات</p>
              </div>
            )}
          </AnimatedSection>

          {/* Trust Badges */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                بدون إزعاج
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                إلغاء في أي وقت
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                نحترم خصوصيتك
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
