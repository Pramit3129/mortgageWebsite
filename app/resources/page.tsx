import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Phone, ExternalLink } from "lucide-react"
import { Footer } from "@/components/landing/footer"
import { resources } from "@/lib/resources-data"

const categoryMeta: Record<string, { kicker: string; subtitle: string }> = {
  "Mortgage & Real Estate": {
    kicker: "01 — Foundations",
    subtitle:
      "The essential organizations and tools that shape how Canadians finance their homes.",
  },
  "Government & Regulatory": {
    kicker: "02 — Government & Regulatory",
    subtitle:
      "Federal agencies and portals that govern taxation, compliance, and housing policy.",
  },
  "Industry Associations": {
    kicker: "03 — Industry Associations",
    subtitle:
      "Professional bodies that set standards, protect consumers, and drive innovation.",
  },
}

const orderedCategories = [
  "Mortgage & Real Estate",
  "Government & Regulatory",
  "Industry Associations",
]

export default function ResourcesPage() {
  return (
    <div className="min-h-svh w-full bg-background text-foreground">
      {/* ── Sticky Nav ── */}
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
      <section className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] overflow-hidden">
        <Image
          src="/ResourcePageBg.png"
          alt="Resources — Mortgage & Real Estate"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-12 pb-14 lg:pb-24">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-10 bg-accent" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-accent">
                Resources
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold text-foreground leading-[1.06] tracking-tight max-w-4xl">
              Everything You Need.{" "}
              <br className="hidden sm:block" />
              <span className="italic font-light text-accent">In One Place.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg font-light max-w-xl leading-relaxed">
              A curated collection of trusted organizations, government resources,
              and industry associations for Canadian homeowners and buyers.
            </p>

            {/* Quick nav pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {orderedCategories.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Resources by Category ── */}
      <section className="w-full">
        {orderedCategories.map((catName, catIdx) => {
          const meta = categoryMeta[catName]
          const catResources = resources.filter((r) => r.category === catName)

          return (
            <div
              key={catName}
              id={catName.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
              className="scroll-mt-24"
            >
              {/* Divider line between categories */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

              <div className="w-full py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
                  {/* Category Header */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
                          {meta.kicker}
                        </span>
                        <div className="h-[1px] w-12 bg-white/10" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.1] tracking-tight">
                        {catName === "Industry Associations"
                          ? "Industry Associations"
                          : catName === "Government & Regulatory"
                            ? "Government & Regulatory"
                            : "Mortgage & Real Estate"}
                      </h2>
                    </div>
                    <div className="lg:col-span-5 lg:flex lg:items-end">
                      <p className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-lg">
                        {meta.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Resource Cards — editorial list style */}
                  <div className="space-y-4">
                    {catResources.map((resource, rIdx) => {
                      const globalIdx = orderedCategories
                        .slice(0, catIdx)
                        .reduce((acc, name) => acc + resources.filter((r) => r.category === name).length, 0) + rIdx + 1
                      const displayNum = String(globalIdx)
                      return (
                        <Link
                          key={resource.slug}
                          href={`/resources/${resource.slug}`}
                          className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/[0.06] bg-card overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
                        >
                          {/* Gold accent line */}
                          <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full z-10" />

                          {/* Number column */}
                          <div className="lg:col-span-2 flex items-center justify-start lg:justify-center p-6 sm:p-8 lg:p-0 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                            <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white/[0.04] group-hover:text-accent/20 transition-colors duration-700 select-none">
                              {displayNum}
                            </span>
                          </div>

                          {/* Content column */}
                          <div className="lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 lg:px-10">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent/70 mb-3">
                              {resource.category}
                            </span>
                            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                              {resource.title}
                            </h3>
                            <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-2 max-w-2xl">
                              {resource.description}
                            </p>
                          </div>

                          {/* Arrow column */}
                          <div className="lg:col-span-3 flex items-center justify-end p-6 sm:p-8 lg:pr-10">
                            <div className="flex items-center gap-3">
                              <span className="hidden sm:inline text-[10px] font-bold tracking-[0.15em] uppercase text-white/15 group-hover:text-accent transition-colors duration-500">
                                Explore
                              </span>
                              <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
                                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-accent" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
              Have Questions?
            </span>
            <div className="h-[2px] w-10 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            Let&apos;s Find the{" "}
            <span className="italic font-light text-accent">Right Answer.</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Have questions about any of these resources? As your mortgage professional,
            I can help you understand how each applies to your unique situation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
            >
              CONTACT ME
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
