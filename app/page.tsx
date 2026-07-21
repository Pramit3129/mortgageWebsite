import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { MortgageRatesBanner } from "@/components/landing/mortgage-rates-banner"
import { AboutMe } from "@/components/landing/about-me"
import { MortgageServices } from "@/components/landing/mortgage-services"
import { Testimonials } from "@/components/landing/testimonials"
import { Faq } from "@/components/landing/faq"

export default function Page() {
  return (
    <div className="min-h-svh w-full overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <MortgageRatesBanner />
        <MortgageServices />
        <AboutMe />
        <Testimonials />
        <Faq />
      </main>
    </div>
  )
}
