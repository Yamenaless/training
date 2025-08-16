import { CombinedNavbar } from "@/components/combined-navbar"
import { Footer } from "@/components/footer"
import { TrainersHero } from "@/components/trainers-hero"
import { TrainersShowcase } from "@/components/trainers-showcase"

export default function OurTrainersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <CombinedNavbar />
      <TrainersHero />
      <TrainersShowcase />
      <Footer />
    </main>
  )
}





