import { CombinedNavbar } from "@/components/combined-navbar"
import { Footer } from "@/components/footer"
import { CategoriesHero } from "@/components/categories-hero"
import { CategoriesGrid } from "@/components/categories-grid"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <CombinedNavbar />
      <CategoriesHero />
      <CategoriesGrid />
      <Footer />
    </main>
  )
}








