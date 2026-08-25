from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from database import get_db
from models import ProjectModel, SkillModel, ExperienceModel
from schemas import ProjectResponse, SkillResponse, ExperienceResponse, PortfolioSummaryResponse

router = APIRouter(prefix="/api", tags=["Portfolio Data"])

@router.get("/portfolio", response_model=PortfolioSummaryResponse)
def get_portfolio_summary(db: Session = Depends(get_db)):
    """
    Get full portfolio content (Personal info, statistics, skills, projects, work experience).
    """
    projects = db.query(ProjectModel).all()
    skills = db.query(SkillModel).all()
    experiences = db.query(ExperienceModel).all()

    # Convert skill objects using SkillResponse Pydantic validation
    skills_converted = [SkillResponse.model_validate(s) for s in skills]

    # Group skills by category
    skills_grouped = {
        "frontend": [s for s in skills_converted if s.category == "frontend"],
        "backend": [s for s in skills_converted if s.category == "backend"],
        "devops": [s for s in skills_converted if s.category == "devops"],
    }

    return {
        "personal": {
            "name": "Alex Dev",
            "title": "Full Stack Engineer & UI/UX Craftsman",
            "tagline": "Building scalable web applications, sleek user interfaces, and robust cloud services.",
            "bio": "Passionate software engineer specializing in modern JavaScript/TypeScript ecosystems, cloud-native architectures, and responsive web applications.",
            "location": "San Francisco, CA (Open to Remote)",
            "status": "Available for new projects & roles",
            "email": "alex.dev@example.com",
            "github": "https://github.com",
            "linkedin": "https://linkedin.com",
            "twitter": "https://twitter.com",
        },
        "stats": [
            {"label": "Years Experience", "value": "4+"},
            {"label": "Projects Completed", "value": "25+"},
            {"label": "Technologies Mastered", "value": "18+"},
            {"label": "Code Commits", "value": "3,400+"}
        ],
        "skills": skills_grouped,
        "projects": [ProjectResponse.model_validate(p) for p in projects],
        "experiences": [ExperienceResponse.model_validate(e) for e in experiences]
    }

@router.get("/projects", response_model=List[ProjectResponse])
def get_projects(
    category: Optional[str] = Query(None, description="Filter by category e.g., 'Full Stack'"),
    db: Session = Depends(get_db)
):
    """
    Retrieve project showcase entries, optionally filtered by category.
    """
    query = db.query(ProjectModel)
    if category:
        query = query.filter(ProjectModel.category == category)
    return query.all()

@router.get("/skills", response_model=List[SkillResponse])
def get_skills(
    category: Optional[str] = Query(None, description="Filter skills e.g., 'frontend', 'backend', 'devops'"),
    db: Session = Depends(get_db)
):
    """
    Retrieve skills list.
    """
    query = db.query(SkillModel)
    if category:
        query = query.filter(SkillModel.category == category)
    return query.all()

@router.get("/experiences", response_model=List[ExperienceResponse])
def get_experiences(db: Session = Depends(get_db)):
    """
    Retrieve career timeline history.
    """
    return db.query(ExperienceModel).all()
