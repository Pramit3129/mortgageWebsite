import Image from "next/image";
import Link from "next/link";
import { Star, Shield, Users, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative w-full min-h-[80vh] md:min-h-[68vh] lg:min-h-[80vh] bg-background text-foreground overflow-hidden">

            {/* Image Panel — fixed right-side width, full section height, ends where the text ends */}
      <div className="group absolute inset-y-0 right-0 w-full lg:w-1/2">
        <Image
          alt="Vipin Garg Mortgage Consultation"
          className="object-cover object-right brightness-110"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          src="/VipinImage.png"
        />
        {/* Fade the image's left edge into the hero background (no straight border) */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
        {/* Subtle top anchor so the copy stays legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

            {/* Minimalist bottom caption */}
            <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 lg:bottom-8 lg:right-8 z-20 flex items-center gap-3">
                <span className="h-8 w-[2px] bg-accent"></span>
                <div className="flex flex-col">
                    <span className="font-serif text-base sm:text-lg text-white tracking-wide">Vipin Garg</span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/60">
                        Dominion Lending Centres
                    </span>
                </div>
            </div>

            {/* Content (Copy overlaid on the left) */}
            <div className="relative z-10 mx-auto flex max-w-7xl min-h-[90vh] md:min-h-[68vh] lg:min-h-[100vh] items-center px-5 pt-24 sm:px-6 lg:px-12 lg:pt-28">
                <div className="flex w-full flex-col lg:w-1/2">

                    {/* Kicker */}
                    <div className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                        <div className="h-[2px] w-10 bg-accent"></div>
                        <span className="text-accent text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase">
                            Greater Vancouver's Trusted Broker
                        </span>
                    </div>

                    {/* Editorial H1 */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-serif font-extrabold text-foreground leading-[1.08] tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
                        Helping Canadians <br />
                        Find the Right <br />
                        Mortgage. <span className="italic font-light text-accent whitespace-nowrap">With Confidence.</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
                        Work with a trusted mortgage professional to secure the best rates, terms, and guidance for your home financing journey.
                    </p>

                    {/* Trust Metrics Grid */}
                    <div className="grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-2xl py-5 px-6 mb-10 w-full max-w-md bg-white/[0.03] backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
                        <div className="flex flex-col items-center text-center px-2">
                            <div className="flex items-center gap-1 text-accent mb-1">
                                <Star className="w-4 h-4 fill-accent" />
                                <span className="font-bold text-xl text-foreground">5.0</span>
                            </div>
                            <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-medium">Google Reviews</span>
                        </div>
                        <div className="flex flex-col items-center text-center px-2">
                            <span className="font-bold text-xl text-foreground mb-1">15+</span>
                            <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-medium">Years Exp</span>
                        </div>
                        <div className="flex flex-col items-center text-center px-2">
                            <span className="font-bold text-xl text-foreground mb-1">1000+</span>
                            <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-medium">Funded</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 fill-mode-both">
                        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-7 rounded-full shadow-[0_0_35px_-5px_rgba(212,175,55,0.4)] transition-all duration-300 text-base group">
                            <a href="https://velocity.newton.ca/sso/public.php?sc=1neinhlzaiawy" target="_blank" rel="noopener noreferrer">
                                APPLY ONLINE
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" className="border-white/20 text-foreground hover:bg-white/5 font-semibold px-8 py-7 rounded-full transition-all duration-300 text-base">
                            <Link href="#calculators">
                                <Calculator className="w-5 h-5 mr-2 text-accent" />
                                MORTGAGE CALCULATOR
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
