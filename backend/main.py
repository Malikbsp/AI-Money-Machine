from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# API Routers
from app.api.dashboard import router as dashboard_router
from app.api.leads import router as leads_router

# Database
from app.database.database import engine

# Models
from app.models.dashboard import DashboardStats
from app.models.lead import Lead

# Create database tables
DashboardStats.metadata.create_all(bind=engine)
Lead.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Money Machine API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routes
app.include_router(dashboard_router)
app.include_router(leads_router)


@app.get("/")
def root():
    return {
        "status": "running",
        "message": "AI Money Machine Backend 🚀"
    }