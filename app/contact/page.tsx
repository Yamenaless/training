import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Header />
      <section className="pt-28 container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-white/70 mb-10 max-w-2xl">
          We’d love to hear from you. Send us a message and our team will get back to you shortly.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-[#001a4f] rounded-lg p-6">
            <div className="grid grid-cols-1 gap-4">
              <Input placeholder="Full name" className="bg-black/30 border-white/10 text-white" />
              <Input type="email" placeholder="Email address" className="bg-black/30 border-white/10 text-white" />
              <Input placeholder="Subject" className="bg-black/30 border-white/10 text-white" />
              <Textarea placeholder="Your message" className="bg-black/30 border-white/10 text-white min-h-40" />
              <Button className="bg-secondary text-black hover:bg-white w-full md:w-auto">Send Message</Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-[#001a4f] rounded-lg p-6 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <p>123 Training Street, London, UK</p>
              </div>
            </div>
            <div className="bg-[#001a4f] rounded-lg p-6 text-white/80">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-1" />
                <p>+44 7492 882996</p>
              </div>
            </div>
            <div className="bg-[#001a4f] rounded-lg p-6 text-white/80">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-1" />
                <p>info@euro-training.net</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}





