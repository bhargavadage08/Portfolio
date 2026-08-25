from sqlalchemy.orm import Session
from models import ProjectModel, SkillModel, ExperienceModel

INITIAL_PROJECTS = [
    {
        "id": "ai-analytics-hub",
        "title": "OmniAnalytics AI Hub",
        "category": "Full Stack",
        "description": "Real-time data visualization platform powered by Machine Learning insights, interactive charting dashboards, and automated alert notifications.",
        "tags": ["React", "TypeScript", "Node.js", "Tailwind CSS", "Python"],
        "featured": True,
        "github_url": "https://github.com",
        "live_url": "https://example.com",
        "highlights": [
            "Built responsive chart widgets processing 10k+ data events/second",
            "Implemented JWT & OAuth2 authentication flow with role-based access",
            "Optimized client bundle size by 40% using Vite code splitting"
        ]
    },
    {
        "id": "nexus-dev-platform",
        "title": "Nexus Developer Workspace",
        "category": "Web Apps",
        "description": "Collaborative browser-based developer workspace featuring real-time code execution, syntax highlighting, and team snippet sharing.",
        "tags": ["React", "Vite", "WebSockets", "Express", "Tailwind"],
        "featured": True,
        "github_url": "https://github.com",
        "live_url": "https://example.com",
        "highlights": [
            "Integrated WebSocket connection for instantaneous code sync",
            "Designed dark-mode UI with custom glassmorphism components",
            "Achieved 99+ Lighthouse performance & accessibility scores"
        ]
    },
    {
        "id": "cloud-monitoring-engine",
        "title": "CloudPulse Infrastructure Monitor",
        "category": "Cloud / DevOps",
        "description": "Lightweight cloud infrastructure monitor with custom metric alerts, server telemetry stats, and automated error tracking.",
        "tags": ["Next.js", "PostgreSQL", "Docker", "AWS", "Chart.js"],
        "featured": True,
        "github_url": "https://github.com",
        "live_url": "https://example.com",
        "highlights": [
            "Created custom topology map viewer using SVG & D3.js",
            "Built RESTful microservice API endpoints with rate limiting",
            "Configured multi-stage CI/CD pipelines with GitHub Actions"
        ]
    }
]

INITIAL_SKILLS = [
    {"name": "React / Next.js", "category": "frontend", "level": 95, "icon": "Code2"},
    {"name": "TypeScript / JS (ES6+)", "category": "frontend", "level": 90, "icon": "FileCode"},
    {"name": "Tailwind CSS / HTML5", "category": "frontend", "level": 95, "icon": "Palette"},
    {"name": "Python / FastAPI", "category": "backend", "level": 90, "icon": "Server"},
    {"name": "Node.js / Express", "category": "backend", "level": 88, "icon": "Cpu"},
    {"name": "PostgreSQL / SQLite", "category": "backend", "level": 85, "icon": "Database"},
    {"name": "Docker & Kubernetes", "category": "devops", "level": 82, "icon": "Container"},
    {"name": "Git & CI/CD Pipelines", "category": "devops", "level": 90, "icon": "GitBranch"},
]

INITIAL_EXPERIENCES = [
    {
        "role": "Senior Full Stack Engineer",
        "company": "Apex Tech Labs",
        "period": "2023 - Present",
        "description": "Leading frontend architecture and FastAPI/Node.js microservices development for high-traffic SaaS products.",
        "achievements": [
            "Architected modern React single-page application serving 100k+ monthly active users",
            "Mentored team of 4 junior developers and standardized code review practices",
            "Reduced page load latency by 35% through SSR and targeted caching"
        ]
    },
    {
        "role": "Frontend Developer",
        "company": "Innovate Digital Solution",
        "period": "2021 - 2023",
        "description": "Developed responsive web interfaces, reusable design system components, and client-side data stores.",
        "achievements": [
            "Built component library used across 6 company web applications",
            "Collaborated with product designers to implement accessibility standards (WCAG AAA)"
        ]
    }
]

def seed_database(db: Session):
    # Seed projects if empty
    if db.query(ProjectModel).count() == 0:
        for item in INITIAL_PROJECTS:
            db.add(ProjectModel(**item))
    
    # Seed skills if empty
    if db.query(SkillModel).count() == 0:
        for item in INITIAL_SKILLS:
            db.add(SkillModel(**item))
            
    # Seed experiences if empty
    if db.query(ExperienceModel).count() == 0:
        for item in INITIAL_EXPERIENCES:
            db.add(ExperienceModel(**item))
            
    db.commit()
