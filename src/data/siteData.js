export const SITE_INFO = {
  name: "RAK Analytics",
  tagline: "We don't just deliver data, we deliver results.",
  phone: "+961 4 41 48 42",
  phoneDisplay: "+961 4 41 48 42",
  whatsapp: "+961 81 670100",
  whatsappLink: "https://wa.me/96181670100",
  email: "info@rak4analytics.com",
  demoEmail: "Demo@rak4analytics.com",
  location: "Garden Tower, Bloc B, 10th Floor, Antelias Highway, Lebanon",
  regions: ["Canada", "Qatar", "KSA", "UAE", "Oman"],
  socials: {
    instagram: "https://www.instagram.com/rak4analytics/",
    facebook: "https://www.facebook.com/rak4analytics",
    linkedin: "https://www.linkedin.com/company/rak4analytics-sarl",
    twitter: "https://x.com/rak4analytics"
  },
  stats: [
    { label: "Curated Services", value: "100+", suffix: "" },
    { label: "Years of Experience", value: "20+", suffix: "Years" },
    { label: "Successful Cases", value: "100+", suffix: "Enterprises" },
    { label: "Global Presence", value: "5", suffix: "Countries" }
  ]
};

export const HERO_SLIDES = [
  {
    id: 1,
    badge: "Enterprise Analytics Excellence",
    title: "Embracing innovation. Harnessing data power.",
    subtitle: "Data That Moves You Forward. Let's take bold steps forward, united in our pursuit of excellence and collective success. Clear insights. Smarter decisions. Better outcomes.",
    ctaPrimary: "Explore Solutions",
    ctaSecondary: "Request a Demo",
    link: "solutions",
    image: "/assets/gif/Banner-1-v1.gif",
    fallbackBg: "linear-gradient(135deg, #14181d 0%, #212529 50%, #273140 100%)",
    highlights: ["Real-time KPI Tracking", "Predictive Forecasting", "Executive Dashboards"]
  },
  {
    id: 2,
    badge: "Next-Gen Data Visualization",
    title: "Dashboards built around your business.",
    subtitle: "We transform complex enterprise data into visually compelling, easy-to-understand interactive dashboards. See your business at a glance, spot emerging trends, and take decisive action.",
    ctaPrimary: "Browse Dashboards",
    ctaSecondary: "Free Business Assessment",
    link: "solutions",
    image: "/assets/gif/Banner-2-v1.gif",
    fallbackBg: "linear-gradient(135deg, #212529 0%, #273140 60%, #1e2530 100%)",
    highlights: ["Over 50+ Modular Views", "Cross-Platform Sync", "Role-Based Permissions"]
  },
  {
    id: 3,
    badge: "Industry-Specific Intelligence",
    title: "Turn insight into strategic growth.",
    subtitle: "Tailored analytics architectures designed specifically for Healthcare, FMCG, Manufacturing, Banking, and Supply Chain. Accelerate growth with sector-proven business logic.",
    ctaPrimary: "View Industries",
    ctaSecondary: "Contact Experts",
    link: "industries",
    image: "/assets/gif/Futuristic-Port-Logistics-and-Global-Trade-v1.gif",
    fallbackBg: "linear-gradient(135deg, #1a1f26 0%, #212529 50%, #ef6000 120%)",
    highlights: ["Pharma & IQVIA Insights", "Supply Chain Optimization", "FMCG Retail Analytics"]
  },
  {
    id: 4,
    badge: "AI-Powered Autonomy",
    title: "AI-powered analytics. Built to execute.",
    subtitle: "We integrate enterprise AI directly into your systems and ERPs. Autonomous agentic AI models trained on your data and aligned with your unique business rules to power execution at scale.",
    ctaPrimary: "Discover In-House AI",
    ctaSecondary: "Speak With an Engineer",
    link: "products",
    image: "/assets/gif/Banner-4-v1.gif",
    fallbackBg: "linear-gradient(135deg, #0f1216 0%, #212529 50%, #273140 100%)",
    highlights: ["Private On-Premise AI", "Agentic Autonomous Tasks", "Universal ERP Connector"]
  }
];

export const USPS = [
  {
    id: "private-ai",
    icon: "ShieldCheck",
    title: "Private AI",
    description: "Secure, enterprise-grade AI deployed within your dedicated environment, ensuring 100% control over confidential data and compliance."
  },
  {
    id: "agentic-ai",
    icon: "Bot",
    title: "Agentic AI",
    description: "Autonomous AI agents that continuously analyze data streams, proactively trigger actions, and drive operational efficiency at scale."
  },
  {
    id: "predictive-analysis",
    icon: "TrendingUp",
    title: "Predictive Analysis",
    description: "Harness historical and real-time data to forecast market trends, detect operational risks, and support smarter foresight."
  },
  {
    id: "prebuilt-dashboards",
    icon: "LayoutDashboard",
    title: "Pre-Built Business Dashboards",
    description: "Industry-ready, modular dashboard templates that provide immediate 360° visibility into finance, sales, inventory, and operations."
  },
  {
    id: "erp-integration",
    icon: "Boxes",
    title: "ERP Integration",
    description: "Seamlessly integrate with Odoo, SAP, Microsoft Dynamics, Oracle, and legacy databases to unify data and automate continuous reporting."
  }
];

