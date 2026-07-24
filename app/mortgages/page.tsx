import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  Shield,
  DollarSign,
  RefreshCw,
  Home,
  Heart,
  FileCheck,
  BarChart3,
  ChevronDown,
} from "lucide-react"
import { Footer } from "@/components/landing/footer"

const rates = [
  { term: "6 Months", bankRate: "7.89%", bankPayment: "$756.21", ourRate: "4.59%", ourPayment: "$558.49", savings: "$197.72", highlight: false },
  { term: "1 Year", bankRate: "6.15%", bankPayment: "$648.75", ourRate: "4.59%", ourPayment: "$558.49", savings: "$90.26", highlight: false },
  { term: "2 Years", bankRate: "5.44%", bankPayment: "$606.90", ourRate: "4.39%", ourPayment: "$547.37", savings: "$59.53", highlight: false },
  { term: "3 Years", bankRate: "4.62%", bankPayment: "$560.16", ourRate: "4.34%", ourPayment: "$544.61", savings: "$15.55", highlight: true },
  { term: "4 Years", bankRate: "6.01%", bankPayment: "$640.40", ourRate: "4.39%", ourPayment: "$547.37", savings: "$93.03", highlight: false },
  { term: "5 Years", bankRate: "4.56%", bankPayment: "$556.81", ourRate: "4.39%", ourPayment: "$547.37", savings: "$9.44", highlight: false },
  { term: "7 Years", bankRate: "6.41%", bankPayment: "$664.38", ourRate: "4.59%", ourPayment: "$558.49", savings: "$105.89", highlight: false },
  { term: "10 Years", bankRate: "6.81%", bankPayment: "$688.72", ourRate: "4.59%", ourPayment: "$558.49", savings: "$130.24", highlight: false },
]

const sidebarNav = [
  { label: "Benefits of a Professional", href: "/mortgages/benefits", icon: Shield, active: false },
  { label: "How Much It Costs", href: "/mortgages/cost", icon: DollarSign, active: false },
  { label: "Mortgage Renewal", href: "/mortgages/renewal", icon: RefreshCw, active: false },
  { label: "Home Equity", href: "/mortgages/home-equity", icon: Home, active: false },
  { label: "Mortgage Life Insurance", href: "/mortgages/life-insurance", icon: Heart, active: false },
  { label: "Apply Now", href: "/mortgages/apply", icon: FileCheck, active: false },
  { label: "Current Rates", href: "/mortgages", icon: BarChart3, active: true },
]

