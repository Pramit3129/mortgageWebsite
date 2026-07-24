"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const navbarHeight = window.innerWidth >= 1024 ? 96 : 80;
    const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 w-full h-20 lg:h-24 transition-all duration-500 ease-out"
      style={{
        backgroundColor: scrolled ? "rgba(12,12,12,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.04)" : "none",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Left Column (Logo + Phone) */}
        <div className="flex-1 flex items-center gap-6">
          <a href="/" onClick={scrollToTop} className="flex items-center cursor-pointer">
            <span className="font-serif text-base lg:text-lg text-accent tracking-[0.12em] font-bold whitespace-nowrap">
              VIPIN GARG
            </span>
          </a>
          <a
            href="tel:+17787922220"
            className="group hidden items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-accent/40 hover:text-white sm:flex"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent/25">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <span className="tracking-wide whitespace-nowrap">+1 778-792-2220</span>
          </a>
        </div>

        {/* Center Column (Nav Links) */}
        <nav className="hidden lg:flex flex-none items-center gap-7 xl:gap-10 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
          <Link href="/" className="text-xs font-semibold tracking-[0.12em] text-accent uppercase whitespace-nowrap transition-colors">HOME</Link>
          <a href="#about" onClick={scrollTo("about")} className="text-xs font-semibold tracking-[0.12em] text-white hover:text-accent uppercase whitespace-nowrap transition-colors cursor-pointer">ABOUT ME</a>
          <Link href="/mortgages" className="text-xs font-semibold tracking-[0.12em] text-white hover:text-accent uppercase whitespace-nowrap transition-colors">MORTGAGES</Link>
          <Link href="#calculators" className="text-xs font-semibold tracking-[0.12em] text-white hover:text-accent uppercase whitespace-nowrap transition-colors">CALCULATORS</Link>
          <Link href="/resources" className="text-xs font-semibold tracking-[0.12em] text-white hover:text-accent uppercase whitespace-nowrap transition-colors">RESOURCES</Link>
          <Link href="/contact" className="text-xs font-semibold tracking-[0.12em] text-white hover:text-accent uppercase whitespace-nowrap transition-colors">CONTACT</Link>
        </nav>

        {/* Mobile Trigger Column */}
        <div className="flex-1 flex lg:hidden justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-white/10 text-white p-8">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="text-lg font-medium text-accent">HOME</Link>
                <a href="#about" onClick={scrollTo("about")} className="text-lg font-medium text-white/80 cursor-pointer">ABOUT ME</a>
                <Link href="/mortgages" className="text-lg font-medium text-white/80">MORTGAGES</Link>
                <Link href="#calculators" className="text-lg font-medium text-white/80">CALCULATORS</Link>
                <Link href="/resources" className="text-lg font-medium text-white/80">RESOURCES</Link>
                <Link href="/contact" className="text-lg font-medium text-white/80">CONTACT</Link>
                <hr className="border-white/10 my-4" />
                <Button className="bg-accent text-accent-foreground w-full py-6 rounded-full font-semibold">
                  BOOK CONSULTATION
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
