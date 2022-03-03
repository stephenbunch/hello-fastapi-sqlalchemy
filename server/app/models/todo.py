import uuid

from sqlalchemy import Column, Boolean, String
from sqlalchemy.dialects.postgresql import UUID

from app.db.base_class import Base


class Todo(Base):
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    description = Column(String(80), nullable=False, default="")
    completed = Column(Boolean, nullable=False, default=False)

    def __init__(self, description: str, completed: bool = False) -> None:
        super().__init__()

        self.description = description
        self.completed = completed
