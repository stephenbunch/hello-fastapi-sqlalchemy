import uuid
from typing import Optional
from pydantic import BaseModel


class Todo(BaseModel):
    id: uuid.UUID
    description: str
    completed: bool

    class Config:
        orm_mode = True


class TodoValues(BaseModel):
    description: Optional[str]
    completed: Optional[bool]


class TodoCreate(TodoValues):
    description: str


class TodoPatch(TodoValues):
    pass
