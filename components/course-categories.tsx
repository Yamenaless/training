import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function CourseCategories() {
  const categories = [
    { title: "Leadership and Management", count: 42 },
    { title: "Finance and Accounting", count: 38 },
    { title: "Human Resources Management (HRM)", count: 25 },
    { title: "Project Management", count: 31 },
    { title: "Marketing and Sales", count: 19 },
    { title: "Oil and Gas Technology", count: 27 },
    { title: "Health, Safety and Environment", count: 23 },
    { title: "Conferences", count: 15 },
    { title: "Quality and Operational Auditing", count: 12 },
    { title: "Supply & Fleet Management", count: 18 },
    { title: "Energy Transition", count: 14 },
    { title: "Urban Planning and Development", count: 9 },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Programs</h2>
            <div className="w-16 h-1 bg-secondary mb-4"></div>
            <p className="text-white/70 max-w-2xl">
              Explore our comprehensive range of professional development programs designed to enhance your skills and
              advance your career.
            </p>
          </div>
          <Link href="/all-programs" className="text-secondary hover:text-white mt-4 md:mt-0 flex items-center">
            View All Programs
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link href={`/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
              <Card className="bg-[#001a4f] hover:bg-[#002677] border-none transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-medium text-white mb-2">{category.title}</h3>
                  <div className="mt-auto pt-4 flex justify-between items-center">
                    <span className="text-white/60 text-sm">{category.count} courses</span>
                    <ChevronRight className="h-5 w-5 text-secondary" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
