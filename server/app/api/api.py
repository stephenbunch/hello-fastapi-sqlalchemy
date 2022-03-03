from fastapi import APIRouter
from app.api.endpoints import todos

router = APIRouter()
router.include_router(todos.router, prefix="/todos")