export const PRODUCT_CATEGORIES = [
  "All Products",
  "AI",
  "BI & Data Analytics",
  "Automation"
];

export const PRODUCTS = [
  {
    id: "woodpecker",
    name: "WoodPecker",
    tagline: "Pharma & IQVIA Strategic Intelligence",
    logo: "/assets/product-woodpecker.png",
    description: "Transform complex IQVIA and pharmaceutical market data into actionable insights, predictive foresight, and strategic commercial intelligence.",
    bullets: [
      "Streamline business reviews and territory meetings with instant multi-tier visual breakdowns",
      "Bridge the gap between current performance and quota growth with AI predictive prescription trends",
      "Empower medical reps with transparent doctor-level targeting and sales execution analytics",
      "Identify whitespace market opportunities ahead of competitors across therapeutic classes"
    ],
    category: "Pharma & Life Sciences",
    filterCategories: ["AI", "BI & Data Analytics"],
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    features: [
      { title: "IQVIA Data Ingestion", desc: "Automated ETL converting raw market data to clean analytical cubes." },
      { title: "Market Share Dynamics", desc: "Compare brand performance vs competitors across regions and therapeutic classes." },
      { title: "Territory Sales Forecasting", desc: "Predictive models estimating next-quarter sales by SKU and sales rep." }
    ]
  },
  {
    id: "intellix",
    name: "Intellix",
    tagline: "Universal AI Database & ERP Copilot",
    logo: "/assets/product-intellix.png",
    description: "An advanced AI solution that integrates directly into company databases, ERP systems, and reporting tools to provide real-time conversational query access.",
    bullets: [
      "Ask natural-language business questions and get instant SQL-generated answers and live charts",
      "Zero latency sync across PostgreSQL, Oracle, SQL Server, SAP, and Odoo",
      "Automated anomaly alerts and daily conversational executive summaries delivered directly to management",
      "Strict data privacy protocols: queries execute inside your perimeter without data leak risk"
    ],
    category: "Enterprise AI & Integration",
    filterCategories: ["AI"],
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    features: [
      { title: "Natural Language to BI", desc: "Translates plain English or Arabic questions into optimized data visualizations." },
      { title: "Universal Connector", desc: "Plugs into any SQL, NoSQL, or REST API source within minutes." },
      { title: "Proactive Notifications", desc: "Alerts stakeholders when KPI thresholds deviate from statistical baselines." }
    ]
  },
  {
    id: "fieldspark",
    name: "FieldSpark",
    tagline: "Field Team Performance & Telemetry",
    logo: "/assets/product-fieldspark.png",
    description: "A specialized reporting and telemetry tool that elevates field force execution and route productivity through live data-driven insights.",
    bullets: [
      "Real-time visibility into rep territory visits, coverage rates, and route efficiency",
      "Order-taking analytics and field inventory level tracking right at the point of sale",
      "Gamified rep leaderboards and performance scorecards to boost motivation and accountability",
      "Offline sync capability with instantaneous background synchronization when connection restores"
    ],
    category: "Field Operations & Mobility",
    filterCategories: ["Automation"],
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    features: [
      { title: "Route & Visit Optimization", desc: "Reduces transit overhead and maximizes daily high-value client visits." },
      { title: "POS Compliance Tracking", desc: "Photo audit analytics and merchandising compliance reporting." },
      { title: "Dynamic Targets", desc: "Automatically updates monthly quota pacing based on seasonality." }
    ]
  },
  {
    id: "procurevision",
    name: "ProcureVision",
    tagline: "Procurement & Spend Intelligence",
    logo: "/assets/product-procurevision.png",
    description: "A comprehensive dashboard and analytics platform for procurement operations, providing deep spend analysis, supplier risk evaluation, and cost reduction paths.",
    bullets: [
      "Complete spend visibility across categories, vendors, business units, and purchase contracts",
      "Predictive supplier risk scoring based on fulfillment lead times, quality rates, and price volatility",
      "Contract compliance auditing and rogue spend detection to safeguard company cash flow",
      "Automated price variance analysis comparing purchase orders against benchmark market rates"
    ],
    category: "Procurement & Supply Chain",
    filterCategories: ["BI & Data Analytics"],
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    features: [
      { title: "Spend Cube Analysis", desc: "Multidimensional slicing of corporate expenditure by vendor, SKU, and department." },
      { title: "Supplier Scorecards", desc: "Real-time tracking of On-Time In-Full (OTIF) delivery metrics." },
      { title: "Savings Pipeline", desc: "Quantifiable tracking of negotiated cost reductions and realized ROI." }
    ]
  },
  {
    id: "saleslogic",
    name: "Sales Logic",
    tagline: "FMCG & Pharma Commercial Analytics",
    logo: "/assets/product-saleslogic.png",
    description: "Advanced commercial analytics designed for high-velocity FMCG and pharmaceutical sales environments, enhancing channel visibility and optimizing execution.",
    bullets: [
      "Channel profitability, gross margin, and trade promotion ROI breakdown",
      "Real-time retail audit analytics to detect out-of-stock risks before revenue is lost",
      "Customer cohort segmentation and churn prediction to protect recurring key accounts",
      "Comprehensive sell-in versus sell-out reconciliation across distributor networks"
    ],
    category: "Commercial & FMCG",
    filterCategories: ["BI & Data Analytics"],
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    features: [
      { title: "Trade Promotion ROI", desc: "Measures incremental sales volume uplift versus promotional discount costs." },
      { title: "Distributor Sell-Out", desc: "Aggregates secondary and tertiary sales data into one unified pipeline." },
      { title: "SKU Rationalization", desc: "Identifies bottom-performing products that erode operational margin." }
    ]
  },
  {
    id: "datapulse",
    name: "DataPulse",
    tagline: "Modular ERP Analytics & Instant BI",
    logo: "/assets/product-datapulse.jpg",
    description: "Pre-built, modular analytics dashboards engineered for modern ERP systems that provide instant executive and operational insights out-of-the-box.",
    bullets: [
      "Zero-code turnkey deployment compatible with Odoo, SAP, Microsoft Dynamics, and NetSuite",
      "Modular coverage spanning Sales, Stock, Accounting, HR, Production, and Procurement",
      "Intuitive drill-down capabilities from high-level company totals down to individual ledger transactions",
      "Automated PDF executive report generation dispatched weekly/monthly to management"
    ],
    category: "ERP Dashboards & BI",
    filterCategories: ["BI & Data Analytics", "Automation"],
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    features: [
      { title: "Plug-and-Play Connectors", desc: "Pre-mapped schema definitions that connect with your ERP database instantly." },
      { title: "Cross-Departmental Synergy", desc: "Unifies sales orders with warehouse inventory and general ledger books." },
      { title: "Self-Service Slice & Dice", desc: "Enables business analysts to build custom perspectives without IT tickets." }
    ]
  },
  {
    id: "odoo-drive",
    name: "Odoo Drive",
    tagline: "Native Odoo Enterprise Telematics & BI",
    logo: "/assets/product-datapulse.jpg",
    description: "Specialized suite of dashboards and analytical modules tailored exclusively for Odoo ERP, boosting visibility across accounting, inventory, and sales.",
    bullets: [
      "Direct Odoo ORM integration preserving existing security groups and access rules",
      "Real-time cash flow, accounts receivable aging, and DSO (Days Sales Outstanding) forecasting",
      "Automated reorder triggers and safety stock optimization based on historical velocity",
      "Native embedded views inside Odoo or accessible via standalone web portal"
    ],
    category: "Odoo Ecosystem",
    filterCategories: ["BI & Data Analytics", "Automation"],
    demoVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    features: [
      { title: "Native Odoo Addon", desc: "Installs cleanly as a module in Odoo Community or Enterprise editions." },
      { title: "Aging & Cash Velocity", desc: "Pinpoint overdue customer balances and automate collection workflows." },
      { title: "Inventory Health Matrix", desc: "Classify items into fast-moving, slow-moving, and dead stock." }
    ]
  },

];

