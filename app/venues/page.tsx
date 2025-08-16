import { CombinedNavbar } from "@/components/combined-navbar"
import { Footer } from "@/components/footer"
import { VenuesHero } from "@/components/venues-hero"
import { VenuesGrid } from "@/components/venues-grid"
import { CallToAction } from "@/components/call-to-action"

export default function VenuesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <CombinedNavbar />
      <VenuesHero />
      <VenuesGrid />
      <CallToAction />
      <Footer />
    </main>
  )
}





