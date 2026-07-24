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
  ArrowUpRight,
  Lock,
  Zap,
  CheckCircle,
} from "lucide-react"
import { Footer } from "@/components/landing/footer"

const sidebarNav = [
  { label: "Benefits of a Professional", href: "/mortgages/benefits", icon: Shield, active: false },
  { label: "How Much It Costs", href: "/mortgages/cost", icon: DollarSign, active: false },
  { label: "Mortgage Renewal", href: "/mortgages/renewal", icon: RefreshCw, active: false },
  { label: "Home Equity", href: "/mortgages/home-equity", icon: Home, active: false },
  { label: "Mortgage Life Insurance", href: "/mortgages/life-insurance", icon: Heart, active: false },
  { label: "Apply Now", href: "/mortgages/apply", icon: FileCheck, active: true },
  { label: "Current Rates", href: "/mortgages", icon: BarChart3, active: false },
]

export default function ApplyPage() {
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
          src="/ApplyNow.webp"
          alt="Apply for a mortgage"
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
              Apply Now
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-extrabold text-foreground leading-[0.95] tracking-[-0.02em] mb-6 max-w-3xl">
              Apply{" "}
              <span className="italic font-light text-accent">Now.</span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg font-light max-w-lg leading-relaxed">
              Applying for a mortgage couldn&apos;t be easier. Just complete our secure application and we will be in touch shortly.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mobile Sidebar ── */}
      <div className="lg:hidden w-full border-b border-white/[0.06] bg-card/50">
        <details className="group">
          <summary className="flex items-center justify-between px-5 sm:px-6 py-4 cursor-pointer select-none list-none">
            <div className="flex items-center gap-3">
              <FileCheck className="w-4 h-4 text-accent" />
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
            <div className="lg:col-span-9 space-y-16">
              {/* Apply Now CTA Section */}
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.05] tracking-[-0.02em] mb-6">
                  Fast. Easy.{" "}
                  <span className="italic font-light text-accent">Secure.</span>
                </h2>
                <p className="text-muted-foreground/60 text-base font-light leading-relaxed mb-12">
                  Apply online in minutes. Your information is secure and we&apos;ll be in touch shortly to discuss your options.
                </p>
                <a
                  href="https://dominionlending.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-5 transition-all duration-300 text-base group"
                >
                  APPLY NOW
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-8 border border-white/[0.06] bg-card">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-5 border border-accent/20 bg-accent/5">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                    Fast
                  </h3>
                  <p className="text-muted-foreground/60 text-sm font-light leading-relaxed">
                    Complete the application in just a few minutes. No lengthy paperwork required.
                  </p>
                </div>
                <div className="text-center p-8 border border-white/[0.06] bg-card">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-5 border border-accent/20 bg-accent/5">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                    Easy
                  </h3>
                  <p className="text-muted-foreground/60 text-sm font-light leading-relaxed">
                    Simple step-by-step process. We guide you through every step of the way.
                  </p>
                </div>
                <div className="text-center p-8 border border-white/[0.06] bg-card">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-5 border border-accent/20 bg-accent/5">
                    <Lock className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2">
                    Secure
                  </h3>
                  <p className="text-muted-foreground/60 text-sm font-light leading-relaxed">
                    Your personal information is protected with bank-level encryption.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
