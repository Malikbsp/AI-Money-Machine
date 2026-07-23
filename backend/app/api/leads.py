from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.lead import Lead

router = APIRouter(
    prefix="/api/leads",
    tags=["Leads"]
)


@router.get("/")
def get_leads(db: Session = Depends(get_db)):
    leads = db.query(Lead).all()

    return [
        {
            "id": lead.id,
            "clinic_name": lead.clinic_name,
            "website": lead.website,
            "email": lead.email,
            "phone": lead.phone,
            "state": lead.state,
            "status": lead.status,
        }
        for lead in leads
    ]


@router.post("/")
def create_lead(data: dict, db: Session = Depends(get_db)):
    lead = Lead(
        clinic_name=data.get("clinic_name"),
        website=data.get("website"),
        email=data.get("email"),
        phone=data.get("phone"),
        state=data.get("state"),
        status=data.get("status", "New"),
    )

    db.add(lead)
    db.commit()
    db.refresh(lead)

    return {
        "message": "Lead created successfully",
        "id": lead.id,
    }