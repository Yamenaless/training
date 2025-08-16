import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Globe, Award, Users, BookOpen } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Leading Euro Training with over 20 years of experience in professional development and corporate training.",
      expertise: ["Leadership Development", "Strategic Planning", "Organizational Change"],
      linkedin: "#",
      email: "sarah.johnson@euro-training.net"
    },
    {
      name: "Michael Chen",
      position: "Director of Training Programs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Expert in designing and delivering customized training solutions for Fortune 500 companies worldwide.",
      expertise: ["Program Design", "Custom Training", "Performance Management"],
      linkedin: "#",
      email: "michael.chen@euro-training.net"
    },
    {
      name: "Emma Rodriguez",
      position: "Head of International Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Managing global training operations across 50+ countries with deep cultural understanding and local expertise.",
      expertise: ["Global Operations", "Cultural Intelligence", "International Business"],
      linkedin: "#",
      email: "emma.rodriguez@euro-training.net"
    }
  ]

  const teamStats = [
    { icon: Users, value: "50+", label: "Expert Trainers" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: BookOpen, value: "200+", label: "Course Programs" },
    { icon: Award, value: "25+", label: "Industry Awards" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-4">Our Leadership Team</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
                                             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
             Meet the experienced professionals who lead Euro Training's mission to deliver world-class 
             professional development solutions. Our leadership team brings decades of combined expertise 
             in training, business, and international operations.
           </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#16335c] mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.position}</p>
                                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#16335c] mb-2">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                                              <span key={skillIndex} className="px-3 py-1 bg-[#16335c]/10 text-[#16335c] text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-[#16335c] rounded-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Team at a Glance</h3>
            <p className="text-white/80 text-lg">
              Discover the scale and expertise that makes Euro Training a global leader in professional development.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
                      <p className="text-gray-600 mb-6">
            Want to learn more about our team and how we can help your organization?
          </p>
          <Button className="bg-secondary text-black hover:bg-white">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
