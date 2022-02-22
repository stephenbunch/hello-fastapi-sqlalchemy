import os
from dotenv import load_dotenv
from sqlalchemy import Column, Integer, Boolean, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()
engine = create_engine(os.environ["DATABASE_URL"])

Base = declarative_base()

Session = sessionmaker(bind=engine)


class Todo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String(80), nullable=False, default="")
    completed = Column(Boolean, nullable=False, default=False)


if __name__ == "__main__":
    Base.metadata.create_all(engine)
