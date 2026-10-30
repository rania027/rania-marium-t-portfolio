import { Project, SkillItem, CourseworkItem, Certification, LearningGoal } from '../types';

export const PERSONAL_INFO = {
  name: 'Rania Marium T',
  role: 'CSE (AI & ML) Student | Aspiring Software Engineer',
  institution: 'REVA University',
  department: 'School of Computer Science and Engineering (CSE)',
  degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
  duration: '2025 – 2029',
  location: 'Bengaluru, Karnataka, India',
  email: 'raniamariumt@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rania-marium-t-58b254384',
  tagline: 'Bridging algorithmic rigor, machine intelligence, and thoughtful software craft.',
  bioSummary: 'Undergraduate scholar in Computer Science & Engineering specializing in Artificial Intelligence and Machine Learning at REVA University, Bengaluru. Driven by an academic obsession with algorithmic problem-solving, predictive AI architectures, and resilient web software.',
  fullBio: `I am an undergraduate engineer in the School of Computer Science and Engineering (CSE) at REVA University, Bengaluru, pursuing a specialized B.Tech in Artificial Intelligence & Machine Learning (2025–2029).

My academic journey is anchored at the intersection of computational mathematics and pragmatic software engineering. Rather than treating artificial intelligence as a black box, I focus on foundational mechanisms—data structures, discrete algorithms, relational database structures, and applied predictive modeling.

Whether structuring early-warning disaster response pipelines in GeoVision, architecting algorithmic resume parsers, or writing optimized C and Python routines, I adhere to a design philosophy of restraint, structural clarity, and meticulous execution.`
};

