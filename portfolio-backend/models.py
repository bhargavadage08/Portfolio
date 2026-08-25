import datetime
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, JSON
from database import Base

class ContactMessageModel(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(120), nullable=False, index=True)
    subject = Column(String(200), nullable=True)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    is_read = Column(Boolean, default=False)

class ProjectModel(Base):
    __tablename__ = "projects"

    id = Column(String(50), primary_key=True, index=True)
    title = Column(String(150), nullable=False)
    category = Column(String(50), nullable=False)
    description = Column(Text, nullable=False)
    tags = Column(JSON, nullable=False)  # List of string tags
    featured = Column(Boolean, default=False)
    github_url = Column(String(255), nullable=True)
    live_url = Column(String(255), nullable=True)
    highlights = Column(JSON, nullable=True)  # List of string bullet points

class SkillModel(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    category = Column(String(50), nullable=False)  # frontend, backend, devops
    level = Column(Integer, nullable=False)  # 0 to 100
    icon = Column(String(50), nullable=False)

class ExperienceModel(Base):
    __tablename__ = "experiences"

    id = Column(Integer, primary_key=True, index=True)
    role = Column(String(150), nullable=False)
    company = Column(String(150), nullable=False)
    period = Column(String(100), nullable=False)
    description = Column(Text, nullable=False)
    achievements = Column(JSON, nullable=False)  # List of strings
