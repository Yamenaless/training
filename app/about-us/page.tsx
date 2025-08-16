import { CombinedNavbar } from "@/components/combined-navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { MissionValues } from "@/components/mission-values"
import { CompanyOverview } from "@/components/company-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TeamSection } from "@/components/team-section"
import { CallToAction } from "@/components/call-to-action"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <CombinedNavbar />
      <AboutHero />
      <CompanyOverview />
      <MissionValues />
      <WhyChooseUs />
      <TeamSection />
      <CallToAction />
      <Footer />
    </main>
  )
}



