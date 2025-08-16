import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Heart, Clock } from "lucide-react"

export function FeaturedCourses() {
  // Filter to show only scheduled courses (courses with nextDate)
  const scheduledCourses = [
    {
      id: "leadership-strategy",
      title: "Leadership Strategy & Coaching for Emerging Leaders",
      code: "MATH6478",
      duration: "1 week",
      category: "leadership",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Develop essential leadership skills and strategic thinking for emerging leaders",
      nextDate: "March 15-19, 2024"
    },
    {
      id: "stakeholder-management",
      title: "Comprehensive Stakeholder Management Masterclass",
      code: "MAST3852",
      duration: "1 week",
      category: "leadership",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      description: "Master the art of managing stakeholders effectively in complex projects",
      nextDate: "March 22-25, 2024"
    },
    {
      id: "advanced-negotiation",
      title: "Mastering Advanced Negotiation: Strategies for Business Leaders",
      code: "MAAD1968",
      duration: "1 week",
      category: "leadership",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Learn advanced negotiation techniques and strategies for business success",
      nextDate: "April 8-12, 2024"
    },
    {
      id: "supervisory-leadership",
      title: "Essential Supervisory & Leadership Skills Training",
      code: "MABU7964",
      duration: "1 week",
      category: "leadership",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Build essential supervisory and leadership skills for team management",
      nextDate: "April 15-20, 2024"
    },
    {
      id: "crisis-management",
      title: "Crisis Management & Leadership Under Pressure",
      code: "MACR2283",
      duration: "1 week",
      category: "leadership",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Develop crisis management skills and lead effectively under pressure",
      nextDate: "May 6-9, 2024"
    },
    {
      id: "corporate-risk-management",
      title: "Strategic Corporate Risk & Crisis Management",
      code: "MACO4202",
      duration: "1 week",
      category: "business-strategy",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Master strategic risk management and crisis response in corporate environments",
      nextDate: "May 13-17, 2024"
    },
    {
      id: "goal-setting",
      title: "Effective Goal Setting, Planning & Decision-Making",
      code: "MAG09874",
      duration: "1 week",
      category: "business-strategy",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      description: "Learn effective goal setting, strategic planning, and decision-making frameworks",
      nextDate: "June 3-7, 2024"
    },
    {
      id: "creative-problem-solving",
      title: "Creative Problem Solving & Innovative Thinking",
      code: "MAP05632",
      duration: "1 week",
      category: "business-strategy",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Develop creative problem-solving skills and innovative thinking approaches",
      nextDate: "June 10-14, 2024"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-4">
            Scheduled Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our upcoming scheduled courses designed to enhance your professional skills and advance your career.
          </p>
        </div>

        {/* Courses Grid - 4 columns on desktop, responsive on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {scheduledCourses.map((course) => (
            <div
              key={course.id}
              className="h-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group flex flex-col"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-4 flex-1 flex flex-col">
                {/* Course Title */}
                <h3 className="text-lg font-bold text-[#16335c] mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-300">
                  {course.title}
                </h3>
                
                {/* Course Code */}
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Heart className="h-4 w-4 mr-2 text-[#ebb207]" />
                  <span>{course.code}</span>
                </div>
                
                {/* Duration */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{course.duration}</span>
                </div>

                {/* Next Date */}
                <div className="text-sm text-gray-700 mb-4 font-medium">
                  Next: {course.nextDate}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Button className="flex-1 bg-secondary hover:bg-[#d4a006] text-white text-sm py-2 transition-all duration-300">
                    Explore Dates
                  </Button>
                  <Button className="flex-1 bg-secondary hover:bg-[#d4a006] text-white text-sm py-2 transition-all duration-300">
                    Explore Cities
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom training solution? Contact our team for tailored programs.
          </p>
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
