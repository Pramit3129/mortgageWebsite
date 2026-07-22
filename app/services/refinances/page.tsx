import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, RefreshCw, TrendingDown, DollarSign, Landmark, Clock, CheckCircle2, Phone, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: TrendingDown,
    title: "Secure a Lower Interest Rate",
    tag: "Reduce Your Costs",
    items: [
      {
        label: "Rate Shopping",
        desc: "We compare rates across multiple lenders to find you the most competitive refinancing option available.",
      },
      {
        label: "Potential Savings",
        desc: "Even a 0.5% rate reduction can save tens of thousands of dollars over the life of your mortgage.",
      },
      {
        label: "Break-Even Analysis",
        desc: "We calculate whether refinancing makes financial sense by weighing closing costs against monthly savings.",
      },
    ],
  },
  {
    icon: DollarSign,
    title: "Access Your Home Equity",
    tag: "Unlock Cash",
    items: [
      {
        label: "Home Equity Line of Credit",
        desc: "Tap into your home's equity with a flexible HELOC that lets you borrow as needed and pay interest only on what you use.",
      },
      {
        label: "Lump Sum Cash-Out",
        desc: "Convert a portion of your equity into a lump sum for major expenses like renovations, education, or investments.",
      },
      {
        label: "Debt Consolidation",
        desc: "Roll high-interest debts into your mortgage at a lower rate, simplifying payments and reducing total interest.",
      },
    ],
  },
  {
    icon: Landmark,
    title: "Switch Lenders or Products",
    tag: "Better Terms",
    items: [
      {
        label: "Lender Switch",
        desc: "Move to a new lender offering better rates, terms, or service without penalty at renewal or during specific windows.",
      },
      {
        label: "Fixed to Variable",
        desc: "Switch from a fixed to variable rate (or vice versa) to align with your risk tolerance and market outlook.",
      },
      {
        label: "Open Up Options",
        desc: "Refinance into a mortgage product with better prepayment privileges, portability, or skip-a-payment features.",
      },
    ],
  },
  {
    icon: Clock,
    title: "Adjust Your Amortization",
    tag: "Flexibility",
    items: [
      {
        label: "Shorten Amortization",
        desc: "Pay off your mortgage faster by refinancing into a shorter amortization period, saving significantly on interest.",
      },
      {
        label: "Extend Amortization",
        desc: "Lower your monthly payments by extending the amortization period, freeing up cash flow for other priorities.",
      },
      {
        label: "Renewal Timing",
        desc: "Strategically time your refinance to coincide with your renewal date to minimize or avoid break penalties.",
      },
    ],
  },
]

const whenToRefinance = [
  {
    title: "Rates Have Dropped",
    desc: "If current market rates are significantly lower than your existing rate, refinancing could result in substantial long-term savings.",
  },
  {
    title: "Your Home Value Has Increased",
    desc: "A higher property value improves your loan-to-value ratio, potentially unlocking better rates and more equity.",
  },
  {
    title: "You Need Cash for a Major Purchase",
    desc: "Whether it's a renovation, investment, or education, refinancing lets you access capital at lower interest rates than personal loans or credit cards.",
  },
]

export default function RefinancesPage() {
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
          src="/RefinincingDetailsPage1.png"
          alt="Mortgage Refinancing"
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
                Refinances
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-foreground leading-[1.08] tracking-tight max-w-3xl">
              Your Mortgage <br />
              <span className="italic font-light text-accent">Working Harder.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg font-light max-w-2xl leading-relaxed">
              Your financial situation evolves — your mortgage should too. We restructure your mortgage to secure better rates, access equity, or consolidate debt.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative border border-white/[0.06] bg-card p-8 sm:p-10 transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
              >
                {/* Gold top accent */}
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

      {/* Second Image + When to Refinance */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent/50 z-10" />
                <Image
                  src="/RefinincingDetailPage2.png"
                  alt="Refinancing Consultation"
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
                  When to Refinance
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-8">
                Timing Is <span className="italic font-light text-accent">Everything.</span>
              </h2>

              <div className="space-y-6">
                {whenToRefinance.map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-accent/40 pl-6 py-2"
                  >
                    <h4 className="font-serif text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-accent" />
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 border border-white/[0.06] bg-card">
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Every refinance decision is unique. We analyze your current mortgage, financial goals, and market conditions to determine if refinancing is the right move for you. Contact us for a personalized assessment.
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
            Let&apos;s Optimize Your <span className="italic font-light text-accent">Mortgage.</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            We&apos;ll review your current mortgage and find opportunities to save you money or unlock your home&apos;s equity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
            >
              GET A FREE ASSESSMENT
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
