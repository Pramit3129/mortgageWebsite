import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Building2, DollarSign, Percent, Target, BarChart3, FileCheck, CheckCircle2, Phone, ArrowRight } from "lucide-react"

const loanProgram = [
  {
    icon: Building2,
    title: "Conventional Mortgage Program",
    tag: "1st & 2nd Mortgages",
    items: [
      { label: "Terms", desc: "1–5 year terms available." },
      { label: "Amortization", desc: "Up to 25-year amortization." },
      { label: "Structure", desc: "Both closed and open mortgages available." },
      { label: "LTV", desc: "Up to 70% LTV on 1st mortgages." },
      { label: "Requirements", desc: "Minimum DSCR requirements apply." },
    ],
  },
  {
    icon: DollarSign,
    title: "Loan Amounts",
    tag: "$1M – No Max",
    items: [
      { label: "Minimum", desc: "$1,000,000." },
      { label: "Maximum", desc: "Depends on the deal, no set maximum. We have funded $100M+ loan amounts." },
      { label: "Typical Range", desc: "Most deals are between $4M–$20M." },
    ],
  },
  {
    icon: Percent,
    title: "Loan-to-Value",
    tag: "Up to 85%",
    items: [
      { label: "1st Mortgages", desc: "Conventional mortgages up to 75% of the asset's value (based on prescribed capitalization rates)." },
      { label: "2nd Mortgages", desc: "Available up to 85%." },
    ],
  },
  {
    icon: BarChart3,
    title: "Pricing",
    tag: "Competitive Rates",
    items: [
      { label: "1st Mortgage Rate", desc: "Typically 100–230 bps above the Government of Canada bond yield for the requested term." },
      { label: "2nd Mortgage Rate", desc: "Rates range from 6% to 9%." },
      { label: "Flexibility", desc: "We are competitive with banks and life insurance companies, and we consider ourselves more flexible." },
    ],
  },
]

const targetProperties = [
  "Multi-unit residential 10+ units",
  "Student residences",
  "Industrial",
  "Office space",
  "Retail",
  "Mixed use",
]

const requirements = [
  "BCA (Building Condition Assessment)",
  "ESA (Environmental Safety Assessment)",
  "Appraisal required for every property",
]

export default function CommercialLoanPage() {
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
            href="tel:18885551234"
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-accent/40 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span className="tracking-wide whitespace-nowrap">1-888-555-1234</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/CommercialLoansDetailsPage1.png"
          alt="Commercial Loans"
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
                Commercial Loan
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-foreground leading-[1.08] tracking-tight max-w-3xl">
              Financing Your <br />
              <span className="italic font-light text-accent">Commercial Vision.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg font-light max-w-2xl leading-relaxed">
              Buying commercial real estate is an important decision, potentially very profitable and often complex. With support from our experts and a loan adapted to your needs, we can help make your project a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Program Grid */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {loanProgram.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative border border-white/[0.06] bg-card p-8 sm:p-10 transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-700 group-hover:w-full" />

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center border border-accent/20 bg-accent/5">
                      <benefit.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground leading-snug">
                      {benefit.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-accent bg-accent/10 px-3 py-1.5 whitespace-nowrap">
                    {benefit.tag}
                  </span>
                </div>

                <div className="space-y-4">
                  {benefit.items.map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-foreground">{item.label}: </span>
                        <span className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Target Properties + Requirements */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent/50 z-10" />
                <Image
                  src="/CommercialLoanDetailPage2.png"
                  alt="Commercial Property Consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-accent" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                  Target Properties
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-8">
                Properties We <span className="italic font-light text-accent">Finance.</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {targetProperties.map((property) => (
                  <div
                    key={property}
                    className="flex items-center gap-3 border border-white/[0.06] bg-card px-5 py-4 transition-all duration-300 hover:border-white/[0.12]"
                  >
                    <Target className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground font-light">{property}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-accent" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                  Requirements
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {requirements.map((req) => (
                  <div
                    key={req}
                    className="flex items-center gap-3 border border-white/[0.06] bg-card px-5 py-4 transition-all duration-300 hover:border-white/[0.12]"
                  >
                    <FileCheck className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground font-light">{req}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 border border-white/[0.06] bg-card">
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Every commercial deal is unique. We work closely with you to structure financing that aligns with your investment strategy and property type.
                </p>
              </div>
            </div>
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
            Let&apos;s Fund Your <span className="italic font-light text-accent">Next Deal.</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether it&apos;s your first commercial property or part of a growing portfolio, we structure financing tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
            >
              DISCUSS YOUR DEAL
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:18885551234"
              className="inline-flex items-center gap-2 border border-white/20 text-foreground hover:bg-white/5 font-semibold px-8 py-4 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4 text-accent" />
              CALL NOW
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/[0.06] py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-serif text-sm text-accent tracking-[0.12em] font-bold">
            VIPIN GARG
          </Link>
          <p className="text-[11px] text-muted-foreground/60 font-light tracking-wide">
            &copy; {new Date().getFullYear()} Vipin Garg — Dominion Lending Centres. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
