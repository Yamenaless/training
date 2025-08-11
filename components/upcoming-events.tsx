import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Clock } from "lucide-react"

export function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Leadership Excellence Summit",
      date: "September 15-17, 2023",
      location: "London, UK",
      time: "9:00 AM - 5:00 PM",
      category: "Leadership",
    },
    {
      id: 2,
      title: "Financial Management Masterclass",
      date: "October 5-7, 2023",
      location: "Dubai, UAE",
      time: "9:00 AM - 4:30 PM",
      category: "Finance",
    },
    {
      id: 3,
      title: "HR Transformation Workshop",
      date: "October 12-14, 2023",
      location: "Paris, France",
      time: "9:30 AM - 5:30 PM",
      category: "HR",
    },
    {
      id: 4,
      title: "Project Management Certification",
      date: "November 8-12, 2023",
      location: "New York, USA",
      time: "9:00 AM - 5:00 PM",
      category: "Project",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Upcoming Training Events</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join our upcoming training sessions and conferences to enhance your professional skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="bg-[#001a4f] border-none overflow-hidden course-card">
              <div className="bg-[#002677] p-4">
                <div className="inline-block bg-secondary text-black px-3 py-1 text-sm font-medium rounded mb-2">
                  {event.category}
                </div>
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{event.date}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{event.location}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{event.time}</span>
                  </div>
                </div>
                <Button className="w-full bg-secondary text-black hover:bg-white">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
