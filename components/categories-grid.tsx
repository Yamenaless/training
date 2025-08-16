"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAllCategories } from "@/lib/data"

export function CategoriesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-4">
            Explore Our Course Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of professional development categories designed to enhance your skills and career growth.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getAllCategories().map((category) => (
            <div
              key={category.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
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

              {/* Category Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#16335c] mb-3 group-hover:text-secondary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                {/* Course Count */}
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{category.courseCount} courses available</span>
                </div>

                {/* Action Button */}
                <Link href={`/categories/${category.id}`}>
                  <Button className="w-full bg-[#ebb207] hover:bg-[#d4a006] text-white transition-all duration-300">
                    Explore Category
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
                     <p className="text-lg text-gray-600 mb-6">
             Can't find what you're looking for? Contact our team for custom training solutions.
           </p>
          <Link href="/contact">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