export const DEPARTMENTS = [
  "Sales",
  "Stock",
  "Accounting",
  "HR",
  "Procurement",
  "Supply Chain",
  "Quality",
  "Logistic & Distribution",
  "Production",
  "Facilities / Maintenance",
  "Treasury / Cash Management",
  "Compliance",
  "Audit",
  "IT"
];

export const POSITIONS = [
  "Chief Executive Officer (CEO)",
  "Chief Operating Officer (COO)",
  "Chief Financial Officer (CFO)",
  "Chief Technology Officer (CTO)",
  "Chief Information Officer (CIO)",
  "Chief Data Officer (CDO)",
  "President / Managing Director",
  "Vice President (VP) / Senior VP",
  "Finance & Accounting",
  "Sales Director / Team",
  "Procurement Manager",
  "Supply Chain Head",
  "Legal & Compliance",
  "Auditor",
  "Stock & Warehouse",
  "Quality Assurance",
  "Production Management",
  "Maintenance Management"
];

export const INDUSTRIES = [
  {
    id: "pharma-healthcare",
    name: "Pharmaceutical & Healthcare",
    desc: "Data-driven insights to optimize patient outcomes, regulatory compliance, prescription trends, and operational efficiency.",
    icon: "Activity",
    count: 14
  },
  {
    id: "industrial-manufacturing",
    name: "Industrial & Manufacturing",
    desc: "Advanced analytics to improve production throughput, overall equipment effectiveness (OEE), and quality control.",
    icon: "Factory",
    count: 18
  },
  {
    id: "fmcg-fb",
    name: "FMCG & F&B",
    desc: "Consumer and sales analytics to enhance demand forecasting, retail shelf execution, and promotion ROI.",
    icon: "ShoppingBag",
    count: 16
  },
  {
    id: "retail",
    name: "Retail",
    desc: "Actionable insights to optimize customer experience, basket size, inventory turnaround, and omnichannel growth.",
    icon: "Store",
    count: 12
  },
  {
    id: "real-estate",
    name: "Real Estate",
    desc: "Market and portfolio analytics to drive smarter property investments, occupancy rates, pricing, and asset utilization.",
    icon: "Building2",
    count: 9
  },
  {
    id: "shipping-logistics",
    name: "Shipping & Logistics",
    desc: "Operational analytics to streamline transit logistics, fleet telemetry, fuel consumption, and on-time delivery.",
    icon: "Truck",
    count: 15
  },
  {
    id: "insurance",
    name: "Insurance",
    desc: "Risk, claims, and customer lifetime value analytics to enhance underwriting accuracy, fraud detection, and profitability.",
    icon: "ShieldAlert",
    count: 8
  },
  {
    id: "banking",
    name: "Banking & Financial Services",
    desc: "Financial analytics to strengthen liquidity risk management, credit scoring, customer intelligence, and regulatory audits.",
    icon: "Landmark",
    count: 11
  },
  {
    id: "distribution",
    name: "Distribution",
    desc: "Data insights to optimize wholesale channel performance, distributor sell-out, inventory flow, and partner efficiency.",
    icon: "Boxes",
    count: 13
  },
  {
    id: "beauty-wellness",
    name: "Beauty & Wellness",
    desc: "Consumer behavior and recurring replenishment analytics to personalize offerings and accelerate brand loyalty.",
    icon: "Sparkles",
    count: 7
  },
  {
    id: "others",
    name: "Other Specialized Industries",
    desc: "Customized analytics architectures and predictive telemetry tailored to unique business models and emerging sectors.",
    icon: "Layers",
    count: 10
  }
];

