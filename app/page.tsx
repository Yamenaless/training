import { CombinedNavbar } from "@/components/combined-navbar"
import { Hero } from "@/components/hero"
import { CourseCategories } from "@/components/course-categories"
import { CourseFinder } from "@/components/course-finder"
import { FeaturedCourses } from "@/components/featured-courses"
import { Testimonials } from "@/components/testimonials"
import { TrainersShowcase } from "@/components/trainers-showcase"
import { UpcomingEvents } from "@/components/upcoming-events"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <CombinedNavbar />
      <Hero />
      <CourseFinder />
      <CourseCategories />
      <FeaturedCourses />
      <TrainersShowcase />
      <UpcomingEvents />
      <Testimonials />
      <AboutSection />
      <CallToAction />
      <Footer />
    </main>
  )
}
