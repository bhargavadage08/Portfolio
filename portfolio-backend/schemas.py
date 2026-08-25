from pydantic import BaseModel
from typing import List, Optional, Dict
from datetime import datetime

# Contact Schemas
class ContactMessageCreate(BaseModel):
    name: str
    email: str
    subject: Optional[str] = ""
    message: str

class ContactMessageResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: Optional[str] = None
    message: str
    created_at: datetime
    is_read: bool

    class Config:
        from_attributes = True

# Project Schemas
class ProjectResponse(BaseModel):
    id: str
    title: str
    category: str
    description: str
    tags: List[str]
    featured: bool
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    highlights: Optional[List[str]] = []

    class Config:
        from_attributes = True

# Skill Schemas
class SkillResponse(BaseModel):
    id: int
    name: str
    category: str
    level: int
    icon: str

    class Config:
        from_attributes = True

# Experience Schemas
class ExperienceResponse(BaseModel):
    id: int
    role: str
    company: str
    period: str
    description: str
    achievements: List[str]

    class Config:
        from_attributes = True

# Overall Portfolio Summary Schema
class PortfolioSummaryResponse(BaseModel):
    personal: dict
    stats: List[dict]
    skills: Dict[str, List[SkillResponse]]
    projects: List[ProjectResponse]
    experiences: List[ExperienceResponse]
