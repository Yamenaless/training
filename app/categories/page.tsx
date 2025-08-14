import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseCategories } from "@/components/course-categories"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Header />
      <section className="pt-28 container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Categories</h1>
        <p className="text-white/70 mb-12 max-w-2xl">
          Explore course categories across leadership, finance, HR, project management, marketing, and more.
        </p>
      </section>
      <CourseCategories />
      <Footer />
    </main>
  )
}





