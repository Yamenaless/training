import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function TrainersShowcase() {
  const trainers = [
    {
      id: 1,
      name: "Dr. Robert Miller",
      specialty: "Leadership & Management",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "20+ years of executive leadership experience across Fortune 500 companies",
    },
    {
      id: 2,
      name: "Prof. Elena Vasquez",
      specialty: "Finance & Accounting",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      bio: "Former investment banker with expertise in corporate finance and strategic planning",
    },
    {
      id: 3,
      name: "David Chen, MBA",
      specialty: "Project Management",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Certified PMP with experience leading complex international projects",
    },
    {
      id: 4,
      name: "Dr. Sarah Johnson",
      specialty: "Human Resources",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "Organizational psychologist specializing in talent development and workplace culture",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#001a4f] to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Expert Trainers</h2>
            <div className="w-16 h-1 bg-secondary mb-4"></div>
            <p className="text-white/70 max-w-2xl">
              Learn from industry leaders with extensive real-world experience and a passion for developing others.
            </p>
          </div>
          <Link href="/trainers" className="text-secondary hover:text-white mt-4 md:mt-0 flex items-center">
            View All Trainers
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="bg-black border border-white/10 overflow-hidden course-card">
              <div className="relative h-72">
                <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                  <p className="text-secondary">{trainer.specialty}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-white/70 text-sm mb-4">{trainer.bio}</p>
                <Link href={`/trainers/${trainer.id}`} className="text-secondary hover:text-white flex items-center">
                  View Profile
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
