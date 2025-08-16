import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const benefits = [
    "Customized training solutions for clients",
    "Comprehensive, bespoke training courses",
    "Expert trainers with industry experience",
    "Interactive and practical learning approach",
    "Focus on clear learning outcomes",
    "Global reach with courses worldwide",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-4">About Euro Training</h2>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-gray-600 mb-6">
              All public courses at Euro Training can be designed and delivered exclusively for a client organization,
              or alternatively we can create Customized Training solutions for clients wanting a comprehensive, bespoke
              training courses. To view a selection of courses that can be customized by Euro Training.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-secondary text-black hover: bg-white">Learn More About Us</Button>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Professional training session"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16335c] to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-slate-900/90 p-6 rounded-lg">
                <p className="text-white font-medium text-lg mb-2">
                  "Euro Training has transformed our team's capabilities and performance. The customized course
                  addressed our specific needs perfectly."
                </p>
                <p className="text-secondary">— Sarah Johnson, HR Director at Global Solutions Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
