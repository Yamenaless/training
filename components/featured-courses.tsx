import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Calendar, Clock, MapPin, Star } from "lucide-react"

export function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Advanced Leadership & Strategic Management",
      description:
        "Master the art of strategic leadership with proven methodologies for organizational success, team development, and change management.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Leadership",
      duration: "5 Days",
      location: "London, Dubai, Istanbul",
      price: "£2,500",
      rating: 4.8,
      reviews: 127,
      nextDate: "March 15-19, 2024"
    },
    {
      id: 2,
      title: "Financial Strategy & Business Planning",
      description:
        "Develop comprehensive financial strategies, master business planning techniques, and enhance investment decision-making skills.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Finance",
      duration: "4 Days",
      location: "Paris, New York, Dubai",
      price: "£2,200",
      rating: 4.9,
      reviews: 89,
      nextDate: "March 22-25, 2024"
    },
    {
      id: 3,
      title: "Strategic HR Management & Talent Development",
      description:
        "Transform your HR function with strategic approaches to talent acquisition, development, and organizational culture building.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "HR",
      duration: "5 Days",
      location: "London, Istanbul, Dubai",
      price: "£2,300",
      rating: 4.7,
      reviews: 156,
      nextDate: "April 8-12, 2024"
    },
    {
      id: 4,
      title: "Project Management Professional (PMP) Preparation",
      description:
        "Comprehensive preparation for PMP certification with real-world project management methodologies and best practices.",
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Project Management",
      duration: "6 Days",
      location: "Dubai, London, Paris",
      price: "£2,800",
      rating: 4.9,
      reviews: 203,
      nextDate: "April 15-20, 2024"
    },
    {
      id: 5,
      title: "Digital Marketing & Sales Strategy",
      description:
        "Master modern digital marketing techniques, sales strategies, and customer relationship management for business growth.",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Marketing",
      duration: "4 Days",
      location: "New York, Dubai, Istanbul",
      price: "£2,100",
      rating: 4.6,
      reviews: 94,
      nextDate: "May 6-9, 2024"
    },
    {
      id: 6,
      title: "Oil & Gas Technology & Operations",
      description:
        "Advanced training in petroleum engineering, drilling operations, and oil & gas exploration technologies.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Engineering",
      duration: "5 Days",
      location: "Dubai, London, Houston",
      price: "£3,200",
      rating: 4.8,
      reviews: 167,
      nextDate: "May 13-17, 2024"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#001a4f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Courses</h2>
            <div className="w-16 h-1 bg-secondary mb-4"></div>
            <p className="text-white/70 max-w-2xl">
              Our most popular and highly-rated professional development courses designed to deliver 
              measurable results and lasting impact on your career and organization.
            </p>
          </div>
          <Link href="/all-courses" className="text-secondary hover:text-white mt-4 md:mt-0 flex items-center">
            View All Courses
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="bg-black border border-white/10 overflow-hidden course-card group">
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-black px-3 py-1 text-sm font-medium">
                    {course.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-black/80 text-white px-2 py-1 rounded text-sm">
                  <Star className="h-3 w-3 text-secondary fill-current mr-1" />
                  {course.rating}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                  {course.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">{course.description}</p>
                
                {/* Course Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-white/60 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-white/60 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {course.location}
                  </div>
                  <div className="flex items-center text-white/60 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {course.nextDate}
                  </div>
                </div>

                {/* Price and Rating */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-secondary">{course.price}</div>
                  <div className="text-white/60 text-sm">
                    {course.reviews} reviews
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-black">
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button className="bg-secondary text-black hover:bg-white">
                    Enroll Now
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
