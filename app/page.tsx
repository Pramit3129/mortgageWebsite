import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { MortgageRatesBanner } from "@/components/landing/mortgage-rates-banner"

export default function Page() {
  return (
    <div className="min-h-svh w-full overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <Hero />
        <MortgageRatesBanner />
      </main>
    </div>
  )
}
