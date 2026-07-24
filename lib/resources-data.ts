import {
  Landmark,
  Users,
  Shield,
  FileCheck,
  Home,
  HardHat,
  type LucideIcon,
} from "lucide-react"

export interface Resource {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: LucideIcon
  category: string
  website: string
  content: {
    overview: string
    keyPoints: { label: string; desc: string }[]
    relevance: string
    additionalInfo?: string
  }
}

export const resources: Resource[] = [
  {
    slug: "bank-of-canada",
    title: "Bank of Canada",
    shortTitle: "Bank of Canada",
    description:
      "Stay informed about the Bank of Canada's key interest rate decisions and monetary policy that directly impact your mortgage rates.",
    icon: Landmark,
    category: "Bank of Canada",
    website: "https://www.bankofcanada.ca/",
    content: {
      overview:
        "The Bank of Canada sets the target for the overnight rate, which influences the interest rates that lenders offer to consumers. When the Bank raises or lowers its rate, mortgage rates often follow.",
      keyPoints: [
        {
          label: "Overnight Rate",
          desc: "The target interest rate set by the Bank of Canada that influences borrowing costs across the economy, including mortgage rates.",
        },
        {
          label: "Rate Announcements",
          desc: "The Bank announces its interest rate decisions eight times a year. These announcements are closely watched by the mortgage industry.",
        },
        {
          label: "Fixed vs Variable Impact",
          desc: "Variable mortgage rates are directly influenced by the overnight rate, while fixed rates are more influenced by bond yields.",
        },
        {
          label: "Inflation Target",
          desc: "The Bank of Canada aims to keep inflation at the 2% midpoint of a 1-3% target range, which guides its interest rate decisions.",
        },
      ],
      relevance:
        "Understanding Bank of Canada decisions helps you anticipate rate changes and make better decisions about locking in or choosing between fixed and variable rates.",
      additionalInfo:
        "The Bank of Canada's Monetary Policy Report provides detailed analysis of economic conditions and is an essential resource for understanding the direction of interest rates.",
    },
  },
  {
    slug: "mortgage-professionals-canada",
    title: "Mortgage Professionals Canada",
    shortTitle: "Mortgage Professionals Canada",
    description:
      "Canada's national association for licensed mortgage brokers and professionals, setting industry standards and advocating for consumers.",
    icon: Users,
    category: "Mortgage & Real Estate",
    website: "https://mortgageproscan.ca/",
    content: {
      overview:
        "Mortgage Professionals Canada (formerly CAAMP) is the national association representing mortgage brokers, lenders, insurers, and service providers across Canada. They advocate for a competitive and efficient mortgage market.",
      keyPoints: [
        {
          label: "Industry Standards",
          desc: "Sets professional standards and ethics for mortgage brokers across Canada, ensuring high-quality service for consumers.",
        },
        {
          label: "Consumer Protection",
          desc: "Advocates for policies that protect consumers while maintaining a competitive mortgage marketplace.",
        },
        {
          label: "Education & Certification",
          desc: "Provides ongoing education and professional development to ensure mortgage brokers stay current with industry changes.",
        },
        {
          label: "Market Research",
          desc: "Publishes valuable research and data on the Canadian mortgage market, helping consumers understand market trends.",
        },
      ],
      relevance:
        "As a member of Mortgage Professionals Canada, I am committed to upholding the highest standards of professionalism and ethics in the mortgage industry.",
      additionalInfo:
        "Mortgage Professionals Canada plays a vital role in shaping mortgage policy and ensuring that Canadians have access to competitive, transparent, and responsible mortgage products.",
    },
  },
  {
    slug: "cmhc",
    title: "Canada Mortgage & Housing Corporation",
    shortTitle: "CMHC",
    description:
      "Canada's national housing agency providing mortgage insurance, housing research, and programs to support Canadians.",
    icon: Shield,
    category: "Canada Mortgage & Housing Corporation",
    website: "https://www.cmhc-schl.gc.ca/",
    content: {
      overview:
        "CMHC is Canada's national housing agency. It provides mortgage default insurance, conducts housing research, and administers programs to help Canadians access affordable housing.",
      keyPoints: [
        {
          label: "Mortgage Default Insurance",
          desc: "CMHC provides mortgage default insurance (required when down payment is less than 20%), which protects lenders and enables more Canadians to purchase homes.",
        },
        {
          label: "First-Time Buyer Programs",
          desc: "CMHC administers several programs including the First Home Savings Account (FHSA) and the First-Time Home Buyer Incentive.",
        },
        {
          label: "Housing Data",
          desc: "CMHC provides comprehensive housing market data, including the Canadian Housing Market Outlook and rental market reports.",
        },
        {
          label: "Rapid Housing Initiative",
          desc: "Emergency and long-term funding to create more affordable housing for those in greatest need.",
        },
        {
          label: "Energy Efficiency Programs",
          desc: "CMHC offers programs and incentives for energy-efficient home purchases and renovations.",
        },
      ],
      relevance:
        "CMHC insurance is a critical part of the Canadian mortgage landscape. I can help you understand your options and navigate CMHC requirements.",
      additionalInfo:
        "CMHC's research publications are invaluable for understanding housing market trends and affordability across Canadian cities and regions.",
    },
  },
  {
    slug: "sagen",
    title: "Sagen",
    shortTitle: "Sagen",
    description:
      "One of Canada's largest private mortgage insurers, providing competitive mortgage default insurance solutions.",
    icon: FileCheck,
    category: "Sagen",
    website: "https://www.sagen.ca/",
    content: {
      overview:
        "Sagen (formerly Genworth Canada) is one of Canada's largest private providers of mortgage default insurance. They work with lenders, brokers, and homebuyers to make homeownership more accessible.",
      keyPoints: [
        {
          label: "Private Mortgage Insurance",
          desc: "Sagen provides an alternative to CMHC for mortgage default insurance, offering competitive rates and flexible underwriting guidelines.",
        },
        {
          label: "Program Variety",
          desc: "Offers insurance for purchase, refinance, and new construction mortgages with various program options.",
        },
        {
          label: "First-Time Buyer Programs",
          desc: "Special programs and incentives designed to help first-time homebuyers get on the property ladder.",
        },
        {
          label: "Online Tools",
          desc: "Provides calculators and resources to help homebuyers understand their mortgage options and affordability.",
        },
      ],
      relevance:
        "Sagen is one of several mortgage insurers I work with to find the best insurance solution for your mortgage, potentially offering more flexibility than CMHC alone.",
      additionalInfo:
        "As an alternative to CMHC, Sagen can sometimes offer more favorable terms for certain borrower profiles. I evaluate both options to ensure you get the best coverage.",
    },
  },
  {
    slug: "cra-track-noa",
    title: "Canada Revenue Agency, Track NOA",
    shortTitle: "CRA Track NOA",
    description:
      "Access your Notice of Assessment and tax information through the CRA's online portal — essential for mortgage applications.",
    icon: FileCheck,
    category: "Government & Regulatory",
    website: "https://www.canada.ca/en/revenue-agency.html?utm_campaign=not-applicable&utm_medium=redirect&utm_source=cra-arc.gc.ca_redirect",
    content: {
      overview:
        "The Canada Revenue Agency (CRA) provides the Notice of Assessment (NOA) — a critical document often required for mortgage applications to verify income, tax obligations, and financial standing.",
      keyPoints: [
        {
          label: "Notice of Assessment",
          desc: "Your NOA summarizes your tax filing and shows your assessed income, deductions, and any amounts owing or credits. It's frequently requested by lenders during the mortgage process.",
        },
        {
          label: "CRA My Account",
          desc: "Access your tax information online through CRA My Account, where you can view your NOA, track your refund, and manage your tax affairs.",
        },
        {
          label: "Income Verification",
          desc: "Lenders use your NOA and T1 General to verify your income, especially for self-employed individuals or those with complex income structures.",
        },
        {
          label: "Track Your NOA",
          desc: "The CRA's online portal allows you to track the status of your NOA in real-time after filing your taxes.",
        },
      ],
      relevance:
        "Your NOA is one of the most important documents for your mortgage application. Keeping it accessible and up to date helps streamline the approval process.",
      additionalInfo:
        "I recommend having your most recent NOA and Notice of Reassessment (if applicable) ready when applying for a mortgage. This speeds up the verification process significantly.",
    },
  },
  {
    slug: "cahpi",
    title: "Canadian Association of Home and Property Inspectors",
    shortTitle: "CAHPI",
    description:
      "Find certified home inspectors and understand the importance of home inspections in the buying process.",
    icon: Home,
    category: "Industry Associations",
    website: "https://www.cahpi.ca/en/",
    content: {
      overview:
        "The Canadian Association of Home and Property Inspectors (CAHPI) is the national association representing professional home inspectors across Canada. They set standards for home inspection practice and provide consumer education.",
      keyPoints: [
        {
          label: "Certified Inspectors",
          desc: "CAHPI-certified inspectors meet rigorous education, experience, and examination requirements, ensuring quality home inspections.",
        },
        {
          label: "Standards of Practice",
          desc: "CAHPI establishes and maintains national standards for home inspection practice, ensuring consistency and reliability.",
        },
        {
          label: "Consumer Protection",
          desc: "CAHPI provides consumer education and advocacy, helping homebuyers understand what to expect from a professional home inspection.",
        },
        {
          label: "Continuing Education",
          desc: "Certified inspectors are required to maintain their knowledge through ongoing professional development and education.",
        },
      ],
      relevance:
        "A professional home inspection is a critical step in the home buying process. CAHPI-certified inspectors provide reliable, standardized inspections that protect your investment.",
      additionalInfo:
        "While not mandatory, a home inspection is strongly recommended for all property purchases. The cost is typically a small fraction of the property value and can save you from unexpected repair costs.",
    },
  },
  {
    slug: "chba",
    title: "Canadian Home Builders Association",
    shortTitle: "CHBA",
    description:
      "Canada's largest national association representing the residential construction industry and home builders.",
    icon: HardHat,
    category: "Industry Associations",
    website: "https://www.chba.ca/",
    content: {
      overview:
        "The Canadian Home Builders Association (CHBA) is the voice of the residential construction industry in Canada. They represent builders, renovators, and suppliers who build and renovate homes across the country.",
      keyPoints: [
        {
          label: "Industry Advocacy",
          desc: "CHBA advocates for policies that support housing affordability, efficient regulation, and innovation in residential construction.",
        },
        {
          label: "Build Standards",
          desc: "CHBA members adhere to national building standards and codes, ensuring quality and safety in residential construction.",
        },
        {
          label: "Renovation Programs",
          desc: "CHBA provides resources and programs for homeowners undertaking renovations, including the Tarion Warranty Program.",
        },
        {
          label: "Housing Innovation",
          desc: "CHBA promotes innovation in home building, including green building practices, energy efficiency, and new construction technologies.",
        },
      ],
      relevance:
        "Whether you are buying new construction or renovating, CHBA resources help you understand building standards, find reputable builders, and navigate the construction process.",
      additionalInfo:
        "For those considering new construction homes or significant renovations, CHBA's network of certified builders and renovators provides a trusted starting point for finding qualified professionals.",
    },
  },
]

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug)
}
