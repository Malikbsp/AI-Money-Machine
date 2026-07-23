from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.dashboard import router as dashboard_router

# Database
from app.database.database import engine
from app.models.dashboard import DashboardStats

# Create database tables
DashboardStats.metadata.create_all(bind=engine)

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

# Register API routes
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "status": "running",
        "message": "AI Money Machine Backend 🚀"
    }