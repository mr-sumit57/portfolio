export type PublicationType = "journal" | "conference" | "book" | "preprint";

export interface Profile {
  name: string;
  title: string;
  department: string;
  university: string;
  email: string;
  office: string;
  phone: string;
  tagline: string;
  bio: string;
  image: string;
  cvUrl: string;
  links: { label: string; url: string; icon: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  detail?: string;
}

export interface ResearchArea {
  title: string;
  description: string;
  tags: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: PublicationType;
  doi?: string;
  url?: string;
  featured?: boolean;
}

export interface Course {
  code: string;
  title: string;
  term: string;
  level: string;
  description: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: "award" | "publication" | "grant" | "talk" | "service";
}

export interface LabMember {
  name: string;
  role: string;
  focus: string;
  image?: string;
}

export interface Grant {
  title: string;
  agency: string;
  amount: string;
  period: string;
  role: string;
}

export const profile: Profile = {
  name: "Mr. Sumit Kumar",
  title: "Research Cum Teaching Fellow",
  department: "Department of Information Technology & Computer Application",
  university: "Madan Mohan Malaviya University of Technology",
  email: "mr.sumitmg@gmail.com",
  office: "Department of ITCA, Madan Mohan Malaviya University of Technology, Gorakhpur",
  phone: "+91 9454054893",
  tagline:
    "Building trustworthy machine learning systems for healthcare, climate science, and public policy.",
  bio: `SUMIT KUMAR received the B.Tech. degree in Computer Engineering from Babasaheb Bhimrao Ambedkar University (A Central University), Lucknow, Uttar Pradesh, India, and the M.Tech. degree in Information Technology from Madan Mohan Malaviya University of Technology, Gorakhpur, Uttar Pradesh, India. He is currently pursuing the Ph.D. degree in Information Technology from Madan Mohan Malaviya University of Technology, Gorakhpur, Uttar Pradesh, India.
 His research focuses on the design, analysis, and optimization of modern communication networks, with particular interest in network performance, security, and emerging networking technologies.`,
  image:
    "./sp1.jpg",
  cvUrl: "./SumitCV.pdf",
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=MDPDw3QAAAAJ&hl=en", icon: "scholar" },
    { label: "ORCID", url: "https://orcid.org/0009-0009-4122-1743", icon: "orcid" },
    { label: "GitHub", url: "https://mr-sumit57", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mr-sumit57/", icon: "linkedin" },
    //{ label: "Twitter / X", url: "https://twitter.com", icon: "twitter" },
  ],
};

export const education: Education[] = [
  {
    degree: "Ph.D.(Pursuing) in Information Technology",
    institution: "Madan Mohan Malaviya University of Technology",
    year: "2027",
    detail: "Thesis: Development of a Secure and Reliable Network Protocol for IoT Devices",
  },
  {
    degree: "M. Tech. in Information Technology",
    institution: "Madan Mohan Malaviya University of Technology",
    year: "2023",
  },
  {
    degree: "B.Tech. in Computer Engineering",
    institution: "Babasaheb Bhimrao Ambedkar University",
    year: "2021",
  },
];

export const researchAreas: ResearchArea[] = [
  {
    title: "Trustworthy Machine Learning",
    description:
      "Developing calibration, uncertainty quantification, and audit methods so models behave reliably when deployed outside the lab.",
    tags: ["uncertainty", "OOD detection", "fairness"],
  },
  {
    title: "Causal Inference for Policy",
    description:
      "Estimating treatment effects and heterogeneous impacts in observational health and education datasets with transparent assumptions.",
    tags: ["causal ML", "policy", "health"],
  },
  {
    title: "Climate & Environmental ML",
    description:
      "Spatiotemporal forecasting and attribution models for extreme weather, emissions monitoring, and ecosystem health.",
    tags: ["geospatial", "forecasting", "sustainability"],
  },
];

export const publications: Publication[] = [
  {
    id: "p1",
    title: "Certified Robustness under Covariate Shift in Clinical Prediction Models",
    authors: "E.M. Vasquez, J. Park, R. Okonkwo",
    venue: "Journal of Machine Learning Research",
    year: 2025,
    type: "journal",
    doi: "10.5555/jmlr.2025.001",
    featured: true,
  },
  {
    id: "p2",
    title: "Counterfactual Explanations with Actionable Constraints for Fair Lending",
    authors: "E.M. Vasquez, A. Chen, M. Singh",
    venue: "NeurIPS",
    year: 2024,
    type: "conference",
    url: "#",
    featured: true,
  },
  {
    id: "p3",
    title: "Bayesian Deep Ensembles for Drought Forecasting at Sub-Seasonal Horizons",
    authors: "E.M. Vasquez, L. Hartmann, K. Reyes",
    venue: "Nature Climate Change",
    year: 2024,
    type: "journal",
    doi: "10.5555/ncc.2024.042",
  },
  {
    id: "p4",
    title: "Learning Invariant Representations for Multi-Site EHR Cohorts",
    authors: "E.M. Vasquez, S. Li, T. Nguyen",
    venue: "ICML",
    year: 2023,
    type: "conference",
    url: "#",
  },
  {
    id: "p5",
    title: "A Practitioner's Guide to Causal ML in Public Health",
    authors: "E.M. Vasquez, P. Morrison",
    venue: "Cambridge University Press",
    year: 2023,
    type: "book",
    url: "#",
  },
  {
    id: "p6",
    title: "Scalable Doubly Robust Estimators for High-Dimensional Policy Evaluation",
    authors: "E.M. Vasquez, D. Kim",
    venue: "arXiv preprint",
    year: 2025,
    type: "preprint",
    url: "#",
  },
  {
    id: "p7",
    title: "Auditing Algorithmic Risk in Hiring Pipelines: A Field Study",
    authors: "E.M. Vasquez, N. Brooks, F. Al-Rashid",
    venue: "FAccT",
    year: 2022,
    type: "conference",
    url: "#",
  },
  {
    id: "p8",
    title: "Structure Learning with Missing Mechanisms in Longitudinal Studies",
    authors: "E.M. Vasquez, H. Weber",
    venue: "Annals of Applied Statistics",
    year: 2021,
    type: "journal",
    doi: "10.5555/aas.2021.018",
  },
];

export const courses: Course[] = [
  {
    code: "CS 589",
    title: "Trustworthy Machine Learning",
    term: "Spring 2026",
    level: "Graduate",
    description:
      "Theory and practice of robustness, fairness, interpretability, and deployment monitoring.",
  },
  {
    code: "CS 482",
    title: "Statistical Machine Learning",
    term: "Fall 2025",
    level: "Undergraduate / Graduate",
    description:
      "Supervised and unsupervised learning with emphasis on generalization and model selection.",
  },
  {
    code: "CS 691",
    title: "Causal Inference Seminar",
    term: "Spring 2025",
    level: "Graduate Seminar",
    description:
      "Weekly readings on identification, estimation, and ML-assisted causal discovery.",
  },
  {
    code: "CS 101",
    title: "Introduction to Programming for Data Science",
    term: "Fall 2024",
    level: "Undergraduate",
    description:
      "Python fundamentals, data wrangling, and reproducible analysis workflows.",
  },
];

export const news: NewsItem[] = [
  {
    id: "n1",
    date: "2026-04-10",
    title: "NSF CAREER Award for Trustworthy Clinical ML",
    summary:
      "Five-year grant ($650K) to develop certifiable uncertainty methods for multi-site hospital deployments.",
    category: "grant",
  },
  {
    id: "n2",
    date: "2026-03-02",
    title: "Keynote at AAAI Workshop on Responsible AI",
    summary: "Invited talk on actionable counterfactuals and stakeholder-centered evaluation.",
    category: "talk",
  },
  {
    id: "n3",
    date: "2026-01-15",
    title: "JMLR paper on certified robustness accepted",
    summary: "Joint work with Park and Okonkwo on covariate-shift guarantees in clinical models.",
    category: "publication",
  },
  {
    id: "n4",
    date: "2025-11-20",
    title: "Outstanding Mentor Award — Graduate School",
    summary: "Recognized for advising five Ph.D. students and launching the ML reading group.",
    category: "award",
  },
  {
    id: "n5",
    date: "2025-09-01",
    title: "Joined NSF AI Institute advisory board",
    summary: "Two-year term advising on translational research and education pathways.",
    category: "service",
  },
];

export const labMembers: LabMember[] = [
  {
    name: "James Park",
    role: "Ph.D. Student",
    focus: "Certified robustness & clinical ML",
  },
  {
    name: "Priya Sharma",
    role: "Ph.D. Student",
    focus: "Causal discovery under missing data",
  },
  {
    name: "Alex Kim",
    role: "M.S. Student",
    focus: "Geospatial drought forecasting",
  },
  {
    name: "Riley Chen",
    role: "Undergraduate Researcher",
    focus: "Fairness audits in hiring pipelines",
  },
];

export const grants: Grant[] = [
  {
    title: "CAREER: Certifiable Uncertainty for Federated Clinical Models",
    agency: "National Science Foundation",
    amount: "$650,000",
    period: "2026–2031",
    role: "PI",
  },
  {
    title: "Climate-Resilient Agriculture via Sub-Seasonal ML Forecasts",
    agency: "USDA NIFA",
    amount: "$420,000",
    period: "2024–2027",
    role: "Co-PI",
  },
  {
    title: "Algorithmic Accountability in Public Sector Hiring",
    agency: "Ford Foundation",
    amount: "$180,000",
    period: "2023–2025",
    role: "PI",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
  { id: "lab", label: "Lab" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
] as const;
