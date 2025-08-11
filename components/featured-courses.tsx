import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Management & Leadership",
      description:
        "Leadership courses integrate strategic methodologies and practical applications that lead to effective management and organizational success.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Leadership",
    },
    {
      id: 2,
      title: "Finance and Accounting Seminars",
      description:
        "Finance courses provide the tools and techniques to develop financial strategies, business planning and investment decision-making skills.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Finance",
    },
    {
      id: 3,
      title: "HRM Training Seminar",
      description:
        "Human Resources Management Courses: HRM Course, Human Capital Course and HR Workshop (Human Resources Management Course).",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "HR",
    },
    {
      id: 4,
      title: "Project, Contract & Procurement",
      description:
        "Supply, Contract Writing, Purchasing Seminars and Supply Chain - Professional Purchasing Project Management Purchasing Seminars.",
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Project",
    },
    {
      id: 5,
      title: "PR & Customer Service",
      description:
        "Public Relations Courses, Customer Service Solutions Consultant, The Media Relations: Media conducts media relations and public relations training workshops and seminars for a business.",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "PR",
    },
    {
      id: 6,
      title: "Engineering, Oil and Gas",
      description:
        "Petroleum Engineering, Oil & Gas Exploration, Drilling and Completion Fluids, Drilling Fluid Engineering, Drilling Rig Maintenance.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Engineering",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#001a4f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Public Courses</h2>
            <div className="w-16 h-1 bg-secondary mb-4"></div>
            <p className="text-white/70 max-w-2xl">
              Euro Training's primary focus is on learning and development planning rather than matching participants
              against a set of criteria. Our practical and interactive approach to courses follows the case study
              methodology and focuses on clear learning and skills development to meet the ever changing demands of
              business professionals.
            </p>
          </div>
          <Link href="/all-courses" className="text-secondary hover:text-white mt-4 md:mt-0 flex items-center">
            View All Courses
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="bg-black border border-white/10 overflow-hidden course-card">
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-secondary text-black px-3 py-1 text-sm font-medium rounded">
                  {course.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                <p className="text-white/70 text-sm mb-6 line-clamp-3">{course.description}</p>
                <div className="flex justify-between items-center">
                  <Button variant="link" className="text-secondary hover:text-white p-0 flex items-center">
                    Read more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
