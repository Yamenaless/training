import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrainersHero } from "@/components/trainers-hero"
import { TrainersShowcase } from "@/components/trainers-showcase"

export default function OurTrainersPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Header />
      <TrainersHero />
      <TrainersShowcase />
      <Footer />
    </main>
  )
}





