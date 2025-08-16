import { CombinedNavbar } from "@/components/combined-navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <CombinedNavbar />
      <section className="pt-28 container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#16335c] mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          We’d love to hear from you. Send us a message and our team will get back to you shortly.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 gap-4">
              <Input placeholder="Full name" className="bg-gray-50 border-gray-300 text-gray-900" />
              <Input type="email" placeholder="Email address" className="bg-gray-50 border-gray-300 text-gray-900" />
              <Input placeholder="Subject" className="bg-gray-50 border-gray-300 text-gray-900" />
              <Textarea placeholder="Your message" className="bg-gray-50 border-gray-300 text-gray-900 min-h-40" />
              <Button className="bg-secondary text-white hover:bg-[#d4a006] w-full md:w-auto">Send Message</Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <p className="text-gray-700">123 Training Street, London, UK</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-1" />
                <p className="text-gray-700">+44 7492 882996</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-1" />
                <p className="text-gray-700">info@euro-training.net</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}








