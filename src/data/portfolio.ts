export interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  technologies: string[]
  category: 'Desktop' | 'Web & SaaS' | 'Mobile' | 'Backend'
  github?: string
  link?: string
}

export interface Reference {
  name: string
  role: string
  organization: string
  phone?: string
  email?: string
}

export interface ExperienceItem {
  id: number
  title: string
  company: string
  period: string
  location: string
  type?: string
  description: string[]
  technologies: string[]
}

export const personalInfo = {
  name: "Alexandre Kambale Alimasi",
  title: "Full-Stack & Mobile Software Developer",
  email: "alexandrealimasil@gmail.com",
  phones: [
    "+250 782 386 948",
    "+243 972 351 127",
    "+243 801 546 685"
  ],
  phone: "+250 782 386 948",
  location: "Gisenyi, Rwanda",
  github: "https://github.com/alexandrealimasi",
  linkedin: "https://www.linkedin.com/in/alexandre-alimasi-a764981a1/",
  bio: "Full-Stack and Mobile Software Developer with a Bachelor's degree in Computer Science and professional experience developing web applications, mobile applications, desktop software, and digital solutions. Experienced in building cross-platform applications using Flutter and React Native, developing frontend interfaces with React.js and Vue.js, and building backend services using Node.js, NestJS, Python, and Flask. Currently working independently with clients to deliver customized, scalable digital solutions with clean code that solve real-world problems."
}

export const workExperience: ExperienceItem[] = [
  {
    id: 1,
    title: "Freelance Full-Stack & Software Developer",
    company: "Self-Employed",
    period: "2026 – Present",
    location: "Remote",
    type: "Contract / Freelance",
    description: [
      "Design, develop, and maintain custom websites and web applications for clients.",
      "Build cross-platform mobile applications for Android and iOS.",
      "Develop desktop applications and customized software solutions.",
      "Design and integrate backend services, REST APIs, and databases.",
      "Translate business requirements into functional and scalable digital products.",
      "Troubleshoot, maintain, and optimize existing applications.",
      "Manage software projects end-to-end from requirements analysis through development and deployment."
    ],
    technologies: ["Flutter", "React.js", "Node.js", "Electron", "REST APIs", "Database Systems"]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "TripHoppa",
    period: "March 2025 – February 2026",
    location: "Remote",
    type: "Full-time",
    description: [
      "Developed and maintained web and mobile application features.",
      "Implemented new software functionalities and performance improvements.",
      "Integrated frontend and backend components seamlessly.",
      "Identified, debugged, and resolved complex technical issues.",
      "Improved application performance, reliability, and code quality while collaborating remotely with the team."
    ],
    technologies: ["Flutter", "React Native", "Web Development", "API Integration"]
  },
  {
    id: 3,
    title: "Mobile Developer",
    company: "VibesLinks",
    period: "March 2025 – July 2025",
    location: "Remote",
    type: "Part-time",
    description: [
      "Developed and maintained mobile application features using Flutter.",
      "Implemented user interface components and key application functionalities.",
      "Troubleshot technical issues and improved application performance and responsiveness.",
      "Contributed to core application maintenance and feature releases."
    ],
    technologies: ["Flutter", "Dart", "Mobile UI", "Performance Optimization"]
  },
  {
    id: 4,
    title: "Mobile Developer",
    company: "Piyata",
    period: "December 2023 – March 2025",
    location: "Remote",
    type: "Full-time",
    description: [
      "Developed and maintained cross-platform mobile applications using Flutter.",
      "Implemented responsive mobile application functionalities and state management.",
      "Developed and integrated backend services using Python and Flask.",
      "Identified and resolved software bugs, boosting application stability and maintainability."
    ],
    technologies: ["Flutter", "Python", "Flask", "REST APIs", "Cross-Platform"]
  },
  {
    id: 5,
    title: "Database Administrator / IT Assistant",
    company: "Médecins Sans Frontières (MSF)",
    period: "2024 – 2025",
    location: "Democratic Republic of the Congo",
    type: "Professional Experience",
    description: [
      "Supported database administration and information management activities.",
      "Assisted with IT operations, hardware/network systems, and technical troubleshooting.",
      "Contributed to maintaining reliable digital systems and robust data processes for humanitarian operations."
    ],
    technologies: ["Database Administration", "Information Systems", "IT Support", "Data Management"]
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "Sunet Congo",
    period: "January 2021 – December 2023",
    location: "Goma, Democratic Republic of the Congo",
    type: "Full-time",
    description: [
      "Developed and maintained mobile and web application solutions.",
      "Worked on frontend development and backend integration.",
      "Implemented application features using modern technologies including Vue.js and Node.js.",
      "Supported ongoing software improvements and technical troubleshooting."
    ],
    technologies: ["Vue.js", "Node.js", "REST APIs", "Mobile Integration"]
  },
  {
    id: 7,
    title: "Mobile Developer",
    company: "Updev DRC",
    period: "March 2020 – May 2021",
    location: "Goma, Democratic Republic of the Congo",
    type: "Full-time",
    description: [
      "Participated in mobile application development using Flutter.",
      "Developed user-facing application features and interactive interfaces.",
      "Contributed to backend integration and software maintenance.",
      "Identified and resolved technical issues and performance bottlenecks."
    ],
    technologies: ["Flutter", "Node.js", "Dart", "Mobile Development"]
  }
]

