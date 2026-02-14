import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LatestArticles } from "@/components/latest-articles"
import { Categories } from "@/components/categories"
import { Newsletter } from "@/components/newsletter"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LatestArticles />
      <Categories />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  )
}