export const DASHBOARDS_CATALOG = [
  {
    id: "sales-drive-master",
    title: "Sales Analytics Master Suite",
    department: "Sales",
    positions: ["Chief Executive Officer (CEO)", "Sales Director / Team", "Vice President (VP) / Senior VP", "Chief Financial Officer (CFO)"],
    industries: ["FMCG & F&B", "Retail", "Pharmaceutical & Healthcare", "Distribution"],
    productFamily: "DataPulse",
    price: 149,
    moduleBundle: "Sales Drive",
    bundlePrice: 499,
    description: "Empower your sales leadership with real-time revenue pacing, conversion funnels, quota attainment, customer churn risk, and regional performance matrices.",
    kpis: [
      { label: "Quarterly Revenue", value: "$2.84M", change: "+18.4%" },
      { label: "Pipeline Conversion", value: "32.6%", change: "+4.1%" },
      { label: "Avg Deal Size", value: "$42,500", change: "+12.0%" },
      { label: "Sales Rep Quota %", value: "94.2%", change: "+6.8%" }
    ],
    sampleChartData: [
      { month: "Jan", actual: 380, target: 350 },
      { month: "Feb", actual: 420, target: 390 },
      { month: "Mar", actual: 490, target: 450 },
      { month: "Apr", actual: 460, target: 470 },
      { month: "May", actual: 540, target: 500 },
      { month: "Jun", actual: 610, target: 550 }
    ],
    features: [
      "Multi-currency conversion with automatic daily forex updates",
      "Direct drill-down from enterprise-wide target to rep call logs",
      "AI-driven sales forecast with 95% confidence interval bounds",
      "Customer lifetime value (CLV) and churn probability matrix"
    ]
  },
  {
    id: "stock-inventory-optimizer",
    title: "Stock & Inventory Optimization",
    department: "Stock",
    positions: ["Chief Operating Officer (COO)", "Stock & Warehouse", "Supply Chain Head", "Chief Financial Officer (CFO)"],
    industries: ["Industrial & Manufacturing", "FMCG & F&B", "Retail", "Distribution"],
    productFamily: "DataPulse",
    price: 149,
    moduleBundle: "Inventory Pulse",
    bundlePrice: 499,
    description: "Eliminate stockouts and dead capital. Real-time warehouse analytics, inventory turnover ratios, safety stock alerts, and automated replenishment recommendations.",
    kpis: [
      { label: "Inventory Turnover", value: "6.8x", change: "+0.7x" },
      { label: "Carrying Cost %", value: "14.2%", change: "-2.8%" },
      { label: "Dead Stock Value", value: "$68,400", change: "-24.5%" },
      { label: "Fill Rate", value: "98.9%", change: "+1.4%" }
    ],
    sampleChartData: [
      { month: "Jan", stockLevel: 1200, reorderPoint: 800 },
      { month: "Feb", stockLevel: 1050, reorderPoint: 800 },
      { month: "Mar", stockLevel: 910, reorderPoint: 800 },
      { month: "Apr", stockLevel: 1350, reorderPoint: 800 },
      { month: "May", stockLevel: 1100, reorderPoint: 800 },
      { month: "Jun", stockLevel: 980, reorderPoint: 800 }
    ],
    features: [
      "ABC-XYZ item categorization balancing demand volatility with value",
      "Real-time bin-level visibility across multiple distribution centers",
      "Lead-time forecasting factoring supplier reliability scorecards",
      "Automated PO creation directly transmitted to connected ERP"
    ]
  },
  {
    id: "accounting-financial-health",
    title: "Financial Health & Ledger Intelligence",
    department: "Accounting",
    positions: ["Chief Financial Officer (CFO)", "Finance & Accounting", "Chief Executive Officer (CEO)", "Auditor"],
    industries: ["Banking", "Insurance", "Retail", "Industrial & Manufacturing", "Real Estate"],
    productFamily: "Odoo Drive",
    price: 149,
    moduleBundle: "Finance Drive",
    bundlePrice: 499,
    description: "Streamline financial closes and gain real-time visibility into your balance sheet, P&L, accounts receivable aging, and working capital cycles.",
    kpis: [
      { label: "Gross Margin", value: "41.8%", change: "+2.4%" },
      { label: "Days Sales Out (DSO)", value: "38 Days", change: "-6 Days" },
      { label: "EBITDA Margin", value: "22.6%", change: "+3.1%" },
      { label: "Quick Ratio", value: "1.82", change: "+0.15" }
    ],
    sampleChartData: [
      { month: "Jan", revenue: 520, expenses: 380, net: 140 },
      { month: "Feb", revenue: 560, expenses: 400, net: 160 },
      { month: "Mar", revenue: 610, expenses: 420, net: 190 },
      { month: "Apr", revenue: 590, expenses: 410, net: 180 },
      { month: "May", revenue: 650, expenses: 440, net: 210 },
      { month: "Jun", revenue: 720, expenses: 460, net: 260 }
    ],
    features: [
      "Dynamic multi-entity ledger consolidation in real time",
      "Cash runway simulation with stress-test scenario modeling",
      "Automated AR collections aging bucket visualization",
      "Tax compliance and VAT reconciliation audits"
    ]
  },
  {
    id: "woodpecker-iqvia-dashboard",
    title: "WoodPecker IQVIA Pharma Market Insights",
    department: "Sales",
    positions: ["Chief Executive Officer (CEO)", "Sales Director / Team", "Chief Data Officer (CDO)"],
    industries: ["Pharmaceutical & Healthcare"],
    productFamily: "WoodPecker",
    price: 199,
    moduleBundle: "WoodPecker Suite",
    bundlePrice: 599,
    description: "Transform complex IQVIA and local prescription data into territory-level actionable insights, doctor segmentation, and competitor market share shifts.",
    kpis: [
      { label: "Market Share %", value: "28.4%", change: "+3.2%" },
      { label: "Prescription Velocity", value: "12,450", change: "+14.0%" },
      { label: "Doctor Coverage Rate", value: "89.2%", change: "+5.1%" },
      { label: "New Brand Uptake", value: "+34.5%", change: "+8.9%" }
    ],
    sampleChartData: [
      { month: "Jan", ourBrand: 28, competitorA: 34, competitorB: 20, other: 18 },
      { month: "Feb", ourBrand: 30, competitorA: 33, competitorB: 19, other: 18 },
      { month: "Mar", ourBrand: 32, competitorA: 31, competitorB: 20, other: 17 },
      { month: "Apr", ourBrand: 33, competitorA: 30, competitorB: 20, other: 17 },
      { month: "May", ourBrand: 35, competitorA: 29, competitorB: 19, other: 17 },
      { month: "Jun", ourBrand: 37, competitorA: 28, competitorB: 19, other: 16 }
    ],
    features: [
      "IQVIA brick and territory hierarchical mapping",
      "Medical specialty and physician tier segmentation",
      "Competitor price erosion and reimbursement impact modeling",
      "Field rep detailing effectiveness tracking"
    ]
  },
  {
    id: "procurevision-spend-dashboard",
    title: "ProcureVision Strategic Spend Analytics",
    department: "Procurement",
    positions: ["Procurement Manager", "Chief Financial Officer (CFO)", "Supply Chain Head", "Chief Operating Officer (COO)"],
    industries: ["Industrial & Manufacturing", "FMCG & F&B", "Healthcare", "Shipping & Logistics"],
    productFamily: "ProcureVision",
    price: 149,
    moduleBundle: "ProcureVision Suite",
    bundlePrice: 499,
    description: "Unlock deep visibility into procurement spend categories, supplier performance contracts, purchase order compliance, and price variance benchmarks.",
    kpis: [
      { label: "Identified Savings", value: "$412,000", change: "+28.5%" },
      { label: "Contract Compliance", value: "93.4%", change: "+7.2%" },
      { label: "Supplier OTIF", value: "96.1%", change: "+3.8%" },
      { label: "Active Vendors", value: "142", change: "-18 Opt." }
    ],
    sampleChartData: [
      { month: "Jan", rawMaterials: 450, packaging: 180, logistics: 120, mro: 70 },
      { month: "Feb", rawMaterials: 420, packaging: 170, logistics: 110, mro: 65 },
      { month: "Mar", rawMaterials: 410, packaging: 165, logistics: 105, mro: 60 },
      { month: "Apr", rawMaterials: 390, packaging: 160, logistics: 100, mro: 55 },
      { month: "May", rawMaterials: 380, packaging: 155, logistics: 95, mro: 50 },
      { month: "Jun", rawMaterials: 370, packaging: 150, logistics: 90, mro: 45 }
    ],
    features: [
      "Spend cube categorization according to UNSPSC taxonomy",
      "Supplier risk matrix evaluating solvency, lead times, and quality",
      "Automated rogue purchasing alerts against contracted catalog prices",
      "Benchmarked commodity price index comparisons"
    ]
  },
  {
    id: "hr-workforce-analytics",
    title: "HR & Workforce Capital Analytics",
    department: "HR",
    positions: ["Chief Executive Officer (CEO)", "Chief Operating Officer (COO)", "President / Managing Director"],
    industries: ["Retail", "Industrial & Manufacturing", "Banking", "Pharmaceutical & Healthcare"],
    productFamily: "DataPulse",
    price: 149,
    moduleBundle: "HR Pulse",
    bundlePrice: 499,
    description: "Transform HR data into impactful talent strategies. Monitor turnover risk, recruitment funnels, employee productivity, and payroll efficiency.",
    kpis: [
      { label: "Voluntary Turnover", value: "6.2%", change: "-3.1%" },
      { label: "Time-to-Hire", value: "24 Days", change: "-8 Days" },
      { label: "Revenue per FTE", value: "$284,000", change: "+11.5%" },
      { label: "Training Completion", value: "94.8%", change: "+8.2%" }
    ],
    sampleChartData: [
      { month: "Jan", headcount: 420, departures: 4, hires: 9 },
      { month: "Feb", headcount: 425, departures: 3, hires: 8 },
      { month: "Mar", headcount: 430, departures: 2, hires: 7 },
      { month: "Apr", headcount: 435, departures: 3, hires: 8 },
      { month: "May", headcount: 440, departures: 1, hires: 6 },
      { month: "Jun", headcount: 445, departures: 2, hires: 7 }
    ],
    features: [
      "Attrition prediction powered by machine learning sentiment analysis",
      "Recruitment pipeline velocity and candidate source ROI",
      "Diversity, equity, and inclusion benchmarking",
      "Overtime compensation vs productivity tracking"
    ]
  },
  {
    id: "production-oee-manufacturing",
    title: "Production OEE & Manufacturing Analytics",
    department: "Production",
    positions: ["Production Management", "Chief Operating Officer (COO)", "Quality Assurance", "Maintenance Management"],
    industries: ["Industrial & Manufacturing", "FMCG & F&B"],
    productFamily: "DataPulse",
    price: 149,
    moduleBundle: "Production Pulse",
    bundlePrice: 499,
    description: "Maximize production uptime and line throughput. Real-time Overall Equipment Effectiveness (OEE), scrap rate reduction, and bottleneck identification.",
    kpis: [
      { label: "Overall OEE %", value: "86.4%", change: "+7.8%" },
      { label: "Machine Availability", value: "92.1%", change: "+4.3%" },
      { label: "Scrap / Reject %", value: "1.4%", change: "-0.9%" },
      { label: "Mean Time to Repair", value: "42 Min", change: "-18 Min" }
    ],
    sampleChartData: [
      { month: "Jan", lineA: 82, lineB: 78, lineC: 80 },
      { month: "Feb", lineA: 84, lineB: 80, lineC: 81 },
      { month: "Mar", lineA: 85, lineB: 83, lineC: 82 },
      { month: "Apr", lineA: 86, lineB: 85, lineC: 84 },
      { month: "May", lineA: 88, lineB: 86, lineC: 85 },
      { month: "Jun", lineA: 89, lineB: 87, lineC: 86 }
    ],
    features: [
      "Real-time sensor telemetry and IoT line status updates",
      "Shift-by-shift yield and performance scorecards",
      "Predictive maintenance alerts before catastrophic mechanical failure",
      "Material consumption variance against standard Bill of Materials (BOM)"
    ]
  },
  {
    id: "logistics-fleet-telematics",
    title: "Logistics & Fleet Telematics Intelligence",
    department: "Logistic & Distribution",
    positions: ["Supply Chain Head", "Chief Operating Officer (COO)", "Maintenance Management"],
    industries: ["Shipping & Logistics", "Distribution", "Retail"],
    productFamily: "FieldSpark",
    price: 149,
    moduleBundle: "Logistics Pulse",
    bundlePrice: 499,
    description: "GPS vehicle telematics, route efficiency tracking, fuel burn analytics, delivery window compliance, and maintenance scheduling.",
    kpis: [
      { label: "Fleet On-Time %", value: "97.4%", change: "+4.2%" },
      { label: "Fuel Cost / Mile", value: "$0.38", change: "-12.5%" },
      { label: "Idle Time Ratio", value: "6.8%", change: "-4.1%" },
      { label: "Active Vehicles", value: "85 / 88", change: "96.5%" }
    ],
    sampleChartData: [
      { month: "Jan", deliveries: 2400, onTime: 2280 },
      { month: "Feb", deliveries: 2550, onTime: 2440 },
      { month: "Mar", deliveries: 2700, onTime: 2610 },
      { month: "Apr", deliveries: 2850, onTime: 2770 },
      { month: "May", deliveries: 3100, onTime: 3020 },
      { month: "Jun", deliveries: 3350, onTime: 3280 }
    ],
    features: [
      "Live GPS fleet map with driver behavior safety scoring",
      "Geofence entry/exit logging with proof-of-delivery timestamps",
      "Engine diagnostics fault code alert engine",
      "Cold-chain temperature compliance tracking for perishables"
    ]
  }
];

