from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.dashboard import DashboardStats

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
def get_stats(db: Session = Depends(get_db)):
    stats = db.query(DashboardStats).first()

    if not stats:
        stats = DashboardStats(
            revenue=0,
            leads=0,
            emails=0,
            agents=6
        )
        db.add(stats)
        db.commit()
        db.refresh(stats)

    return {
        "revenue": stats.revenue,
        "leads": stats.leads,
        "emails": stats.emails,
        "agents": stats.agents,
    }


@router.get("/system")
def system():
    return {
        "backend": "Operational",
        "database": "Operational",
        "api": "Operational",
        "ai": "Operational",
    }