"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Send,
  Building2,
  FileText,
  ChevronDown,
  MessageSquare,
  UserCircle,
} from "lucide-react"
import { Footer } from "@/components/landing/footer"

const companyNav = [
  { label: "Company Overview", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Commercial & Leasing", href: "/services/commercial-and-leasing" },
  { label: "Contact", href: "/contact", active: true },
  { label: "Our House Magazine", href: "/resources/our-house-magazine" },
]

const contactMethods = ["Email", "Phone", "Either"]
const contactTopics = [
  "Mortgage",
  "Refinance",
  "Renewal",
  "Home Equity",
  "Commercial Loan",
  "First Time Home Buyer",
  "Construction Loan",
  "Other",
]
const referralSources = [
  "Television Ad",
  "Online Search",
  "Friend or Family Referral",
  "Social Media",
  "Real Estate Agent",
  "Existing Client",
  "Other",
]
const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
]

function SelectField({
  label,
  required,
  children,
  ...props
}: {
  label: string
  required?: boolean
  children: React.ReactNode
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold tracking-[0.12em] uppercase text-foreground/70">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <div className="relative">
        <select
          required={required}
          className="w-full appearance-none bg-card border border-white/[0.08] px-4 py-3.5 text-sm text-foreground rounded-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors cursor-pointer"
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>
    </div>
  )
}

