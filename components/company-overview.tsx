import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Target, Users, Globe, Clock } from "lucide-react"

export function CompanyOverview() {
  const highlights = [
    "Leading provider of professional development training",
    "Customized solutions for organizations worldwide",
    "Expert trainers with real-world industry experience",
    "Proven track record of measurable results",
    "Global reach with local expertise",
    "Continuous innovation in training methodologies",
  ]

  const features = [
    { icon: Target, title: "Customized Solutions", description: "Tailored training programs designed specifically for your organization's needs" },
    { icon: Users, title: "Expert Trainers", description: "Industry professionals with decades of practical experience" },
    { icon: Globe, title: "Global Presence", description: "Training delivery across 50+ countries with local cultural understanding" },
    { icon: Clock, title: "Proven Results", description: "25+ years of delivering measurable improvements in professional performance" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
                         <h2 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-4">Company Overview</h2>
             <div className="w-16 h-1 bg-secondary mb-6"></div>
             <p className="text-gray-600 mb-6">
               Euro Training has been at the forefront of professional development for over two decades, 
               delivering world-class training solutions that empower individuals and organizations to achieve 
               their full potential. Our commitment to excellence and innovation has made us a trusted partner 
               for businesses seeking sustainable growth and competitive advantage.
             </p>
             <p className="text-gray-600 mb-8">
               We specialize in creating customized training programs that address specific business challenges, 
               ensuring that every learning experience delivers measurable results and lasting impact.
             </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>

            <Button className="bg-secondary text-black hover:bg-white">
              Learn More About Our History
            </Button>
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Professional training environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16335c] to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-slate-900/90 p-6 rounded-lg">
                <p className="text-white font-medium text-lg mb-2">
                  "Euro Training's customized approach transformed our leadership development program. 
                  The results exceeded our expectations."
                </p>
                <p className="text-secondary">— Michael Chen, CEO at TechVision Global</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-secondary/20 rounded-full">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
              </div>
                             <h3 className="text-xl font-semibold text-[#16335c] mb-3">{feature.title}</h3>
               <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
