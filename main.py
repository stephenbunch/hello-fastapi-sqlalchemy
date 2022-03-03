from dotenv import load_dotenv
from fastapi import FastAPI
from app.api import api

load_dotenv()

app = FastAPI()
app.include_router(api.router, prefix="/api")


@app.get("/health")
def hello_world():
    return "ok"
