import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone, ArrowRight } from "lucide-react"
import { Footer } from "@/components/landing/footer"

const reasons = [
  {
    num: "01",
    title: "A Safe, Tangible Asset",
    desc: "Real estate is a physical, secure investment — something you can live in, rent out, or pass down through generations. Unlike stocks or cryptocurrencies, it's not subject to sudden, unpredictable crashes.",
  },
  {
    num: "02",
    title: "Long-Term Financial Growth",
    desc: "Historically, real estate values have shown consistent appreciation, especially in growing markets like British Columbia. Your home not only provides shelter — it increases in value over time, building equity and wealth.",
  },
  {
    num: "03",
    title: "Stability During Economic Uncertainty",
    desc: "In times of inflation or economic uncertainty, real estate remains one of the safest investment options. Fixed-rate mortgages lock in your housing costs, protecting you from rising rents or market instability.",
  },
  {
    num: "04",
    title: "Rental Income Potential",
    desc: "If you own additional residential property, it can serve as a reliable source of passive income. Rental income can help cover mortgage payments or fund your children's education or retirement goals.",
  },
  {
    num: "05",
    title: "Generational Wealth",
    desc: "A home can be your family's legacy. By investing now, you're creating a foundation that your children and future generations can build upon — whether it's by inheriting the property or using its equity for future opportunities.",
  },
  {
    num: "06",
    title: "Tax Advantages",
    desc: "Homeownership often comes with tax benefits such as principal residence exemptions, capital gains deferral on primary homes, and deductions on rental properties — all of which can improve your family's financial health.",
  },
  {
    num: "07",
    title: "Emotional & Social Security",
    desc: "A family home provides more than financial returns. It's a space for memories, stability, and emotional well-being. Owning your own home brings peace of mind and a sense of pride and belonging.",
  },
]

export default function InvestmentPropertyPage() {
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

      {/* Split-Screen Hero */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[90vh] flex flex-col lg:flex-row">
        {/* Left: Text Content */}
        <div className="relative z-10 w-full lg:w-1/2 flex items-center px-5 sm:px-6 lg:px-12 py-24 lg:py-0">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-10 bg-accent" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-accent">
                Investment Property
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
              Why Investing in <br />
              Real Estate <br />
              <span className="italic font-light text-accent">Secures Your <br />Family&apos;s Future.</span>
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-md">
              Investing in residential real estate is one of the most powerful and reliable ways to build long-term wealth and security for your family.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto">
          <Image
            src="/InvestmentPropertyDetailPage1.png"
            alt="Investment Property"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background lg:to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:from-background/40" />
        </div>

        {/* Accent bar */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-accent/40 via-white/10 to-transparent" />
      </section>

      {/* Editorial Numbered List */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          {/* Section intro */}
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-accent" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                7 Reasons
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight">
              The Case for <span className="italic font-light text-accent">Property Investment.</span>
            </h2>
          </div>

          {/* Numbered items */}
          <div className="space-y-0">
            {reasons.map((reason, i) => (
              <div
                key={reason.num}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-10 lg:py-12 border-t border-white/[0.06] last:border-b"
              >
                {/* Large number */}
                <div className="lg:col-span-2 flex items-start">
                  <span className="font-serif text-5xl lg:text-6xl font-extrabold text-white/[0.04] group-hover:text-accent/20 transition-colors duration-500 leading-none select-none">
                    {reason.num}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground leading-snug lg:sticky lg:top-28">
                    {reason.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-7">
                  <p className="text-muted-foreground text-sm lg:text-base font-light leading-[1.9] max-w-2xl">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Image Break */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden">
        <Image
          src="/InvestmentPageDetailPage2.png"
          alt="Investment Property Consultation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-5">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-snug tracking-tight max-w-3xl">
              Unlike volatile markets or depreciating assets, property typically appreciates over time —{" "}
              <span className="italic font-light text-accent">offering both stability and financial growth.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left text */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-10 bg-accent" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent">
                  Start Building Wealth
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
                Your Family Deserves a{" "}
                <span className="italic font-light text-accent">Secure Foundation.</span>
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg font-light max-w-xl leading-relaxed mb-10">
                Whether it&apos;s your first investment property or you&apos;re expanding your portfolio, we structure financing that builds generational wealth.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 transition-all duration-300 text-sm group"
                >
                  EXPLORE YOUR OPTIONS
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

            {/* Right stats */}
            <div className="lg:col-span-5">
              <div className="border border-white/[0.06] bg-card p-8 sm:p-10">
                <div className="space-y-6">
                  <div className="pb-6 border-b border-white/[0.06]">
                    <span className="font-serif text-3xl font-bold text-foreground block mb-1">
                      7<span className="text-accent">+</span>
                    </span>
                    <span className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                      Key Benefits of Property Investment
                    </span>
                  </div>
                  <div className="pb-6 border-b border-white/[0.06]">
                    <span className="font-serif text-3xl font-bold text-foreground block mb-1">
                      100<span className="text-accent">%</span>
                    </span>
                    <span className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                      Tangible, Physical Asset
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-3xl font-bold text-foreground block mb-1">
                      ∞
                    </span>
                    <span className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                      Generational Wealth Potential
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
