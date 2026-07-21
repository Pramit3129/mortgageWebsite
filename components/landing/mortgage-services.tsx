"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

interface Service {
  title: string
  description: string
  icon: LucideIcon
  href: string
  image: string
}

const services: Service[] = [
  {
    title: "First-Time Home Buyers",
    description:
      "Navigating your first home purchase is a milestone. We guide you from pre-approval to closing with clarity and confidence.",
    icon: Home,
    href: "#contact",
    image: "/FirstTimeHomeBuyer.png",
  },
  {
    title: "Mortgage Refinancing",
    description:
      "Your financial situation evolves. We restructure your mortgage to secure a better rate, access equity, or consolidate debt.",
    icon: RefreshCw,
    href: "#contact",
    image: "/MortgageRefinincing.png",
  },
  {
    title: "Mortgage Renewal",
    description:
      "When your term ends, don't settle. We negotiate across multiple lenders to secure the strongest renewal terms for you.",
    icon: CalendarClock,
    href: "#contact",
    image: "/MortgageRenewable.png",
  },
  {
    title: "Debt Consolidation",
    description:
      "Roll high-interest debts into your mortgage for one manageable payment. We structure it to save you thousands over time.",
    icon: Combine,
    href: "#contact",
    image: "/DeptConsolidation.png",
  },
  {
    title: "Commercial Mortgages",
    description:
      "Investment properties, multi-family units, and commercial real estate. We structure deals that align with your portfolio.",
    icon: Building2,
    href: "#contact",
    image: "/CommercialMortgages.png",
  },
  {
    title: "Second Mortgages",
    description:
      "Access your home's equity without breaking your first mortgage — ideal for renovations, investments, or major expenses.",
    icon: Layers,
    href: "#contact",
    image: "/SecondMortgage.png",
  },
]

import {
  Home,
  RefreshCw,
  CalendarClock,
  Combine,
  Building2,
  Layers,
} from "lucide-react"

export function MortgageServices() {
  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
                06 — Services
              </span>
              <div className="h-[1px] w-12 bg-white/10" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.1] tracking-tight">
              Comprehensive mortgage
              <br />
              guidance, <span className="italic font-light text-accent">every step.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <p className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-lg">
              From first-time buyers to seasoned investors, we structure financing
              solutions that fit your life — not the other way around.
            </p>
          </div>
        </div>

        {/* Gold rule */}
        <div className="h-[1px] w-full bg-gradient-to-r from-accent/40 via-white/10 to-transparent mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col border border-white/[0.06] bg-card overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Gold accent line */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full z-10" />

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-8">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-[13px] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/20 group-hover:text-accent transition-colors duration-500">
                    Learn More
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-accent transition-colors duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-center gap-3">
          <div className="h-[1px] w-8 bg-white/10" />
          <p className="text-[11px] text-muted-foreground/60 font-light tracking-wide">
            All services available across Greater Vancouver &amp; Fraser Valley
          </p>
        </div>
      </div>
    </section>
  )
}
