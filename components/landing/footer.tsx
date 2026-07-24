import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import type { SVGProps } from "react";

const mortgageLinks = [
  { label: "Benefits of Using a Mortgage Professional", href: "/mortgages/benefits" },
  { label: "How Much Does it Cost", href: "/mortgages/cost" },
  { label: "Mortgage Renewal", href: "/mortgages/renewal" },
  { label: "Home Equity", href: "/mortgages/home-equity" },
  { label: "Mortgage Life Insurance", href: "/mortgages/life-insurance" },
  { label: "Apply Now", href: "/mortgages/apply" },
  { label: "Current Rates", href: "/mortgages#rates" },
];

const purchaseLinks = [
  { label: "Home Purchase Overview", href: "/services/first-time-home-buyers" },
  { label: "Mortgage Pre-Approval", href: "/mortgages#pre-approval" },
  { label: "Fixed Rate vs. Variable Rate", href: "/mortgages#fixed-vs-variable" },
  { label: "Understanding your Credit Report", href: "/mortgages#credit-report" },
  { label: "Determine the Right Term", href: "/mortgages#term" },
  { label: "Pay Off Your Mortgage Faster", href: "/mortgages#faster-payoff" },
  { label: "Self-Employed Solutions", href: "/mortgages#self-employed" },
  { label: "Home Purchase Calculators", href: "/mortgages#calculators" },
];

const refinanceLinks = [
  { label: "Refinance", href: "/services/refinances" },
  { label: "CHIP", href: "/mortgages/home-equity" },
  { label: "Refinance Calculators", href: "/mortgages#refinance-calc" },
];

const companyLinks = [
  { label: "Company Overview", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Commercial & Leasing", href: "/services/commercial-loan" },
  { label: "Resources", href: "/resources" },
  { label: "Lenders & Associations", href: "/mortgages#lenders" },
  { label: "Our House Magazine", href: "/resources/our-house-magazine" },
];

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">

        {/* Top: Brand + Description */}
        <div className="mb-16">
          <Link href="/" className="inline-block">
            <span className="font-serif text-xl tracking-[0.15em] font-bold text-accent">
              VIPIN GARG
            </span>
          </Link>
          <p className="mt-1.5 text-xs tracking-[0.2em] uppercase text-white/30">
            Mortgage Professional
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/40">
            Trusted mortgage solutions tailored to your unique financial goals. Building wealth through homeownership, one relationship at a time.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-xs font-semibold tracking-wider uppercase text-white/60">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:7787922220" className="flex items-center gap-2.5 text-sm text-white/40 transition-colors hover:text-white">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-white/25" />
                  778-792-2220
                </a>
              </li>
              <li>
                <a href="mailto:contact@vipingarg.com" className="flex items-center gap-2.5 text-sm text-white/40 transition-colors hover:text-white">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-white/25" />
                  contact@vipingarg.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/40">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-white/25" />
                <span className="leading-relaxed">
                  Suite 105, 20171 &ndash; 92A Ave<br />
                  Langley, BC V1M 3A5<br />
                  Canada
                </span>
              </li>
            </ul>
          </div>

          {/* Mortgages */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider uppercase text-white/60">
              Mortgages
            </h3>
            <ul className="space-y-2">
              {mortgageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Home Purchase */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider uppercase text-white/60">
              Home Purchase
            </h3>
            <ul className="space-y-2">
              {purchaseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Refinance */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider uppercase text-white/60">
              Refinance
            </h3>
            <ul className="space-y-2">
              {refinanceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider uppercase text-white/60">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/[0.06]" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/25">
            <span>&copy; {new Date().getFullYear()} Dominion Lending Centres</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <Link href="#" className="transition-colors hover:text-white/50">
              Terms of Use
            </Link>
            <span className="text-white/10">|</span>
            <Link href="#" className="transition-colors hover:text-white/50">
              Privacy Policy
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white/20 transition-colors hover:text-white/60"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
