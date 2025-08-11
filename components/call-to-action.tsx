import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to advance your professional skills?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with Euro Training's expert-led courses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 max-w-md h-12"
            />
            <Button className="bg-secondary text-black hover:bg-white h-12">
              Subscribe to Updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-white/50 text-sm">
            By subscribing, you agree to receive updates about our latest courses and special offers. You can
            unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
