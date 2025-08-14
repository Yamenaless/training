"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users, Award, Star, BookOpen } from "lucide-react"

export function TrainersHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Users, value: "50+", label: "Expert Trainers" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
  ]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#002677] pt-28">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Professional trainers team"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        {/* Enhanced gradient overlay matching home page style */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002677] via-[#002677cc] to-[#00267799]"></div>
        
        {/* Subtle pattern overlay for depth */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      {/* Main Content - Centered like home page */}
      <div className="container relative z-10 mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Enhanced Header Section */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary text-sm font-medium rounded-full mb-6 border border-secondary/30">
              <Users className="h-4 w-4" />
              Expert Training Team
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our Expert Trainers
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet our world-class trainers with proven industry experience, cutting-edge expertise, 
              and a passion for empowering professionals to achieve their full potential.
            </p>
          </div>

          {/* Enhanced Buttons - Matching home page style */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button className="bg-white text-[#002677] hover:bg-secondary hover:text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              View All Trainers
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:border-secondary">
              Become a Trainer
            </Button>
          </div>

          {/* Enhanced Stats Grid - Professional card design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-700 ease-out hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-secondary/30 transition-all duration-300 hover:bg-white/10">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary/20 rounded-full group-hover:bg-secondary/30 transition-colors duration-300">
                      <stat.icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
