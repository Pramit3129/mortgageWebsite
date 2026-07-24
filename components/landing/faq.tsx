"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { ChevronDown, Play, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What's the difference between a fixed and variable mortgage rate?",
    answer:
      "A fixed rate stays the same for the entire term of your mortgage, giving you predictable payments. A variable rate fluctuates with the prime rate — it can go lower or higher over time. The right choice depends on your risk tolerance, financial goals, and how long you plan to stay in the home.",
  },
  {
    id: 2,
    question: "How much do I need for a down payment in Canada?",
    answer:
      "For homes under $500,000, the minimum down payment is 5%. For homes between $500K and $1.5M, it's 5% on the first $500K and 10% on the portion above that. Homes over $1.5M require 20%. If your down payment is less than 20%, you'll need mortgage default insurance (CMHC).",
  },
  {
    id: 3,
    question: "Should I get pre-approved before house hunting?",
    answer:
      "Absolutely. A pre-approval tells you exactly how much you can afford, locks in a rate for 60–120 days, and signals to sellers that you're a serious buyer. It also helps you move fast when the right property comes up in a competitive market.",
  },
  {
    id: 4,
    question: "When should I renew my mortgage?",
    answer:
      "Start reviewing your options 3–6 months before your current term expires. Waiting until the last minute often means accepting whatever your lender offers. An early review gives you time to compare rates, negotiate, and switch lenders if a better deal is available — potentially saving you thousands.",
  },
  {
    id: 5,
    question: "Can I refinance to pay off debt or renovate my home?",
    answer:
      "Yes. Refinancing allows you to access your home's equity — the difference between what it's worth and what you owe — for debt consolidation, renovations, investments, or other large expenses. With rates often lower than credit cards or personal loans, it can be a smart financial move.",
  },
  {
    id: 6,
    question: "What documents do I need to apply for a mortgage?",
    answer:
      "Typically you'll need proof of income (T4s, pay stubs, or Notice of Assessment for self-employed), bank statements, identification, and details about your debts and assets. The exact requirements vary by lender and employment type — I'll guide you through everything so nothing gets missed.",
  },
  {
    id: 7,
    question: "How does working with a mortgage broker cost me nothing?",
    answer:
      "Mortgage brokers are paid by the lender, not the borrower. You get access to dozens of lenders and competitive rates at no cost to you. It's one of the few situations in finance where the expertise is completely free — and the savings can be significant.",
  },
]

const INITIAL_VIDEO_COUNT = 2