export const SERVICES = [
  {
    id: "data-automation",
    title: "Data Automation & ETL Pipelines",
    tagline: "Automate data collection and processing to save time and guarantee data freshness.",
    desc: "We engineer resilient, automated data ingestion pipelines that harvest records from disparate ERPs, CRMs, cloud buckets, and legacy SQL databases without human intervention.",
    deliverables: [
      "Custom ETL/ELT pipelines with automatic schema migration",
      "Scheduled or continuous real-time CDC (Change Data Capture)",
      "Automated data hygiene, deduplication, and sanity checking",
      "Centralized cloud data warehousing on Snowflake, Azure, or AWS"
    ]
  },
  {
    id: "data-visualization",
    title: "Data Visualization & Executive Dashboards",
    tagline: "Transform messy spreadsheets into visually compelling, boardroom-ready dashboards.",
    desc: "Our senior BI architects craft intuitive, interactive interfaces tailored to your leadership and department managers, exposing bottlenecks and highlighting growth levers.",
    deliverables: [
      "Persona-driven UX designs tailored for C-suite and field managers",
      "Interactive multi-tier drill downs from high-level KPIs to line items",
      "Mobile-responsive dashboards accessible on phones, tablets, and web",
      "Automated weekly PDF/Slack/Teams digest dispatching"
    ]
  },
  {
    id: "predictive-agentic-ai",
    title: "Predictive & Agentic AI Solutions",
    tagline: "Deploy autonomous AI agents that analyze trends, forecast risks, and trigger actions.",
    desc: "Bridge the gap between descriptive reporting and prescriptive action. We build custom machine learning models and LLM-powered autonomous agents embedded directly in your workflow.",
    deliverables: [
      "Custom predictive sales, inventory, and churn models",
      "Autonomous AI copilot directly querying your enterprise databases",
      "Automated anomaly alerts sent when financial metrics shift abruptly",
      "Fully private on-premise or sovereign cloud AI deployment"
    ]
  },
  {
    id: "erp-database-integration",
    title: "ERP & Database Architecture",
    tagline: "Seamlessly integrate with Odoo, SAP, Oracle, and Dynamics.",
    desc: "Break organizational silos by bridging operational ERP data with analytical data lakes, unlocking unified cross-departmental business intelligence.",
    deliverables: [
      "Native connectors for Odoo Community & Enterprise",
      "High-throughput connectors for SAP ERP, Microsoft Dynamics, and NetSuite",
      "Real-time bidirectional synchronization APIs",
      "Zero-downtime migration and data validation audits"
    ]
  },
  {
    id: "market-analysis-research",
    title: "Market Analysis & Industry Research",
    tagline: "Strategic market intelligence, competitor benchmarking, and growth forecasting.",
    desc: "Gain independent, data-backed perspectives on your industry landscape. We evaluate consumer demand shifts, competitor pricing strategies, and regional expansion vectors.",
    deliverables: [
      "Industry benchmark reports comparing operating metrics against top peers",
      "Price sensitivity and price elasticity analysis",
      "Competitor digital footprint and retail distribution tracking",
      "Feasibility studies for geographic market entry across GCC and Canada"
    ]
  },
  {
    id: "bi-advisory-workshops",
    title: "Analytics Advisory & Training Workshops",
    tagline: "Build a true data-driven culture with hands-on enablement.",
    desc: "We don't just hand over software; we run intensive workshops with your executive team and business analysts to guarantee maximum adoption, confidence, and ROI.",
    deliverables: [
      "Executive alignment sessions to pinpoint strategic KPI frameworks",
      "Hands-on training curriculum for internal Power BI/Tableau users",
      "Data governance, compliance, and security policy authoring",
      "Continuous quarterly BI optimization and health checks"
    ]
  }
];

