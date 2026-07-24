import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  CheckCircle2,
  ExternalLink,
} from "lucide-react"
import { notFound } from "next/navigation"
import { Footer } from "@/components/landing/footer"
import { resources, getResourceBySlug } from "@/lib/resources-data"

export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle this async since params is now a Promise in Next.js 15+
  // But for static generation, we can use a workaround
  return {
    title: "Resource Details — Vipin Garg Mortgage",
  }
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const resource = getResourceBySlug(slug)

  if (!resource) {
    notFound()
  }

  const Icon = resource.icon

  return (
    <div className="min-h-svh w-full bg-background text-foreground">
      {/* Sticky Nav */}
      <header className="fixed top-0 inset-x-0 z-50 w-full h-20 bg-background/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 h-full flex items-center justify-between">
          <Link href="/resources" className="flex items-center gap-3 group">
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

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/ResourcePageBg.png"
          alt={resource.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-12 pb-12 lg:pb-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-light mb-6">
              <Link href="/resources" className="hover:text-accent transition-colors">
                Resources
              </Link>
              <span>/</span>
              <span className="text-accent">{resource.shortTitle}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center border border-accent/20 bg-accent/5">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div className="h-[2px] w-10 bg-accent" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-accent">
                {resource.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-foreground leading-[1.08] tracking-tight max-w-3xl">
              {resource.title.split(" ").slice(0, 2).join(" ")}
              <br />
              <span className="italic font-light text-accent">
                {resource.title.split(" ").slice(2).join(" ") || "Resource"}
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg font-light max-w-2xl leading-relaxed">
              {resource.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-accent" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                  Overview
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-8">
                About <span className="italic font-light text-accent">{resource.shortTitle}.</span>
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed mb-10">
                {resource.content.overview}
              </p>

              {/* Key Points */}
              <div className="space-y-6">
                {resource.content.keyPoints.map((point) => (
                  <div
                    key={point.label}
                    className="group relative border border-white/[0.06] bg-card p-8 transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
                  >
                    {/* Gold top accent */}
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-700 group-hover:w-full" />

                    <div className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                          {point.label}
                        </h3>
                        <p className="text-muted-foreground text-[13px] font-light leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Website Card */}
              <div className="sticky top-28 border border-white/[0.06] bg-card p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-8 bg-accent" />
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent">
                    Official Website
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {resource.description}
                </p>
                <a
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 transition-all duration-300 text-sm group w-full justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  VISIT WEBSITE
                </a>
              </div>

              {/* Relevance Card */}
              <div className="border border-white/[0.06] bg-card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-accent" />
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-accent">
                    Why This Matters
                  </span>
                </div>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {resource.content.relevance}
                </p>
              </div>

              {/* Quick Contact */}
              <div className="mt-6 border border-accent/20 bg-accent/5 p-8">
                <h4 className="font-serif text-base font-semibold text-foreground mb-3">
                  Need Guidance?
                </h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                  As your mortgage professional, I can help you understand and utilize these resources.
                </p>
                <a
                  href="tel:+17787922220"
                  className="inline-flex items-center gap-2 border border-white/20 text-foreground hover:bg-white/5 font-semibold px-6 py-3 transition-all duration-300 text-sm w-full justify-center"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  CALL NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      {resource.content.additionalInfo && (
        <section className="w-full py-16 sm:py-24 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-10 bg-accent" />
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                    Additional Information
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-8">
                  What You Should <span className="italic font-light text-accent">Know.</span>
                </h2>
                <p className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed mb-8">
                  {resource.content.additionalInfo}
                </p>

                <div className="p-6 border border-white/[0.06] bg-card">
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    These resources are provided for informational purposes only. For personalized
                    advice tailored to your specific mortgage needs, please contact me directly.
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="lg:col-span-5">
                <div className="relative w-full aspect-[4/3] overflow-hidden border border-white/[0.06]">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent/50 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-24 h-24 text-accent/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
            Let&apos;s Discuss Your <span className="italic font-light text-accent">Mortgage Needs.</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re a first-time buyer or looking to refinance, I can help you navigate these
            resources and find the best solution for your situation.
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
