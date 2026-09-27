export interface ExperienceItem {
  slug: string;
  role: string;
  company: string;
  date: string;
  badge: string;
  location: string;
  tagline: string;
  certificateUrl: string;
  certificateId?: string;
  certificateIssuer: string;
  overview: string;
  keyContributions: string[];
  impactMetrics: { label: string; value: string; desc: string }[];
  techStack: {
    core: string[];
    practices: string[];
    tools: string[];
  };
  techString: string;
  bullets: string[];
}

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    slug: "happieloop-ml-internship",
    role: "Machine Learning Intern",
    company: "Happieloop Technologies",
    date: "May 2026 — Jun 2026",
    badge: "Verified Industry Internship",
    location: "Remote / Hybrid",
    tagline: "Building structured data-cleaning pipelines and accelerating classification model training cycles.",
    certificateUrl: "/certificates/happieloop-ml-internship.pdf",
    certificateIssuer: "Happieloop Technologies",
    overview:
      "During my internship at Happieloop Technologies as a Machine Learning Intern, I was responsible for engineering clean data pipelines and evaluating predictive machine learning models. I focused on data preprocessing, anomaly mitigation, and building reproducible classification workflows using Python, Pandas, NumPy, and Scikit-learn.",
    bullets: [
      "Increased model reliability by building structured data-cleaning pipelines in Python (Pandas/NumPy).",
      "Improved model iteration speed by developing and evaluating classification models with Scikit-learn following standard ML workflows.",
    ],
    techString: "PYTHON, PANDAS, NUMPY, SCIKIT-LEARN",
    keyContributions: [
      "Engineered automated data-cleaning scripts in Python using Pandas and NumPy, eliminating missing values, formatting anomalies, and duplicate records across datasets.",
      "Trained, benchmarked, and tuned supervised classification models with Scikit-learn, adhering to industry-standard cross-validation workflows.",
      "Accelerated experimentation velocity and train/test iteration speed by modularizing feature engineering routines.",
      "Analyzed confusion matrices and performance metrics (Precision, Recall, F1-Score) to ensure reliable model predictions prior to staging."
    ],
    impactMetrics: [
      {
        label: "Data Quality",
        value: "99%+",
        desc: "Eliminated dataset anomalies and missing entries through automated Pandas validation pipelines."
      },
      {
        label: "Iteration Speed",
        value: "Faster Cycles",
        desc: "Modular script structures reduced train/test iteration and hyperparameter tuning setup time."
      },
      {
        label: "Stack Depth",
        value: "Python & ML",
        desc: "Hands-on implementation of Scikit-learn, Pandas, and NumPy in real industry workflows."
      }
    ],
    techStack: {
      core: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      practices: ["Data Cleaning", "Feature Engineering", "Classification Modeling", "Cross-Validation", "Model Evaluation"],
      tools: ["Git", "GitHub", "Jupyter Notebook", "VS Code"]
    }
  },
  {
    slug: "qskill-frontend-internship",
    role: "Front-End Development Intern",
    company: "Qskill Program, SR INDIA",
    date: "Jan 2026 — Feb 2026",
    badge: "Verified Industry Internship",
    location: "Remote / SR INDIA",
    tagline: "Optimizing responsive web interfaces, cutting client latency by ~30%, and integrating RESTful endpoints.",
    certificateUrl: "/certificates/qskill-frontend-internship.pdf",
    certificateId: "qsfnwd202601846",
    certificateIssuer: "SR INDIA / Qskill Program",
    overview:
      "At the Qskill Program by SR INDIA, I worked as a Front-End Development Intern modernizing web applications and optimizing user experiences. I spearheaded UI performance overhauls using React.js and Tailwind CSS, implemented structured REST API communication with Axios interceptors, and accelerated bug resolution turnaround in active agile sprints.",
    bullets: [
      "Improved cross-device load performance by ~30% using React.js and Tailwind CSS.",
      "Optimized client-side API data fetching and state caching with Axios interceptors, reducing perceived latency by ~15%.",
      "Strengthened debugging accuracy and turnaround time in live sprints.",
    ],
    techString: "REACT.JS, TAILWIND CSS, AXIOS",
    keyContributions: [
      "Re-architected legacy web components into modular, reusable React.js components styled with Tailwind CSS, achieving a ~30% improvement in cross-device load responsiveness.",
      "Optimized client-side API communication using Axios interceptors and React Router, minimizing redundant network requests and cutting perceived response latency by ~15%.",
      "Conducted systematic root-cause debugging during live client sprint cycles, accelerating issue resolution and QA sign-offs.",
      "Ensured pixel-perfect responsiveness across mobile, tablet, and widescreen breakpoints with modern utility-first CSS."
    ],
    impactMetrics: [
      {
        label: "Load Performance",
        value: "~30% Faster",
        desc: "Audited via Chrome DevTools Network throttling & Lighthouse metrics after implementing lazy-loading and dynamic imports."
      },
      {
        label: "API Latency",
        value: "~15% Quicker",
        desc: "Reduced redundant roundtrips via Axios request/response interceptors and optimized client-side state caching."
      },
      {
        label: "Certificate ID",
        value: "qsfnwd202601846",
        desc: "Officially registered and verifiable internship credential issued by SR INDIA."
      }
    ],
    techStack: {
      core: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Axios", "HTML5 / CSS3"],
      practices: ["Component Architecture", "REST API Integration", "Performance Profiling", "Responsive UI", "Agile Sprints"],
      tools: ["Git", "GitHub", "Vite", "Postman", "Chrome DevTools"]
    }
  }
];

export function getExperienceBySlug(slug: string): ExperienceItem | undefined {
  return EXPERIENCES_DATA.find((item) => item.slug.toLowerCase() === slug.toLowerCase());
}