export const CLIENTS = [
  {
    name: "Nestle",
    role: "Global F&B Enterprise",
    quote: "RAK Analytics provided the predictive insights our commercial team needed to forecast retail demand, optimize promotion budgets, and safeguard margins across thousands of SKUs.",
    logo: "/assets/clients-strip.png",
    metric: "+22% Forecast Accuracy"
  },
  {
    name: "Mersaco",
    role: "Leading Healthcare & Pharma Distributor",
    quote: "With WoodPecker and RAK Analytics' healthcare intelligence, we gained comprehensive visibility across pharmacy networks and medical sales execution that transformed our leadership reviews.",
    logo: "/assets/clients-strip.png",
    metric: "3.4x Faster Reviews"
  },
  {
    name: "Mike Sport",
    role: "Premier Sports & Retail Chain",
    quote: "RAK Analytics helped us understand customer buying patterns, personalize retail promotions, optimize store-level inventory, and elevate overall omnichannel sales.",
    logo: "/assets/clients-strip.png",
    metric: "-18% Stockout Incidents"
  },
  {
    name: "Al Wataniya Gypsum Company",
    role: "Industrial & Manufacturing Leader",
    quote: "Their production and procurement analytics directly optimized our manufacturing throughput, predicted mechanical downtime, and enabled precision cost tracking across facilities.",
    logo: "/assets/clients-strip.png",
    metric: "+14% Machine Uptime"
  }
];

