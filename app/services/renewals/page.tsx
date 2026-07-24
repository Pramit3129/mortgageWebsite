import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, ArrowRight, TrendingDown, Shield, Settings, Headphones, RefreshCw, BarChart3, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/landing/footer"

const benefits = [
  {
    icon: TrendingDown,
    title: "Better Interest Rates",
    tag: "Save Thousands",
    items: [
      { label: "Negotiate Lower Rates", desc: "Switching lenders at renewal often allows you to negotiate a lower interest rate, especially if rates have dropped or your credit profile has improved." },
      { label: "Real Savings", desc: "Even a small rate difference can save you thousands over the life of your mortgage." },
    ],
  },
  {
    icon: Shield,
    title: "No Penalties at Renewal",
    tag: "Zero Cost",
    items: [
      { label: "Penalty-Free Switch", desc: "If you're switching at the end of your term, there are no prepayment penalties — you're free to move to a better lender with zero cost." },
      { label: "Minimal Fees", desc: "Only minimal legal or administrative fees may apply, which are sometimes covered by the new lender." },
    ],
  },
  {
    icon: Settings,
    title: "More Flexible Mortgage Features",
    tag: "Full Flexibility",
    items: [
      { label: "Prepayment Privileges", desc: "Make extra payments without penalty to pay off your mortgage faster." },
      { label: "Portability Options", desc: "Transfer your mortgage to a new property without restructuring." },
      { label: "Skip-a-Payment", desc: "Flexibility to skip payments during tight financial months." },
      { label: "Accelerated Payments", desc: "Choose accelerated payment schedules to save on interest." },
    ],
  },
  {
    icon: Headphones,
    title: "Access to Better Customer Service or Tools",
    tag: "Better Experience",
    items: [
      { label: "Superior Tools", desc: "Some lenders offer superior online tools, customer support, or mobile apps to manage your mortgage easily." },
      { label: "Modern Experience", desc: "A better banking experience can save you time and frustration over the life of your mortgage." },
    ],
  },
  {
    icon: RefreshCw,
    title: "Opportunity to Refinance",
    tag: "Unlock Equity",
    items: [
      { label: "Blend and Extend", desc: "You can increase your mortgage amount at renewal to consolidate debt, fund renovations, or invest in other opportunities." },
      { label: "Consolidate Debt", desc: "Roll high-interest debts into your mortgage at a lower rate." },
      { label: "Fund Your Goals", desc: "Use the opportunity to access capital for renovations or investments." },
    ],
  },
  {
    icon: BarChart3,
    title: "Improve Your Mortgage Strategy",
    tag: "Align With Goals",
    items: [
      { label: "Flexible Amortization", desc: "Choose a shorter or longer amortization to match your financial plan." },
      { label: "Fixed or Variable", desc: "Opt for fixed or variable rates based on your risk tolerance and market outlook." },
      { label: "Future Planning", desc: "Align your mortgage term with future plans like selling or retiring." },
    ],
  },
]

export default function RenewalsPage() {
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
          src="/RenewablesDetailPage1.png"
          alt="Mortgage Renewals"
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
                Renewals
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-foreground leading-[1.08] tracking-tight max-w-3xl">
              Don&apos;t Settle at <br />
              <span className="italic font-light text-accent">Renewal Time.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg font-light max-w-2xl leading-relaxed">
              Renewing or switching your mortgage to another lender at the end of your term can offer several financial and strategic benefits.
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

      {/* Second Image + Summary */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent/50 z-10" />
                <Image
                  src="/RenewableDetailsPage2.png"
                  alt="Mortgage Renewal Consultation"
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
                  Why Switch?
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-8">
                The Smart Move at <span className="italic font-light text-accent">Renewal.</span>
              </h2>

              <div className="space-y-6">
                <div className="border-l-2 border-accent/40 pl-6 py-2">
                  <h4 className="font-serif text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-accent" />
                    Lower Your Rate
                  </h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    Don't accept your lender's first offer. We compare rates across the market to ensure you're getting the best deal available.
                  </p>
                </div>
                <div className="border-l-2 border-accent/40 pl-6 py-2">
                  <h4 className="font-serif text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-accent" />
                    Zero Penalties
                  </h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    At the end of your term, you can switch lenders without any prepayment penalties. It's the perfect time to shop around.
                  </p>
                </div>
                <div className="border-l-2 border-accent/40 pl-6 py-2">
                  <h4 className="font-serif text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-accent" />
                    Strategic Advantage
                  </h4>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    Use your renewal as an opportunity to restructure your mortgage — adjust amortization, switch between fixed and variable, or access equity.
                  </p>
                </div>
              </div>

              <div className="mt-10 p-6 border border-white/[0.06] bg-card">
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Your mortgage renewal is more than just paperwork — it's an opportunity to optimize your financing. We negotiate on your behalf to secure the best possible terms.
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
            Don&apos;t Settle. <span className="italic font-light text-accent">Renew Smarter.</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            We&apos;ll review your current mortgage and find the best renewal or switch option to save you money and improve your terms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
            >
              REVIEW MY MORTGAGE
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
