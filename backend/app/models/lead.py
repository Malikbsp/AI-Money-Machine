from sqlalchemy import Column, Integer, String

from app.database.database import Base


class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)

    clinic_name = Column(String, nullable=False)

    website = Column(String)

    email = Column(String)

    phone = Column(String)

    state = Column(String)

    status = Column(String, default="New")