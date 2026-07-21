import Image from "next/image";

export function AboutMe() {
  return (
    <section id="about" className="w-full bg-background pt-0 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Section header in top border */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/30 via-white/5 to-transparent" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
            About Me
          </span>
          <div className="h-[1px] w-12 bg-white/10" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left: Photo */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-full min-h-[480px] lg:min-h-0">
              {/* Gold left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent/50" />
              <div className="relative w-full h-full overflow-hidden group">
                <Image
                  src="/VipinImage.png"
                  alt="Vipin Garg — Mortgage Broker"
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-accent mb-3 block">
                Meet
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-extrabold text-foreground leading-[1.1] tracking-tight mb-1">
                Vipin Garg
              </h2>
              <p className="text-sm text-muted-foreground/50 tracking-wide mb-6">
                Dominion Lending Centres
              </p>

              {/* Tagline */}
              <p className="text-lg lg:text-xl font-serif text-foreground/80 leading-relaxed max-w-xl mb-8 border-l-2 border-accent/40 pl-5">
                Helping you feel comfortable and confident with every mortgage decision.
              </p>

              <p className="text-muted-foreground text-[14px] font-light leading-[1.8] mb-4">
                Based in the Lower Mainland, British Columbia, Vipin Garg is a
                dedicated mortgage broker within the Dominion Lending Centres
                team. He brings his personal expertise alongside a team legacy
                of over 30 years of combined mortgage experience. With a solid
                foundation of six years in the finance industry prior to his
                work in mortgages, Vipin offers a comprehensive perspective on
                navigating financial choices.
              </p>
              <p className="text-muted-foreground text-[14px] font-light leading-[1.8]">
                Vipin is truly passionate about education — especially when it
                comes to understanding credit. His mission is to empower you
                through every step of the buying process, ensuring you have the
                clarity needed to feel fully comfortable and confident. By
                turning complex terms into plain-language guidance, he makes the
                path to your new home a positive and secure experience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/[0.06]">
              <div>
                <span className="font-serif text-2xl font-bold text-foreground block mb-1">6<span className="text-accent">+</span></span>
                <span className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  Years in Finance
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-foreground block mb-1">30<span className="text-accent">+</span></span>
                <span className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  Team Experience
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-foreground block mb-1">1000<span className="text-accent">+</span></span>
                <span className="text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  Clients Funded
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