interface VideoItem {
  id: number
  title: string
  description: string
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    title: "Mortgage Basics Explained",
    description:
      "A quick walkthrough of rates, terms, and what to expect — perfect if you're just getting started.",
  },
  {
    id: 2,
    title: "First-Time Buyer Guide",
    description:
      "Everything you need to know before your first home purchase — from pre-approval to closing day.",
  },
  {
    id: 3,
    title: "Fixed vs. Variable: Which Is Right for You?",
    description:
      "We break down the pros and cons of each rate type so you can decide with confidence.",
  },
  {
    id: 4,
    title: "How to Refinance Your Home",
    description:
      "A step-by-step look at the refinancing process, from equity assessment to closing.",
  },
]

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [])

  return (
    <div
      className={cn(
        "group relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isOpen ? "z-10" : "z-0"
      )}
      style={{ "--i": index } as React.CSSProperties}
    >
      {/* Ambient glow behind open item */}
      <div
        className={cn(
          "absolute -inset-1 bg-accent/[0.03] blur-xl transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        className={cn(
          "relative border bg-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen
            ? "border-accent/20 shadow-[0_4px_32px_-8px_rgba(212,175,55,0.08)]"
            : "border-white/[0.06] hover:border-white/[0.10]"
        )}
      >
        {/* Gold top accent — full width when open, wipe on hover */}
        <div
          className={cn(
            "absolute top-0 left-0 h-[2px] bg-accent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isOpen ? "w-full" : "w-0 group-hover:w-full"
          )}
        />

        {/* Left accent bar — visible when open */}
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[2px] bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        />

        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 p-6 sm:p-7 text-left cursor-pointer"
          aria-expanded={isOpen}
        >
          <span
            className={cn(
              "font-serif text-[15px] sm:text-base font-semibold leading-snug transition-colors duration-300",
              isOpen ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"
            )}
          >
            {item.question}
          </span>
          <div
            className={cn(
              "shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isOpen
                ? "border-accent/30 bg-accent/[0.08] rotate-0"
                : "border-white/[0.06] bg-white/[0.02] group-hover:border-white/[0.12] group-hover:bg-white/[0.04]"
            )}
          >
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen
                  ? "text-accent -rotate-180"
                  : "text-muted-foreground group-hover:text-foreground/60"
              )}
            />
          </div>
        </button>

        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            maxHeight: isOpen ? `${contentHeight}px` : "0px",
          }}
        >
          <div
            ref={contentRef}
            className={cn(
              "px-6 sm:px-7 pb-6 sm:pb-7 transition-opacity duration-300 delay-0",
              isOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="h-[1px] w-full bg-gradient-to-r from-accent/20 via-white/[0.06] to-transparent mb-5" />
            <p className="text-muted-foreground text-[13px] sm:text-sm font-light leading-[1.8] max-w-[55ch]">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function VideoCard({
  title,
  description,
  delay,
}: {
  title: string
  description: string
  delay: string
}) {
  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-3 duration-600 fill-mode-both"
      style={{ animationDelay: delay }}
    >
      <div className="group relative w-full aspect-video border border-white/[0.06] bg-card overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/[0.12] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]">
        {/* Gold top accent */}
        <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full z-10" />

        {/* Ambient radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Play button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-accent/30 group-hover:bg-accent/[0.08] group-hover:scale-105 group-hover:shadow-[0_0_40px_-8px_rgba(212,175,55,0.15)]">
            <Play className="w-4.5 h-4.5 text-muted-foreground/50 ml-0.5 transition-all duration-500 group-hover:text-accent" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/30 transition-colors duration-500 group-hover:text-muted-foreground/50">
            Coming Soon
          </span>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-serif text-[13px] font-semibold text-foreground/90 group-hover:text-foreground transition-colors duration-300 mb-0.5">
          {title}
        </h3>
        <p className="text-muted-foreground/50 text-[11px] font-light leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  )
}

export function Faq() {
  const [openId, setOpenId] = useState<number | null>(null)
  const [videoPage, setVideoPage] = useState(0)

  const handleToggle = useCallback((id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }, [])

  const totalPages = Math.ceil(videoItems.length / INITIAL_VIDEO_COUNT)
  const visibleVideos = videoItems.slice(
    videoPage * INITIAL_VIDEO_COUNT,
    videoPage * INITIAL_VIDEO_COUNT + INITIAL_VIDEO_COUNT
  )

  return (
    <section className="w-full bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Heading — no repeated kicker label, direct typographic entry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-10 lg:mb-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground leading-[1.1] tracking-tight">
              Questions worth
              <br />
              <span className="italic font-light text-accent">asking early.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <p className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-lg">
              Mortgage decisions are big ones. Here are the most common things
              people ask before we get started.
            </p>
          </div>
        </div>

        {/* Gold rule */}
        <div className="h-[1px] w-full bg-gradient-to-r from-accent/40 via-white/10 to-transparent mb-10 lg:mb-12" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-2.5">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="faq-item-enter"
                style={{ animationDelay: `${150 + index * 60}ms` } as React.CSSProperties}
              >
                <FaqAccordionItem
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Video sidebar */}
          <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-9">
              {visibleVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  title={video.title}
                  description={video.description}
                  delay="0ms"
                />
              ))}
            </div>

            {/* Pagination — arrows + dots */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.06]">
                <button
                  onClick={() => setVideoPage((p) => Math.max(0, p - 1))}
                  disabled={videoPage === 0}
                  aria-label="Previous videos"
                  className={cn(
                    "group/nav shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer",
                    videoPage === 0
                      ? "border-white/[0.04] bg-transparent cursor-default"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-accent/25 hover:bg-accent/[0.04]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 rotate-90 transition-colors duration-300",
                      videoPage === 0 ? "text-white/15" : "text-muted-foreground group-hover/nav:text-accent"
                    )}
                  />
                </button>

                <div className="flex items-center gap-3">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setVideoPage(i)}
                      aria-label={`Go to page ${i + 1}`}
                      className={cn(
                        "transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer",
                        i === videoPage
                          ? "w-6 h-1.5 bg-accent rounded-full"
                          : "w-1.5 h-1.5 bg-white/15 rounded-full hover:bg-white/30"
                      )}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setVideoPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={videoPage === totalPages - 1}
                  aria-label="Next videos"
                  className={cn(
                    "group/nav shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer",
                    videoPage === totalPages - 1
                      ? "border-white/[0.04] bg-transparent cursor-default"
                      : "border-white/[0.08] bg-white/[0.02] hover:border-accent/25 hover:bg-accent/[0.04]"
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 -rotate-90 transition-colors duration-300",
                      videoPage === totalPages - 1
                        ? "text-white/15"
                        : "text-muted-foreground group-hover/nav:text-accent"
                    )}
                  />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA — elevated from generic divider */}
        <div
          className="mt-12 sm:mt-14 faq-item-enter"
          style={{ animationDelay: "550ms" } as React.CSSProperties}
        >
          <div className="relative border border-white/[0.06] bg-card p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 overflow-hidden">
            {/* Ambient corner glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1.5">
                Still have questions?
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                Every mortgage situation is unique. Let&rsquo;s talk through yours.
              </p>
            </div>
            <a
              href="/contact"
              className="group/cta relative inline-flex items-center gap-2.5 px-7 py-3.5 border border-accent/30 bg-accent/[0.06] text-accent text-[13px] font-bold tracking-wide uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-[0_0_32px_-4px_rgba(212,175,55,0.25)] active:scale-[0.98] shrink-0"
            >
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
