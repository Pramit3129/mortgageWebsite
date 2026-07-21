import * as React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const rates = [
  { label: "Fixed 2 Year", value: "3.89%" },
  { label: "Fixed 3 Year", value: "3.99%" },
  { label: "Fixed 5 Year", value: "4.15%" },
  { label: "Variable", value: "4.35%" },
]

export function MortgageRatesBanner() {
  return (
    <section className="w-full bg-[#0a2558] py-8 text-white font-sans antialiased">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        {/* Left block */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-wider">
            Today&apos;s Mortgage Rates
          </p>
          <p className="mt-1 text-xs text-white/70">
            {new Date().toLocaleDateString("en-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Data blocks */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {rates.map((rate, i) => (
            <div
              key={rate.label}
              className={cn(
                "flex flex-col",
                i > 0 && "sm:border-l sm:border-white/20 sm:pl-6 sm:ml-6"
              )}
            >
              <span className="text-white/70 text-xs font-bold uppercase tracking-wider mb-1">
                {rate.label}
              </span>
              <span className="text-3xl font-light text-white">
                {rate.value}
              </span>
            </div>
          ))}
        </div>

        {/* Right block */}
        <div className="lg:justify-self-end">
          <Button
            asChild
            className="border border-white/50 text-white hover:bg-white/10 font-bold px-6 py-2 rounded-md transition-colors bg-transparent"
          >
            <a href="#">
              CHECK MY RATE
              <span aria-hidden>&rarr;</span>
            </a>
          </Button>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-[10px] leading-tight text-white/60">
          Rates are subject to change without notice. O.A.C. Contact for full
          details.
        </p>
      </div>
    </section>
  )
}