export const TECHNICAL_INTERESTS = [
  {
    number: '01',
    title: 'Machine Learning & Predictive Modeling',
    subtitle: 'From mathematical formulations to inference pipelines',
    description: 'Investigating pattern recognition, supervised regression and classification, and sensor-based anomaly detection. Exploring early-warning disaster forecasting and computer vision architectures.',
    tags: ['Supervised Learning', 'Predictive Analysis', 'Geospatial ML', 'Feature Engineering']
  },
  {
    number: '02',
    title: 'Data Structures & Algorithmic Optimization',
    subtitle: 'Space-time efficiency and systematic problem solving',
    description: 'Disciplined pursuit of core algorithmic paradigms—asymptotic analysis, recursive traversal, dynamic programming, and graph theory—practiced systematically through LeetCode and competitive programming.',
    tags: ['Asymptotic Complexity', 'Tree & Graph Traversal', 'Dynamic Programming', 'C & Python Optimization']
  },
  {
    number: '03',
    title: 'Full-Stack Software Architecture',
    subtitle: 'Resilient client interfaces and structured backends',
    description: 'Designing modular web platforms utilizing modern reactive frontends, state machines, and relational schemas. Dedicated to high-contrast accessibility, zero-slop UI, and reproducible builds.',
    tags: ['React & TypeScript', 'Tailwind CSS', 'State Engines', 'API Orchestration']
  },
  {
    number: '04',
    title: 'Relational Database Engineering & DBMS',
    subtitle: 'Data integrity, normalization, and relational algebra',
    description: 'Structuring transactional consistency and relational models with MySQL. Engineering normalized schemas (1NF through 3NF/BCNF), indexing strategies, and optimized query plans for mission-critical portals.',
    tags: ['MySQL', 'Schema Normalization', 'Relational Algebra', 'ACID Transactions']
  },
  {
    number: '05',
    title: 'Geospatial Hazard Systems & Disaster Mitigation',
    subtitle: 'High-stakes early warnings for environmental stability',
    description: 'Conceptualizing early-warning platforms that combine meteorological telemetry, slope elevation profiles, and threshold-based decision models to safeguard vulnerable communities against landslides.',
    tags: ['Telemetry Processing', 'Hazard Mitigation', 'Threshold Alerting', 'Disaster Tech']
  },
  {
    number: '06',
    title: 'Clean Code Hygiene & Developer Tooling',
    subtitle: 'Reproducibility, version control, and Unix philosophies',
    description: 'Rigorous version control workflows with Git and GitHub, modern developer environments in VS Code and Antigravity, and automated deployment architectures on Vercel.',
    tags: ['Git Version Control', 'VS Code', 'Antigravity', 'Vercel Deployment']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'geovision-geoshield',
    number: '01',
    title: 'GeoVision / GeoShield-NER',
    shortTitle: 'GeoVision / GeoShield-NER',
    category: 'AI & ML',
    subtitle: 'AI-driven disaster management and early-warning concept for landslide monitoring and hazard alerts.',
    description: 'An AI-driven environmental safety system designed to monitor mountainous and landslide-prone topography. Synthesizes precipitation thresholds, soil saturation telemetry, and slope gradient metrics into real-time hazard severity indices and automated early alerts.',
    fullOverview: 'GeoVision (GeoShield-NER) represents an applied AI and sensor-fusion architectural proposal for disaster mitigation. Built to address high-risk terrain instability in vulnerable highland zones, the system evaluates dynamic environmental conditions—such as cumulative rainfall, soil volumetric moisture, and incline angles—to produce calculated risk indices (Low, Elevated, Critical) and instant community warning alerts.',
    problemStatement: 'Unmonitored slope destabilization leads to catastrophic flash landslides with zero lead time for community evacuation. Traditional manual surveys are slow, perilous, and unable to process continuous sensor telemetry in real time.',
    keyFeatures: [
      'Multi-factor hazard computation model incorporating rainfall intensity, soil pore-water pressure, and slope gradient.',
      'Tiered early-warning alert engine (Advisory, Watch, Warning, Evacuate) with simulated dispatch logic.',
      'Geospatial terrain risk mapping dashboard with sensor node telemetry visualization.',
      'Offline-resilient alert synthesis architecture designed for bandwidth-constrained rural highlands.'
    ],
    techStack: ['Python', 'Machine Learning', 'Geospatial Data Modeling', 'Tailwind CSS', 'React', 'HTML5/CSS3'],
    architectureNotes: 'Layered architecture: Sensor Telemetry Layer -> Algorithmic Feature Normalization -> Predictive Hazard Classification Engine -> Interactive Geospatial Monitoring Surface.',
    metrics: [
      { label: 'Hazard Scoring Index', value: '0 – 100 Scale' },
      { label: 'Evaluation Metrics', value: 'Rainfall, Pore Pressure, Gradient' },
      { label: 'Response Target', value: '< 1.5s Alert Dispatch' }
    ],
    tags: ['AI & ML', 'Disaster Mitigation', 'Python', 'Environmental AI', 'Early Warning']
  },
  {
    id: 'smart-resume-portfolio',
    number: '02',
    title: 'Smart Resume & Portfolio Builder',
    shortTitle: 'Smart Resume Builder',
    category: 'Full-Stack',
    subtitle: 'AI-assisted resume and portfolio creation with live previews and ATS-friendly exports.',
    description: 'An intelligent career document preparation suite that analyzes resume copy against industry ATS (Applicant Tracking System) benchmarks, calculates keyword alignment scores, and provides dual-pane real-time previews for elegant portfolio exports.',
    fullOverview: 'Engineered to assist developers and students in structuring clear, impact-driven resumes that bypass automated algorithmic parsing bottlenecks. Features dynamic markdown formatting, instant keyword density analytics, ATS readability scoring, and print-ready typesetting.',
    problemStatement: 'Job-seeking students frequently struggle with parsing errors caused by non-standard formatting, missing semantic headings, and poor keyword density, resulting in unmerited automatic ATS rejection.',
    keyFeatures: [
      'Real-time ATS compatibility scoring engine evaluating formatting, action-verb density, and role-specific keywords.',
      'Synchronized dual-pane interface: interactive structured input editor on the left with live typographic folio rendering on the right.',
      'Export support for clean, standardized ATS-friendly layout formats.',
      'Modular section builder for Education, Technical Projects, Skills, and Coursework.'
    ],
    techStack: ['JavaScript', 'React', 'Tailwind CSS', 'JSON Schema', 'Local Storage'],
    metrics: [
      { label: 'ATS Parsing Accuracy', value: '98%+ Semantic Cleanliness' },
      { label: 'Preview Latency', value: 'Instant (< 16ms)' },
      { label: 'Template Type', value: 'Editorial Scholarly & Clean ATS' }
    ],
    tags: ['Full-Stack', 'ATS Optimization', 'React', 'Tailwind CSS', 'Developer Productivity']
  },
  {
    id: 'train-ticket-portal',
    number: '03',
    title: 'Train Ticket Management Portal',
    shortTitle: 'Train Ticket Portal',
    category: 'Systems & Core',
    subtitle: 'Interactive route browsing, reservations, and form validation.',
    description: 'A comprehensive railway booking and scheduling system featuring interactive station-to-station route discovery, coach quota validation, live seat allocation matrices, and rigorous multi-stage transaction verification.',
    fullOverview: 'Built to demonstrate solid understanding of relational data integrity and stateful user interaction. The platform simulates real-time train schedule lookups, coach class categorization (Sleeper, AC Chair, First Class), passenger quota allocation, and PNR verification.',
    problemStatement: 'Railway booking interfaces are notoriously prone to concurrency contention, confusing booking hierarchies, and disjointed validation pipelines.',
    keyFeatures: [
      'Route discovery engine supporting dynamic origin, destination, departure date, and class filters.',
      'Interactive visual coach seat selector with real-time availability updates.',
      'Strict client-side and relational schema validation preventing invalid passenger data and quota oversubscription.',
      'Instant digital PNR confirmation summary with ticket status verification.'
    ],
    techStack: ['SQL / MySQL Schema', 'JavaScript', 'HTML5', 'CSS3', 'State Engine'],
    metrics: [
      { label: 'Schema Model', value: 'Relational 3NF DBMS' },
      { label: 'Validation Rules', value: 'Client + Schema Constraints' },
      { label: 'Ticket Verification', value: 'PNR 10-Digit Engine' }
    ],
    tags: ['DBMS (MySQL)', 'JavaScript', 'Form Validation', 'Relational Schemas', 'Systems']
  },
  {
    id: 'travel-exploration-hub',
    number: '04',
    title: 'Travel Exploration Hub',
    shortTitle: 'Travel Exploration Hub',
    category: 'Full-Stack',
    subtitle: 'Responsive travel discovery interface.',
    description: 'An immersive, responsive destination exploration interface designed to showcase global travel itineraries, geographic highlights, seasonal recommendations, and custom trip cost estimators.',
    fullOverview: 'A masterclass in modern CSS layout techniques and responsive user experience. Features curated travel destinations categorized by travel style (Cultural, Wilderness, Architectural, Coastal), dynamic budget estimators, and interactive itinerary builders.',
    problemStatement: 'Travel portals are often cluttered with excessive advertisements and broken layouts on mobile screens, hindering seamless exploration and trip curation.',
    keyFeatures: [
      'Adaptive 12-column to mobile grid system with fluid typography and zero layout shift.',
      'Interactive destination filtering by continent, budget tier, climate, and activity profile.',
      'Dynamic day-by-day itinerary view with travel checklists and essential packing guides.',
      'Lightweight client-side bookmarking for saving preferred expedition destinations.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive UI Patterns'],
    metrics: [
      { label: 'Mobile Responsiveness', value: '100% Fluid Breakpoints' },
      { label: 'Filter Speed', value: 'Instant Local Indexing' },
      { label: 'Layout Architecture', value: 'Fluid CSS Grid & Flexbox' }
    ],
    tags: ['Responsive Design', 'HTML5/CSS3', 'JavaScript', 'Tailwind CSS', 'UI/UX']
  },
  {
    id: 'developer-portfolio',
    number: '05',
    title: 'Personal Developer Portfolio',
    shortTitle: 'Developer Portfolio',
    category: 'Systems & Core',
    subtitle: 'Minimalist sage-and-ivory portfolio.',
    description: 'A bespoke personal portfolio engineered with scholarly restraint, academic editorial typography (EB Garamond & Geist), muted natural tones (ivory, linen, olive, sage, terracotta), and accessible responsive design.',
    fullOverview: 'The digital folio you are currently viewing. Inspired by historical scientific journals, Renaissance architectural folios, and classical typography, this portfolio demonstrates that software engineering presentation can achieve intellectual gravitas without corporate tech cliches or generic dark-mode templates.',
    problemStatement: 'Modern developer portfolios suffer from homogenized templates, high-saturation neon colors, bloated dependencies, and illegible contrast that fail to communicate scholarly dedication.',
    keyFeatures: [
      'Atelier Scholastica aesthetic: warm ivory (#F7F5EF), soft linen (#EEEAE0), deep olive (#35483B), muted sage (#A8B5A0), and terracotta (#C58F78).',
      'Classical serif display typography in EB Garamond balanced with high-legibility Geist sans-serif for technical data.',
      'Keyboard-accessible interactive elements, seamless hash navigation, and mobile drawer.',
      'Structured technical exhibits with live interactive demos for all featured projects.'
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite'],
    metrics: [
      { label: 'Design System', value: 'Atelier Scholastica' },
      { label: 'Accessibility', value: 'High Contrast & WCAG AA' },
      { label: 'Color Space', value: 'Ivory, Linen, Olive, Sage' }
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Editorial Design', 'Atelier Scholastica']
  }
];

export const SKILLS: SkillItem[] = [
  // Languages
  {
    name: 'Python',
    level: 'Advanced Coursework & Applied ML',
    category: 'Languages',
    context: 'Primary language for machine learning concepts, algorithmic problem solving, scripting, and OOP. Certified via IBM.'
  },
  {
    name: 'C',
    level: 'Core Algorithmic Foundations',
    category: 'Languages',
    context: 'Low-level memory management, pointer manipulation, and foundational Data Structures & Algorithms implementation.'
  },
  {
    name: 'JavaScript',
    level: 'Proficient Interactive Web',
    category: 'Languages',
    context: 'Dynamic DOM manipulation, asynchronous programming, modern ES6+ standards, and event-driven web applications.'
  },
  {
    name: 'SQL / MySQL',
    level: 'Relational Schema & DBMS',
    category: 'Languages',
    context: 'Structured queries, relational schema normalization (1NF–3NF), primary/foreign key constraints, and transactional consistency.'
  },
  {
    name: 'HTML5',
    level: 'Semantic Web Standards',
    category: 'Languages',
    context: 'Accessible document structures, semantic landmark tags, forms with native validation, and SEO best practices.'
  },
  {
    name: 'CSS3',
    level: 'Modern Layouts & Typography',
    category: 'Languages',
    context: 'CSS Grid, Flexbox, custom properties, fluid typographic clamps, print stylesheets, and responsive media queries.'
  },

  // Tools & Environment
  {
    name: 'VS Code',
    level: 'Primary IDE & Development Hub',
    category: 'Tools & Environment',
    context: 'Customized development workflow with linters, debugger integration, and workspace configuration.'
  },
  {
    name: 'Git',
    level: 'Version Control & Branching',
    category: 'Tools & Environment',
    context: 'Branch management, semantic commit history, conflict resolution, and distributed collaboration workflows.'
  },
  {
    name: 'GitHub',
    level: 'Code Collaboration & Repositories',
    category: 'Tools & Environment',
    context: 'Repository hosting, project tracking, documentation authoring, and CI/CD integration.'
  },
  {
    name: 'Antigravity',
    level: 'AI-Native Development Environment',
    category: 'Tools & Environment',
    context: 'Next-generation agentic workflows, prompt engineering, and intelligent application prototyping.'
  },

  // Frameworks & Modern Web
  {
    name: 'Tailwind CSS',
    level: 'Modern Utility-First Styling',
    category: 'Frameworks & Web',
    context: 'Design system implementation, tokenized color palettes, responsive layouts, and zero-runtime CSS optimization.'
  },
  {
    name: 'React',
    level: 'Component-Driven Architecture',
    category: 'Frameworks & Web',
    context: 'Functional components, hooks state management, virtual DOM reconciliation, and interactive single-page applications.'
  },
  {
    name: 'Vercel',
    level: 'Cloud Deployment & Edge CDN',
    category: 'Frameworks & Web',
    context: 'Continuous integration, branch preview deployments, and global edge hosting.'
  },
  {
    name: 'Supabase',
    level: 'Postgres & Backend Services',
    category: 'Frameworks & Web',
    context: 'Exploration of relational database cloud hosting, real-time subscriptions, and auth integration.'
  }
];

export const EDUCATION_DATA = {
  institution: 'REVA University',
  campus: 'Bengaluru, Karnataka, India',
  school: 'School of Computer Science and Engineering (CSE)',
  degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
  specialization: 'Artificial Intelligence & Machine Learning (AI & ML)',
  duration: '2025 – 2029',
  status: 'In Progress (Undergraduate Scholar)',
  coursework: [
    {
      title: 'Data Structures & Algorithms',
      focus: 'Computational Complexity & Storage',
      topics: ['Arrays & Linked Lists', 'Stacks & Queues', 'Trees & Binary Search', 'Sorting & Search Efficiency', 'Time & Space Complexity']
    },
    {
      title: 'Database Management Systems (MySQL)',
      focus: 'Relational Schemas & Integrity',
      topics: ['Relational Algebra', 'SQL Queries & Joins', 'Schema Normalization (1NF–BCNF)', 'Transaction Management & ACID', 'ER Modeling']
    },
    {
      title: 'Object-Oriented Programming (Python)',
      focus: 'Encapsulation & Modular Code',
      topics: ['Classes & Inheritance', 'Polymorphism', 'Data Abstraction', 'Exception Handling', 'Standard Library & File I/O']
    },
    {
      title: 'Discrete Mathematics',
      focus: 'Theoretical Foundations of Computing',
      topics: ['Propositional Logic', 'Set Theory & Relations', 'Graph Theory', 'Combinatorics', 'Boolean Algebra & Proofs']
    },
    {
      title: 'Web Development',
      focus: 'Client Architecture & Standards',
      topics: ['HTML5 Semantics', 'CSS3 Layout Engines', 'JavaScript Event Loop', 'DOM Manipulation', 'Responsive Web Principles']
    }
  ] as CourseworkItem[],
  studioCourse: {
    title: 'Portfolio Building Studio',
    offeredBy: 'School of Computer Science and Engineering (CSE), REVA University',
    description: 'An intensive academic studio course focused on translating engineering artifacts, algorithmic competence, and domain knowledge into industry-grade developer representations.',
    outcomes: ['Engineering documentation hygiene', 'System architecture articulation', 'ATS-compliant resume design', 'Curated project case studies']
  }
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'IBM Certification in Programming using Python',
    issuer: 'IBM',
    date: 'Credential Verified',
    description: 'Comprehensive certification verifying rigorous mastery in Python syntax, data structures, functional paradigms, object-oriented concepts, and computational problem solving.',
    credentialTag: 'Verified Academic Credential',
    skillsAcquired: ['Python 3 Core', 'Algorithmic Logic', 'Data Structures', 'OOP Implementation', 'File Processing']
  },
  {
    title: "IDEATE'BLR AWS Hackathon",
    issuer: 'AWS & Bengaluru Innovation Ecosystem',
    date: 'Hackathon Innovation Sprint',
    description: 'Intensive collaborative technical sprint focused on ideating, architecting, and prototyping cloud-enabled technological solutions addressing high-impact municipal and societal challenges.',
    credentialTag: 'Innovation & Hackathon Credential',
    skillsAcquired: ['Cloud Solution Architecture', 'Rapid Prototyping', 'Team Collaboration', 'Problem Formulation', 'Technical Pitching']
  }
];

export const LEARNING_GOALS: LearningGoal[] = [
  {
    id: 'dsa-mastery',
    title: 'DSA Mastery through LeetCode',
    target: 'Systematic Problem Solving in C & Python',
    status: 'Active Daily',
    progress: 68,
    description: 'Daily practice covering fundamental and advanced data structures—arrays, two-pointer techniques, sliding window, binary trees, graphs, and dynamic programming—to develop intuition for optimal time and space tradeoffs.',
    milestones: [
      { name: 'Core Arrays, Strings & Hashing Patterns', completed: true },
      { name: 'Linked Lists, Stacks, & Queues Foundations', completed: true },
      { name: 'Binary Trees & Graph BFS/DFS Traversals', completed: false },
      { name: 'Dynamic Programming & Memoization Patterns', completed: false }
    ],
    keyDisciplines: ['LeetCode', 'C Language', 'Python', 'Asymptotic Big-O Analysis']
  },
  {
    id: 'ai-integration',
    title: 'AI Integration in Production Systems',
    target: 'Applied Machine Learning & Real-World Pipelines',
    status: 'In Progress',
    progress: 54,
    description: 'Moving beyond purely theoretical model code toward embedding machine learning inference, computer vision models, and natural language scoring into practical, production-ready web user interfaces.',
    milestones: [
      { name: 'Supervised Learning & Regression Fundamentals', completed: true },
      { name: 'Sensor Telemetry Classification (GeoVision Concept)', completed: true },
      { name: 'Model Evaluation, Confusion Matrices & ROC Curves', completed: false },
      { name: 'Lightweight Inference via Client & Server APIs', completed: false }
    ],
    keyDisciplines: ['Machine Learning', 'Computer Vision', 'Model Evaluation', 'Sensor Fusion']
  },
  {
    id: 'fullstack-proficiency',
    title: 'Full-Stack Engineering Proficiency',
    target: 'End-to-End Resilient Web Architecture',
    status: 'In Progress',
    progress: 62,
    description: 'Mastering the entire web software lifecycle: relational schema design in MySQL, reactive component architecture in React & TypeScript, tokenized styling with Tailwind CSS, and reliable deployment on Vercel.',
    milestones: [
      { name: 'Semantic HTML5 & Responsive CSS Layout Mastery', completed: true },
      { name: 'Component State & Props Architecture with React', completed: true },
      { name: 'Relational Schema Normalization & Complex SQL', completed: true },
      { name: 'Robust Authentication & Backend API Integration', completed: false }
    ],
    keyDisciplines: ['React 19', 'TypeScript', 'MySQL DBMS', 'Tailwind CSS', 'Vercel']
  }
];
