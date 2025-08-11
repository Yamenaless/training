"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      position: "Operations Director, Global Tech Solutions",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      quote:
        "The leadership program exceeded all my expectations. The trainers were exceptional, bringing real-world experience and practical insights that our team could immediately apply.",
    },
    {
      id: 2,
      name: "Sophia Rodriguez",
      position: "CFO, Innovative Finance Group",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      quote:
        "Euro Training's finance seminars have been instrumental in upgrading our team's capabilities. The customized approach ensured that the content was directly relevant to our industry challenges.",
    },
    {
      id: 3,
      name: "James Wilson",
      position: "HR Director, International Retail Corp",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      quote:
        "We've partnered with Euro Training for three years now, and they consistently deliver high-quality, engaging training that transforms how our managers approach their roles.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear from professionals who have experienced the transformative impact of our training programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#001a4f] border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-full min-h-[300px] md:min-h-full">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-secondary mb-6 opacity-50" />
                  <p className="text-white text-lg md:text-xl mb-8 italic">{testimonials[currentIndex].quote}</p>
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 text-white hover:bg-secondary hover:text-black"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/20 text-white hover:bg-secondary hover:text-black"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
