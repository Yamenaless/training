import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, MapPin, Users } from "lucide-react"

export function VenuesGrid() {
  const venues = [
    {
      id: 1,
      title: "London Business Center",
      description: "State-of-the-art training facility in the heart of London's financial district, featuring modern conference rooms, advanced AV equipment, and networking spaces.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      city: "London",
      country: "United Kingdom",
      capacity: "200+ attendees",
      amenities: ["High-speed WiFi", "Coffee Service", "Parking Available"],
      category: "Premium"
    },
    {
      id: 2,
      title: "Dubai International Conference Center",
      description: "Luxurious training venue in Dubai's business hub, offering world-class facilities with cutting-edge technology and exceptional hospitality services.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      city: "Dubai",
      country: "UAE",
      capacity: "500+ attendees",
      amenities: ["Premium WiFi", "Catering Service", "Valet Parking"],
      category: "Luxury"
    },
    {
      id: 3,
      title: "Paris Executive Training Hub",
      description: "Elegant training center in central Paris, combining French sophistication with modern business facilities for an exceptional learning experience.",
      image: "https://images.unsplash.com/photo-1502602898534-47d88198d214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      city: "Paris",
      country: "France",
      capacity: "150+ attendees",
      amenities: ["High-speed WiFi", "Coffee Service", "Metro Access"],
      category: "Executive"
    },
    {
      id: 4,
      title: "Istanbul Business Academy",
      description: "Modern training facility in Istanbul's business district, offering flexible meeting spaces and cutting-edge technology for professional development.",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      city: "Istanbul",
      country: "Turkey",
      capacity: "300+ attendees",
      amenities: ["Premium WiFi", "Catering Service", "Secure Parking"],
      category: "Business"
    },
    {
      id: 5,
      title: "New York Corporate Training Center",
      description: "Premium training venue in Manhattan, featuring sophisticated conference rooms and advanced presentation technology for executive-level training programs.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      city: "New York",
      country: "USA",
      capacity: "250+ attendees",
      amenities: ["High-speed WiFi", "Coffee Service", "Subway Access"],
      category: "Corporate"
    },
    {
      id: 6,
      title: "Singapore Business Institute",
      description: "State-of-the-art training facility in Singapore's Marina Bay area, offering world-class amenities and cutting-edge technology for professional development.",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      city: "Singapore",
      country: "Singapore",
      capacity: "400+ attendees",
      amenities: ["Premium WiFi", "Catering Service", "MRT Access"],
      category: "Premium"
    },
    {
      id: 7,
      title: "Riyadh Executive Center",
      description: "Luxurious training venue in Riyadh's King Fahd District, featuring modern conference facilities and exceptional hospitality services for business professionals.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      city: "Riyadh",
      country: "Saudi Arabia",
      capacity: "350+ attendees",
      amenities: ["High-speed WiFi", "Catering Service", "Valet Parking"],
      category: "Luxury"
    },
    {
      id: 8,
      title: "Amsterdam Innovation Hub",
      description: "Creative training space in Amsterdam's tech district, designed to inspire innovation and collaboration with flexible meeting areas and modern technology.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      city: "Amsterdam",
      country: "Netherlands",
      capacity: "180+ attendees",
      amenities: ["High-speed WiFi", "Coffee Service", "Bike Parking"],
      category: "Innovation"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
                         <h2 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-4">Training Venues</h2>
             <div className="w-16 h-1 bg-secondary mb-4"></div>
             <p className="text-gray-600 max-w-2xl">
               Our strategically located training venues offer world-class facilities, cutting-edge technology, 
               and exceptional hospitality services to ensure an optimal learning environment for all participants.
             </p>
          </div>
                     <Link href="/contact" className="text-secondary hover:text-[#d4a006] mt-4 md:mt-0 flex items-center">
            Contact Us
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {venues.map((venue) => (
            <Card key={venue.id} className="bg-white border border-gray-200 overflow-hidden course-card group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-48">
                <Image 
                  src={venue.image} 
                  alt={venue.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-black px-3 py-1 text-sm font-medium">
                    {venue.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  <MapPin className="h-3 w-3 text-secondary inline mr-1" />
                  {venue.city}
                </div>
              </div>
              <CardContent className="p-6">
                                 <h3 className="text-xl font-bold text-[#16335c] mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                   {venue.title}
                 </h3>
                 <p className="text-gray-600 text-sm mb-4 line-clamp-3">{venue.description}</p>
                
                {/* Venue Details */}
                <div className="space-y-2 mb-4">
                                     <div className="flex items-center text-gray-500 text-sm">
                     <MapPin className="h-4 w-4 mr-2" />
                     {venue.city}, {venue.country}
                   </div>
                   <div className="flex items-center text-gray-500 text-sm">
                     <Users className="h-4 w-4 mr-2" />
                     {venue.capacity}
                   </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                                   <h4 className="text-sm font-semibold text-[#16335c] mb-2">Amenities:</h4>
                 <div className="flex flex-wrap gap-2">
                   {venue.amenities.map((amenity, index) => (
                     <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                       {amenity}
                     </span>
                   ))}
                 </div>
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-black">
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button className="bg-secondary text-black hover:bg-white">
                    Book Venue
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
