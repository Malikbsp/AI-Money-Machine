from sqlalchemy import Column, Integer

from app.database.database import Base


class DashboardStats(Base):
    __tablename__ = "dashboard_stats"

    id = Column(Integer, primary_key=True, index=True)

    revenue = Column(Integer, default=0)

    leads = Column(Integer, default=0)

    emails = Column(Integer, default=0)

    agents = Column(Integer, default=6)