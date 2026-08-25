export const PORTFOLIO_DATA = {
  personal: {
    name: "Alex Dev",
    title: "Full Stack Engineer & UI/UX Craftsman",
    tagline: "Building scalable web applications, sleek user interfaces, and robust cloud services.",
    bio: "Passionate software engineer specializing in modern JavaScript/TypeScript ecosystems, cloud-native architectures, and responsive web applications. Focused on writing clean, maintainable code and delivering exceptional user experiences.",
    location: "San Francisco, CA (Open to Remote)",
    status: "Available for new projects & roles",
    email: "alex.dev@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Technologies Mastered", value: "18+" },
    { label: "Code Commits", value: "3,400+" }
  ],
  skills: {
    frontend: [
      { name: "React / Next.js", level: 95, icon: "Code2" },
      { name: "TypeScript / JS (ES6+)", level: 90, icon: "FileCode" },
      { name: "Tailwind CSS / HTML5", level: 95, icon: "Palette" },
      { name: "Redux / Zustand", level: 85, icon: "Layers" },
      { name: "Vue.js", level: 75, icon: "Component" }
    ],
    backend: [
      { name: "Node.js / Express", level: 90, icon: "Server" },
      { name: "Python / FastAPI", level: 85, icon: "Cpu" },
      { name: "REST APIs & GraphQL", level: 92, icon: "Network" },
      { name: "PostgreSQL / MongoDB", level: 88, icon: "Database" },
      { name: "Redis Caching", level: 80, icon: "Zap" }
    ],
    devops: [
      { name: "Docker & Kubernetes", level: 82, icon: "Container" },
      { name: "AWS Services", level: 80, icon: "Cloud" },
      { name: "Git & GitHub Actions", level: 92, icon: "GitBranch" },
      { name: "Vite / Webpack", level: 88, icon: "Wrench" }
    ]
  },
  projects: [
    {
      id: "ai-analytics-hub",
      title: "OmniAnalytics AI Hub",
      category: "Full Stack",
      description: "Real-time data visualization platform powered by Machine Learning insights, interactive charting dashboards, and automated alert notifications.",
      tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Python"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Built responsive chart widgets processing 10k+ data events/second",
        "Implemented JWT & OAuth2 authentication flow with role-based access",
        "Optimized client bundle size by 40% using Vite code splitting"
      ]
    },
    {
      id: "nexus-dev-platform",
      title: "Nexus Developer Workspace",
      category: "Web Apps",
      description: "Collaborative browser-based developer workspace featuring real-time code execution, syntax highlighting, and team snippet sharing.",
      tags: ["React", "Vite", "WebSockets", "Express", "Tailwind"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Integrated WebSocket connection for instantaneous code sync",
        "Designed dark-mode UI with custom glassmorphism components",
        "Achieved 99+ Lighthouse performance & accessibility scores"
      ]
    },
    {
      id: "cloud-monitoring-engine",
      title: "CloudPulse Infrastructure Monitor",
      category: "Cloud / DevOps",
      description: "Lightweight cloud infrastructure monitor with custom metric alerts, server telemetry stats, and automated error tracking.",
      tags: ["Next.js", "PostgreSQL", "Docker", "AWS", "Chart.js"],
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Created custom topology map viewer using SVG & D3.js",
        "Built RESTful microservice API endpoints with rate limiting",
        "Configured multi-stage CI/CD pipelines with GitHub Actions"
      ]
    },
    {
      id: "stream-hub-app",
      title: "PulseStream Media Manager",
      category: "Web Apps",
      description: "Sleek content management system for digital assets, stream recording indexing, and automated video processing workflows.",
      tags: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Handled asynchronous background video conversion tasks",
        "Designed intuitive drag-and-drop file uploader component"
      ]
    }
  ],
  experiences: [
    {
      role: "Senior Full Stack Engineer",
      company: "Apex Tech Labs",
      period: "2023 - Present",
      description: "Leading frontend architecture and cloud microservices development for high-traffic SaaS products.",
      achievements: [
        "Architected modern React single-page application serving 100k+ monthly active users",
        "Mentored team of 4 junior developers and standardizing code review practices",
        "Reduced page load latency by 35% through SSR and targeted caching"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Innovate Digital Solution",
      period: "2021 - 2023",
      description: "Developed responsive web interfaces, reusable design system components, and client-side data stores.",
      achievements: [
        "Built component library used across 6 company web applications",
        "Collaborated with product designers to implement accessibility standards (WCAG AAA)"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "CodeCraft Systems",
      period: "2020 - 2021",
      description: "Assisted in building REST APIs, bug fixes, automated testing scripts, and database migrations.",
      achievements: [
        "Wrote unit and integration test coverage improving overall test ratio to 85%",
        "Designed internal analytics dashboard for system status tracking"
      ]
    }
  ]
};
