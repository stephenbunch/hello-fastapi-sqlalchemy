import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from env import load_localenv

load_localenv()

# Set future=True to make use of 2.0 style usage.
# https://docs.sqlalchemy.org/en/14/tutorial/engine.html
engine = create_engine(os.environ["DATABASE_URL"], future=True)

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine)
