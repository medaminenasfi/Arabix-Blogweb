"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/articles", label: "المقالات" },
  { href: "/about", label: "عنّا" },
  { href: "/contact", label: "تواصل" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "text-xl font-bold transition-all duration-500",
              isScrolled ? "text-primary" : "text-primary-foreground",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
          >
            <span className="relative">
              مدوّنة المعرفة
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-medium transition-all duration-500 group",
                  isScrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground",
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isScrolled ? "bg-primary" : "bg-primary-foreground"
                )} />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            className={cn(
              "hidden md:flex transition-all duration-500 relative overflow-hidden group",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
            style={{ transitionDelay: "400ms" }}
            variant={isScrolled ? "default" : "secondary"}
          >
            <span className="relative z-10">اشترك الآن</span>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary-foreground/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="قائمة التنقل"
          >
            <div className="relative w-6 h-6">
              <Menu className={cn(
                "absolute inset-0 transition-all duration-300",
                isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )} />
              <X className={cn(
                "absolute inset-0 transition-all duration-300",
                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className={cn(
            "py-4 mt-4 border-t",
            isScrolled ? "border-border" : "border-primary-foreground/20"
          )}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-3 px-4 rounded-lg transition-all duration-300",
                    isScrolled 
                      ? "text-muted-foreground hover:text-foreground hover:bg-muted" 
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10",
                    isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 75}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="w-full mt-2"
                variant={isScrolled ? "default" : "secondary"}
              >
                اشترك الآن
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
