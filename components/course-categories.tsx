import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Users, BookOpen, TrendingUp, Award, Globe, Shield, Zap } from "lucide-react"

export function CourseCategories() {
  const categories = [
    { 
      title: "Leadership and Management", 
      count: 42, 
      icon: Users,
      description: "Strategic leadership, team management, and organizational development",
      color: "bg-blue-500/20 text-blue-400"
    },
    { 
      title: "Finance and Accounting", 
      count: 38, 
      icon: TrendingUp,
      description: "Financial strategy, business planning, and investment decision-making",
      color: "bg-green-500/20 text-green-400"
    },
    { 
      title: "Human Resources Management (HRM)", 
      count: 25, 
      icon: Users,
      description: "Talent acquisition, development, and organizational culture",
      color: "bg-purple-500/20 text-purple-400"
    },
    { 
      title: "Project Management", 
      count: 31, 
      icon: BookOpen,
      description: "PMP preparation, agile methodologies, and project delivery",
      color: "bg-orange-500/20 text-orange-400"
    },
    { 
      title: "Marketing and Sales", 
      count: 19, 
      icon: TrendingUp,
      description: "Digital marketing, sales strategy, and customer relationship",
      color: "bg-pink-500/20 text-pink-400"
    },
    { 
      title: "Oil and Gas Technology", 
      count: 27, 
      icon: Zap,
      description: "Petroleum engineering, drilling operations, and exploration",
      color: "bg-yellow-500/20 text-yellow-400"
    },
    { 
      title: "Health, Safety and Environment", 
      count: 23, 
      icon: Shield,
      description: "Workplace safety, environmental compliance, and risk management",
      color: "bg-red-500/20 text-red-400"
    },
    { 
      title: "Conferences", 
      count: 15, 
      icon: Globe,
      description: "Industry conferences, networking events, and knowledge sharing",
      color: "bg-indigo-500/20 text-indigo-400"
    },
    { 
      title: "Quality and Operational Auditing", 
      count: 12, 
      icon: Award,
      description: "Quality management, operational excellence, and compliance",
      color: "bg-teal-500/20 text-teal-400"
    },
    { 
      title: "Supply & Fleet Management", 
      count: 18, 
      icon: BookOpen,
      description: "Supply chain optimization, logistics, and fleet operations",
      color: "bg-cyan-500/20 text-cyan-400"
    },
    { 
      title: "Energy Transition", 
      count: 14, 
      icon: Zap,
      description: "Renewable energy, sustainability, and green technologies",
      color: "bg-emerald-500/20 text-emerald-400"
    },
    { 
      title: "Urban Planning and Development", 
      count: 9, 
      icon: Globe,
      description: "City planning, infrastructure development, and smart cities",
      color: "bg-slate-500/20 text-slate-400"
    },
  ]

  return (
    <section className="py-20 bg-[#001a4f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Categories</h2>
            <div className="w-16 h-1 bg-secondary mb-4"></div>
            <p className="text-white/70 max-w-2xl">
              Explore our comprehensive range of professional development courses organized by industry 
              and specialization to help you find the perfect training program for your career goals.
            </p>
          </div>
          <Link href="/all-courses" className="text-secondary hover:text-white mt-4 md:mt-0 flex items-center">
            View All Courses
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link href={`/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
              <Card className="bg-[#002677] hover:bg-[#003399] border-none transition-all duration-300 h-full group hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                      {category.count}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-secondary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4 flex-grow">
                    {category.description}
                  </p>
                  
                  <div className="mt-auto pt-4 flex justify-between items-center">
                    <span className="text-white/60 text-sm">{category.count} courses</span>
                    <ChevronRight className="h-5 w-5 text-secondary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
