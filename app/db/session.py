import os
from dotenv import load_dotenv
from sqlalchemy import Column, Integer, Boolean, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()

# Set future=True to make use of 2.0 style usage.
# https://docs.sqlalchemy.org/en/14/tutorial/engine.html
engine = create_engine(os.environ["DATABASE_URL"], future=True)

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)