export const PARTNERS = [
  {
    id: "syncwise",
    name: "Syncwise",
    badge: "Strategic Mobility Partner",
    desc: "The leading provider of Technology Services in Enterprise Mobility in the Middle East, partnering with RAK Analytics to deliver end-to-end field telemetry and route optimization.",
    capabilities: ["Enterprise Mobility", "Field Sales Automation", "Direct Store Delivery (DSD)", "Fleet Route Optimization"]
  },
  {
    id: "powerful-systems",
    name: "Powerful Systems",
    badge: "Enterprise Security Partner",
    desc: "Providers of end-to-end security solutions enabling organizations to scale safely in a digital world, ensuring RAK Analytics deployments meet rigorous data protection and governance criteria.",
    capabilities: ["Zero-Trust Architecture", "Data Sovereignty Compliance", "Infrastructure Hardening", "Penetration Testing"]
  },
  {
    id: "microsoft",
    name: "Microsoft Partner Network",
    badge: "Cloud & Analytics Partner",
    desc: "Certified implementation partner for Power BI, Microsoft Fabric, and Azure Data Services across North America and the Middle East.",
    capabilities: ["Power BI Enterprise", "Microsoft Fabric", "Azure Synapse & Data Factory", "Azure OpenAI Integration"]
  },
  {
    id: "odoo-alliance",
    name: "Odoo Ecosystem Partner",
    badge: "ERP Telematics Partner",
    desc: "Specialized analytics developers building native connectors and real-time BI extensions for Odoo Community and Enterprise platforms.",
    capabilities: ["Odoo ORM Integration", "Automated Financial Closes", "Warehouse Management BI", "Point of Sale Telematics"]
  }
];

