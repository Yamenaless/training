import { CombinedNavbar } from "@/components/combined-navbar"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { CategoryCoursesGrid } from "@/components/category-courses-grid"
import { notFound } from "next/navigation"
import { getCategoryById, getCoursesByCategory } from "@/lib/data"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryById(params.slug)
  
  if (!category) {
    notFound()
  }

  const categoryCourses = getCoursesByCategory(params.slug)

  return (
    <main className="min-h-screen flex flex-col">
      <CombinedNavbar />
      <CategoryHero category={category} />
      <CategoryCoursesGrid courses={categoryCourses} category={category} />
      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  const { getAllCategories } = await import("@/lib/data")
  return getAllCategories().map((category) => ({
    slug: category.id,
  }))
}
