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

const sidebarNav = [
  { label: "Benefits of a Professional", href: "/mortgages/benefits", icon: Shield, active: false },
  { label: "How Much It Costs", href: "/mortgages/cost", icon: DollarSign, active: false },
  { label: "Mortgage Renewal", href: "/mortgages/renewal", icon: RefreshCw, active: false },
  { label: "Home Equity", href: "/mortgages/home-equity", icon: Home, active: true },
  { label: "Mortgage Life Insurance", href: "/mortgages/life-insurance", icon: Heart, active: false },
  { label: "Apply Now", href: "/mortgages/apply", icon: FileCheck, active: false },
  { label: "Current Rates", href: "/mortgages", icon: BarChart3, active: false },
]

export default function HomeEquityPage() {
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
          src="/HomeEquityBanner.webp"
          alt="Home equity"
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
              Home Equity
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-extrabold text-foreground leading-[0.95] tracking-[-0.02em] mb-6 max-w-3xl">
              Home{" "}
              <span className="italic font-light text-accent">Equity.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Mobile Sidebar ── */}
      <div className="lg:hidden w-full border-b border-white/[0.06] bg-card/50">
        <details className="group">
          <summary className="flex items-center justify-between px-5 sm:px-6 py-4 cursor-pointer select-none list-none">
            <div className="flex items-center gap-3">
              <Home className="w-4 h-4 text-accent" />
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
      <section className="w-full py-16 sm:py-24">
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
            <div className="lg:col-span-9 space-y-10 max-w-3xl">
              <p className="text-foreground/80 text-base lg:text-lg font-light leading-[1.8]">
                Many people find that one of the easiest and most affordable ways to access money is through the equity that they have accumulated in their home. This is a very popular option, especially when you have an excellent first mortgage in place.
              </p>

              <p className="text-foreground/80 text-base lg:text-lg font-light leading-[1.8]">
                <span className="font-medium text-foreground">Using home equity to your advantage,</span> Canadians purchase homes for a variety of reasons. Some want the stability of owning their own home, while others also look at home ownership as an investment vehicle. No matter what the reason, the truth is that home ownership has proven itself to be a good stable investment over time, and one which many Canadians are profiting from.
              </p>

              <p className="text-foreground/80 text-base lg:text-lg font-light leading-[1.8]">
                While many people have chosen to purchase their first home during these times of lower interest rates, there has also been a large movement to refinance home loans and pull out equity for home improvements, investments, college expenses, and even high interest debt consolidation. Canadians have been borrowing against their home&apos;s equity in record numbers, taking out billions of dollars in cash each year.
              </p>

              <div className="w-full h-px bg-white/[0.06]" />

              <p className="text-foreground/80 text-base lg:text-lg font-light leading-[1.8]">
                In years past, many saw their homes as a shelter of safety, yet today, they are more than ever before, willing to borrow against the equity owned in their homes to further their investment portfolios, get out of debt, send their children to university, make improvements to their home, or even boost their RRSP contributions. Where home equity was once sat upon, today it is often used to one&apos;s advantage.
              </p>

              {/* Video embed */}
              <div className="w-full">
                <div className="relative w-full overflow-hidden bg-card border border-white/[0.06]" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/BZ7I1FUsz5s"
                    title="Home Equity"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>

              <div className="w-full h-px bg-white/[0.06]" />

              <p className="text-foreground/80 text-base lg:text-lg font-light leading-[1.8]">
                While removing equity from your home can be a good idea, you should do so with caution and fully understand the benefits and possible risks. The best thing you can do is to consult a licensed mortgage professional and financial planner to discuss opportunities to make your home&apos;s equity work for you.
              </p>
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
                Make your equity{" "}
                <span className="italic font-light text-accent">work for you.</span>
              </h2>
              <p className="text-muted-foreground/60 text-base font-light leading-relaxed max-w-lg">
                A licensed mortgage professional can help you understand your options and find the best solution for your goals.
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
