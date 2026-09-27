export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectData {
  n: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  stat: string;
  statLabel: string;
  desc: string;
  overview: string;
  problemSolved: string;
  repoLink: string;
  demoLink?: string;
  timeline: string;
  role: string;
  highlights: string[];
  features: ProjectFeature[];
  techStack: {
    frontend: string[];
    backend?: string[];
    database?: string[];
    tools: string[];
  };
  architectureNotes: string;
}

export const PROJECTS: ProjectData[] = [
  {
    n: "01",
    slug: "krishi-cart",
    title: "Krishi-Cart",
    tagline: "Empowering agricultural trade through a direct farmer-to-buyer digital marketplace.",
    category: "Full Stack & Agri-Tech Platform",
    stat: "Full Stack",
    statLabel: "Application",
    desc: "A full-stack platform integrating frontend, backend services, and machine-learning capabilities.",
    overview:
      "Krishi-Cart is a specialized agricultural marketplace web platform designed to streamline the buying and selling of farming produce, seeds, and equipment. By providing transparent listing and catalog management, the platform directly connects agricultural producers with consumers and retail buyers, cutting out unnecessary intermediary fees and enhancing rural commerce.",
    problemSolved:
      "In traditional agricultural supply chains, farmers frequently face price exploitation by middlemen, lack of price transparency, and limited direct reach to urban consumers. Krishi-Cart creates an open digital ecosystem with direct product visibility, fair pricing representations, and seamless inventory management for local farming communities.",
    repoLink: "https://github.com/AADITYABAGDE2007/Krishi-Cart",
    demoLink: "https://github.com/AADITYABAGDE2007/Krishi-Cart",
    timeline: "2025 — Present",
    role: "Full-Stack Developer",
    highlights: [
      "Engineered end-to-end user journeys for both sellers (farmers) and buyers with modern responsive UI.",
      "Structured modular backend endpoints for handling produce categories, pricing, and order lifecycles.",
      "Designed data models accommodating future integration of AI-driven crop price recommendation models.",
      "Optimized client-side rendering with Tailwind CSS ensuring fast performance even on low-bandwidth rural networks."
    ],
    features: [
      {
        title: "Produce & Crop Catalog",
        description: "Comprehensive product listing with categories, unit pricing, harvest details, and stock availability."
      },
      {
        title: "Direct Cart & Ordering",
        description: "Streamlined order placement workflow with transparent cost calculation and buyer order summaries."
      },
      {
        title: "Role-Based Navigation",
        description: "Custom interfaces catering to agricultural sellers managing inventory and customers searching for fresh produce."
      },
      {
        title: "Scalable Architecture",
        description: "Modular separation of frontend presentation, API service layers, and relational data persistence."
      }
    ],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3"],
      backend: ["Python", "FastAPI / Flask", "RESTful APIs"],
      database: ["SQLite / MySQL"],
      tools: ["Git", "GitHub", "Postman", "Responsive Web Design"]
    },
    architectureNotes:
      "Built with a component-driven architecture on the frontend coupled with structured REST endpoints. Designed with loose coupling to permit easy integration of machine learning price forecasting pipelines."
  },
  {
    n: "02",
    slug: "translator",
    title: "Translator",
    tagline: "Instant, low-latency multi-language translation powered by modern API integrations.",
    category: "API Integration & Web Utility",
    stat: "API Integration",
    statLabel: "Web Application",
    desc: "A multi-language translation application powered by React, Axios, and Rapid API.",
    overview:
      "A fast, distraction-free language translation application engineered for instant multi-language text conversion. Powered by React and external translation APIs through Rapid API, this tool enables users to switch dialects, copy output with a single click, and maintain active conversation workflows across language barriers.",
    problemSolved:
      "Many existing translation portals are weighed down by heavy ads, complex multi-screen navigation, and slow client-side execution. Translator delivers an ultra-clean, minimal utility that prioritizes speed, high usability, and accurate translations across major global languages.",
    repoLink: "https://github.com/AADITYABAGDE2007/Translator",
    demoLink: "https://github.com/AADITYABAGDE2007/Translator",
    timeline: "2026",
    role: "Frontend & API Integration Developer",
    highlights: [
      "Integrated Rapid API translation endpoints with Axios interceptors for low response latency.",
      "Designed instant language switching with automated state updates and error handling for network dropouts.",
      "Added single-tap clipboard copy, character count tracking, and input clearing utilities.",
      "Created an intuitive, dark-mode focused UI that maintains high contrast and readability."
    ],
    features: [
      {
        title: "Multi-Language Engine",
        description: "Seamless translation between dozens of global languages with real-time text parsing."
      },
      {
        title: "Quick-Action Utilities",
        description: "One-click copy to clipboard, clear canvas, and instantaneous input/output language reversal."
      },
      {
        title: "Network Resiliency",
        description: "Graceful error fallbacks and user alerts when API quotas or internet connectivity fluctuate."
      },
      {
        title: "Lightweight Footprint",
        description: "Minimal bundle size with zero bulky third-party dependencies, guaranteeing fast load times."
      }
    ],
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "Axios", "React Router DOM", "JavaScript (ES6+)"],
      backend: ["Rapid API Translation Endpoints", "REST API Architecture"],
      tools: ["Git", "GitHub", "Vite / Webpack", "Postman"]
    },
    architectureNotes:
      "Utilizes asynchronous REST API communication with structured Axios instances, managing state efficiently via React Hooks with zero unnecessary re-renders."
  },
  {
    n: "03",
    slug: "expense-tracker",
    title: "Expense Tracker",
    tagline: "Personal finance and expenditure intelligence with instant visual breakdowns.",
    category: "Personal Finance & Analytics",
    stat: "React + Vite",
    statLabel: "Web Application",
    desc: "A responsive expense management application designed for tracking and organizing personal finances.",
    overview:
      "A responsive, client-side personal finance web application built with React and Vite. It helps individuals take control of their financial health by recording income and expenditures, categorizing spend streams, and calculating running balances dynamically in real time.",
    problemSolved:
      "Maintaining financial discipline is challenging when budgeting tools require cumbersome spreadsheet updates or invasive banking account access. Expense Tracker provides an intuitive, private, zero-friction ledger that lets users log transactions in seconds and immediately view financial status.",
    repoLink: "https://github.com/AADITYABAGDE2007/Expense-Tracker-app",
    demoLink: "https://github.com/AADITYABAGDE2007/Expense-Tracker-app",
    timeline: "2025",
    role: "Frontend Developer",
    highlights: [
      "Developed reactive transaction ledger with real-time balance, credit, and debit summaries.",
      "Implemented categorized expense labeling (Food, Travel, Bills, Education) for spend visibility.",
      "Persisted transaction history via HTML5 LocalStorage ensuring data integrity across page refreshes.",
      "Optimized Vite build pipeline for lightning-fast hot module reloading and sub-second asset compilation."
    ],
    features: [
      {
        title: "Real-Time Balance Calculation",
        description: "Dynamic ledger updates balance, total income, and total expenses with every transaction added or deleted."
      },
      {
        title: "Categorization & Tagging",
        description: "Classify transactions by custom categories to understand spending patterns and budgetary leaks."
      },
      {
        title: "Local State Persistence",
        description: "All records are securely saved on the client device without requiring cloud accounts or remote servers."
      },
      {
        title: "Responsive Mobile Interface",
        description: "Crafted for effortless thumb-driven usage on smartphones for logging expenses on the go."
      }
    ],
    techStack: {
      frontend: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5"],
      backend: ["Client-Side State Engine", "REST API Ready"],
      database: ["Browser LocalStorage API"],
      tools: ["Git", "GitHub", "ESLint", "Node.js"]
    },
    architectureNotes:
      "Engineered with clean React state management, unidirectional data flow, and synchronous LocalStorage sync hooks for zero-latency persistence."
  },
  {
    n: "04",
    slug: "lost-and-found",
    title: "Lost & Found",
    tagline: "Digital campus recovery portal connecting lost personal items with rightful owners.",
    category: "Community & Institutional Portal",
    stat: "Flask + SQLite",
    statLabel: "Web Application",
    desc: "A web-based lost-and-found system for managing item submissions and search functionality.",
    overview:
      "A web application built with Python (Flask) and SQLite to replace chaotic physical notice boards and scattered social media posts with an organized, searchable lost-and-found database for college campuses and community centers.",
    problemSolved:
      "When personal items like ID cards, keys, textbooks, or electronics are misplaced in institutional environments, recovering them is usually slow and uncoordinated. Lost & Found centralizes reports with timestamps, item specifications, and contact protocols to maximize return rates.",
    repoLink: "https://github.com/AADITYABAGDE2007/lost-and-found",
    demoLink: "https://github.com/AADITYABAGDE2007/lost-and-found",
    timeline: "2025",
    role: "Backend & Database Developer",
    highlights: [
      "Architected relational SQLite database schema handling item metadata, status tags, and user entries.",
      "Built clean Flask server routes handling item posting, status tracking (Open / Claimed / Resolved), and search queries.",
      "Integrated filtering mechanisms to query listings by date, category, and campus location.",
      "Designed defensive validation on form submissions to prevent duplicate reports and malformed input."
    ],
    features: [
      {
        title: "Dual Report System",
        description: "Dedicated workflows for reporting a misplaced item or registering a discovered belonging."
      },
      {
        title: "Search & Attribute Filtering",
        description: "Quickly locate items by keywords, category tags, campus zones, and date ranges."
      },
      {
        title: "Lifecycle Status Management",
        description: "Items transition through status cycles (Active, Under Claim, Returned) to keep the repository fresh."
      },
      {
        title: "Lightweight Server Footprint",
        description: "Built with Python/Flask microframework for zero bloated runtime overhead and simple local deployment."
      }
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap / Responsive Layouts"],
      backend: ["Python", "Flask", "Jinja2 Templates"],
      database: ["SQLite3"],
      tools: ["Git", "GitHub", "Python Virtualenv"]
    },
    architectureNotes:
      "Model-View-Controller (MVC) architectural pattern in Flask with SQLite relational mapping and RESTful route dispatchers."
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
