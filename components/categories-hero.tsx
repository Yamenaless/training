"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function CategoriesHero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden bg-[#16335c] pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Course Categories"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16335c] via-[#16335c] to-[#16335c99]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Course Categories
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-slide-up animation-delay-200">
            Explore our comprehensive range of professional training courses across leadership, business strategy, project management, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
            <Button className="bg-white text-[#16335c] hover:bg-secondary hover:text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105">
              Browse All Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-white/10 text-lg px-8 py-6 transition-all duration-300 hover:scale-105">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
