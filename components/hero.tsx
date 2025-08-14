"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, Pause, Play } from "lucide-react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const slides = [
    {
      title: "Management & Leadership Seminars",
      description: "Develop the skills to lead with confidence and drive organizational success",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Finance and Accounting Seminars",
      description: "Master financial strategies and accounting techniques for business growth",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
    {
      title: "Project Management Training",
      description: "Learn methodologies and best practices to deliver successful projects",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Human Resources Excellence",
      description: "Transform your HR function with strategic approaches to talent development",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Digital Marketing & Innovation",
      description: "Master modern digital strategies and drive business growth through innovation",
      image:
        "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  useEffect(() => {
    if (!isPlaying || isHovered) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isPlaying, isHovered, nextSlide])

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-[#002677]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images with Smooth Transitions */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002677] via-[#002677cc] to-[#00267799]"></div>
        </div>
      ))}

      {/* Content with Fade-in Animation */}
      <div className="container relative z-10 mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-slide-up animation-delay-200">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
            <Button className="bg-white text-[#002677] hover:bg-secondary hover:text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105">
              Explore Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 transition-all duration-300 hover:scale-105">
              View Schedule
            </Button>
          </div>
        </div>

        {/* Enhanced Navigation Controls */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  currentSlide === index 
                    ? "bg-secondary w-10 shadow-lg shadow-secondary/50" 
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
