import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home, FileText, Calculator, PiggyBank, TrendingUp, CheckCircle2, Phone, ArrowRight } from "lucide-react"
import { Footer } from "@/components/landing/footer"

const benefits = [
  {
    icon: Home,
    title: "Property Transfer Tax (PTT) Exemption",
    tag: "Save up to $8,000",
    items: [
      {
        label: "Full Exemption",
        desc: "Available for homes priced up to $500,000.",
      },
      {
        label: "Partial Exemption",
        desc: "Applies to homes priced between $500,000 and $860,000, with the exemption amount decreasing as the property value increases.",
      },
      {
        label: "Ineligibility",
        desc: "Homes priced above $860,000 do not qualify for any exemption.",
      },
    ],
  },
  {
    icon: FileText,
    title: "GST Rebate on New Homes",
    tag: "Save up to $50,000",
    items: [
      {
        label: "100% GST Rebate",
        desc: "For newly built homes priced up to $1 million, providing savings up to $50,000.",
      },
      {
        label: "Phased Rebate",
        desc: "For homes priced between $1 million and $1.5 million, the rebate decreases proportionally.",
      },
      {
        label: "No Rebate",
        desc: "Homes priced above $1.5 million are not eligible.",
      },
    ],
  },
  {
    icon: Calculator,
    title: "Extended Amortization Period",
    tag: "30-Year Option",
    items: [
      {
        label: "30-Year Amortization",
        desc: "First-time buyers can now opt for a 30-year amortization period on insured mortgages, applicable to both new and existing homes.",
      },
      {
        label: "Benefits",
        desc: "This extension reduces monthly mortgage payments, enhancing affordability.",
      },
    ],
  },
  {
    icon: PiggyBank,
    title: "Enhanced RRSP Home Buyers' Plan",
    tag: "Withdraw up to $60,000",
    items: [
      {
        label: "Increased Withdrawal Limit",
        desc: "First-time buyers can withdraw up to $60,000 from their Registered Retirement Savings Plan (RRSP) to finance their home purchase, up from the previous limit of $35,000.",
      },
      {
        label: "Repayment",
        desc: "The withdrawn amount must be repaid over a 15-year period.",
      },
    ],
  },
]

const additionalIncentives = [
  {
    title: "First Home Savings Account (FHSA)",
    desc: "Allows first-time buyers to save up to $40,000 tax-free for their home purchase.",
  },
  {
    title: "Down Payment Match Program",
    desc: "In select provinces, the federal government offers a 5% match (up to $25,000) on the buyer's down payment savings.",
  },
]

export default function FirstTimeHomeBuyersPage() {
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
          src="/FirstTimeHomeBuyer1.png"
          alt="First Time Home Buyers"
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
                First Time Home Buyers
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-foreground leading-[1.08] tracking-tight max-w-3xl">
              Your First Home <br />
              <span className="italic font-light text-accent">Starts Here.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg font-light max-w-2xl leading-relaxed">
              As of December 15, 2024, and with a new announcement in June 2025, several programs and tax exemptions are available to assist first-time home buyers in British Columbia.
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

      {/* Second Image + Additional Incentives */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent/50 z-10" />
                <Image
                  src="/FirstTimeHomeBuyerDetailaPage2.png"
                  alt="First Time Home Buyer Consultation"
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
                  Additional Incentives
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-8">
                More Ways to <span className="italic font-light text-accent">Save.</span>
              </h2>

              <div className="space-y-6">
                {additionalIncentives.map((incentive) => (
                  <div
                    key={incentive.title}
                    className="border-l-2 border-accent/40 pl-6 py-2"
                  >
                    <h4 className="font-serif text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      {incentive.title}
                    </h4>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      {incentive.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 border border-white/[0.06] bg-card">
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  These initiatives aim to make homeownership more accessible for first-time buyers in BC by reducing upfront costs and monthly payments. It&apos;s advisable to consult with a mortgage professional to understand how these programs can be tailored to your specific situation.
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
            Let&apos;s Find Your <span className="italic font-light text-accent">Perfect Home.</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Work with a trusted mortgage professional to navigate every program and incentive available to you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
            >
              GET PRE-APPROVED
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
