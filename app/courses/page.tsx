import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CoursesHero } from "@/components/courses-hero"
import { CourseFinder } from "@/components/course-finder"
import { FeaturedCourses } from "@/components/featured-courses"
import { CourseCategories } from "@/components/course-categories"
import { CallToAction } from "@/components/call-to-action"

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Header />
      <CoursesHero />
      <CourseFinder />
      <FeaturedCourses />
      <CourseCategories />
      <CallToAction />
      <Footer />
    </main>
  )
}



