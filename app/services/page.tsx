import { CombinedNavbar } from "@/components/combined-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  { title: "In-House Training", desc: "Tailored programs delivered at your location." },
  { title: "Public Courses", desc: "Scheduled courses across global venues." },
  { title: "Consulting", desc: "Expert advisory to solve complex business challenges." },
  { title: "Custom Curriculum", desc: "Design end-to-end learning paths for teams." },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <CombinedNavbar />
      <section className="pt-28 container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-6">Services</h1>
        <p className="text-gray-600 mb-12 max-w-2xl">Flexible delivery models to match your goals.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
                    <Card key={s.title} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6">
            <h3 className="text-[#16335c] text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}








