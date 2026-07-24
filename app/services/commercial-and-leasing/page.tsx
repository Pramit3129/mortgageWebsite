import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  ArrowRight,
  Building2,
  CheckCircle2,
  Landmark,
  Banknote,
  Factory,
  Utensils,
  Warehouse,
  Building,
  HardDrive,
  ShoppingBag,
  Map,
  Rocket,
  ShieldCheck,
} from "lucide-react"
import { Footer } from "@/components/landing/footer"

const commercialProducts = [
  { icon: Building2, label: "Income Properties" },
  { icon: Landmark, label: "Multi-Residential Properties" },
  { icon: Banknote, label: "Bridge Financing" },
  { icon: Utensils, label: "Restaurants" },
  { icon: Factory, label: "Industrial Properties" },
  { icon: Building, label: "Office Properties" },
  { icon: HardDrive, label: "Self Storage" },
  { icon: ShoppingBag, label: "Retail Malls" },
  { icon: Map, label: "Raw Land Financing" },
  { icon: Rocket, label: "Start Ups Financing" },
  { icon: ShieldCheck, label: "Debt Consolidation" },
]

const leasingBenefits = [
  "Multiple ways to structure lease financing for new equipment",
  "Sale-lease back options to extract capital from existing assets",
  "Equipment acquisition solutions tailored to your business",
  "Access to commercial and residential mortgage products alongside lease financing",
  "Comprehensive credit-line products for the best acquisition outcome",
]

const dlcLeasingAdvantages = [
  {
    title: "Local Ownership & Presence",
    desc: "As a franchise organization with local ownership of our street-front locations, you get committed, local-office presence with a team that understands your market, is in your time-zone, and has community-involvement and knowledge.",
  },
  {
    title: "Best Funding Resources",
    desc: "With leading funding resources, we provide the best opportunity for approvals with the lowest monthly payments.",
  },
  {
    title: "30+ Specialty Funding Sources",
    desc: "Why rely on only one or two lease-sources when you can have over 30 specialty lease-funding sources in Canada and the United States.",
  },
  {
    title: "Creative & Flexible Solutions",
    desc: "Dominion Lending Centres Leasing can break up large-dollar transactions into multiple leases across a number of funders to ease and simplify the approval process.",
  },
  {
    title: "Unlimited Exposure Capacity",
    desc: "Exposure limits are not an issue as we simply move the lessee to additional funding resources when exposure-limits are imposed by each funding source.",
  },
  {
    title: "Broad Range of Programs",
    desc: "Dominion Lending Centres Leasing provides a broad range of auto & equipment leasing programs which dramatically increases our capabilities at solving the most challenging equipment acquisition challenges.",
  },
]

export default function CommercialAndLeasingPage() {
  return (
    <div className="min-h-svh w-full bg-background text-foreground">
      {/* Sticky Nav */}
      <header className="fixed top-0 inset-x-0 z-50 w-full h-20 bg-background/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="font-serif text-base lg:text-lg text-accent tracking-[0.12em] font-bold">
              VIPIN GARG
            </span>
          </Link>
          <a
            href="tel:+17787922220"
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-accent/40 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span className="tracking-wide whitespace-nowrap">+1 778-792-2220</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/CommercialAndLeasing.webp"
          alt="Commercial & Leasing — Dominion Lending Centres"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-12 pb-12 lg:pb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-accent" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-accent">
                Commercial & Leasing
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-foreground leading-[1.08] tracking-tight max-w-3xl">
              Commercial & Leasing{" "}
              <br className="hidden sm:block" />
              <span className="italic font-light text-accent">Solutions.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg font-light max-w-2xl leading-relaxed">
              Comprehensive commercial mortgage and equipment leasing solutions
              tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Mortgage Products */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-accent" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
              What We Finance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            Commercial Mortgage{" "}
            <span className="italic font-light text-accent">Products.</span>
          </h2>
          <p className="text-muted-foreground text-base font-light max-w-2xl leading-relaxed mb-14">
            Some common commercial mortgage products provide funding for a wide
            range of property types and business needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commercialProducts.map((product) => (
              <div
                key={product.label}
                className="group relative flex items-center gap-4 border border-white/[0.06] bg-card px-6 py-5 transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-700 group-hover:w-full" />
                <div className="w-10 h-10 flex items-center justify-center border border-accent/20 bg-accent/5 flex-shrink-0">
                  <product.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {product.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of a Leasing Professional */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-accent" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                  Why a Professional
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-8">
                Benefits of Using a{" "}
                <span className="italic font-light text-accent">
                  Leasing Professional.
                </span>
              </h2>

              <p className="text-muted-foreground text-base font-light leading-relaxed mb-8">
                A Dominion Lending Centres leasing professional can help you in
                discovering multiple ways to structure lease financing for new
                equipment, a sale-lease back to extract capital from existing
                assets, or solve other equipment acquisition opportunities.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed mb-10">
                Many of our lease professionals are also mortgage brokers who
                can use commercial and residential mortgage and property
                credit-line products alone or in combination with lease-financing
                to help you achieve the best solution for equipment acquisition.
              </p>

              <div className="space-y-4">
                {leasingBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-light leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent/50 z-10" />
                <Image
                  src="/CommercialAndLeasing.webp"
                  alt="Leasing Professional Consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of DLC Leasing */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-accent" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
              Why Dominion Lending Centres
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            Benefits of Using{" "}
            <span className="italic font-light text-accent">
              Dominion Lending Centres Leasing.
            </span>
          </h2>
          <p className="text-muted-foreground text-base font-light max-w-2xl leading-relaxed mb-14">
            Our national credit office offers the best tools, underwriting
            centre, and efficiency in the leasing business today.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dlcLeasingAdvantages.map((advantage) => (
              <div
                key={advantage.title}
                className="group relative border border-white/[0.06] bg-card p-8 sm:p-10 transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-700 group-hover:w-full" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {advantage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-accent" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
              Ready to Get Started?
            </span>
            <div className="h-[2px] w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            Let&apos;s Discuss Your{" "}
            <span className="italic font-light text-accent">
              Commercial Needs.
            </span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need commercial mortgage financing or equipment leasing,
            we structure solutions tailored to your business goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
            >
              CONTACT US
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+17787922220"
              className="inline-flex items-center gap-2 border border-white/20 text-foreground hover:bg-white/5 font-semibold px-8 py-4 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4 text-accent" />
              CALL NOW
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
