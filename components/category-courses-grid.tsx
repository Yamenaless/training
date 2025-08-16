"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Heart, Clock } from "lucide-react"

import { Course, Category } from "@/lib/data"

interface CategoryCoursesGridProps {
  courses: Course[]
  category: Category
}

export function CategoryCoursesGrid({ courses, category }: CategoryCoursesGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-4">
            {category.title} Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of {category.title.toLowerCase()} courses designed to enhance your professional skills.
          </p>
        </div>

        {/* Courses Grid - 4 columns on desktop, responsive on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
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
              <div className="p-4">
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

                {/* Action Buttons */}
                <div className="flex gap-2">
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

        {/* No Courses Message */}
        {courses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-600 text-lg mb-4">
              No courses available in this category at the moment.
            </div>
            <p className="text-gray-500">
              Please check back later or contact us for custom training solutions.
            </p>
          </div>
        )}

        {/* Call to Action */}
        {courses.length > 0 && (
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Need a custom training solution? Contact our team for tailored programs.
            </p>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