export const CERTIFICATIONS = [
  "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
  "Microsoft Azure Data Fundamentals (DP-900)",
  "Microsoft Azure Data Engineer Associate (DP-203)",
  "Microsoft Fabric Analytics Engineer Associate (DP-600)",
  "Google Data Analytics Professional Certificate",
  "Tableau Certified Data Analyst",
  "AWS Certified Data Analytics – Specialty",
  "IBM Data Analyst Professional Certificate",
  "Certified Business Intelligence Professional (CBIP)",
  "Snowflake SnowPro Core Certification",
  "Databricks Data Engineer Associate",
  "SAS Certified Data Scientist"
];

export const TEAM_MEMBERS = [
  {
    name: "Karim R.",
    role: "Managing Director & Chief Analytics Strategist",
    bio: "20+ years steering data analytics, corporate BI transformations, and AI integration across Canada, the GCC, and Levant.",
    focus: "Strategic Business Intelligence & Enterprise AI"
  },
  {
    name: "Majd K.",
    role: "Lead BI Architect & Product Director",
    bio: "Specialist in enterprise data cubes, Odoo telematics, and predictive healthcare modeling.",
    focus: "Data Pulse & WoodPecker Architecture"
  },
  {
    name: "Sami H.",
    role: "Senior Data Engineer & AI Specialist",
    bio: "Expert in real-time streaming architectures, Snowflake pipelines, and Agentic AI workflows.",
    focus: "Data Pipelines & Intellix Core"
  },
  {
    name: "Nour M.",
    role: "Commercial Analytics Lead",
    bio: "Focuses on FMCG retail audits, promotion ROI analytics, and supply chain telemetry.",
    focus: "Sales Logic & Procurement Intelligence"
  }
];

export const NEWS_ARTICLES = [
  {
    id: 1,
    category: "AI & Telematics",
    title: "How Agentic AI Is Transforming Modern ERP Decision Making",
    date: "September 2026",
    readTime: "4 min read",
    snippet: "Discover how autonomous AI agents are moving beyond passive chart dashboards to execute intelligent operational recommendations directly inside enterprise workflows.",
    content: "Enterprise resource planning systems have long served as the transactional backbone of global commerce. However, the true value of an ERP is only realized when paired with continuous analytical intelligence. With RAK Analytics' Agentic AI, organizations can now automate routine operational inquiries, receive instant predictive anomaly notifications, and synchronize cross-departmental ledger entries with zero human lag."
  },
  {
    id: 2,
    category: "Healthcare Analytics",
    title: "Mastering IQVIA Data: Overcoming Pharmaceutical Commercial Bottlenecks",
    date: "August 2026",
    readTime: "6 min read",
    snippet: "A deep dive into how WoodPecker Pharma Analytics bridges raw prescription brick data with doctor segmentation and territory sales execution.",
    content: "Navigating pharmaceutical sales requires rapid adaptability to market shifts. By processing IQVIA audit datasets through WoodPecker's predictive engine, pharmaceutical leaders gain unprecedented visibility into therapeutic class market shares, prescription trends, and rep territory productivity."
  },
  {
    id: 3,
    category: "Procurement & Cost Reduction",
    title: "Unlocking 15% Cost Reductions with Automated Spend Cube Analysis",
    date: "July 2026",
    readTime: "5 min read",
    snippet: "Why modern procurement leaders are retiring static spreadsheet audits in favor of continuous spend intelligence and automated rogue purchasing detection.",
    content: "Contract compliance and supplier price consistency represent high-yield opportunities for operational cash savings. Through ProcureVision's unified spend analytics, enterprises can instantly audit invoice line items against contracted price lists and identify volume consolidation discounts across subsidiaries."
  }
];
