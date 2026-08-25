from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base, SessionLocal
from seed_data import seed_database
from routers.contact_router import router as contact_router
from routers.portfolio_router import router as portfolio_router

# Initialize Database tables
Base.metadata.create_all(bind=engine)

# Seed DB with default records if empty
db = SessionLocal()
try:
    seed_database(db)
finally:
    db.close()

# Initialize FastAPI App
app = FastAPI(
    title="Portfolio Backend API",
    description="FastAPI backend providing REST endpoints for portfolio projects, skills, and contact form handling.",
    version="1.0.0"
)

# CORS middleware configuration
origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routers
app.include_router(contact_router)
app.include_router(portfolio_router)

@app.get("/")
def root():
    return {
        "status": "online",
        "service": "Portfolio FastAPI Backend",
        "docs": "/docs",
        "health": "/api/health"
    }

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "database": "connected"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
