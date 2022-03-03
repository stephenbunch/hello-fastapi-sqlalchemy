from typing import List
from fastapi import APIRouter, Depends, HTTPException, Query
from app.schemas import todo as todo_schemas
from app.api import deps

from app.models.todo import Todo
from sqlalchemy.orm import Session

router = APIRouter()


@router.get("/", response_model=List[todo_schemas.Todo], operation_id="get_todos")
def get_todos(db: Session = Depends(deps.get_db)):
    todos = [todo_schemas.Todo.from_orm(todo) for todo in db.query(Todo)]
    return todos


@router.get("/{id}", response_model=todo_schemas.Todo, operation_id="get_todo")
def get_todo(id: str, db: Session = Depends(deps.get_db)):
    todo = db.query(Todo).filter(Todo.id == id).first()

    if todo is None:
        raise HTTPException(404)

    return todo_schemas.Todo.from_orm(todo)


@router.post("/", operation_id="create_todo")
def create_todo(
    input: todo_schemas.TodoCreate,
    db: Session = Depends(deps.get_db),
):
    todo = Todo(description=input.description, completed=input.completed)

    db.add(todo)
    db.commit()
    db.refresh(todo)

    return todo_schemas.Todo.from_orm(todo)


@router.patch("/{id}", operation_id="patch_todo")
def patch_todo(
    id: str,
    input: todo_schemas.TodoPatch,
    db: Session = Depends(deps.get_db),
):
    todo = db.query(Todo).filter(Todo.id == id).first()

    if todo is None:
        raise HTTPException(404)

    if input.completed is not None:
        todo.completed = input.completed
    if input.description is not None:
        todo.description = input.description

    db.add(todo)
    db.commit()

    return todo_schemas.Todo.from_orm(todo)


@router.patch("/", response_model=List[todo_schemas.Todo], operation_id="patch_todos")
def patch_todos(
    input: todo_schemas.TodoPatch,
    completed: bool = Query(None),
    db: Session = Depends(deps.get_db),
):
    query = db.query(Todo)
    if completed is not None:
        query = query.filter(Todo.completed == completed)

    update = {}
    if input.completed is not None:
        update[Todo.completed] = input.completed
    if input.description is not None:
        update[Todo.description] = input.description

    query.update(update)
    db.commit()

    return [todo_schemas.Todo.from_orm(todo) for todo in query]


@router.delete("/", operation_id="delete_todos")
def delete_todos(completed: bool = Query(None), db: Session = Depends(deps.get_db)):
    query = db.query(Todo)

    if completed is not None:
        query = query.filter(Todo.completed == completed)

    query.delete()
    db.commit()


@router.delete("/{id}", operation_id="delete_todo")
def delete_todo(id: str, db: Session = Depends(deps.get_db)):
    db.query(Todo).filter(Todo.id == id).delete()
    db.commit()