export const projects: Project[] = [
  {
    id: 1,
    title: "VideoGrabber Desktop",
    subtitle: "Media Analysis & Download Management Utility",
    description: "Windows desktop application concept engineered for high-performance video and audio downloading. Features media stream analysis, download queue management, format/resolution selection, and audio extraction.",
    technologies: ["Electron", "React", "TypeScript", "yt-dlp", "FFmpeg"],
    category: "Desktop"
  },
  {
    id: 2,
    title: "Alex Shop",
    subtitle: "Retail & Service Management SaaS Application",
    description: "Full-featured retail and service management SaaS platform. Delivers secure inventory tracking, sales analytics, POS workflow, and role-based access control with robust session management.",
    technologies: ["React", "TypeScript", "Vite", "Express", "MongoDB", "JWT Auth"],
    category: "Web & SaaS"
  },
  {
    id: 3,
    title: "Tisa Groupe Mobile",
    subtitle: "Offline-First Enterprise Hardware & POS Solution",
    description: "Flutter-based enterprise mobile business application. Integrates with a Laravel backend API and leverages SQLite for offline-first resilience, paired with direct Sunmi V3 POS hardware integration.",
    technologies: ["Flutter", "Dart", "Laravel API", "SQLite", "Sunmi V3 Hardware"],
    category: "Mobile"
  },
  {
    id: 4,
    title: "Eclair Monde",
    subtitle: "Web Platform & Scalable Backend Services",
    description: "Modern web platform with a scalable, modular backend architecture developed using Node.js technologies, powering high-throughput client communications and content management.",
    technologies: ["Node.js", "REST APIs", "TypeScript", "Express", "MongoDB"],
    category: "Backend",
    github: "https://github.com/alexandrealimasi"
  }
]

export const skills = {
  mobile: ["Flutter", "Dart", "React Native"],
  frontend: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  backend: ["Node.js", "NestJS", "Python", "Flask"],
  desktop: ["Electron", "React", "TypeScript"],
  database: ["MongoDB", "MySQL", "SQLite", "Firebase"],
  competencies: [
    "REST API Development & Integration",
    "Software Architecture",
    "Application Debugging & Testing",
    "Software Maintenance & Optimization",
    "Technical Documentation",
    "Requirements Analysis"
  ]
}

export const education = {
  degree: "Bachelor's Degree in Computer Science (Computer Engineering)",
  institution: "Université Libre de Kigali (ULK)",
  period: "Graduated: 2020",
  location: "Kigali, Rwanda"
}

export const training = [
  {
    program: "SISI Vijana Training Programme",
    organization: "Parlement des Jeunes de Goma & CAIRE International",
    year: "2015",
    focus: "Gender Inequality, Youth Empowerment & Leadership"
  }
]

export const communityAndEngagement = [
  {
    role: "Member / Communication & Organization Assistant",
    organization: "Parlement des Jeunes de Goma",
    period: "June 2016 – February 2025"
  },
  {
    role: "Database Administrator / IT Assistant",
    organization: "Médecins Sans Frontières (MSF)",
    period: "2024 – 2025"
  },
  {
    role: "Computer Training Facilitator",
    organization: "ELOHIM Church, Goma",
    period: "2018 – 2020"
  },
  {
    role: "Community Mobilizer – Cancer Awareness",
    organization: "Fondation Bomoko",
    period: "Community Outreach"
  },
  {
    role: "Computer Training Facilitator",
    organization: "CRF",
    period: "Vocational IT Training"
  }
]

export const references: Reference[] = [
  {
    name: "Justin Muritsi",
    role: "President",
    organization: "Parlement des Jeunes de Goma",
    phone: "+243 975 265 028"
  },
  {
    name: "Promesse Niyibiz",
    role: "President",
    organization: "TripHoppa",
    email: "promesseca@gmail.com",
    phone: "+250 788 474 009"
  },
  {
    name: "Patern Iradukunda",
    role: "President",
    organization: "Piyata",
    email: "iradukundapaterne1@gmail.com",
    phone: "+1 585 491 4994"
  },
  {
    name: "Jacqueline Mukanda",
    role: "President",
    organization: "CRF",
    email: "mukandajaky@gmail.com"
  }
]

export const languages = [
  { name: "French", level: "Fluent / Professional" },
  { name: "English", level: "Fluent / Professional" },
  { name: "Swahili", level: "Native / Fluent" }
]

export const interests = [
  "Full-Stack Development",
  "Mobile Application Development",
  "Web Development",
  "Desktop Software Engineering",
  "Database Systems",
  "Software Architecture",
  "Digital Innovation"
]
