import { Expert, SuccessStory, InsurancePlan, Branch } from './types';

export const EXPERTS: Expert[] = [
  {
    id: 'exp-1',
    name: 'Arjun Sharma',
    role: 'East Regional Partnership Head',
    region: 'East India',
    experience: '12+ Years',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRjnWvD7qlkF9iMa9UYP3Ox8oCeYeXo2M1OZeQ7ktask_qyYrdXu3MdNS-QHY_SGJwdld7xld6fzVXig_TIc0MXGv75OLuSVEKZhps4xoXvNrBmsG4w9x6D4XUlxVQGQKFFv_FLdMMRCQa68AL4R2t_q-KZwPE1Cswp5lEsmeqcSTgTgOcf-066U0lNAcK-rAtsfzzYFLuzbePISH0_BGz_RDnsZcltu2IrBPIKpSU5XV8Mbu-NRsrtqV52s0uULuq4x_o2aNufW0',
    email: 'arjun.sharma@bajajlife.com',
    phone: '+91 98300 24101',
    specialty: 'Strategic Retail Development & Micro-insurance expansion'
  },
  {
    id: 'exp-2',
    name: 'Priya Patel',
    role: 'Lead Business Associate Architect',
    region: 'West India',
    experience: '9+ Years',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrzEt5JV0lZDwOP38zZTBifEJt2mitzySFqwdDPvy5-bQKnFML_m89p0NR0SvtzccSVGRIfn8x9OZjFA9KGClCBCgZwOFb6jYmG1ZhjflypW8Pt4XVMWMq73vXGmaxZ5lcBNjasRpJnZIT8lq9qQLIJHQK_O9naAa77F6pYxjK9ruSCjBu39dFLM6tGjoukAHnyLag0Z4KcY05BK3k20pIwG6F5uFqF4j2XwMHzo04onK05jUoM0N2C2CxEY5jOeeRB09AEak7S_0',
    email: 'priya.patel@bajajlife.com',
    phone: '+91 98220 55432',
    specialty: 'Agency Channel scaling and Digital Onboarding'
  },
  {
    id: 'exp-3',
    name: 'Rohan Mehta',
    role: 'Managing Wealth Partner Specialist',
    region: 'North India',
    experience: '10+ Years',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAB85Pgry-Spr-XDeQuQa_T3Z9EYHTXhSutFTQpBsMBD3NYmf4wB6zUUx35cyiD6fLkqb0xbWTIMb_REBC4lgu4CVFUtH_DWfJptfSTKFzxQe2NUOviycybB6mizBycOQLCnitbujY0xZU5PVQqphQ0qMf3soAwdrvA6lOqHJ2Ah2ReF39eFJbsPsbid9REhJKPOGzizFaSjWRVU_YMVR2kAA0x2qCOwL6hZqkGOSJL0iOqyMZcyGeY3fih36-ChFFodbQyN9kQgUo',
    email: 'rohan.mehta@bajajlife.com',
    phone: '+91 98110 33499',
    specialty: 'HNI Wealth Structuring & Retirement Planning Portfolios'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    name: 'Anjali Mehta',
    role: 'Senior Life Goals Advisor',
    incomeGrowth: '3x Income Growth',
    story: 'Being a Bajaj Life Partner gave me absolute financial independence. The flexible working hours allow me to balance work and family life beautifully without compromises.',
    fullQuote: 'I started 3 years ago looking for part-time income. Today, I am leading an advisory group of 5 sub-agents. The comprehensive training academy made my lack of background in finance completely irrelevant. Bajaj Life provided me with the tools, technology, and branding to establish complete credibility in my city.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbP9iEboh_lWknjQkpajKtyKYveKp2lkJhYHZ2ftdyQPJ9ZVBjrUr1fvJJGi2GHllUe_EkqpoVM9NzEa9uiA67OXYQyWUY81qGJx9-69oXYB4eysnmyLkjvMaGISWUfPhT_Q7oGNuBd2LGQtUDaLACykBTUqinrih7A3VQiXYbsAERaz_yP1RGXKxxZAxmO-GZnFhvT6ld4csXWx-oN1YiqQePA00LqRk5OabkGPq6xntYXpClff8M15gucghOUjX5d0aL5odnHdo',
    rating: 5
  },
  {
    id: 'story-2',
    name: 'Vikram Singh',
    role: 'Strategic Wealth Consultant',
    incomeGrowth: '300% Business Growth',
    story: 'The digital portal is a game changer. I issued three comprehensive term plans on my very first day using their swift e-onboarding suite. Absolutely seamless.',
    fullQuote: 'Before joining, I was a local mutual fund distributor. Adding Bajaj Insurance filled the critical gap of absolute life protection for my clients. The Partner Portal allows me to design deep multi-scenario illustrations in real-time, generate instant WhatsApp-ready quotes, and process e-KYC in under 5 minutes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtBqHbIEejxZX0cyGtOpDZZa6XZURf9WINbc77bx5aLiPXhjg7SFqEs8d_E3UyDshzV6oPOQ6l-b2UuS43IXHOPPXEyoemk3lWSQEgtjHYqtOIeTJt5I1IG96p8Y1JdEqEA8EfnN41cCMVUAAewAAzKPriBVFk9T3QVgyR6U9xBD839g9CZcP3Avmmi6uD1Ai9aR-n9r5ngkX9Kwl47nuNLkL5wIhfTsCx4wBPb4DfHAu6jaylmhnpeU_IH4CJc5KwugqdLZhlBuU',
    rating: 5
  },
  {
    id: 'story-3',
    name: 'Siddharth Rai',
    role: 'Corporate Insurance Associate',
    incomeGrowth: 'MDRT Qualifier in Year 1',
    story: 'The real-time commission tracking is highly motivating and highly transparent. Customer service and query resolution teams are incredibly prompt.',
    fullQuote: 'The brand credibility of Bajaj Life is so strong that doors open easily. From SMEs needing group gratuity plans to families securing term protection, the product diversity lets me serve any client base. Tracking payout cycles directly on the App dashboard build immense trust.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAWgufehzeFC-YeJuaSXZlhRkpCAVCs-l4Qv1NlDPBJxfIs9grytVoAiuT0M2azPbt9pZ69DPEt1qSkuy63CgpFCbWXWlC63tm-GN3vr5CkTedrcc0Gt77zLdDVDAYdC1_1JFfU_f6jPQgZ4rPoc-VukTcIiiAiNlWaZAhqIV8xxlLoYoo0pJJktnoOoTsNiTpCrOQvqk6xqJ3agNYPkujcYVDxIjBAQTarjonBXphhjaO2a2-49vJ7C6vQJhHD_vHlyvnr1H8QOc',
    rating: 4.8
  }
];

