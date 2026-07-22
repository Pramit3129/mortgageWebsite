import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, HardHat, Percent, CheckCircle2, Phone, ArrowRight, Hammer, Layers, DoorOpen, PaintBucket, ClipboardCheck, CircleDollarSign } from "lucide-react"

const stages = [
  {
    step: "01",
    icon: Hammer,
    title: "Clearing of the Site",
    desc: "Depending on the nature of the land, there may be soil testing, site leveling, and clearing undertaken before actual construction.",
  },
  {
    step: "02",
    icon: Layers,
    title: "The Slab or Base Stage",
    desc: "The foundation is laid. This includes measuring out the design on the site, pouring the footings, under slab drainage, a moisture barrier, and special mesh for termite protection.",
  },
  {
    step: "03",
    icon: HardHat,
    title: "Frame Stage",
    desc: "Installation of your internal and external support structure, along with walls, a conduit for electrical and plumbing, the roof frame and sheeting, gutters, and insulation.",
  },
  {
    step: "04",
    icon: DoorOpen,
    title: "Lockup Stage",
    desc: "Your windows, doors, and remaining walls are installed. It's also safe for plumbers, electricians, cabinet makers, and other tradesmen to begin fitting out the property.",
  },
  {
    step: "05",
    icon: PaintBucket,
    title: "Fit-Out or Fixing Stage",
    desc: "Plumbing, electrical (including lights and power points), and other fixtures and fittings are installed. Design features such as cornices, tiling, cabinets, shelving, reveals, and architraves are added.",
  },
  {
    step: "06",
    icon: ClipboardCheck,
    title: "Practical Completion Stage",
    desc: "All painting, installations, and details have been completed, and you're effectively ready to move in.",
  },
]

const paymentBreakdown = [
  { stage: "The Deposit", percent: "5%", width: "5%" },
  { stage: "Slab or Base Stage", percent: "15%", width: "15%" },
  { stage: "Frame Stage", percent: "20%", width: "20%" },
  { stage: "Lockup Stage", percent: "20%", width: "20%" },
  { stage: "Fit-Out or Fixing Stage", percent: "30%", width: "30%" },
  { stage: "Practical Completion Stage", percent: "10%", width: "10%" },
]

const keyFeatures = [
  {
    icon: Percent,
    title: "Loan-to-Value",
    tag: "Up to 75%",
    items: [
      { label: "Raw Land", desc: "50% LTV on raw land." },
      { label: "Serviced Land", desc: "75% LTV on serviced land." },
      { label: "Note", desc: "The location of the property is one of the major factors for approval." },
    ],
  },
  {
    icon: CircleDollarSign,
    title: "Loan Features",
    tag: "Fully Flexible",
    items: [
      { label: "Fully Open", desc: "Construction loans are fully open and can be repaid at any time." },
      { label: "Interest Only on Drawn Amounts", desc: "Interest is charged only on amounts drawn. There is no standby fee for unused funds." },
      { label: "Cost to Complete", desc: "There must always be enough funds available in the loan to complete the construction project. If the cost to complete is $100,000, there must be $100,000 available to draw from the loan." },
    ],
  },
]

export default function ConstructionLoanPage() {
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
          src="/ConstructionLoanDetailPage1.png"
          alt="Construction Loan"
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
                Construction Loan
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-foreground leading-[1.08] tracking-tight max-w-3xl">
              Build Your <br />
              <span className="italic font-light text-accent">Dream From Ground Up.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg font-light max-w-2xl leading-relaxed">
              From ground-up builds to major renovations. We secure flexible financing that adapts as your project progresses — you only pay interest on what you draw.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative border border-white/[0.06] bg-card p-8 sm:p-10 transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-700 group-hover:w-full" />

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center border border-accent/20 bg-accent/5">
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-accent bg-accent/10 px-3 py-1.5 whitespace-nowrap">
                    {feature.tag}
                  </span>
                </div>

                <div className="space-y-4">
                  {feature.items.map((item) => (
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

      {/* Construction Stages Timeline */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-accent" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
              Construction Stages
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-12">
            Six Stages to <span className="italic font-light text-accent">Completion.</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-white/[0.08]" />

            <div className="space-y-0">
              {stages.map((stage) => (
                <div
                  key={stage.step}
                  className="group relative flex gap-6 py-8 border-b border-white/[0.06] last:border-b-0"
                >
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center border border-accent/30 bg-background group-hover:border-accent/60 transition-colors duration-300">
                    <stage.icon className="w-4 h-4 text-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent">
                        Step {stage.step}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Breakdown + Image */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent/50 z-10" />
                <Image
                  src="/ConstructionLoanDetailPage2.png"
                  alt="Construction Progress"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-accent" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                  Payment Breakdown
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-8">
                Pay as You <span className="italic font-light text-accent">Build.</span>
              </h2>

              <div className="space-y-4">
                {paymentBreakdown.map((item) => (
                  <div key={item.stage} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-foreground font-light">{item.stage}</span>
                      <span className="text-sm font-semibold text-accent">{item.percent}</span>
                    </div>
                    <div className="w-full h-2 bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full bg-accent/60 transition-all duration-700 group-hover:bg-accent"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 border border-white/[0.06] bg-card">
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  The amount paid at each progress payment stage is based on a percentage of the total costs of completion. Interest is charged only on amounts drawn — there is no standby fee for unused funds.
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
            Let&apos;s Build Your <span className="italic font-light text-accent">Vision.</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether it&apos;s a custom home or a major renovation, we&apos;ll structure a construction loan that keeps your project moving forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
            >
              START YOUR PROJECT
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
