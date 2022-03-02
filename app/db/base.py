# Import all the models, so that Base has them before being
# imported by Alembic. See alembic/env.py

from app.db.base_class import Base
from app.models.todo import Todo
