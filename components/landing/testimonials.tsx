"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Star, Quote, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const INITIAL_COUNT = 3

interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "First-Time Home Buyer",
    rating: 5,
    text: "Vipin made what felt like an overwhelming process completely manageable. He walked us through every step with patience and clarity, and we never felt rushed or pressured. We found the perfect home and the perfect rate.",
  },
  {
    id: 2,
    name: "James Patel",
    role: "Self-Employed Professional",
    rating: 5,
    text: "As a self-employed individual, I thought securing a mortgage would be a nightmare. Vipin understood the nuances of my financial situation and found options I didn't know existed.",
  },
  {
    id: 3,
    name: "David & Priya Sharma",
    role: "Refinancing Clients",
    rating: 5,
    text: "We saved over $340 a month after refinancing with Vipin. His attention to detail and deep knowledge of the market made all the difference.",
  },
  {
    id: 4,
    name: "Michael Torres",
    role: "Real Estate Investor",
    rating: 5,
    text: "I've worked with several brokers over the years, and Vipin stands apart. His strategic approach to structuring my investment portfolio financing saved me tens of thousands over the life of my mortgages.",
  },
  {
    id: 5,
    name: "Emily Chen",
    role: "Homeowner — Mortgage Renewal",
    rating: 5,
    text: "When my renewal came up, Vipin negotiated terms that were significantly better than what my bank offered. Professional, responsive, and genuinely invested in getting me the best outcome.",
  },
  {
    id: 6,
    name: "Robert & Lisa Nguyen",
    role: "Commercial Property Purchase",
    rating: 5,
    text: "Vipin's expertise in commercial mortgages is unmatched. He navigated a complex deal for our new office space with precision and kept us informed every step of the way.",
  },
  {
    id: 7,
    name: "Amanda Brooks",
    role: "Debt Consolidation",
    rating: 5,
    text: "I was drowning in high-interest debt. Vipin restructured everything into one manageable payment and literally changed my financial trajectory. I can't recommend him enough.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-3.5 h-3.5 transition-all duration-300",
            i < rating
              ? "text-accent fill-accent drop-shadow-[0_0_4px_rgba(212,175,55,0.3)]"
              : "text-white/15"
          )}
          style={{ transitionDelay: `${i * 40}ms` }}
        />
      ))}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  isNew,
}: {
  testimonial: Testimonial
  isNew: boolean
}) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full border border-white/[0.06] bg-card p-7 sm:p-8 lg:p-9 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-0.5",
        isNew && "testimonial-reveal"
      )}
    >
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />

      <div className="flex-1 flex flex-col">
        {/* Quote */}
        <div className="relative mb-6 sm:mb-7">
          <Quote className="absolute -top-1.5 -left-1 w-7 h-7 text-accent/[0.08] fill-accent/[0.08] transition-all duration-500 group-hover:text-accent/20 group-hover:fill-accent/20 group-hover:scale-110" />
          <p className="font-serif text-[15px] lg:text-base text-foreground/85 leading-relaxed relative z-10">
            &ldquo;{testimonial.text}&rdquo;
          </p>
        </div>

        <div className="flex-1" />

        {/* Author + Rating */}
        <div className="flex items-end justify-between gap-4 pt-5 border-t border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center border border-white/[0.06] transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/[0.06]">
              <span className="text-[10px] font-bold tracking-wider text-accent/70 transition-colors duration-300 group-hover:text-accent">
                {initials}
              </span>
            </div>
            <div>
              <span className="font-serif text-sm font-semibold text-foreground block leading-snug">
                {testimonial.name}
              </span>
              <span className="text-[11px] tracking-wide text-muted-foreground">
                {testimonial.role}
              </span>
            </div>
          </div>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [expanded, setExpanded] = useState(false)
  const [animating, setAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const measuredRef = useRef<HTMLDivElement>(null)
  const [clipHeight, setClipHeight] = useState<number | "auto">("auto")

  const visibleTestimonials = expanded
    ? testimonials
    : testimonials.slice(0, INITIAL_COUNT)

  /* Measure collapsed and full heights for the clip-path animation */
  useEffect(() => {
    if (!measuredRef.current) return
    const rows = measuredRef.current.querySelectorAll<HTMLElement>("[data-measure]")
    if (rows.length === 0) return

    const tops = Array.from(rows).map((el) => {
      const rect = el.getBoundingClientRect()
      return rect.top
    })
    const bottoms = Array.from(rows).map((el) => {
      const rect = el.getBoundingClientRect()
      return rect.bottom
    })

    const collapsedH = Math.max(...bottoms.slice(0, INITIAL_COUNT)) - Math.min(...tops.slice(0, INITIAL_COUNT))
    const fullH = Math.max(...bottoms) - Math.min(...tops)

    if (!expanded) {
      setClipHeight(collapsedH + 40)
    } else {
      setClipHeight(collapsedH + 40)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setClipHeight(fullH + 40)
          const t = setTimeout(() => setClipHeight("auto"), 550)
          return () => clearTimeout(t)
        })
      })
    }
  }, [expanded])

  const handleToggle = useCallback(() => {
    if (animating) return
    if (!expanded) {
      setAnimating(true)
      setExpanded(true)
      setTimeout(() => setAnimating(false), 600)
    } else {
      setAnimating(true)
      /* Measure before collapsing so we can animate from full height */
      if (measuredRef.current) {
        const rows = measuredRef.current.querySelectorAll<HTMLElement>("[data-measure]")
        const tops = Array.from(rows).map((el) => el.getBoundingClientRect().top)
        const bottoms = Array.from(rows).map((el) => el.getBoundingClientRect().bottom)
        const fullH = Math.max(...bottoms) - Math.min(...tops)
        const collapsedH = Math.max(...bottoms.slice(0, INITIAL_COUNT)) - Math.min(...tops.slice(0, INITIAL_COUNT))
        setClipHeight(fullH + 40)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setClipHeight(collapsedH + 40)
          })
        })
      }
      setTimeout(() => {
        setExpanded(false)
        setAnimating(false)
      }, 500)
    }
  }, [expanded, animating])

  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/30 via-white/5 to-transparent" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
            Client Stories
          </span>
          <div className="h-[1px] w-12 bg-white/10" />
        </div>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.1] tracking-tight">
              Trusted by families
              <br />
              across <span className="italic font-light text-accent">British Columbia.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <p className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-lg">
              Every client relationship starts with trust and ends with confidence.
              Here&rsquo;s what they have to say.
            </p>
          </div>
        </div>

        {/* Gold rule */}
        <div className="h-[1px] w-full bg-gradient-to-r from-accent/40 via-white/10 to-transparent mb-12" />

        {/* Hidden measurement grid — mirrors the visible layout */}
        <div
          ref={measuredRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[1fr] pointer-events-none absolute invisible"
          aria-hidden
        >
          {testimonials.map((t) => (
            <div key={t.id} data-measure>
              <TestimonialCard testimonial={t} isNew={false} />
            </div>
          ))}
        </div>

        {/* Animated container */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[1fr] overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            maxHeight: clipHeight === "auto" ? "none" : `${clipHeight}px`,
          }}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={
                index < INITIAL_COUNT
                  ? `animate-in fade-in slide-in-from-bottom-3 duration-600 fill-mode-both`
                  : "testimonial-reveal"
              }
              style={
                index < INITIAL_COUNT
                  ? { animationDelay: `${150 + index * 120}ms` }
                  : { animationDelay: `${(index - INITIAL_COUNT) * 100}ms` }
              }
            >
              <TestimonialCard
                testimonial={testimonial}
                isNew={expanded && index >= INITIAL_COUNT}
              />
            </div>
          ))}
        </div>

        {/* Show more / less */}
        {testimonials.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleToggle}
              disabled={animating}
              className="group/btn relative flex items-center gap-2.5 px-7 py-3 border border-white/[0.08] bg-white/[0.02] text-muted-foreground text-[13px] font-medium tracking-wide transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent/30 hover:text-foreground hover:bg-accent/[0.04] hover:shadow-[0_0_24px_-6px_rgba(212,175,55,0.15)] active:scale-[0.98]"
            >
              {/* Gold shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.04] to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />

              <span className="relative z-10">
                {expanded ? "Show Less" : `Show More Reviews`}
              </span>
              <ChevronDown
                className={cn(
                  "relative z-10 w-4 h-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  expanded && "rotate-180"
                )}
              />
            </button>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-10 flex items-center gap-3">
          <div className="h-[1px] w-8 bg-white/10" />
          <p className="text-[11px] text-muted-foreground/60 font-light tracking-wide">
            Verified reviews from clients across Greater Vancouver &amp; Fraser Valley
          </p>
        </div>
      </div>
    </section>
  )
}
