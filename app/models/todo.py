from sqlalchemy import Column, Integer, Boolean, String
from app.db.base_class import Base


class Todo(Base):
    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String(80), nullable=False, default="")
    completed = Column(Boolean, nullable=False, default=False)