export const INSURANCE_PLANS: InsurancePlan[] = [
  {
    id: 'term-life',
    title: 'Term Life Insurance',
    tagline: 'High-value pure protection plans to ensure your family\'s financial dignity in your absence.',
    minPremium: 499,
    entryAge: '18 - 65 Years',
    benefits: [
      'Pure risk coverage options up to INR 10 Crores',
      'Accidental death & critical illness rider attachments',
      'Whole life coverage options up to age 99',
      'Tax savings benefits under Section 80C'
    ],
    calcParams: {
      minAge: 18,
      maxAge: 65,
      minSumAssured: 2500000,
      maxSumAssured: 100000000,
      defaultSumAssured: 10000000,
      defaultAge: 30
    }
  },
  {
    id: 'investment',
    title: 'Wealth & Savings Plans',
    tagline: 'Smart investment cum insurance plans (ULIPs / Guaranteed Return) to build wealth systematically.',
    minPremium: 1500,
    entryAge: '0 - 60 Years',
    benefits: [
      'Choice of premium return and loyalty additions',
      'Fund options covering high, medium, and low risk profiles',
      'Guaranteed income solutions to safeguard goals',
      'Tax-free maturity savings payouts under Section 10(10D)'
    ],
    calcParams: {
      minAge: 18,
      maxAge: 60,
      minSumAssured: 500000,
      maxSumAssured: 20000000,
      defaultSumAssured: 2500000,
      defaultAge: 35
    }
  },
  {
    id: 'retirement',
    title: 'Retirement Plans',
    tagline: 'Build an elegant retirement corpus or secure immediate guaranteed lifetime annuity payouts.',
    minPremium: 2500,
    entryAge: '30 - 80 Years',
    benefits: [
      'Immediate or deferred annuity payment structures',
      'Joint life annuity to protect your spouse',
      'Flexibility to invest lump-sums or systematized installments',
      'Guaranteed pension increases to beat inflation indicators'
    ],
    calcParams: {
      minAge: 30,
      maxAge: 80,
      minSumAssured: 1000000,
      maxSumAssured: 50000000,
      defaultSumAssured: 5000000,
      defaultAge: 45
    }
  },
  {
    id: 'child',
    title: 'Child Future Plans',
    tagline: 'Guaranteed funds for milestones like higher foreign education or wedding, even in your absence.',
    minPremium: 1000,
    entryAge: '18 - 50 Years (Parent)',
    benefits: [
      'Inbuilt Premium Waiver benefit on parental demise',
      'Milestone-based payouts matching university term lines',
      'Market-linked growth with safety guards',
      'Secured legal guardian funding setup'
    ],
    calcParams: {
      minAge: 18,
      maxAge: 50,
      minSumAssured: 1000000,
      maxSumAssured: 30000000,
      defaultSumAssured: 3000000,
      defaultAge: 32
    }
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'branch-1',
    pincode: '400001',
    name: 'Mumbai Fort Branch Office',
    address: 'Ground Floor, Navsari Chambers, Purushottamdas Thakurdas Marg, Fort',
    city: 'Mumbai',
    phone: '022-66384200',
    timings: '09:30 AM - 05:30 PM (Mon-Sat)'
  },
  {
    id: 'branch-2',
    pincode: '110001',
    name: 'Delhi Connaught Place Branch',
    address: 'Unit No. 3-F, 3rd Floor, Hansalaya Building, 15 Barakhamba Road',
    city: 'New Delhi',
    phone: '011-43501230',
    timings: '09:30 AM - 05:30 PM (Mon-Sat)'
  },
  {
    id: 'branch-3',
    pincode: '560001',
    name: 'Bengaluru MG Road Office',
    address: 'No. 24, Richmond Towers, Mahatma Gandhi Road, Richmond Town',
    city: 'Bengaluru',
    phone: '080-41133370',
    timings: '09:30 AM - 05:30 PM (Mon-Sat)'
  },
  {
    id: 'branch-4',
    pincode: '700001',
    name: 'Kolkata Dalhousie Square Branch',
    address: 'Stephen House, 4th Floor, 4 B.B.D. Bagh East',
    city: 'Kolkata',
    phone: '033-22435400',
    timings: '09:30 AM - 05:30 PM (Mon-Sat)'
  },
  {
    id: 'branch-5',
    pincode: '411001',
    name: 'Pune Bund Garden Corporate Hub',
    address: 'GE Plaza, Airport Road, Yerawada (HQ Liaison Near Bund Garden)',
    city: 'Pune',
    phone: '020-66026777',
    timings: '09:00 AM - 06:00 PM (Mon-Sat)'
  },
  {
    id: 'branch-6',
    pincode: '600001',
    name: 'Chennai Parry\'s Corner Branch',
    address: 'Dare House, 2nd Floor, 234 N.S.C. Bose Road, George Town',
    city: 'Chennai',
    phone: '044-25341200',
    timings: '09:30 AM - 05:30 PM (Mon-Sat)'
  }
];

export const PARTNERSHIP_BENEFITS = [
  {
    title: 'Industry-Leading Payouts',
    description: 'Highly competitive brokerage frames, persistent commission loops, and generous quarterly incentives based on renewal performance.'
  },
  {
    title: 'Interactive Advisor Studio',
    description: 'Instant illustrative quotation engines, online application submission, e-KYC integration, and direct WhatsApp customer lifecycle triggers.'
  },
  {
    title: 'Bajaj Brand Credibility',
    description: 'Leverage the immense financial trust of Bajaj Life Insurance with over 20+ years of award-winning protection lineage and prompt claims.'
  },
  {
    title: 'Comprehensive Academy',
    description: 'Step-by-step training from our elite branch managers, preparation support for IRB certification examinations, and customer pitching modules.'
  }
];