function InputField({
  label,
  required,
  type = "text",
  placeholder,
  ...props
}: {
  label: string
  required?: boolean
  type?: string
  placeholder?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold tracking-[0.12em] uppercase text-foreground/70">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-card border border-white/[0.08] px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 rounded-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
        {...props}
      />
    </div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    contactMethod: "Email",
    topic: "Mortgage",
    referralSource: "Television Ad",
    subject: "",
    message: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    province: "British Columbia",
    postalCode: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-svh w-full bg-background text-foreground">
      {/* ── Sticky Header ── */}
      <header className="fixed top-0 inset-x-0 z-50 w-full h-20 bg-background/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="font-serif text-base lg:text-lg text-accent tracking-[0.12em] font-bold">
              VIPIN GARG
            </span>
          </Link>
          <a
            href="tel:7787922220"
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:border-accent/40 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span className="tracking-wide whitespace-nowrap">778-792-2220</span>
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/ContactPage.webp"
          alt="Contact Vipin Garg — Mortgage Professional"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-12 pb-14 lg:pb-24">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-10 bg-accent" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-accent">
                Contact
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold text-foreground leading-[1.06] tracking-tight max-w-4xl">
              Get In{" "}
              <span className="italic font-light text-accent">Touch.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base lg:text-lg font-light max-w-xl leading-relaxed">
              Have questions or comments about the services we offer? Please use
              this form to send us an email. Our staff are always happy to
              provide you with the answers you need.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mobile Sidebar ── */}
      <div className="lg:hidden w-full border-b border-white/[0.06] bg-card/50">
        <details className="group">
          <summary className="flex items-center justify-between px-5 sm:px-6 py-4 cursor-pointer select-none list-none">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold tracking-wide text-accent">
                Contact Options
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200" />
          </summary>
          <nav className="px-5 sm:px-6 pb-4">
            <p className="px-4 py-3 text-xs font-bold tracking-[0.15em] uppercase text-accent">
              Company Overview
            </p>
            <div className="space-y-0.5">
              {companyNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${
                    item.active
                      ? "text-accent bg-accent/[0.06]"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.02]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </details>
      </div>

      {/* ── Main Content ── */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Sidebar — Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <p className="px-4 py-3 text-xs font-bold tracking-[0.15em] uppercase text-accent">
                  Company Overview
                </p>
                <nav className="space-y-0.5 mb-12">
                  {companyNav.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${
                        item.active
                          ? "text-accent font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Contact Details Box */}
                <div className="border border-white/[0.06] bg-card p-6 space-y-5">
                  <div>
                    <p className="font-serif text-lg font-semibold text-foreground">
                      Vipin Garg
                    </p>
                    <p className="text-xs tracking-[0.12em] uppercase text-accent mt-1">
                      Mortgage Professional
                    </p>
                  </div>
                  <div className="h-[1px] bg-white/[0.06]" />
                  <div className="space-y-4">
                    <a
                      href="mailto:contact@vipingarg.com"
                      className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Mail className="w-4 h-4 mt-0.5 text-accent/60 group-hover:text-accent transition-colors flex-shrink-0" />
                      <span>contact@vipingarg.com</span>
                    </a>
                    <a
                      href="tel:7787922220"
                      className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Phone className="w-4 h-4 mt-0.5 text-accent/60 group-hover:text-accent transition-colors flex-shrink-0" />
                      <div>
                        <span className="block">Tel: 778-792-2220</span>
                        <span className="block">Cell: 778-792-2220</span>
                      </div>
                    </a>
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5 text-accent/60 flex-shrink-0" />
                      <span className="leading-relaxed">
                        Suite 105, 20171 &ndash; 92A Ave
                        <br />
                        Langley, BC
                        <br />
                        V1M 3A5, Canada
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Column — Form */}
            <div className="lg:col-span-9">
              <form onSubmit={handleSubmit} noValidate>
                {/* Section: Contact Information */}
                <div className="mb-14">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center border border-accent/20 bg-accent/5">
                      <UserCircle className="w-4 h-4 text-accent" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-foreground leading-tight tracking-tight">
                      Contact Information
                    </h2>
                  </div>
                  <div className="h-[2px] w-16 bg-accent/40 mb-10 ml-[42px]" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField
                      label="First Name"
                      required
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Last Name"
                      required
                      name="lastName"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-6">
                    <InputField
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="778-000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <SelectField
                      label="How should we contact you?"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                    >
                      {contactMethods.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </SelectField>

                    <SelectField
                      label="Please contact me about"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                    >
                      {contactTopics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </SelectField>

                    <SelectField
                      label="How did you find us?"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                    >
                      {referralSources.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </SelectField>
                  </div>

                  <div className="mt-6">
                    <InputField
                      label="Subject"
                      required
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold tracking-[0.12em] uppercase text-foreground/70">
                        Your Message
                        <span className="ml-1 text-accent">*</span>
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={6}
                        placeholder="Tell us about your mortgage needs, questions, or how we can assist you..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-card border border-white/[0.08] px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 rounded-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none leading-relaxed"
                      />
                    </div>
                  </div>
                </div>

                {/* Section: About You (Optional) */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center border border-accent/20 bg-accent/5">
                      <Building2 className="w-4 h-4 text-accent" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-foreground leading-tight tracking-tight">
                      About You
                    </h2>
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground/50">
                      (Optional)
                    </span>
                  </div>
                  <div className="h-[2px] w-16 bg-accent/40 mb-10 ml-[42px]" />

                  <div className="space-y-6">
                    <InputField
                      label="Street Address"
                      name="streetAddress"
                      placeholder="123 Main Street"
                      value={formData.streetAddress}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Street Address Line 2"
                      name="streetAddress2"
                      placeholder="Apt, Suite, Unit, etc."
                      value={formData.streetAddress2}
                      onChange={handleChange}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <InputField
                        label="City"
                        name="city"
                        placeholder="Langley"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      <SelectField
                        label="Province"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                      >
                        {provinces.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </SelectField>
                      <InputField
                        label="Postal Code"
                        name="postalCode"
                        placeholder="V1M 3A5"
                        value={formData.postalCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 border border-white/[0.08] bg-card px-5 py-4">
                    <div className="w-6 h-6 border-2 border-white/20 rounded-sm flex items-center justify-center">
                      <span className="text-[10px] text-muted-foreground/40">?</span>
                    </div>
                    <div>
                      <p className="text-sm text-foreground">Are you human?</p>
                      <p className="text-[11px] text-muted-foreground/50">
                        reCAPTCHA &middot; Privacy &middot; Terms
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-4 transition-all duration-300 text-sm group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  SEND MESSAGE
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
