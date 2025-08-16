"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

import { Category } from "@/lib/data"

interface CategoryHeroProps {
  category: Category
}

export function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden bg-[#16335c] pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16335c] via-[#16335c] to-[#16335c99]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto h-full flex items-center px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl animate-fade-in">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/categories">
              <Button variant="ghost" className="text-white hover:bg-white/10 p-3">
                <ChevronLeft className="h-5 w-5 mr-3" />
                Back to Categories
              </Button>
            </Link>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-slide-up">
            {category.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl animate-slide-up animation-delay-200">
            {category.description}
          </p>
          <div className="flex items-center text-white/80 animate-slide-up animation-delay-400">
            <span className="text-lg md:text-xl font-medium">
              {category.courseCount} courses available
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
