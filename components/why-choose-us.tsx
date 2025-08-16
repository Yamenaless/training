import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Award, Users, Clock, Globe } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "25+ years of delivering successful training programs with measurable results and client satisfaction."
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Industry professionals with real-world experience and proven expertise in their respective fields."
    },
    {
      icon: Clock,
      title: "Flexible Delivery",
      description: "Multiple delivery formats including in-person, virtual, and hybrid to suit your schedule and preferences."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Training delivery across 50+ countries with local cultural understanding and regional expertise."
    }
  ]

  const testimonials = [
    {
      quote: "Euro Training's customized leadership program transformed our management team. The results were immediate and lasting.",
      author: "Sarah Johnson",
      position: "HR Director",
      company: "Global Solutions Inc.",
      rating: 5
    },
    {
      quote: "The financial training exceeded our expectations. Our team gained practical skills that directly improved our bottom line.",
      author: "Michael Chen",
      position: "CFO",
      company: "TechVision Global",
      rating: 5
    },
    {
      quote: "Professional, engaging, and highly effective. Euro Training delivered exactly what we needed to advance our capabilities.",
      author: "Emma Rodriguez",
      position: "Operations Manager",
      company: "InnovateCorp",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-4">Why Choose Euro Training?</h2>
           <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
             Discover what sets us apart and why thousands of professionals and organizations worldwide 
             trust Euro Training for their professional development needs.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Reasons */}
          <div>
            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 bg-secondary/20 rounded-full">
                      <reason.icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                                         <h3 className="text-xl font-semibold text-[#16335c] mb-2">{reason.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button className="bg-secondary text-black hover:bg-white">
                Explore Our Training Programs
              </Button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                  ))}
                </div>
                                 <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                 <div className="flex items-center">
                   <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mr-3">
                     <span className="text-white font-semibold text-sm">
                       {testimonial.author.split(' ').map(n => n[0]).join('')}
                     </span>
                   </div>
                   <div>
                     <p className="text-[#16335c] font-medium">{testimonial.author}</p>
                     <p className="text-gray-600 text-sm">{testimonial.position} at {testimonial.company}</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
                         <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">25+</div>
             <div className="text-gray-600">Years of Excellence</div>
           </div>
           <div>
             <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">10,000+</div>
             <div className="text-gray-600">Professionals Trained</div>
           </div>
           <div>
             <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">50+</div>
             <div className="text-gray-600">Countries Served</div>
           </div>
           <div>
             <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">98%</div>
             <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