export default function CurrentRatesPage() {
  return (
    <div className="min-h-svh w-full bg-background text-foreground">
      {/* ── Sticky Header ── */}
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

      {/* ── Hero ── */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/MortgageRatesBanner.webp"
          alt="Mortgage rates concept"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-12 pb-14 lg:pb-24">
            <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Current Rates
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-extrabold text-foreground leading-[0.95] tracking-[-0.02em] mb-6 max-w-2xl">
              View Our Current{" "}
              <span className="italic font-light text-accent">Rates.</span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg font-light max-w-lg leading-relaxed mb-10">
              Competitive mortgage rates backed by expert guidance. We negotiate on your behalf to secure the best terms.
            </p>
            <a
              href="#rates-overview"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
            >
              VIEW CURRENT RATES
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Mobile Sidebar ── */}
      <div className="lg:hidden w-full border-b border-white/[0.06] bg-card/50">
        <details className="group">
          <summary className="flex items-center justify-between px-5 sm:px-6 py-4 cursor-pointer select-none list-none">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent">
                Navigate Topics
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200" />
          </summary>
          <nav className="px-5 sm:px-6 pb-4">
            <p className="px-4 py-3 text-xs font-bold tracking-[0.15em] uppercase text-accent">
              Mortgages
            </p>
            <div className="space-y-0.5">
              {sidebarNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${
                    item.active
                      ? "text-accent bg-accent/[0.06]"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.02]"
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </details>
      </div>

      {/* ── Main Content ── */}
      <section className="w-full py-16 sm:py-24" id="rates-overview">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Sidebar — Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <p className="px-4 py-3 text-xs font-bold tracking-[0.15em] uppercase text-accent">
                  Mortgages
                </p>
                <nav className="space-y-0.5">
                  {sidebarNav.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${
                        item.active
                          ? "text-accent font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0 opacity-50" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Column */}
            <div className="lg:col-span-9 space-y-20 sm:space-y-28">

              {/* ── Rates Overview — Statement piece ── */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.05] tracking-[-0.02em] mb-14">
                  Today&apos;s rates, <br className="hidden sm:block" />
                  <span className="italic font-light text-accent">negotiated for you.</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06]">
                  {/* Variable Rate */}
                  <div className="bg-card p-8 sm:p-10">
                    <span className="text-xs font-medium tracking-wide text-muted-foreground/60 block mb-6">
                      Current Variable Mortgage Rate
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-6xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-accent leading-none">
                        3.70
                      </span>
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-accent/30">
                        %
                      </span>
                    </div>
                    <p className="mt-6 text-muted-foreground/70 text-sm font-light leading-relaxed max-w-xs">
                      Flexible rates that move with the market, giving you potential savings over fixed terms.
                    </p>
                  </div>

                  {/* Prime Rate */}
                  <div className="bg-card p-8 sm:p-10">
                    <span className="text-xs font-medium tracking-wide text-muted-foreground/60 block mb-6">
                      Current Prime Rate
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-6xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-accent leading-none">
                        4.45
                      </span>
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-accent/30">
                        %
                      </span>
                    </div>
                    <p className="mt-6 text-muted-foreground/70 text-sm font-light leading-relaxed max-w-xs">
                      The Bank of Canada benchmark rate that influences variable mortgage pricing nationwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Comparison Table ── */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.05] tracking-[-0.02em] mb-4">
                  See how much <br className="hidden sm:block" />
                  <span className="italic font-light text-accent">you save.</span>
                </h2>
                <p className="text-muted-foreground/60 text-sm font-light leading-relaxed mb-12 max-w-lg">
                  Standard bank posted rates versus our negotiated rates. Every dollar matters over the life of your mortgage.
                </p>

                {/* Desktop Table */}
                <div className="hidden md:block">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left pb-5 text-xs font-medium tracking-wide text-muted-foreground/50 border-b border-white/[0.06]">
                          Term
                        </th>
                        <th className="text-right pb-5 text-xs font-medium tracking-wide text-muted-foreground/50 border-b border-white/[0.06]">
                          Bank Rate
                        </th>
                        <th className="text-right pb-5 text-xs font-medium tracking-wide text-muted-foreground/50 border-b border-white/[0.06]">
                          Payment / $100K
                        </th>
                        <th className="text-right pb-5 text-xs font-medium tracking-wide text-accent/70 border-b border-white/[0.06]">
                          Our Rate
                        </th>
                        <th className="text-right pb-5 text-xs font-medium tracking-wide text-accent/70 border-b border-white/[0.06]">
                          Payment / $100K
                        </th>
                        <th className="text-right pb-5 text-xs font-medium tracking-wide text-accent border-b border-white/[0.06]">
                          You Save
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rates.map((row) => (
                        <tr
                          key={row.term}
                          className="border-b border-white/[0.04] group"
                        >
                          <td className="py-5 text-sm font-medium text-foreground">
                            {row.term}
                          </td>
                          <td className="py-5 text-right text-sm text-muted-foreground/60 tabular-nums">
                            {row.bankRate}
                          </td>
                          <td className="py-5 text-right text-sm text-muted-foreground/40 tabular-nums">
                            {row.bankPayment}
                          </td>
                          <td className="py-5 text-right text-sm font-semibold text-foreground tabular-nums">
                            {row.ourRate}
                          </td>
                          <td className="py-5 text-right text-sm text-muted-foreground/70 tabular-nums">
                            {row.ourPayment}
                          </td>
                          <td className="py-5 text-right">
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent tabular-nums">
                              {row.savings}
                              <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-2">
                  {rates.map((row) => (
                    <div
                      key={row.term}
                      className="flex items-center justify-between py-4 border-b border-white/[0.04]"
                    >
                      <div>
                        <span className="text-sm font-medium text-foreground block">{row.term}</span>
                        <span className="text-xs text-muted-foreground/50">{row.bankPayment} / $100K at {row.bankRate}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-accent block">{row.ourRate}</span>
                        <span className="text-xs text-accent/60">{row.savings} saved</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <p className="mt-10 text-muted-foreground/40 text-[11px] font-light leading-relaxed max-w-2xl">
                  *Some conditions may apply. Rates may vary from Province to Province. Rates subject to change without notice.
                  Posted rates may be high ratio and/or quick close which can differ from conventional rates. O.A.C. E.&amp; O.E.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.05] tracking-[-0.02em] mb-6">
                Ready to lock in <br className="hidden sm:block" />
                <span className="italic font-light text-accent">your best rate?</span>
              </h2>
              <p className="text-muted-foreground/60 text-base font-light leading-relaxed max-w-lg">
                Every rate on this page is a starting point. The real rate depends on your profile, your property, and your goals. Let&apos;s talk about yours.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
              >
                GET PRE-APPROVED
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+17787922220"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-foreground hover:bg-white/[0.03] font-semibold px-8 py-4 transition-all duration-300 text-sm"
              >
                <Phone className="w-4 h-4 text-accent" />
                +1 778-792-2220
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
